import React from 'react';
import { Github, Linkedin, ShieldCheck, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#050505', borderTop: '1px solid var(--border-color)', padding: '60px 0 30px' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px', marginBottom: '60px' }}>
          
          <div style={{ maxWidth: '350px' }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-mono)', marginBottom: '20px' }}>
              <ShieldCheck className="neon-text" size={32} />
              <span>PB<span className="neon-text">.qa</span></span>
            </a>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: 1.8 }}>
              Ensuring the digital landscape is secure, functional, and performant. Specialized in the delicate art of breaking software to make it unbreakable.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '80px' }}>
            <div>
              <h4 style={{ marginBottom: '25px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary)' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {['Hero', 'About', 'Dashboard', 'Experience', 'Skills', 'Projects'].map(link => (
                  <li key={link}><a href={`#${link.toLowerCase()}`} style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }} className="footer-link hover:text-white">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ marginBottom: '25px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--secondary)' }}>Contact Info</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-dim)' }}><Mail size={16} /> prathambaganikar@gmail.com</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-dim)' }}><Linkedin size={16} /> in/pratham-baganikar</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-dim)' }}><Github size={16} /> @Pratham1489</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.05)', flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
            &copy; {currentYear} Pratham Baganikar. All rights reserved. <span className="neon-text">/</span> Designed for Quality.
          </p>
          
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="https://github.com/Pratham1489" className="social-icon">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/pratham-baganikar-19325125b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon">
              <Linkedin size={20} />
            </a>
            <a href="#hero" className="scroll-top-btn" aria-label="Scroll Top">
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer-link:hover { color: var(--primary) !important; }
        .social-icon { color: var(--text-dim); transition: var(--transition); }
        .social-icon:hover { color: var(--primary); transform: translateY(-3px); }
        .scroll-top-btn { 
          width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--border-color); display: flex; justify-content: center; align-items: center; color: var(--text-dim); transition: var(--transition);
        }
        .scroll-top-btn:hover { border-color: var(--primary); color: var(--primary); box-shadow: 0 0 10px rgba(0, 255, 102, 0.2); }
      `}} />
    </footer>
  );
};

export default Footer;
