import React from 'react';

const RightArowIcon = ({ width = 18, height = 18, fill = "black", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 1024 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill={fill} />
  </svg>
);

export default RightArowIcon;