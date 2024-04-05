/* eslint-disable react/prop-types */
import {useState} from 'react'
import '../Styles/sidebar.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function ChildrenCollapse({item,icon}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const Icon = icon ;


    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
      };

    return (
<div>
<div className="sidebar-sub-content" onClick={toggleExpand}>
  <span className="sidebar-sub-content-name">{Icon}</span>
  <span className="sidebar-sub-content-name">{item.name}</span>


  {item.children && item.children.length > 0 && (
    <span className="sidebar-sub-content-icon">
    {/* {isExpanded ? '▲' : '▼'}  */}
    {isExpanded ? <KeyboardArrowUpIcon/> :  <KeyboardArrowDownIcon/>} 


    
    </span>
    
  )}
</div>
{isExpanded && item.children && item.children.length > 0 && (
  <div className="sidebar-sub-content-expanded">
    {item.children.map((child, index) => (
      <div key={index}>
        
        <div className="sidebar-sub-content" >
                <span>●</span>
                <ChildrenCollapse item={child}/>
             
         </div>

      </div>
    ))}
  </div>
)}
</div>
      );
}


export default ChildrenCollapse
