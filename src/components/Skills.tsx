import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Code, Shield, CheckCircle, Bug, Activity, ShieldAlert } from 'lucide-react';

const SkillCategory = ({ title, icon: Icon, skills }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card" 
      style={{ padding: '32px' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 255, 102, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)' }}>
          <Icon size={24} />
        </div>
        <h3 style={{ fontSize: '1.25rem' }}>{title}</h3>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
        {skills.map((skill: any) => (
          <div key={skill} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-dim)' }}>
            <span style={{ color: 'var(--primary)' }}><CheckCircle size={14} /></span>
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const categories = [
    {
      title: 'Testing Domains',
      icon: Bug,
      skills: ['Manual Testing', 'Functional', 'Regression', 'Sanity/Smoke', 'Performance', 'Load Testing', 'Security Testing']
    },
    {
      title: 'Automation & Tools',
      icon: Terminal,
      skills: ['Selenium', 'Playwright', 'JMeter', 'Burp Suite', 'Postman', 'VS Code', 'Eclipse']
    },
    {
      title: 'Languages & Tech',
      icon: Code,
      skills: ['Java', 'JavaScript', 'HTML 5', 'CSS 3', 'SQL', 'Bootstrap', 'Vite', 'React']
    },
    {
      title: 'QA Frameworks',
      icon: Activity,
      skills: ['Agile / Scrum', 'SDLC / STLC', 'Defect Life Cycle', 'API Testing', 'JSON/XML', 'Git / GitHub']
    },
    {
      title: 'Project Management',
      icon: Shield,
      skills: ['Jira / Taiga', 'TestRail', 'Zephyr', 'Documentation', 'Risk Analysis', 'UAT Support']
    },
    {
      title: 'Others',
      icon: Database,
      skills: ['Object Oriented', 'Data Analysis', 'Web Security', 'Mobile Testing', 'Team Collaboration']
    }
  ];

  return (
    <section id="skills" className="section-padding" style={{ background: '#080a10' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>:: My Technical <span className="neon-text">Arsenal</span></h2>
          <div className="title-underline" style={{ margin: '20px auto' }} />
          <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto' }}> 
            A comprehensive list of tools, languages, and methodologies I leverage to ensure software excellence.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {categories.map((cat, idx) => (
            <SkillCategory key={idx} {...cat} />
          ))}
        </div>

        {/* Dynamic Tooltip/Callout */}
        <div 
          className="glass-card" 
          style={{ marginTop: '50px', padding: '30px', background: 'linear-gradient(90deg, rgba(0,255,102,0.05), transparent)', borderLeft: '4px solid var(--primary)'}}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <ShieldAlert size={40} className="neon-text" />
            <div>
              <p style={{ color: 'var(--text-bright)', fontWeight: 600, fontSize: '1.1rem' }}>Certified Quality Focus</p>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Experienced in conducting monthly security testing using Burp Suite and high-load performance audits using JMeter.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
