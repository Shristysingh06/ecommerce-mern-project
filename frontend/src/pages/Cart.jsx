import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export default function Cart() {
  const { cart, updateQty, removeFromCart } = useContext(ShopContext);

  // 💰 TOTAL CALCULATION
  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.qty;
  }, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 My Cart</h1>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Cart is Empty 😢</p>
      ) : (
        <>
          {/* CART ITEMS */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "15px",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                {/* IMAGE + INFO */}
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />

                  <div>
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>
                  </div>
                </div>

                {/* QUANTITY */}
                <div>
                  <button
                    onClick={() => updateQty(item.id, "dec")}
                    style={{ padding: "5px 10px" }}
                  >
                    -
                  </button>

                  <span style={{ margin: "0 10px", fontWeight: "bold" }}>
                    {item.qty}
                  </span>

                  <button
                    onClick={() => updateQty(item.id, "inc")}
                    style={{ padding: "5px 10px" }}
                  >
                    +
                  </button>
                </div>

                {/* REMOVE */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  ❌ Remove
                </button>
              </div>
            ))}
          </div>

          {/* TOTAL SECTION */}
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              textAlign: "right",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            💰 Total: ₹{total.toLocaleString()}
          </div>
        </>
      )}
    </div>
  );
}