import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/shop" element={<Shop />} />

      <Route path="/product/:id" element={<Product />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

    </Routes>
  );
}
export default App;