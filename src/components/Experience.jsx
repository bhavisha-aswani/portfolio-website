import { motion } from 'framer-motion'
import { Briefcase, CheckCircle2 } from 'lucide-react'
import './Experience.css'

const achievements = [
  'Sole technical lead on Annique Rooibos (SA) for 3+ years — full ownership: architecture, delivery, and international client management',
  'Reduced server load by 20% via Cloudflare edge rules and proactive SQL Server optimisation',
  'Developed processing dashboard using react.js for Picxly (multi-tenant photography SaaS) — surfacing FDMS service load metrics and webhook event logs tracking for platform operators',
  'Shipped payment and API integrations across 3 production platforms — recurring subscriptions, hosted checkout, and third-party data pipelines',
  'Mentored junior developers on Clean Architecture and SOLID principles; supported SIT/UAT testing cycles and contributed to smooth production releases',
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp}>
            <p className="section-label">Experience</p>
            <h2 className="section-title">
              Where I've <span className="gradient-text">built things</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="exp__timeline">
            <motion.div className="exp__entry" variants={fadeUp}>
              {/* Timeline dot */}
              <div className="exp__dot">
                <Briefcase size={16} />
              </div>

              {/* Card */}
              <div className="exp__card card">
                {/* Header */}
                <div className="exp__header">
                  <div className="exp__header-left">
                    <div className="exp__company-badge">XIT</div>
                    <div>
                      <h3 className="exp__role">Senior ASP.NET Developer</h3>
                      <p className="exp__company">
                        Xcellence-IT &nbsp;·&nbsp; Remote, India
                      </p>
                    </div>
                  </div>
                  <div className="exp__meta">
                    <span className="exp__duration">Sep 2021 – Present · 5+ yrs</span>
                    <span className="tag tag-cyan" style={{ fontSize: '0.72rem' }}>Current</span>
                  </div>
                </div>

                <div className="divider" style={{ margin: '1.25rem 0' }} />

                {/* Achievements */}
                <ul className="exp__achievements">
                  {achievements.map((item, i) => (
                    <motion.li
                      key={i}
                      className="exp__achievement"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                    >
                      <CheckCircle2 size={15} className="exp__achievement-icon" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="exp__tech">
                  {['ASP.NET Core', 'C#', '.NET 6/7/8/9', 'React.js', 'SQL Server', 'Hangfire', 'Razorpay', 'Git'].map(t => (
                    <span key={t} className="tag tag-neutral">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
