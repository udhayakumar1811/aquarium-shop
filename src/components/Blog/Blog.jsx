import "./Blog.css";

const blogs = [
  {
    id: 1,
    title: "How to Care Betta Fish",
    date: "July 18, 2026",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=600",
  },
  {
    id: 2,
    title: "Top 10 Aquarium Tips",
    date: "July 16, 2026",
    image: "https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=600",
  },
  {
    id: 3,
    title: "Best Food for Guppy Fish",
    date: "July 12, 2026",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600",
  },
];

function Blog() {
  return (
    <section className="blog">

      <div className="section-title">
        <h2>Latest Blog</h2>
        <p>Latest News & Aquarium Tips</p>
      </div>

      <div className="container">

        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>

            <img src={blog.image} alt={blog.title} />

            <div className="blog-content">

              <span>{blog.date}</span>

              <h3>{blog.title}</h3>

              <button>Read More</button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Blog;