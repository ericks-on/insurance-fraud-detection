import { format } from 'date-fns';
import React from 'react';

interface Claim {
    claimId: number;
    policyNumber: number;
    incidentDate: string; // You can use Date if preferred
    incidentType: string;
    incidentSeverity: string;
    totalClaimAmount: number;
    injuryClaim: number;
    propertyClaim: number;
    vehicleClaim: number;
}

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
                        <tr key={claim.claimId} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6">{claim.claimId}</td>
                            <td className="py-3 px-6">{claim.policyNumber}</td>
                            <td className="py-3 px-6">{format((new Date(claim.incidentDate).toLocaleDateString()), 'yyyy-MM-dd')}</td>
                            <td className="py-3 px-6">{claim.incidentType}</td>
                            <td className="py-3 px-6">{claim.incidentSeverity}</td>
                            <td className="py-3 px-6">${claim.totalClaimAmount.toFixed(2)}</td>
                            <td className="py-3 px-6">${claim.injuryClaim.toFixed(2)}</td>
                            <td className="py-3 px-6">${claim.propertyClaim.toFixed(2)}</td>
                            <td className="py-3 px-6">${claim.vehicleClaim.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserClaimsTable;
