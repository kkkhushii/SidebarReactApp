import IconContext from '../ContextApi/IconContext';
import logo from '../assets/logo.svg';
import { useContext } from 'react';
import SidebarContent from '../Data/SidebarData';
import '../Styles/sidebar.css';
import SidebarHeading from './SidebarHeading';
import ChildrenData from './ChildrenData';

function Sidebar() {
  const { selectedIconId } = useContext(IconContext);
  const selectedContent = SidebarContent.find((data) => data.id === selectedIconId);

  return (
    <div className="shadow sidebar">
      <img src={logo} alt="logo" />
      {selectedContent && (
        <div className="sidebar-content">
          {selectedContent.items.map((item, index) => (
            <div className=" border-bottom sidebar-items" key={index}>
              {/* //display heading */}
              <SidebarHeading text={item.heading} />  
              {/* display child component */}
              {item.children.map((subItem, subIndex) => (
                <ChildrenData key={subIndex} item={subItem} />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
