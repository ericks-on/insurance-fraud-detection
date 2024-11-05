export default function BlacklistedCustomersTable() {
    const blacklistedCustomers = [
      {
        id: '1',
        name: 'John Doe',
        policyNumber: 'PN12345',
        reason: 'Multiple fraudulent claims',
        blacklistDate: '2024-01-15',
        location: 'Ohio',
      },
      {
        id: '2',
        name: 'Jane Smith',
        policyNumber: 'PN67890',
        reason: 'False information provided',
        blacklistDate: '2023-11-23',
        location: 'Illinois',
      },
      // Add more entries as needed
    ];
  
    return (
      <div className="overflow-x-auto">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Blacklisted Customers</h1>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left font-semibold text-gray-600">Customer ID</th>
              <th className="py-3 px-6 text-left font-semibold text-gray-600">Name</th>
              <th className="py-3 px-6 text-left font-semibold text-gray-600">Policy Number</th>
              <th className="py-3 px-6 text-left font-semibold text-gray-600">Reason for Blacklist</th>
              <th className="py-3 px-6 text-left font-semibold text-gray-600">Blacklist Date</th>
              <th className="py-3 px-6 text-left font-semibold text-gray-600">Location</th>
            </tr>
          </thead>
          <tbody>
            {blacklistedCustomers.map((customer) => (
              <tr key={customer.id} className="border-t border-gray-200">
                <td className="py-3 px-6">{customer.id}</td>
                <td className="py-3 px-6">{customer.name}</td>
                <td className="py-3 px-6">{customer.policyNumber}</td>
                <td className="py-3 px-6">{customer.reason}</td>
                <td className="py-3 px-6">{customer.blacklistDate}</td>
                <td className="py-3 px-6">{customer.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  