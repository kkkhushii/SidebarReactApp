import IconContext from '../ContextApi/IconContext';
import logo from '../assets/logo.svg';
import { useContext } from 'react';
import SidebarContent from '../Data/SidebarData';
import '../Styles/sidebar.css';

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
              <h3 className="sidebar-heading">{item.heading}</h3>

              {item.content.map((subItem, subIndex) => (
                <div key={subIndex}>
                  <div className="sidebar-sub-content">
                    <span className="sidebar-sub-content-icon">{subItem.icon} </span>
                    <span className="sidebar-sub-content-name">{subItem.name}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
