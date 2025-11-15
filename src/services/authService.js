import bcrypt from 'bcryptjs'

// Simulated database - in production, this would be a real database
const users = []
const tokens = []

// Initialize with a default user for testing (optional)
const initializeDefaultUser = async () => {
  const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
  if (existingUsers.length === 0) {
    const hashedPassword = await bcrypt.hash('admin123', 10)
    existingUsers.push({
      id: '1',
      name: 'Admin User',
      email: 'admin@agsholidays.in',
      password: hashedPassword,
      createdAt: new Date().toISOString(),
    })
    localStorage.setItem('users', JSON.stringify(existingUsers))
  }
}

// Initialize on import
initializeDefaultUser()

const generateToken = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15) +
    Date.now().toString(36)
  )
}

const generateTokens = () => {
  const accessToken = `access_${generateToken()}`
  const refreshToken = `refresh_${generateToken()}`
  
  // Store refresh token (in production, store in database)
  const tokenData = {
    refreshToken,
    expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
  }
  
  const storedTokens = JSON.parse(localStorage.getItem('refreshTokens') || '[]')
  storedTokens.push(tokenData)
  localStorage.setItem('refreshTokens', JSON.stringify(storedTokens))
  
  return { accessToken, refreshToken }
}

export const authService = {
  async register(name, email, password) {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      
      // Check if user already exists
      const existingUser = users.find((u) => u.email === email)
      if (existingUser) {
        throw new Error('User with this email already exists')
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10)

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password: hashedPassword,
        createdAt: new Date().toISOString(),
      }

      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users))

      // Generate tokens
      const { accessToken, refreshToken } = generateTokens()

      const userData = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      }

      return {
        success: true,
        user: userData,
        accessToken,
        refreshToken,
      }
    } catch (error) {
      throw new Error(error.message || 'Registration failed')
    }
  },

  async login(email, password) {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      const user = users.find((u) => u.email === email)

      if (!user) {
        throw new Error('Invalid email or password')
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (!isPasswordValid) {
        throw new Error('Invalid email or password')
      }

      // Generate tokens
      const { accessToken, refreshToken } = generateTokens()

      const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
      }

      return {
        success: true,
        user: userData,
        accessToken,
        refreshToken,
      }
    } catch (error) {
      throw new Error(error.message || 'Login failed')
    }
  },

  async refreshAccessToken(refreshToken) {
    try {
      const storedTokens = JSON.parse(
        localStorage.getItem('refreshTokens') || '[]'
      )
      const tokenData = storedTokens.find((t) => t.refreshToken === refreshToken)

      if (!tokenData) {
        throw new Error('Invalid refresh token')
      }

      if (tokenData.expiresAt < Date.now()) {
        throw new Error('Refresh token expired')
      }

      // Generate new access token
      const accessToken = `access_${generateToken()}`

      return {
        success: true,
        accessToken,
      }
    } catch (error) {
      throw new Error(error.message || 'Token refresh failed')
    }
  },
}

// Mock API endpoints
export const mockApi = {
  async post(url, data) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    try {
      if (url === '/api/auth/register') {
        const result = await authService.register(
          data.name,
          data.email,
          data.password
        )
        return {
          ok: true,
          json: async () => result,
        }
      }

      if (url === '/api/auth/login') {
        const result = await authService.login(data.email, data.password)
        return {
          ok: true,
          json: async () => result,
        }
      }

      if (url === '/api/auth/refresh') {
        const result = await authService.refreshAccessToken(data.refreshToken)
        return {
          ok: true,
          json: async () => result,
        }
      }

      return {
        ok: false,
        json: async () => ({ message: 'Endpoint not found' }),
      }
    } catch (error) {
      return {
        ok: false,
        json: async () => ({ message: error.message || 'Request failed' }),
      }
    }
  },
}

// Intercept fetch calls for authentication endpoints
const originalFetch = window.fetch
window.fetch = async (url, options) => {
  if (
    url.startsWith('/api/auth/') &&
    (!options || options.method === 'POST' || !options.method)
  ) {
    const data = options?.body ? JSON.parse(options.body) : {}
    const mockResponse = await mockApi.post(url, data)
    return mockResponse
  }

  return originalFetch(url, options)
}

