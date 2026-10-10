import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="nav-logo" aria-label="Subashini M Portfolio Home">
          <div className="logo-badge">SM</div>
          <span>{personalInfo.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            onClick={onOpenResume}
            className="btn btn-secondary"
            style={{ padding: '0.55rem 1.1rem', fontSize: '0.88rem' }}
          >
            📄 Resume
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hamburger-btn"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <button
          onClick={() => {
            setMobileMenuOpen(false);
            onOpenResume();
          }}
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '0.5rem' }}
        >
          📄 View Resume
        </button>
      </div>
    </header>
  );
}
