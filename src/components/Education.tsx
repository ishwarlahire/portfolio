import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });

  return (
    <section id="education" style={{ padding:'6rem 0', background:'var(--bg)' }} ref={ref}>
      <div className="container">
        <motion.div initial={{ opacity:0, y:22 }} animate={inView ? { opacity:1, y:0 } : {}}>
          <div className="eyebrow">Education</div>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-sub">Qualifications and academic achievements</p>
        </motion.div>

        <div className="grid-auto">
          {education.map((edu, idx) => (
            <motion.div key={idx} className="card"
              initial={{ opacity:0, y:24 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ delay: idx*.08 }}
              style={{
                padding:'1.75rem',
                borderColor: edu.highlight ? 'rgba(var(--accent-rgb),.3)' : undefined,
                background: edu.highlight ? `linear-gradient(135deg,rgba(var(--accent-rgb),.04) 0%,var(--bg-card) 100%)` : undefined,
              }}
            >
              {edu.highlight && (
                <span style={{
                  display:'inline-flex', alignItems:'center', gap:'.28rem',
                  padding:'.15rem .55rem', marginBottom:'.7rem',
                  background:'rgba(var(--teal-rgb),.1)', border:'1px solid rgba(var(--teal-rgb),.22)',
                  borderRadius:'100px', fontSize:'.65rem', color:'var(--teal)', fontFamily:'Fira Code',
                }}>● Current</span>
              )}

              <div style={{ width:'40px', height:'40px', borderRadius:'9px', background: edu.highlight ? 'rgba(var(--accent-rgb),.12)' : 'var(--bg-raised)', border:`1px solid ${edu.highlight ? 'rgba(var(--accent-rgb),.22)' : 'var(--border)'}`, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'1rem' }}>
                <GraduationCap size={19} color={edu.highlight ? 'var(--accent)' : 'var(--text-2)'}/>
              </div>

              <div style={{ fontFamily:'Plus Jakarta Sans', fontWeight:800, fontSize:'1.8rem', color: edu.highlight ? 'var(--accent)' : 'var(--text-3)', marginBottom:'.2rem', letterSpacing:'-.02em' }}>{edu.shortDeg}</div>
              <h3 style={{ fontFamily:'Plus Jakarta Sans', fontWeight:700, fontSize:'.92rem', marginBottom:'.5rem', lineHeight:1.45 }}>{edu.degree}</h3>
              <p style={{ color:'var(--text-2)', fontSize:'.83rem', marginBottom:'.85rem', lineHeight:1.5 }}>{edu.institution}</p>

              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <span style={{ display:'flex', alignItems:'center', gap:'.28rem', color:'var(--text-3)', fontSize:'.78rem', fontFamily:'Fira Code' }}>
                  <Calendar size={11}/>{edu.period}
                </span>
                <span style={{
                  padding:'.18rem .62rem',
                  background: edu.highlight ? 'rgba(var(--accent-rgb),.1)' : 'var(--bg-raised)',
                  border:`1px solid ${edu.highlight ? 'rgba(var(--accent-rgb),.22)' : 'var(--border)'}`,
                  borderRadius:'100px', fontSize:'.72rem', fontFamily:'Fira Code', fontWeight:500,
                  color: edu.highlight ? 'var(--accent)' : 'var(--text-2)',
                }}>{edu.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
