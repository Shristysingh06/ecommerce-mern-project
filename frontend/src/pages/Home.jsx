import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

import Hero from "../component/Hero";
import Categories from "../component/Categories";

export default function Home() {
  const { darkMode } = useContext(ShopContext);

  return (
    <div style={{ padding: "20px" }}>

      {/* 🏠 HERO SLIDER */}
      <Hero />

      {/* 🟡 HERO TEXT SECTION */}
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          padding: "40px",
          borderRadius: "15px",
          background: darkMode
            ? "linear-gradient(to right, #1e1e1e, #2a2a2a)"
            : "linear-gradient(to right, #ece9e6, #ffffff)",
          color: darkMode ? "white" : "black",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h1>🛍️ Welcome to Shristy E-Commerce Store</h1>
        <p>Best Mobile Shopping Website</p>

        <Link to="/products">
          <button
            style={{
              padding: "12px 25px",
              marginTop: "15px",
              cursor: "pointer",
              border: "none",
              background: darkMode ? "#ff9900" : "black",
              color: darkMode ? "black" : "white",
              borderRadius: "8px",
              fontWeight: "bold",
              transition: "0.3s",
            }}
          >
            🛒 Shop Now
          </button>
        </Link>
      </div>

      {/* 📂 CATEGORIES */}
      <Categories />

      {/* 🔥 FEATURE SECTION */}
      <h2 style={{ marginTop: "40px" }}>🔥 Why Choose Us</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <div style={{ ...cardStyle, background: darkMode ? "#1e1e1e" : "#fff" }}>
          📱 Latest Smartphones
        </div>

        <div style={{ ...cardStyle, background: darkMode ? "#1e1e1e" : "#fff" }}>
          ⚡ Fast Delivery
        </div>

        <div style={{ ...cardStyle, background: darkMode ? "#1e1e1e" : "#fff" }}>
          💰 Best Prices
        </div>

        <div style={{ ...cardStyle, background: darkMode ? "#1e1e1e" : "#fff" }}>
          🔒 Secure Payment
        </div>
      </div>
    </div>
  );
}

// 🧱 CARD STYLE
const cardStyle = {
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  border: "1px solid rgba(0,0,0,0.1)",
  boxShadow: "0 3px 8px rgba(0,0,0,0.05)",
  transition: "0.3s",
};