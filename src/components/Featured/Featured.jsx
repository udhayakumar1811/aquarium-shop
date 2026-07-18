import "./Featured.css";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Premium Betta",
    price: "₹799",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500",
  },
  {
    id: 2,
    name: "Blue Guppy",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500",
  },
  {
    id: 3,
    name: "Glass Aquarium",
    price: "₹2999",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500",
  },
];

function Featured() {
  return (
    <section className="featured">

      <div className="section-title">
        <h2>Featured Products</h2>
        <p>Best Selling Aquarium Collection</p>
      </div>

      <div className="container">

        {products.map((item) => (
          <div className="featured-card" key={item.id}>

            <img src={item.image} alt={item.name} />

            <div className="featured-content">

              <h3>{item.name}</h3>

              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <h4>{item.price}</h4>

              <div className="featured-btns">
                <button>
                  <FaHeart />
                </button>

                <button>
                  <FaShoppingCart />
                </button>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Featured;