import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.sustainability'), path: '/sustainability' },
    { name: t('nav.about'), path: '/about' },
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <Zap className="logo-icon" />
          <span className="logo-text">VoltCore</span>
        </Link>
        
        <div className="desktop-menu">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="nav-actions">
           <div className="lang-switcher">
             <button className={`lang-btn ${i18n.language === 'ge' ? 'active' : ''}`} onClick={() => changeLanguage('ge')}>GE</button>
             <span className="lang-sep">|</span>
             <button className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`} onClick={() => changeLanguage('en')}>EN</button>
           </div>
           <Link to="/contact" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>{t('nav.contact')}</Link>
           <button className="mobile-menu-btn" onClick={toggleMenu}>
             {isOpen ? <X /> : <Menu />}
           </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
           <Link to="/contact" className="mobile-link" onClick={() => setIsOpen(false)}>{t('nav.contact')}</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
