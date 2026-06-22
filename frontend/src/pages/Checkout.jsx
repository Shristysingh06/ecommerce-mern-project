import { useState } from "react";

export default function Checkout() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce((sum, item) => {
    const price = Number(
      item.price.replace("₹", "").replace(/,/g, "")
    );
    return sum + price * (item.qty || 1);
  }, 0);

  const handleOrder = () => {
    if (!name || !phone || !address) {
      setMessage("❌ Please fill all fields");
      return;
    }

    setMessage("🎉 Order Placed Successfully!");
    localStorage.removeItem("cart"); // clear cart after order
  };

  return (
    <div>
      <h1>Checkout</h1>

      {/* 🛒 CART SUMMARY */}
      <h3>Order Summary</h3>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <p>
              {item.name} - {item.qty || 1} x {item.price}
            </p>
          </div>
        ))
      )}

      <h2>Total: ₹{total.toLocaleString()}</h2>

      <hr />

      {/* FORM */}
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <br /><br />

      <button onClick={handleOrder}>
        Place Order
      </button>

      <h3>{message}</h3>
    </div>
  );
}