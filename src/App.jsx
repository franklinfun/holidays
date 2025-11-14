import logo from './assets/ags-logo.svg'
import './App.css'

function App() {
  const trendingInternational = [
    {
      title: 'Dubai',
      duration: '5 Days · 4 Nights',
      image:
        'https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'India',
      duration: '6 Days · 5 Nights',
      image:
        'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Singapore',
      duration: '7 Days · 6 Nights',
      image:
        'https://images.unsplash.com/photo-1549887534-1541e9326644?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Malaysia',
      duration: '7 Days · 6 Nights',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Vietnam',
      duration: '6 Days · 5 Nights',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Thailand',
      duration: '5 Days · 4 Nights',
      image:
        'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  const trendingDomestic = [
    {
      title: 'Andaman Delight',
      duration: '4 Nights · 5 Days',
      price: '₹48,000*',
      image:
        'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Himachal Pradesh',
      duration: '4 Nights · 5 Days',
      price: '₹48,000*',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Kerala',
      duration: '4 Nights · 5 Days',
      price: '₹25,000*',
      image:
        'https://images.unsplash.com/photo-1468413253725-0d5181091126?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Goa',
      duration: '4 Nights · 5 Days',
      price: '₹11,000*',
      image:
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'North East',
      duration: '6 Nights · 7 Days',
      price: '₹56,000*',
      image:
        'https://images.unsplash.com/photo-1512847932870-08cfdaa35816?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Karnataka',
      duration: '5 Nights · 4 Days',
      price: '₹25,000*',
      image:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  const services = [
    'Visa Services',
    'Air Travel',
    'Corporate Travel',
    'Tours',
    'Institutional Travels',
    'Cruise Travel',
    'Car Rentals',
    'Weddings & Honeymoons',
    'Travel Insurance',
  ]

  const testimonials = [
    {
      name: 'Anil Harris',
      location: 'Bangalore',
      message:
        'We booked a Rajasthan package with AGS Holidays and every detail was meticulously curated. From flights to hotel choices, everything was well planned. Highly recommended!',
    },
    {
      name: 'Shashi',
      location: 'Bangalore',
      message:
        'AGS Holidays organized a trip for six including senior citizens. It was the first flight journey for my parents and their team made sure everything was seamless.',
    },
    {
      name: 'Premila Towle',
      location: 'Hyderabad',
      message:
        'Our Dubai trip was exceptional and personalized. The team’s flexibility ensured we experienced all highlights, even squeezing in Abu Dhabi last minute.',
    },
    {
      name: 'Mr. Rangaswamy',
      location: 'Tumkur',
      message:
        'The Golden Triangle tour was spectacular! From planning to accommodations, the team handled everything so we could just enjoy the journey.',
    },
  ]

  return (
    <div className="app">
      <header className="hero">
        <div className="floating-shape floating-shape--one" />
        <div className="floating-shape floating-shape--two" />
        <nav className="nav">
          <div className="brand">
            <img src={logo} alt="AGS Holidays logo" className="brand-logo" />
            <div className="brand-text">
              <span className="brand-title">AGS Holidays</span>
              <span className="brand-tagline">Your Holiday, Your Way!</span>
            </div>
          </div>
          <div className="nav-links">
            <a href="#about">About Us</a>
            <a href="#packages">Packages</a>
            <a href="#services">Services</a>
            <a href="#emi">EMI Plans</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-actions">
            <a className="nav-phone" href="tel:+919606464269">
              <span>24/7 Support</span>
              <strong>+91 960 646 4269</strong>
            </a>
            <button className="nav-cta">Plan Your Trip</button>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-content">
            <span className="hero-preheading">
              <span className="hero-preheading-dot" />
              Your Holiday, Your Way!
            </span>
            <h1>
              Every journey is a story. Let us craft{' '}
              <span className="hero-highlight">unforgettable getaways</span> with care and joy.
            </h1>
            <p>
              With 18+ years of travel expertise and 40,000+ delighted
              travellers, we design unforgettable experiences across the globe.
              Relax and let us handle every detail.
            </p>
            <div className="hero-actions">
              <button className="button button-primary">Explore Packages</button>
              <button className="button button-secondary">
                Talk To An Expert
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-card">
                <span className="stat-value">18+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">40k+</span>
                <span className="stat-label">Happy Travellers</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">24/7</span>
                <span className="stat-label">Customer Support</span>
              </div>
            </div>
          </div>
          <div className="hero-showcase">
            <div className="showcase-card">
              <span className="showcase-label">Featured Package</span>
              <h2>Luxury Cruise Adventures</h2>
              <p>
                Sail through breathtaking horizons and enjoy premium onboard
                experiences tailored just for you and your loved ones.
              </p>
              <button className="button button-ghost">Discover Cruises</button>
            </div>
            <div className="showcase-grid">
              <article className="showcase-item">
                <h3>Visa & Travel Docs</h3>
                <p>Seamless visa assistance for every destination.</p>
              </article>
              <article className="showcase-item">
                <h3>Custom Itineraries</h3>
                <p>Personalized tours crafted around your interests.</p>
              </article>
              <article className="showcase-item">
                <h3>Corporate Travel</h3>
                <p>Efficient, cost-effective travel management.</p>
              </article>
              <article className="showcase-item">
                <h3>Group Getaways</h3>
                <p>Special packages for families, friends, and institutions.</p>
              </article>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section about">
          <div className="section-header">
            <span className="eyebrow">About AGS Holidays</span>
            <h2>Experience worry-free holidays with our safety measures.</h2>
            <p>
              From budget escapes to luxurious retreats, we help you explore the
              world with confidence. Our seasoned travel experts curate journeys
              that delight, inspire, and stay within budget.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <span className="highlight-icon">🎯</span>
              <h3>A Trusted Experience</h3>
              <p>
                18+ years of crafting unforgettable holidays for more than
                40,000 happy travellers. We are your dedicated holiday
                management partner.
              </p>
            </div>
            <div className="highlight-card">
              <span className="highlight-icon">💡</span>
              <h3>Pocket-Friendly Packages</h3>
              <p>
                Tailor-made itineraries that balance budget and experiences so
                you never compromise on the joy of travelling.
              </p>
            </div>
            <div className="highlight-card">
              <span className="highlight-icon">🕒</span>
              <h3>24/7 Support</h3>
              <p>
                Travel with peace of mind knowing our team is always a call away
                to assist you anytime, anywhere.
              </p>
            </div>
          </div>
        </section>

        <section id="packages" className="section trending">
          <div className="section-header">
            <span className="eyebrow">Trending International Destinations</span>
            <h2>Discover the world’s most-loved escapes.</h2>
            <p>
              Handpicked itineraries across continents, curated to immerse you
              in culture, cuisine, and unforgettable moments.
            </p>
          </div>
          <div className="card-grid">
            {trendingInternational.map((item) => (
              <article
                key={item.title}
                className="destination-card"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="destination-overlay">
                  <span className="destination-duration">{item.duration}</span>
                  <h3>{item.title}</h3>
                  <button className="button button-ghost">View Package</button>
                </div>
              </article>
            ))}
      </div>
        </section>

        <section className="section emi" id="emi">
          <div className="emi-wrapper">
            <div className="emi-content">
              <span className="eyebrow">Why Choose Our EMI Plan?</span>
              <h2>Travel now, pay at your pace.</h2>
              <p>
                EMI plans make holidaying more accessible, especially for
                frequent travellers. Spread the cost over 12 easy installments,
                enjoy premium experiences, and let AGS Holidays pay for one EMI
                as a special treat.
              </p>
              <ul className="emi-points">
                <li>Budget-friendly: spread the cost with 12 easy EMIs.</li>
                <li>Affordable travel without compromising experiences.</li>
                <li>One EMI on us to make your getaway extra special.</li>
                <li>Hassle-free setup and instant approvals.</li>
              </ul>
              <div className="emi-actions">
                <button className="button button-primary">Know More</button>
                <button className="button button-secondary">
                  Speak With Finance Team
        </button>
              </div>
            </div>
            <div className="emi-cards">
              <div className="emi-card">
                <span className="emi-type">Pre-Paid</span>
                <h3>Easy EMIs</h3>
                <p>
                  Explore dream destinations with flexible EMI and prepaid
                  travel loans. Enjoy stress-free vacations while paying in easy
                  monthly instalments.
                </p>
                <button className="button button-ghost">Explore Plans</button>
              </div>
              <div className="emi-card">
                <span className="emi-type">Post-Paid</span>
                <h3>Travel Now, Pay Later</h3>
                <p>
                  Enjoy your vacation today and settle payments later in
                  comfortable instalments. No upfront financial burden—just pure
                  adventure.
                </p>
                <button className="button button-ghost">Get Started</button>
              </div>
            </div>
          </div>
        </section>

        <section className="section domestic">
          <div className="section-header">
            <span className="eyebrow">Trending Domestic Packages</span>
            <h2>Experience India’s hidden gems with curated itineraries.</h2>
            <p>
              From the beaches of Goa to the mountains of Himachal, our domestic
              packages let you explore the diversity of India in comfort.
            </p>
          </div>
          <div className="card-grid card-grid--domestic">
            {trendingDomestic.map((item) => (
              <article
                key={item.title}
                className="package-card"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="package-overlay">
                  <span className="package-price">{item.price}</span>
                  <h3>{item.title}</h3>
                  <p>{item.duration}</p>
                  <button className="button button-light">View More</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section services">
          <div className="section-header">
            <span className="eyebrow">What We Do</span>
            <h2>Comprehensive travel services tailored to your needs.</h2>
            <p>
              We go beyond booking flights and hotels. Our end-to-end services
              ensure a seamless journey wherever you go.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service} className="service-card">
                <div className="service-icon">✦</div>
                <h3>{service}</h3>
                <p>
                  Expert support from planning to execution, making every trip
                  effortless and memorable.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="section testimonials">
          <div className="section-header">
            <span className="eyebrow">Testimonials</span>
            <h2>Stories from travellers who explored with us.</h2>
            <p>
              Hear from our guests about their unforgettable journeys and the
              care they experienced with AGS Holidays.
        </p>
      </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="testimonial-card">
                <p>“{testimonial.message}”</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.location}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="section newsletter">
          <div className="newsletter-card">
            <div>
              <span className="eyebrow">Subscribe</span>
              <h2>Get holiday inspiration delivered to your inbox.</h2>
              <p>
                Stay up to date with the latest packages, travel tips, and
                exclusive offers tailored just for you.
              </p>
              <ul className="newsletter-benefits">
                <li>Fresh destination ideas every week</li>
                <li>Exclusive subscriber-only deals</li>
                <li>Planning checklists and travel guides</li>
              </ul>
            </div>
            <form className="newsletter-form">
              <label className="visually-hidden" htmlFor="newsletter-email">
                Email Address
              </label>
              <div className="newsletter-input">
                <span className="newsletter-badge">Join 10k+ explorers</span>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
                <button type="submit" className="button button-accent">
                  Subscribe Now
                </button>
              </div>
              <p className="newsletter-disclaimer">
                We respect your privacy. Unsubscribe anytime with one click.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-mark">AGS</span>
            <h3>AGS Holidays</h3>
            <p>
              We specialize in tours and travel across the globe, continually
              enhancing our offerings to bring you fresh, exciting experiences.
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#packages">Domestic</a>
              </li>
              <li>
                <a href="#packages">International</a>
              </li>
              <li>
                <a href="#emi">EMI Plans</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Visa Services</li>
              <li>Corporate Travel</li>
              <li>Tours & Cruises</li>
              <li>Car Rentals</li>
              <li>Travel Insurance</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="contact-list">
              <li>
                #903, 4th Floor, 5th ‘A’ Cross, Service Road, Near Ganesha
                Temple, Babusapalya, Bengaluru - 560043
              </li>
              <li>
                <a href="tel:+919606464269">+91 960 646 4269</a>
              </li>
              <li>
                <a href="mailto:info@agsholidays.in">info@agsholidays.in</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 AGS Holidays. All Rights Reserved.</span>
          <div className="footer-socials">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
