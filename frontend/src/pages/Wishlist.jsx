import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export default function Wishlist() {
  const { wishlist, addToCart, removeFromWishlist } =
    useContext(ShopContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>❤️ My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p style={{ textAlign: "center" }}>Wishlist is empty 😢</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {wishlist.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "15px",
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              {/* NAME */}
              <h3 style={{ margin: "10px 0" }}>{item.name}</h3>

              {/* PRICE */}
              <p style={{ fontWeight: "bold" }}>₹{item.price}</p>

              {/* BUTTONS */}
              <button
                onClick={() => addToCart(item)}
                style={{
                  padding: "8px 12px",
                  margin: "5px",
                  background: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                🛒 Move to Cart
              </button>

              <button
                onClick={() => removeFromWishlist(item.id)}
                style={{
                  padding: "8px 12px",
                  margin: "5px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}