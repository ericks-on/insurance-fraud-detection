'user server'
import { sql } from "@vercel/postgres"
import { Claim, Policy, User } from "./definitions";


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

// export async function addUserClaim(formData:FormData) {
    
// }

