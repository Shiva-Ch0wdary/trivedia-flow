import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

async function clearPricingPlans() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // Drop the collection
    await mongoose.connection.db
      .collection("pricingplans")
      .drop()
      .catch(() =>
        console.log("ℹ️  Collection may not exist or already dropped")
      );
    console.log("🗑️  Dropped pricingplans collection");

    await mongoose.connection.close();
    console.log("🔌 Connection closed");
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

clearPricingPlans();
