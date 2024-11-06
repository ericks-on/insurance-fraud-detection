import getFraudConfirmedClaims from "../lib/actions";

export default async function FraudConfirmedTable() {
    const claims = await getFraudConfirmedClaims();

    return (
        <div className="w-full mx-auto max-h-1/2 overflow-auto bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Confirmed Fraud Claims</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                <tr>
                    <th className="py-3 px-6 text-left border-b">Claim ID</th>
                    <th className="py-3 px-6 text-left border-b">Claimant Policy Number</th>
                    <th className="py-3 px-6 text-left border-b">Amount</th>
                </tr>
                </thead>
                <tbody>
                {claims.map((claim) => (
                    <tr key={claim.claim_id}>
                    <td className="py-2 px-6 border-b">{claim.claim_id}</td>
                    <td className="py-2 px-6 border-b">{claim.policy_number}</td>
                    <td className="py-2 px-6 border-b">{claim.total_claim_amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    );
}