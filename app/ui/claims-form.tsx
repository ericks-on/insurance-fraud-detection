import clsx from 'clsx';
import React from 'react';

interface ClaimsProps {
  claimsVisible: boolean;
  policyNumbers: string[]
}

export default function ClaimsForm({ claimsVisible, policyNumbers }: ClaimsProps) {
  return (
    <div className={clsx(
      "max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md",
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
              {/* <input type="text" name="policy_number" id="policy_number" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" placeholder="Policy Number" /> */}
              <select name="policy_number" id="policy_number" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100">
                {policyNumbers.map((policyNumber) => (
                  <option key={policyNumber} value={policyNumber}>{policyNumber}</option>
                ))}
              </select>
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
              <label className="block text-sm font-medium text-gray-700" htmlFor="incident_state">Incident State</label>
              <input type="text" name="incident_state" id="incident_state" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" placeholder="State" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="incident_city">Incident City</label>
              <input type="text" name="incident_city" id="incident_city" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" placeholder="City" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="incident_location">Incident Location</label>
              <input type="text" name="incident_location" id="incident_location" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" placeholder="Location" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="incident_hour_of_day">Incident Hour</label>
              <input type="number" name="incident_hour_of_day" id="incident_hour_of_day" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" placeholder="Hour (0-23)" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="number_of_vehicles_involved">Number of Vehicles Involved</label>
              <input type="number" name="number_of_vehicles_involved" id="number_of_vehicles_involved" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="property_damage">Property Damage</label>
              <select name="property_damage" id="property_damage" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="bodily_injuries">Bodily Injuries</label>
              <input type="number" name="bodily_injuries" id="bodily_injuries" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="witnesses">Witnesses</label>
              <input type="number" name="witnesses" id="witnesses" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="police_report_available">Police Report Available</label>
              <select name="police_report_available" id="police_report_available" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
              </select>
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
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="auto_make">Auto Make</label>
              <input type="text" name="auto_make" id="auto_make" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" placeholder="Make" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="auto_model">Auto Model</label>
              <input type="text" name="auto_model" id="auto_model" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" placeholder="Model" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="auto_year">Auto Year</label>
              <input type="number" name="auto_year" id="auto_year" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" placeholder="Year" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="capital_gain">Capital Gain</label>
              <input type="number" name="capital_gain" id="capital_gain" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="capital_loss">Capital Loss</label>
              <input type="number" name="capital_loss" id="capital_loss" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="months_as_customer">Months as Customer</label>
              <input type="number" name="months_as_customer" id="months_as_customer" className="mt-1 block w-full border-gray-300 rounded-md bg-gray-100" />
            </div>
          </div>
        </section>

        {/* Submit Button */}
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700">Submit Claim</button>

      </form>
    </div>
  );
}
