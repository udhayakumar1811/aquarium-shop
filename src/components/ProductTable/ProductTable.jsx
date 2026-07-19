import "./ProductTable.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import ProductModal from "../ProductModal/ProductModal";

function ProductTable() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Betta Fish",
      category: "Fish",
      price: 499,
      stock: 20,
      image: "",
    },
    {
      id: 2,
      name: "Guppy Fish",
      category: "Fish",
      price: 299,
      stock: 50,
      image: "",
    },
    {
      id: 3,
      name: "Glass Tank",
      category: "Tank",
      price: 2499,
      stock: 15,
      image: "",
    },
    {
      id: 4,
      name: "Fish Food",
      category: "Food",
      price: 199,
      stock: 100,
      image: "",
    },
    {
      id: 5,
      name: "Aquarium Plant",
      category: "Plant",
      price: 149,
      stock: 40,
      image: "",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const editProduct = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <>
      <div className="table-header">

        <h2>All Products</h2>

        <div className="table-actions">

          <input
            type="text"
            placeholder="Search Product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Fish">Fish</option>
            <option value="Tank">Tank</option>
            <option value="Food">Food</option>
            <option value="Plant">Plant</option>
          </select>

          <button
            onClick={() => {
              setSelectedProduct(null);
              setShowModal(true);
            }}
          >
            Add Product
          </button>

        </div>

      </div>

     <div className="table-responsive">

<table>

        <thead>

          <tr>

            <th>ID</th>

            <th>Name</th>

            <th>Category</th>

            <th>Price</th>

            <th>Stock</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {products

            .filter((product) => {
              const matchSearch = product.name
                .toLowerCase()
                .includes(search.toLowerCase());

              const matchCategory =
                category === "All" ||
                product.category === category;

              return matchSearch && matchCategory;
            })

            .map((product) => (

              <tr key={product.id}>

                <td>{product.id}</td>

                <td>{product.name}</td>

                <td>{product.category}</td>

                <td>₹{product.price}</td>

                <td>{product.stock}</td>

                <td>

                  <button
                    onClick={() => editProduct(product)}
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => deleteProduct(product.id)}
                  >
                    <FaTrash />
                  </button>

                </td>

              </tr>

            ))}

        </tbody>

      </table>

</div>

      <ProductModal
        show={showModal}
        close={() => setShowModal(false)}
        product={selectedProduct}
      />
    </>
  );
}

export default ProductTable;