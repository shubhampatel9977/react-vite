import React from 'react';

const DeleteIcon = ({ width = 24, height = 24, fill = "black", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.75 21.375C6.75 21.9717 6.98705 22.544 7.40901 22.966C7.83097 23.3879 8.40326 23.625 9 23.625H18C18.5967 23.625 19.169 23.3879 19.591 22.966C20.0129 22.544 20.25 21.9717 20.25 21.375V7.875H6.75V21.375ZM9 10.125H18V21.375H9V10.125ZM17.4375 4.5L16.3125 3.375H10.6875L9.5625 4.5H5.625V6.75H21.375V4.5H17.4375Z"
      fill={fill}
    />
  </svg>
);

export default DeleteIcon;