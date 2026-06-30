import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLISHABLE_KEY");

export default function Payment() {
  const { cart } = useContext(ShopContext);

  const handlePayment = async () => {
    const stripe = await stripePromise;

    const res = await fetch("http://localhost:5000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });

    const session = await res.json();

    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>💳 Stripe Payment</h1>

      <button
        onClick={handlePayment}
        style={{
          padding: "12px 20px",
          background: "#635bff",
          color: "white",
          border: "none",
          borderRadius: "8px",
        }}
      >
        Pay Now
      </button>
    </div>
  );
}