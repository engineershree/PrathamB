import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'QA Engineer',
      company: 'IFAS Edutech Pvt. Ltd.',
      period: 'Nov 2025 – Present',
      location: 'Pune',
      tasks: [
        'Tested web and mobile applications for functional and UI/UX consistency.',
        'Performed performance and load testing to ensure high availability.',
        'Created structured test cases and comprehensive documentation.',
        'Logged and tracked bugs using Jira and Taiga for effective defect management.',
        'Conducted regression, sanity, and unit testing on a regular basis.',
        'Conducted monthly security testing for web vulnerabilities.'
      ],
      tags: ['Manual', 'Selenium', 'Jira', 'Load Testing']
    }
  ];

  return (
    <section id="experience" className="section-padding" style={{ background: 'var(--bg-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'left', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>:: Professional <span className="neon-text">History</span></h2>
          <div className="title-underline" />
        </div>

        <div className="timeline" style={{ position: 'relative', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '2px', background: 'var(--border-color)', zIndex: 0 }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ position: 'relative', paddingLeft: '40px' }}
              >
                {/* Timeline node */}
                <div style={{ position: 'absolute', left: '-8px', top: '0', width: '18px', height: '18px', borderRadius: '50%', background: 'var(--bg-dark)', border: '4px solid var(--primary)', zIndex: 1, boxShadow: '0 0 10px var(--primary)' }} />

                <div className="glass-card" style={{ padding: '40px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '30px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--primary)' }}>{exp.role}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Briefcase size={14} /> {exp.company}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={14} /> {exp.location}</span>
                      </div>
                    </div>
                    <div className="tag" style={{ border: 'none', background: 'rgba(0, 229, 255, 0.1)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Calendar size={14} /> {exp.period}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      {exp.tasks.map((task, i) => (
                        <div key={i} style={{ display: 'flex', gap: '12px', fontSize: '0.95rem' }}>
                          <CheckCircle2 size={18} className="neon-text" style={{ minWidth: '18px', marginTop: '3px' }} />
                          <span style={{ color: 'var(--text-dim)', lineHeight: 1.6 }}>{task}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div style={{ alignSelf: 'center' }}>
                      <h4 style={{ marginBottom: '20px', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Environment Stack</h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {exp.tags.map(tag => (
                          <span key={tag} className="tag" style={{ background: 'rgba(148, 163, 184, 0.05)', color: 'var(--text-main)' }}>{tag}</span>
                        ))}
                      </div>
                      
                      <div className="glass-card" style={{ marginTop: '30px', padding: '20px', borderLeft: '4px solid var(--primary)', background: 'rgba(255,255,255,0.02)' }}>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '10px' }}>Impact Delivered</h4>
                        <p style={{ fontSize: '0.85rem', color: 'rgba(0, 255, 102, 0.7)', fontFamily: 'var(--font-mono)' }}>
                          :: Increased automated regression coverage by 40% <br />
                          :: Reduced manual test execution cycles by 2 days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
