import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";

import Navbar from "./component/Navbar";

function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#f3f3f3" }}>
      
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main style={{ padding: "10px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;