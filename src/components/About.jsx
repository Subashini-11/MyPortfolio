import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function About({ onShowToast }) {
  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    onShowToast(`Copied ${label} to clipboard!`);
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">🎯 Career Objective & Profile</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            An enthusiastic computer science undergraduate dedicated to transforming algorithmic concepts into resilient, real-world software applications.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Career Objective */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-highlight)' }}>
              Professional Statement
            </h3>
            <div className="objective-box">
              <p>"{personalInfo.careerObjective}"</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <span style={{ fontSize: '1.4rem' }}>💡</span>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-highlight)' }}>
                    Algorithmic & Problem-Solving Mindset
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Trained in fundamental data structures including Binary Search Trees (BST), linked lists, and sorting algorithms with certified computational problem solving in C.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <span style={{ fontSize: '1.4rem' }}>🛠️</span>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-highlight)' }}>
                    Practical Software Development
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Hands-on experience developing modular Python automation systems and building structured object-oriented applications in Java.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <span style={{ fontSize: '1.4rem' }}>🌟</span>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-highlight)' }}>
                    Communication & Technical Presentation
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Certified by NPTEL in Soft Skills & Personality, with experience presenting technical papers at CARE College.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Profile Details */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', color: 'var(--text-highlight)' }}>
                Academic & Contact Summary
              </h3>
              <div className="about-card-info">
                <div className="info-pill">
                  <div className="info-pill-title">Academic Institution</div>
                  <div className="info-pill-value">{personalInfo.college}</div>
                </div>

                <div className="info-pill">
                  <div className="info-pill-title">Degree Program</div>
                  <div className="info-pill-value">{personalInfo.degree}</div>
                </div>

                <div className="info-pill">
                  <div className="info-pill-title">Current Academic Year</div>
                  <div className="info-pill-value">{personalInfo.currentYear}</div>
                </div>

                <div className="info-pill">
                  <div className="info-pill-title">Core Languages</div>
                  <div className="info-pill-value">Java, Python, C</div>
                </div>

                <div className="info-pill">
                  <div className="info-pill-title">Direct Contact</div>
                  <div className="info-pill-value" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>{personalInfo.phone}</span>
                    <button
                      onClick={() => handleCopy(personalInfo.phone, 'Phone number')}
                      title="Copy Phone"
                      className="copy-btn-icon"
                      style={{ width: '28px', height: '28px', fontSize: '0.8rem' }}
                    >
                      📋
                    </button>
                  </div>
                </div>

                <div className="info-pill">
                  <div className="info-pill-title">Email Address</div>
                  <div className="info-pill-value" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.85rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {personalInfo.email}
                    </span>
                    <button
                      onClick={() => handleCopy(personalInfo.email, 'Email address')}
                      title="Copy Email"
                      className="copy-btn-icon"
                      style={{ width: '28px', height: '28px', fontSize: '0.8rem' }}
                    >
                      📋
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Ready to collaborate callout */}
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(99,102,241,0.08) 100%)',
                border: '1px solid rgba(6,182,212,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-highlight)' }}>
                  Looking for summer internships & projects?
                </h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                  Available for immediate software engineering and development opportunities.
                </p>
              </div>
              <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.1rem', fontSize: '0.85rem' }}>
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
