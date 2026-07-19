import "./Sidebar.css";
import {
  FaHome,
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaList,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h2>Aquafy</h2>

      <ul>

        <li><FaHome /> Dashboard</li>

        <li><FaBox /> Products</li>

        <li><FaShoppingCart /> Orders</li>

        <li><FaUsers /> Customers</li>

        <li><FaList /> Categories</li>

        <li><FaCog /> Settings</li>

        <li><FaSignOutAlt /> Logout</li>

      </ul>

    </aside>
  );
}

export default Sidebar;