import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Link2, GitBranch, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [sent, setSent] = useState(false);
  const waUrl = `https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`;

  const validate = () => {
    const e: Record<string,string> = {};
    if (!form.name.trim())  e.name    = 'Required';
    if (!form.email.trim()) e.email   = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Required';
    return e;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (!Object.keys(errs).length) {
      const sub = encodeURIComponent(form.subject || `Portfolio contact from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.open(`mailto:${personalInfo.email}?subject=${sub}&body=${body}`);
      setSent(true);
      setForm({ name:'', email:'', subject:'', message:'' });
    }
  };

  const contacts = [
    { icon:<Mail size={17}/>, label:'Email', value:personalInfo.email, href:`mailto:${personalInfo.email}`, color:'var(--accent)' },
    { icon:<MessageCircle size={17}/>, label:'WhatsApp', value:personalInfo.phone, href:waUrl, color:'#25D366' },
    { icon:<Link2 size={17}/>, label:'LinkedIn', value:'ishwar-lahire', href:personalInfo.linkedin, color:'#0A66C2' },
    { icon:<GitBranch size={17}/>, label:'GitHub', value:'ishwarlahire', href:personalInfo.github, color:'var(--purple)' },
    { icon:<MapPin size={17}/>, label:'Location', value:'Manmad, Maharashtra', href: null, color:'var(--teal)' },
  ];

  return (
    <section id="contact" style={{ padding:'6rem 0', background:'var(--bg-alt)' }} ref={ref}>
      <div className="container">
        <motion.div initial={{ opacity:0, y:22 }} animate={inView ? { opacity:1, y:0 } : {}}>
          <div className="eyebrow">Contact</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-sub">Open to new opportunities, freelance work, or just a chat</p>
        </motion.div>

        <div className="grid-2" style={{ alignItems:'start' }}>
          {/* Left */}
          <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
            <motion.div className="card" style={{ padding:'2rem' }}
              initial={{ opacity:0, x:-22 }} animate={inView ? { opacity:1, x:0 } : {}} transition={{ delay:.15 }}
            >
              <h3 style={{ fontFamily:'Plus Jakarta Sans', fontWeight:800, fontSize:'1.05rem', marginBottom:'.5rem' }}>Let's work together</h3>
              <p style={{ color:'var(--text-2)', fontSize:'.9rem', lineHeight:1.75, marginBottom:'1.5rem' }}>
                I'm open to Python Backend, Full Stack, and Freelance opportunities. 
                Reach out — I respond within 24 hours.
              </p>
              <div style={{ display:'flex', flexDirection:'column', gap:'.85rem' }}>
                {contacts.map(c => (
                  <div key={c.label} style={{ display:'flex', alignItems:'center', gap:'.85rem' }}>
                    <div style={{ width:'38px', height:'38px', borderRadius:'9px', background:`${c.color === 'var(--accent)' ? 'rgba(var(--accent-rgb),.1)' : c.color === '#25D366' ? 'rgba(37,211,102,.1)' : c.color === '#0A66C2' ? 'rgba(10,102,194,.1)' : 'rgba(var(--teal-rgb),.1)'}`, border:`1px solid ${c.color === 'var(--accent)' ? 'rgba(var(--accent-rgb),.22)' : 'rgba(255,255,255,.07)'}`, display:'flex', alignItems:'center', justifyContent:'center', color:c.color, flexShrink:0 }}>
                      {c.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily:'Fira Code', fontSize:'.65rem', color:'var(--text-3)', marginBottom:'.08rem' }}>{c.label}</div>
                      {c.href
                        ? <a href={c.href} target="_blank" rel="noopener noreferrer" style={{ color:'var(--text)', fontSize:'.85rem', fontWeight:500, textDecoration:'none', transition:'color .18s' }}
                            onMouseEnter={e => (e.currentTarget.style.color=c.color)}
                            onMouseLeave={e => (e.currentTarget.style.color='var(--text)')}
                          >{c.value}</a>
                        : <span style={{ color:'var(--text)', fontSize:'.85rem', fontWeight:500 }}>{c.value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity:0, x:-22 }} animate={inView ? { opacity:1, x:0 } : {}} transition={{ delay:.25 }}
              style={{ padding:'1.1rem 1.4rem', background:'rgba(var(--teal-rgb),.05)', border:'1px solid rgba(var(--teal-rgb),.18)', borderRadius:'12px', display:'flex', alignItems:'center', gap:'.6rem' }}
            >
              <span className="live-dot"/>
              <div>
                <div style={{ fontFamily:'Plus Jakarta Sans', fontWeight:700, fontSize:'.875rem', color:'var(--teal)' }}>Available for work</div>
                <div style={{ fontSize:'.8rem', color:'var(--text-2)' }}>Open to internships, full-time &amp; freelance</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div className="card" style={{ padding:'2rem' }}
            initial={{ opacity:0, x:22 }} animate={inView ? { opacity:1, x:0 } : {}} transition={{ delay:.2 }}
          >
            {sent ? (
              <div style={{ textAlign:'center', padding:'3rem 0' }}>
                <CheckCircle size={44} color="var(--teal)" style={{ marginBottom:'1rem' }}/>
                <h3 style={{ fontFamily:'Plus Jakarta Sans', fontWeight:800, fontSize:'1.2rem', marginBottom:'.5rem' }}>Message Sent!</h3>
                <p style={{ color:'var(--text-2)', marginBottom:'1.5rem' }}>Your email client should have opened. I'll reply soon!</p>
                <button onClick={() => setSent(false)} className="btn-primary">Send Another</button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="grid-2" style={{ marginBottom:'1rem' }}>
                  {[{name:'name',label:'Name',ph:'Your name',type:'text'},{name:'email',label:'Email',ph:'you@example.com',type:'email'}].map(f => (
                    <div key={f.name}>
                      <label style={{ display:'block', fontFamily:'Manrope', fontSize:'.8rem', fontWeight:600, color:'var(--text-2)', marginBottom:'.35rem' }}>{f.label} *</label>
                      <input name={f.name} type={f.type} value={(form as any)[f.name]} onChange={e => { setForm(p => ({...p,[e.target.name]:e.target.value})); setErrors(p => ({...p,[e.target.name]:''})); }} placeholder={f.ph} style={{ borderColor:(errors as any)[f.name] ? 'var(--accent)' : undefined }}/>
                      {(errors as any)[f.name] && <span style={{ fontSize:'.72rem', color:'var(--accent)', marginTop:'.2rem', display:'block' }}>{(errors as any)[f.name]}</span>}
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom:'1rem' }}>
                  <label style={{ display:'block', fontFamily:'Manrope', fontSize:'.8rem', fontWeight:600, color:'var(--text-2)', marginBottom:'.35rem' }}>Subject</label>
                  <input name="subject" value={form.subject} onChange={e => setForm(p => ({...p,subject:e.target.value}))} placeholder="e.g. Freelance project / Job opportunity"/>
                </div>
                <div style={{ marginBottom:'1.5rem' }}>
                  <label style={{ display:'block', fontFamily:'Manrope', fontSize:'.8rem', fontWeight:600, color:'var(--text-2)', marginBottom:'.35rem' }}>Message *</label>
                  <textarea name="message" value={form.message} onChange={e => { setForm(p => ({...p,message:e.target.value})); setErrors(p => ({...p,message:''})); }} placeholder="Tell me about your project or opportunity..." rows={5} style={{ resize:'vertical', borderColor:errors.message ? 'var(--accent)' : undefined }}/>
                  {errors.message && <span style={{ fontSize:'.72rem', color:'var(--accent)', marginTop:'.2rem', display:'block' }}>{errors.message}</span>}
                </div>
                <button type="submit" className="btn-primary" style={{ width:'100%', justifyContent:'center' }}>
                  <Send size={15}/> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
