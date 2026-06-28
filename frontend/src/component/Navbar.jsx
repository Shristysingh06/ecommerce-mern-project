import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const { cart, wishlist } = useContext(ShopContext);

  return (
    <nav
      style={{
        padding: "12px 20px",
        background: "#111",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* LOGO */}
      <h2 style={{ margin: 0 }}>🛍️ My Shop</h2>

      {/* LINKS */}
      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link
          to="/products"
          style={{ color: "white", textDecoration: "none" }}
        >
          Products
        </Link>

        <Link
          to="/cart"
          style={{ color: "white", textDecoration: "none" }}
        >
          🛒 Cart ({cart.length})
        </Link>

        <Link
          to="/wishlist"
          style={{ color: "white", textDecoration: "none" }}
        >
          ❤️ Wishlist ({wishlist.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;