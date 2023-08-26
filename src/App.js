import ContextProvider, { store } from './ContextProvider';
import Platform from './Platform';
import Overlay from './Overlay';
import { useContext } from 'react';

function App() {
  const { isSmall } = useContext(store);

  return (
    <>
      <Platform fov={isSmall ? 30 : 25} />
      <Overlay />
    </>
  );
}

export default App;
