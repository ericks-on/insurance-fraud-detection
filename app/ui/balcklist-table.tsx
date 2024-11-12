import { format } from "date-fns";
import { getBlacklist } from "../lib/actions";

export default async function BlacklistedCustomersTable() {
    const blacklistedCustomers = await getBlacklist();
  
    return (
      <div className="overflow-x-auto">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Blacklisted Customers</h1>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left font-semibold text-gray-600">Customer ID</th>
              <th className="py-3 px-6 text-left font-semibold text-gray-600">Reason for Blacklist</th>
              <th className="py-3 px-6 text-left font-semibold text-gray-600">Blacklist Date</th>
            </tr>
          </thead>
          <tbody>
            {blacklistedCustomers.map((customer) => (
              <tr key={customer.id} className="border-t border-gray-200">
                <td className="py-3 px-6">{customer.customer_id}</td>
                <td className="py-3 px-6">{customer.reason}</td>
                <td className="py-3 px-6">{format((new Date(customer.blacklist_date)).toISOString(), 'yyyy-MM-dd')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  