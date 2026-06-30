import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

export default function Navbar() {
  const {
    cart,
    wishlist,
    darkMode,
    setDarkMode,
    user,
    logout,
  } = useContext(ShopContext);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={styles.nav(darkMode)}>

      {/* LOGO */}
      <h2 style={{ margin: 0 }}>🛍️ My Shop</h2>

      {/* ☰ MOBILE BUTTON */}
      <div
        style={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* LINKS */}
      <div
        style={{
          ...styles.links,
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>

        <Link to="/cart" onClick={() => setMenuOpen(false)}>
          Cart ({cart.length})
        </Link>

        <Link to="/wishlist" onClick={() => setMenuOpen(false)}>
          Wishlist ({wishlist.length})
        </Link>

        <Link to="/checkout" onClick={() => setMenuOpen(false)}>Checkout</Link>
        <Link to="/orders" onClick={() => setMenuOpen(false)}>Orders</Link>
        <Link to="/admin" onClick={() => setMenuOpen(false)}>Admin</Link>

        {/* AUTH */}
        {user ? (
          <>
            <span>👤 {user.email}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        )}

        {/* DARK MODE */}
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

/* 🎨 STYLES */
const styles = {
  nav: (darkMode) => ({
    padding: "12px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: darkMode ? "#111" : "#fff",
    color: darkMode ? "white" : "black",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  }),

  hamburger: {
    fontSize: "26px",
    cursor: "pointer",
    display: "none",
  },

  links: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    transition: "0.3s",
  },
};