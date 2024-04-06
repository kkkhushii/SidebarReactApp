/* eslint-disable react/prop-types */
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function ChildrenCollapse({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = item.icon;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {item.children && item.children.length > 0 ? (
        <div className="sidebar-sub-content" onClick={toggleExpand}>
          {Icon && <Icon />}
          <span className="sidebar-sub-content-name">{item.name}</span>
          <span className="sidebar-sub-content-icon">
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </span>
        </div>
      ) : (
        <div className="sidebar-sub-content">
          <span className="sidebar-sub-content-name" style={{ color: 'gray', marginLeft: '10px' }}>
            ●
          </span>
          <span className="sidebar-sub-content-name">{item.name}</span>
        </div>
      )}

      {isExpanded && item.children && item.children.length > 0 && (
        <div className="sidebar-sub-content-expanded">
          {item.children.map((child) => (
            <>
              <ChildrenCollapse key={child.id} item={child} />
            </>
          ))}
        </div>
      )}
    </div>
  );
}

export default ChildrenCollapse;
