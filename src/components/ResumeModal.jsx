import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, onShowToast }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
SUBASHINI M
${personalInfo.phone} | ${personalInfo.email}

CAREER OBJECTIVE
${personalInfo.careerObjective}

EDUCATION
B.E. Computer Science and Engineering
K. Ramakrishnan College of Technology
Current status: 3rd Year

TECHNICAL SKILLS
• Programming Languages: Java, Python

ACADEMIC PROJECTS
• Music Playlist Organizer Using BST
Academic project focused on organizing a music playlist using a Binary Search Tree (BST).
• Digital Notice Board in Python
Python-based project for a digital notice board.

CERTIFICATIONS & ACHIEVEMENTS
• Enhancing Soft Skills and Personality — NPTEL
• Problem Solving in C — NPTEL
• Paper Presentation — CARE College
    `.trim();

    navigator.clipboard.writeText(text);
    onShowToast('Resume text copied to clipboard!');
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '1.3rem' }}>📄</span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Resume Preview &bull; Subashini M</h3>
          </div>
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            <button onClick={handleCopyText} className="btn btn-secondary" style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}>
              📋 Copy Text
            </button>
            <button onClick={handlePrint} className="btn btn-primary" style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}>
              🖨️ Print / Save PDF
            </button>
            <button
              onClick={onClose}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
              aria-label="Close Resume Modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Printable Resume Sheet */}
        <div className="modal-body">
          <div className="resume-paper" id="printable-resume">
            <h2>SUBASHINI M</h2>
            <div className="contact-line">
              <span>{personalInfo.phone}</span>
              <span style={{ margin: '0 0.6rem' }}>|</span>
              <span>{personalInfo.email}</span>
            </div>

            {/* CAREER OBJECTIVE */}
            <div className="resume-section-title">CAREER OBJECTIVE</div>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: '#334155' }}>
              Third-year B.E. Computer Science and Engineering student at K. Ramakrishnan College of Technology, with knowledge of Java and Python. Seeking opportunities to apply programming skills, strengthen technical abilities, and contribute to practical software projects.
            </p>

            {/* EDUCATION */}
            <div className="resume-section-title">EDUCATION</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>
              B.E. Computer Science and Engineering
            </div>
            <div style={{ fontSize: '0.9rem', color: '#475569' }}>
              K. Ramakrishnan College of Technology
            </div>
            <div style={{ fontSize: '0.85rem', color: '#64748b', fontStyle: 'italic' }}>
              Current status: 3rd Year
            </div>

            {/* TECHNICAL SKILLS */}
            <div className="resume-section-title">TECHNICAL SKILLS</div>
            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.92rem', color: '#334155' }}>
              <li><strong>Programming Languages:</strong> Java, Python</li>
            </ul>

            {/* ACADEMIC PROJECTS */}
            <div className="resume-section-title">ACADEMIC PROJECTS</div>
            <div style={{ marginBottom: '0.8rem' }}>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>
                Music Playlist Organizer Using BST
              </div>
              <div style={{ fontSize: '0.9rem', color: '#475569', marginTop: '0.2rem' }}>
                Academic project focused on organizing a music playlist using a Binary Search Tree (BST).
              </div>
            </div>

            <div style={{ marginBottom: '0.8rem' }}>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>
                Digital Notice Board in Python
              </div>
              <div style={{ fontSize: '0.9rem', color: '#475569', marginTop: '0.2rem' }}>
                Python-based project for a digital notice board.
              </div>
            </div>

            {/* CERTIFICATIONS & ACHIEVEMENTS */}
            <div className="resume-section-title">CERTIFICATIONS & ACHIEVEMENTS</div>
            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.92rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>• Enhancing Soft Skills and Personality — <strong>NPTEL</strong></li>
              <li>• Problem Solving in C — <strong>NPTEL</strong></li>
              <li>• Paper Presentation — <strong>CARE College</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
