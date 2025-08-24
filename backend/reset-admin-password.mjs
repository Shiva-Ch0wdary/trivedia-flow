import mongoose from "mongoose";
import User from "./models/User.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: "./config.env" });

// Connect to MongoDB
await mongoose.connect(process.env.MONGODB_URI);

try {
  console.log("🔍 Finding admin user...");

  const adminUser = await User.findOne({ email: process.env.ADMIN_EMAIL });
  if (adminUser) {
    console.log("✅ Admin user found:", adminUser.email);
    console.log(`🔧 Resetting password to '${process.env.ADMIN_PASSWORD}'...`);

    // Hash the new password
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 12);

    // Update the password directly
    await User.findByIdAndUpdate(adminUser._id, { password: hashedPassword });

    console.log("✅ Password reset successfully!");
    console.log("📝 Admin credentials:");
    console.log(`   Email: ${process.env.ADMIN_EMAIL}`);
    console.log(`   Password: ${process.env.ADMIN_PASSWORD}`);
  } else {
    console.log("❌ Admin user not found");
  }
} catch (error) {
  console.error("❌ Error:", error);
} finally {
  await mongoose.disconnect();
  console.log("🔌 Disconnected from MongoDB");
}
