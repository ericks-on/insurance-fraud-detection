'use client'
import { useState } from "react";
import ClaimsForm from "../ui/claims-form";
import UserClaimsTable from "../ui/user-claims-table";
import UserInformationCard from "../ui/user-info-card";
import UserPoliciesTable from "../ui/user-policies";
import { User, Policy, Claim } from '../lib/definitions';
import Link from "next/link";

interface UserPageContentProps {
    user: User;
    policies: Policy[];
    claims: Claim[];
    policyNumbers: string[];
    isBlacklisted: boolean;
}


export default function UserPageContent({user, policies, claims, policyNumbers, isBlacklisted}: UserPageContentProps){
    const [claimFormVisible, setClaimsFormVisible] = useState(false)
    return(
        <div className="flex relative">
            <div className="container mx-auto p-4 relative">
                <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
                
                {/* User Information Card */}
                <UserInformationCard user={user} claimsVisible={claimFormVisible} setClaimsVisible={setClaimsFormVisible} />
                

                {/* User Policies Table */}
                <h2 className="text-xl font-semibold mt-8 mb-4">Your Insurance Policies</h2>
                <UserPoliciesTable policies={policies} />

                {/* User Claims Table */}
                <h2 className="text-xl font-semibold mt-8 mb-4">Your Insurance Claims</h2>
                <UserClaimsTable claims={claims} />
                <Link href="/users">
                        <div className="py-3 px-6 text-center bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition duration-200 absolute top-4 right-4">
                            View all users
                        </div>
                </Link>
            </div>
            <ClaimsForm claimsVisible={claimFormVisible} policyNumbers={policyNumbers} />
            {/* no access screen */}
            <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex items-center justify-center text-red-600" style={{display: isBlacklisted ? 'flex' : 'none'}}>
                <div className="bg-white p-8 rounded-lg shadow-l w-60">
                    <h2 className="text-2xl font-semibold mb-4">Suspicious activity</h2>
                    <p className="text-gray-600">Please contact your administrator for more information</p>  
                    <Link href="/users">
                        <div className="py-3 px-6 text-center bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition duration-200 mt-4">
                            Go back
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}