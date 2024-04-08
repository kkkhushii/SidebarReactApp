import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import NavItems from '../components/NavItems'



function NavCollapse({ item, level = 0 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (


    <div>
      <div className="sidebar-sub-content" onClick={toggleExpand}>
        <div className="sidebardivs">
          <div className="classForflex" style={{ marginLeft: `${level * 18}px` }}>
            <NavItems key={item.id} item={item} />
          </div>
          {item.children && item.children.length > 0 && (
            <span className="sidebar-sub-content-icon">
              {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </span>
          )}
        </div>
      </div>
      {isExpanded && item.children && (
        <div className="sidebar-sub-content-expanded">
          {item.children.map((child) => (
            <NavCollapse key={child.id} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>

  );
}

export default NavCollapse;
