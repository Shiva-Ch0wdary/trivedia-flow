import axios from "axios";

const baseURL = "http://localhost:5000/api";

// Login to get token
const loginResponse = await axios.post(`${baseURL}/auth/login`, {
  email: "shivachowdary753@gmail.com",
  password: "admin123",
});

console.log("✅ Login successful");
console.log("🎫 Token:", loginResponse.data.data.token);

// Test admin pricing endpoint
const token = loginResponse.data.data.token;
const pricingResponse = await axios.get(`${baseURL}/pricing/admin`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

console.log("✅ Admin pricing API working");
console.log("📋 Plans found:", pricingResponse.data.data.plans.length);
console.log("📝 Plans data:", JSON.stringify(pricingResponse.data, null, 2));
