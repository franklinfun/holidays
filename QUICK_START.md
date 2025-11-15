# 🚀 Quick Start Guide - AGS Holidays

Complete step-by-step setup guide to get your application running in 5 minutes!

## Prerequisites ✅

- Node.js v18+ installed
- MongoDB installed locally OR MongoDB Atlas account
- Terminal/Command Prompt

---

## Step 1: Install Dependencies

### Backend Dependencies
```bash
cd server
npm install
cd ..
```

### Frontend Dependencies (already installed)
```bash
npm install
```

---

## Step 2: Set Up MongoDB

### Option A: Local MongoDB (Recommended for Development)

1. **Install MongoDB**
   - Download from: https://www.mongodb.com/try/download/community
   - Install MongoDB Community Server
   - Start MongoDB service

2. **Verify MongoDB is Running**
   ```bash
   # On Windows
   mongod --version
   
   # MongoDB should be running on default port 27017
   ```

### Option B: MongoDB Atlas (Cloud - Free)

1. **Create Account**
   - Go to: https://www.mongodb.com/cloud/atlas/register
   - Sign up for free account

2. **Create Cluster**
   - Click "Build a Database"
   - Choose FREE tier (M0)
   - Select your preferred cloud provider and region
   - Click "Create"

3. **Create Database User**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Username: `agsholidays_user`
   - Password: Create a strong password (save it!)
   - Click "Add User"

4. **Whitelist IP Address**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
   - Or add your specific IP address

5. **Get Connection String**
   - Go to "Database" → Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password
   - Example: `mongodb+srv://agsholidays_user:yourpassword@cluster0.xxxxx.mongodb.net/agsholidays`

---

## Step 3: Configure Environment Variables

### Backend Configuration

The file `server/.env` is already created with default values:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/agsholidays
JWT_SECRET=ags_holidays_jwt_secret_2025_change_in_production_xyz789
JWT_REFRESH_SECRET=ags_holidays_refresh_secret_2025_change_in_production_abc123
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d
FRONTEND_URL=http://localhost:5174
```

**If using MongoDB Atlas:**
- Update `MONGODB_URI` in `server/.env` with your Atlas connection string

### Frontend Configuration

The file `.env` is already created with:
```
VITE_API_BASE_URL=http://localhost:5000/api
```

**No changes needed** unless your backend runs on a different port.

---

## Step 4: Start the Application

### Terminal 1 - Start Backend Server
```bash
cd server
npm run dev
```

You should see:
```
MongoDB Connected: localhost:27017
Server running on port 5000
```

### Terminal 2 - Start Frontend Server
```bash
npm run dev
```

You should see:
```
VITE v7.x.x  ready in xxx ms
➜  Local:   http://localhost:5174/
```

---

## Step 5: Test the Application

### 1. Open Browser
Go to: http://localhost:5174

### 2. Test Health Check
Go to: http://localhost:5000/api/health

Should return:
```json
{
  "status": "OK",
  "message": "AGS Holidays API is running"
}
```

### 3. Register a New User
- Click "Sign Up" button
- Fill in the registration form:
  - Name: Your Name
  - Email: your@email.com
  - Password: yourpassword123
- Click "Create Account"
- You should be redirected to Dashboard

### 4. Test Login
- Logout from dashboard
- Click "Login"
- Use the credentials you just created
- Should successfully login

---

## 🎯 Test Credentials

### Default Admin User (if you created it)
```
Email: admin@agsholidays.in
Password: admin123
```

### Create Your Own Test User
Register via the frontend interface at http://localhost:5174/register

---

## 📡 API Endpoints Reference

All endpoints are documented in `CREDENTIALS.md`

### Quick Reference:
- **POST** `/api/auth/register` - Register user
- **POST** `/api/auth/login` - Login user
- **POST** `/api/auth/refresh` - Refresh token
- **GET** `/api/auth/me` - Get current user (protected)
- **GET** `/api/health` - Health check

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```
Error: Database connection error
```
**Solution:**
- Make sure MongoDB is running (local)
- Check connection string in `server/.env`
- For Atlas: Verify username, password, and IP whitelist

### Port Already in Use
```
Error: Port 5000 is already in use
```
**Solution:**
- Change `PORT` in `server/.env` to another port (e.g., 5001)
- Update `VITE_API_BASE_URL` in frontend `.env` accordingly

### CORS Error
```
Access to fetch blocked by CORS policy
```
**Solution:**
- Make sure backend is running
- Check `FRONTEND_URL` in `server/.env` matches frontend URL
- Verify `VITE_API_BASE_URL` in frontend `.env`

### Module Not Found
```
Error: Cannot find module 'express'
```
**Solution:**
```bash
cd server
npm install
```

### Frontend Can't Connect to Backend
```
Failed to fetch
```
**Solution:**
- Verify backend is running on port 5000
- Check `VITE_API_BASE_URL` in `.env` is correct
- Make sure no firewall is blocking the connection

---

## ✅ Verification Checklist

Before proceeding, verify:

- [ ] MongoDB is running (local or Atlas connected)
- [ ] Backend dependencies installed (`cd server && npm install`)
- [ ] Frontend dependencies installed (`npm install`)
- [ ] Environment variables configured (`.env` files exist)
- [ ] Backend server starts without errors
- [ ] Frontend server starts without errors
- [ ] Can access http://localhost:5174
- [ ] Can access http://localhost:5000/api/health
- [ ] Can register a new user
- [ ] Can login with credentials

---

## 🎉 Success!

If all checks pass, your application is running successfully!

### Next Steps:
1. Explore the dashboard at http://localhost:5174/dashboard
2. Browse packages and services on the homepage
3. Check `CREDENTIALS.md` for API documentation
4. Review `README.md` for detailed information

---

## 📚 Additional Resources

- **Full API Documentation**: See `CREDENTIALS.md`
- **Complete Setup Guide**: See `SETUP.md`
- **Project README**: See `README.md`
- **Backend Documentation**: See `server/README.md`

---

**Need Help?** Check the troubleshooting section above or review the error messages in your terminal.

