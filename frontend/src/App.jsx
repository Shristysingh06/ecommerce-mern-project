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

  // ===============================
  // 📦 LOAD FROM LOCALSTORAGE
  // ===============================
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    setCart(savedCart);
    setWishlist(savedWishlist);
  }, []);

  // ===============================
  // 💾 SAVE CART
  // ===============================
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ===============================
  // 💾 SAVE WISHLIST
  // ===============================
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // ===============================
  // 🌙 DARK MODE TOGGLE
  // ===============================
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  // ===============================
  // 🛒 ADD TO CART
  // ===============================
  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.name === product.name);

      if (exists) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, qty: (item.qty || 1) + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  // ===============================
  // ❤️ TOGGLE WISHLIST
  // ===============================
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.name === product.name);

      if (exists) {
        return prev.filter((item) => item.name !== product.name);
      } else {
        return [...prev, product];
      }
    });
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/cart">Cart ({cart.length})</Link> |{" "}
        <Link to="/wishlist">Wishlist ({wishlist.length})</Link> |{" "}
        <Link to="/checkout">Checkout</Link> |{" "}
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={
            <Product
              cart={cart}
              setCart={setCart}
              wishlist={wishlist}
              setWishlist={setWishlist}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
            />
          }
        />

        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} />}
        />

        <Route path="/checkout" element={<Checkout cart={cart} />} />

        <Route
          path="/product/:id"
          element={
            <ProductDetail
              cart={cart}
              setCart={setCart}
              wishlist={wishlist}
              setWishlist={setWishlist}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;