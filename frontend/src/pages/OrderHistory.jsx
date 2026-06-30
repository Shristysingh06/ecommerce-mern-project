import { useEffect, useState } from "react";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(saved);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📦 Order History</h1>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              border: "1px solid #ccc",
              marginBottom: "15px",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>Order ID: {order.id}</h3>
            <p>Date: {order.date}</p>

            {order.items.map((item, i) => (
              <p key={i}>
                {item.name} - {item.qty} × ₹{item.price}
              </p>
            ))}

            <h4>Total: ₹{order.total}</h4>
          </div>
        ))
      )}
    </div>
  );
}