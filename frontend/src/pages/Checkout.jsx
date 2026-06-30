import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

export default function Checkout() {
  const { cart, setCart } = useContext(ShopContext);

  const [showPopup, setShowPopup] = useState(false);

  // TOTAL CALCULATION
  const total = cart.reduce((sum, item) => {
    return sum + item.price * (item.qty || 1);
  }, 0);

  // PLACE ORDER
  const handleOrder = () => {
    if (cart.length === 0) return;

    const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      items: cart,
      total: total,
      date: new Date().toLocaleString(),
    };

    localStorage.setItem("orders", JSON.stringify([...oldOrders, newOrder]));

    setCart([]); // clear cart
    setShowPopup(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🧾 Checkout</h1>

      {/* CART ITEMS */}
      {cart.length === 0 ? (
        <p>🛒 Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{item.name}</h3>
            <p>
              {item.qty || 1} × ₹{item.price}
            </p>
          </div>
        ))
      )}

      {/* TOTAL */}
      <h2>💰 Total: ₹{total}</h2>

      {/* PLACE ORDER BUTTON */}
      {cart.length > 0 && (
        <button
          onClick={handleOrder}
          style={{
            padding: "10px 20px",
            background: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "6px",
          }}
        >
          🧾 Place Order
        </button>
      )}

      {/* POPUP */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "10px",
              textAlign: "center",
              width: "300px",
            }}
          >
            <h2>🎉 Order Successful!</h2>
            <p>Your order has been placed.</p>
            <p>Thank you 🛍️</p>

            <button
              onClick={() => setShowPopup(false)}
              style={{
                marginTop: "10px",
                padding: "8px 15px",
                background: "black",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}