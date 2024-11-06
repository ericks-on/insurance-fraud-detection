
import FraudulentClaimsOverview from "@/app/ui/claims-overview";
import ClaimsTable from "@/app/ui/claims-table";
import FraudSuspectedClaimsTable from "@/app/ui/fraud-table";

export default function ClaimsPage(){
    return(
        <div className='flex gap-4 flex-col px-4'>
            <FraudulentClaimsOverview />
            <FraudSuspectedClaimsTable />
            <ClaimsTable /> 
        </div>
    )
}