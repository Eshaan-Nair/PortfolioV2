"use client";

import Link from "next/link";

export default function FunSide() {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'var(--foreground)',
      fontFamily: 'var(--font-sans)',
      position: 'relative',
      zIndex: 10
    }}>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '4rem',
        fontWeight: 800,
        marginBottom: '1rem',
        letterSpacing: '-0.04em'
      }}>
        The Fun Side
      </h1>
      <p style={{
        color: 'var(--text-muted)',
        fontSize: '1.2rem',
        marginBottom: '3rem'
      }}>
        In Production... 🛠️
      </p>

      <Link href="/" style={{
        padding: '0.8rem 1.5rem',
        border: '1px solid var(--border-color)',
        borderRadius: '6px',
        color: 'var(--text-muted)',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}
        onMouseOver={(e) => {
          e.currentTarget.style.color = 'var(--foreground)';
          e.currentTarget.style.borderColor = 'var(--foreground)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.color = 'var(--text-muted)';
          e.currentTarget.style.borderColor = 'var(--border-color)';
        }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
        Back to Professional Side
      </Link>
    </div>
  );
}
