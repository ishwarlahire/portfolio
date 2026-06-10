import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';

interface Props { isDark: boolean; toggleTheme: () => void; }

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Freelance',  href: '#freelance', badge: true },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar({ isDark, toggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (href: string) => { setOpen(false); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <nav style={{ boxShadow: scrolled ? '0 2px 30px rgba(0,0,0,.3)' : 'none' }}>
      <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:'60px' }}>

        {/* Logo */}
        <button onClick={() => go('#hero')}
          style={{ background:'none', border:'none', cursor:'pointer', display:'flex', alignItems:'center', gap:'.6rem' }}
        >
          <div style={{
            width:'34px', height:'34px', borderRadius:'8px',
            background:'var(--accent)',
            display:'flex', alignItems:'center', justifyContent:'center',
            flexShrink:0,
          }}>
            <span style={{ fontFamily:'Fira Code', fontWeight:500, fontSize:'.78rem', color:'#fff' }}>IL</span>
          </div>
          <span style={{ fontFamily:'Plus Jakarta Sans', fontWeight:800, fontSize:'.95rem', color:'var(--text)', letterSpacing:'-.01em' }}>
            ishwar<span style={{ color:'var(--accent)' }}>.</span>dev
          </span>
        </button>

        {/* Desktop links */}
        <div style={{ display:'flex', alignItems:'center', gap:'.1rem' }} className="nav-desktop">
          {links.map((l) => (
            <button key={l.label} onClick={() => go(l.href)}
              style={{
                background:'none', border:'none', cursor:'pointer',
                padding:'.38rem .8rem', borderRadius:'7px',
                fontSize:'.84rem', fontFamily:'Manrope', fontWeight:600,
                color:'var(--text-2)', transition:'all .18s',
                display:'flex', alignItems:'center', gap:'.3rem',
              }}
              onMouseEnter={e => { e.currentTarget.style.color='var(--accent)'; e.currentTarget.style.background='rgba(var(--accent-rgb),.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.color='var(--text-2)'; e.currentTarget.style.background='none'; }}
            >
              {l.label}
              {l.badge && (
                <span style={{
                  padding:'.05rem .38rem', borderRadius:'4px',
                  background:'var(--teal)', color:'#0B0F1A',
                  fontSize:'.58rem', fontWeight:800, fontFamily:'Plus Jakarta Sans', letterSpacing:'.04em',
                }}>HIRE</span>
              )}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display:'flex', alignItems:'center', gap:'.5rem' }}>
          <button onClick={toggleTheme}
            style={{
              background:'var(--bg-raised)', border:'1px solid var(--border-mid)',
              borderRadius:'8px', width:'36px', height:'36px',
              display:'flex', alignItems:'center', justifyContent:'center',
              cursor:'pointer', color:'var(--text-2)', transition:'all .2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.color='var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border-mid)'; e.currentTarget.style.color='var(--text-2)'; }}
          >
            {isDark ? <Sun size={15}/> : <Moon size={15}/>}
          </button>

          <a href="/resume.pdf" download="Ishwar_Lahire_Resume.pdf" className="btn-primary"
            style={{ padding:'.46rem 1rem', fontSize:'.78rem' }}>
            <Download size={13}/> Resume
          </a>

          <button onClick={() => setOpen(!open)} className="nav-hamburger"
            style={{ background:'none', border:'none', color:'var(--text)', cursor:'pointer', display:'none' }}>
            {open ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }}
            style={{ overflow:'hidden', borderTop:'1px solid var(--border)', background:'var(--nav-bg)', backdropFilter:'blur(20px)' }}
          >
            <div style={{ padding:'1rem 1.25rem 1.25rem', display:'flex', flexDirection:'column', gap:'.15rem' }}>
              {links.map(l => (
                <button key={l.label} onClick={() => go(l.href)}
                  style={{
                    background:'none', border:'none', cursor:'pointer', textAlign:'left',
                    padding:'.7rem .9rem', borderRadius:'8px', fontSize:'.93rem',
                    fontFamily:'Manrope', fontWeight:600, color:'var(--text)',
                    display:'flex', alignItems:'center', gap:'.5rem', transition:'all .15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background='rgba(var(--accent-rgb),.07)'}
                  onMouseLeave={e => e.currentTarget.style.background='none'}
                >
                  {l.label}
                  {l.badge && <span style={{ padding:'.05rem .38rem', borderRadius:'4px', background:'var(--teal)', color:'#0B0F1A', fontSize:'.6rem', fontWeight:800, fontFamily:'Plus Jakarta Sans' }}>HIRE</span>}
                </button>
              ))}
              <hr className="divider" style={{ margin:'.6rem 0' }}/>
              <a href="/resume.pdf" download="Ishwar_Lahire_Resume.pdf" className="btn-primary"
                style={{ justifyContent:'center' }}>
                <Download size={14}/> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width:768px){
          .nav-desktop{display:none!important}
          .nav-hamburger{display:flex!important}
        }
      `}</style>
    </nav>
  );
}
