import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('subashini-theme') || 'dark';
  });
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('subashini-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div className="portfolio-app">
      {/* Background Ambient Lighting Blobs */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-blob blob-1"></div>
        <div className="ambient-blob blob-2"></div>
        <div className="ambient-blob blob-3"></div>
      </div>

      {/* Main Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onShowToast={showToast}
        />

        <About onShowToast={showToast} />

        <Skills />

        <Projects onShowToast={showToast} />

        <Certifications />

        <Education />

        <Contact onShowToast={showToast} />
      </main>

      {/* Site Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Modals & Popups */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onShowToast={showToast}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </div>
  );
}
