import "./Navbar.css";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="container">

        <div className="logo">
          <h2>Aquafy</h2>
        </div>

        <ul className="menu">

          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>

        </ul>

        <div className="icons">

          <FaSearch />

          <FaHeart />

          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>

          <FaUser />

        </div>

      </div>

    </nav>
  );
}

export default Navbar;