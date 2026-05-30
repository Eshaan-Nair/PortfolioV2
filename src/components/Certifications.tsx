"use client";

export default function Certifications() {
  const certs = [
    { title: "Udemy: Full Stack Web Developer", issuer: "Udemy", date: "2025" }
  ];

  return (
    <section>
      <h2 className="heading-serif" style={{ margin: '0 0 1.5rem 0', fontSize: '1.8rem' }}>Certifications & Awards</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {certs.map((c, i) => (
          <div key={i} style={{
            padding: '1.5rem',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            backgroundColor: 'var(--card-bg)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <div>
              <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem', color: 'var(--foreground)' }}>{c.title}</h3>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>{c.issuer}</p>
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{c.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
