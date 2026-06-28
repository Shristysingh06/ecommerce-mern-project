import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export default function Cart() {
  const { cart, setCart } = useContext(ShopContext);

  // ➕ / ➖ QUANTITY UPDATE
  const updateQty = (index, type) => {
    const updated = [...cart];

    if (type === "dec") {
      if (updated[index].qty > 1) {
        updated[index].qty -= 1;
      }
    }

    if (type === "inc") {
      updated[index].qty = (updated[index].qty || 1) + 1;
    }

    setCart(updated);
  };

  // ❌ REMOVE ITEM
  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  // 💰 TOTAL CALCULATION (SAFE)
  const total = cart.reduce((sum, item) => {
    return sum + Number(item.price) * (item.qty || 1);
  }, 0);

  return (
    <div>
      <h1>🛒 My Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is Empty 😢</p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
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
                <button onClick={() => updateQty(index, "dec")}>-</button>

                <span style={{ margin: "0 10px", fontWeight: "bold" }}>
                  {item.qty || 1}
                </span>

                <button onClick={() => updateQty(index, "inc")}>+</button>
              </div>
            </div>

            {/* REMOVE BUTTON */}
            <button
              onClick={() => removeItem(index)}
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
        ))
      )}

      {/* TOTAL */}
      <h2 style={{ marginTop: "20px" }}>
        💰 Total: ₹{total.toLocaleString()}
      </h2>
    </div>
  );
}