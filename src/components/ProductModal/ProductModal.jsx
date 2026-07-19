import "./ProductModal.css";
import { useState, useEffect } from "react";

function ProductModal({
  show,
  close,
  product,
}) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("Fish");
  const [image, setImage] = useState("");

  useEffect(() => {

    if (product) {

      setName(product.name);
      setPrice(product.price);
      setStock(product.stock);
      setCategory(product.category);
      setImage(product.image || "");

    } else {

      setName("");
      setPrice("");
      setStock("");
      setCategory("Fish");
      setImage("");

    }

  }, [product]);

  if (!show) return null;

  const handleSubmit = (e) => {

    e.preventDefault();

    const productData = {
      name,
      price,
      stock,
      category,
      image,
    };

    console.log(productData);

    close();

  };

  return (

    <div className="modal">

      <div className="modal-content">

        <h2>

          {product ? "Edit Product" : "Add Product"}

        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >

            <option value="Fish">Fish</option>

            <option value="Tank">Tank</option>

            <option value="Food">Food</option>

            <option value="Plant">Plant</option>

          </select>

          <div className="modal-buttons">

            <button
              type="submit"
              className="save-btn"
            >
              {product ? "Update" : "Save"}
            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={close}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default ProductModal;