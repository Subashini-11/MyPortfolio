import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume, onShowToast }) {
  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    onShowToast(`Copied ${personalInfo.email} to clipboard!`);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="pulse-dot"></span>
              <span>{personalInfo.statusBadge}</span>
            </div>

            <p className="hero-greeting">Hello World, I'm</p>
            <h1 className="hero-name">{personalInfo.name}</h1>
            <p className="hero-role">{personalInfo.tagline}</p>

            <div className="hero-college-badge">
              <span>🏛️</span>
              <span>{personalInfo.college} &bull; {personalInfo.degree} ({personalInfo.currentYear})</span>
            </div>

            <p className="hero-bio">
              {personalInfo.careerObjective}
            </p>

            {/* Quick Actions */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary" id="hero-btn-projects">
                <span>🚀 Explore Projects</span>
              </a>
              <a href="#contact" className="btn btn-secondary" id="hero-btn-contact">
                <span>💬 Get In Touch</span>
              </a>
              <button onClick={onOpenResume} className="btn btn-outline" id="hero-btn-resume">
                <span>📄 View Resume</span>
              </button>
            </div>
          </div>

          {/* Right Visual & Avatar */}
          <div className="hero-visual">
            <div className="avatar-wrapper">
              <div className="avatar-inner">
                {/* Modern Vector Developer Avatar */}
                <svg
                  className="avatar-svg"
                  viewBox="0 0 300 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Illustration of Subashini M"
                >
                  <defs>
                    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e1b4b" />
                      <stop offset="50%" stopColor="#0f172a" />
                      <stop offset="100%" stopColor="#022c22" />
                    </linearGradient>
                    <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f3c299" />
                      <stop offset="100%" stopColor="#e09d67" />
                    </linearGradient>
                    <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#18181b" />
                      <stop offset="100%" stopColor="#27272a" />
                    </linearGradient>
                    <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0d9488" />
                      <stop offset="100%" stopColor="#0f766e" />
                    </linearGradient>
                    <linearGradient id="glassesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>

                  {/* Backdrop Glow Circle */}
                  <rect width="300" height="300" fill="url(#bgGrad)" />

                  {/* Tech Lines in background */}
                  <path d="M40 70 L260 70" stroke="rgba(99,102,241,0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M40 120 L260 120" stroke="rgba(6,182,212,0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M40 230 L260 230" stroke="rgba(16,185,129,0.2)" strokeWidth="1.5" strokeDasharray="4 4" />

                  {/* Hair back */}
                  <path d="M90 120 Q80 230 115 250 Q150 260 185 250 Q220 230 210 120 Q200 40 150 40 Q100 40 90 120 Z" fill="url(#hairGrad)" />

                  {/* Neck */}
                  <path d="M135 180 L135 220 L165 220 L165 180 Z" fill="url(#skinGrad)" />

                  {/* Hoodie & Clothes */}
                  <path d="M90 220 C90 220 110 210 150 210 C190 210 210 220 210 220 L245 285 L55 285 Z" fill="url(#hoodieGrad)" />
                  <path d="M125 215 L150 245 L175 215 Z" fill="#0f172a" />
                  {/* Laptop in front */}
                  <path d="M95 265 L205 265 L195 285 L105 285 Z" fill="#cbd5e1" />
                  <line x1="100" y1="265" x2="200" y2="265" stroke="#94a3b8" strokeWidth="2" />
                  <circle cx="150" cy="275" r="4" fill="#6366f1" />

                  {/* Face */}
                  <ellipse cx="150" cy="145" rx="46" ry="52" fill="url(#skinGrad)" />

                  {/* Hair Front Bangs */}
                  <path d="M102 125 C102 85 125 55 150 55 C175 55 198 85 198 125 C198 125 180 85 150 85 C120 85 102 125 102 125 Z" fill="url(#hairGrad)" />

                  {/* Eyes */}
                  <ellipse cx="132" cy="142" rx="4" ry="5" fill="#18181b" />
                  <circle cx="134" cy="140" r="1.5" fill="#ffffff" />
                  <ellipse cx="168" cy="142" rx="4" ry="5" fill="#18181b" />
                  <circle cx="170" cy="140" r="1.5" fill="#ffffff" />

                  {/* Modern Chic Glasses */}
                  <rect x="118" y="130" width="28" height="24" rx="6" fill="rgba(6,182,212,0.15)" stroke="url(#glassesGrad)" strokeWidth="3" />
                  <rect x="154" y="130" width="28" height="24" rx="6" fill="rgba(6,182,212,0.15)" stroke="url(#glassesGrad)" strokeWidth="3" />
                  <line x1="146" y1="142" x2="154" y2="142" stroke="#6366f1" strokeWidth="3" />
                  <line x1="110" y1="138" x2="118" y2="138" stroke="#6366f1" strokeWidth="2.5" />
                  <line x1="182" y1="138" x2="190" y2="138" stroke="#6366f1" strokeWidth="2.5" />

                  {/* Smile */}
                  <path d="M140 172 Q150 182 160 172" stroke="#b91c1c" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <path d="M138 171 Q150 180 162 171" fill="#ffffff" />

                  {/* Small code brackets on hoodie */}
                  <text x="150" y="240" fill="#a5f3fc" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">&lt;code /&gt;</text>
                </svg>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="floating-badge badge-1">
              <span>☕</span>
              <span>Java</span>
            </div>
            <div className="floating-badge badge-2">
              <span>🐍</span>
              <span>Python</span>
            </div>
            <div className="floating-badge badge-3">
              <span>🌳</span>
              <span>BST Algorithms</span>
            </div>
            <div className="floating-badge badge-4">
              <span>⚡</span>
              <span>C Programming</span>
            </div>
          </div>
        </div>

        {/* Stats Ribbon */}
        <div className="stats-ribbon">
          {personalInfo.stats.map((s, idx) => (
            <div className="stat-item" key={idx}>
              <div className="stat-val">{s.value}</div>
              <div className="stat-lbl">{s.label}</div>
              <div className="stat-sub">{s.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
