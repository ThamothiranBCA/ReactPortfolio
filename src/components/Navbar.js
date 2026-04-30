import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const NAV = ['Home','About','Skills','Projects','Contact'];

export default function Navbar() {
  const [solid,  setSolid]  = useState(false);
  const [open,   setOpen]   = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goto = (id) => {
    setOpen(false);
    setActive(id);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${solid ? 'solid' : ''}`}>
        <div className="nav-wrap">
          <button className="nav-logo" onClick={() => goto('Home')}>
            {/* Portfolio<span>.</span> */}
          </button>

          <ul className="nav-list">
            {NAV.map(n => (
              <li key={n}>
                <button
                  className={`nav-link ${active === n ? 'active' : ''}`}
                  onClick={() => goto(n)}
                >{n}</button>
              </li>
            ))}
          </ul>

          <button className="nav-hire btn btn-primary" onClick={() => goto('Contact')}>
            Hire Me
          </button>

          <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="menu">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${open ? 'open' : ''}`}>
        <ul>
          {NAV.map(n => (
            <li key={n}>
              <button onClick={() => goto(n)} className={active === n ? 'active' : ''}>
                {n}
              </button>
            </li>
          ))}
        </ul>
        <button className="btn btn-primary" style={{marginTop:'24px'}} onClick={() => goto('Contact')}>
          Hire Me
        </button>
      </div>
      {open && <div className="drawer-overlay" onClick={() => setOpen(false)} />}
    </>
  );
}