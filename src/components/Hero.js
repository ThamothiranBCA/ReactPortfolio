import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiDownload,} from 'react-icons/fi';
import img from '../images/thamuaiimg.png';
import './Hero.css';

const ROLES = ['Frontend Developer'];

const SOCIALS = [
  { icon: <FaGithub />,    href: 'https://github.com/ThamothiranBCA',    label: 'GitHub'   },
  { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram'},
  { icon: <FaLinkedinIn />,href: 'https://www.linkedin.com/in/thamothiranbca/?skipRedirect=true',  label: 'LinkedIn' },
];

export default function Hero() {
  const [roleIdx, setRoleIdx]   = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting]   = useState(false);

  // Typewriter effect
  useEffect(() => {
    const target = ROLES[roleIdx];
    let timer;
    if (!deleting && displayed.length < target.length) {
      timer = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === target.length) {
      timer = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timer);
  }, [displayed, deleting, roleIdx]);

  const goto = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">
      {/* Ambient background */}
      <div className="hero-ambient a1" />
      <div className="hero-ambient a2" />
      <div className="hero-grid" />

      <div className="container hero-layout">
        {/* ── LEFT TEXT ── */}
        <div className="hero-text">
          <p className="hero-hello">Hello, It's Me</p>

          <h1 className="hero-name">THAMOTHIRAN R</h1>

          <p className="hero-role-line">
            And I'm a{' '}
            <span className="hero-role">
              {displayed}<span className="cursor">|</span>
            </span>
          </p>

          <p className="hero-desc">
            I build clean, fast, and beautiful web experiences. Specialising in
            React and modern frontend stacks — from concept to pixel-perfect
            deployment.
          </p>

          <div className="hero-socials">
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                className="hero-social" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>

          <div className="hero-ctas">
            <a href="/resume.pdf" download className="btn btn-primary">
              <FiDownload /> Download CV
            </a>
            {/* <button className="btn btn-ghost" onClick={() => goto('projects')}>
              View Work <FiArrowRight />
            </button> */}
          </div>
        </div>

        {/* ── RIGHT PHOTO ── */}
        <div className="hero-photo-area">
        
          <div className="hex-wrap">
            <div className="hex-inner">

              <img
                src={img}
                alt="THAMOTHIRAN R"
              />
            </div>
          </div>
          
          {/* <div className="badge badge-exp">
            <span className="badge-num">3+</span>
            <span className="badge-txt">Years<br/>Experience</span>
          </div> */}
          {/* <div className="badge badge-proj">
            <span className="badge-num">50+</span>
            <span className="badge-txt">Projects<br/>Delivered</span>
          </div> */}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue" onClick={() => goto('about')}>
        <div className="scroll-line" />
      </div>
    </section>
  );
}