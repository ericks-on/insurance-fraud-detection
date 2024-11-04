export default function Dashboard() {
    return (
    <div className="w-full">
        <tableau-viz id="tableauViz" style={{width: '100%', height: '100vh'}}       
            src='https://public.tableau.com/views/insuranceclaims_17301997107880/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'      
            toolbar="bottom" hide-tabs>
        </tableau-viz>
        
    </div>
    )
}