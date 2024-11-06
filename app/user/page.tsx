'use client'
import { useState } from "react";
import ClaimsForm from "../ui/claims-form";
import UserClaimsTable from "../ui/user-claims-table";
import UserInformationCard from "../ui/user-info-card";
import UserPoliciesTable from "../ui/user-policies";
import { getUser, getUserPolicies } from "../lib/actions";


// Mock user data for the user card
const user = await getUser('user_1');

// Mock policies data
const policies = await getUserPolicies('user_1')

// Mock claims data
const claims = [
    {
        claimId: 1,
        policyNumber: 101,
        incidentDate: new Date().toISOString(),
        incidentType: 'Multi-Vehicle collision',
        incidentSeverity: 'Major',
        totalClaimAmount: 5000,
        injuryClaim: 3000,
        propertyClaim: 1500,
        vehicleClaim: 500,
    },
    {
        claimId: 2,
        policyNumber: 102,
        incidentDate: new Date().toISOString(),
        incidentType: 'Vehicle theft',
        incidentSeverity: 'Total Loss - no recovery',
        totalClaimAmount: 12000,
        injuryClaim: 0,
        propertyClaim: 5000,
        vehicleClaim: 7000,
    },
];


export default function UserPage(){
    const [claimFormVisible, setClaimsFormVisible] = useState(false)
    return(
        <div className="flex">
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
                
                {/* User Information Card */}
                <UserInformationCard user={user} claimsVisible={claimFormVisible} setClaimsVisible={setClaimsFormVisible} />
                

                {/* User Policies Table */}
                <h2 className="text-xl font-semibold mt-8 mb-4">Your Insurance Policies</h2>
                <UserPoliciesTable policies={policies} />

                {/* User Claims Table */}
                <h2 className="text-xl font-semibold mt-8 mb-4">Your Insurance Claims</h2>
                <UserClaimsTable claims={claims} />
            </div>
            <ClaimsForm claimsVisible={claimFormVisible}  />
        </div>
    )
}