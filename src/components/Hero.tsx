import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Github, Linkedin, Bug, Shield, Terminal, Activity } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const scannerVariants = {
    animate: {
      top: ['-10%', '110%'],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <section id="hero" className="hero-section" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      {/* Background decoration */}
      <div className="hero-bg-overlay" />
      <div className="grid-overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '60px', alignItems: 'center' }}>
        
        {/* Text Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <motion.div variants={itemVariants} className="tag" style={{ alignSelf: 'flex-start', color: 'var(--primary)', borderColor: 'var(--primary)' }}>
            <span className="typing-cursor">:: system.boot() _</span>
          </motion.div>

          <motion.h1 variants={itemVariants} style={{ fontSize: 'min(5rem, 10vw)', lineHeight: 1.1, letterSpacing: '-1px' }}>
            Pratham <span className="neon-text">Baganikar</span>
          </motion.h1>

          <motion.h2 
            variants={itemVariants} 
            style={{ fontSize: '1.5rem', color: 'var(--text-dim)', fontWeight: 400, maxWidth: '600px' }}
          >
            Senior <span className="neon-text">QA Engineer</span> (Fresher). 
            <br />
            "Breaking Systems to Build Better Software."
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            style={{ color: 'var(--text-dim)', maxWidth: '500px', lineHeight: 1.8 }}
          >
            I specialize in precision-driven manual and automation testing. Ensuring quality through rigorous functional, performance, and security audits.
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '1rem' }}>
            <a href="#projects" className="btn-primary">
              View Work <ChevronRight size={18} />
            </a>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://github.com/Pratham1489" className="social-icon-btn" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/pratham-baganikar-19325125b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon-btn" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* Quick Stats Overlay (Floating) */}
          <motion.div 
            variants={itemVariants} 
            style={{ display: 'flex', gap: '30px', marginTop: '3rem', borderLeft: '2px solid var(--primary)', paddingLeft: '20px' }}
          >
            <div>
              <div className="stat-label">Automation Level</div>
              <div className="stat-value neon-text">85% Ready</div>
            </div>
            <div>
              <div className="stat-label">Bug Detection</div>
              <div className="stat-value neon-text">Critical Target</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Image / Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-image-container"
        >
          <div className="image-frame">
            <img src={profileImg} alt="Pratham Baganikar" className="profile-img" />
            
            {/* Cyber Scanning Animation */}
            <motion.div 
              variants={scannerVariants}
              animate="animate"
              className="scanner-line"
            />

            {/* Floating UI Elements */}
            <div className="floating-badge top-right">
              <Bug size={14} className="neon-text" /> <span>DEFECTS_NULL</span>
            </div>
            <div className="floating-badge bottom-left">
              <Shield size={14} className="neon-text" /> <span>SECURE</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-section {
          background: radial-gradient(circle at 10% 20%, rgba(0, 255, 102, 0.05) 0%, transparent 40%);
        }
        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, var(--bg-dark) 100%);
          z-index: 1;
        }
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: 0;
          opacity: 0.5;
        }
        .hero-image-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .image-frame {
          position: relative;
          width: 100%;
          max-width: 450px;
          aspect-ratio: 1;
          border-radius: 20px;
          overflow: hidden;
          background: var(--bg-card);
          box-shadow: 0 0 50px rgba(0, 255, 102, 0.1);
          border: 1px solid var(--border-color);
        }
        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: contrast(1.1) brightness(1.05);
        }
        .scanner-line {
          position: absolute;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
          box-shadow: 0 0 15px var(--primary);
          z-index: 5;
        }
        .floating-badge {
          position: absolute;
          padding: 8px 12px;
          background: rgba(15, 18, 24, 0.9);
          border: 1px solid var(--primary);
          border-radius: 6px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 10;
          backdrop-filter: blur(5px);
        }
        .top-right { top: 20px; right: 20px; }
        .bottom-left { bottom: 20px; left: 20px; }
        
        .social-icon-btn {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-dim);
          transition: var(--transition);
        }
        .social-icon-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
          box-shadow: 0 0 15px rgba(0, 255, 102, 0.2);
        }

        .stat-label { font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 1px; }
        .stat-value { font-family: var(--font-mono); font-size: 1.25rem; font-weight: 700; margin-top: 4px; }

        .typing-cursor::after {
          content: '|';
          animation: blink 1s step-end infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }

        @media (max-width: 991px) {
          .container { grid-template-columns: 1fr; text-align: center; gap: 40px; }
          .tag { align-self: center !important; }
          h1 { font-size: 3.5rem; }
          p { margin: 0 auto; }
          .hero-image-container { order: -1; }
          .stat-container { margin: 0 auto !important; }
        }
      `}} />
    </section>
  );
};

export default Hero;
