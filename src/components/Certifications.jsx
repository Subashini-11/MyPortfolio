import React from 'react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="cert-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">🏆 Verified Credentials</span>
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">
            Industry & academic credentials demonstrating verified programming capability in C, soft skills excellence from NPTEL, and technical presentation experience.
          </p>
        </div>

        <div className="cert-grid">
          {certificationsData.map((cert) => (
            <div className="glass-card cert-card" key={cert.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="cert-icon-wrap" style={{ borderColor: cert.color }}>
                  <span>{cert.icon}</span>
                </div>
                <span
                  className="cert-issuer-badge"
                  style={{
                    backgroundColor: `${cert.color}20`,
                    color: cert.color,
                    border: `1px solid ${cert.color}50`
                  }}
                >
                  ✔ {cert.badgeText}
                </span>
              </div>

              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                  {cert.issuer}
                </span>
                <h3 className="cert-title" style={{ marginTop: '0.2rem' }}>{cert.title}</h3>
              </div>

              <p className="cert-desc">{cert.description}</p>

              <div className="cert-takeaway">
                <span style={{ fontWeight: 700 }}>Key Competency:</span> {cert.keyTakeaway}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
