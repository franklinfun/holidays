# Quick Setup Guide

Follow these steps to get the AGS Holidays application running.

## 1. Install Dependencies

### Frontend
```bash
npm install
```

### Backend
```bash
cd server
npm install
cd ..
```

## 2. MongoDB Setup

### Option A: Local MongoDB
1. Install MongoDB: https://www.mongodb.com/try/download/community
2. Start MongoDB service
3. Default connection: `mongodb://localhost:27017/agsholidays`

### Option B: MongoDB Atlas (Free Cloud)
1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Create a free account
3. Create a new cluster (FREE tier)
4. Get your connection string
5. Replace `<password>` with your database password

## 3. Environment Variables

### Frontend (.env)
Create `.env` in root directory:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### Backend (server/.env)
Create `server/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/agsholidays
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/agsholidays

JWT_SECRET=change-this-to-a-random-secret-key
JWT_REFRESH_SECRET=change-this-to-another-random-secret-key
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d
FRONTEND_URL=http://localhost:5174
```

**Important**: Change `JWT_SECRET` and `JWT_REFRESH_SECRET` to random strings in production!

## 4. Start the Application

### Terminal 1 - Backend
```bash
cd server
npm run dev
```
Backend runs on: http://localhost:5000

### Terminal 2 - Frontend
```bash
npm run dev
```
Frontend runs on: http://localhost:5174

## 5. Test the Application

1. Open browser: http://localhost:5174
2. Click "Sign Up" to create an account
3. Or login with demo credentials (if you created them)

## Troubleshooting

### MongoDB Connection Error
- Check if MongoDB is running (local)
- Verify connection string in `server/.env`
- For Atlas: Check IP whitelist and credentials

### CORS Error
- Make sure backend is running
- Check `FRONTEND_URL` in `server/.env` matches frontend URL

### Port Already in Use
- Change `PORT` in `server/.env` to another port (e.g., 5001)
- Update `VITE_API_BASE_URL` in frontend `.env` accordingly

### Module Not Found
- Run `npm install` in both root and `server/` directories
- Delete `node_modules` and `package-lock.json`, then reinstall

## Production Deployment

### Frontend
1. Build: `npm run build`
2. Deploy `dist/` folder to hosting
3. Set `VITE_API_BASE_URL` to production API URL

### Backend
1. Set secure JWT secrets
2. Use MongoDB Atlas or managed database
3. Update CORS for production frontend URL
4. Deploy to hosting service (Heroku, Railway, Render, etc.)

