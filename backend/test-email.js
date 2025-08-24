import { testEmailConfig } from "./utils/emailService.js";

async function testEmail() {
  console.log("🧪 Starting email configuration test...");

  try {
    const result = await testEmailConfig();

    if (result.success) {
      console.log("✅ Email configuration test PASSED");
      console.log("📧 Ready to send emails!");
    } else {
      console.log("❌ Email configuration test FAILED");
      console.log("Error:", result.error);
    }
  } catch (error) {
    console.log("❌ Email test threw an error:", error.message);
  }
}

testEmail();
