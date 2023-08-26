import { Html, useProgress } from '@react-three/drei';

function LoaderScreen() {
  const { progress } = useProgress();
  console.log({ progress });
  return (
    <Html center>
      <div className='h-screen w-screen bg-black absolute top-0 left-0'>
        
        <svg
          viewBox='0 0 100 100'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          data-value='75'
        >
          <circle r='45' cx='50' cy='50' />
          <path
            class='meter'
            d='M5,50a45,45 0 1,0 90,0a45,45 0 1,0 -90,0'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-dashoffset='282.78302001953125'
            stroke-dasharray='282.78302001953125'
          />
          <text
            x='50'
            y='50'
            text-anchor='middle'
            dominant-baseline='central'
            font-size='20'
          ></text>
        </svg>
      </div>
    </Html>
  );
}

export default LoaderScreen;
