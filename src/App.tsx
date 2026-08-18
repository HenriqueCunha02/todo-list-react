import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import './styles/theme.css';
import './styles/global.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <TaskContextProvider>
      <Toaster position='top-right' />
      <Home />
    </TaskContextProvider>
  );
}
export default App;
