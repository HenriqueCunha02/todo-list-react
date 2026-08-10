import { Home } from './pages/Home';

import './styles/theme.css';
import './styles/global.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster position='top-right' />
      <Home />
    </>
  );
}
export default App;
