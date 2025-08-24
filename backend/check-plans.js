import mongoose from "mongoose";
import PricingPlan from "./models/PricingPlan.js";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

async function checkPlans() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    const plans = await PricingPlan.find({});
    console.log(`\n📊 Found ${plans.length} pricing plans in database:`);

    plans.forEach((plan) => {
      console.log(
        `- ${plan.name}: ${plan.price}${plan.popular ? " [POPULAR]" : ""}`
      );
      console.log(`  Features: ${plan.features.length}`);
      console.log(`  Order: ${plan.order}, Active: ${plan.isActive}`);
      console.log("");
    });

    await mongoose.connection.close();
    console.log("🔌 Connection closed");
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

checkPlans();
