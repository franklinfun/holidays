# AGS Holidays - Travel Booking Platform

A full-stack travel booking platform with authentication, package management, and user dashboard.

## Features

### Frontend (React + Vite)
- ✅ Modern, responsive UI with blue-white-orange theme
- ✅ Interactive animations and transitions
- ✅ Sticky navigation header
- ✅ User authentication (Login, Register, Logout)
- ✅ Protected routes and dashboard
- ✅ Package listings (Domestic & International)
- ✅ Service showcase
- ✅ Testimonials section
- ✅ Newsletter subscription

### Backend (Node.js + Express + MongoDB)
- ✅ RESTful API with Express
- ✅ MongoDB database integration
- ✅ JWT authentication with refresh tokens
- ✅ Password hashing with bcrypt
- ✅ User registration and login
- ✅ Protected API routes
- ✅ CORS enabled

## Tech Stack

### Frontend
- React 19
- Vite 7
- React Router DOM
- CSS3 with animations

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- CORS

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Update `.env` with your backend API URL:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

4. Start development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5174`

### Backend Setup

1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/agsholidays
JWT_SECRET=your-super-secret-jwt-key-change-this
JWT_REFRESH_SECRET=your-super-secret-refresh-key-change-this
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d
FRONTEND_URL=http://localhost:5174
```

5. Start backend server:
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Backend will run on `http://localhost:5000`

## MongoDB Setup

### Option 1: Local MongoDB
1. Install MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Start MongoDB service
3. Connection string: `mongodb://localhost:27017/agsholidays`

### Option 2: MongoDB Atlas (Cloud)
1. Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get connection string
4. Update `MONGODB_URI` in `server/.env`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh access token
- `GET /api/auth/me` - Get current user (protected)

### Health Check
- `GET /api/health` - API health status

## Project Structure

```
holidays/
├── server/                 # Backend API
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── utils/             # Utility functions
│   ├── server.js          # Main server file
│   └── package.json       # Backend dependencies
├── src/                   # Frontend
│   ├── components/        # React components
│   ├── context/           # React context (Auth)
│   ├── pages/             # Page components
│   ├── services/          # API services
│   ├── styles/            # CSS files
│   └── App.jsx            # Main app component
└── README.md              # This file
```

## Default Credentials

For testing purposes, you can register a new account or use the demo account:
- Email: `admin@agsholidays.in`
- Password: `admin123`

## Building for Production

### Frontend
```bash
npm run build
```

Build output will be in `dist/` directory.

### Backend
```bash
cd server
npm start
```

## Deployment

### Frontend
- Deploy `dist/` folder to hosting service (Vercel, Netlify, GitHub Pages)
- Update `VITE_API_BASE_URL` to production backend URL

### Backend
- Deploy to hosting service (Heroku, Railway, Render, AWS)
- Set environment variables in hosting platform
- Update `FRONTEND_URL` for CORS configuration

## Environment Variables

### Frontend (.env)
- `VITE_API_BASE_URL` - Backend API base URL

### Backend (server/.env)
- `PORT` - Server port
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - JWT secret key
- `JWT_REFRESH_SECRET` - Refresh token secret
- `JWT_EXPIRE` - Access token expiration
- `JWT_REFRESH_EXPIRE` - Refresh token expiration
- `FRONTEND_URL` - Frontend URL for CORS

## License

ISC

## Author

AGS Holidays Team
