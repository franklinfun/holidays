# AGS Holidays - Complete Credentials & Endpoints

## 🔐 Application Credentials

### Frontend URL
```
http://localhost:5174
```

### Backend API URL
```
http://localhost:5000
```

### API Base URL
```
http://localhost:5000/api
```

---

## 🗄️ Database Credentials

### Local MongoDB
```
Connection String: mongodb://localhost:27017/agsholidays
Database Name: agsholidays
Port: 27017
```

### MongoDB Atlas (Cloud) - Optional
```
Format: mongodb+srv://<username>:<password>@cluster.mongodb.net/agsholidays
Replace <username> and <password> with your Atlas credentials
```

---

## 🔑 JWT Secrets (IMPORTANT: Change these in production!)

### Access Token Secret
```
ags_holidays_jwt_secret_2025_change_in_production_xyz789
```

### Refresh Token Secret
```
ags_holidays_refresh_secret_2025_change_in_production_abc123
```

### Token Expiration
```
Access Token: 15 minutes (15m)
Refresh Token: 7 days (7d)
```

---

## 📡 API Endpoints

### Authentication Endpoints

#### 1. Register User
```
POST /api/auth/register
Content-Type: application/json

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

Response (Success - 201):
{
  "success": true,
  "user": {
    "id": "65a1b2c3d4e5f6789abcdef0",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

Response (Error - 400):
{
  "message": "User with this email already exists"
}
```

#### 2. Login User
```
POST /api/auth/login
Content-Type: application/json

Request Body:
{
  "email": "john@example.com",
  "password": "password123"
}

Response (Success - 200):
{
  "success": true,
  "user": {
    "id": "65a1b2c3d4e5f6789abcdef0",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

Response (Error - 401):
{
  "message": "Invalid email or password"
}
```

#### 3. Refresh Access Token
```
POST /api/auth/refresh
Content-Type: application/json

Request Body:
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

Response (Success - 200):
{
  "success": true,
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

Response (Error - 401):
{
  "message": "Invalid or expired refresh token"
}
```

#### 4. Get Current User (Protected)
```
GET /api/auth/me
Authorization: Bearer <accessToken>

Response (Success - 200):
{
  "success": true,
  "user": {
    "id": "65a1b2c3d4e5f6789abcdef0",
    "name": "John Doe",
    "email": "john@example.com"
  }
}

Response (Error - 401):
{
  "message": "Invalid token"
}
```

### Health Check

#### 5. API Health Check
```
GET /api/health

Response (200):
{
  "status": "OK",
  "message": "AGS Holidays API is running"
}
```

---

## 📝 Test Credentials

### Demo User 1
```
Email: admin@agsholidays.in
Password: admin123
```

### Demo User 2 (Create via Register)
```
Name: Test User
Email: test@example.com
Password: test123456
```

---

## 🌐 Environment Variables

### Frontend (.env)
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### Backend (server/.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/agsholidays
JWT_SECRET=ags_holidays_jwt_secret_2025_change_in_production_xyz789
JWT_REFRESH_SECRET=ags_holidays_refresh_secret_2025_change_in_production_abc123
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d
FRONTEND_URL=http://localhost:5174
```

---

## 🔧 Setup Instructions

### 1. Backend Setup
```bash
cd server
npm install
# Create .env file with above credentials
npm run dev
```

### 2. Frontend Setup
```bash
# In root directory
npm install
# Create .env file with above credentials
npm run dev
```

---

## 📊 Database Schema

### User Collection
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, unique, lowercase),
  password: String (required, hashed),
  role: String (enum: ['user', 'admin'], default: 'user'),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🚀 Quick Start Commands

### Start Backend
```bash
cd server
npm run dev
```
Backend will run on: http://localhost:5000

### Start Frontend
```bash
npm run dev
```
Frontend will run on: http://localhost:5174

### Build for Production
```bash
# Frontend
npm run build

# Backend
cd server
npm start
```

---

## 🔒 Security Notes

1. **JWT Secrets**: ALWAYS change the JWT secrets in production
2. **MongoDB**: Use strong passwords for production databases
3. **HTTPS**: Use HTTPS in production for secure connections
4. **CORS**: Update `FRONTEND_URL` for production frontend domain
5. **Environment Variables**: Never commit `.env` files to git

---

## 📞 Support

For issues or questions:
- Check the README.md for detailed documentation
- Review SETUP.md for setup instructions
- Check server logs for backend errors
- Check browser console for frontend errors

---

## 🎯 API Testing Examples

### Using cURL

#### Register
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

#### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

#### Get Current User
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## ✅ Verification Checklist

- [ ] MongoDB is running (local or Atlas)
- [ ] Backend server is running on port 5000
- [ ] Frontend server is running on port 5174
- [ ] Environment variables are set correctly
- [ ] Can access http://localhost:5000/api/health
- [ ] Can register a new user
- [ ] Can login with registered user
- [ ] Can access protected dashboard route

---

**Last Updated**: January 2025
**Version**: 1.0.0

