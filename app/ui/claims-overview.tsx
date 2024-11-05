export default function FraudulentClaimsOverview() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 - Total Fraud-Suspected Claims */}
        <div className="p-4 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-lg font-semibold text-gray-600">Total Fraud-Suspected Claims</h2>
          <p className="text-2xl font-bold text-red-600">120</p>
        </div>
  
        {/* Card 2 - Percentage of Total Claims as Fraud-Suspected */}
        <div className="p-4 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-lg font-semibold text-gray-600">Percentage of Total Claims as Fraud-Suspected</h2>
          <p className="text-2xl font-bold text-red-600">5%</p>
        </div>
  
        {/* Card 3 - Confirmed Fraud Cases */}
        <div className="p-4 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-lg font-semibold text-gray-600">Confirmed Fraud Cases</h2>
          <p className="text-2xl font-bold text-red-600">45</p>
        </div>
  
        {/* Card 4 - Average Fraudulent Claim Amount */}
        <div className="p-4 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-lg font-semibold text-gray-600">Average Fraudulent Claim Amount</h2>
          <p className="text-2xl font-bold text-red-600">$15,000</p>
        </div>
  
        {/* Card 5 - Fraud Detection Rate */}
        <div className="p-4 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-lg font-semibold text-gray-600">Fraud Detection Rate</h2>
          <p className="text-2xl font-bold text-red-600">75%</p>
        </div>
      </div>
    );
  }
  