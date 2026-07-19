import "./ProductCard.css";
import products from "../../data/products";

import {
  FaHeart,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ProductCard() {

const {
  addToCart,
  addToWishlist,
  search,
} = useContext(CartContext);

  return (
    <section className="products">

      <div className="container">

        {products
  .filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )
  .map((product) => (

            <div className="product-card" key={product.id}>

              <img
                src={product.image}
                alt={product.name}
              />

              <div className="product-content">

                <h3>{product.name}</h3>

                <p>{product.category}</p>

                <div className="rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <h4>₹{product.price}</h4>

                <div className="product-icons">

                  <button
                    onClick={() => addToWishlist(product)}
                  >
                    <FaHeart />
                  </button>

                  <button
                    onClick={() => addToCart(product)}
                  >
                    <FaShoppingCart />
                  </button>

                </div>

                <Link
                  className="details-btn"
                  to={`/product/${product.id}`}
                >
                  View Details
                </Link>

              </div>

            </div>

        ))}

      </div>

    </section>
  );
}

export default ProductCard;