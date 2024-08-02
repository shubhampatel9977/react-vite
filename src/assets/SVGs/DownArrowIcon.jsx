import React from 'react';

const DownArrowIcon = ({ width = 24, height = 24, fill = "white", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill={fill} d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05a2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17" />
  </svg>
);

export default DownArrowIcon;
