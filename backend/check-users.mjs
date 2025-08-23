import mongoose from "mongoose";
import User from "./models/User.js";
import bcrypt from "bcryptjs";

// Connect to MongoDB
await mongoose.connect(
  "mongodb+srv://shivachowdary753:shiva%402024@cluster0.autdqcj.mongodb.net/trivedia_db?retryWrites=true&w=majority&appName=Cluster0"
);

try {
  console.log("🔍 Checking existing users...");

  const users = await User.find({}).select("-password");
  console.log(`📊 Total users found: ${users.length}`);

  if (users.length > 0) {
    console.log("👤 Users:");
    users.forEach((user, index) => {
      console.log(
        `${index + 1}. ${user.firstName} ${user.lastName} (${
          user.email
        }) - Role: ${user.role}, Active: ${user.isActive}`
      );
    });
  }

  // Check if admin user exists
  const adminUser = await User.findOne({ email: "shivachowdary753@gmail.com" });
  if (adminUser) {
    console.log("✅ Admin user found:", adminUser.email);
    console.log("🔐 Testing password...");
    const isPasswordValid = await bcrypt.compare("123456", adminUser.password);
    console.log('🔓 Password valid with "123456":', isPasswordValid);

    if (!isPasswordValid) {
      const isPasswordValid2 = await bcrypt.compare(
        "admin123",
        adminUser.password
      );
      console.log('🔓 Password valid with "admin123":', isPasswordValid2);
    }
  } else {
    console.log("❌ Admin user not found");
    console.log("🔨 Creating admin user...");

    const hashedPassword = await bcrypt.hash("admin123", 12);

    const newAdmin = new User({
      username: "admin",
      email: "shivachowdary753@gmail.com",
      firstName: "Shiva",
      lastName: "Chowdary",
      password: hashedPassword,
      role: "admin",
      isActive: true,
    });

    await newAdmin.save();
    console.log("✅ Admin user created successfully");
  }
} catch (error) {
  console.error("❌ Error:", error);
} finally {
  await mongoose.disconnect();
  console.log("🔌 Disconnected from MongoDB");
}
