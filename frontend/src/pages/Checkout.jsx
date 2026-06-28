import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

export default function Checkout() {
  const { cart } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleOrder = () => {
    if (!name || !phone || !address) {
      alert("⚠️ Please fill all details");
      return;
    }

    alert("🎉 Order Placed Successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🧾 Checkout</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {/* LEFT - ORDER SUMMARY */}
        <div
          style={{
            flex: 1,
            minWidth: "280px",
            background: "#fff",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>🛒 Order Summary</h2>

          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span>
                {item.name} - {item.qty} x ₹{item.price}
              </span>
            </div>
          ))}

          <hr />

          <h3>💰 Total: ₹{total.toLocaleString()}</h3>
        </div>

        {/* RIGHT - FORM */}
        <div
          style={{
            flex: 1,
            minWidth: "280px",
            background: "#fff",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>📦 Delivery Details</h2>

          <input
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Enter Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle}
          />

          <textarea
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ ...inputStyle, height: "80px" }}
          />

          <button onClick={handleOrder} style={btnStyle}>
            🚀 Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

// INPUT STYLE
const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "8px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

// BUTTON STYLE
const btnStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  background: "black",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};