import "./ProductCard.css";

import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaEye,
  FaStar,
} from "react-icons/fa";

import { CartContext } from "../../context/CartContext";

function ProductCard({ product }) {

  const { addToCart, addToWishlist } = useContext(CartContext);

  // Prevent app crash if product is undefined
  if (!product) {
    return null;
  }

  return (
    <div className="product-card">

      {product.discount > 0 && (
        <span className="discount-badge">
          -{product.discount}%
        </span>
      )}

      <img
        src={product.image}
        alt={product.name}
      />

      <div className="product-content">

        <h3>{product.name}</h3>

        <p>{product.category}</p>

        <div className="rating">
          <FaStar />
          <span>{product.rating}</span>
        </div>

        <h2>₹{product.price}</h2>

        <div className="product-actions">

          <button
            onClick={() => addToWishlist(product)}
            title="Add to Wishlist"
          >
            <FaHeart />
          </button>

          <button
            onClick={() => addToCart(product)}
            title="Add to Cart"
          >
            <FaShoppingCart />
          </button>

          <Link to={`/product/${product.id}`}>
            <button title="View Details">
              <FaEye />
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;