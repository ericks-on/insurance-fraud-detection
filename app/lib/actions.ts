'user server'
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Claim, Policy, User } from "./definitions";


export async function getUser(username: string) {
    const user = await sql<User>`SELECT * FROM insurance_customers WHERE username = ${username}`;
    return user.rows[0] as User;
}

export async function getUserPolicies(username: string) {
    const policies = await sql<Policy>`SELECT * FROM insurance_policies WHERE username = ${username}`;
    return policies.rows as Policy[];
}

export async function getUserClaims(username: string) {
    const claims = await sql<Claim>`SELECT * FROM insurance_claims WHERE username = ${username}`;
    return claims.rows as Claim[];
}

export async function addUserClaim(formData:FormData) {
    
}

