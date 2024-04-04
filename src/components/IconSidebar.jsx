import menuItems from '../Data/IconsData';
import IconContext from '../ContextApi/IconContext';
import { useContext } from 'react';
import '../Styles/Iocnstyle.css';

function IconSidebar() {
  const { setSelectedIconId, selectedIconId } = useContext(IconContext);

  return (
    <div className="mini-nav">
      <ul className="mini-nav-ul">
        <li className="mini-nav-li">
          {menuItems.map((icon) => (
            <div key={icon.id} onClick={() => setSelectedIconId(icon.id)}>
              <span className={`li-icons ${selectedIconId === icon.id ? 'active' : ''}`}>
                {icon.icon}
              </span>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default IconSidebar;
