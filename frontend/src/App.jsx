import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/cart">Cart ({cart.length})</Link> |{" "}
        <Link to="/wishlist">Wishlist ({wishlist.length})</Link> |{" "}
        <Link to="/checkout">Checkout</Link>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={
            <Product
              setCart={setCart}
              setWishlist={setWishlist}
            />
          }
        />

        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />

        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              setWishlist={setWishlist}
              setCart={setCart}
            />
          }
        />

        <Route path="/checkout" element={<Checkout />} />

        <Route
          path="/product/:name"
          element={<ProductDetail />}
        />
      </Routes>
    </div>
  );
}

export default App;