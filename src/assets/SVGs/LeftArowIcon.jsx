import React from 'react';

const LeftArowIcon = ({ width = 24, height = 24, fill = "black", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 1024 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill={fill} />
  </svg>
);

export default LeftArowIcon;