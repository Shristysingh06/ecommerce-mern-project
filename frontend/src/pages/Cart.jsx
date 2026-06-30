import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export default function Admin() {
  const { cart, removeFromCart } = useContext(ShopContext);

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        background: "#f3f3f3",
      }}
    >
      <h1>🛠️ Admin Panel</h1>

      <h2>🛒 Cart Items ({cart.length})</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              background: "white",
            }}
          >
            <div>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>Qty: {item.qty}</p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "6px 12px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}