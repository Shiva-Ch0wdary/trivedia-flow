// Debug script to test frontend API calls
import axios from "axios";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: "./config.env" });

const baseURL = "http://localhost:8081/api";

async function testFrontendAPI() {
  try {
    console.log("🧪 Testing frontend API through proxy...");

    // Test login
    console.log("🔐 Testing login...");
    const loginResponse = await axios.post(`${baseURL}/auth/login`, {
      email: process.env.ADMIN_EMAIL || "shivachowdary753@gmail.com",
      password: process.env.ADMIN_PASSWORD || "admin123",
    });

    console.log("✅ Login successful");
    const token = loginResponse.data.data.token;

    // Test admin pricing API through frontend proxy
    console.log("📋 Testing admin pricing API through frontend proxy...");
    const pricingResponse = await axios.get(`${baseURL}/pricing/admin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("✅ Frontend proxy API working");
    console.log("📊 Response structure:", {
      success: pricingResponse.data.success,
      hasData: !!pricingResponse.data.data,
      hasPlans: !!pricingResponse.data.data?.plans,
      plansCount: pricingResponse.data.data?.plans?.length || 0,
    });

    console.log(
      "📝 First plan preview:",
      pricingResponse.data.data?.plans?.[0]?.name || "No plans"
    );
  } catch (error) {
    console.error(
      "❌ Error:",
      error.response?.status,
      error.response?.data?.message || error.message
    );
  }
}

testFrontendAPI();
