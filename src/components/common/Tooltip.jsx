import React, { useState } from "react";

function Tooltip({ text, children }) {
    const [visible, setVisible] = useState(false);
    return (
      <div
        className="relative flex items-center"
        onMouseEnter={() => {
          setVisible(true);
        }}
        onMouseLeave={() => {
          setVisible(false);
        }}
      >
        {children}
        {visible && (
          <div className="absolute bottom-full  mb-2 w-max p-2 text-sm text-white bg-primary-400 rounded shadow-lg transform -translate-x-1/2 -left-8">
            {text}
          </div>
        )}
      </div>
    );
}

export default Tooltip;