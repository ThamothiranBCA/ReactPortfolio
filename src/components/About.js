import React from 'react';
import img from '../images/thamuaiimg.png';
  // import { FiAward, FiCode, FiUsers, FiSmile } from 'react-icons/fi';
import './About.css';

const STATS = [
  // { icon: <FiAward />,  num: '3+',  lbl: 'Years Experience' },
  // { icon: <FiCode />,   num: '50+', lbl: 'Projects Done'    },
  // { icon: <FiUsers />,  num: '20+', lbl: 'Happy Clients'    },
  // { icon: <FiSmile />,  num: '5★',  lbl: 'Average Rating'   },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-wrap">

        {/* Image column */}
        <div className="about-img-col">
          <div className="about-img-frame">
            <img
              src={img}
              alt="About Thamothiran R"
            />
          </div>
          <div className="about-exp-chip">
            <span className="pulse-dot" />
            Available for work
          </div>
        </div>


        <div className="about-text-col">
          <p className="sec-label">Get To Know</p>
          <h2 className="sec-title">About <em>Me</em></h2>
          <p className="sec-sub" style={{marginBottom:'20px'}}>
          Frontend Developer with hands-on experience in React and Angular, focused on 
          building responsive and user-friendly web applications
          </p>
          <p className="about-p">
            Holds a Bachelor of Computer Applications (BCA) with a strong foundation in 
            JavaScript and modern UI development.
          </p>
          <p className="about-p">
         Actively seeking an opportunity to apply skills, contribute to real-world 
         projects, and grow as a developer.
          </p>

          <div className="about-stats">
            {STATS.map((s,i) => (
              <div key={i} className="astat">
                <div className="astat-icon">{s.icon}</div>
                <div className="astat-num">{s.num}</div>
                <div className="astat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>

          <div style={{display:'flex', gap:'14px', flexWrap:'wrap', marginTop:'10px'}}>
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})}
            >Let's Talk</button>
            <a href="/resume.pdf" download className="btn btn-ghost">Download CV</a>
          </div>
        </div>

      </div>
    </section>
  );
}