import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const NAV = ['Home','About','Skills','Projects','Contact'];
const SOCIALS = [
  { icon:<FaGithub />,    href:'https://github.com'   },
  { icon:<FaLinkedinIn />,href:'https://linkedin.com' },
  { icon:<FaTwitter />,   href:'https://twitter.com'  },
  { icon:<FaInstagram />, href:'https://instagram.com'},
];

export default function Footer() {
  const goto = id => document.getElementById(id.toLowerCase())?.scrollIntoView({behavior:'smooth'});
  const top  = ()  => window.scrollTo({top:0, behavior:'smooth'});

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container footer-body">

        <div className="footer-brand">
          <button className="footer-logo" onClick={top}>Portfolio<span>.</span></button>
          <p className="footer-tagline">
            Building digital products with purpose and craft — one component at a time.
          </p>
          <div className="footer-socials">
            {SOCIALS.map((s,i)=>(
              <a key={i} href={s.href} target="_blank" rel="noreferrer" className="fsocial">{s.icon}</a>
            ))}
          </div>
        </div>

        <div className="footer-nav-col">
          <p className="footer-col-title">Navigation</p>
          <ul>
            {NAV.map(n=>(
              <li key={n}><button onClick={()=>goto(n)}>{n}</button></li>
            ))}
          </ul>
        </div>

        <div className="footer-nav-col">
          <p className="footer-col-title">Contact</p>
          <ul>
            <li><a href="mailto:thamuthamu478@gmail.com">thamuthamu478@gmail.com</a></li>
            <li><a href="tel:+91 9488112209">+91 9488112209</a></li>
            <li><span>Bengaluru, India</span></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© {new Date().getFullYear()} Thamothiran R. All rights reserved.</p>
        <p className="footer-credit">Built with <span>♥</span> using React</p>
        <button className="back-top" onClick={top} aria-label="Back to top">
          <FiArrowUp />
        </button>
      </div>
    </footer>
  );
}