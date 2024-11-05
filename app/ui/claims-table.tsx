export default function ClaimsTable() {
    return (
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Claims Overview</h1>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-3 px-6 text-left border-b">Claim ID</th>
              <th className="py-3 px-6 text-left border-b">Customer ID</th>
              <th className="py-3 px-6 text-left border-b">Policy Number</th>
              <th className="py-3 px-6 text-left border-b">Incident Date</th>
              <th className="py-3 px-6 text-left border-b">Incident Type</th>
              <th className="py-3 px-6 text-left border-b">Claim Amount</th>
              <th className="py-3 px-6 text-left border-b">Status</th>
              <th className="py-3 px-6 text-left border-b">Fraud Reported</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample Row */}
            <tr>
              <td className="py-2 px-6 border-b">12345</td>
              <td className="py-2 px-6 border-b">987654</td>
              <td className="py-2 px-6 border-b">POL123456</td>
              <td className="py-2 px-6 border-b">2024-11-01</td>
              <td className="py-2 px-6 border-b">Multi-Vehicle Collision</td>
              <td className="py-2 px-6 border-b">$15,000</td>
              <td className="py-2 px-6 border-b">Processing</td>
              <td className="py-2 px-6 border-b">Yes</td>
            </tr>
            {/* Additional rows would be mapped here */}
          </tbody>
        </table>
      </div>
    );
  }
  