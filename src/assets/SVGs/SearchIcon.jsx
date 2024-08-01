import React from 'react';

const SearchIcon = ({ width = 24, height = 24, fill = "black", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.8927 13.92L16.9727 17M16.0837 8.581C16.0837 12.768 12.7007 16.162 8.52866 16.162C4.35566 16.162 0.972656 12.768 0.972656 8.582C0.972656 4.393 4.35566 1 8.52766 1C12.7007 1 16.0837 4.394 16.0837 8.581Z" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default SearchIcon;