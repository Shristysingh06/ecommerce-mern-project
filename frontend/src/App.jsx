import { Routes, Route, Navigate } from "react-router-dom";
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
import Login from "./pages/Login";

function App() {
  const { darkMode, user } = useContext(ShopContext);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: darkMode ? "#111" : "#f4f4f4",
        color: darkMode ? "white" : "black",
        transition: "0.3s ease",
      }}
    >
      {/* NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <main style={{ padding: "15px" }}>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />

          <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" replace />} />
          <Route path="/wishlist" element={user ? <Wishlist /> : <Navigate to="/login" replace />} />
          <Route path="/checkout" element={user ? <Checkout /> : <Navigate to="/login" replace />} />
          <Route path="/payment" element={user ? <Payment /> : <Navigate to="/login" replace />} />
          <Route path="/orders" element={user ? <OrderHistory /> : <Navigate to="/login" replace />} />
          <Route path="/admin" element={user ? <Admin /> : <Navigate to="/login" replace />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;