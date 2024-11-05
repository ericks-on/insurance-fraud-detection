// "use client";

// import { TableauViz, Toolbar } from "@tableau/embedding-api";
// import { useEffect, useRef } from "react";

// export default function Dashboard() {
//   const vizContainerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     // Only create the viz on the client side
//     const viz = new TableauViz()

//     viz.src = 'https://public.tableau.com/views/insuranceclaims_17301997107880/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
//     viz.toolbar = Toolbar.Bottom
//     viz.hideTabs = true


//     if (vizContainerRef.current) {
//       vizContainerRef.current.appendChild(viz);
//     }

//     // Cleanup to remove the viz on component unmount
//     // return () => {
//     //   viz.dispose();
//     // };
//   }, []);

//   return (
//     <div className="w-full">
//       <div ref={vizContainerRef} style={{ width: "100%", height: "100vh" }} />
//     </div>
//   );
// }


export default function p(){
    <div></div>
}
