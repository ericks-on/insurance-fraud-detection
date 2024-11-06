import { format } from 'date-fns';
import React from 'react';
import { Claim } from '../lib/definitions';



interface UserClaimsTableProps {
    claims: Claim[];
}

const UserClaimsTable: React.FC<UserClaimsTableProps> = ({ claims }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Claim ID</th>
                        <th className="py-3 px-6 text-left">Policy Number</th>
                        <th className="py-3 px-6 text-left">Incident Date</th>
                        <th className="py-3 px-6 text-left">Incident Type</th>
                        <th className="py-3 px-6 text-left">Severity</th>
                        <th className="py-3 px-6 text-left">Total Claim Amount</th>
                        <th className="py-3 px-6 text-left">Injury Claim</th>
                        <th className="py-3 px-6 text-left">Property Claim</th>
                        <th className="py-3 px-6 text-left">Vehicle Claim</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {claims.map((claim) => (
                        <tr key={claim.claim_id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6">{claim.claim_id}</td>
                            <td className="py-3 px-6">{claim.policy_number}</td>
                            <td className="py-3 px-6">{format((new Date(claim.incident_date).toISOString()), 'yyyy-MM-dd')}</td>
                            <td className="py-3 px-6">{claim.incident_type}</td>
                            <td className="py-3 px-6">{claim.incident_severity}</td>
                            <td className="py-3 px-6">${claim.total_claim_amount}</td>
                            <td className="py-3 px-6">${claim.injury_claim}</td>
                            <td className="py-3 px-6">${claim.property_claim}</td>
                            <td className="py-3 px-6">${claim.vehicle_claim}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserClaimsTable;
