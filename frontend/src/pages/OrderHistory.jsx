import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const { cart, addOrder, setCart, darkMode } = useContext(ShopContext);
  const [method, setMethod] = useState("upi");
  const navigate = useNavigate();

  // 💰 TOTAL
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  // 💳 PAYMENT HANDLER
  const handlePayment = () => {
    if (!cart.length) {
      alert("Cart is empty!");
      return;
    }

    const order = {
      id: Date.now(),
      items: cart,
      total: total,
      method: method,
      date: new Date().toLocaleString(),
      status: "Paid",
    };

    // 📦 SAVE ORDER
    addOrder(order);

    // 🧹 CLEAR CART
    setCart([]);

    alert("🎉 Payment Successful! Order Placed.");

    // 👉 GO TO ORDERS PAGE
    navigate("/orders");
  };

  return (
    <div
      style={{
        padding: "20px",
        color: darkMode ? "white" : "black",
      }}
    >
      <h1>💳 Payment Page</h1>

      {/* 🧾 ORDER SUMMARY */}
      <div
        style={{
          padding: "15px",
          borderRadius: "10px",
          background: darkMode ? "#1e1e1e" : "#f9f9f9",
          marginBottom: "20px",
        }}
      >
        <h2>💰 Total Amount: ₹{total}</h2>
        <p>🛒 Items: {cart.length}</p>
      </div>

      {/* 💳 PAYMENT METHODS */}
      <div>
        <h3>Select Payment Method</h3>

        <label>
          <input
            type="radio"
            value="upi"
            checked={method === "upi"}
            onChange={(e) => setMethod(e.target.value)}
          />
          UPI
        </label>

        <br />

        <label>
          <input
            type="radio"
            value="card"
            checked={method === "card"}
            onChange={(e) => setMethod(e.target.value)}
          />
          Card
        </label>

        <br />

        <label>
          <input
            type="radio"
            value="cod"
            checked={method === "cod"}
            onChange={(e) => setMethod(e.target.value)}
          />
          Cash on Delivery
        </label>
      </div>

      {/* 💥 PAY BUTTON */}
      <button
        onClick={handlePayment}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          background: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Pay & Place Order
      </button>
    </div>
  );
}