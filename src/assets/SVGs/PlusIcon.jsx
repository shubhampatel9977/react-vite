import React from 'react';

const PlusIcon = ({ width = 14, height = 14, fill = "white", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 14"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5.69993 7.55384H0.0429688V5.66819H5.69993V0.0112305H7.58558V5.66819H13.2425V7.55384H7.58558V13.2108H5.69993V7.55384Z" fill={fill} />
  </svg>
);

export default PlusIcon;