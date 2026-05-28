"use client";
import { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  return (
    <div style={{ marginTop: '1rem' }}>
      <div style={{
        display: 'flex',
        backgroundColor: 'var(--accent)',
        borderRadius: '8px',
        padding: '0.35rem',
        border: '1px solid var(--border-color)',
        marginBottom: '1.5rem'
      }}>
        <button
          onClick={() => setActiveTab('work')}
          style={{
            flex: 1,
            padding: '0.75rem',
            border: 'none',
            borderRadius: '6px',
            backgroundColor: activeTab === 'work' ? 'var(--background)' : 'transparent',
            color: activeTab === 'work' ? 'var(--foreground)' : 'var(--text-muted)',
            boxShadow: activeTab === 'work' ? '0 1px 3px rgba(0,0,0,0.3)' : 'none',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontFamily: 'var(--font-sans)',
            fontWeight: activeTab === 'work' ? 500 : 400
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Work
        </button>
        <button
          onClick={() => setActiveTab('education')}
          style={{
            flex: 1,
            padding: '0.75rem',
            border: 'none',
            borderRadius: '6px',
            backgroundColor: activeTab === 'education' ? 'var(--background)' : 'transparent',
            color: activeTab === 'education' ? 'var(--foreground)' : 'var(--text-muted)',
            boxShadow: activeTab === 'education' ? '0 1px 3px rgba(0,0,0,0.3)' : 'none',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontFamily: 'var(--font-sans)',
            fontWeight: activeTab === 'education' ? 500 : 400
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Education
        </button>
      </div>

      <div style={{
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        padding: '1.5rem',
        backgroundColor: 'var(--card-bg)',
      }}>
        {activeTab === 'work' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem', color: 'var(--foreground)' }}>Full-Stack Developer Intern</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>June 2026 – Present</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>Ven Analytics</div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Pune, Maharashtra</span>
                </div>
                <p style={{ margin: '0.5rem 0 0 0', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Developing scalable backend systems and designing AI pipelines — including Retrieval-Augmented Generation (RAG) architectures and LLM integrations — to power intelligent, data-driven applications.
                </p>
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--border-color)', width: '100%' }}></div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem', color: 'var(--foreground)' }}>Freelance Web & AI Developer</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>2024 – Present</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>Self-Employed</div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Remote</span>
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>Architected and deployed full-stack web applications for independent clients, specializing in modern React ecosystems and Node.js backends.</li>
                  <li>Integrated Large Language Models (LLMs) into custom web apps using APIs from OpenAI, Groq, and Anthropic to automate workflows and enhance user interaction.</li>
                  <li>Maintained open-source projects (like ArcRift) with active user bases, directly managing issue tracking, code reviews, and feature deployment.</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem', color: 'var(--foreground)' }}>KIIT University</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Sept. 2022 – 2026</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>Bachelor of Technology in Computer Science and Engineering</div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Bhubaneswar, Odisha</span>
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>Currently maintaining a strong GPA while actively participating in technical clubs and hackathons.</li>
                  <li>Relevant coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Artificial Intelligence.</li>
                  <li>Led design teams and ran branding for university hackathons, blending technical execution with creative direction.</li>
                </ul>
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--border-color)', width: '100%' }}></div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem', color: 'var(--foreground)' }}>St. Joseph’s Co-Ed School</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Feb. 2010 – Mar. 2022</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>Higher Secondary Education</div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Bhopal, Madhya Pradesh</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
