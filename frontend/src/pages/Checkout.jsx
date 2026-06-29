import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export default function Checkout() {
  const { cart } = useContext(ShopContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>🧾 Checkout</h1>

      {cart.length === 0 ? (
        <p>Cart is empty 😢</p>
      ) : (
        cart.map((item) => (
          <p key={item.id}>
            {item.name} - {item.qty || 1} x ₹{item.price}
          </p>
        ))
      )}

      <h2>Total: ₹{total}</h2>
    </div>
  );
}