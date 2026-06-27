const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected Successfully");
    console.log("Host:", conn.connection.host);
  } catch (error) {
    console.log("❌ MongoDB Connection Failed");
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;