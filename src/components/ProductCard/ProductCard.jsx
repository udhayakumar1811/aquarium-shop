import "./ProductCard.css";
import products from "../../data/products";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <section className="products">

      <div className="container">

        {products.map((product) => (

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

                <button>

                  <FaHeart />

                </button>

                <button>

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