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

  // Servis verileri
  const services = [
    {
      name: 'API Gateway',
      status: 'operational',
      responseTime: 45,
      uptime: 99.99,
      description: 'Main API endpoint for all services'
    },
    {
      name: 'Web Application',
      status: 'operational',
      responseTime: 128,
      uptime: 99.98,
      description: 'Primary web application interface'
    },
    {
      name: 'Database Cluster',
      status: 'operational',
      responseTime: 12,
      uptime: 99.99,
      description: 'PostgreSQL database servers'
    },
    {
      name: 'CDN & Static Assets',
      status: 'operational',
      responseTime: 23,
      uptime: 100.00,
      description: 'Content delivery network'
    },
    {
      name: 'Email Service',
      status: 'degraded',
      responseTime: 342,
      uptime: 99.40,
      description: 'Transactional email delivery'
    },
    {
      name: 'Monitoring Dashboard',
      status: 'operational',
      responseTime: 89,
      uptime: 99.95,
      description: 'Real-time monitoring interface'
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'status-color-operational';
      case 'degraded':
        return 'status-color-degraded';
      case 'down':
        return 'status-color-down';
      default:
        return 'status-color-unknown';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational':
        return 'Operational';
      case 'degraded':
        return 'Degraded Performance';
      case 'down':
        return 'Down';
      default:
        return 'Unknown';
    }
  };

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

  const allOperational = services.every(s => s.status === 'operational');

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
          <a className="btn btn-secondary btn-sm" href="#">Sign in</a>
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
          <div className={`status-banner ${allOperational ? 'status-banner-success' : 'status-banner-warning'}`}>
            <div className="status-banner-content">
              <div className="status-banner-icon">
                {allOperational ? (
                  <i className="fas fa-check-circle"></i>
                ) : (
                  <i className="fas fa-exclamation-triangle"></i>
                )}
              </div>
              <div className="status-banner-text">
                <h1>
                  {allOperational ? 'All Systems Operational' : 'Some Systems Experiencing Issues'}
                </h1>
                <p>
                  {allOperational 
                    ? 'All services are running normally. Last checked: Just now'
                    : 'Some services are experiencing degraded performance. We are monitoring the situation.'}
                </p>
              </div>
            </div>
          </div>

          {/* Services Section */}
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
            <div className="services-list">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-card-header">
                    <div className="service-info">
                      <div className="service-name-row">
                      <div className={`service-status-indicator ${getStatusColor(service.status)}`}>
                        <div className="service-status-pulse"></div>
                      </div>                        <h3>{service.name}</h3>
                      </div>
                      <p className="service-description">{service.description}</p>
                    </div>
                    <div className="service-metrics">
                      <div className="service-metric">
                        <span className="service-metric-label">Response Time</span>
                        <span className="service-metric-value">{service.responseTime}ms</span>
                      </div>
                      <div className="service-metric">
                        <span className="service-metric-label">Uptime</span>
                        <span className="service-metric-value">{service.uptime}%</span>
                      </div>
                      <div className={`service-status-badge ${service.status}`}>
                        {getStatusText(service.status)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

export default StatusPage;
