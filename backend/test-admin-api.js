import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config({ path: "./config.env" });

const testAdminAPI = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    // Test the exact same query as the admin API
    const page = 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    console.log("=== Testing Admin Users Query ===");

    // 1. Test total count
    const total = await User.countDocuments({});
    console.log("1. Total users in database:", total);

    // 2. Test basic find without pagination
    const allUsers = await User.find({}).select("-password");
    console.log("2. All users found:", allUsers.length);
    if (allUsers.length > 0) {
      console.log("   First user:", allUsers[0]);
    }

    // 3. Test the exact admin API query
    const query = {};
    const users = await User.find(query)
      .select("-password")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    console.log("3. Paginated query result:", users.length);
    if (users.length > 0) {
      console.log("   First paginated user:", users[0]);
    }

    // 4. Test count with same query
    const totalWithQuery = await User.countDocuments(query);
    console.log("4. Count with query:", totalWithQuery);

    // 5. Simulate full API response
    const response = {
      success: true,
      data: {
        users,
        pagination: {
          page,
          limit,
          total: totalWithQuery,
          pages: Math.ceil(totalWithQuery / limit),
        },
      },
    };

    console.log("5. Full API Response:");
    console.log(JSON.stringify(response, null, 2));

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

testAdminAPI();
