import { motion } from 'framer-motion';
import { Activity, Shield, Bug, Zap, Terminal, Settings } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, subtext, color }: any) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-card" 
      style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: `${color}20`, display: 'flex', justifyContent: 'center', alignItems: 'center', color }}>
          <Icon size={20} />
        </div>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</span>
      </div>
      <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{value}</div>
      <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: color }} />
        {subtext}
      </div>
    </motion.div>
  );
};

const Dashboard = () => {
  const coverageData = [
    { label: 'Manual Testing', value: 95, color: '#00ff66' },
    { label: 'Automation (Selenium)', value: 70, color: '#00e5ff' },
    { label: 'Performance (JMeter)', value: 85, color: '#ffcc00' },
    { label: 'Security (Burp Suite)', value: 65, color: '#ff0055' },
    { label: 'API Testing (Postman)', value: 90, color: '#00ff66' },
    { label: 'Database Testing', value: 80, color: '#00e5ff' },
  ];

  return (
    <section id="dashboard" className="section-padding" style={{ background: '#080a10' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>:: Test <span className="neon-text">Coverage</span> Dashboard</h2>
          <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto' }}> 
            Visual representation of my technical proficiency and domain expertise in QA and Automation.
          </p>
          <div className="title-underline" style={{ margin: '20px auto' }} />
        </div>

        <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          <StatCard 
            icon={Bug} 
            label="Defect Detection Rate" 
            value="98.5%" 
            subtext="Critical bug identification" 
            color="var(--primary)" 
          />
          <StatCard 
            icon={Activity} 
            label="Test Cycle Time" 
            value="14.2ms" 
            subtext="Avg. execution speed" 
            color="var(--secondary)" 
          />
          <StatCard 
            icon={Zap} 
            label="Automation Efficiency" 
            value="3.5x" 
            subtext="Faster than manual cycles" 
            color="#ffcc00" 
          />
          <StatCard 
            icon={Shield} 
            label="Security Rating" 
            value="A+" 
            subtext="Vuln scanning performance" 
            color="#ff0055" 
          />
        </div>

        <div className="coverage-meter-section" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card" 
            style={{ padding: '40px' }}
          >
            <h3 style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Terminal size={24} className="neon-text" /> Coverage Meter
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              {coverageData.map((item) => (
                <div key={item.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>{item.label}</span>
                    <span style={{ fontWeight: 700, color: item.color }}>{item.value}%</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      style={{ height: '100%', background: item.color, boxShadow: `0 0 10px ${item.color}` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="glass-card" style={{ padding: '24px' }}>
              <h4 style={{ color: 'var(--secondary)', marginBottom: '15px' }}>QA Mindset</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
                "Testing is not about finding bugs. It is about understanding the system and ensuring that it behaves as expected under all conditions."
              </p>
            </div>
            <div className="glass-card" style={{ padding: '24px', position: 'relative' }}>
              <Settings className="settings-spin" size={60} style={{ position: 'absolute', right: '10px', top: '10px', color: 'rgba(255,255,255,0.03)' }} />
              <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Agile Workflow</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
                Experience in SDLC, STLC, and Agile methodologies. Proficient in Jira and Taiga for defect lifecycle management.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .settings-spin { animation: spin 20s linear infinite; }
        @media (max-width: 991px) {
          .coverage-meter-section { grid-template-columns: 1fr; }
        }
      `}} />
    </section>
  );
};

export default Dashboard;
