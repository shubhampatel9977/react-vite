import React from "react";

function DangerBadge({title , className}) {
    return (
        <>
            <p 
                className={`w-fit bg-[#dc3545] px-2 rounded text-white text-base font-semibold ${className}`}>
                {title}
            </p>
        </>
    )
};

export default DangerBadge;