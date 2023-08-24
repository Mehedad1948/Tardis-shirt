import ContextProvider from './ContextProvider'
import Platform from './Platform'
import Overlay from './Overlay'

function App() {
  return (
    <ContextProvider>
      <Platform />
      <Overlay />
    </ContextProvider>
  );
}

export default App;
