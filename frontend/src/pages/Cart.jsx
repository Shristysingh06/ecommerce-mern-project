import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export default function Cart() {
  const { cart, updateQty, removeFromCart } = useContext(ShopContext);

  // 💰 TOTAL CALCULATION
  const total = cart.reduce((sum, item) => {
    return sum + Number(item.price) * item.qty;
  }, 0);

  // 🛒 EMPTY CART
  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>🛒 Cart is Empty 😢</h2>;
  }

  return (
    <div>
      <h1>🛒 My Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: "12px",
            margin: "10px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* PRODUCT INFO */}
          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            {/* QUANTITY */}
            <div>
              <button onClick={() => updateQty(item.id, "dec")}>
                -
              </button>

              <span style={{ margin: "0 10px", fontWeight: "bold" }}>
                {item.qty}
              </span>

              <button onClick={() => updateQty(item.id, "inc")}>
                +
              </button>
            </div>
          </div>

          {/* REMOVE */}
          <button
            onClick={() => removeFromCart(item.id)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "6px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Remove ❌
          </button>
        </div>
      ))}

      {/* TOTAL */}
      <h2 style={{ marginTop: "20px" }}>
        💰 Total: ₹{total.toLocaleString()}
      </h2>
    </div>
  );
}