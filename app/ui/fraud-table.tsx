import { getFraudSuspectedClaims } from "../lib/actions";

export default async function FraudSuspectedClaimsTable() {
  const claims = await getFraudSuspectedClaims();
  return (
    <div className="w-full max-h-1/2 overflow-auto mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Fraud-Suspected Claims</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-3 px-6 text-left border-b">Claim ID</th>
            <th className="py-3 px-6 text-left border-b">Policy Number</th>
            <th className="py-3 px-6 text-left border-b">Incident Date</th>
            <th className="py-3 px-6 text-left border-b">Incident Type</th>
            <th className="py-3 px-6 text-left border-b">Claim Amount</th>
          </tr>
        </thead>
        <tbody>
          {claims.map( (claim) => (
            <tr key={claim.claim_id}>
              <td className="py-2 px-6 border-b">{claim.claim_id}</td>
              <td className="py-2 px-6 border-b">{claim.policy_number}</td>
              <td className="py-2 px-6 border-b">{claim.incident_date}</td>
              <td className="py-2 px-6 border-b">{claim.incident_type}</td>
              <td className="py-2 px-6 border-b">{claim.total_claim_amount}</td>
            </tr>
          )
          )}
        </tbody>
      </table>
    </div>
  );
  }
  