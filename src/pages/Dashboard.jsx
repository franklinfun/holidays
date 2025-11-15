import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import '../styles/Dashboard.css'

export default function Dashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="dashboard-nav">
          <h1>AGS Holidays Dashboard</h1>
          <div className="dashboard-user-info">
            <span>Welcome, {user?.name}</span>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-welcome">
          <h2>Welcome back, {user?.name}! 👋</h2>
          <p>Manage your bookings, view your travel history, and plan your next adventure.</p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-icon">📅</div>
            <h3>My Bookings</h3>
            <p>View and manage your upcoming trips</p>
            <button className="card-button">View Bookings</button>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">✈️</div>
            <h3>Book a Trip</h3>
            <p>Explore our amazing holiday packages</p>
            <button className="card-button" onClick={() => navigate('/')}>
              Browse Packages
            </button>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">📧</div>
            <h3>Travel History</h3>
            <p>See all your past adventures</p>
            <button className="card-button">View History</button>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">⚙️</div>
            <h3>Account Settings</h3>
            <p>Manage your profile and preferences</p>
            <button className="card-button">Settings</button>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">💳</div>
            <h3>Payment Methods</h3>
            <p>Manage your payment options</p>
            <button className="card-button">Manage Payments</button>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">🎁</div>
            <h3>Special Offers</h3>
            <p>Exclusive deals just for you</p>
            <button className="card-button">View Offers</button>
          </div>
        </div>

        <div className="dashboard-info">
          <div className="info-card">
            <h3>Account Information</h3>
            <div className="info-row">
              <span className="info-label">Name:</span>
              <span className="info-value">{user?.name}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Email:</span>
              <span className="info-value">{user?.email}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Member Since:</span>
              <span className="info-value">2025</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

