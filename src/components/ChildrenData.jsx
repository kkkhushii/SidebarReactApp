/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import '../Styles/sidebar.css';
import ChildrenCollapse from '../components/ChildrenCollapse';

function ChildrenData({ item }) {
  const Icon = item.icon;
 
  return (
     <div>
    {item.children && item.children.length > 0 ? (
       
        <ChildrenCollapse item={item}  icon={<Icon/>}/>
      ) : (
        <div className="sidebar-sub-content">

          <span className="sidebar-sub-content-icon">
            <Icon />
          </span>
          <span className="sidebar-sub-content-name">{item.name}</span>
        </div>
      )}
    </div> 
    
  );
}

export default ChildrenData;
