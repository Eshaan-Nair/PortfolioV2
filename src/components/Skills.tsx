"use client";

import { useState } from "react";
import {
  SiCplusplus, SiJavascript, SiPython, SiTypescript,
  SiReact, SiHtml5, SiCss, SiTailwindcss, SiGooglechrome,
  SiNodedotjs, SiExpress, SiDjango,
  SiMongodb, SiSqlite,
  SiGit, SiGithub, SiNpm, SiPostman, SiDocker,
  SiOpenai
} from "react-icons/si";
import { TbApi, TbBrain } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  const allSkills = [
    // Row 1 (4)
    { name: "C++", icon: SiCplusplus },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Python", icon: SiPython },
    { name: "TypeScript", icon: SiTypescript },
    // Row 2 (5)
    { name: "React.js", icon: SiReact },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Chrome MV3", icon: SiGooglechrome },
    // Row 3 (4)
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "REST APIs", icon: TbApi },
    { name: "Django", icon: SiDjango },
    // Row 4 (5)
    { name: "MongoDB", icon: SiMongodb },
    { name: "ChromaDB", icon: TbBrain },
    { name: "SQLite", icon: SiSqlite },
    { name: "RAG", icon: SiOpenai },
    { name: "LLM", icon: TbBrain },
    // Row 5 (4)
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "VS Code", icon: VscVscode },
    { name: "Docker", icon: SiDocker },
    // Row 6 (5)
    { name: "npm", icon: SiNpm },
    { name: "Postman", icon: SiPostman },
    { name: "MCP", icon: TbApi },
    { name: "Lang Graph", icon: TbBrain },
    { name: "ollama", icon: SiOpenai },
  ];

  const rows = [
    allSkills.slice(0, 4),
    allSkills.slice(4, 9),
    allSkills.slice(9, 13),
    allSkills.slice(13, 18),
    allSkills.slice(18, 22),
    allSkills.slice(22, 27)
  ];

  return (
    <section>
      <h2 className="heading-serif" style={{ margin: '0 0 4rem 0', fontSize: '1.8rem', textAlign: 'center' }}>Technical Ecosystem</h2>

      <div className="hexagon-wrapper" style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '2rem' }}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '6px',
            marginTop: rowIndex > 0 ? '-32px' : '0'
          }}>
            {row.map((skill, i) => (
              <Hexagon key={i} skill={skill} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function Hexagon({ skill }: { skill: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '110px',
        height: '127px', // 110 * 1.1547 ≈ 127
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        backgroundColor: isHovered ? 'var(--foreground)' : 'var(--accent)',
        color: isHovered ? 'var(--background)' : 'var(--text-muted)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'scale(1.1) translateY(-5px)' : 'scale(1) translateY(0)',
        zIndex: isHovered ? 10 : 1,
        position: 'relative'
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s ease'
      }}>
        <Icon size={34} />
        <span style={{ fontSize: '0.7rem', fontWeight: 600, textAlign: 'center', padding: '0 4px', lineHeight: 1.1 }}>
          {skill.name}
        </span>
      </div>
    </div>
  );
}
