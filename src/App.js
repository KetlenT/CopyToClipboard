import React, { useState } from 'react';

const styles = {
  container: {
    background: '#fff',
    borderRadius: 12,
    boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
    padding: '24px 32px',
    maxWidth: 440,
    width: '100%',
    textAlign: 'center',
    fontFamily: "'Inter', sans-serif",
    margin: '40px auto',
  },
  heading: {
    color: '#1e293b',
    marginBottom: 12,
    fontWeight: 600,
    fontSize: '1.5rem',
  },
  textarea: {
    width: '100%',
    fontSize: '1rem',
    borderRadius: 8,
    border: '1.5px solid #d1d5db',
    padding: '14px 18px',
    color: '#374151',
    resize: 'none',
    fontFamily: 'monospace',
    boxSizing: 'border-box',
  },
  button: {
    marginTop: 16,
    background: '#2563eb',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    padding: '12px 24px',
    fontWeight: 600,
    fontSize: '1rem',
    borderRadius: 8,
    display: 'inlineFlex',
    alignItems: 'center',
    gap: 10,
    userSelect: 'none',
    transition: 'background-color 0.3s ease',
    verticalAlign: 'middle',
  },
  buttonHover: {
    background: '#1e40af',
  },
  buttonActive: {
    background: '#1e3a8a',
  },
  svg: {
    width: 20,
    height: 20,
    fill: 'white',
    transition: 'transform 0.4s ease',
  },
  svgCopied: {
    transform: 'rotate(360deg)',
    fill: '#34d399',
  },
  toast: {
    position: 'fixed',
    bottom: 40,
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#34d399',
    color: 'white',
    padding: '14px 28px',
    borderRadius: 24,
    boxShadow: '0 6px 20px rgba(52, 211, 153, 0.4)',
    opacity: 0,
    pointerEvents: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    userSelect: 'none',
    transition: 'opacity 0.4s ease',
    zIndex: 1000,
  },
  toastShow: {
    opacity: 1,
    pointerEvents: 'auto',
  },
};

export const CopyToClipboards = () => {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const textToCopy = 'https://github.com/KetlenT/CopyToClipboard';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      alert('Failed to copy! Please copy manually.');
    }
  };

  return (
    <>
      <div style={styles.container}>
        <h2 style={styles.heading}>Copy to Clipboard</h2>
        <textarea
          style={styles.textarea}
          rows={4}
          readOnly
          value={textToCopy}
          aria-label="Text to copy"
          onFocus={e => e.target.select()}
        />
        <button
          type="button"
          aria-label="Copy text"
          onClick={handleCopy}
          style={{
            ...styles.button,
            backgroundColor: copied ? '#22c55e' : styles.button.background,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            style={copied ? { ...styles.svg, ...styles.svgCopied } : styles.svg}
          >
            <path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z" />
          </svg>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <div
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        style={{
          ...styles.toast,
          ...(showToast ? styles.toastShow : {}),
        }}
      >
        Copied!
      </div>
    </>
  );
};



