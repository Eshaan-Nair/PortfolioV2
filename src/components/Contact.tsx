"use client";

export default function Contact() {
  return (
    <section style={{ textAlign: 'center', padding: '4rem 0' }}>
      <h2 className="heading-serif" style={{ margin: '0 0 1rem 0', fontSize: '2.5rem' }}>Get in Touch</h2>
      <p style={{ margin: '0 auto 2rem auto', color: 'var(--text-muted)', maxWidth: '500px', lineHeight: '1.6' }}>
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a href="mailto:eshaannair3456@gmail.com" style={{
        display: 'inline-block',
        padding: '0.75rem 2rem',
        backgroundColor: 'var(--foreground)',
        color: 'var(--background)',
        borderRadius: '8px',
        fontWeight: 'bold',
        textDecoration: 'none',
        transition: 'transform 0.2s ease, opacity 0.2s ease'
      }}
        onMouseOver={(e) => {
          e.currentTarget.style.opacity = '0.9';
          e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.opacity = '1';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        Say Hello
      </a>
    </section>
  );
}
