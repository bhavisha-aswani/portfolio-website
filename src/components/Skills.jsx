import { motion } from 'framer-motion'
import './Skills.css'

const skillGroups = [
  {
    label: 'Backend',
    color: 'purple',
    skills: ['C#', 'ASP.NET Core', 'Web API', 'MVC', 'Entity Framework', 'LINQ', 'Web Services', '.NET 9'],
  },
  {
    label: 'Frontend',
    color: 'cyan',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'jQuery', 'Ajax'],
  },
  {
    label: 'Database',
    color: 'purple',
    skills: ['MS SQL Server', 'Stored Procedures', 'Query Optimization', 'Schema Design'],
  },
  {
    label: 'Payments & APIs',
    color: 'cyan',
    skills: ['Razorpay (Subscriptions & Webhooks)', 'Adumo Payment Gateway', 'Google Analytics 4 (GA4)', 'JWT Authentication', 'SMTP / Email APIs', 'UserJot', 'Emailable API'],
  },
  {
    label: 'Tools & DevOps',
    color: 'purple',
    skills: ['AI-Assisted Development', 'Cursor', 'Codex', 'Git', 'Azure Repos', 'SVN', 'Postman', 'Visual Studio', 'Cloudflare'],
  },
  {
    label: 'E-Commerce Modules',
    color: 'neutral',
    skills: ['NopCommerce Plugin Dev', 'Custom Checkout Flows', 'Multi-store Config', 'Payment Providers', 'Shipping Rules'],
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
