import React from 'react';

const ImageView = ({ src, alt, className, width, height, ...rest }) => {
  return <img src={src} alt={alt} className={className} width={width} height={height} {...rest} />;
};

export default ImageView;