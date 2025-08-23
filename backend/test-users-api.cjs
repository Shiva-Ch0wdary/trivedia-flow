const User = require('./models/User');
const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });

async function testUsersAPI() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    
    // Test the actual query that the API uses
    const page = parseInt(1) || 1;
    const limit = parseInt(10) || 10;
    const skip = (page - 1) * limit;

    console.log('Query params:', { page, limit, skip });

    const query = {};
    
    const [users, total] = await Promise.all([
      User.find(query)
        .select('-password')
        .sort({ createdAt: -1 })
        .limit(limit)
        .skip(skip)
        .lean(),
      User.countDocuments(query)
    ]);

    const totalPages = Math.ceil(total / limit);

    const response = {
      success: true,
      data: {
        users,
        pagination: {
          currentPage: page,
          totalPages,
          totalUsers: total,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
        }
      }
    };

    console.log('Final response structure:');
    console.log(JSON.stringify(response, null, 2));
    console.log('Users found:', users.length);
    console.log('First user:', users[0]);
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
  }
}

testUsersAPI();
