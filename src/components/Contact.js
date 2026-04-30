import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const INFO = [
  { icon: <FiMail />,    label: 'Email',    val: 'thamuthamu478@gmail.com',  href: 'mailto:thamuthamu478@gmail.com' },
  { icon: <FiPhone />,   label: 'Phone',    val: '+91 9488112209',   href: 'tel:+91 9488112209'        },
  { icon: <FiMapPin />,  label: 'Location', val: 'Bengaluru, India',     href: '#'                       },
];
const SOCIALS = [
  { icon: <FaGithub />,    href: 'https://github.com',   label: 'GitHub'   },
  { icon: <FaLinkedinIn />,href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <FaTwitter />,   href: 'https://twitter.com',  label: 'Twitter'  },
];

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  const change = e => setForm({...form, [e.target.name]: e.target.value});

  const submit = e => {
    e.preventDefault();
    setSending(true);
    // 🔌 Plug in EmailJS or Formspree here
    setTimeout(() => {
      setSending(false);
      setDone(true);
      setForm({ name:'', email:'', subject:'', message:'' });
      setTimeout(() => setDone(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact">
      <div className="container">
        <div style={{textAlign:'center', marginBottom:'60px'}}>
          <p className="sec-label" style={{justifyContent:'center'}}>Get In Touch</p>
          <h2 className="sec-title">Let's <em>Work Together</em></h2>
          <p className="sec-sub" style={{margin:'14px auto 0', textAlign:'center'}}>
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="contact-layout">
          
          <div className="contact-panel">
            <h3 className="panel-title">Contact Info</h3>
            <p className="panel-sub">
              Reach out via any channel below. I typically respond within 24 hours.
            </p>

            <div className="info-list">
              {INFO.map((item, i) => (
                <a key={i} href={item.href} className="info-row">
                  <div className="info-ico">{item.icon}</div>
                  <div>
                    <p className="info-lbl">{item.label}</p>
                    <p className="info-val">{item.val}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="panel-socials">
              {SOCIALS.map((s,i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer"
                  className="ps-icon" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <form className="contact-form" onSubmit={submit} noValidate>
            <div className="form-row-2">
              <div className="fgroup">
                <label>Full Name</label>
                <input name="name" value={form.name} onChange={change}
                  placeholder="Your Name" required />
              </div>
              <div className="fgroup">
                <label>Email Address</label>
                <input type="email" name="email" value={form.email} onChange={change}
                  placeholder="your.email@example.com" required />
              </div>
            </div>
            <div className="fgroup">
              <label>Subject</label>
              <input name="subject" value={form.subject} onChange={change}
                placeholder="Project inquiry / Collaboration" required />
            </div>
            <div className="fgroup">
              <label>Message</label>
              <textarea name="message" value={form.message} onChange={change}
                placeholder="…"
                rows={6} required />
            </div>

            <button type="submit" className="btn btn-primary submit-btn" disabled={sending}>
              {done
                ? <><FiCheckCircle /> Sent! I'll be in touch soon</>
                : sending
                ? <><span className="spin" />Sending…</>
                : <><FiSend /> Send Message</>
              }
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}