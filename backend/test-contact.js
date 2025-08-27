import fetch from "node-fetch";

async function testContactSubmission() {
  console.log("🧪 Testing contact form submission with email...");

  const testData = {
    name: "Test User",
    email: "test@example.com", // Change this to your test email
    company: "Test Company",
  phone: "+91 7330975148",
    projectType: "Website Development",
    budget: "₹50k - ₹1L",
    timeline: "1-2 months",
    message:
      "This is a test message to verify that the contact form and email system is working properly.",
  };

  try {
    const response = await fetch("http://localhost:5001/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();

    if (result.success) {
      console.log("✅ Contact form submission SUCCESSFUL");
      console.log("📧 Email status:", result.data.emailStatus);
      console.log("📝 Contact ID:", result.data.id);
    } else {
      console.log("❌ Contact form submission FAILED");
      console.log("Error:", result.message);
      if (result.errors) {
        console.log("Validation errors:", result.errors);
      }
    }
  } catch (error) {
    console.log("❌ Contact form test error:", error.message);
  }
}

testContactSubmission();
