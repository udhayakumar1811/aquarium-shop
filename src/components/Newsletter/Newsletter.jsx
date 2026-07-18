import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">

      <div className="container newsletter-container">

        <div className="newsletter-content">
          <h2>Subscribe Our Newsletter</h2>

          <p>
            Get the latest aquarium updates, offers and fish care tips.
          </p>
        </div>

        <form className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button type="submit">
            Subscribe
          </button>

        </form>

      </div>

    </section>
  );
}

export default Newsletter;