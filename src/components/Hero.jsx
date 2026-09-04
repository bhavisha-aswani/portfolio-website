import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import './Hero.css'

function LinkedInIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const techBadges = [
  { label: 'C#', color: 'purple' },
  { label: 'ASP.NET Core', color: 'purple' },
  { label: 'React.js', color: 'cyan' },
  { label: 'SQL Server', color: 'purple' },
  { label: 'Razorpay', color: 'cyan' },
  { label: 'AI-Assisted Dev', color: 'purple' },
  { label: 'REST API', color: 'cyan' },
  { label: 'Agile Scrum', color: 'purple' },
]

const codeLines = [
  { text: 'const developer = {', type: 'keyword' },
  { text: '  name:     "Bhavisha Aswani",', type: 'string' },
  { text: '  role:     "Senior .NET Dev",', type: 'string' },
  { text: '  stack:    ["C#", "React"],', type: 'array' },
  { text: '  continents:  3,', type: 'array' },
  { text: '  delivery: "100%",', type: 'string' },
  { text: '  aiEnabled: true,', type: 'bool' },
  { text: '  available: true', type: 'bool' },
  { text: '}', type: 'keyword' },
]

const leftVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)

  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  useEffect(() => {
    if (visibleLines >= codeLines.length) return
    const t = setTimeout(() => setVisibleLines(v => v + 1), 280)
    return () => clearTimeout(t)
  }, [visibleLines])

  return (
    <section id="hero" className="hero">
      <div className="hero__glow hero__glow--purple" aria-hidden />
      <div className="hero__glow hero__glow--cyan" aria-hidden />

      <div className="container">
        <div className="hero__layout">

          {/* ── Left column ────────────────────────────── */}
          <motion.div
            className="hero__content"
            variants={leftVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status tag */}
            <motion.div className="hero__status-tag" variants={itemVariants}>
              <span className="hero__status-dot" />
              <span>Open to Senior .NET &amp; Full-Stack roles</span>
            </motion.div>

            {/* Title */}
            <motion.h1 className="hero__title" variants={itemVariants}>
              <span className="gradient-text">Senior .NET &amp;</span>
              <br />
              <span className="gradient-text">Full-Stack Developer</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p className="hero__subtitle" variants={itemVariants}>
              I build things that work in production — 5 years of shipping real software
              for clients in <em>California, South Africa &amp; the UK</em>.
            </motion.p>

            {/* CTAs */}
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
                { value: '5+', label: 'Years Experience' },
                { value: '10+', label: 'Projects Delivered' },
                { value: '3', label: 'Countries Served' },
                { value: '100%', label: 'On-Time Delivery' },
              ].map(({ value, label }) => (
                <div key={label} className="hero__stat">
                  <span className="hero__stat-value gradient-text">{value}</span>
                  <span className="hero__stat-label">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right column — code terminal ───────────── */}
          <motion.div
            className="hero__terminal"
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Title bar */}
            <div className="terminal__bar">
              <span className="terminal__dot terminal__dot--red" />
              <span className="terminal__dot terminal__dot--yellow" />
              <span className="terminal__dot terminal__dot--green" />
              <span className="terminal__filename">developer.ts</span>
            </div>

            {/* Code body */}
            <div className="terminal__body" role="img" aria-label="Code snippet showing developer profile">
              {codeLines.map((line, i) => (
                <div
                  key={i}
                  className={`terminal__line ${i < visibleLines ? 'terminal__line--visible' : ''}`}
                >
                  <span className="terminal__ln">{i + 1}</span>
                  <span className={`terminal__code terminal__code--${line.type}`}>
                    {line.text}
                  </span>
                </div>
              ))}

              {/* Blinking cursor while typing */}
              {visibleLines < codeLines.length && (
                <div className="terminal__line terminal__line--visible">
                  <span className="terminal__ln">{visibleLines + 1}</span>
                  <span className="terminal__cursor">▋</span>
                </div>
              )}

              {/* Done indicator */}
              {visibleLines >= codeLines.length && (
                <div className="terminal__done">
                  <span className="terminal__prompt">$</span>
                  <span className="terminal__cursor">▋</span>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll hint */}
      <motion.button
        className="hero__scroll-hint"
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to About"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  )
}
