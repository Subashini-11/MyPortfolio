import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredSkills =
    activeTab === 'All'
      ? skillsData.flatMap((cat) =>
          cat.items.map((item) => ({ ...item, category: cat.category }))
        )
      : skillsData
          .find((cat) => cat.category === activeTab)
          ?.items.map((item) => ({ ...item, category: activeTab })) || [];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">⚡ Core Competencies</span>
          <h2 className="section-title">Technical & Professional Skills</h2>
          <p className="section-subtitle">
            A balanced foundation spanning structured programming in Java & Python, data structure implementation, modern web frameworks, and certified interpersonal soft skills.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-filter-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`tab-btn ${activeTab === category ? 'active' : ''}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div className="glass-card skill-card" key={index}>
              <div className="skill-header">
                <div className="skill-icon-name">
                  <span className="skill-icon">{skill.icon}</span>
                  <div>
                    <h3 className="skill-title">{skill.name}</h3>
                    <span className="skill-category-tag">{skill.category}</span>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    fontFamily: 'Outfit, sans-serif'
                  }}
                >
                  {skill.level}%
                </span>
              </div>

              <p className="skill-desc">{skill.description}</p>

              <div className="skill-bar-container" title={`${skill.name}: ${skill.level}% proficiency`}>
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
