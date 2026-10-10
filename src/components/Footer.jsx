import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <div className="logo-badge" style={{ width: '32px', height: '32px', fontSize: '0.85rem' }}>SM</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{personalInfo.name}</h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '420px' }}>
              3rd-Year B.E. Computer Science & Engineering student at {personalInfo.college}. Exploring Java, Python, and practical software engineering.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.5rem' }}>
                Navigation
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#certifications">Certifications</a></li>
                <li><a href="#education">Education</a></li>
              </ul>
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.5rem' }}>
                Connect
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <li><a href={`tel:${personalInfo.phone}`}>📞 {personalInfo.formattedPhone}</a></li>
                <li><a href={`mailto:${personalInfo.email}`}>✉️ {personalInfo.email}</a></li>
                <li>
                  <button onClick={onOpenResume} style={{ color: 'var(--cyan)', textAlign: 'left' }}>
                    📄 View Resume
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="btn btn-secondary"
              style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem' }}
              aria-label="Scroll to top"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Subashini M. All rights reserved.
          </p>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Crafted with React &bull; Hosted on Portfolio Workspace
          </p>
        </div>
      </div>
    </footer>
  );
}
