# 🎯 Complete Setup & Credentials - AGS Holidays

## ✅ Setup Status

Your project is now **fully configured** with:
- ✅ Backend dependencies installed
- ✅ Environment files created (.env)
- ✅ All credentials configured
- ✅ Ready to run!

---

## 🔑 All Credentials

### Application URLs
```
Frontend: http://localhost:5174
Backend API: http://localhost:5000
API Base: http://localhost:5000/api
```

### Database (MongoDB)
```
Local MongoDB:
  Connection: mongodb://localhost:27017/agsholidays
  Database: agsholidays
  Port: 27017

MongoDB Atlas (Optional):
  Format: mongodb+srv://username:password@cluster.mongodb.net/agsholidays
  Update in: server/.env (MONGODB_URI)
```

### JWT Secrets (Already Configured)
```
JWT_SECRET: ags_holidays_jwt_secret_2025_change_in_production_xyz789
JWT_REFRESH_SECRET: ags_holidays_refresh_secret_2025_change_in_production_abc123
Access Token Expiry: 15 minutes
Refresh Token Expiry: 7 days
```

---

## 📡 Complete API Endpoints List

### Base URL
```
http://localhost:5000/api
```

### 1. Health Check
```
GET /api/health

Response:
{
  "status": "OK",
  "message": "AGS Holidays API is running"
}

Test: http://localhost:5000/api/health
```

### 2. Register User
```
POST /api/auth/register
Content-Type: application/json

Request:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

Success Response (201):
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

Error Responses:
400: User already exists / Invalid input
500: Server error
```

### 3. Login User
```
POST /api/auth/login
Content-Type: application/json

Request:
{
  "email": "john@example.com",
  "password": "password123"
}

Success Response (200):
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

Error Responses:
401: Invalid email or password
500: Server error
```

### 4. Refresh Access Token
```
POST /api/auth/refresh
Content-Type: application/json

Request:
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

Success Response (200):
{
  "success": true,
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

Error Responses:
401: Invalid or expired refresh token
```

### 5. Get Current User (Protected)
```
GET /api/auth/me
Authorization: Bearer <accessToken>

Success Response (200):
{
  "success": true,
  "user": {
    "id": "65a1b2c3d4e5f6789abcdef0",
    "name": "John Doe",
    "email": "john@example.com"
  }
}

Error Responses:
401: Invalid token / No token provided
404: User not found
```

---

## 🚀 Quick Start Commands

### 1. Start Backend Server
```bash
cd server
npm run dev
```
**Expected Output:**
```
MongoDB Connected: localhost:27017
Server running on port 5000
```

### 2. Start Frontend Server (New Terminal)
```bash
npm run dev
```
**Expected Output:**
```
VITE v7.x.x  ready in xxx ms
➜  Local:   http://localhost:5174/
```

---

## 🧪 Test Credentials

### Option 1: Create New User via Frontend
1. Go to: http://localhost:5174/register
2. Fill in registration form
3. Click "Create Account"

### Option 2: Use API Directly

#### Register via cURL:
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Test User\",\"email\":\"test@example.com\",\"password\":\"test123456\"}"
```

#### Login via cURL:
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"test@example.com\",\"password\":\"test123456\"}"
```

---

## 📁 Environment Files Created

### Frontend (.env)
```
✅ Location: .env
✅ Content: VITE_API_BASE_URL=http://localhost:5000/api
```

### Backend (server/.env)
```
✅ Location: server/.env
✅ Contains: All backend configuration including MongoDB URI and JWT secrets
```

---

## ✅ Verification Steps

### Step 1: Check MongoDB Connection
```bash
# Verify MongoDB is running (if local)
mongod --version

# Or check if MongoDB service is running
```

### Step 2: Test Backend Health
Open browser: http://localhost:5000/api/health

Should return:
```json
{
  "status": "OK",
  "message": "AGS Holidays API is running"
}
```

### Step 3: Test Frontend
Open browser: http://localhost:5174

You should see the AGS Holidays homepage.

### Step 4: Test Registration
1. Go to http://localhost:5174/register
2. Create an account
3. Should redirect to dashboard

### Step 5: Test Login
1. Logout from dashboard
2. Go to http://localhost:5174/login
3. Login with your credentials
4. Should redirect to dashboard

---

## 📊 Database Schema

### User Collection Structure
```javascript
{
  _id: ObjectId("65a1b2c3d4e5f6789abcdef0"),
  name: "John Doe",
  email: "john@example.com",
  password: "$2a$10$hashed_password...", // bcrypt hashed
  role: "user", // or "admin"
  createdAt: ISODate("2025-01-XX..."),
  updatedAt: ISODate("2025-01-XX...")
}
```

---

## 🔐 Security Information

### Password Hashing
- Algorithm: bcrypt
- Salt Rounds: 10
- Passwords are never stored in plain text

### Token Security
- Access tokens expire in 15 minutes
- Refresh tokens expire in 7 days
- Tokens are signed with JWT_SECRET
- Always use HTTPS in production

### Important Notes
⚠️ **CHANGE JWT_SECRET in production!**
⚠️ **Use strong MongoDB passwords in production!**
⚠️ **Enable HTTPS in production!**
⚠️ **Update CORS settings for production domain!**

---

## 🐛 Common Issues & Solutions

### Issue: MongoDB Connection Failed
**Error:** `Database connection error`
**Solution:**
- Check MongoDB is running (local)
- Verify `MONGODB_URI` in `server/.env`
- For Atlas: Check username, password, and IP whitelist

### Issue: Port Already in Use
**Error:** `Port 5000 is already in use`
**Solution:**
- Change `PORT` in `server/.env` to `5001`
- Update `VITE_API_BASE_URL` in `.env` to match

### Issue: CORS Error
**Error:** `Access blocked by CORS`
**Solution:**
- Ensure backend is running
- Check `FRONTEND_URL` in `server/.env`
- Verify `VITE_API_BASE_URL` in frontend `.env`

---

## 📚 Documentation Files

1. **CREDENTIALS.md** - Complete credentials and endpoints reference
2. **QUICK_START.md** - Quick setup guide
3. **SETUP.md** - Detailed setup instructions
4. **README.md** - Complete project documentation
5. **server/README.md** - Backend API documentation

---

## 🎉 You're All Set!

Your AGS Holidays application is now completely configured and ready to run!

### Next Steps:
1. ✅ Start backend: `cd server && npm run dev`
2. ✅ Start frontend: `npm run dev` (in root directory)
3. ✅ Open browser: http://localhost:5174
4. ✅ Register a new user and explore!

### Need Help?
- Check `CREDENTIALS.md` for API details
- Review `QUICK_START.md` for setup steps
- See `README.md` for full documentation

---

**Created:** January 2025  
**Version:** 1.0.0  
**Status:** ✅ Ready for Development

