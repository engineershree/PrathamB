import { MapPin, Mail, Phone, Download, Shield } from 'lucide-react';
import profileImg from '../assets/profile.png';
import resumeFile from '../assets/QA03.pdf';

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.7fr) minmax(0, 1.3fr)', gap: '60px', alignItems: 'center' }}>
          
          <div style={{ position: 'relative' }}>
            <div className="glass-card" style={{ padding: '20px', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}>
              <img src={profileImg} alt="Pratham Baganikar" style={{ width: '100%', borderRadius: '20px', filter: 'grayscale(0.2)' }} />
            </div>
            <div className="experience-badge" style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'var(--primary)', color: 'var(--bg-dark)', padding: '15px 25px', borderRadius: '12px', fontWeight: 800, fontFamily: 'var(--font-mono)', fontSize: '1.2rem', boxShadow: '0 0 20px rgba(0, 255, 102, 0.4)' }}>
              QA-2026
            </div>
          </div>

          <div>
            <div style={{ textAlign: 'left', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>:: About <span className="neon-text">the Engineer</span></h2>
              <div className="title-underline" />
            </div>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: 1.8, marginBottom: '30px' }}>
              I am a results-oriented <span className="neon-text">QA Engineer</span> currently working and learning automation at IFAS Edutech. 
              My expertise lies in building robust test infrastructures, identifying critical edge-cases, and ensuring seamless functional 
              and non-functional performance for large-scale web and mobile ecosystems.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-dim)' }}><MapPin size={18} className="neon-text" /> Pune, India</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-dim)' }}><Mail size={18} className="neon-text" /> prathambaganikar@gmail.com</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-dim)' }}><Phone size={18} className="neon-text" /> +91 7058891557</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-dim)' }}><Shield size={18} className="neon-text" /> 2021-2025 B.Tech</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href={resumeFile} download className="btn-primary" style={{ padding: '1rem 2rem' }}>
                Download CV <Download size={18} />
              </a>
              <div className="stats-mini" style={{ display: 'flex', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span className="neon-text" style={{ fontSize: '1.5rem', fontWeight: 700 }}>7.47</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>CGPA</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span className="neon-text" style={{ fontSize: '1.5rem', fontWeight: 700 }}>500+</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>BUGS LOGGED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 991px) {
          .container > div { grid-template-columns: 1fr; text-align: center; }
          .container > div > div:nth-child(1) { max-width: 350px; margin: 0 auto; }
          .title-underline { margin: 10px auto; }
          .stats-mini { margin: 0 auto; }
          .btn-primary { margin: 0 auto; }
        }
      `}} />
    </section>
  );
};

export default About;
