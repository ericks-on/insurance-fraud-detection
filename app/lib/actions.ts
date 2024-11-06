'use server'
import { sql } from "@vercel/postgres"
import { Blacklist, Claim, Policy, User } from "./definitions";


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

export default async function getFraudConfirmedClaims() {
    const claims = (
        await sql<Claim>`
        SELECT * 
        FROM insurance_claims 
        WHERE claim_id IN (
            SELECT claim_id
            FROM fraud_confirmed_claims
        );`);

    return claims.rows as Claim[];
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
    const auto_make = formData.get('auto_make') as string;
    const auto_model = formData.get('auto_model') as string;
    const auto_year = formData.get('auto_year') as string;
    const capital_gain = formData.get('capital_gain') as string;
    const capital_loss = formData.get('capital_loss') as string;
    const months_as_customer = formData.get('months_as_customer') as string;

    // if (
    //     !policy_number || !incident_date || !incident_type || !collision_type ||
    //     !incident_severity || !authorities_contacted || !incident_state || !incident_city ||
    //     !incident_location || !incident_hour_of_day || !number_of_vehicles_involved ||
    //     !property_damage || !bodily_injuries || !witnesses || !police_report_available ||
    //     !total_claim_amount || !injury_claim || !property_claim || !vehicle_claim || !auto_make ||
    //     !auto_model || !auto_year || !capital_gain || !capital_loss || !months_as_customer) {
    //     return "Please fill all the fields";
    // }

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
        auto_make,
        auto_model,
        auto_year: parseInt(auto_year),
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

    const modelData = {
        ...userDetails,
        ...policyDetails,
        ...claimData
    }

    // send request to api
    fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: JSON.stringify(modelData),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => console.log(res.json()));

    return "Claim added successfully";
}

