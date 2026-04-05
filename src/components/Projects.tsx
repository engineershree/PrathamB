import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor, Smartphone, Database, ShieldCheck, Bug, Code } from 'lucide-react';

const ProjectCard = ({ project }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="glass-card" 
      style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ height: '240px', background: `linear-gradient(135deg, ${project.color}20, #000)`, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <project.icon size={80} style={{ color: project.color, opacity: 0.8 }} />
        <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <span className="tag" style={{ border: `1px solid ${project.color}`, color: project.color, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)' }}>{project.type}</span>
        </div>
      </div>
      
      <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{project.title}</h3>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', lineHeight: 1.6 }}>{project.description}</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {project.tags.map((tag: any) => (
            <span key={tag} style={{ fontSize: '0.75rem', padding: '4px 10px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-main)', border: '1px solid rgba(148, 163, 184, 0.1)' }}>{tag}</span>
          ))}
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', gap: '15px' }}>
          <a href={project.github} className="btn-icon" aria-label="GitHub"><Github size={20} /></a>
          <a href={project.demo} className="btn-icon" aria-label="Live Demo"><ExternalLink size={20} /></a>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .btn-icon {
          width: 44px; height: 44px; display: flex; justify-content: center; align-items: center; border-radius: 8px; border: 1px solid var(--border-color); color: var(--text-dim); transition: var(--transition);
        }
        .btn-icon:hover { border-color: var(--primary); color: var(--primary); transform: translateY(-3px); }
      `}} />
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Payment App Testing',
      type: 'QA Audit',
      description: 'Conducted end-to-end functional testing for account handling, deposits, and multi-currency withdrawals. Specialized in edge-case identification and high-security transactions.',
      icon: ShieldCheck,
      color: 'var(--primary)',
      tags: ['Functional', 'UAT', 'Security', 'Edge Cases'],
      github: 'https://github.com/Pratham1489',
      demo: '#'
    },
    {
      title: 'E-Commerce Website',
      type: 'Full Stack',
      description: 'A responsive e-commerce application UI built to demonstrate frontend skills and seamless user transitions. Integrated with bootstrap for mobile-first responsiveness.',
      icon: Code,
      color: 'var(--secondary)',
      tags: ['HTML', 'CSS', 'JS', 'Bootstrap'],
      github: 'https://github.com/Pratham1489',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--bg-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'left', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>:: Featured <span className="neon-text">Portfolio</span></h2>
          <div className="title-underline" />
          <p style={{ color: 'var(--text-dim)', marginTop: '20px' }}>A showcase of my recent testing audits and development projects.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '40px' }}>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
