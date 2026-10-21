import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function StatusPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Servis verileri - Tümü UP/Operational
  const services = [
    {
      name: 'API Gateway',
      url: 'https://api.pingomat.com.tr/',
      status: 'UP',
      uptime: '99.99%',
      pattern: 0
    },
    {
      name: 'Web Application',
      url: 'https://www.pingomat.com.tr/',
      status: 'UP',
      uptime: '99.98%',
      pattern: 1
    },
    {
      name: 'Database Cluster',
      url: 'PostgreSQL · Port 5432',
      status: 'UP',
      uptime: '100%',
      pattern: 2
    },
    {
      name: 'CDN & Static Assets',
      url: 'https://cdn.pingomat.com.tr/',
      status: 'UP',
      uptime: '100%',
      pattern: 3
    },
    {
      name: 'Email Service',
      url: 'SMTP · Port 587',
      status: 'UP',
      uptime: '99.95%',
      pattern: 4
    },
    {
      name: 'Monitoring Dashboard',
      url: 'https://app.pingomat.com.tr/',
      status: 'UP',
      uptime: '99.97%',
      pattern: 5
    }
  ];

  // Geçmiş olaylar
  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance: Database Upgrade',
      date: '2026-01-15',
      time: '02:00 - 04:00 UTC',
      status: 'completed',
      description: 'Successfully upgraded database cluster to version 15.4. All services resumed normal operation.',
      impact: 'minor'
    },
    {
      id: 2,
      title: 'Email Service Degradation',
      date: '2026-01-12',
      time: '14:30 - 16:45 UTC',
      status: 'resolved',
      description: 'Experienced delayed email delivery due to third-party SMTP provider issues. Service fully restored.',
      impact: 'moderate'
    },
    {
      id: 3,
      title: 'CDN Cache Invalidation',
      date: '2026-01-08',
      time: '10:15 UTC',
      status: 'completed',
      description: 'Routine cache invalidation completed. No user impact detected.',
      impact: 'none'
    },
    {
      id: 4,
      title: 'API Rate Limiting Adjustment',
      date: '2026-01-05',
      time: '08:00 UTC',
      status: 'completed',
      description: 'Updated rate limiting policies to improve service reliability during peak hours.',
      impact: 'none'
    }
  ];

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case 'none':
        return { color: 'impact-none', text: 'No Impact' };
      case 'minor':
        return { color: 'impact-minor', text: 'Minor' };
      case 'moderate':
        return { color: 'impact-moderate', text: 'Moderate' };
      case 'major':
        return { color: 'impact-major', text: 'Major' };
      default:
        return { color: 'impact-none', text: 'Unknown' };
    }
  };

  return (
    <div className="status-page">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <Link className="logo" to="/" onClick={closeMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 100" height="48" role="img" aria-label="Pingomat">
              <title>Pingomat</title>
              <desc>Pingomat web sitesi izleme logosu: küre üzerinde kalp atışı çizgisi ve canlı durum noktası</desc>
              <rect x="8" y="10" width="80" height="80" rx="20" fill="#17213A"/>
              <g fill="none" stroke="#5BB974" strokeWidth="2.5" strokeLinecap="round" opacity="0.55">
                <circle cx="48" cy="50" r="26"/>
                <ellipse cx="48" cy="50" rx="11" ry="26"/>
                <line x1="22" y1="50" x2="74" y2="50"/>
              </g>
              <polyline points="14,52 33,52 40,36 49,66 57,43 62,52 82,52" fill="none" stroke="#5BB974" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="82" cy="18" r="11" fill="#FFFFFF"/>
              <circle cx="82" cy="18" r="7" fill="#5BB974"/>
              <circle cx="82" cy="18" r="11" fill="none" stroke="#5BB974" strokeWidth="1.5" opacity="0.35"/>
              <text x="108" y="64" fontFamily="'Poppins','Nunito Sans','Segoe UI',Helvetica,Arial,sans-serif" fontSize="42" fontWeight="700" letterSpacing="-0.5">
                <tspan fill="#17213A">Ping</tspan><tspan fill="#5BB974">omat</tspan>
              </text>
            </svg>
          </Link>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/#features">Features</Link>
            <Link to="/#how">How it works</Link>
            <Link to="/#alerts">Alerts</Link>
            <Link to="/#faq">FAQ</Link>
          </nav>
          <Link className="btn btn-secondary btn-sm" to="/">Sign in</Link>
          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger ${menuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/#features" onClick={closeMenu}>Features</Link>
            <Link to="/#how" onClick={closeMenu}>How it works</Link>
            <Link to="/#alerts" onClick={closeMenu}>Alerts</Link>
            <Link to="/#faq" onClick={closeMenu}>FAQ</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="status-main">
        <div className="status-container">
          {/* Status Banner */}
          <div className="status-banner status-banner-success">
            <div className="status-banner-content">
              <div className="status-banner-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="status-banner-text">
                <h1>All Systems Operational</h1>
                <p>All services are running normally. Last checked: Just now</p>
              </div>
            </div>
          </div>

          {/* Services Status Card - Ana Sayfa Tasarımı */}
          <section className="status-section">
            <div className="status-section-header">
              <h2>
                <i className="fas fa-server"></i>
                Service Status
              </h2>
              <span className="status-section-badge">
                {services.length} Services
              </span>
            </div>
            
            {/* Ana Kart - Dashboard Mock Tasarımı */}
            <div className="status-dashboard-mock">
              {/* Yeşil Header Bar */}
              <div className="status-dashboard-header">
                <div className="status-dashboard-status">
                  <i className="fas fa-shield-check"></i>
                  <span>All services operational</span>
                </div>
                <div className="status-dashboard-stats">
                  <div className="status-stat-item">
                    <div className="status-stat-value">99.9%</div>
                    <div className="status-stat-label">Uptime</div>
                  </div>
                  <div className="status-stat-item">
                    <div className="status-stat-value">142ms</div>
                    <div className="status-stat-label">Avg Response</div>
                  </div>
                  <div className="status-stat-item">
                    <div className="status-stat-value">6/6</div>
                    <div className="status-stat-label">Monitors</div>
                  </div>
                </div>
              </div>

              {/* Servis Satırları */}
              <div className="status-dashboard-content">
                {services.map((service, index) => (
                  <StatusRow 
                    key={index}
                    status={service.status}
                    name={service.name}
                    url={service.url}
                    uptime={service.uptime}
                    pattern={service.pattern}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Incidents Section */}
          <section className="status-section">
            <div className="status-section-header">
              <h2>
                <i className="fas fa-history"></i>
                Recent Incidents & Maintenance
              </h2>
              <span className="status-section-badge">
                {incidents.length} Events
              </span>
            </div>
            <div className="incidents-list">
              {incidents.map((incident) => {
                const impactBadge = getImpactBadge(incident.impact);
                return (
                  <div key={incident.id} className="incident-card">
                    <div className="incident-card-header">
                      <div className="incident-title-row">
                        <h3>{incident.title}</h3>
                        <span className={`incident-impact-badge ${impactBadge.color}`}>
                          {impactBadge.text}
                        </span>
                      </div>
                      <div className="incident-meta">
                        <span className="incident-date">
                          <i className="fas fa-calendar"></i>
                          {new Date(incident.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                        <span className="incident-time">
                          <i className="fas fa-clock"></i>
                          {incident.time}
                        </span>
                        <span className={`incident-status-badge ${incident.status}`}>
                          {incident.status === 'completed' ? 'Completed' : 'Resolved'}
                        </span>
                      </div>
                    </div>
                    <p className="incident-description">{incident.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Footer Info */}
          <div className="status-footer-info">
            <p>
              <i className="fas fa-info-circle"></i>
              This page is automatically updated every 60 seconds. For real-time alerts, subscribe to our status notifications.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} Pingomat · <a href="https://pingomat.com.tr/">pingomat.com.tr</a></span>
          <span>Simple website monitoring from multiple locations</span>
        </div>
      </footer>
    </div>
  );
}

// Status Row Component - Ana Sayfadaki DashRow ile Birebir Aynı
function StatusRow({ status, name, url, uptime, pattern }: {
  status: string; name: string; url: string; uptime: string; pattern: number;
}) {
  const strips = Array.from({ length: 24 }, (_, i) => {
    // Her pattern için farklı bar desenleri
    if (pattern === 0 && i === 7) return 'y'; // Sarı uyarı
    if (pattern === 4 && i >= 20) return 'y'; // Son günlerde sarı
    return ''; // Yeşil (default)
  });

  return (
    <div className="status-dash-row">
      <span className={`status-badge ${status === 'UP' ? 'up' : 'down'}`}>{status}</span>
      <div className="status-service-info">
        <b>{name}</b>
        <small>{url}</small>
      </div>
      <div className="status-strip">
        {strips.map((cls, i) => (
          <i key={i} className={cls}></i>
        ))}
      </div>
      <div className="status-uptime-info">
        <span className="status-uptime-num">{uptime}</span>
        <span className="status-uptime-label">30 days</span>
      </div>
    </div>
  );
}

export default StatusPage;
