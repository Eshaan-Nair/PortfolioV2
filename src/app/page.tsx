import Sidebar from "@/components/Sidebar";
import Tabs from "@/components/Tabs";
import ProjectList from "@/components/ProjectList";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import LandingHero from "@/components/LandingHero";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <LandingHero />
      <div className="layout-container">
        <Sidebar />
        <main className="right-content">
          <ScrollReveal delay={0.1}>
            <section id="about" style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '2rem' }}>
              <p>
                I'm a Computer Science student at KIIT University who builds things end-to-end from React frontends to vector databases to Chrome extensions. My work lives at the intersection of full-stack development and applied AI, where I care less about what's trendy and more about what actually solves the problem.
              </p>
              <p>
                Most recently, I built ArcRift (formerly Glia AI), a local-first memory system for AI tools like Claude and Cursor because I was frustrated that these tools forgot everything between sessions. That's usually how my projects start: something annoys me, and I build a fix. Whether it's optimizing graph algorithms for a financial utility like Smart Expense Splitter, or architecting local LLM workflows, I enjoy building tools that empower users.
              </p>
              <p>
                As a freelance developer, I've had the opportunity to architect and deploy applications for independent clients, specializing in modern React ecosystems and Node.js backends. I focus heavily on writing clean, maintainable code and designing user interfaces that feel instantly intuitive. 
              </p>
              <p>
                Outside of code, I've led design teams, edited videos, and run branding for hackathons which means I think about the full picture, not just the technical layer. I believe the best engineering happens when you understand the design and the user experience just as well as the backend architecture.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <section id="experience">
              <Tabs />
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <section id="projects">
              <ProjectList />
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <section id="skills">
              <Skills />
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <section id="certifications">
              <Certifications />
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <section id="contact">
              <Contact />
            </section>
          </ScrollReveal>

        </main>
      </div>

      <footer style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '2rem',
        borderTop: '1px solid var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        color: 'var(--text-muted)',
        fontSize: '0.9rem',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <span style={{ fontWeight: 'bold', color: 'var(--foreground)', fontFamily: 'var(--font-display)' }}>Eshaan Nair</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span>Built with Next.js & React</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              Back to top ↑
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span>All rights reserved.</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="https://github.com/Eshaan-Nair" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/eshaan-nair00/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:eshaannair3456@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}
