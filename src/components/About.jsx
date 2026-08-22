import { motion } from 'framer-motion'
import { GraduationCap, Globe2, Users, Zap } from 'lucide-react'
import './About.css'

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const highlights = [
  {
    icon: Globe2,
    title: 'International Clients',
    desc: 'Delivered projects for clients in California (USA), South Africa, and the UK — communicating requirements, timelines, and demos directly.',
    color: 'cyan',
  },
  {
    icon: Users,
    title: 'Agile Team Player',
    desc: 'Actively participated in Agile Scrum ceremonies — sprint planning, daily stand-ups, code reviews, and retrospectives.',
    color: 'purple',
  },
  {
    icon: Zap,
    title: 'Full-Stack Focus',
    desc: 'Built server-side APIs with ASP.NET Core & C# and interactive client UIs with React.js. End-to-end ownership from DB schema to deployment.',
    color: 'cyan',
  },
]

const education = [
  {
    degree: 'M.Sc. IT & Computer Application',
    university: 'Bhakta Kavi Narsinh Mehta University',
  },
  {
    degree: 'Bachelor of Computer Application (BCA)',
    university: 'Saurashtra University',
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
            <p className="section-subtitle">
              Senior .NET &amp; Full-Stack Developer with 5+ years of experience designing robust,
              maintainable systems — from database design and high-throughput Web APIs to React-powered user interfaces.
            </p>
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

          {/* Core Mindset + Education */}
          <motion.div className="about__bottom" variants={fadeUp}>
            {/* Mindset */}
            <div className="about__summary">
              <h3 className="about__sub-heading">Engineering Mindset</h3>
              <p>
                My focus is on building clean, reliable backend architectures with <strong>ASP.NET Core</strong> &amp; <strong>C#</strong>, paired with dynamic frontends in <strong>React.js</strong>. Whether architecting secure Web APIs, managing database efficiency, or integrating third-party services, I prioritize long-term system maintainability and performance.
              </p>
              <p>
                Beyond writing code, I bridge technical execution with business objectives — taking full feature ownership, driving clear communication in Agile teams, and delivering production-ready solutions for global stakeholders.
              </p>
            </div>

            {/* Education */}
            <div className="about__education">
              <h3 className="about__sub-heading">
                <GraduationCap size={18} />
                Education
              </h3>
              <div className="about__edu-list">
                {education.map(({ degree, university }) => (
                  <div key={degree} className="about__edu-item">
                    <div className="about__edu-degree">{degree}</div>
                    <div className="about__edu-uni">{university}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
