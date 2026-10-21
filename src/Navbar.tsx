import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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

  const isStatusPage = location.pathname === '/status';

  return (
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
          <Link to="/#features" onClick={closeMenu}>Features</Link>
          <Link to="/#how" onClick={closeMenu}>How it works</Link>
          <Link to="/#alerts" onClick={closeMenu}>Alerts</Link>
          <Link to="/#faq" onClick={closeMenu}>FAQ</Link>
          <Link to="/status" className={isStatusPage ? 'active' : ''} onClick={closeMenu}>Status</Link>
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
          <Link to="/#features" onClick={closeMenu}>Features</Link>
          <Link to="/#how" onClick={closeMenu}>How it works</Link>
          <Link to="/#alerts" onClick={closeMenu}>Alerts</Link>
          <Link to="/#faq" onClick={closeMenu}>FAQ</Link>
          <Link to="/status" className={isStatusPage ? 'active' : ''} onClick={closeMenu}>Status</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
