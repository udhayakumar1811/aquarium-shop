import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Products from "./Pages/Products/Products";

import Wishlist from "./Pages/Wishlist/Wishlist";

import Checkout from "./Pages/Checkout/Checkout";

import OrderSuccess from "./Pages/OrderSuccess/OrderSuccess";


function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/shop" element={<Shop />} />

      <Route path="/product/:id" element={<Product />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/admin/products" element={<Products />} />

      <Route path="/wishlist" element={<Wishlist />} />

      <Route path="/checkout" element={<Checkout />} />

      <Route path="/order-success" element={<OrderSuccess />} />



    </Routes>
  );
}

export default App;