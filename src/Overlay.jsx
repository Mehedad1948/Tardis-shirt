import { store } from './ContextProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import { AiOutlineHighlight, AiOutlineShopping } from 'react-icons/ai';
import Button from './components/Button';
import Customizer from './Customizer';

export const transition = { type: 'spring', duration: 0.8 };

export const config = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
};

function Overlay() {
  const { intro, setIntro } = useContext(store);

  return (
    <>
      <AnimatePresence>
        {intro ? (
          <Intro key='main' config={config} setIntro={setIntro} />
        ) : (
          <Customizer key='custom' setIntro={setIntro} config={config} />
        )}
      </AnimatePresence>
      ;
    </>
  );
}

function Intro({ setIntro, config }) {
  const { color } = useContext(store);

  return (
    <div className='w-full absolute top-0 p-8 sm:p-14 overflow-hidden'>
      <motion.div {...config} className='w-full'>
        <motion.header
          style={{ color }}
          initial={{ opacity: 0, y: -120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 1.8, delay: 1 }}
          className='flex items-start justify-between mb-2'
        >
          <h1 className='font-semibold text-2xl'>تـارادیسو</h1>
          <AiOutlineShopping size='3em' />
        </motion.header>
        <section className='' key='main'>
          <div>
            <div>
              <h1
                // style={{ filter: `drop-shadow(0px 5px 5px ${color})` }}
                className='text-7xl sm:text-9xl font-extrabold sm:italic  
                       from-slate-800 to-black 
            '
              >
                خلاقیت <br />
                بی حد و مرز
              </h1>
            </div>
            <div className='flex max-w-lg mt-3 sm:mt-8 flex-col gap-4'>
              <p className='text-lg font-semibold leading-9'>
                طرح های اختصاصی خودت رو با مدل های سه بعدی ما امتحان کن و
                خلاقیتت رو نشون بده
              </p>
              <Button color={color} onClick={() => setIntro(false)}>
                شخصی سازی <AiOutlineHighlight size='1.3em' />
              </Button>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default Overlay;
