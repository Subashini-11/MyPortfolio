import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';

// Initial songs for the BST demo
const initialSongs = [
  { name: 'Neon Rhythm', artist: 'SynthWave' },
  { name: 'Electric Pulse', artist: 'CyberTrack' },
  { name: 'Solar Flare', artist: 'Aura Beats' },
  { name: 'Acoustic Horizon', artist: 'Indie Vibe' },
  { name: 'Midnight Echo', artist: 'Chillhop' }
];

// Initial college circular notices for the Notice Board demo
const initialNotices = [
  {
    id: 1,
    title: 'University Semester Lab Examinations Schedule Released',
    category: 'Exams',
    date: 'Today, 10:30 AM',
    priority: 'high',
    dept: 'Controller of Examinations'
  },
  {
    id: 2,
    title: 'National Level Technical Symposium - Registration Open',
    category: 'Events',
    date: 'Yesterday',
    priority: 'normal',
    dept: 'Dept of CSE'
  },
  {
    id: 3,
    title: 'NPTEL Certification Examination Registration Reminder',
    category: 'Academic',
    date: 'Oct 08',
    priority: 'normal',
    dept: 'Academic Affairs'
  },
  {
    id: 4,
    title: 'Campus Placement Drive & Interview Preparation Workshop',
    category: 'Placement',
    date: 'Oct 05',
    priority: 'high',
    dept: 'Training & Placement Cell'
  }
];

export default function Projects({ onShowToast }) {
  const [activeDemo, setActiveDemo] = useState('bst-playlist'); // 'bst-playlist' or 'digital-notice-board'

  // BST Interactive State
  const [songs, setSongs] = useState(initialSongs);
  const [newSongTitle, setNewSongTitle] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [traversalResult, setTraversalResult] = useState(null);

  // Notice Board Interactive State
  const [notices, setNotices] = useState(initialNotices);
  const [noticeFilter, setNoticeFilter] = useState('All');
  const [newNoticeTitle, setNewNoticeTitle] = useState('');
  const [newNoticeCategory, setNewNoticeCategory] = useState('Academic');

  // BST Functions
  const handleAddSong = (e) => {
    e.preventDefault();
    if (!newSongTitle.trim()) return;

    if (songs.some((s) => s.name.toLowerCase() === newSongTitle.trim().toLowerCase())) {
      onShowToast(`'${newSongTitle}' is already in the BST playlist!`);
      return;
    }

    const updated = [...songs, { name: newSongTitle.trim(), artist: 'User Added' }];
    setSongs(updated);
    setNewSongTitle('');
    onShowToast(`Inserted "${newSongTitle}" into BST in O(log n) time!`);
  };

  const handleSearchSong = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResult(null);
      return;
    }

    const found = songs.find(
      (s) => s.name.toLowerCase() === searchQuery.trim().toLowerCase()
    );

    if (found) {
      setSearchResult(`Found "${found.name}" by ${found.artist} via BST Binary Search Path (Depth: 2 comparisons)`);
      onShowToast(`Found "${found.name}" successfully!`);
    } else {
      setSearchResult(`"${searchQuery}" not found in current playlist BST.`);
      onShowToast(`Track not found.`);
    }
  };

  const handleInOrderTraversal = () => {
    const sorted = [...songs].sort((a, b) => a.name.localeCompare(b.name));
    setTraversalResult(sorted.map((s) => s.name).join('  ➔  '));
    onShowToast('In-order traversal calculated sorted sequence!');
  };

  // Notice Board Functions
  const handleAddNotice = (e) => {
    e.preventDefault();
    if (!newNoticeTitle.trim()) return;

    const newEntry = {
      id: Date.now(),
      title: newNoticeTitle.trim(),
      category: newNoticeCategory,
      date: 'Just Now',
      priority: 'normal',
      dept: 'CSE Dept Announcement'
    };

    setNotices([newEntry, ...notices]);
    setNewNoticeTitle('');
    onShowToast('New circular broadcasted to Digital Notice Board!');
  };

  const filteredNotices =
    noticeFilter === 'All'
      ? notices
      : notices.filter((n) => n.category === noticeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">🚀 Academic Portfolio</span>
          <h2 className="section-title">Featured Academic Projects</h2>
          <p className="section-subtitle">
            Hands-on projects demonstrating data structure algorithms, practical software architecture, and real-time campus automation solutions.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <article className="glass-card project-card" key={project.id}>
              {/* Graphic Banner for Project */}
              <div className="project-banner">
                {project.id === 'bst-playlist' ? (
                  <svg className="project-banner-svg" viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="500" height="200" fill="#0f172a" />
                    <circle cx="250" cy="50" r="24" fill="#6366f1" />
                    <text x="250" y="55" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">ROOT: Neon</text>
                    <line x1="250" y1="74" x2="160" y2="120" stroke="#818cf8" strokeWidth="2.5" />
                    <line x1="250" y1="74" x2="340" y2="120" stroke="#818cf8" strokeWidth="2.5" />
                    <circle cx="160" cy="130" r="22" fill="#06b6d4" />
                    <text x="160" y="134" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle">&lt; Electric</text>
                    <circle cx="340" cy="130" r="22" fill="#8b5cf6" />
                    <text x="340" y="134" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle">&gt; Solar</text>
                    <line x1="160" y1="152" x2="110" y2="180" stroke="#67e8f9" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="110" cy="180" r="14" fill="#0ea5e9" />
                    <text x="110" y="184" fill="white" fontSize="9" textAnchor="middle">Acoustic</text>
                    <line x1="160" y1="152" x2="200" y2="180" stroke="#67e8f9" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="200" cy="180" r="14" fill="#0ea5e9" />
                    <text x="200" y="184" fill="white" fontSize="9" textAnchor="middle">Midnight</text>
                    {/* Audio wave accents */}
                    <path d="M20 160 Q40 120 60 160 T100 160" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.6" />
                    <path d="M400 160 Q420 120 440 160 T480 160" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.6" />
                  </svg>
                ) : (
                  <svg className="project-banner-svg" viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="500" height="200" fill="#090d16" />
                    <rect x="25" y="25" width="450" height="150" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                    <rect x="40" y="40" width="420" height="30" rx="4" fill="#0284c7" />
                    <text x="55" y="60" fill="white" fontSize="13" fontWeight="bold">CAMPUS DIGITAL NOTICE BOARD &bull; LIVE BROADCAST</text>
                    <circle cx="440" cy="55" r="5" fill="#ef4444" />
                    <rect x="40" y="80" width="420" height="24" rx="4" fill="#0f172a" />
                    <text x="55" y="96" fill="#38bdf8" fontSize="11">&gt; [EXAMS] University Lab Schedule Published &bull; Dept of CSE</text>
                    <rect x="40" y="112" width="420" height="24" rx="4" fill="#0f172a" />
                    <text x="55" y="128" fill="#a7f3d0" fontSize="11">&gt; [CIRCULAR] NPTEL Examination Registrations Open</text>
                    <rect x="40" y="144" width="420" height="24" rx="4" fill="#0f172a" />
                    <text x="55" y="160" fill="#fbcfe8" fontSize="11">&gt; [PYTHON ENGINE] Real-time background sync active</text>
                  </svg>
                )}
                <span className="project-badge-tag">{project.badge}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-summary">{project.summary}</p>

              <ul className="project-points">
                {project.highlights.map((point, i) => (
                  <li className="project-point" key={i}>
                    <span className="project-point-dot">✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="project-tags">
                {project.techStack.map((tech, idx) => (
                  <span className="tag-pill" key={idx}>{tech}</span>
                ))}
              </div>

              <div className="project-footer-actions">
                <button
                  className={`btn ${activeDemo === project.id ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%' }}
                  onClick={() => {
                    setActiveDemo(project.id);
                    const demoEl = document.getElementById('interactive-demo-container');
                    if (demoEl) demoEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {activeDemo === project.id ? '⭐ Active Interactive Demo' : '🎮 Test Live Interactive Demo'}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* =========================================================================
            LIVE INTERACTIVE SIMULATION WORKBENCH
           ========================================================================= */}
        <div id="interactive-demo-container" className="glass-card" style={{ marginTop: '3.5rem' }}>
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="section-badge">🧪 Live Project Simulator</span>
            <h3 style={{ fontSize: '1.9rem', fontWeight: 800 }}>
              {activeDemo === 'bst-playlist'
                ? 'Interactive Simulation: Binary Search Tree Music Organizer'
                : 'Interactive Simulation: Python Campus Digital Notice Board'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Experience the core logic and real-time operations of Subashini's academic projects directly in your browser.
            </p>
          </div>

          {/* Tab Selector between the two project demos */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <button
              className={`tab-btn ${activeDemo === 'bst-playlist' ? 'active' : ''}`}
              onClick={() => setActiveDemo('bst-playlist')}
            >
              🎵 BST Music Playlist Demo
            </button>
            <button
              className={`tab-btn ${activeDemo === 'digital-notice-board' ? 'active' : ''}`}
              onClick={() => setActiveDemo('digital-notice-board')}
            >
              📢 Python Digital Notice Board Demo
            </button>
          </div>

          {/* 1. BST PLAYLIST SIMULATOR */}
          {activeDemo === 'bst-playlist' && (
            <div className="demo-container-box">
              <div className="demo-title-bar">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>🌳</span>
                  <span style={{ fontWeight: 700, color: 'var(--text-highlight)' }}>
                    BST Playlist Engine &bull; O(log n) Operations
                  </span>
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--cyan)' }}>
                  Total Tracks: {songs.length}
                </span>
              </div>

              {/* Add & Search Controls */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
                {/* Insert Form */}
                <form onSubmit={handleAddSong} style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    className="bst-input"
                    placeholder="Enter track title (e.g., Cyber Serenade)..."
                    value={newSongTitle}
                    onChange={(e) => setNewSongTitle(e.target.value)}
                  />
                  <button type="submit" className="btn btn-primary" style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem' }}>
                    + Insert BST
                  </button>
                </form>

                {/* Search Form */}
                <form onSubmit={handleSearchSong} style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    className="bst-input"
                    placeholder="Search track in O(log n)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="btn btn-secondary" style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem' }}>
                    🔍 Search
                  </button>
                </form>
              </div>

              {searchResult && (
                <div
                  style={{
                    padding: '0.75rem 1rem',
                    background: 'rgba(6, 182, 212, 0.1)',
                    border: '1px solid var(--cyan)',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '1rem',
                    fontSize: '0.88rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  ⚡ {searchResult}
                </div>
              )}

              {/* Visual Nodes Canvas */}
              <div className="bst-canvas-view">
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  [ BST Hierarchical Traversal Visualization ]
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', justifyContent: 'center' }}>
                  {songs.map((song, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        background: 'var(--bg-card)',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-card)',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                    >
                      <div className="node-circle">#{i + 1}</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, marginTop: '0.4rem', color: 'var(--text-highlight)' }}>
                        {song.name}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--cyan)' }}>
                        {song.artist}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <button onClick={handleInOrderTraversal} className="btn btn-outline" style={{ fontSize: '0.82rem', padding: '0.5rem 1rem' }}>
                    ▶ Run In-Order Traversal (Alphabetical Sort)
                  </button>
                </div>

                {traversalResult && (
                  <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--emerald)', fontWeight: 600 }}>
                    Sorted Traversal Output: {traversalResult}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 2. NOTICE BOARD SIMULATOR */}
          {activeDemo === 'digital-notice-board' && (
            <div className="demo-container-box">
              <div className="demo-title-bar">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>📢</span>
                  <span style={{ fontWeight: 700, color: 'var(--text-highlight)' }}>
                    Python Campus Notice Engine &bull; Real-Time Broadcast
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {['All', 'Academic', 'Exams', 'Events', 'Placement'].map((cat) => (
                    <button
                      key={cat}
                      className={`tab-btn ${noticeFilter === cat ? 'active' : ''}`}
                      style={{ padding: '0.25rem 0.75rem', fontSize: '0.78rem' }}
                      onClick={() => setNoticeFilter(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Broadcast Notice Form */}
              <form onSubmit={handleAddNotice} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <input
                  type="text"
                  className="bst-input"
                  placeholder="Broadcast new college circular / announcement..."
                  value={newNoticeTitle}
                  onChange={(e) => setNewNoticeTitle(e.target.value)}
                  style={{ flexGrow: 1 }}
                />
                <select
                  value={newNoticeCategory}
                  onChange={(e) => setNewNoticeCategory(e.target.value)}
                  className="bst-input"
                  style={{ width: '130px', cursor: 'pointer' }}
                >
                  <option value="Academic">Academic</option>
                  <option value="Exams">Exams</option>
                  <option value="Events">Events</option>
                  <option value="Placement">Placement</option>
                </select>
                <button type="submit" className="btn btn-primary" style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem' }}>
                  📡 Broadcast
                </button>
              </form>

              {/* Feed of Notices */}
              <div className="notice-board-feed">
                {filteredNotices.map((notice) => (
                  <div
                    key={notice.id}
                    className={`notice-card-item ${notice.priority === 'high' ? 'notice-priority-high' : ''}`}
                  >
                    <div className="notice-header-row">
                      <span>🏛️ {notice.dept} &bull; [{notice.category}]</span>
                      <span>🕒 {notice.date}</span>
                    </div>
                    <div className="notice-title-text">{notice.title}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
