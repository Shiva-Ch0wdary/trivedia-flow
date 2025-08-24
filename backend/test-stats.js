import mongoose from "mongoose";
import Contact from "./models/Contact.js";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

console.log("Testing contact stats...");

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", async () => {
  console.log("Connected to MongoDB");

  try {
    // Test the getStats method
    const stats = await Contact.getStats();
    console.log("Contact stats:", stats);

    // Test count
    const totalCount = await Contact.countDocuments();
    console.log("Total contacts in database:", totalCount);

    // Test today count
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayCount = await Contact.countDocuments({
      createdAt: { $gte: todayStart },
    });
    console.log("Contacts created today:", todayCount);

    // Show all contacts
    const allContacts = await Contact.find().select(
      "name email createdAt status"
    );
    console.log("All contacts:");
    allContacts.forEach((contact) => {
      console.log(
        `- ${contact.name} (${contact.email}) - ${contact.status} - ${contact.createdAt}`
      );
    });
  } catch (error) {
    console.error("Error testing stats:", error);
  } finally {
    process.exit(0);
  }
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});
