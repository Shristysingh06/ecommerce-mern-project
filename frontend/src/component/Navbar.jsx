import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

export default function Navbar() {
  const { cart, wishlist, darkMode, setDarkMode } =
    useContext(ShopContext);

  return (
    <nav
      style={{
        padding: "12px 20px",
        background: darkMode ? "#111" : "#000",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {/* LOGO */}
      <h2 style={{ margin: 0 }}>🛍️ My Shop</h2>

      {/* LINKS */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Link style={linkStyle} to="/">
          🏠 Home
        </Link>

        <Link style={linkStyle} to="/products">
          📱 Products
        </Link>

        <Link style={linkStyle} to="/cart">
          🛒 Cart ({cart.length})
        </Link>

        <Link style={linkStyle} to="/wishlist">
          ❤️ Wishlist ({wishlist.length})
        </Link>

        {/* ✅ CHECKOUT LINK */}
        <Link style={linkStyle} to="/checkout">
          🧾 Checkout
        </Link>
      </div>

      {/* DARK MODE */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: "8px 14px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          background: darkMode ? "#fff" : "#333",
          color: darkMode ? "#000" : "#fff",
          fontWeight: "bold",
        }}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};