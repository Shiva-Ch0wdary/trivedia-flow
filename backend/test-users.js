import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config({ path: "./config.env" });

const testUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    const users = await User.find({}).select("-password");
    console.log(`Found ${users.length} users in database`);

    if (users.length > 0) {
      console.log("Users:");
      users.forEach((user, index) => {
        console.log(
          `${index + 1}. ${user.fullName} (${user.email}) - Role: ${user.role}`
        );
      });
    } else {
      console.log("No users found. Creating admin user...");
      const adminUser = await User.create({
        username: "admin",
        email: "admin@trivedia.com",
        password: "admin123",
        firstName: "Admin",
        lastName: "User",
        role: "admin",
      });
      console.log("Admin user created:", adminUser.getPublicProfile());

      // Create a test regular user
      const testUser = await User.create({
        username: "testuser",
        email: "test@example.com",
        password: "test123",
        firstName: "Test",
        lastName: "User",
        role: "viewer",
      });
      console.log("Test user created:", testUser.getPublicProfile());
    }

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

testUsers();
