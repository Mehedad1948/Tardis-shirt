import Button from './components/Button';
import Controllers from './components/Controllers';
import { motion } from 'framer-motion';
const { store } = require('./ContextProvider');
const { useContext, useState } = require('react');
const { AiOutlineArrowLeft, AiFillCamera } = require('react-icons/ai');

const colors = ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934'];
const decals = ['react', 'three2', 'pmndrs'];

function Customizer({ setIntro, config }) {
  const { setColor, color, setDecal, decal } = useContext(store);

  const [showController, setShowController] = useState(false);

  return (
    <motion.section {...config} key='custom' className='w-full'>
      <div className='flex justify-end flex-col items-center w-full h-full mb-6 overflow-hidden'>
        <div
          className='flex items-center sm:flex-row flex-col absolute z-10
                       sm:translate-y-0 -translate-y-1/2 top-1/2 sm:top-auto sm:bottom-6 
                       right-6 sm:right-auto gap-3'
        >
          {colors.map((color) => (
            <div
              key={color}
              className='w-7 h-7 border-2 border-white transition-transform rounded-full
                          ease-[cubic-bezier(0.85,_0,_0.15,_1)] cursor-pointer'
              style={{ background: color }}
              onClick={() => setColor(color)}
            ></div>
          ))}
        </div>
      </div>

      <Button
        onClick={() => setShowController((s) => !s)}
        color={color}
        posittion='sm:hidden absolute left-5 top-5  
      '
      >
        <span className='text-white'>
          {!showController ? 'نمایش کنترلر ها' : 'بستن کنترلرها'}
        </span>
      </Button>

       <Controllers showController={showController} />

      <div className='absolute left-5 sm:left-10 bottom-5 sm:bottom-10'>
        <div className='flex gap-5'>
          {decals.map((decal) => (
            <div key={decal} onClick={() => setDecal(decal)}>
              <img
                className='w-6 grayscale hover:grayscale-0 hover:scale-125 
                             transition-transform duration-300 cursor-pointer'
                src={decal + '_thumb.png'}
                alt='brand'
              />
            </div>
          ))}
        </div>
      </div>
      <Button
        onClick={() => {
          const link = document.createElement('a');
          link.setAttribute('download', `shirt-${color}-${decal}.jpg`);
          link.setAttribute(
            'href',
            document
              .querySelector('canvas')
              .toDataURL('image/png')
              .replace('image/png', 'image/octect-stream')
          );
          link.click();
        }}
        color={color}
        posittion='absolute bottom-5 sm:bottom-10 right-5 sm:right-10'
      >
        <span>دانلود طرح</span>
        <AiFillCamera size='1.3em' />
      </Button>
      <Button
        posittion='absolute top-5 sm:top-10 right-5 sm:right-10'
        color={color}
        onClick={() => setIntro(true)}
      >
        بازگشت
        <AiOutlineArrowLeft size='1.3em' />
      </Button>
    </motion.section>
  );
}

export default Customizer;
