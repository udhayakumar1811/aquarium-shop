import "./Products.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import ProductTable from "../../components/ProductTable/ProductTable";

function Products() {

  return (

    <div className="products-page">

      <Sidebar />

      <div className="products-content">

        <h1>Products</h1>

        <ProductTable />

      </div>

    </div>

  );

}

export default Products;