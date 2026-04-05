import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShieldCheck, Terminal, Bug, Activity, User, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'About', icon: <User size={16} />, href: '#about' },
    { title: 'Dashboard', icon: <Activity size={16} />, href: '#dashboard' },
    { title: 'Skills', icon: <Terminal size={16} />, href: '#skills' },
    { title: 'Experience', icon: <Briefcase size={16} />, href: '#experience' },
    { title: 'Projects', icon: <Bug size={16} />, href: '#projects' },
    { title: 'Contact', icon: <Mail size={16} />, href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md py-3 border-b border-[#1e293b]' : 'bg-transparent py-5'}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', fontWeight: 'bold', fontFamily: 'var(--font-mono)' }}>
          <ShieldCheck className="neon-text" size={24} />
          <span>PB<span className="neon-text">.qa</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden-mobile md-flex" style={{ display: 'flex', gap: '30px' }}>
          {navLinks.map((link) => (
            <a 
              key={link.title} 
              href={link.href} 
              style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: scrolled ? 'var(--text-main)' : 'var(--text-dim)' }}
              className="nav-link-hover"
            >
              <span className="neon-text">{link.icon}</span>
              {link.title}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md-none" 
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'transparent', border: 'none', color: 'var(--text-bright)', cursor: 'pointer' }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md-none"
            style={{ background: '#0a0a0a', borderBottom: '1px solid var(--border-color)', overflow: 'hidden' }}
          >
            <div className="container" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {navLinks.map((link) => (
                <a 
                  key={link.title} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem' }}
                >
                  <span className="neon-text">{link.icon}</span>
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .nav-link-hover:hover {
          color: var(--primary) !important;
        }
        @media (max-width: 768px) {
          .md-flex { display: none !important; }
        }
        @media (min-width: 769px) {
          .md-none { display: none !important; }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
