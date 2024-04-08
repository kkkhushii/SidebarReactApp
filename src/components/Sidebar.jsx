import IconContext from '../ContextApi/IconContext';
import logo from '../assets/logo.svg';
import { useContext } from 'react';
import SidebarContent from '../Data/SidebarData';
import '../Styles/sidebar.css';
import NavHeading from './NavHeading';
import NavItems from './NavItems';
import NavCollapse from './NavCollapse';


function Sidebar() {
  const { selectedIconId } = useContext(IconContext);
  const selectedContent = SidebarContent.find((data) => data.id === selectedIconId);

  return (
    <div className="shadow sidebar">
      <img src={logo} alt="logo" />
      {selectedContent && (
        <div className="sidebar-content">
          {selectedContent.items.map((item, index) => (
            <div className=" border-bottom sidebar-items mb-3" key={index}>
              <NavHeading text={item.heading} /> 
              {
              <>
                   {item.children && item.children.map((child, index) => (
                    <div key={index}>
                    {child.children ? (
                       <NavCollapse item={child} />
                    ) : (
                      <NavItems item={child}  />
                   )}
                  </div>
                ))}
              </>
            }
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
