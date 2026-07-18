import "./Navbar.css";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        
        <div className="logo-container">
          <div className="logo">
            <h2>Aquafy</h2>
          </div>
        </div>

        <ul className="menu">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>

        <div className="icons">
          <div className="icon-wrapper">
            <FaSearch />
          </div>
          <div className="icon-wrapper">
            <FaHeart />
          </div>
          <div className="icon-wrapper">
            <FaShoppingCart />
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;