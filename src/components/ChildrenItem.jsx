/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import '../Styles/sidebar.css';

function ChildrenData({ item }) {
  const Icon = item.icon;

  return (
    <div>
      <div className="sidebar-sub-content">
        <span className="sidebar-sub-content-icon">
          <Icon />
        </span>
        <span className="sidebar-sub-content-name">{item.name}</span>
      </div>
    </div>
  );
}

export default ChildrenData;
