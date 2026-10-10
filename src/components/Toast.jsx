import React, { useEffect } from 'react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3200);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <aside className="toast-container" aria-live="polite">
      <div className="toast success">
        <span>✨</span>
        <span>{message}</span>
        <button
          onClick={onClose}
          style={{ marginLeft: '0.8rem', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.9rem' }}
          aria-label="Close notification"
        >
          ✕
        </button>
      </div>
    </aside>
  );
}
