import React from 'react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">🎓 Academic Background</span>
          <h2 className="section-title">Education & Milestones</h2>
          <p className="section-subtitle">
            Pursuing Computer Science and Engineering at K. Ramakrishnan College of Technology, building a strong theoretical and practical software engineering foundation.
          </p>
        </div>

        <div className="glass-card">
          <div className="edu-timeline-card">
            {/* Institution & Degree */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--emerald)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                <span className="pulse-dot"></span>
                <span>{educationData.currentStatus}</span>
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-highlight)' }}>
                {educationData.degree}
              </h3>

              <div style={{ fontSize: '1.15rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.25rem' }}>
                {educationData.institution}
              </div>

              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                📍 {educationData.location} &bull; 🗓️ {educationData.duration}
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Immersed in comprehensive study of computational theory, algorithm design, software system architecture, and modern programming languages with hands-on lab projects.
              </p>
            </div>

            {/* Coursework & Focus Areas */}
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.8rem', color: 'var(--text-highlight)' }}>
                Key Computer Science Coursework
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Rigorous curriculum covering both core computer science systems and applied software engineering disciplines:
              </p>

              <div className="course-tags-grid">
                {educationData.courses.map((course, i) => (
                  <span className="course-tag" key={i}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
