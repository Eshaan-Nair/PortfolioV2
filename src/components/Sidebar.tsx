"use client";
import { useEffect, useState } from 'react';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px' });

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="left-sidebar">
      <div>
        <nav className="sidebar-nav">
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>
            <span className="nav-line"></span> ABOUT
          </a>
          <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>
            <span className="nav-line"></span> EXPERIENCE & EDUCATION
          </a>
          <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>
            <span className="nav-line"></span> PROJECTS
          </a>
          <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>
            <span className="nav-line"></span> SKILLS
          </a>
          <a href="#certifications" className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}>
            <span className="nav-line"></span> CERTIFICATIONS
          </a>
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
            <span className="nav-line"></span> CONTACT
          </a>
        </nav>

        <div className="sidebar-socials">
          <a href="https://www.linkedin.com/in/eshaan-nair00/" aria-label="LinkedIn" style={{ color: 'inherit' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="https://github.com/Eshaan-Nair" aria-label="GitHub" style={{ color: 'inherit' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          <a href="mailto:eshaannair3456@gmail.com" aria-label="Email" style={{ color: 'inherit' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}
