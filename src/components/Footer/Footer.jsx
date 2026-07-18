import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-box">

          <h2>Aquafy</h2>

          <p>
            Premium Aquarium Fish, Tanks,
            Accessories and Fish Food.
          </p>

        </div>

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

        </div>

        <div className="footer-box">

          <h3>Categories</h3>

          <ul>
            <li>Betta Fish</li>
            <li>Guppy Fish</li>
            <li>Aquarium Tanks</li>
            <li>Fish Food</li>
          </ul>

        </div>

        <div className="footer-box">

          <h3>Contact</h3>

          <p><FaPhone /> +91 98765 43210</p>

          <p><FaEnvelope /> info@aquafy.com</p>

          <p><FaMapMarkerAlt /> Chennai, India</p>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>

        </div>

      </div>

      <div className="copyright">
        © 2026 Aquafy. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;