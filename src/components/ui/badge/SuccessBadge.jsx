import React from "react";

function SuccessBadge({title , className}) {
    return (
        <>
            <p 
                className={`w-fit bg-[#28a745] px-2 rounded text-white text-base font-semibold ${className}`}>
                {title}
            </p>
        </>
    )
};

export default SuccessBadge;