import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { ShopContext } from "./context/ShopContext";

import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import OrderHistory from "./pages/OrderHistory";
import Admin from "./pages/Admin";
import Payment from "./pages/Payment";

function App() {
  const { darkMode } = useContext(ShopContext);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: darkMode ? "#111" : "#f3f3f3",
        color: darkMode ? "white" : "black",
        transition: "0.3s",
      }}
    >
      {/* NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <div style={{ padding: "10px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/orders" element={<OrderHistory />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;