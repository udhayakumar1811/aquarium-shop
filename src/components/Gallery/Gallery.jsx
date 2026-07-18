import "./Gallery.css";

const galleryImages = [
  "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=600",
  "https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=600",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600",
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600",
  "https://images.unsplash.com/photo-1511497584788-876760111969?w=600",
  "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=600",
];

function Gallery() {
  return (
    <section className="gallery">

      <div className="section-title">
        <h2>Our Gallery</h2>
        <p>Beautiful Aquarium Collection</p>
      </div>

      <div className="gallery-container">

        {galleryImages.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img src={image} alt="Gallery" />
          </div>
        ))}

      </div>

    </section>
  );
}

export default Gallery;