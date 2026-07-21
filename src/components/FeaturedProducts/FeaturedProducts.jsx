import "./FeaturedProducts.css";

import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";

function FeaturedProducts() {

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

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default FeaturedProducts;