import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import './Contact.css'

function LinkedInIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="contact__header">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">
              Let's <span className="gradient-text">connect</span>
            </h2>
            <p className="section-subtitle">
              Whether it's a collaboration, a technical discussion, or just a hello —
              feel free to reach out. I'm always happy to connect.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div className="contact__cards" variants={fadeUp}>
            {/* Email */}
            <motion.a
              href="mailto:aswani.bhavisha@gmail.com"
              id="contact-email-card"
              className="card contact__card contact__card--email"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="contact__card-icon contact__card-icon--purple">
                <Mail size={24} />
              </div>
              <div className="contact__card-content">
                <h3 className="contact__card-title">Send an Email</h3>
                <p className="contact__card-value">aswani.bhavisha@gmail.com</p>
                <p className="contact__card-hint">Best for project enquiries &amp; collaboration</p>
              </div>
              <div className="contact__card-arrow">→</div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/aswani-bhavisha/"
              id="contact-linkedin-card"
              className="card contact__card contact__card--linkedin"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="contact__card-icon contact__card-icon--cyan">
                <LinkedInIcon size={24} />
              </div>
              <div className="contact__card-content">
                <h3 className="contact__card-title">Connect on LinkedIn</h3>
                <p className="contact__card-value">linkedin.com/in/aswani-bhavisha</p>
                <p className="contact__card-hint">Let's connect professionally</p>
              </div>
              <div className="contact__card-arrow">→</div>
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
