import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitBranch, GitFork, Star, Code2 } from 'lucide-react';

const repos = [
  { name:'skill-swap-network', desc:'Full-stack Python/Django + React skill exchange with real-time WebSocket chat.', lang:'Python', langColor:'#3572A5' },
  { name:'job-portal', desc:'Django recruitment platform with 3 user roles, deployed on Render.', lang:'Python', langColor:'#3572A5' },
  { name:'otp-auth-system', desc:'Multi-channel OTP (SMS/WhatsApp/Email) with Redis + Twilio.', lang:'Python', langColor:'#3572A5' },
];

export default function GitHub() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });

  return (
    <section id="github" style={{ padding:'6rem 0', background:'var(--bg)' }} ref={ref}>
      <div className="container">
        <motion.div initial={{ opacity:0, y:22 }} animate={inView ? { opacity:1, y:0 } : {}}>
          <div className="eyebrow">GitHub</div>
          <h2 className="section-title">Open Source Work</h2>
          <p className="section-sub">Repositories and activity on GitHub</p>
        </motion.div>

        {/* Stats images */}
        <motion.div initial={{ opacity:0, y:22 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ delay:.15 }}
          className="card" style={{ padding:'2rem', marginBottom:'1.5rem' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'1.1rem', marginBottom:'1.5rem', flexWrap:'wrap' }}>
            <div style={{ width:'52px', height:'52px', borderRadius:'50%', background:'linear-gradient(135deg,var(--accent),var(--teal))', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <GitBranch size={22} color="#fff"/>
            </div>
            <div>
              <div style={{ fontFamily:'Plus Jakarta Sans', fontWeight:800, fontSize:'1.1rem' }}>ishwarlahire</div>
              <div style={{ color:'var(--text-2)', fontSize:'.85rem' }}>Python Backend · FastAPI · Django · REST APIs</div>
            </div>
            <a href="https://github.com/ishwarlahire" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ marginLeft:'auto', padding:'.46rem 1rem', fontSize:'.8rem' }}>
              <GitBranch size={14}/> View Profile
            </a>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }} className="stats-grid">
            <img
              src="https://github-readme-stats.vercel.app/api?username=ishwarlahire&show_icons=true&theme=github_dark&bg_color=131928&border_color=1f2b45&title_color=FF6B35&icon_color=2DD4BF&text_color=F0EDE8&hide_border=false"
              alt="GitHub Stats" style={{ width:'100%', borderRadius:'10px', border:'1px solid var(--border)' }}
              onError={e => { (e.target as HTMLImageElement).style.display='none'; }}
            />
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=ishwarlahire&theme=dark&background=131928&border=1f2b45&ring=FF6B35&fire=2DD4BF&currStreakLabel=FF6B35"
              alt="GitHub Streak" style={{ width:'100%', borderRadius:'10px', border:'1px solid var(--border)' }}
              onError={e => { (e.target as HTMLImageElement).style.display='none'; }}
            />
          </div>
        </motion.div>

        {/* Repos */}
        <div className="grid-3">
          {repos.map((repo, idx) => (
            <motion.a key={repo.name} href={`https://github.com/ishwarlahire/${repo.name}`}
              target="_blank" rel="noopener noreferrer" className="card"
              initial={{ opacity:0, y:18 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ delay:.3+idx*.08 }}
              style={{ padding:'1.4rem', textDecoration:'none', display:'block' }}
            >
              <div style={{ display:'flex', alignItems:'center', gap:'.45rem', marginBottom:'.6rem' }}>
                <Code2 size={15} color="var(--accent)"/>
                <span style={{ fontFamily:'Fira Code', fontSize:'.82rem', fontWeight:500, color:'var(--text)' }}>{repo.name}</span>
              </div>
              <p style={{ color:'var(--text-2)', fontSize:'.83rem', lineHeight:1.65, marginBottom:'.9rem' }}>{repo.desc}</p>
              <div style={{ display:'flex', alignItems:'center', gap:'.9rem' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'.28rem' }}>
                  <span style={{ width:'10px', height:'10px', borderRadius:'50%', background:repo.langColor }}/>
                  <span style={{ fontSize:'.76rem', color:'var(--text-2)', fontFamily:'Fira Code' }}>{repo.lang}</span>
                </div>
                <span style={{ display:'flex', alignItems:'center', gap:'.25rem', color:'var(--text-3)', fontSize:'.75rem' }}><Star size={11}/>0</span>
                <span style={{ display:'flex', alignItems:'center', gap:'.25rem', color:'var(--text-3)', fontSize:'.75rem' }}><GitFork size={11}/>0</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.stats-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
