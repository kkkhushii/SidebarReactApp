import './App.css';
import Sidebar from './components/Sidebar';
import IconSidebar from './components/IconSidebar';
import { IconProvider } from '../src/ContextApi/IconContext';

function Page() {
  return (
    <IconProvider>
      <div className="containers">
        <IconSidebar />
        <Sidebar />
    
      </div>
    </IconProvider>
  );
}

export default Page;
