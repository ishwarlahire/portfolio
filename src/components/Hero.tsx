import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { GitBranch, Link2, Mail, ArrowDown, Download, ExternalLink, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior:'smooth' });

  return (
    <section id="hero" style={{
      minHeight:'100vh', paddingTop:'60px',
      display:'flex', flexDirection:'column', justifyContent:'center',
      position:'relative', overflow:'hidden',
      background:'var(--bg)',
    }}>
      {/* Subtle mesh gradient */}
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        background:`
          radial-gradient(ellipse 60% 50% at 70% 30%, rgba(var(--accent-rgb),.06) 0%, transparent 60%),
          radial-gradient(ellipse 50% 60% at 20% 75%, rgba(var(--teal-rgb),.05) 0%, transparent 60%)
        `,
      }}/>

      {/* Faint grid */}
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        backgroundImage:`
          linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)
        `,
        backgroundSize:'44px 44px',
        maskImage:'radial-gradient(ellipse 85% 85% at 50% 50%, black, transparent)',
        WebkitMaskImage:'radial-gradient(ellipse 85% 85% at 50% 50%, black, transparent)',
      }}/>

      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 400px', gap:'5rem', alignItems:'center' }} className="hero-grid">

          {/* ─── Left ─── */}
          <div>
            {/* Status pill */}
            <motion.div
              initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:.1 }}
              style={{
                display:'inline-flex', alignItems:'center', gap:'.55rem',
                padding:'.32rem .9rem',
                background:'rgba(var(--teal-rgb),.08)',
                border:'1px solid rgba(var(--teal-rgb),.2)',
                borderRadius:'100px', marginBottom:'1.75rem',
              }}
            >
              <span className="live-dot"/>
              <span style={{ fontFamily:'Fira Code', fontSize:'.72rem', color:'var(--teal-light)', letterSpacing:'.04em' }}>
                open to work &amp; freelance
              </span>
            </motion.div>

            {/* Name — signature serif + underline */}
            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:.18 }}
              style={{ marginBottom:'.65rem' }}
            >
              <h1 style={{
                fontFamily:'Plus Jakarta Sans', fontWeight:800,
                fontSize:'clamp(2.6rem,5.5vw,4rem)',
                lineHeight:1.08, letterSpacing:'-.03em',
              }}>
                Hi, I'm{' '}
                <span className="name-underline" style={{ fontFamily:'Lora', fontStyle:'italic', color:'var(--accent)' }}>
                  Ishwar Lahire
                </span>
              </h1>
            </motion.div>

            {/* Typed title */}
            <motion.div
              initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:.28 }}
              style={{ marginBottom:'1.1rem', minHeight:'2rem' }}
            >
              <span style={{ fontFamily:'Manrope', fontSize:'clamp(.95rem,2.2vw,1.2rem)', color:'var(--text-2)', fontWeight:500 }}>
                <TypeAnimation
                  sequence={[
                    'Python Backend Developer',   2000,
                    'FastAPI & Django Expert',     1800,
                    'REST API Architect',          1800,
                    'Python Full Stack Developer', 2000,
                    'Available for Freelance',     1800,
                  ]}
                  wrapper="span" speed={55} repeat={Infinity}
                />
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:.36 }}
              style={{
                fontFamily:'Manrope', fontSize:'.975rem', color:'var(--text-2)',
                maxWidth:'470px', lineHeight:1.8, marginBottom:'2rem',
              }}
            >
              Building production-ready REST APIs and backend systems with{' '}
              <strong style={{ color:'var(--text)', fontWeight:600 }}>Python, FastAPI &amp; Django</strong>.
              MCA student with real internship experience. Available for work and freelance.
            </motion.p>

            {/* Location badge */}
            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.4 }}
              style={{
                display:'inline-flex', alignItems:'center', gap:'.35rem',
                color:'var(--text-3)', fontSize:'.8rem', marginBottom:'2rem',
                fontFamily:'Manrope',
              }}
            >
              <MapPin size={13}/> Manmad, Maharashtra, India
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:.44 }}
              style={{
                display:'flex', gap:'0', marginBottom:'2.25rem',
                background:'var(--bg-card)',
                border:'1px solid var(--border)',
                borderRadius:'12px', overflow:'hidden',
                width:'fit-content',
              }}
            >
              {[
                { val:'10+',  sub:'APIs Built' },
                { val:'30%',  sub:'Perf Gained' },
                { val:'500+', sub:'Concurrent' },
                { val:'9.8',  sub:'MCA SGPA' },
              ].map((s, i) => (
                <div key={s.sub} style={{
                  padding:'.9rem 1.35rem', textAlign:'center',
                  borderRight: i < 3 ? '1px solid var(--border)' : 'none',
                }}>
                  <div style={{ fontFamily:'Plus Jakarta Sans', fontWeight:800, fontSize:'1.35rem', color:'var(--accent)', lineHeight:1 }}>{s.val}</div>
                  <div style={{ fontFamily:'Fira Code', fontSize:'.62rem', color:'var(--text-3)', marginTop:'.25rem' }}>{s.sub}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:.52 }}
              style={{ display:'flex', gap:'.75rem', flexWrap:'wrap', marginBottom:'2rem' }}
            >
              <button className="btn-primary" onClick={() => go('#projects')}>
                <ExternalLink size={14}/> View Projects
              </button>
              <button className="btn-teal" onClick={() => go('#freelance')}>
                💼 Hire Me
              </button>
              <a href="/resume.pdf" download="Ishwar_Lahire_Resume.pdf" className="btn-outline">
                <Download size={14}/> Resume
              </a>
            </motion.div>

            {/* Social row */}
            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.62 }}
              style={{ display:'flex', alignItems:'center', gap:'.75rem' }}
            >
              <span style={{ fontFamily:'Fira Code', fontSize:'.68rem', color:'var(--text-3)' }}>reach me</span>
              {[
                { icon:<GitBranch size={15}/>, url:personalInfo.github,   tip:'GitHub' },
                { icon:<Link2 size={15}/>,  url:personalInfo.linkedin, tip:'LinkedIn' },
                { icon:<Mail size={15}/>,      url:`mailto:${personalInfo.email}`, tip:'Email' },
              ].map(s => (
                <a key={s.tip} href={s.url} target="_blank" rel="noopener noreferrer" title={s.tip}
                  style={{
                    width:'36px', height:'36px', borderRadius:'8px',
                    border:'1px solid var(--border-mid)', background:'var(--bg-raised)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    color:'var(--text-2)', textDecoration:'none', transition:'all .2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.color='var(--accent)'; e.currentTarget.style.transform='translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border-mid)'; e.currentTarget.style.color='var(--text-2)'; e.currentTarget.style.transform='none'; }}
                >{s.icon}</a>
              ))}
            </motion.div>
          </div>

          {/* ─── Right: Code terminal ─── */}
          <motion.div
            className="hero-terminal code-block"
            initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }}
            transition={{ delay:.38, type:'spring', stiffness:65, damping:18 }}
            style={{ animation:'float 5.8s ease-in-out infinite' }}
          >
            <div className="titlebar">
              <div className="titlebar-dots">
                <span style={{ background:'#FF5F57' }}/>
                <span style={{ background:'#FFBD2E' }}/>
                <span style={{ background:'#28C840' }}/>
              </div>
              <span style={{ color:'var(--text-3)', fontSize:'.68rem' }}>ishwar.py</span>
              <span style={{
                background:'rgba(var(--teal-rgb),.12)', color:'var(--teal-light)',
                padding:'.08rem .5rem', borderRadius:'4px', fontSize:'.65rem',
              }}>Python 3.12</span>
            </div>

            <div style={{ padding:'1.35rem 1.4rem' }}>
              {/* Code lines */}
              <div><span style={{ color:'#C792EA' }}>class</span> <span style={{ color:'var(--teal-light)' }}>PythonDeveloper</span>:</div>
              <div style={{ paddingLeft:'1.5rem', marginTop:'.1rem' }}>
                <div><span style={{ color:'var(--text-3)', fontStyle:'italic' }}>"""Backend · Full Stack · Freelance"""</span></div>
                <div style={{ marginTop:'.35rem' }}>
                  <span style={{ color:'#C792EA' }}>def </span>
                  <span style={{ color:'var(--teal-light)' }}>__init__</span>
                  <span style={{ color:'var(--text-2)' }}>(self):</span>
                </div>
                <div style={{ paddingLeft:'1.5rem' }}>
                  <div>self.<span style={{ color:'#82AAFF' }}>name</span>     = <span style={{ color:'var(--accent-light)' }}>"Ishwar Lahire"</span></div>
                  <div>self.<span style={{ color:'#82AAFF' }}>location</span> = <span style={{ color:'var(--accent-light)' }}>"Manmad, India"</span></div>
                  <div style={{ marginTop:'.2rem' }}>self.<span style={{ color:'#82AAFF' }}>stack</span>    = [</div>
                  <div style={{ paddingLeft:'1.5rem' }}>
                    {['"FastAPI"', '"Django"', '"PostgreSQL"', '"Redis"', '"Docker"'].map(t => (
                      <div key={t} style={{ color:'var(--yellow)' }}>{t},</div>
                    ))}
                  </div>
                  <div>]</div>
                  <div style={{ marginTop:'.2rem' }}>self.<span style={{ color:'#82AAFF' }}>status</span>   = <span style={{ color:'var(--green)' }}>"Building 🚀"</span></div>
                  <div>self.<span style={{ color:'#82AAFF' }}>freelance</span> = <span style={{ color:'#C792EA' }}>True</span></div>
                </div>
              </div>

              {/* Prompt line */}
              <div style={{ marginTop:'1rem', paddingTop:'.75rem', borderTop:'1px solid rgba(255,255,255,.05)' }}>
                <span style={{ color:'var(--accent)' }}>❯ </span>
                <span style={{ color:'var(--text-3)' }}>python ishwar.py</span>
                <span className="cursor"/>
              </div>
              <div style={{ color:'var(--teal-light)', marginTop:'.2rem', fontSize:'.75rem' }}>
                ✓ Ready to build your next project
              </div>
            </div>

            {/* Status bar */}
            <div style={{
              display:'flex', justifyContent:'space-between', alignItems:'center',
              padding:'.5rem 1rem',
              borderTop:'1px solid rgba(255,255,255,.05)',
              background:'rgba(255,255,255,.02)',
              fontSize:'.63rem', fontFamily:'Fira Code',
            }}>
              <span style={{ color:'var(--teal)' }}>● Available</span>
              <span style={{ color:'var(--text-3)' }}>MCA · SGPA 9.8</span>
              <span style={{ color:'var(--accent)' }}>freelance: True</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => go('#about')}
        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.1 }}
        style={{
          position:'absolute', bottom:'1.75rem', left:'50%', transform:'translateX(-50%)',
          background:'none', border:'none', cursor:'pointer',
          display:'flex', flexDirection:'column', alignItems:'center', gap:'.25rem', color:'var(--text-3)',
        }}
      >
        <span style={{ fontFamily:'Fira Code', fontSize:'.62rem', letterSpacing:'.08em' }}>scroll</span>
        <motion.div animate={{ y:[0,5,0] }} transition={{ duration:1.7, repeat:Infinity }}>
          <ArrowDown size={13}/>
        </motion.div>
      </motion.button>

      <style>{`
        @media(max-width:900px){ .hero-grid{grid-template-columns:1fr!important} .hero-terminal{display:none!important} }
      `}</style>
    </section>
  );
}
