import React, { useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const CATS = ['All','React','Full Stack','UI/UX'];

const PROJECTS = [
  {
    title:   'ShopNest — E-Commerce',
    cat:     'Full Stack',
    desc:    'Full-featured storefront with cart, Stripe checkout, admin dashboard and real-time inventory updates.',
    tags:    ['React','Node.js','MongoDB','Stripe'],
    img:     'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80',
    github:  '#',
    live:    '#',
    featured: true,
  },
  {
    title:   'Kanflow — Task Manager',
    cat:     'React',
    desc:    'Drag-and-drop Kanban board with labels, due dates, filters and real-time Firebase sync.',
    tags:    ['React','Firebase','Tailwind'],
    img:     'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=700&q=80',
    github:  '#',
    live:    '#',
  },
  {
    title:   'Aura — Portfolio Theme',
    cat:     'UI/UX',
    desc:    'Dark cyberpunk portfolio theme with smooth scroll animations and a component-driven system.',
    tags:    ['React','GSAP','CSS Modules'],
    img:     'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700&q=80',
    github:  '#',
    live:    '#',
  },
  {
    title:   'Skycast — Weather App',
    cat:     'React',
    desc:    'Real-time weather app with 7-day forecast, interactive charts and geolocation support.',
    tags:    ['React','Chart.js','OpenWeather API'],
    img:     'https://images.unsplash.com/photo-1504608524841-42584120d094?w=700&q=80',
    github:  '#',
    live:    '#',
  },
  {
    title:   'Pulse — Social UI Kit',
    cat:     'UI/UX',
    desc:    'Complete dark-mode social media UI system with 40+ screens designed in Figma, built in React.',
    tags:    ['Figma','React','CSS'],
    img:     'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=700&q=80',
    github:  '#',
    live:    '#',
  },
  {
    title:   'NexAPI — REST Backend',
    cat:     'Full Stack',
    desc:    'Scalable REST API with JWT auth, rate limiting, role-based access and full CRUD for user management.',
    tags:    ['Node.js','Express','MongoDB'],
    img:     'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80',
    github:  '#',
    live:    '#',
  },
];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.cat === active);

  return (
    <section id="projects" className="projects-sec">
      <div className="container">
        <div className="proj-head">
          <div>
            <p className="sec-label">What I've Built</p>
            <h2 className="sec-title">Recent <em>Projects</em></h2>
          </div>

          <div className="proj-filters">
            {CATS.map(c => (
              <button
                key={c}
                className={`filter-btn ${active === c ? 'on' : ''}`}
                onClick={() => setActive(c)}
              >{c}</button>
            ))}
          </div>
        </div>

        <div className="proj-grid">
          {filtered.map((p, i) => (
            <div key={i} className={`proj-card ${p.featured ? 'featured' : ''}`}>
              <div className="proj-img">
                <img src={p.img} alt={p.title} />
                <div className="proj-links">
                  <a href={p.github} target="_blank" rel="noreferrer" className="plink" aria-label="GitHub">
                    <FiGithub />
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer" className="plink" aria-label="Live">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <div className="proj-body">
                <span className="proj-cat">{p.cat}</span>
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-tags">
                  {p.tags.map((t, j) => <span key={j} className="ptag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}