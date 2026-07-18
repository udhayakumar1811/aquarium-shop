import "./TopSelling.css";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Betta Fish",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500",
  },
  {
    id: 2,
    name: "Guppy Fish",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500",
  },
  {
    id: 3,
    name: "Gold Fish",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500",
  },
  {
    id: 4,
    name: "Angel Fish",
    price: "₹599",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500",
  },
];

function TopSelling() {
  return (
    <section className="top-selling">

      <div className="section-title">
        <h2>Top Selling Products</h2>

        <ul className="tabs">
          <li className="active">All</li>
          <li>Fish</li>
          <li>Tanks</li>
          <li>Food</li>
        </ul>
      </div>

      <div className="container">

        {products.map((item) => (
          <div className="card" key={item.id}>

            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <h4>{item.price}</h4>

            <div className="btns">
              <button>
                <FaHeart />
              </button>

              <button>
                <FaShoppingCart />
              </button>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default TopSelling;