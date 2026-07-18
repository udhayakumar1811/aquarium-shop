import "./Product.css";
import { useContext } from "react";
import { useParams } from "react-router-dom";

import products from "../../data/products";
import { CartContext } from "../../context/CartContext";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Product() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <>
        <Navbar />
        <h2 style={{ textAlign: "center", margin: "100px 0" }}>
          Product Not Found
        </h2>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="product-details">
        <div className="container">

          <div className="product-image">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="product-info">

            <h1>{product.name}</h1>

            <h3>{product.category}</h3>

            <h2>₹{product.price}</h2>

            <p>
              Premium quality aquarium product with excellent
              health and long-lasting performance.
            </p>

            <div className="quantity">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>

            <button
  className="cart-btn"
  onClick={() => addToCart(product)}
>
  Add To Cart
</button>

            <button className="buy-btn">
              Buy Now
            </button>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Product;