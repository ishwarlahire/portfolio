import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });

  return (
    <section id="certifications" style={{ padding:'6rem 0', background:'var(--bg-alt)' }} ref={ref}>
      <div className="container">
        <motion.div initial={{ opacity:0, y:22 }} animate={inView ? { opacity:1, y:0 } : {}}>
          <div className="eyebrow">Certifications</div>
          <h2 className="section-title">Verified Credentials</h2>
          <p className="section-sub">Certificates and platform achievements</p>
        </motion.div>

        <div className="grid-auto">
          {certifications.map((cert, idx) => (
            <motion.a key={idx} href={cert.url} target="_blank" rel="noopener noreferrer"
              className="card"
              initial={{ opacity:0, y:22 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ delay: idx*.08 }}
              style={{ padding:'1.75rem', textDecoration:'none', display:'block', cursor:'pointer' }}
            >
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'1.1rem' }}>
                <span style={{ fontSize:'2.2rem' }}>{cert.icon}</span>
                <ExternalLink size={13} color="var(--text-3)"/>
              </div>
              <h3 style={{ fontFamily:'Plus Jakarta Sans', fontWeight:800, fontSize:'1rem', color:cert.color, marginBottom:'.35rem' }}>{cert.name}</h3>
              <p style={{ fontSize:'.83rem', color:'var(--text-2)', marginBottom:'.85rem' }}>{cert.issuer}</p>
              {cert.id !== 'Achievement' && (
                <div style={{
                  fontFamily:'Fira Code', fontSize:'.67rem', color:'var(--text-3)',
                  padding:'.28rem .65rem', background:'var(--bg-raised)', borderRadius:'6px',
                  display:'inline-block', border:'1px solid var(--border)',
                }}>
                  ID: {cert.id}
                </div>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
