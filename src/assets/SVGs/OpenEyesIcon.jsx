import React from 'react';

const OpenEyesIcon = ({ width = 24, height = 24, fill = "black", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill={fill} fillRule="evenodd" d="M1 12c2.028-4.152 6.192-7 11-7s8.972 2.848 11 7c-2.028 4.152-6.192 7-11 7s-8.972-2.848-11-7m11 3.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7" />
  </svg>
);

export default OpenEyesIcon;
