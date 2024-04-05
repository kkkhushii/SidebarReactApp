import '../Styles/sidebar.css';

// eslint-disable-next-line react/prop-types
function SidebarHeading({ text }) {
  return (
    <div>
      <h3 className="sidebar-heading">{text}</h3>
    </div>
  );
}

export default SidebarHeading;
