import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

function Navbar() {
  const {
    cart,
    wishlist,
    search,
    setSearch,
  } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="container">

        {/* Logo */}
        <NavLink to="/" className="logo">
          <h2>Aquafy</h2>
        </NavLink>

        {/* Menu */}
        <ul className="menu">

          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/shop">
              Shop
            </NavLink>
          </li>

          <li>
            <NavLink to="/about">
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </li>

        </ul>

        {/* Search */}
        <div className="search-box">

          <input
            type="text"
            placeholder="Search Aquarium Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        {/* Icons */}
        <div className="icons">

          <div className="badge-box">

            <NavLink to="/wishlist">

    <FaHeart />

    <span>{wishlist.length}</span>

</NavLink>

            

          </div>

          <NavLink to="/cart">

            <div className="badge-box">

              <FaShoppingCart />

              <span>{cart.length}</span>

            </div>

          </NavLink>

          <NavLink to="/login">

            <FaUser />

          </NavLink>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;