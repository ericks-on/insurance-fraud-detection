import { getUser, getUserClaims, getUserPolicies } from "../lib/actions";
import UserPageContent from "../ui/user-page-content";


export default async function UserPage(){

    // Mock user data for the user card
    const user = await getUser('user_1');
    // Mock policies data
    const policies = await getUserPolicies(user.id)

    const policyNumbers = policies.map(policy => policy.policy_number)

    // Mock claims data
    const claims = await getUserClaims(user.id)
    return(
        <UserPageContent user={user} policies={policies} claims={claims} policyNumbers={policyNumbers} />
    )
}