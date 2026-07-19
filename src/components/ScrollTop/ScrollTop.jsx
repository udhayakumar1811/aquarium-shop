import { FaArrowUp } from "react-icons/fa";
import "./ScrollTop.css";

function ScrollTop() {
  return (
    <button
      className="scroll-top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollTop;