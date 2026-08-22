import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import './Hero.css'

function LinkedInIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

const techBadges = [
  { label: 'C#',                     color: 'purple' },
  { label: 'ASP.NET Core',           color: 'purple' },
  { label: 'React.js',               color: 'cyan'   },
  { label: 'SQL Server',             color: 'purple' },
  { label: 'Razorpay',               color: 'cyan'   },
  { label: 'AI-Assisted Development',color: 'purple' },
  { label: 'REST API',               color: 'cyan'   },
  { label: 'Agile Scrum',            color: 'purple' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="hero">
      {/* Ambient glow blobs */}
      <div className="hero__glow hero__glow--purple" aria-hidden />
      <div className="hero__glow hero__glow--cyan"   aria-hidden />

      <div className="container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Greeting Tag */}
          <motion.div className="hero__greeting-pill" variants={itemVariants}>
            <span>👋 Hi, welcome to my portfolio</span>
          </motion.div>

          {/* Role Title */}
          <motion.h1 className="hero__title" variants={itemVariants}>
            <span className="gradient-text">Senior .NET &amp; Full-Stack Developer</span>
          </motion.h1>

          <motion.p className="hero__subtitle" variants={itemVariants}>
            5+ years building scalable full-stack solutions with{' '}
            <strong>ASP.NET Core</strong>, <strong>C#</strong>, and <strong>React</strong>.{' '}
            Leveraging <em>AI-assisted development</em> workflows to deliver high-quality code for
            international clients across <em>California, South Africa &amp; the UK</em>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="hero__actions" variants={itemVariants}>
            <a
              href="#projects"
              id="hero-view-projects"
              className="btn btn-primary"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/aswani-bhavisha/"
              id="hero-linkedin"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
            <a
              href="mailto:aswani.bhavisha@gmail.com"
              id="hero-email"
              className="btn btn-ghost"
            >
              <Mail size={16} />
              Email Me
            </a>
          </motion.div>

          {/* Tech Badges */}
          <motion.div className="hero__badges" variants={itemVariants}>
            {techBadges.map(({ label, color }) => (
              <span key={label} className={`tag tag-${color}`}>{label}</span>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div className="hero__stats" variants={itemVariants}>
            {[
              { value: '5+',   label: 'Years Experience' },
              { value: '10+',  label: 'Projects Delivered' },
              { value: '3',    label: 'Countries Served' },
              { value: '100%', label: 'On-Time Delivery' },
            ].map(({ value, label }) => (
              <div key={label} className="hero__stat">
                <span className="hero__stat-value gradient-text">{value}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        className="hero__scroll-hint"
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.8, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to About"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  )
}
