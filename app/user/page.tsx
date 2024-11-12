import { getBlacklist, getUser, getUserClaims, getUserPolicies } from "../lib/actions";
import UserPageContent from "../ui/user-page-content";



export default async function UserPage({
    params,
    searchParams,
  }: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
    const {username} =  await searchParams;
    console.log(!params);

    // Fetch data based on username
    if (typeof username !== 'string') {
        throw new Error('Invalid username');
    }
    const user = await getUser(username);
    const policies = await getUserPolicies(user.id);
    const policyNumbers = policies.map(policy => policy.policy_number);
    const claims = await getUserClaims(user.id);

    const blacklistUsers = await getBlacklist();
    const blacklistIds = blacklistUsers.map(user => parseInt(user.customer_id));

    const isBlacklisted = blacklistIds.includes((user.id));

    return (
        <UserPageContent user={user} policies={policies} claims={claims} policyNumbers={policyNumbers} isBlacklisted={isBlacklisted}/>
        
    );
}




// import { getUser, getUserClaims, getUserPolicies } from "../lib/actions";
// import UserPageContent from "../ui/user-page-content";


// export default async function UserPage(username: string) {

//     // Mock user data for the user card
//     const user = await getUser(username);
//     // Mock policies data
//     const policies = await getUserPolicies(user.id)

//     const policyNumbers = policies.map(policy => policy.policy_number)

//     // Mock claims data
//     const claims = await getUserClaims(user.id)
//     return(
//         <UserPageContent user={user} policies={policies} claims={claims} policyNumbers={policyNumbers} />
//     )
// }