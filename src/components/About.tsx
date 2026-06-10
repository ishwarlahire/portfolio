import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Mail, Link2, GitBranch, Target, User } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });

  return (
    <section id="about" style={{ padding:'6rem 0', background:'var(--bg-alt)' }} ref={ref}>
      <div className="container">
        <motion.div initial={{ opacity:0, y:22 }} animate={inView ? { opacity:1, y:0 } : {}}>
          <div className="eyebrow">About</div>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-sub">A quick look at my background and what drives me</p>
        </motion.div>

        <div className="grid-2" style={{ alignItems:'start' }}>
          {/* Summary */}
          <motion.div className="card" style={{ padding:'2rem' }}
            initial={{ opacity:0, x:-22 }} animate={inView ? { opacity:1, x:0 } : {}} transition={{ delay:.15 }}
          >
            <div style={{ display:'flex', alignItems:'center', gap:'.7rem', marginBottom:'1.25rem' }}>
              <div style={{ width:'38px', height:'38px', borderRadius:'9px', background:'rgba(var(--accent-rgb),.12)', border:'1px solid rgba(var(--accent-rgb),.2)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--accent)', flexShrink:0 }}>
                <User size={17}/>
              </div>
              <h3 style={{ fontFamily:'Plus Jakarta Sans', fontSize:'1rem', fontWeight:700 }}>Profile Summary</h3>
            </div>
            <p style={{ color:'var(--text-2)', lineHeight:1.8, fontSize:'.925rem', marginBottom:'1.5rem' }}>
              {personalInfo.summary}
            </p>
            <hr className="divider" style={{ margin:'1.25rem 0' }}/>
            <div style={{ display:'flex', flexDirection:'column', gap:'.65rem' }}>
              {[
                { icon:<MapPin size={13}/>, text: personalInfo.location },
                { icon:<Mail size={13}/>, text: personalInfo.email, href:`mailto:${personalInfo.email}` },
                { icon:<Link2 size={13}/>, text:'linkedin.com/in/ishwar-lahire', href: personalInfo.linkedin },
                { icon:<GitBranch size={13}/>, text:'github.com/ishwarlahire', href: personalInfo.github },
              ].map(item => (
                <div key={item.text} style={{ display:'flex', alignItems:'center', gap:'.6rem' }}>
                  <span style={{ color:'var(--accent)', flexShrink:0 }}>{item.icon}</span>
                  {item.href
                    ? <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ color:'var(--text-2)', fontSize:'.85rem', textDecoration:'none', transition:'color .18s' }}
                        onMouseEnter={e => (e.currentTarget.style.color='var(--accent)')}
                        onMouseLeave={e => (e.currentTarget.style.color='var(--text-2)')}
                      >{item.text}</a>
                    : <span style={{ color:'var(--text-2)', fontSize:'.85rem' }}>{item.text}</span>
                  }
                </div>
              ))}
            </div>
          </motion.div>

          {/* Goal + terminal */}
          <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
            <motion.div className="card" style={{ padding:'2rem' }}
              initial={{ opacity:0, x:22 }} animate={inView ? { opacity:1, x:0 } : {}} transition={{ delay:.22 }}
            >
              <div style={{ display:'flex', alignItems:'center', gap:'.7rem', marginBottom:'1.25rem' }}>
                <div style={{ width:'38px', height:'38px', borderRadius:'9px', background:'rgba(var(--teal-rgb),.1)', border:'1px solid rgba(var(--teal-rgb),.2)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--teal)', flexShrink:0 }}>
                  <Target size={17}/>
                </div>
                <h3 style={{ fontFamily:'Plus Jakarta Sans', fontSize:'1rem', fontWeight:700 }}>Career Goal</h3>
              </div>
              <p style={{ color:'var(--text-2)', lineHeight:1.8, fontSize:'.925rem' }}>{personalInfo.goal}</p>
            </motion.div>

            <motion.div
              initial={{ opacity:0, y:16 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ delay:.32 }}
              className="code-block"
            >
              <div className="titlebar">
                <div className="titlebar-dots">
                  <span style={{ background:'#FF5F57' }}/><span style={{ background:'#FFBD2E' }}/><span style={{ background:'#28C840' }}/>
                </div>
                <span style={{ color:'var(--text-3)' }}>fun_fact.py</span>
                <span/>
              </div>
              <div style={{ padding:'1.1rem 1.25rem' }}>
                <div><span style={{ color:'var(--accent)' }}>print</span>(<span style={{ color:'var(--yellow)' }}>f"</span><span style={{ color:'var(--text-2)' }}>Fun fact: </span><span style={{ color:'var(--yellow)' }}>{personalInfo.funFact}"</span>)</div>
                <div style={{ marginTop:'.5rem', color:'var(--teal-light)' }}>
                  &gt;&gt; {personalInfo.funFact}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
