'use client'
import { useEffect } from 'react';

export default function TableauEmbed() {
    useEffect(() => {
        // Dynamically load the Tableau script only on the client side
        const script = document.createElement('script');
        script.src = 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';
        script.type = 'module';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup when component unmounts
        };
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <tableau-viz
                id="tableauViz"
                src='https://public.tableau.com/views/insuranceclaims_17301997107880/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
                toolbar="bottom"
                hide-tabs
                className="w-full h-full"
            ></tableau-viz>
        </div>
    );
}
