"use client";

export default function LandingHero() {
  return (
    <section style={{
      height: '100vh',
      width: '100vw',
      background: 'transparent',
      color: 'var(--foreground)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Top Navbar */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 'clamp(1.5rem, 5vw, 2rem) clamp(1.5rem, 5vw, 4rem)',
        zIndex: 10
      }}>
        {/* Social Icons (Left) */}
        <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--foreground)' }}>
          <a href="https://www.linkedin.com/in/eshaan-nair00/" aria-label="LinkedIn" style={{ color: 'inherit' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg></a>
          <a href="https://github.com/Eshaan-Nair" aria-label="GitHub" style={{ color: 'inherit' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg></a>
        </div>

        {/* Nav Links (Right) */}
        <nav className="desktop-only" style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <a href="#about" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--foreground)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>About Me</a>
          <a href="#experience" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--foreground)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Experience</a>
          <a href="#projects" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--foreground)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Projects</a>
          <a href="#skills" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--foreground)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Skills</a>
        </nav>
      </header>

      {/* Hero Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        zIndex: 10,
        padding: '0 2rem'
      }}>
        <h1 style={{ margin: '0', lineHeight: 1.05, letterSpacing: '-0.04em', fontFamily: 'var(--font-display)', color: 'var(--foreground)' }}>
          <span style={{ fontSize: 'clamp(3rem, 10vw, 5rem)', fontWeight: 800 }}>Eshaan Nair</span><br />
          <span style={{ fontSize: 'clamp(2rem, 7vw, 3.5rem)', fontWeight: 700 }}>AI Engineer</span>
        </h1>

        <p style={{ margin: '2rem 0', color: 'var(--text-muted)', maxWidth: '600px', fontSize: '1.1rem', lineHeight: 1.6 }}>
          Full-stack developer building AI-native tools that actually work.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{
            padding: '0.8rem 1.5rem', backgroundColor: 'var(--foreground)', color: 'var(--background)',
            borderRadius: '6px', fontWeight: 600, textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            fontSize: '0.9rem'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Download My Resume
          </a>
          <a href="mailto:eshaannair3456@gmail.com" style={{
            padding: '0.8rem 1.5rem', backgroundColor: 'var(--foreground)', color: 'var(--background)',
            borderRadius: '6px', fontWeight: 600, textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            fontSize: '0.9rem'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            Contact Me
          </a>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <a href="/fun" style={{
            color: 'var(--text-muted)',
            fontSize: '0.95rem',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = 'var(--foreground)'}
          onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
            Not a recruiter? Let's go to the fun side
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
