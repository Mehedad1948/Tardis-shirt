import { store } from '../ContextProvider';
import { useContext, useEffect, useState } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import { transition, config } from '../Overlay';
import { RiDeleteBinLine } from 'react-icons/ri';

function Controllers() {
  const {
    setImageRotate,
    setImageXPosition,
    setImageYPosition,
    setImageScale,
    color,
    resetChanges,
    uploadedImage,
    setUploadedImage,
  } = useContext(store);

  const [imageName, setImageNmae] = useState('');

  const handleImageUpload = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageDataUrl = event.target.result;
        setUploadedImage(imageDataUrl);
        setImageNmae(file.name);
        // You can also use 'imageDataUrl' to create a Three.js texture
        // For example:
        // const texture = new THREE.TextureLoader().load(imageDataUrl);
        // ... Use the texture in your Three.js logic ...
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
     
      className='fixed sm:absolute z-10 top-auto right-0 sm:bottom-auto bottom-0 sm:top-10
                 sm:left-10 flex flex-col gap-3 p-2 
                sm:p-4 bg-white/30 w-full  pb-14 sm:pb-4
                backdrop-blur-sm rounded-lg sm:w-[250px]
      '
      style={{ border: `1px solid ${color}` }}
    >
      <div className='flex flex-col'>
        <label htmlFor='scale'>اندازه</label>
        <input
          style={{ accentColor: color }}
          type='range'
          min='0'
          max='3'
          step='0.05'
          defaultValue='1.5'
          class='slider'
          onMouseUp={(e) => setImageScale(e.target.value)}
          id='scale'
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='scale'> موقعیت افقی</label>
        <input
          style={{ accentColor: color }}
          type='range'
          min='-3'
          max='3'
          step='0.05'
          defaultValue='0'
          class='slider'
          onMouseUp={(e) => {
            setImageXPosition(-e.target.value * 0.08);
          }}
          id='scale'
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='scale'> موقعیت عمودی</label>
        <input
          style={{ accentColor: color }}
          type='range'
          min='-6'
          max='4'
          step='0.05'
          defaultValue='-1'
          class='slider'
          onMouseUp={(e) => {
            setImageYPosition(e.target.value * 0.08);
          }}
          id='scale'
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='scale'> چرخش</label>
        <input
          style={{ accentColor: color }}
          type='range'
          min='-180'
          max='180'
          step='1'
          defaultValue='-1'
          class='slider'
          onMouseUp={(e) => {
            setImageRotate((e.target.value / 180) * Math.PI);
          }}
          //   onChange={(e) => {
          //     setImageRotate((e.target.value / 180) * Math.PI);
          //   }}
          id='scale'
        />
      </div>
      <div className='flex flex-col gap-3'>
        <label
          className='h-fit cursor-pointer hover:cursor-pointer  hover:brightness-110'
          htmlFor='file'
        >
          <Button posittion='!w-full pointer-events-none' color={color}>
            <span className='w-full  text-center'>بارگذاری</span>
          </Button>
          <input
            onChange={(e) => handleImageUpload(e.target.files[0])}
            id='file'
            type='file'
            className='invisible absolute'
          />
        </label>
        {imageName && (
          <div
            onClick={() => {setUploadedImage(null)
            setImageNmae('')
            }}
            style={{ border: `1px solid ${color}` }}
            className='ml-0 w-full text-left items-center flex justify-between flex-row-reverse
                  mr-auto border rounded px-1 py-0.5 hover:bg-rose-500/10 cursor-pointer'
          >
            <span>{imageName}</span>
            <RiDeleteBinLine style={{ color }} />
          </div>
        )}
        <Button onClick={resetChanges} posittion='!w-full ' color={color}>
          <span className='w-full text-center'>لغو تغیرات</span>
        </Button>
      </div>
    </div>
  );
}

export default Controllers;
