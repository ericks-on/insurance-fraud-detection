import clsx from 'clsx';
import React from 'react';
interface ClaimsProps {
  claimsVisible: boolean; // To control visibility, can also be used to toggle styles or classes
}
export default function ClaimsForm({claimsVisible}: ClaimsProps) {
    return (
      <div className={clsx(
        "max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md ",
        !claimsVisible && 'hidden'
        )}>
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Insurance Claims Form</h1>
        <form action="#" method="POST" className="space-y-8">
  
  
  
          {/* Policy Information */}
          <section>
            <h2 className="text-lg font-semibold text-gray-600 mb-4">Policy Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="policy_number">Policy Number</label>
                <input type="text" name="policy_number" id="policy_number" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" placeholder="Policy Number" />
              </div>
          
            </div>
          </section>
  
          {/* Incident Information */}
          <section>
            <h2 className="text-lg font-semibold text-gray-600 mb-4">Incident Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="incident_date">Incident Date</label>
                <input type="date" name="incident_date" id="incident_date" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="incident_type">Incident Type</label>
                <select name="incident_type" id="incident_type" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100">
                    <option value="multi_vehicle_collision">Multi-Vehicle Collision</option>
                    <option value="parked_car">Parked Car</option>
                    <option value="single_vehicle_collision">Single-Vehicle Collision</option>
                    <option value="vehicle_theft">Vehicle Theft</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="collision_type">Collision Type</label>
                <select name="collision_type" id="collision_type" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100">
                    <option value="front_collision">Front Collision</option>
                    <option value="rear_collision">Rear Collision</option>
                    <option value="side_collision">Side Collision</option>
                    <option value="not_applicable">Not Applicable</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="incident_severity">Incident Severity</label>
                <select name="incident_severity" id="incident_severity" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100">
                    <option value="trivial">Trivial</option>
                    <option value="minor">Minor</option>
                    <option value="major">Major</option>
                    <option value="total_loss">Total Loss</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="authorities_contacted">Authorities Contacted</label>
                <select name="authorities_contacted" id="authorities_contacted" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100">
                    <option value="fire">Fire</option>
                    <option value="police">Police</option>
                    <option value="ambulance">Ambulance</option>
                    <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="number_of_vehicles_involved">Number of Vehicles Involved</label>
                <input type="number" name="number_of_vehicles_involved" id="number_of_vehicles_involved" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="witnesses">Witnesses</label>
                <input type="number" name="witnesses" id="witnesses" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" />
              </div>
            </div>
          </section>
  
          {/* Claim Information */}
          <section>
            <h2 className="text-lg font-semibold text-gray-600 mb-4">Claim Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="total_claim_amount">Total Claim Amount</label>
                <input type="number" name="total_claim_amount" id="total_claim_amount" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="injury_claim">Injury Claim</label>
                <input type="number" name="injury_claim" id="injury_claim" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="property_claim">Property Claim</label>
                <input type="number" name="property_claim" id="property_claim" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="vehicle_claim">Vehicle Claim</label>
                <input type="number" name="vehicle_claim" id="vehicle_claim" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" />
              </div>
            </div>
          </section>
  
          {/* Submit Button */}
          <div className="mt-8">
            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">Submit Claim</button>
          </div>
  
        </form>
      </div>
    );
  }
  