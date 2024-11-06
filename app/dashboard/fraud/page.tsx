import FraudConfirmedTable from "@/app/ui/fraud-confirmed-table";
import FraudConfirmationForm from "@/app/ui/fraud-reporting-form";
import FraudSuspectedClaimsTable from "@/app/ui/fraud-table";

export default async function FraudPage() {
    return (
        <div className="flex">
            <div className='flex flex-col gap-4 h-full'>
                <FraudConfirmedTable />
                <FraudSuspectedClaimsTable />
            </div>
            <FraudConfirmationForm />
        </div>
    )
}