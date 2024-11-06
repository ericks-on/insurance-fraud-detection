import {format} from 'date-fns';
import { Policy } from '../lib/definitions';



interface UserPoliciesTableProps {
    policies: Policy[];
}

export default function UserPoliciesTable ({ policies }:UserPoliciesTableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Policy Number</th>
                        <th className="py-3 px-6 text-left">Bind Date</th>
                        <th className="py-3 px-6 text-left">State</th>
                        <th className="py-3 px-6 text-left">CSL</th>
                        <th className="py-3 px-6 text-left">Deductible</th>
                        <th className="py-3 px-6 text-left">Annual Premium</th>
                        <th className="py-3 px-6 text-left">Umbrella Limit</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {policies.map((policy) => (
                        <tr key={policy.policy_number} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6">{policy.policy_number}</td>
                            <td className="py-3 px-6">{format((new Date(policy.policy_bind_date).toISOString()), 'yyyy-MM-dd')}</td>
                            <td className="py-3 px-6">{policy.policy_state}</td>
                            <td className="py-3 px-6">${policy.policy_csl}</td>
                            <td className="py-3 px-6">${policy.policy_deductable.toFixed(2)}</td>
                            <td className="py-3 px-6">${policy.policy_annual_premium.toFixed(2)}</td>
                            <td className="py-3 px-6">${policy.umbrella_limit.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
