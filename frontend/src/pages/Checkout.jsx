import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, setCart, addOrder, darkMode } = useContext(ShopContext);
  const navigate = useNavigate();

  // 💰 TOTAL PRICE
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  // 📦 PLACE ORDER
  const handleOrder = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    const order = {
      id: Date.now(),
      items: cart,
      total,
      date: new Date().toLocaleString(),
    };

    addOrder(order);
    setCart([]); // clear cart

    alert("Order Placed Successfully 🎉");

    navigate("/orders");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🧾 Checkout</h1>

      {/* CART ITEMS */}
      <div>
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "10px",
              background: darkMode ? "#1e1e1e" : "#fff",
              boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
            }}
          >
            <p>{item.name}</p>
            <p>
              ₹{item.price} × {item.qty || 1}
            </p>
          </div>
        ))}
      </div>

      {/* TOTAL */}
      <h2>💰 Total: ₹{total}</h2>

      {/* BUTTON */}
      <button
        onClick={handleOrder}
        style={{
          padding: "12px 20px",
          background: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Place Order
      </button>
    </div>
  );
}