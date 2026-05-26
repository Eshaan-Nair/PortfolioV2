"use client";

export default function PostList() {
  const posts = [
    { title: 'Christmas Special: When I got my First Homelab', date: 'December 25, 2025', readTime: '6 min read', views: '633 views', tags: ['Homelab', 'Self-hosting', 'Hardware', '+6'] },
    { title: 'My Quest for the Most Cost-Effective AI Tools', date: 'November 16, 2025', readTime: '7 min read', views: '684 views', tags: ['Agentic AI', 'Developer Tools', 'Coding Assistant', '+5'] }
  ];

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.5rem' }}>
        <h2 className="heading-serif" style={{ margin: 0, fontSize: '1.8rem' }}>recent posts</h2>
        <a href="#" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          view more <span>→</span>
        </a>
      </div>
      
      <div style={{ 
        border: '1px solid var(--border-color)', 
        borderRadius: '12px', 
        backgroundColor: 'var(--card-bg)',
        overflow: 'hidden'
      }}>
        {posts.map((p, i) => (
          <div key={i} style={{ 
            padding: '1.5rem',
            borderBottom: i === posts.length - 1 ? 'none' : '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            transition: 'background-color 0.2s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.1rem', flex: 1, lineHeight: '1.4' }}>{p.title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: '0.85rem', color: 'var(--text-muted)', gap: '0.35rem', minWidth: '130px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  {p.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  {p.readTime}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  {p.views}
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {p.tags.map(t => (
                <span key={t} style={{ 
                  fontSize: '0.75rem', 
                  padding: '0.2rem 0.6rem', 
                  backgroundColor: 'var(--accent)', 
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  color: 'var(--text-muted)'
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
