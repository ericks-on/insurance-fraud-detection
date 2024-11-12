'use server'
import { sql } from "@vercel/postgres"
import { Blacklist, Claim, FraudConfirmed, Policy, User } from "./definitions";
import { revalidatePath } from "next/cache";


export async function getUser(username: string) {
    const user = await sql<User>`SELECT * FROM insurance_customers WHERE username = ${username}`;
    return user.rows[0] as User;
}

export async function getUserPolicies(userID: number) {
    const policies = await sql<Policy>`SELECT * FROM insurance_policies WHERE customer_id = ${userID}`;
    return policies.rows as Policy[];
}

export async function getUserClaims(id: number) {
    const claims = await sql<Claim>`
        SELECT * 
        FROM insurance_claims 
        WHERE policy_number 
        IN (
            SELECT policy_number
            FROM insurance_policies
            WHERE customer_id = ${id})`;
    return claims.rows as Claim[];
}

export async function getAllClaims() {
    const claims = (await sql<Claim>`SELECT * FROM insurance_claims`);

    return claims.rows as Claim[];
}

export async function getFraudSuspectedClaims() {
    const claims = (
        await sql<Claim>`
        SELECT * 
        FROM insurance_claims 
        WHERE claim_id IN (
            SELECT claim_id
            FROM insurance_fraud
        )
        AND claim_id NOT IN (
            SELECT claim_id
            FROM fraud_confirmed_claims
            WHERE is_fraud = true
        );`);

    return claims.rows as Claim[];
}

export async function getFraudConfirmedClaims() {
    const claims = (
        await sql<Claim>`
        SELECT * 
        FROM insurance_claims 
        WHERE claim_id IN (
            SELECT claim_id
            FROM insurance_fraud
            WHERE is_confirmed = true
        );`);

    return claims.rows as Claim[];
}

export async function addFraudClaim(claim_id: number) {
    await sql`INSERT INTO insurance_fraud (claim_id) VALUES (${claim_id})`;
}

export async function getBlacklist() {
    const balckList = await sql<Blacklist>`SELECT * FROM insurance_blacklist`;
    return balckList.rows as Blacklist[];
}

export async function getPolicy(policy_numer: string) {
    const policy = (
        await sql<Policy>`SELECT * FROM insurance_policies WHERE policy_number = ${policy_numer}`
    ).rows[0] as Policy;

    return policy;
}

async function fetchPrediction(modelData: object) {
    try {
        const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(modelData)
        });

        if (!response.ok) {
            throw new Error(`Server responded with status ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error in fetchPrediction:", error);
        throw error; // Re-throw the error to handle it in the calling function
    }
}



export async function addUserClaim(prevState: string | undefined, formData:FormData) {
    // extracting the data fiellds
    const policy_number = formData.get('policy_number') as string;
    const incident_date = formData.get('incident_date') as string;
    const incident_type = formData.get('incident_type') as string;
    const collision_type = formData.get('collision_type') as string;
    const incident_severity = formData.get('incident_severity') as string;
    const authorities_contacted = formData.get('authorities_contacted') as string;
    const incident_state = formData.get('incident_state') as string;
    const incident_city = formData.get('incident_city') as string;
    const incident_location = formData.get('incident_location') as string;
    const incident_hour_of_day = formData.get('incident_hour_of_day') as string;
    const number_of_vehicles_involved = formData.get('number_of_vehicles_involved') as string;
    const property_damage = formData.get('property_damage') as string;
    const bodily_injuries = formData.get('bodily_injuries') as string;
    const witnesses = formData.get('witnesses') as string;
    const police_report_available = formData.get('police_report_available') as string;
    const total_claim_amount = formData.get('total_claim_amount') as string;
    const injury_claim = formData.get('injury_claim') as string;
    const property_claim = formData.get('property_claim') as string;
    const vehicle_claim = formData.get('vehicle_claim') as string;
    const capital_gain = formData.get('capital_gain') as string;
    const capital_loss = formData.get('capital_loss') as string;
    const months_as_customer = formData.get('months_as_customer') as string;

    if (
        !policy_number || !incident_date || !incident_type || !collision_type ||
        !incident_severity || !authorities_contacted || !incident_state || !incident_city ||
        !incident_location || !incident_hour_of_day || !number_of_vehicles_involved ||
        !property_damage || !bodily_injuries || !witnesses || !police_report_available ||
        !total_claim_amount || !injury_claim || !property_claim || !vehicle_claim || 
        !capital_gain || !capital_loss || !months_as_customer) {
        return "Please fill all the fields";

    }

    let success = false;

    const claimData = {
        policy_number,
        incident_date,
        incident_type,
        collision_type,
        incident_severity,
        authorities_contacted,
        incident_state,
        incident_city,
        incident_location,
        incident_hour_of_day: parseInt(incident_hour_of_day),
        number_of_vehicles_involved: parseInt(number_of_vehicles_involved),
        property_damage,
        bodily_injuries: parseInt(bodily_injuries),
        witnesses: parseInt(witnesses),
        police_report_available,
        total_claim_amount: parseFloat(total_claim_amount),
        injury_claim: parseFloat(injury_claim),
        property_claim: parseFloat(property_claim),
        vehicle_claim: parseFloat(vehicle_claim),
        capital_gain: parseFloat(capital_gain),
        capital_loss: parseFloat(capital_loss),
        months_as_customer: parseInt(months_as_customer)    
    };



    const policy = await getPolicy(policy_number);

    const user = (
        await sql<User>`SELECT * FROM insurance_customers WHERE id = ${policy.customer_id}`
    ).rows[0] as User;

    const {username, password, id, ...userDetails} = user;
    const {customer_id, ...policyDetails} = policy;
    console.log(!username, !password, !id, !customer_id);


    const modelData = {
        ...userDetails,
        ...policyDetails,
        ...claimData
    }

    type modelDataProps = typeof modelData;


    
    // Usage
    const fetchPredictionAndHandleClaim = async (modelData: modelDataProps) => {
        try {
          const data = await fetchPrediction(modelData); // Await the prediction
            if (data) {
                console.log('Prediction:', data);
                if (data.is_fraud === 1) {
                    console.log('Fraud detected');
                    // Add claim pick id then add the claim to the fraud table
                    const query = sql`
                        INSERT INTO insurance_claims (
                        policy_number, incident_date, incident_type, collision_type, incident_severity,
                        authorities_contacted, incident_state, incident_city, incident_location,
                        incident_hour_of_day, number_of_vehicles_involved, property_damage,
                        bodily_injuries, witnesses, police_report_available, total_claim_amount, injury_claim,
                        property_claim, vehicle_claim, capital_gain,
                        capital_loss, months_as_customer
                        ) VALUES (
                        ${claimData.policy_number}, ${claimData.incident_date}, ${claimData.incident_type},
                        ${claimData.collision_type}, ${claimData.incident_severity}, ${claimData.authorities_contacted},
                        ${claimData.incident_state}, ${claimData.incident_city}, ${claimData.incident_location},
                        ${claimData.incident_hour_of_day}, ${claimData.number_of_vehicles_involved}, ${claimData.property_damage},
                        ${claimData.bodily_injuries}, ${claimData.witnesses}, ${claimData.police_report_available},
                        ${claimData.total_claim_amount}, ${claimData.injury_claim}, ${claimData.property_claim},
                        ${claimData.vehicle_claim}, 
                        ${claimData.capital_gain}, ${claimData.capital_loss}, ${claimData.months_as_customer}
                        )
                    `;
                    await query;

                    // get the latest claim id
                    const claim = (
                        await sql<Claim>`SELECT * FROM insurance_claims ORDER BY claim_id DESC LIMIT 1`
                    ).rows[0] as Claim;

                    const claim_id = parseInt(claim.claim_id);

                    // add the claim id to the fraud table
                    await addFraudClaim(claim_id);

                } else {
                    console.log('No fraud detected');
                    // only add the claim to the claims table
                    const query = sql`
                        INSERT INTO insurance_claims (
                        policy_number, incident_date, incident_type, collision_type, incident_severity,
                        authorities_contacted, incident_state, incident_city, incident_location,
                        incident_hour_of_day, number_of_vehicles_involved, property_damage,
                        bodily_injuries, witnesses, police_report_available, total_claim_amount, injury_claim,
                        property_claim, vehicle_claim, capital_gain,
                        capital_loss, months_as_customer
                        ) VALUES (
                        ${claimData.policy_number}, ${claimData.incident_date}, ${claimData.incident_type},
                        ${claimData.collision_type}, ${claimData.incident_severity}, ${claimData.authorities_contacted},
                        ${claimData.incident_state}, ${claimData.incident_city}, ${claimData.incident_location},
                        ${claimData.incident_hour_of_day}, ${claimData.number_of_vehicles_involved}, ${claimData.property_damage},
                        ${claimData.bodily_injuries}, ${claimData.witnesses}, ${claimData.police_report_available},
                        ${claimData.total_claim_amount}, ${claimData.injury_claim}, ${claimData.property_claim},
                        ${claimData.vehicle_claim},
                        ${claimData.capital_gain}, ${claimData.capital_loss}, ${claimData.months_as_customer}
                        )
                    `;
                    await query;
                    success = true;
                }
            }
            } catch (error) {
                console.error('Error during prediction or query:', error);
            }
    };
    
    try {
        await fetchPredictionAndHandleClaim(modelData);
    } catch (error) {
        console.error('Error during prediction or query:', error);
        return "Error during prediction or query";
    }

    revalidatePath('/user?username=' + user.username);
    return success ? 'claim added successfully' : 'error adding claim';
}


export async function confirmFraudClaim(prevState: string | undefined, formData:FormData) {
    const claim_id = formData.get('claimId') as string;
    const fraudStatus = formData.get('fraudStatus') as string;

    if (!claim_id || !fraudStatus) {
        return "Please fill all the fields";
    }

    const is_fraud = fraudStatus === 'fraudulent' ? true : false;
    // first get the id of the claim
    const fraudCase = (
        await sql`SELECT * FROM insurance_fraud WHERE claim_id = ${claim_id}`
    ).rows[0] as FraudConfirmed;

    const fraud_id = parseInt(fraudCase.id);

    // update the fraud table
    await sql`UPDATE insurance_fraud SET is_confirmed = ${is_fraud} WHERE id = ${fraud_id}`;

    // add customer to blacklist
    if (is_fraud) {
        const claim = (
            await sql<Claim>`SELECT * FROM insurance_claims WHERE claim_id = ${claim_id}`
        ).rows[0] as Claim;

        const policy = (
            await sql<Policy>`SELECT * FROM insurance_policies WHERE policy_number = ${claim.policy_number}`
        ).rows[0] as Policy;

        const user = (
            await sql<User>`SELECT * FROM insurance_customers WHERE id = ${policy.customer_id}`
        ).rows[0] as User;

        const blacklistData = {
            customer_id: user.id,
            reason: 'Fraudulent claim',
            blacklist_date: new Date().toISOString()
        };

        await sql`INSERT INTO insurance_blacklist 
        (customer_id, reason, blacklist_date) 
        VALUES (${blacklistData.customer_id}, ${blacklistData.reason}, ${blacklistData.blacklist_date}
        )`;
    }

    revalidatePath('/dashboard/fraud');

}


