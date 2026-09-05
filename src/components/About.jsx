import { motion } from 'framer-motion'
import { Globe2, Users, Zap } from 'lucide-react'
import './About.css'

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const highlights = [
  {
    icon: Globe2,
    title: 'International Clients',
    desc: 'Shipped projects for clients in the USA, South Africa, and the UK.',
    color: 'cyan',
  },
  {
    icon: Users,
    title: 'Agile Team Player',
    desc: 'Sprint planning, stand-ups, code reviews, and retrospectives — every sprint.',
    color: 'purple',
  },
  {
    icon: Zap,
    title: 'Full-Stack Focus',
    desc: 'End-to-end ownership — backend APIs in .NET, frontend UIs in React.',
    color: 'cyan',
  },
]

const education = [
  {
    degree: 'M.Sc. IT & Computer Application',
    university: 'Bhakta Kavi Narsinh Mehta University',
    abbr: 'MSc',
    color: 'purple',
  },
  {
    degree: 'Bachelor of Computer Application (BCA)',
    university: 'Saurashtra University',
    abbr: 'BCA',
    color: 'cyan',
  },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Header */}
          <motion.div variants={fadeUp}>
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Building scalable solutions<br />
              <span className="gradient-text">across the full stack</span>
            </h2>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div className="about__highlights" variants={fadeUp}>
            {highlights.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className={`card about__highlight-card about__highlight-card--${color}`}>
                <div className={`about__highlight-icon about__highlight-icon--${color}`}>
                  <Icon size={20} />
                </div>
                <h3 className="about__highlight-title">{title}</h3>
                <p className="about__highlight-desc">{desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div variants={fadeUp}>
            <p className="about__edu-heading">🎓 Education</p>
            <div className="about__edu-grid">
              {education.map(({ degree, university, abbr, color }) => (
                <div key={degree} className={`card about__edu-card about__edu-card--${color}`}>
                  <div className={`about__edu-badge about__edu-badge--${color}`}>{abbr}</div>
                  <div className="about__edu-text">
                    <div className="about__edu-degree">{degree}</div>
                    <div className="about__edu-uni">{university}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
