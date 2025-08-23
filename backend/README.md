# Trivedia Flow Backend

A Node.js + Express + MongoDB backend API for the Trivedia Flow admin panel.

## Features

- **Authentication & Authorization**: JWT-based authentication with role-based access control
- **User Management**: CRUD operations for admin users with different roles
- **Content Management**: Dynamic content management for the website
- **File Upload**: Image upload functionality with validation
- **Security**: Rate limiting, CORS, helmet, input validation
- **Database**: MongoDB with Mongoose ODM

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Authentication**: JWT + bcryptjs
- **Validation**: express-validator
- **File Upload**: Multer
- **Security**: Helmet, CORS, Rate Limiting

## Prerequisites

- Node.js (v16 or higher)
- MongoDB database
- npm or yarn

## Installation

1. **Clone the repository and navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `config.env` and update with your configuration:
   ```bash
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   
   # MongoDB Configuration
   MONGODB_URI=your_mongodb_connection_string
   
   # JWT Configuration
   JWT_SECRET=your_super_secret_jwt_key
   JWT_EXPIRE=7d
   
   # File Upload Configuration
   MAX_FILE_SIZE=5242880
   UPLOAD_PATH=./uploads
   
   # CORS Configuration
   FRONTEND_URL=http://localhost:5173
   
   # Rate Limiting
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=100
   ```

4. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/profile` - Update user profile
- `PUT /api/auth/change-password` - Change password

### Admin Management
- `GET /api/admin/users` - Get all users (Admin only)
- `GET /api/admin/users/:id` - Get single user (Admin only)
- `POST /api/admin/users` - Create user (Admin only)
- `PUT /api/admin/users/:id` - Update user (Admin only)
- `DELETE /api/admin/users/:id` - Delete user (Admin only)
- `GET /api/admin/stats` - Get admin dashboard stats (Admin only)

### Content Management
- `GET /api/content` - Get all content (Public)
- `GET /api/content/:section` - Get specific content section (Public)
- `PUT /api/content/:section` - Update content section (Admin/Editor)
- `POST /api/content` - Create new content section (Admin)
- `DELETE /api/content/:section` - Delete content section (Admin)
- `GET /api/content/schema/:section` - Get content schema (Admin/Editor)

### File Upload
- `POST /api/upload/image` - Upload single image (Admin/Editor)
- `POST /api/upload/images` - Upload multiple images (Admin/Editor)
- `DELETE /api/upload/:filename` - Delete uploaded file (Admin/Editor)
- `GET /api/upload/files` - Get list of uploaded files (Admin/Editor)

## User Roles

- **Admin**: Full access to all features
- **Editor**: Can manage content and upload files
- **Viewer**: Read-only access

## Database Schema

### User Model
```javascript
{
  username: String (unique, required),
  email: String (unique, required),
  password: String (hashed, required),
  firstName: String (required),
  lastName: String (required),
  role: String (enum: 'admin', 'editor', 'viewer'),
  isActive: Boolean (default: true),
  lastLogin: Date,
  profileImage: String,
  createdAt: Date,
  updatedAt: Date
}
```

## Security Features

- **Password Hashing**: bcryptjs with salt rounds of 12
- **JWT Authentication**: Secure token-based authentication
- **Rate Limiting**: Prevents abuse with configurable limits
- **CORS**: Cross-origin resource sharing protection
- **Input Validation**: Comprehensive validation using express-validator
- **Helmet**: Security headers for Express
- **File Upload Security**: File type and size validation

## Error Handling

The API includes comprehensive error handling for:
- Validation errors
- Authentication errors
- Database errors
- File upload errors
- General server errors

## Development

### Project Structure
```
backend/
├── models/          # Database models
├── routes/          # API routes
├── middleware/      # Custom middleware
├── uploads/         # Uploaded files
├── config.env       # Environment variables
├── server.js        # Main server file
└── package.json     # Dependencies
```

### Adding New Features

1. **Create Model**: Add new schema in `models/` directory
2. **Create Routes**: Add new routes in `routes/` directory
3. **Add Middleware**: Create custom middleware if needed
4. **Update Server**: Register new routes in `server.js`

## Production Deployment

1. **Set Environment Variables**
   - Set `NODE_ENV=production`
   - Configure production MongoDB URI
   - Set secure JWT secret
   - Configure CORS for production domain

2. **Security Considerations**
   - Use HTTPS in production
   - Set up proper firewall rules
   - Configure MongoDB authentication
   - Use environment variables for sensitive data

3. **Performance Optimization**
   - Enable compression
   - Set up caching
   - Configure proper logging
   - Monitor application performance

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check MongoDB URI in config.env
   - Ensure MongoDB is running
   - Verify network connectivity

2. **JWT Token Issues**
   - Check JWT_SECRET in config.env
   - Verify token expiration settings
   - Check client-side token storage

3. **File Upload Issues**
   - Check upload directory permissions
   - Verify file size limits
   - Check file type validation

## Support

For issues and questions, please refer to the main project documentation or create an issue in the repository.
