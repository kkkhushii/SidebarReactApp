
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function NavItems({ item }) {
  const Icon = item.icon;
  return (
    <div className="sidebar-sub-content">
      {item.icon ? <Icon /> : <FiberManualRecordIcon sx={{ fontSize: '12px' }} />}
      <span className="sidebar-sub-content-name">{item.name}</span>
    </div>

  );
}

export default NavItems;
