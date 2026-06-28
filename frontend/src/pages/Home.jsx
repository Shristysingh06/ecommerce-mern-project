import { Link } from "react-router-dom";

import Hero from "../component/Hero";
import Categories from "../component/Categories";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>

      {/* HERO SLIDER */}
      <Hero />

      {/* HERO TEXT SECTION */}
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          padding: "40px",
          background: "linear-gradient(to right, #ece9e6, #ffffff)",
          borderRadius: "15px",
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
              background: "black",
              color: "white",
              borderRadius: "5px",
            }}
          >
            🛒 Shop Now
          </button>
        </Link>
      </div>

      {/* CATEGORIES */}
      <Categories />

      {/* FEATURE SECTION */}
      <h2 style={{ marginTop: "40px" }}>🔥 Why Choose Us</h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <div style={cardStyle}>📱 Latest Smartphones</div>
        <div style={cardStyle}>⚡ Fast Delivery</div>
        <div style={cardStyle}>💰 Best Prices</div>
        <div style={cardStyle}>🔒 Secure Payment</div>
      </div>
    </div>
  );
}

// CARD STYLE
const cardStyle = {
  padding: "20px",
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "10px",
  flex: "1",
  textAlign: "center",
};