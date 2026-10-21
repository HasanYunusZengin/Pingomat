import { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import StatusPage from './StatusPage';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Routes>
      <Route path="/status" element={<StatusPage />} />
      <Route path="/" element={
    <>
      <main id="top">
        {/* Hero - Full Green Banner */}
        <div className="hero">
          {/* Header - Floating inside hero */}
          <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-inner">
              <a className="logo" href="#top" onClick={closeMenu}>
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
                <Link to="/#features">Features</Link>
                <Link to="/#how">How it works</Link>
                <Link to="/#alerts">Alerts</Link>
                <Link to="/#faq">FAQ</Link>
                <Link to="/status">Status</Link>
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
            {/* Mobile Menu Dropdown */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
              <nav className="mobile-nav">
                <Link to="/#features" onClick={closeMenu}>Features</Link>
                <Link to="/#how" onClick={closeMenu}>How it works</Link>
                <Link to="/#alerts" onClick={closeMenu}>Alerts</Link>
                <Link to="/#faq" onClick={closeMenu}>FAQ</Link>
                <Link to="/status" onClick={closeMenu}>Status</Link>
              </nav>
            </div>
          </header>

          <div className="hero-split">
            {/* Left: Text */}
            <div className="hero-text">
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

            {/* Right: Map */}
            <div className="hero-map">
              <WorldMap />
            </div>
          </div>
        </div>

        {/* Dashboard Showcase - Split Layout */}
        <div className="dashboard-section">
          <div className="container">
            <div className="dashboard-showcase">
              {/* Left Column - Text Content */}
              <div className="dashboard-text">
                <span className="dashboard-badge">
                  <i className="fas fa-signal"></i>
                  PINGOMAT MONITORING
                </span>
                <h2 className="dashboard-headline">Simple &amp; Reliable Website Monitoring</h2>
                <p className="dashboard-description">
                  Keep track of your websites and services continuously. Get notified the exact moment something breaks before it impacts your customers.
                </p>
                <ul className="dashboard-features">
                  <li>
                    <span className="check-icon">
                      <i className="fas fa-check"></i>
                    </span>
                    <div>
                      <strong>Multi-Location Checks:</strong> Monitor your site from multiple global locations to verify uptime and eliminate false alarms.
                    </div>
                  </li>
                  <li>
                    <span className="check-icon">
                      <i className="fas fa-check"></i>
                    </span>
                    <div>
                      <strong>Instant Slack &amp; Email Alerts:</strong> Receive immediate notifications on your preferred communication channels as soon as an outage occurs.
                    </div>
                  </li>
                  <li>
                    <span className="check-icon">
                      <i className="fas fa-check"></i>
                    </span>
                    <div>
                      <strong>Clear Speed &amp; Uptime History:</strong> Keep a transparent record of your site's response times, latency, and overall availability over time.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Right Column - Status Card Mockup */}
              <div className="dashboard-card-wrapper">
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
      } />
    </Routes>
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

// World Map Component
function WorldMap() {
  const r = 3;
  return (
    <svg className="map-svg" viewBox="0 0 1000 470" role="img" aria-label="World map with monitoring probes">
      <g fill="rgba(255,255,255,0.3)">
        {/* NORTH AMERICA */}
        <circle cx="88" cy="52" r={r}/><circle cx="103" cy="52" r={r}/><circle cx="118" cy="52" r={r}/>
        <circle cx="88" cy="67" r={r}/><circle cx="103" cy="67" r={r}/><circle cx="118" cy="67" r={r}/><circle cx="133" cy="67" r={r}/>
        <circle cx="133" cy="52" r={r}/><circle cx="148" cy="52" r={r}/><circle cx="163" cy="52" r={r}/><circle cx="178" cy="52" r={r}/><circle cx="193" cy="52" r={r}/><circle cx="208" cy="52" r={r}/><circle cx="223" cy="52" r={r}/><circle cx="238" cy="52" r={r}/>
        <circle cx="118" cy="67" r={r}/><circle cx="133" cy="67" r={r}/><circle cx="148" cy="67" r={r}/><circle cx="163" cy="67" r={r}/><circle cx="178" cy="67" r={r}/><circle cx="193" cy="67" r={r}/><circle cx="208" cy="67" r={r}/><circle cx="223" cy="67" r={r}/><circle cx="238" cy="67" r={r}/><circle cx="253" cy="67" r={r}/>
        <circle cx="118" cy="82" r={r}/><circle cx="133" cy="82" r={r}/><circle cx="148" cy="82" r={r}/><circle cx="163" cy="82" r={r}/><circle cx="178" cy="82" r={r}/><circle cx="193" cy="82" r={r}/><circle cx="208" cy="82" r={r}/><circle cx="223" cy="82" r={r}/><circle cx="238" cy="82" r={r}/><circle cx="253" cy="82" r={r}/><circle cx="268" cy="82" r={r}/>
        <circle cx="118" cy="97" r={r}/><circle cx="133" cy="97" r={r}/><circle cx="148" cy="97" r={r}/><circle cx="163" cy="97" r={r}/><circle cx="178" cy="97" r={r}/><circle cx="193" cy="97" r={r}/><circle cx="208" cy="97" r={r}/><circle cx="223" cy="97" r={r}/><circle cx="238" cy="97" r={r}/><circle cx="253" cy="97" r={r}/><circle cx="268" cy="97" r={r}/>
        <circle cx="118" cy="112" r={r}/><circle cx="133" cy="112" r={r}/><circle cx="148" cy="112" r={r}/><circle cx="163" cy="112" r={r}/><circle cx="178" cy="112" r={r}/><circle cx="193" cy="112" r={r}/><circle cx="208" cy="112" r={r}/><circle cx="223" cy="112" r={r}/><circle cx="238" cy="112" r={r}/><circle cx="253" cy="112" r={r}/><circle cx="268" cy="112" r={r}/>
        <circle cx="118" cy="127" r={r}/><circle cx="133" cy="127" r={r}/><circle cx="148" cy="127" r={r}/><circle cx="163" cy="127" r={r}/><circle cx="178" cy="127" r={r}/><circle cx="193" cy="127" r={r}/><circle cx="208" cy="127" r={r}/><circle cx="223" cy="127" r={r}/><circle cx="238" cy="127" r={r}/><circle cx="253" cy="127" r={r}/>
        <circle cx="118" cy="142" r={r}/><circle cx="133" cy="142" r={r}/><circle cx="148" cy="142" r={r}/><circle cx="163" cy="142" r={r}/><circle cx="178" cy="142" r={r}/><circle cx="193" cy="142" r={r}/><circle cx="208" cy="142" r={r}/><circle cx="223" cy="142" r={r}/><circle cx="238" cy="142" r={r}/><circle cx="253" cy="142" r={r}/>
        <circle cx="133" cy="157" r={r}/><circle cx="148" cy="157" r={r}/><circle cx="163" cy="157" r={r}/><circle cx="178" cy="157" r={r}/><circle cx="193" cy="157" r={r}/><circle cx="208" cy="157" r={r}/><circle cx="223" cy="157" r={r}/><circle cx="238" cy="157" r={r}/><circle cx="253" cy="157" r={r}/>
        <circle cx="148" cy="172" r={r}/><circle cx="163" cy="172" r={r}/><circle cx="178" cy="172" r={r}/><circle cx="193" cy="172" r={r}/><circle cx="208" cy="172" r={r}/><circle cx="223" cy="172" r={r}/><circle cx="238" cy="172" r={r}/>
        <circle cx="163" cy="187" r={r}/><circle cx="178" cy="187" r={r}/><circle cx="193" cy="187" r={r}/><circle cx="208" cy="187" r={r}/><circle cx="223" cy="187" r={r}/>
        <circle cx="148" cy="202" r={r}/><circle cx="163" cy="202" r={r}/><circle cx="178" cy="202" r={r}/><circle cx="193" cy="202" r={r}/><circle cx="208" cy="202" r={r}/>
        <circle cx="163" cy="217" r={r}/><circle cx="178" cy="217" r={r}/><circle cx="193" cy="217" r={r}/><circle cx="208" cy="217" r={r}/><circle cx="223" cy="217" r={r}/>
        <circle cx="178" cy="232" r={r}/><circle cx="193" cy="232" r={r}/><circle cx="208" cy="232" r={r}/><circle cx="223" cy="232" r={r}/>
        <circle cx="193" cy="247" r={r}/><circle cx="208" cy="247" r={r}/><circle cx="223" cy="247" r={r}/>
        <circle cx="208" cy="262" r={r}/><circle cx="223" cy="262" r={r}/>
        <circle cx="223" cy="277" r={r}/><circle cx="238" cy="277" r={r}/>
        {/* SOUTH AMERICA */}
        <circle cx="253" cy="292" r={r}/><circle cx="268" cy="292" r={r}/><circle cx="283" cy="292" r={r}/><circle cx="298" cy="292" r={r}/>
        <circle cx="253" cy="307" r={r}/><circle cx="268" cy="307" r={r}/><circle cx="283" cy="307" r={r}/><circle cx="298" cy="307" r={r}/><circle cx="313" cy="307" r={r}/><circle cx="328" cy="307" r={r}/><circle cx="343" cy="307" r={r}/>
        <circle cx="253" cy="322" r={r}/><circle cx="268" cy="322" r={r}/><circle cx="283" cy="322" r={r}/><circle cx="298" cy="322" r={r}/><circle cx="313" cy="322" r={r}/><circle cx="328" cy="322" r={r}/><circle cx="343" cy="322" r={r}/><circle cx="358" cy="322" r={r}/>
        <circle cx="268" cy="337" r={r}/><circle cx="283" cy="337" r={r}/><circle cx="298" cy="337" r={r}/><circle cx="313" cy="337" r={r}/><circle cx="328" cy="337" r={r}/><circle cx="343" cy="337" r={r}/><circle cx="358" cy="337" r={r}/><circle cx="373" cy="337" r={r}/>
        <circle cx="268" cy="352" r={r}/><circle cx="283" cy="352" r={r}/><circle cx="298" cy="352" r={r}/><circle cx="313" cy="352" r={r}/><circle cx="328" cy="352" r={r}/><circle cx="343" cy="352" r={r}/><circle cx="358" cy="352" r={r}/><circle cx="373" cy="352" r={r}/>
        <circle cx="283" cy="367" r={r}/><circle cx="298" cy="367" r={r}/><circle cx="313" cy="367" r={r}/><circle cx="328" cy="367" r={r}/><circle cx="343" cy="367" r={r}/><circle cx="358" cy="367" r={r}/>
        <circle cx="283" cy="382" r={r}/><circle cx="298" cy="382" r={r}/><circle cx="313" cy="382" r={r}/><circle cx="328" cy="382" r={r}/><circle cx="343" cy="382" r={r}/>
        <circle cx="298" cy="397" r={r}/><circle cx="313" cy="397" r={r}/><circle cx="328" cy="397" r={r}/><circle cx="343" cy="397" r={r}/>
        <circle cx="298" cy="412" r={r}/><circle cx="313" cy="412" r={r}/><circle cx="328" cy="412" r={r}/>
        <circle cx="313" cy="427" r={r}/><circle cx="328" cy="427" r={r}/>
        <circle cx="313" cy="442" r={r}/>
        {/* EUROPE */}
        <circle cx="478" cy="37" r={r}/><circle cx="493" cy="37" r={r}/><circle cx="508" cy="37" r={r}/>
        <circle cx="463" cy="52" r={r}/><circle cx="478" cy="52" r={r}/><circle cx="493" cy="52" r={r}/><circle cx="508" cy="52" r={r}/><circle cx="523" cy="52" r={r}/>
        <circle cx="463" cy="67" r={r}/><circle cx="478" cy="67" r={r}/><circle cx="493" cy="67" r={r}/><circle cx="508" cy="67" r={r}/><circle cx="523" cy="67" r={r}/>
        <circle cx="418" cy="82" r={r}/><circle cx="433" cy="82" r={r}/>
        <circle cx="418" cy="97" r={r}/><circle cx="433" cy="97" r={r}/><circle cx="448" cy="97" r={r}/>
        <circle cx="433" cy="112" r={r}/><circle cx="448" cy="112" r={r}/><circle cx="463" cy="112" r={r}/><circle cx="478" cy="112" r={r}/><circle cx="493" cy="112" r={r}/><circle cx="508" cy="112" r={r}/><circle cx="523" cy="112" r={r}/><circle cx="538" cy="112" r={r}/>
        <circle cx="433" cy="127" r={r}/><circle cx="448" cy="127" r={r}/><circle cx="463" cy="127" r={r}/><circle cx="478" cy="127" r={r}/><circle cx="493" cy="127" r={r}/><circle cx="508" cy="127" r={r}/><circle cx="523" cy="127" r={r}/><circle cx="538" cy="127" r={r}/>
        <circle cx="448" cy="142" r={r}/><circle cx="463" cy="142" r={r}/><circle cx="478" cy="142" r={r}/><circle cx="493" cy="142" r={r}/><circle cx="508" cy="142" r={r}/><circle cx="523" cy="142" r={r}/>
        <circle cx="448" cy="157" r={r}/><circle cx="463" cy="157" r={r}/><circle cx="478" cy="157" r={r}/><circle cx="493" cy="157" r={r}/><circle cx="508" cy="157" r={r}/>
        <circle cx="463" cy="172" r={r}/><circle cx="478" cy="172" r={r}/><circle cx="493" cy="172" r={r}/>
        {/* RUSSIA/ASIA */}
        <circle cx="538" cy="37" r={r}/><circle cx="553" cy="37" r={r}/><circle cx="568" cy="37" r={r}/><circle cx="583" cy="37" r={r}/><circle cx="598" cy="37" r={r}/><circle cx="613" cy="37" r={r}/><circle cx="628" cy="37" r={r}/><circle cx="643" cy="37" r={r}/><circle cx="658" cy="37" r={r}/><circle cx="673" cy="37" r={r}/><circle cx="688" cy="37" r={r}/><circle cx="703" cy="37" r={r}/><circle cx="718" cy="37" r={r}/><circle cx="733" cy="37" r={r}/><circle cx="748" cy="37" r={r}/><circle cx="763" cy="37" r={r}/><circle cx="778" cy="37" r={r}/>
        <circle cx="538" cy="52" r={r}/><circle cx="553" cy="52" r={r}/><circle cx="568" cy="52" r={r}/><circle cx="583" cy="52" r={r}/><circle cx="598" cy="52" r={r}/><circle cx="613" cy="52" r={r}/><circle cx="628" cy="52" r={r}/><circle cx="643" cy="52" r={r}/><circle cx="658" cy="52" r={r}/><circle cx="673" cy="52" r={r}/><circle cx="688" cy="52" r={r}/><circle cx="703" cy="52" r={r}/><circle cx="718" cy="52" r={r}/><circle cx="733" cy="52" r={r}/><circle cx="748" cy="52" r={r}/><circle cx="763" cy="52" r={r}/><circle cx="778" cy="52" r={r}/><circle cx="793" cy="52" r={r}/>
        <circle cx="553" cy="67" r={r}/><circle cx="568" cy="67" r={r}/><circle cx="583" cy="67" r={r}/><circle cx="598" cy="67" r={r}/><circle cx="613" cy="67" r={r}/><circle cx="628" cy="67" r={r}/><circle cx="643" cy="67" r={r}/><circle cx="658" cy="67" r={r}/><circle cx="673" cy="67" r={r}/><circle cx="688" cy="67" r={r}/><circle cx="703" cy="67" r={r}/><circle cx="718" cy="67" r={r}/><circle cx="733" cy="67" r={r}/><circle cx="748" cy="67" r={r}/><circle cx="763" cy="67" r={r}/><circle cx="778" cy="67" r={r}/><circle cx="793" cy="67" r={r}/><circle cx="808" cy="67" r={r}/>
        <circle cx="553" cy="82" r={r}/><circle cx="568" cy="82" r={r}/><circle cx="583" cy="82" r={r}/><circle cx="598" cy="82" r={r}/><circle cx="613" cy="82" r={r}/><circle cx="628" cy="82" r={r}/><circle cx="643" cy="82" r={r}/><circle cx="658" cy="82" r={r}/><circle cx="673" cy="82" r={r}/><circle cx="688" cy="82" r={r}/><circle cx="703" cy="82" r={r}/><circle cx="718" cy="82" r={r}/><circle cx="733" cy="82" r={r}/><circle cx="748" cy="82" r={r}/><circle cx="763" cy="82" r={r}/><circle cx="778" cy="82" r={r}/><circle cx="793" cy="82" r={r}/><circle cx="808" cy="82" r={r}/>
        <circle cx="568" cy="97" r={r}/><circle cx="583" cy="97" r={r}/><circle cx="598" cy="97" r={r}/><circle cx="613" cy="97" r={r}/><circle cx="628" cy="97" r={r}/><circle cx="643" cy="97" r={r}/><circle cx="658" cy="97" r={r}/><circle cx="673" cy="97" r={r}/><circle cx="688" cy="97" r={r}/><circle cx="703" cy="97" r={r}/><circle cx="718" cy="97" r={r}/><circle cx="733" cy="97" r={r}/><circle cx="748" cy="97" r={r}/><circle cx="763" cy="97" r={r}/><circle cx="778" cy="97" r={r}/><circle cx="793" cy="97" r={r}/>
        <circle cx="583" cy="112" r={r}/><circle cx="598" cy="112" r={r}/><circle cx="613" cy="112" r={r}/><circle cx="628" cy="112" r={r}/><circle cx="643" cy="112" r={r}/><circle cx="658" cy="112" r={r}/><circle cx="673" cy="112" r={r}/><circle cx="688" cy="112" r={r}/><circle cx="703" cy="112" r={r}/><circle cx="718" cy="112" r={r}/><circle cx="733" cy="112" r={r}/><circle cx="748" cy="112" r={r}/><circle cx="763" cy="112" r={r}/>
        <circle cx="598" cy="127" r={r}/><circle cx="613" cy="127" r={r}/><circle cx="628" cy="127" r={r}/><circle cx="643" cy="127" r={r}/><circle cx="658" cy="127" r={r}/><circle cx="673" cy="127" r={r}/><circle cx="688" cy="127" r={r}/><circle cx="703" cy="127" r={r}/><circle cx="718" cy="127" r={r}/><circle cx="733" cy="127" r={r}/><circle cx="748" cy="127" r={r}/>
        <circle cx="568" cy="142" r={r}/><circle cx="583" cy="142" r={r}/><circle cx="598" cy="142" r={r}/><circle cx="613" cy="142" r={r}/><circle cx="628" cy="142" r={r}/><circle cx="643" cy="142" r={r}/><circle cx="658" cy="142" r={r}/><circle cx="673" cy="142" r={r}/><circle cx="688" cy="142" r={r}/>
        <circle cx="583" cy="157" r={r}/><circle cx="598" cy="157" r={r}/><circle cx="613" cy="157" r={r}/><circle cx="628" cy="157" r={r}/><circle cx="643" cy="157" r={r}/><circle cx="658" cy="157" r={r}/><circle cx="673" cy="157" r={r}/><circle cx="688" cy="157" r={r}/><circle cx="703" cy="157" r={r}/>
        <circle cx="673" cy="172" r={r}/><circle cx="688" cy="172" r={r}/><circle cx="703" cy="172" r={r}/><circle cx="718" cy="172" r={r}/><circle cx="733" cy="172" r={r}/>
        <circle cx="688" cy="187" r={r}/><circle cx="703" cy="187" r={r}/><circle cx="718" cy="187" r={r}/><circle cx="733" cy="187" r={r}/>
        <circle cx="688" cy="202" r={r}/><circle cx="703" cy="202" r={r}/><circle cx="718" cy="202" r={r}/>
        <circle cx="703" cy="217" r={r}/><circle cx="718" cy="217" r={r}/>
        <circle cx="748" cy="127" r={r}/><circle cx="763" cy="127" r={r}/><circle cx="778" cy="127" r={r}/><circle cx="793" cy="127" r={r}/><circle cx="808" cy="127" r={r}/>
        <circle cx="748" cy="142" r={r}/><circle cx="763" cy="142" r={r}/><circle cx="778" cy="142" r={r}/><circle cx="793" cy="142" r={r}/><circle cx="808" cy="142" r={r}/><circle cx="823" cy="142" r={r}/>
        <circle cx="748" cy="157" r={r}/><circle cx="763" cy="157" r={r}/><circle cx="778" cy="157" r={r}/><circle cx="793" cy="157" r={r}/><circle cx="808" cy="157" r={r}/><circle cx="823" cy="157" r={r}/>
        <circle cx="748" cy="172" r={r}/><circle cx="763" cy="172" r={r}/><circle cx="778" cy="172" r={r}/><circle cx="793" cy="172" r={r}/><circle cx="808" cy="172" r={r}/>
        <circle cx="763" cy="187" r={r}/><circle cx="778" cy="187" r={r}/><circle cx="793" cy="187" r={r}/>
        <circle cx="853" cy="112" r={r}/><circle cx="868" cy="112" r={r}/>
        <circle cx="838" cy="127" r={r}/><circle cx="853" cy="127" r={r}/><circle cx="868" cy="127" r={r}/>
        <circle cx="838" cy="142" r={r}/><circle cx="853" cy="142" r={r}/>
        <circle cx="838" cy="157" r={r}/><circle cx="853" cy="157" r={r}/>
        <circle cx="748" cy="202" r={r}/><circle cx="763" cy="202" r={r}/><circle cx="778" cy="202" r={r}/><circle cx="793" cy="202" r={r}/>
        <circle cx="763" cy="217" r={r}/><circle cx="778" cy="217" r={r}/><circle cx="793" cy="217" r={r}/><circle cx="808" cy="217" r={r}/>
        <circle cx="778" cy="232" r={r}/><circle cx="793" cy="232" r={r}/><circle cx="808" cy="232" r={r}/>
        <circle cx="793" cy="247" r={r}/><circle cx="808" cy="247" r={r}/><circle cx="823" cy="247" r={r}/>
        <circle cx="808" cy="262" r={r}/><circle cx="823" cy="262" r={r}/>
        {/* AFRICA */}
        <circle cx="448" cy="187" r={r}/><circle cx="463" cy="187" r={r}/><circle cx="478" cy="187" r={r}/><circle cx="493" cy="187" r={r}/><circle cx="508" cy="187" r={r}/><circle cx="523" cy="187" r={r}/><circle cx="538" cy="187" r={r}/><circle cx="553" cy="187" r={r}/><circle cx="568" cy="187" r={r}/>
        <circle cx="448" cy="202" r={r}/><circle cx="463" cy="202" r={r}/><circle cx="478" cy="202" r={r}/><circle cx="493" cy="202" r={r}/><circle cx="508" cy="202" r={r}/><circle cx="523" cy="202" r={r}/><circle cx="538" cy="202" r={r}/><circle cx="553" cy="202" r={r}/><circle cx="568" cy="202" r={r}/><circle cx="583" cy="202" r={r}/>
        <circle cx="448" cy="217" r={r}/><circle cx="463" cy="217" r={r}/><circle cx="478" cy="217" r={r}/><circle cx="493" cy="217" r={r}/><circle cx="508" cy="217" r={r}/><circle cx="523" cy="217" r={r}/><circle cx="538" cy="217" r={r}/><circle cx="553" cy="217" r={r}/><circle cx="568" cy="217" r={r}/><circle cx="583" cy="217" r={r}/>
        <circle cx="448" cy="232" r={r}/><circle cx="463" cy="232" r={r}/><circle cx="478" cy="232" r={r}/><circle cx="493" cy="232" r={r}/><circle cx="508" cy="232" r={r}/><circle cx="523" cy="232" r={r}/><circle cx="538" cy="232" r={r}/><circle cx="553" cy="232" r={r}/><circle cx="568" cy="232" r={r}/>
        <circle cx="463" cy="247" r={r}/><circle cx="478" cy="247" r={r}/><circle cx="493" cy="247" r={r}/><circle cx="508" cy="247" r={r}/><circle cx="523" cy="247" r={r}/><circle cx="538" cy="247" r={r}/><circle cx="553" cy="247" r={r}/><circle cx="568" cy="247" r={r}/>
        <circle cx="463" cy="262" r={r}/><circle cx="478" cy="262" r={r}/><circle cx="493" cy="262" r={r}/><circle cx="508" cy="262" r={r}/><circle cx="523" cy="262" r={r}/><circle cx="538" cy="262" r={r}/><circle cx="553" cy="262" r={r}/>
        <circle cx="478" cy="277" r={r}/><circle cx="493" cy="277" r={r}/><circle cx="508" cy="277" r={r}/><circle cx="523" cy="277" r={r}/><circle cx="538" cy="277" r={r}/><circle cx="553" cy="277" r={r}/>
        <circle cx="478" cy="292" r={r}/><circle cx="493" cy="292" r={r}/><circle cx="508" cy="292" r={r}/><circle cx="523" cy="292" r={r}/><circle cx="538" cy="292" r={r}/><circle cx="553" cy="292" r={r}/>
        <circle cx="478" cy="307" r={r}/><circle cx="493" cy="307" r={r}/><circle cx="508" cy="307" r={r}/><circle cx="523" cy="307" r={r}/><circle cx="538" cy="307" r={r}/>
        <circle cx="493" cy="322" r={r}/><circle cx="508" cy="322" r={r}/><circle cx="523" cy="322" r={r}/><circle cx="538" cy="322" r={r}/>
        <circle cx="493" cy="337" r={r}/><circle cx="508" cy="337" r={r}/><circle cx="523" cy="337" r={r}/><circle cx="538" cy="337" r={r}/>
        <circle cx="493" cy="352" r={r}/><circle cx="508" cy="352" r={r}/><circle cx="523" cy="352" r={r}/><circle cx="538" cy="352" r={r}/>
        <circle cx="508" cy="367" r={r}/><circle cx="523" cy="367" r={r}/><circle cx="538" cy="367" r={r}/>
        <circle cx="508" cy="382" r={r}/><circle cx="523" cy="382" r={r}/><circle cx="538" cy="382" r={r}/>
        <circle cx="523" cy="397" r={r}/><circle cx="538" cy="397" r={r}/>
        <circle cx="583" cy="337" r={r}/><circle cx="583" cy="352" r={r}/><circle cx="583" cy="367" r={r}/>
        {/* AUSTRALIA */}
        <circle cx="823" cy="322" r={r}/><circle cx="838" cy="322" r={r}/><circle cx="853" cy="322" r={r}/><circle cx="868" cy="322" r={r}/><circle cx="883" cy="322" r={r}/>
        <circle cx="808" cy="337" r={r}/><circle cx="823" cy="337" r={r}/><circle cx="838" cy="337" r={r}/><circle cx="853" cy="337" r={r}/><circle cx="868" cy="337" r={r}/><circle cx="883" cy="337" r={r}/><circle cx="898" cy="337" r={r}/>
        <circle cx="808" cy="352" r={r}/><circle cx="823" cy="352" r={r}/><circle cx="838" cy="352" r={r}/><circle cx="853" cy="352" r={r}/><circle cx="868" cy="352" r={r}/><circle cx="883" cy="352" r={r}/><circle cx="898" cy="352" r={r}/><circle cx="913" cy="352" r={r}/>
        <circle cx="808" cy="367" r={r}/><circle cx="823" cy="367" r={r}/><circle cx="838" cy="367" r={r}/><circle cx="853" cy="367" r={r}/><circle cx="868" cy="367" r={r}/><circle cx="883" cy="367" r={r}/><circle cx="898" cy="367" r={r}/><circle cx="913" cy="367" r={r}/><circle cx="928" cy="367" r={r}/>
        <circle cx="823" cy="382" r={r}/><circle cx="838" cy="382" r={r}/><circle cx="853" cy="382" r={r}/><circle cx="868" cy="382" r={r}/><circle cx="883" cy="382" r={r}/><circle cx="898" cy="382" r={r}/><circle cx="913" cy="382" r={r}/><circle cx="928" cy="382" r={r}/><circle cx="943" cy="382" r={r}/>
        <circle cx="838" cy="397" r={r}/><circle cx="853" cy="397" r={r}/><circle cx="868" cy="397" r={r}/><circle cx="883" cy="397" r={r}/><circle cx="898" cy="397" r={r}/><circle cx="913" cy="397" r={r}/><circle cx="928" cy="397" r={r}/>
        <circle cx="853" cy="412" r={r}/><circle cx="868" cy="412" r={r}/><circle cx="883" cy="412" r={r}/><circle cx="898" cy="412" r={r}/><circle cx="913" cy="412" r={r}/>
        <circle cx="868" cy="427" r={r}/><circle cx="883" cy="427" r={r}/><circle cx="898" cy="427" r={r}/>
        {/* Indonesia */}
        <circle cx="778" cy="262" r={r}/><circle cx="793" cy="262" r={r}/><circle cx="808" cy="262" r={r}/>
        <circle cx="793" cy="277" r={r}/><circle cx="808" cy="277" r={r}/><circle cx="823" cy="277" r={r}/><circle cx="838" cy="277" r={r}/><circle cx="853" cy="277" r={r}/>
        <circle cx="808" cy="292" r={r}/><circle cx="823" cy="292" r={r}/><circle cx="838" cy="292" r={r}/><circle cx="853" cy="292" r={r}/><circle cx="868" cy="292" r={r}/>
        {/* New Zealand */}
        <circle cx="958" cy="397" r={r}/><circle cx="973" cy="397" r={r}/>
        <circle cx="958" cy="412" r={r}/><circle cx="973" cy="412" r={r}/>
      </g>
      
      {/* Arcs */}
      <path id="a-losangeles" d="M142.7 149.4Q356 17 569 124.5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeDasharray="4 6" />
      <path id="a-saopaulo" d="M347 355.5Q458 150 569 124.5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeDasharray="4 6" />
      <path id="a-frankfurt" d="M510.4 92.5Q540 90 569 124.5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeDasharray="4 6" />
      <path id="a-capetown" d="M540.7 392.7Q555 183 569 124.5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeDasharray="4 6" />
      <path id="a-singapore" d="M807.1 266.5Q688 118 569 124.5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeDasharray="4 6" />
      <path id="a-sydney" d="M927.6 392.5Q748 133 569 124.5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeDasharray="4 6" />

      {/* Your site marker */}
      <g>
        <circle cx="569" cy="124.5" r="4" fill="none" stroke="#fff">
          <animate attributeName="r" values="4;26" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values=".8;0" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="569" cy="124.5" r="4" fill="none" stroke="#fff">
          <animate attributeName="r" values="4;26" dur="3s" begin="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values=".8;0" dur="3s" begin="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="569" cy="124.5" r="6" fill="#fff" />
        <circle cx="569" cy="124.5" r="2.6" fill="#1fb86b" />
        <text x="583" y="112.5" fill="#fff" fontWeight="700" fontSize="12" fontFamily="Inter, sans-serif">your site</text>
      </g>

      {/* Probe markers */}
      <ProbeMarker cx={142.7} cy={149.4} label="Los Angeles" ms="148 ms" arcId="a-losangeles" delay="0s" labelY={165.4} msY={178.4} />
      <ProbeMarker cx={347} cy={355.5} label="São Paulo" ms="212 ms" arcId="a-saopaulo" delay="1.1s" labelY={371.5} msY={384.5} />
      <ProbeMarker cx={510.4} cy={92.5} label="Frankfurt" ms="34 ms" arcId="a-frankfurt" delay="2.2s" labelY={78.5} msY={65.5} />
      <ProbeMarker cx={540.7} cy={392.7} label="Cape Town" ms="301 ms" arcId="a-capetown" delay="3.3s" labelY={408.7} msY={421.7} />
      <ProbeMarker cx={807.1} cy={266.5} label="Singapore" ms="96 ms" arcId="a-singapore" delay="4.4s" labelY={282.5} msY={295.5} />
      <ProbeMarker cx={927.6} cy={392.5} label="Sydney" ms="173 ms" arcId="a-sydney" delay="5.5s" labelY={408.5} msY={421.5} />
    </svg>
  );
}

// Probe marker component
function ProbeMarker({ cx, cy, label, ms, arcId, delay, labelY, msY }: {
  cx: number; cy: number; label: string; ms: string; arcId: string; delay: string; labelY: number; msY: number;
}) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="4" fill="#fff" />
      <circle cx={cx} cy={cy} r="3" fill="none" stroke="rgba(255,255,255,0.6)" opacity="0">
        <animate attributeName="r" values="3;16;16" keyTimes="0;.12;1" dur="9s" begin={delay} repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.9;0;0" keyTimes="0;.01;.12;1" dur="9s" begin={delay} repeatCount="indefinite" />
      </circle>
      <circle r="3" fill="#fff" opacity="0">
        <animateMotion dur="9s" begin={delay} repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;.22;1" calcMode="linear">
          <mpath href={`#${arcId}`} />
        </animateMotion>
        <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.01;.02;.21;.22;1" dur="9s" begin={delay} repeatCount="indefinite" />
      </circle>
      <circle r="3" fill="rgba(255,255,255,0.7)" opacity="0">
        <animateMotion dur="9s" begin={delay} repeatCount="indefinite" keyPoints="1;1;0;0" keyTimes="0;.3;.5;1" calcMode="linear">
          <mpath href={`#${arcId}`} />
        </animateMotion>
        <animate attributeName="opacity" values="0;0;0;1;1;0;0" keyTimes="0;.3;.31;.32;.49;.5;1" dur="9s" begin={delay} repeatCount="indefinite" />
      </circle>
      <text x={cx} y={labelY} textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="600">{label}</text>
      <text x={cx} y={msY} textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="700" opacity="0">
        {ms}
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.5;.54;.92;1" dur="9s" begin={delay} repeatCount="indefinite" />
      </text>
    </g>
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
