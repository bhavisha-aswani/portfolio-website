import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav id="navbar" className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#hero" className="navbar__logo" onClick={e => handleNav(e, '#hero')}>
          <span className="navbar__logo-text">
            Bhavisha <span className="gradient-text">Aswani</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`navbar__link ${activeSection === href.slice(1) ? 'navbar__link--active' : ''}`}
                onClick={e => handleNav(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar__mobile">
          <ul>
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`navbar__mobile-link ${activeSection === href.slice(1) ? 'active' : ''}`}
                  onClick={e => handleNav(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
