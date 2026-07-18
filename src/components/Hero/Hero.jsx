import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">

        <div className="hero-content">
          <h1>Amazing<br/>Aquarium Collection</h1>
          
          <p>
            Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
            et dolore magna aliquyam erat, sed diam voluptua.
          </p>

          <button className="hero-btn">
            Shop Now &rarr;
          </button>
        </div>
       

      </div>
    </section>
  );
}

export default Hero;