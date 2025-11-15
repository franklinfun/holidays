# AGS Holidays Backend API

Backend server for AGS Holidays application built with Node.js, Express, and MongoDB.

## Features

- ✅ User Registration with password hashing
- ✅ User Login with JWT authentication
- ✅ JWT Token refresh mechanism
- ✅ Protected routes with token verification
- ✅ MongoDB database integration
- ✅ Password hashing with bcrypt
- ✅ CORS enabled for frontend integration

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## Installation

1. Install dependencies:
```bash
cd server
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Update `.env` with your configuration:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/agsholidays
JWT_SECRET=your-super-secret-jwt-key
JWT_REFRESH_SECRET=your-super-secret-refresh-key
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d
FRONTEND_URL=http://localhost:5174
```

## Running the Server

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Authentication Routes

#### Register User
- **POST** `/api/auth/register`
- Body: `{ name, email, password }`
- Returns: `{ success, user, accessToken, refreshToken }`

#### Login User
- **POST** `/api/auth/login`
- Body: `{ email, password }`
- Returns: `{ success, user, accessToken, refreshToken }`

#### Refresh Token
- **POST** `/api/auth/refresh`
- Body: `{ refreshToken }`
- Returns: `{ success, accessToken }`

#### Get Current User
- **GET** `/api/auth/me`
- Headers: `Authorization: Bearer <accessToken>`
- Returns: `{ success, user }`

### Health Check
- **GET** `/api/health`
- Returns: `{ status: 'OK', message: 'AGS Holidays API is running' }`

## Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  role: String (enum: ['user', 'admin'], default: 'user'),
  createdAt: Date,
  timestamps: true
}
```

## Security Features

- Password hashing with bcrypt (10 salt rounds)
- JWT token authentication
- Refresh token mechanism
- CORS configuration
- Input validation
- Error handling

## MongoDB Setup

### Local MongoDB
1. Install MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Start MongoDB service
3. Update `MONGODB_URI` in `.env` to `mongodb://localhost:27017/agsholidays`

### MongoDB Atlas (Cloud)
1. Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env` with your Atlas connection string

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/agsholidays` |
| `JWT_SECRET` | Secret key for JWT tokens | (required) |
| `JWT_REFRESH_SECRET` | Secret key for refresh tokens | (required) |
| `JWT_EXPIRE` | Access token expiration | `15m` |
| `JWT_REFRESH_EXPIRE` | Refresh token expiration | `7d` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:5174` |

## Development

The server uses `nodemon` for auto-reload during development. Any changes to the code will automatically restart the server.

## Production Deployment

1. Set secure JWT secrets in environment variables
2. Use MongoDB Atlas or a managed MongoDB service
3. Update CORS settings for production frontend URL
4. Set `NODE_ENV=production`
5. Use a process manager like PM2

## License

ISC

