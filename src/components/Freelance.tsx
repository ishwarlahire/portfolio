import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, MessageCircle, Mail } from "lucide-react";
import { freelanceServices, personalInfo } from '../data/portfolioData';

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(message)}`;
}

export default function Freelance() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const defaultWaUrl = buildWhatsAppUrl(personalInfo.whatsappMessage);

  return (
    <section id="freelance" style={{ padding: '6rem 0', background: 'var(--bg-2)' }} ref={ref}>
      <div className="container-custom">

        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
            <div className="accent-line" style={{ margin: 0 }} />
            <span style={{
              padding: '0.25rem 0.9rem',
              background: 'rgba(0,255,136,0.1)',
              border: '1px solid rgba(0,255,136,0.3)',
              borderRadius: '100px',
              fontSize: '0.75rem',
              color: 'var(--accent)',
              fontFamily: 'Space Mono',
              display: 'flex', alignItems: 'center', gap: '0.4rem',
            }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 6px var(--accent)' }} />
              Available for Projects
            </span>
          </div>
          <h2 className="section-heading">Freelance Services</h2>
          <p className="section-sub">
            Need something built? I take on freelance projects alongside my job.
            Click any service — it opens WhatsApp with a message ready to send.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3rem',
        }}>
          {freelanceServices.map((service, idx) => {
            const waUrl = buildWhatsAppUrl(service.whatsappMessage);
            return (
              <motion.a
                key={service.title}
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.06 }}
                style={{
                  padding: '1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                whileHover={{ y: -5 }}
              >
                {/* Subtle top border accent */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: '2px',
                  background: `linear-gradient(90deg, ${service.color}, transparent)`,
                  opacity: 0.6,
                }} />

                {/* Icon + price row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>{service.icon}</span>
                  <span style={{
                    fontFamily: 'Space Mono',
                    fontSize: '0.7rem',
                    color: service.color,
                    background: `${service.color}12`,
                    border: `1px solid ${service.color}30`,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '100px',
                    whiteSpace: 'nowrap',
                  }}>
                    {service.price}
                  </span>
                </div>

                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.45rem', color: 'var(--text)' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.855rem', lineHeight: 1.65, marginBottom: '1.1rem', flex: 1 }}>
                  {service.description}
                </p>

                {/* Deliverables */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginBottom: '1.25rem' }}>
                  {service.deliverables.map(d => (
                    <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <CheckCircle size={12} color={service.color} style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{d}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.45rem',
                  padding: '0.6rem',
                  borderRadius: '8px',
                  border: `1px solid ${service.color}35`,
                  background: `${service.color}0A`,
                  color: service.color,
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  fontFamily: 'DM Sans',
                  transition: 'all 0.2s',
                }}>
                  <MessageCircle size={14} />
                  Chat on WhatsApp
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Why Work With Me + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          style={{
            background: 'linear-gradient(135deg, rgba(0,255,136,0.04) 0%, rgba(0,212,255,0.04) 100%)',
            border: '1px solid rgba(0,255,136,0.15)',
            borderRadius: '16px',
            padding: '2.5rem',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center' }} className="why-grid">
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                Why Work With Me?
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {[
                  { icon: '⚡', text: 'Fast delivery — I respect your deadlines' },
                  { icon: '🔍', text: 'Clean, well-documented, maintainable code' },
                  { icon: '💬', text: 'Direct 1-on-1 communication via WhatsApp' },
                  { icon: '🔧', text: 'Post-delivery support for bug fixes' },
                  { icon: '🎯', text: 'Real production experience from active internship' },
                  { icon: '🐳', text: 'Docker-ready, deployment-ready deliverables' },
                  { icon: '🐍', text: 'Strong Python (FastAPI, Django) + Node.js expertise' },
                  { icon: '📊', text: 'Data analysis with Pandas, NumPy & Pydantic' },
                ].map(item => (
                  <div key={item.text} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1rem', flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA box */}
            <div>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💼</div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Let's Build Together
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.75rem', lineHeight: 1.65 }}>
                  Describe your project — click below and WhatsApp opens with a message ready to send. Just hit Send!
                </p>

                {/* WhatsApp button — pre-filled message */}
                <a
                  href={defaultWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    width: '100%',
                    padding: '0.85rem',
                    borderRadius: '10px',
                    background: '#25D366',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    fontFamily: 'DM Sans',
                    transition: 'all 0.2s',
                    marginBottom: '0.75rem',
                    boxShadow: '0 6px 20px rgba(37,211,102,0.25)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#1ebe5d';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(37,211,102,0.35)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#25D366';
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.25)';
                  }}
                >
                  {/* WhatsApp SVG icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Message on WhatsApp
                </a>

                <a
                  href={`mailto:${personalInfo.email}?subject=Freelance Project Inquiry`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    width: '100%',
                    padding: '0.7rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    fontFamily: 'DM Sans',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent-blue)';
                    e.currentTarget.style.color = 'var(--accent-blue)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                >
                  <Mail size={14} />
                  Or send an email
                </a>

                {/* Phone number hint */}
                <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '1rem', fontFamily: 'Space Mono' }}>
                  📞 {personalInfo.phone}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) { .why-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
