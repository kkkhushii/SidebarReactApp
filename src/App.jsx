import './App.css';
import Sidebar from './components/Sidebar';
import IconSidebar from './components/IconSidebar';
import { IconProvider } from '../src/ContextApi/IconContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <IconProvider>
      <div className="containers">
        <IconSidebar />
        <Sidebar />
      </div>
    </IconProvider>
  );
}

export default App;
