import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Server, Monitor, Database, Wrench, Cloud, Star, Zap, BarChart2 } from 'lucide-react';
import { skills } from '../data/portfolioData';

const iconMap: Record<string, React.ReactElement> = {
  Code:     <Code size={17}/>,
  Server:   <Server size={17}/>,
  Monitor:  <Monitor size={17}/>,
  Database: <Database size={17}/>,
  Wrench:   <Wrench size={17}/>,
  Cloud:    <Cloud size={17}/>,
  Star:     <Star size={17}/>,
  Zap:      <Zap size={17}/>,
  BarChart: <BarChart2 size={17}/>,
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });

  return (
    <section id="skills" style={{ padding:'6rem 0', background:'var(--bg)' }} ref={ref}>
      <div className="container">
        <motion.div initial={{ opacity:0, y:22 }} animate={inView ? { opacity:1, y:0 } : {}}>
          <div className="eyebrow">Skills</div>
          <h2 className="section-title">Technical Stack</h2>
          <p className="section-sub">Technologies I build with, grouped by domain</p>
        </motion.div>

        <div className="grid-auto">
          {skills.map((group, idx) => (
            <motion.div key={group.category} className="card" style={{ padding:'1.6rem' }}
              initial={{ opacity:0, y:24 }} animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ delay: idx * .065 }}
            >
              <div style={{ display:'flex', alignItems:'center', gap:'.7rem', marginBottom:'1.1rem' }}>
                <div style={{
                  width:'36px', height:'36px', borderRadius:'8px', flexShrink:0,
                  background:`${group.color}14`, border:`1px solid ${group.color}28`,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color: group.color,
                }}>
                  {iconMap[group.icon]}
                </div>
                <span style={{ fontFamily:'Plus Jakarta Sans', fontSize:'.875rem', fontWeight:700 }}>{group.category}</span>
              </div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'.38rem' }}>
                {group.items.map((item, i) => (
                  <motion.span key={item} className="tag"
                    initial={{ opacity:0, scale:.85 }} animate={inView ? { opacity:1, scale:1 } : {}}
                    transition={{ delay: idx*.065 + i*.028 }}
                    style={{ cursor:'default' }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.borderColor = `${group.color}80`;
                      el.style.color = group.color;
                      el.style.background = `${group.color}10`;
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.borderColor = 'var(--border)';
                      el.style.color = 'var(--text-2)';
                      el.style.background = 'var(--tag-bg)';
                    }}
                  >{item}</motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity:0, y:14 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ delay:.5 }}
          style={{
            marginTop:'1.75rem', padding:'1.1rem 1.6rem',
            background:'linear-gradient(135deg,rgba(var(--accent-rgb),.05),rgba(var(--teal-rgb),.05))',
            border:'1px solid rgba(var(--accent-rgb),.15)', borderRadius:'12px',
            display:'flex', alignItems:'center', gap:'1rem', flexWrap:'wrap',
          }}
        >
          <span style={{ fontSize:'1.3rem' }}>🏆</span>
          <div>
            <span style={{ fontFamily:'Plus Jakarta Sans', fontWeight:700, fontSize:'.9rem' }}>HackerRank Certified — </span>
            <span style={{ color:'var(--text-2)', fontSize:'.875rem' }}>5★ Python &amp; SQL · 100+ DSA problems solved in Python</span>
          </div>
          <a href="https://www.hackerrank.com/ishwarlahire" target="_blank" rel="noopener noreferrer"
            style={{ marginLeft:'auto', fontFamily:'Fira Code', fontSize:'.72rem', color:'var(--accent)', textDecoration:'none' }}
            onMouseEnter={e => (e.currentTarget.style.textDecoration='underline')}
            onMouseLeave={e => (e.currentTarget.style.textDecoration='none')}
          >View Profile →</a>
        </motion.div>
      </div>
    </section>
  );
}
