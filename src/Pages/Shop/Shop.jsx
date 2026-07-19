import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaEye,
  FaStar,
} from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { CartContext } from "../../context/CartContext";
import products from "../../data/products";

function Shop() {

  const {
    addToCart,
    addToWishlist,
  } = useContext(CartContext);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {

    const searchMatch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const categoryMatch =
      category === "All"
        ? true
        : product.category === category;

    return searchMatch && categoryMatch;

  });

  return (
    <>

      <Navbar />

      <section className="container py-5">

        <h2 className="text-center mb-5">

          Aquarium Shop

        </h2>

        <div className="row mb-4">

          <div className="col-md-6">

            <input
              type="text"
              className="form-control"
              placeholder="Search Aquarium Products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          <div className="col-md-3">

            <select
              className="form-select"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
            >

              <option>All</option>

              <option>Betta Fish</option>

              <option>Guppy Fish</option>

              <option>Gold Fish</option>

              <option>Tank</option>

            </select>

          </div>

        </div>

        <div className="row">

          {

            filteredProducts.map((product) => (

              <div
                className="col-lg-3 col-md-6 mb-4"
                key={product.id}
              >

                <div className="card shadow-sm h-100">

                  {

                    product.discount > 0 &&

                    <span
                      className="badge bg-danger position-absolute m-2"
                    >

                      -{product.discount}%

                    </span>

                  }

                  <img
                    src={product.image}
                    className="card-img-top p-3"
                    style={{
                      height: "220px",
                      objectFit: "contain",
                    }}
                    alt={product.name}
                  />

                  <div className="card-body">

                    <h5>

                      {product.name}

                    </h5>

                    <p className="text-muted">

                      {product.category}

                    </p>

                    <div className="mb-2">

                      <FaStar
                        style={{
                          color: "#f59e0b",
                        }}
                      />

                      {" "}

                      {product.rating}

                    </div>

                    <h4
                      className="text-primary"
                    >

                      ₹{product.price}

                    </h4>

                    <div className="d-flex justify-content-between mt-3">

                      <button
                        className="btn btn-outline-danger"
                        onClick={() =>
                          addToWishlist(product)
                        }
                      >

                        <FaHeart />

                      </button>

                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          addToCart(product)
                        }
                      >

                        <FaShoppingCart />

                      </button>

                      <Link
                        to={`/product/${product.id}`}
                        className="btn btn-outline-secondary"
                      >

                        <FaEye />

                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            ))

          }

        </div>

      </section>

      <Footer />

    </>
  );

}

export default Shop;