import "./VideoSection.css";
import { FaPlay } from "react-icons/fa";

function VideoSection() {
  return (
    <section className="video-section">

      <div className="overlay">

        <div className="video-content">

          <h2>Watch Our Aquarium Story</h2>

          <p>
            Discover beautiful aquarium fish and premium accessories.
          </p>

          <button className="play-btn">
            <FaPlay />
          </button>

        </div>

      </div>

    </section>
  );
}

export default VideoSection;