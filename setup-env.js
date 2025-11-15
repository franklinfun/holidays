// Setup script to create environment files
import fs from 'fs'
import path from 'path'

const frontendEnv = `# Frontend Environment Variables
VITE_API_BASE_URL=http://localhost:5000/api
`

const backendEnv = `# Server Port
PORT=5000

# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/agsholidays
# For MongoDB Atlas, use:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/agsholidays

# JWT Secrets - CHANGE THESE IN PRODUCTION!
JWT_SECRET=ags_holidays_jwt_secret_2025_change_in_production_xyz789
JWT_REFRESH_SECRET=ags_holidays_refresh_secret_2025_change_in_production_abc123

# JWT Expiration
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5174
`

// Create frontend .env
try {
  fs.writeFileSync('.env', frontendEnv)
  console.log('✅ Created .env for frontend')
} catch (error) {
  console.error('❌ Error creating frontend .env:', error.message)
}

// Create backend .env
try {
  const serverEnvPath = path.join('server', '.env')
  fs.writeFileSync(serverEnvPath, backendEnv)
  console.log('✅ Created server/.env for backend')
} catch (error) {
  console.error('❌ Error creating backend .env:', error.message)
}

console.log('\n🎉 Environment files created successfully!')
console.log('\n📝 Next steps:')
console.log('1. Update MONGODB_URI in server/.env if using MongoDB Atlas')
console.log('2. Change JWT_SECRET and JWT_REFRESH_SECRET in production')
console.log('3. Start backend: cd server && npm run dev')
console.log('4. Start frontend: npm run dev')

