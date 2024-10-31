import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen flex flex-col justify-between h-screen p-4">
      <div className="flex items-center w-full flex-col">
        <h1 className="text-4xl">Insurance Fraud Detection System</h1>
        <p className="text-sm">Guarding Trust, Detecting Fraud : Protecting Every Claim</p>
      </div>
      {/* tech container */}
      <div></div>
      {/* container of some cards */}
      <div className='flex flex-col gap-4 justify-center w-full md:flex-row'>
        {/* cards */}
        <div className="flex flex-col rounded  border border-gray-100 w-80 shadow">
          <div className="w-full h-32 bg-gray-100 p-2 rounded-t">
            <h2 className="text-2xl max-w-40">Real-Time Fraud Detection</h2>
          </div>
          <div className="w-full h-64 p-2">
            <p>Some text here</p>
          </div>
        </div>
        <div className="flex flex-col rounded  border border-gray-100 w-80 shadow">
          <div className="w-full h-32 bg-gray-100 p-2 rounded-t">
            <h2 className="text-2xl max-w-40">Ai-Powered Predictive Modelling</h2>
          </div>
          <div className="w-full h-64 p-2">
            <p>Some text here</p>
          </div>
        </div>
        <div className="flex flex-col rounded  border border-gray-100 w-80 shadow">
          <div className="w-full h-32 bg-gray-100 p-2 rounded-t">
            <h2 className="text-2xl max-w-40">Seemless Integration</h2>
          </div>
          <div className="w-full h-64 p-2">
            <p>Some text here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
