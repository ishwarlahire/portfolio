import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { GitBranch, ExternalLink, Star, CheckCircle } from 'lucide-react';
import { projects } from '../data/portfolioData';

const cats = ['All', 'Python Full Stack', 'Node.js'];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });
  const [active, setActive] = useState('All');
  const filtered = projects.filter(p => active === 'All' || p.category === active);

  return (
    <section id="projects" style={{ padding:'6rem 0', background:'var(--bg-alt)' }} ref={ref}>
      <div className="container">
        <motion.div initial={{ opacity:0, y:22 }} animate={inView ? { opacity:1, y:0 } : {}}>
          <div className="eyebrow">Projects</div>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-sub">Backend systems, APIs, and full-stack applications</p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity:0, y:12 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ delay:.1 }}
          style={{ display:'flex', gap:'.5rem', marginBottom:'2.5rem', flexWrap:'wrap' }}
        >
          {cats.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              style={{
                padding:'.35rem .95rem', borderRadius:'100px',
                border:'1px solid', fontFamily:'Manrope', fontSize:'.82rem', fontWeight:600,
                cursor:'pointer', transition:'all .18s',
                borderColor: active===cat ? 'var(--accent)' : 'var(--border-mid)',
                background:  active===cat ? 'rgba(var(--accent-rgb),.1)' : 'transparent',
                color:       active===cat ? 'var(--accent)' : 'var(--text-2)',
              }}
            >{cat}</button>
          ))}
        </motion.div>

        <div className="grid-auto">
          <AnimatePresence>
            {filtered.map((p, idx) => (
              <motion.div key={p.id} className="card" layout
                initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, scale:.96 }}
                transition={{ delay: idx*.07 }}
                style={{ padding:'1.75rem', display:'flex', flexDirection:'column' }}
              >
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'.9rem' }}>
                  <div style={{ display:'flex', flexDirection:'column', gap:'.3rem' }}>
                    {p.highlight && (
                      <span style={{
                        display:'inline-flex', alignItems:'center', gap:'.25rem',
                        padding:'.15rem .55rem', borderRadius:'100px',
                        background:'rgba(252,211,77,.1)', border:'1px solid rgba(252,211,77,.25)',
                        fontSize:'.65rem', color:'var(--yellow)', fontFamily:'Fira Code',
                      }}><Star size={8} fill="var(--yellow)"/> Featured</span>
                    )}
                    <span style={{
                      padding:'.15rem .55rem', background:'var(--bg-raised)',
                      borderRadius:'100px', fontSize:'.65rem', color:'var(--text-3)',
                      fontFamily:'Fira Code', display:'inline-block',
                    }}>{p.category}</span>
                  </div>
                  <div style={{ display:'flex', gap:'.38rem' }}>
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      style={{ width:'32px', height:'32px', borderRadius:'8px', border:'1px solid var(--border-mid)', background:'var(--bg-raised)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--text-2)', textDecoration:'none', transition:'all .18s' }}
                      onMouseEnter={e => { e.currentTarget.style.color='var(--accent)'; e.currentTarget.style.borderColor='var(--accent)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color='var(--text-2)'; e.currentTarget.style.borderColor='var(--border-mid)'; }}
                    ><GitBranch size={14}/></a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                        style={{ width:'32px', height:'32px', borderRadius:'8px', border:'1px solid var(--border-mid)', background:'var(--bg-raised)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--text-2)', textDecoration:'none', transition:'all .18s' }}
                        onMouseEnter={e => { e.currentTarget.style.color='var(--teal)'; e.currentTarget.style.borderColor='var(--teal)'; }}
                        onMouseLeave={e => { e.currentTarget.style.color='var(--text-2)'; e.currentTarget.style.borderColor='var(--border-mid)'; }}
                      ><ExternalLink size={14}/></a>
                    )}
                  </div>
                </div>

                <h3 style={{ fontFamily:'Plus Jakarta Sans', fontSize:'1.1rem', fontWeight:800, marginBottom:'.28rem' }}>{p.name}</h3>
                <p style={{ fontFamily:'Fira Code', fontSize:'.7rem', color:'var(--teal)', marginBottom:'.7rem' }}>{p.tagline}</p>
                <p style={{ color:'var(--text-2)', fontSize:'.875rem', lineHeight:1.72, marginBottom:'1rem', flex:1 }}>{p.description}</p>

                <div style={{ marginBottom:'1rem' }}>
                  <div style={{ fontFamily:'Fira Code', fontSize:'.62rem', color:'var(--text-3)', textTransform:'uppercase', letterSpacing:'.07em', marginBottom:'.45rem' }}>Key Features</div>
                  {p.features.slice(0,3).map((f,i) => (
                    <div key={i} style={{ display:'flex', gap:'.45rem', alignItems:'flex-start', marginBottom:'.28rem' }}>
                      <CheckCircle size={12} color="var(--teal)" style={{ flexShrink:0, marginTop:'.25rem' }}/>
                      <span style={{ fontSize:'.8rem', color:'var(--text-2)' }}>{f}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display:'flex', flexWrap:'wrap', gap:'.35rem' }}>
                  {p.tech.map(t => <span key={t} className="tag" style={{ fontSize:'.65rem' }}>{t}</span>)}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}} transition={{ delay:.5 }}
          style={{ textAlign:'center', marginTop:'2.5rem' }}>
          <a href="https://github.com/ishwarlahire" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <GitBranch size={14}/> All Repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
