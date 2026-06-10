import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, CheckCircle, TrendingUp } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });

  return (
    <section id="experience" style={{ padding:'6rem 0', background:'var(--bg)' }} ref={ref}>
      <div className="container">
        <motion.div initial={{ opacity:0, y:22 }} animate={inView ? { opacity:1, y:0 } : {}}>
          <div className="eyebrow">Experience</div>
          <h2 className="section-title">Work History</h2>
          <p className="section-sub">Professional experience and contributions</p>
        </motion.div>

        <div style={{ position:'relative' }}>
          <div style={{ position:'absolute', left:'22px', top:'46px', bottom:0, width:'2px', background:'linear-gradient(to bottom,var(--accent),transparent)' }}/>

          {experience.map((exp, idx) => (
            <motion.div key={idx} style={{ display:'flex', gap:'2rem', marginBottom:'2rem' }}
              initial={{ opacity:0, x:-22 }} animate={inView ? { opacity:1, x:0 } : {}} transition={{ delay:.15 }}
            >
              <div style={{ flexShrink:0, paddingTop:'.9rem' }}>
                <div style={{
                  width:'44px', height:'44px', borderRadius:'50%', zIndex:2, position:'relative',
                  background:'var(--accent)', display:'flex', alignItems:'center', justifyContent:'center',
                  boxShadow:`0 0 0 4px var(--bg), 0 0 18px var(--glow-accent)`,
                  fontFamily:'Plus Jakarta Sans', fontWeight:800, fontSize:'.78rem', color:'#fff',
                }}>
                  {String(idx+1).padStart(2,'0')}
                </div>
              </div>

              <div className="card" style={{ flex:1, padding:'2rem' }}>
                <span style={{
                  display:'inline-block', padding:'.15rem .6rem', marginBottom:'.6rem',
                  background:'rgba(var(--teal-rgb),.1)', border:'1px solid rgba(var(--teal-rgb),.22)',
                  borderRadius:'100px', fontSize:'.68rem', color:'var(--teal)',
                  fontFamily:'Fira Code',
                }}>{exp.type}</span>

                <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:'.75rem', marginBottom:'1.1rem' }}>
                  <div>
                    <h3 style={{ fontFamily:'Plus Jakarta Sans', fontSize:'1.2rem', fontWeight:800, marginBottom:'.3rem' }}>{exp.role}</h3>
                    <div style={{ display:'flex', gap:'1.1rem', flexWrap:'wrap' }}>
                      <span style={{ fontFamily:'Plus Jakarta Sans', fontWeight:700, color:'var(--accent)', fontSize:'.875rem' }}>{exp.company}</span>
                      <span style={{ display:'flex', alignItems:'center', gap:'.28rem', color:'var(--text-2)', fontSize:'.8rem' }}><MapPin size={11}/>{exp.location}</span>
                      <span style={{ display:'flex', alignItems:'center', gap:'.28rem', color:'var(--text-2)', fontSize:'.8rem' }}><Calendar size={11}/>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom:'1.35rem' }}>
                  <div style={{ fontFamily:'Fira Code', fontSize:'.65rem', color:'var(--text-3)', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:'.65rem' }}>Responsibilities</div>
                  <div style={{ display:'flex', flexDirection:'column', gap:'.5rem' }}>
                    {exp.responsibilities.map((r,i) => (
                      <div key={i} style={{ display:'flex', gap:'.65rem', alignItems:'flex-start' }}>
                        <CheckCircle size={13} color="var(--teal)" style={{ flexShrink:0, marginTop:'.22rem' }}/>
                        <span style={{ color:'var(--text-2)', fontSize:'.875rem', lineHeight:1.65 }}>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily:'Fira Code', fontSize:'.65rem', color:'var(--text-3)', textTransform:'uppercase', letterSpacing:'.08em', marginBottom:'.65rem' }}>Key Achievements</div>
                  <div style={{ display:'flex', gap:'.55rem', flexWrap:'wrap' }}>
                    {exp.achievements.map((a,i) => (
                      <div key={i} style={{
                        display:'flex', alignItems:'center', gap:'.35rem',
                        padding:'.28rem .75rem',
                        background:'rgba(var(--accent-rgb),.07)', border:'1px solid rgba(var(--accent-rgb),.18)',
                        borderRadius:'100px', fontSize:'.76rem', color:'var(--accent)', fontFamily:'Fira Code',
                      }}>
                        <TrendingUp size={11}/>{a}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div style={{ display:'flex', gap:'2rem' }}
            initial={{ opacity:0, x:-22 }} animate={inView ? { opacity:1, x:0 } : {}} transition={{ delay:.4 }}>
            <div style={{ flexShrink:0 }}>
              <div style={{ width:'44px', height:'44px', borderRadius:'50%', background:'var(--bg-raised)', border:'2px dashed var(--border-mid)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.1rem' }}>🌱</div>
            </div>
            <div style={{ flex:1 }}>
              <div style={{ padding:'1rem 1.4rem', background:'rgba(var(--teal-rgb),.04)', border:'1px dashed rgba(var(--teal-rgb),.2)', borderRadius:'10px', display:'flex', alignItems:'center', gap:'.6rem', flexWrap:'wrap' }}>
                <span style={{ fontFamily:'Plus Jakarta Sans', fontWeight:700, color:'var(--teal)', fontSize:'.9rem' }}>Currently learning:</span>
                <span style={{ color:'var(--text-2)', fontSize:'.875rem' }}>System Design &amp; Microservices Architecture</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
