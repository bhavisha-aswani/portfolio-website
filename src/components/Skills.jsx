import { motion } from 'framer-motion'
import './Skills.css'

const skillGroups = [
  {
    label: 'Backend',
    color: 'purple',
    skills: ['C#', 'ASP.NET Core', '.NET 6/7/8/9', 'Web API', 'ASP.NET MVC', 'Entity Framework Core', 'LINQ', 'Hangfire'],
  },
  {
    label: 'Frontend & Database',
    color: 'cyan',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SQL Server', 'PostgreSQL', 'Query Optimization'],
  },
  {
    label: 'Architecture & Patterns',
    color: 'purple',
    skills: ['SOLID Principles', 'Clean Architecture', 'Dependency Injection', 'Repository Pattern', 'Caching', 'Design Patterns'],
  },
  {
    label: 'Integrations & Cloud',
    color: 'cyan',
    skills: ['Razorpay', 'OAuth2', 'JWT', 'Google Analytics 4', 'SMTP', 'Cloudflare'],
  },
  {
    label: 'Tools & Practices',
    color: 'purple',
    skills: ['Docker', 'Git', 'GitHub Actions', 'NopCommerce', 'AI-Assisted Development', 'Agile Scrum'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp}>
            <p className="section-label">Skills</p>
            <h2 className="section-title">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="section-subtitle">
              A well-rounded stack spanning back-end services, front-end UIs, databases, and third-party integrations.
            </p>
          </motion.div>

          <div className="skills__grid">
            {skillGroups.map(({ label, color, skills }) => (
              <motion.div
                key={label}
                className={`card skills__group skills__group--${color}`}
                variants={fadeUp}
                whileHover={{ y: -4 }}
              >
                <div className={`skills__group-header skills__group-header--${color}`}>
                  <span className="skills__group-label">{label}</span>
                  <span className="skills__group-count">{skills.length}</span>
                </div>
                <div className="skills__tags">
                  {skills.map(skill => (
                    <span key={skill} className={`tag tag-${color}`}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
