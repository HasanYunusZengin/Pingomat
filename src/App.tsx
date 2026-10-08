import { useEffect, useState } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <main id="top">
        {/* Hero - Full Green Banner */}
        <div className="hero">
          {/* Header - Floating inside hero */}
          <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-inner">
              <a className="logo" href="#top">
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
              </a>
              <nav className="nav-links">
                <a href="#features">Features</a>
                <a href="#how">How it works</a>
                <a href="#alerts">Alerts</a>
                <a href="#faq">FAQ</a>
              </nav>
              <a className="btn btn-secondary btn-sm" href="#">Sign in</a>
            </div>
          </header>

          <div className="hero-content">
            <span className="hero-badge">
              <i className="fas fa-globe"></i>
              Monitoring from multiple locations
            </span>
            <h1>Simple &amp; reliable website monitoring.</h1>
            <p className="hero-lead">
              Pingomat checks your sites from several locations around the world, alerts you by email or Slack the moment something breaks, and keeps a clear history of uptime and speed.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary btn-lg" href="#">
                Open the dashboard
              </a>
              <a className="btn btn-secondary btn-lg" href="#features">
                See what it checks
              </a>
            </div>
          </div>
        </div>

        {/* Dashboard Mock */}
        <div className="dashboard-section">
          <div className="container">
            <div className="dashboard-mock">
              <div className="dashboard-header">
                <div className="dashboard-status">
                  <i className="fas fa-shield-check"></i>
                  <span>All services operational</span>
                </div>
                <div className="dashboard-stats">
                  <div className="stat-item">
                    <div className="stat-value">99.9%</div>
                    <div className="stat-label">Uptime</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">142ms</div>
                    <div className="stat-label">Avg Response</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">4/4</div>
                    <div className="stat-label">Monitors</div>
                  </div>
                </div>
              </div>
              <div className="dashboard-content">
                <DashRow status="UP" name="Company website" url="https://www.example.com/" uptime="99.98%" pattern={0} responseTime="89ms" />
                <DashRow status="UP" name="Online shop" url={'https://shop.example.com/ · contains "Add to cart"'} uptime="100%" pattern={1} responseTime="156ms" />
                <DashRow status="DOWN" name="Customer portal" url="https://portal.example.com/ · Frankfurt, Helsinki: timeout" uptime="97.40%" pattern={2} responseTime="—" />
                <DashRow status="UP" name="Mail server" url="TCP port 587" uptime="100%" pattern={3} responseTime="45ms" />
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <section className="section" id="features">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Features</span>
              <h2 className="section-title">Everything you need to know your sites are up</h2>
              <p className="section-subtitle">Focused on what matters: is it reachable, is it fast, and will anything expire soon.</p>
            </div>
            <div className="feature-grid">
              <FeatureCard icon="fas fa-globe" title="Multi-Location Monitoring" desc="Every check runs across multiple global locations with cross-verification, ensuring isolated network hiccups never trigger false alarms." />
              <FeatureCard icon="fas fa-search" title="Smart HTTP(S) & Content Checks" desc="Verify status codes, confirm specific on-page keywords, and set custom check intervals flexibly from every 60 seconds up to once a day." />
              <FeatureCard icon="fas fa-stopwatch" title="Response Time Breakdown" desc="Pinpoint latency per location with step-by-step metrics: DNS lookup, TCP connection, TLS handshake, time to first byte (TTFB), and full download." />
              <FeatureCard icon="fas fa-lock" title="SSL & Domain Expiry Tracking" desc="Track domain registration via RDAP and get alerts days in advance with custom warning thresholds before your SSL certificates or domains expire." />
              <FeatureCard icon="fas fa-exchange-alt" title="DNS & Port Monitoring" desc="Validate DNS records against expected values and continuously test critical mail, database, or TCP ports for open connections." />
              <FeatureCard icon="fas fa-chart-bar" title="Analytics & Exportable Reports" desc="Monitor daily uptime, speed, and Apdex scores with 6 months of historical data; export client-ready monthly reports in CSV or PDF." />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section section-alt" id="how">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Getting started</span>
              <h2 className="section-title">Up and running in three steps</h2>
              <p className="section-subtitle">No servers to manage. It runs on ordinary shared Linux hosting.</p>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3>Add your locations</h3>
                <p>Download a small probe for each hosting account and schedule it with a one-minute cron job.</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3>Add your sites</h3>
                <p>Enter a URL, pick what to check and how often. Everything is managed from one screen.</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3>Get notified</h3>
                <p>Receive an alert when a site goes down and another when it recovers, with the reason and the downtime.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Alerts */}
        <section className="section" id="alerts">
          <div className="container">
            <div className="split">
              <div>
                <div className="section-header">
                  <span className="section-label">Alerts</span>
                  <h2 className="section-title">Know what is slow, not just what is down</h2>
                  <p className="section-subtitle" style={{ margin: 0 }}>Compare every location side by side and spot the slow step at a glance.</p>
                </div>
                <ul className="check-list">
                  <li>Email alerts through your own authenticated SMTP server</li>
                  <li>Slack alerts to the channel of your choice</li>
                  <li>Set how many locations must fail, and for how many rounds, before an alert is sent</li>
                  <li>Recovery notice with the total downtime</li>
                  <li>Warning when one of your locations stops reporting</li>
                </ul>
              </div>
              <div className="timing-mock">
                <h4>Response time by location</h4>
                <TimingRow label="Los Angeles" time="340 ms" widths={[10, 25, 20, 30, 15]} totalWidth="34%" />
                <TimingRow label="Frankfurt" time="180 ms" widths={[12, 22, 20, 32, 14]} totalWidth="18%" />
                <TimingRow label="Helsinki" time="240 ms" widths={[11, 24, 21, 30, 14]} totalWidth="24%" />
                <TimingRow label="Sydney" time="620 ms" widths={[9, 26, 22, 28, 15]} totalWidth="62%" />
                <div className="timing-legend">
                  <span><b style={{ background: '#8d99ab' }}></b>Name lookup</span>
                  <span><b style={{ background: '#e6b93f' }}></b>Connection</span>
                  <span><b style={{ background: '#d9776a' }}></b>TLS</span>
                  <span><b style={{ background: '#5aa7d6' }}></b>First byte</span>
                  <span><b style={{ background: '#6cbf8c' }}></b>Download</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-alt" id="faq">
          <div className="container">
            <div className="section-header">
              <span className="section-label">FAQ</span>
              <h2 className="section-title">Everything you need to know</h2>
              <p className="section-subtitle">Short answers to the common ones.</p>
            </div>
            <div className="faq-container">
              <FaqItem
                title="Where does it run?"
                content="On your own hosting. The dashboard and database live on one account, and a lightweight probe runs on each location you want to monitor from. You keep full control of your data."
                isOpen={openFaq === 0}
                onClick={() => toggleFaq(0)}
              />
              <FaqItem
                title="How does it avoid false alarms?"
                content="A site is reported as down only when the number of locations you set (for example two) fail in the same round, and the failure repeats for the number of rounds you choose."
                isOpen={openFaq === 1}
                onClick={() => toggleFaq(1)}
              />
              <FaqItem
                title="How often are sites checked?"
                content="Each check has its own interval, from one minute to once a day."
                isOpen={openFaq === 2}
                onClick={() => toggleFaq(2)}
              />
              <FaqItem
                title="How long is the data kept?"
                content="Detailed results are kept for six months. After that, daily summaries of uptime, speed and Apdex remain available, and incidents are kept permanently."
                isOpen={openFaq === 3}
                onClick={() => toggleFaq(3)}
              />
              <FaqItem
                title="Can I share results?"
                content="Yes. Export monthly reports to CSV, or print them as PDF."
                isOpen={openFaq === 4}
                onClick={() => toggleFaq(4)}
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="cta-section">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2>Keep an eye on your sites, calmly.</h2>
            <p>Sign in to see the current status of everything you monitor.</p>
            <a className="btn btn-primary btn-lg" href="#">
              <i className="fas fa-sign-in-alt"></i>
              Sign in
            </a>
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
    </>
  );
}

// Dashboard row component
function DashRow({ status, name, url, uptime, pattern, responseTime }: {
  status: string; name: string; url: string; uptime: string; pattern: number; responseTime: string;
}) {
  const strips = Array.from({ length: 24 }, (_, i) => {
    if (pattern === 2 && i >= 19) return i === 19 ? 'y' : 'r';
    if (pattern === 0 && i === 7) return 'y';
    return '';
  });

  return (
    <div className="dash-row">
      <span className={`status-badge ${status === 'UP' ? 'up' : 'down'}`}>{status}</span>
      <div className="service-info">
        <b>{name}</b>
        <small>{url}</small>
      </div>
      <div className="strip">
        {strips.map((cls, i) => (
          <i key={i} className={cls}></i>
        ))}
      </div>
      <div className="uptime-info">
        <span className="uptime-num">{uptime}</span>
        <span className="uptime-label">30 days</span>
      </div>
    </div>
  );
}

// Feature card component
function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <i className={icon}></i>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

// Timing row component
function TimingRow({ label, time, widths, totalWidth }: {
  label: string; time: string; widths: number[]; totalWidth: string;
}) {
  const colors = ['#8d99ab', '#e6b93f', '#d9776a', '#5aa7d6', '#6cbf8c'];
  return (
    <div className="timing-row">
      <span>{label}</span>
      <div className="timing-bar" style={{ width: totalWidth }}>
        {widths.map((w, i) => (
          <i key={i} style={{ width: `${w}%`, background: colors[i] }}></i>
        ))}
      </div>
      <span style={{ textAlign: 'right', fontWeight: 600, color: '#334155' }}>{time}</span>
    </div>
  );
}

// FAQ Item component
function FaqItem({ title, content, isOpen, onClick }: {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-header" onClick={onClick}>
        <span>{title}</span>
        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
      </div>
      <div className="faq-content" style={{
        maxHeight: isOpen ? '200px' : '0',
        opacity: isOpen ? 1 : 0,
        padding: isOpen ? '0 24px 20px' : '0 24px',
      }}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default App;
