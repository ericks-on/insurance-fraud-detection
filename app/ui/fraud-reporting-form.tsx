'use client'
import { useActionState } from "react";
import { confirmFraudClaim } from "../lib/actions";

export default function FraudConfirmationForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    confirmFraudClaim,
    undefined,
  )
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-700 mb-4 text-center">Confirm Claim Fraud Status</h1>
      <form className="space-y-6" action={formAction}>
        
        {/* Claim ID Input */}
        <div>
          <label htmlFor="claimId" className="block text-sm font-medium text-gray-700">Claim ID</label>
          <input
            type="text"
            id="claimId"
            name="claimId"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter Claim ID"
            required
          />
        </div>

        {/* Fraud Status Select */}
        <div>
          <label htmlFor="fraudStatus" className="block text-sm font-medium text-gray-700">Fraud Status</label>
          <select
            id="fraudStatus"
            name="fraudStatus"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Select Fraud Status</option>
            <option value="fraudulent">Fraudulent</option>
            <option value="not_fraudulent">Not Fraudulent</option>
          </select>
        </div>

        {/* Submit Button */}
        {isPending ? <p className="text-red-500 text-sm">Loading...</p>:
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md"
          >
            Confirm Status
          </button>
        </div>}
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
      </form>
    </div>
  );
  }
  