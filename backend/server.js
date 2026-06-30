const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const connectDB = require("./config/db");

// Routes
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const authRoutes = require("./routes/authRoutes");

// Connect DB
connectDB();

const app = express();

/* =========================
   MIDDLEWARE
========================= */
app.use(cors());
app.use(express.json());

/* =========================
   TEST ROUTE
========================= */
app.get("/", (req, res) => {
  res.status(200).json({
    message: "🚀 API Running Successfully",
    status: "OK",
    time: new Date().toISOString(),
  });
});

/* =========================
   API ROUTES
========================= */
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);

/* =========================
   💳 STRIPE PAYMENT ROUTE
========================= */
app.post("/api/payment/create-checkout-session", async (req, res) => {
  try {
    const { cart } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cart.map((item) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.qty,
      })),
      mode: "payment",
      success_url: "http://localhost:3000/orders",
      cancel_url: "http://localhost:3000/cart",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Stripe Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Payment Failed",
    });
  }
});

/* =========================
   ERROR HANDLING
========================= */
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
  console.log(`📡 http://localhost:${PORT}`);
});