import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";

import products from "../../data/products";

function Shop() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {

    const searchMatch = product.name
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
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

          <div className="col-md-3">

            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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

          {filteredProducts.map((product) => (

            <div
              className="col-lg-3 col-md-6 mb-4"
              key={product.id}
            >

              <ProductCard product={product} />

            </div>

          ))}

        </div>

      </section>

      <Footer />

    </>
  );

}

export default Shop;