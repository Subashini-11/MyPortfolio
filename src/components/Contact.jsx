import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    onShowToast(`Copied ${label} to clipboard!`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast(`Thank you, ${formData.name}! Your message has been sent successfully.`);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">📬 Let's Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Whether you have an internship opportunity, project collaboration, or just want to say hi, feel free to reach out directly!
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Methods List */}
          <div className="contact-info-list">
            {/* Phone Card */}
            <div className="contact-method-card">
              <div className="contact-method-icon">📞</div>
              <div className="contact-method-details">
                <div className="contact-method-label">Phone Number</div>
                <div className="contact-method-value">{personalInfo.formattedPhone}</div>
              </div>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="copy-btn-icon"
                  title="Call Now"
                  aria-label="Call Subashini"
                >
                  📱
                </a>
                <button
                  type="button"
                  className="copy-btn-icon"
                  onClick={() => handleCopy(personalInfo.phone, 'Phone number')}
                  title="Copy Phone"
                  aria-label="Copy Phone number"
                >
                  📋
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="contact-method-card">
              <div className="contact-method-icon">✉️</div>
              <div className="contact-method-details">
                <div className="contact-method-label">Email Address</div>
                <div className="contact-method-value" style={{ fontSize: '0.98rem' }}>
                  {personalInfo.email}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="copy-btn-icon"
                  title="Send Email"
                  aria-label="Send Email to Subashini"
                >
                  ✉️
                </a>
                <button
                  type="button"
                  className="copy-btn-icon"
                  onClick={() => handleCopy(personalInfo.email, 'Email address')}
                  title="Copy Email"
                  aria-label="Copy Email address"
                >
                  📋
                </button>
              </div>
            </div>

            {/* Institution Card */}
            <div className="contact-method-card">
              <div className="contact-method-icon">🏛️</div>
              <div className="contact-method-details">
                <div className="contact-method-label">College & Location</div>
                <div className="contact-method-value" style={{ fontSize: '0.95rem' }}>
                  {personalInfo.college}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* Academic Availability Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(16,185,129,0.1) 100%)',
                border: '1px solid var(--border-glow)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem'
              }}
            >
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-highlight)', marginBottom: '0.3rem' }}>
                🤝 Open for Opportunities
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                Actively seeking internships, software development projects, and research opportunities in Java, Python, and web technologies.
              </p>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--text-highlight)' }}>
              Send a Direct Message
            </h3>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Your Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="form-input"
                  placeholder="e.g. John Doe / Hiring Manager"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="form-input"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="form-input"
                  placeholder="Internship Inquiry / Project Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  className="form-textarea"
                  placeholder="Hello Subashini, I would like to connect regarding..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                {isSubmitting ? 'Sending Message...' : '🚀 Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
