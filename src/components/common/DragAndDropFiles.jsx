import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import 'tailwindcss/tailwind.css';
import ImageView from '../ui/ImageView';
import UploadImageIcon from '../../assets/SVGs/UploadImageIcon';


const ImageDropZone = ({ setImageData }) => {

  const [image, setImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    // console.log(acceptedFiles);
    setImage(URL.createObjectURL(acceptedFiles[0]));
    setImageData(acceptedFiles[0])
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div
        {...getRootProps()}
        className={`flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-lg cursor-pointer ${isDragActive ? 'border-primary-dark' : 'border-primary-light'
          }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-primary-dark">Drop the image here ...</p>
        ) : (
          <div>
            <div className='flex justify-center'>
              <UploadImageIcon fill={"#116F80"} width={50} height={50} />
            </div>
            <p className="text-primary-light m-auto">Drag & drop image file here, or click to select files</p>
          </div>
        )}
      </div>
      <div className='h-16 w-16 mt-5'>
        {image && (
          <ImageView
            src={image}
            className='w-full h-full object-cover'
          />
        )}
      </div>
    </>
  );
};

export default ImageDropZone;