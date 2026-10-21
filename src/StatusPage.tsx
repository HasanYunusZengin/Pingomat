import Navbar from './Navbar';

function StatusPage() {
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

  // Son 7 günün tarihlerini oluştur
  const getLast7Days = () => {
    const days = [];
    const today = new Date('2026-01-21'); // Sabit tarih
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      days.push({
        date: date,
        formatted: date.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        }),
        isToday: i === 0
      });
    }
    
    return days;
  };

  const last7Days = getLast7Days();

  return (
    <div className="status-page">
      {/* Navbar */}
      <Navbar />

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

          {/* Past Incidents - Minimalist Tasarım */}
          <section className="past-incidents-section">
            <h2 className="past-incidents-title">Past Incidents</h2>
            <div className="past-incidents-list">
              {last7Days.map((day, index) => (
                <div key={index} className="past-incident-day">
                  <div className="past-incident-date">
                    {day.formatted}
                  </div>
                  <div className="past-incident-status">
                    {day.isToday ? 'No incidents reported today.' : 'No incidents reported.'}
                  </div>
                </div>
              ))}
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
