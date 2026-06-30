import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

export default function Payment({ total }) {
  const handlePayment = async () => {
    const stripe = await stripePromise;

    alert("Redirecting to Stripe (demo mode)");

    console.log("Paying amount:", total);

    // backend integrate later
  };

  return (
    <button
      onClick={handlePayment}
      style={{
        background: "green",
        color: "white",
        padding: "10px 15px",
        border: "none",
        cursor: "pointer",
        borderRadius: "6px",
      }}
    >
      💳 Pay ₹{total}
    </button>
  );
}