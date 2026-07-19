import "./FeaturedProducts.css";
import products from "../../data/products";

import {
  FaStar,
  FaHeart,
  FaShoppingCart,
  FaEye,
} from "react-icons/fa";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { Link } from "react-router-dom";


function FeaturedProducts() {

    const {

    addToCart,
    addToWishlist,

} = useContext(CartContext);
  return (
    <section className="featured-products">

      <div className="container">

        <div className="section-header">

          <h2>Featured Products</h2>

          <p>
            Explore our premium aquarium fish and accessories.
          </p>

        </div>

        <div className="products-grid">

          {products.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              {product.discount > 0 && (

                <span className="discount-badge">

                  -{product.discount}%

                </span>

              )}

              {product.isNew && (

                <span className="new-badge">

                  NEW

                </span>

              )}

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>

              <div className="product-info">

                <h3>{product.name}</h3>

                <p>{product.category}</p>

                <div className="rating">

                  <FaStar />

                  <span>{product.rating}</span>

                </div>

                <h4>

                  ₹{product.price}

                </h4>

                <div className="product-buttons">

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

                  <Link
    to={`/product/${product.id}`}
    title="View Details"
>

    <button>

        <FaEye />

    </button>

</Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProducts;