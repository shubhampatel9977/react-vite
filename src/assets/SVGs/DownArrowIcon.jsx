import React from 'react';

const DownArrowIcon = ({ width = 24, height = 24, fill = "white", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 1 4 4 4-4" />
  </svg>
);

export default DownArrowIcon;
