'use client'
import { useState } from "react";
import ClaimsForm from "../ui/claims-form";
import UserClaimsTable from "../ui/user-claims-table";
import UserInformationCard from "../ui/user-info-card";
import UserPoliciesTable from "../ui/user-policies";
import { User, Policy, Claim } from '../lib/definitions';

interface UserPageContentProps {
    user: User;
    policies: Policy[];
    claims: Claim[];
    policyNumbers: string[];
}


export default function UserPageContent({user, policies, claims, policyNumbers}: UserPageContentProps){
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
            <ClaimsForm claimsVisible={claimFormVisible} policyNumbers={policyNumbers} />
        </div>
    )
}