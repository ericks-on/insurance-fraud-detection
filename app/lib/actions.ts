'user server'
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

export async function addUserClaim(formData:FormData) {
    // extracting the data fiellds
    const policy_number = formData.get('policy_number') as string;

    const claimData = {
        policy_number: policy_number,
        incident_date: formData.get('incident_date') as string,
        incident_type: formData.get('incident_type') as string,
        collision_type: formData.get('collision_type') as string,
        incident_severity: formData.get('incident_severity') as string,
        authorities_contacted: formData.get('authorities_contacted') as string,
        incident_state: formData.get('incident_state') as string,
        incident_city: formData.get('incident_city') as string,
        incident_location: formData.get('incident_location') as string,
        incident_hour_of_day: formData.get('incident_hour_of_day') as string,
        number_of_vehicles_involved: formData.get('number_of_vehicles_involved') as string,
        property_damage: formData.get('property_damage') as string,
        bodily_injuries: formData.get('bodily_injuries') as string,
        witnesses: formData.get('witnesses') as string,
        police_report_available: formData.get('police_report_available') as string,
        total_claim_amount: formData.get('total_claim_amount') as string,
        injury_claim: formData.get('injury_claim') as string,
        property_claim: formData.get('property_claim') as string,
        vehicle_claim: formData.get('vehicle_claim') as string,
        auto_make: formData.get('auto_make') as string,
        auto_model: formData.get('auto_model') as string,
        auto_year: formData.get('auto_year') as string,
        capital_gain: formData.get('capital_gain') as string,
        capital_loss: formData.get('capital_loss') as string,
        months_as_customer: formData.get('months_as_customer') as string
    };

    const policy = (
        await sql<Policy>`SELECT * FROM insurance_policies WHERE policy_number = ${policy_number}`
    ).rows[0] as Policy;

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
    console.log(modelData);
}

