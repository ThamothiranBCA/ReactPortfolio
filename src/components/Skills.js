import React from 'react';
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt,
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript,
} from 'react-icons/si';
import './Skills.css';

const SKILLS = [
  { icon: <FaHtml5 />,        name: 'HTML5',         pct: 96, color: '#E34F26' },
  { icon: <FaCss3Alt />,      name: 'CSS3',          pct: 92, color: '#1572B6' },
  { icon: <SiJavascript />,   name: 'JavaScript',    pct: 90, color: '#F7DF1E' },
  { icon: <SiTypescript />,   name: 'TypeScript',    pct: 78, color: '#3178C6' },
  { icon: <FaReact />,        name: 'React.js',      pct: 92, color: '#61DAFB' },
  { icon: <FaNodeJs />,       name: 'Node.js',       pct: 70, color: '#68A063' },
  { icon: <FaGitAlt />,       name: 'Git & GitHub',  pct: 88, color: '#F05032' },

  // { icon: <SiNextdotjs />,    name: 'Next.js',       pct: 76, color: '#ffffff' },
  // { icon: <SiTailwindcss />,  name: 'Tailwind CSS',  pct: 88, color: '#38BDF8' },
  // { icon: <FaSass />,         name: 'Sass',          pct: 82, color: '#CC6699' },
  // { icon: <SiRedux />,        name: 'Redux',         pct: 80, color: '#764ABC' },
  // { icon: <SiMongodb />,      name: 'MongoDB',       pct: 65, color: '#47A248' },
  // { icon: <SiFirebase />,     name: 'Firebase',      pct: 72, color: '#FFCA28' },
  // { icon: <SiGraphql />,      name: 'GraphQL',       pct: 62, color: '#E10098' },
  // { icon: <FaFigma />,        name: 'Figma',         pct: 80, color: '#F24E1E' },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="skills-head">
          <div>
            <p className="sec-label">What I Know</p>
            <h2 className="sec-title">My <em>Skills</em></h2>
          </div>
          <p className="sec-sub" style={{maxWidth:'360px', textAlign:'right'}}>
            A toolkit built through real projects, courses, and a lot of late-night coding sessions.
          </p>
        </div>

        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <div key={i} className="skill-card">
              <div className="skill-top">
                <div className="skill-icon" style={{color: s.color}}>{s.icon}</div>
                <div className="skill-meta">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-pct" style={{color: s.color}}>{s.pct}%</span>
                </div>
              </div>
              <div className="skill-track">
                <div
                  className="skill-fill"
                  style={{
                    width: `${s.pct}%`,
                    background: `linear-gradient(90deg, ${s.color}55, ${s.color})`,
                    boxShadow: `0 0 10px ${s.color}55`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}