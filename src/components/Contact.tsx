import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding" style={{ background: '#080a10' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>:: Start a <span className="neon-text">Conversation</span></h2>
          <div className="title-underline" style={{ margin: '20px auto' }} />
          <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto' }}>Ready to ensure the highest quality for your next big project.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.8fr) minmax(0, 1.2fr)', gap: '60px' }}>
          
          {/* Info Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div className="glass-card" style={{ padding: '30px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ color: 'var(--primary)', background: 'rgba(0,255,102,0.1)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Mail size={24} />
              </div>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Email Me</p>
                <p style={{ fontSize: '1rem', fontWeight: 600 }}>prathambaganikar@gmail.com</p>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '30px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ color: 'var(--secondary)', background: 'rgba(0,229,255,0.1)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Phone size={24} />
              </div>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Call Me</p>
                <p style={{ fontSize: '1rem', fontWeight: 600 }}>+91 7058891557</p>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '30px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ color: '#ffcc00', background: 'rgba(255,204,0,0.1)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <MapPin size={24} />
              </div>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Location</p>
                <p style={{ fontSize: '1rem', fontWeight: 600 }}>Pune, Maharashtra</p>
              </div>
            </div>
            
            <div style={{ marginTop: '20px', padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px dashed var(--border-color)' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textAlign: 'center' }}>:: system.status: <span className="neon-text">AVAILABLE</span>_</p>
            </div>
          </div>

          {/* Form Side */}
          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card" 
            style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '25px' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
              <div className="input-group">
                <label className="input-label">Full Name</label>
                <input type="text" placeholder="John Doe" className="cyber-input" />
              </div>
              <div className="input-group">
                <label className="input-label">Company</label>
                <input type="text" placeholder="Tech Corp" className="cyber-input" />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Subject</label>
              <input type="text" placeholder="QA Project Proposal" className="cyber-input" />
            </div>

            <div className="input-group">
              <label className="input-label">Message</label>
              <textarea placeholder="Tell me about your project..." className="cyber-input" rows={5} />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.2rem' }}>
              Deploy Message <Send size={18} />
            </button>
          </motion.form>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .input-label { display: block; margin-bottom: 8px; font-size: 0.8rem; font-family: var(--font-mono); color: var(--text-dim); text-transform: uppercase; }
          .cyber-input { 
            width: 100%; padding: 14px 20px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 8px; color: var(--text-bright); font-family: var(--font-sans); transition: var(--transition); outline: none;
          }
          .cyber-input:focus { border-color: var(--primary); background: rgba(0,255,102,0.03); }
          @media (max-width: 991px) {
            .container > div:nth-child(2) { grid-template-columns: 1fr; }
            .container > div:nth-child(2) > form { order: -1; }
          }
        `}} />
      </div>
    </section>
  );
};

export default Contact;
