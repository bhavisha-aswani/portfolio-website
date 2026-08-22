import { Mail } from 'lucide-react'
import './Footer.css'

function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="divider" />
      <div className="container footer__inner">
        <p className="footer__copy">© {year} Bhavisha Aswani</p>

        <p className="footer__tech">
          Built with <strong>React.js</strong>, <strong>Vite</strong> &amp; <strong>Framer Motion</strong>
        </p>

        <div className="footer__right">
          <a
            href="mailto:aswani.bhavisha@gmail.com"
            id="footer-email"
            className="footer__social"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/aswani-bhavisha/"
            id="footer-linkedin"
            className="footer__social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
