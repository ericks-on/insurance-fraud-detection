import { format } from "date-fns";
import { getAllClaims, getFraudSuspectedClaims } from "../lib/actions";
import { Claim } from '../lib/definitions';

type AdminCLaim = Claim & {
  fraud_suspected: boolean
}

export default async function ClaimsTable() {
  const claims = await getAllClaims();
  const fraudClaims = await getFraudSuspectedClaims();
  const fraudClaimIds = fraudClaims.map(fraudClaim => fraudClaim.claim_id)
  const adminClaims: AdminCLaim[] = claims.map(claim => ({
    ...claim,
    fraud_suspected: fraudClaimIds.includes(claim.claim_id)
  }))
  return (
    <div className="w-full mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Claims Overview</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-3 px-6 text-left border-b">Claim ID</th>
            <th className="py-3 px-6 text-left border-b">Policy Number</th>
            <th className="py-3 px-6 text-left border-b">Incident Date</th>
            <th className="py-3 px-6 text-left border-b">Incident Type</th>
            <th className="py-3 px-6 text-left border-b">Claim Amount</th>
            <th className="py-3 px-6 text-left border-b">Fraud suspected</th>
          </tr>
        </thead>
        <tbody>
          {adminClaims.map((claim) => (
            <tr key={claim.claim_id}>
              <td className="py-2 px-6 border-b">{claim.claim_id}</td>
              <td className="py-2 px-6 border-b">{claim.policy_number}</td>
              <td className="py-2 px-6 border-b">{format((new Date(claim.incident_date)).toISOString(), 'yyyy-MM-dd')}</td>
              <td className="py-2 px-6 border-b">{claim.incident_type}</td>
              <td className="py-2 px-6 border-b">{claim.total_claim_amount}</td>
              <td className="py-2 px-6 border-b">{claim.fraud_suspected? 'Yes': 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  }
  