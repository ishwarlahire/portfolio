
import { GitBranch, Link2, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior:'smooth' });

  return (
    <footer style={{ background:'var(--bg)', borderTop:'1px solid var(--border)', padding:'3.5rem 0 2rem' }}>
      <div className="container">
        <div className="grid-3" style={{ marginBottom:'3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:'.55rem', marginBottom:'.85rem' }}>
              <div style={{ width:'32px', height:'32px', borderRadius:'7px', background:'var(--accent)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <span style={{ fontFamily:'Fira Code', fontWeight:500, fontSize:'.75rem', color:'#fff' }}>IL</span>
              </div>
              <span style={{ fontFamily:'Plus Jakarta Sans', fontWeight:800, fontSize:'.95rem', color:'var(--text)' }}>
                ishwar<span style={{ color:'var(--accent)' }}>.</span>dev
              </span>
            </div>
            <p style={{ color:'var(--text-2)', fontSize:'.85rem', lineHeight:1.7, marginBottom:'1.1rem' }}>
              Python Backend Developer building scalable REST APIs, real-time systems, and full-stack applications.
            </p>
            <div style={{ display:'flex', gap:'.55rem' }}>
              {[
                { icon:<GitBranch size={15}/>, url:personalInfo.github },
                { icon:<Link2 size={15}/>, url:personalInfo.linkedin },
                { icon:<Mail size={15}/>, url:`mailto:${personalInfo.email}` },
              ].map((s,i) => (
                <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                  style={{ width:'34px', height:'34px', borderRadius:'8px', border:'1px solid var(--border-mid)', background:'var(--bg-raised)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--text-2)', textDecoration:'none', transition:'all .2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color='var(--accent)'; e.currentTarget.style.borderColor='var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color='var(--text-2)'; e.currentTarget.style.borderColor='var(--border-mid)'; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily:'Plus Jakarta Sans', fontWeight:700, fontSize:'.8rem', textTransform:'uppercase', letterSpacing:'.08em', color:'var(--text-3)', marginBottom:'1rem' }}>Navigation</h4>
            <div style={{ display:'flex', flexDirection:'column', gap:'.45rem' }}>
              {[['About','#about'],['Skills','#skills'],['Experience','#experience'],['Projects','#projects'],['Education','#education'],['Contact','#contact']].map(([label,href]) => (
                <button key={label} onClick={() => go(href)}
                  style={{ background:'none', border:'none', cursor:'pointer', textAlign:'left', color:'var(--text-2)', fontSize:'.875rem', fontFamily:'Manrope', padding:0, transition:'color .18s' }}
                  onMouseEnter={e => (e.currentTarget.style.color='var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color='var(--text-2)')}
                >{label}</button>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div>
            <h4 style={{ fontFamily:'Plus Jakarta Sans', fontWeight:700, fontSize:'.8rem', textTransform:'uppercase', letterSpacing:'.08em', color:'var(--text-3)', marginBottom:'1rem' }}>Core Stack</h4>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'.38rem' }}>
              {['Python','FastAPI','Django','PostgreSQL','Redis','Docker','JWT','WebSocket','React'].map(t => (
                <span key={t} className="tag" style={{ fontSize:'.68rem', cursor:'default' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        <hr className="divider"/>
        <div style={{ paddingTop:'1.5rem', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'.75rem' }}>
          <span style={{ color:'var(--text-3)', fontSize:'.8rem', fontFamily:'Fira Code' }}>
            © {new Date().getFullYear()} Ishwar Lahire
          </span>
          <span style={{ color:'var(--text-3)', fontSize:'.8rem', display:'flex', alignItems:'center', gap:'.3rem', fontFamily:'Manrope' }}>
            Built with <Heart size={11} color="var(--accent)" fill="var(--accent)"/> using React + TypeScript + Framer Motion
          </span>
        </div>
      </div>
    </footer>
  );
}
