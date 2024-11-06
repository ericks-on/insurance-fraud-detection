import BlacklistedCustomersTable from "@/app/ui/balcklist-table";
import FraudulentClaimsOverview from "@/app/ui/claims-overview";
import ClaimsTable from "@/app/ui/claims-table";
import FraudConfirmationForm from "@/app/ui/fraud-reporting-form";
import FraudSuspectedClaimsTable from "@/app/ui/fraud-table";

export default function ClaimsPage(){
    return(
        <div className='flex gap-4 flex-col'>
            <FraudConfirmationForm />
            <BlacklistedCustomersTable />
            <FraudulentClaimsOverview />
            <FraudSuspectedClaimsTable />
            <ClaimsTable /> 
        </div>
    )
}