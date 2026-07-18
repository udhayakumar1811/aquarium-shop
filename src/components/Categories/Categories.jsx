import "./Categories.css";
import { FaFish, FaWater, FaLeaf } from "react-icons/fa";

function Categories() {
  return (
    <section className="categories">
      <div className="container">

        <div className="category-card">
          <FaFish className="category-icon" />
          <h3>Aquarium Fish</h3>
          <p>Healthy & Premium Fish</p>
        </div>

        <div className="category-card">
          <FaWater className="category-icon" />
          <h3>Aquarium Tanks</h3>
          <p>Modern Glass Tanks</p>
        </div>

        <div className="category-card">
          <FaLeaf className="category-icon" />
          <h3>Fish Food</h3>
          <p>Best Nutrition</p>
        </div>

      </div>
    </section>
  );
}

export default Categories;