import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import './Projects.css'

const projects = [
  {
    id: 'picxly',
    title: 'Picxly',
    category: 'SaaS · Full-Stack',
    tags: ['Full-Stack', 'SaaS'],
    tech: ['ASP.NET Core', 'React.js', 'Razorpay', 'SQL Server', 'Webhooks', 'UserJot'],
    desc: 'AI-powered post-photography workflow platform for event & wedding photographers. Collapses AI culling and face-recognition gallery delivery into one product.',
    highlights: [
      'Built and maintained the React.js admin panel for Owner.',
      'Implemented Razorpay subscription flow integration with recurring payments & webhooks.',
    ],
    client: 'Picxly',
    url: 'https://portal.picxly.app/',
    color: 'purple',
    featured: true,
  },
  {
    id: 'annique',
    title: 'Annique Rooibos',
    category: 'E-Commerce · Multi-store',
    tags: ['Full-Stack', 'E-Commerce', 'API Integration'],
    tech: ['ASP.NET Core', 'C#', 'SQL Server', 'SMS API', 'Cloudflare', 'Emailable API'],
    desc: 'South African skincare & wellness e-commerce platform. Led solo from start to finish over 3.5 years — owning full delivery including architecture, development, and client communication.',
    highlights: [
      'Engineered multi-store architecture with role-based restrictions & custom shipping rules',
      'Integrated third-party APIs for pickup stores, SMS OTP reset, Emailable validation & Cloudflare security',
    ],
    client: 'South Africa',
    url: 'https://annique.com/',
    color: 'cyan',
    featured: true,
  },
  {
    id: 'sixtel',
    title: 'Sixtel — SIM Purchase Platform',
    category: '.NET MVC · Web App',
    tags: ['Full-Stack'],
    tech: ['.NET 9 MVC', 'C#', 'SQL Server', 'jQuery', 'SMTP'],
    desc: 'Full-stack web application for eSIM / SIM plan management, catalog browsing, and purchase workflows.',
    highlights: [
      'Built interactive catalog for regional plan selection and user purchase history tracking',
      'Implemented tokenized SMTP password recovery and secure authentication flows',
    ],
    client: 'Client Project',
    color: 'purple',
    featured: true,
  },
  {
    id: 'adumo',
    title: 'Adumo Payment Plugin',
    category: 'Payment Integration',
    tags: ['Payment', 'API Integration'],
    tech: ['ASP.NET Core', 'C#', 'JWT', 'REST API'],
    desc: 'Custom payment plugin for the Namibia store with hosted payment page integration using JWT authentication.',
    highlights: [],
    client: 'Namibia Store',
    color: 'purple',
    featured: false,
  },
  {
    id: 'holypay',
    title: 'HolyPay Donation Plugin',
    category: 'API Integration',
    tags: ['Payment', 'API Integration'],
    tech: ['ASP.NET Core', 'C#', 'HolyPay API', 'REST API'],
    desc: 'Donation processing plugin enabling seamless donation flows with automatic merchant-based triggering.',
    highlights: [],
    client: 'UK Client',
    url: 'https://www.myjlight.com/',
    color: 'cyan',
    featured: false,
  },
  {
    id: 'ga4',
    title: 'Google Analytics Report Plugin',
    category: 'Analytics · API Integration',
    tags: ['API Integration'],
    tech: ['ASP.NET Core', 'GA4 Data API', 'Google Console', 'Postman'],
    desc: 'NopCommerce plugin providing GA4 analytics reporting directly inside the admin panel via Google Analytics Data API.',
    highlights: [],
    client: 'Multiple Clients',
    color: 'purple',
    featured: false,
  },
  {
    id: 'razorpay-plugin',
    title: 'Razorpay Checkout Plugin',
    category: 'Payment Integration',
    tags: ['Payment'],
    tech: ['ASP.NET Core', 'C#', 'Razorpay API'],
    desc: 'Custom Razorpay plugin with hosted checkout integration and automated order payment status updates.',
    highlights: [],
    client: 'E-Commerce Client',
    color: 'cyan',
    featured: false,
  },
  {
    id: 'shopbwfund',
    title: 'Shopbwfund — Seller Reports',
    category: 'E-Commerce · Reporting',
    tags: ['E-Commerce'],
    tech: ['ASP.NET Core', 'C#', 'SQL Server', 'Excel Export'],
    desc: 'NopCommerce plugin for tracking checkout seller data and generating downloadable seller-wise sales reports.',
    highlights: [],
    client: 'E-Commerce Client',
    color: 'cyan',
    featured: false,
  },
  {
    id: 'onp-gps',
    title: 'ONP / GPS Theme Suite',
    category: 'E-Commerce · Theme',
    tags: ['E-Commerce'],
    tech: ['ASP.NET Core', 'C#', 'NopCommerce 4.6', 'HTML', 'CSS'],
    desc: 'A suite of NopCommerce plugins for Overnight Prints and Global Print Sites including custom storefront theme, carousel, catalog, product tabs, and testimonials.',
    highlights: [],
    client: 'Print Industry · USA',
    url: 'https://www.overnightprints.com/',
    color: 'purple',
    featured: false,
  },
]

const filterOptions = ['All', 'Full-Stack', 'SaaS', 'Payment', 'E-Commerce', 'API Integration']

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const isFiltering = filter !== 'All'
  const filtered = isFiltering
    ? projects.filter(p => p.tags.includes(filter))
    : projects

  const featured  = filtered.filter(p => p.featured)
  const extras    = filtered.filter(p => !p.featured)
  const displayed = isFiltering ? filtered : (showAll ? filtered : featured)

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {/* Section Header */}
          <motion.div variants={fadeUp}>
            <p className="section-label">Projects</p>
            <h2 className="section-title">
              Things I've <span className="gradient-text">built & shipped</span>
            </h2>
            <p className="section-subtitle">
              A selection of projects across SaaS platforms, payment integrations, and full-stack web applications.
            </p>
          </motion.div>

          {/* Filter bar */}
          <motion.div className="projects__filters" variants={fadeUp}>
            {filterOptions.map(opt => (
              <button
                key={opt}
                id={`filter-${opt.toLowerCase().replace(/\s/g, '-')}`}
                className={`projects__filter-btn ${filter === opt ? 'projects__filter-btn--active' : ''}`}
                onClick={() => setFilter(opt)}
              >
                {opt}
              </button>
            ))}
          </motion.div>

          {/* Project Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter + showAll}
              className="projects__grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {displayed.map((project, i) => (
                <motion.div
                  key={project.id}
                  className={`card project-card project-card--${project.color} ${project.featured ? 'project-card--featured' : ''}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Top */}
                  <div className="project-card__top">
                    <div className="project-card__header">
                      <div>
                        <div className="project-card__category">{project.category}</div>
                        <h3 className="project-card__title">{project.title}</h3>
                      </div>
                      {project.featured && (
                        <span className="project-card__featured-badge">Featured</span>
                      )}
                    </div>

                    <p className="project-card__desc">{project.desc}</p>
                  </div>

                  {/* Bottom */}
                  <div className="project-card__bottom">
                    <div className="project-card__tech">
                      {project.tech.map(t => (
                        <span key={t} className="tag tag-neutral">{t}</span>
                      ))}
                    </div>

                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__client-link"
                        title={`Visit ${project.title} live site (${project.url})`}
                      >
                        <ExternalLink size={13} />
                        <span>{project.client} · Visit Site ↗</span>
                      </a>
                    ) : (
                      <div className="project-card__client">
                        <ExternalLink size={12} />
                        <span>{project.client}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Show more / less — only when not filtering */}
          {!isFiltering && extras.length > 0 && (
            <motion.div
              className="projects__show-more"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <button
                id="projects-toggle"
                className="projects__show-more-btn"
                onClick={() => setShowAll(v => !v)}
              >
                {showAll ? (
                  <><ChevronUp size={16} /> Show less</>
                ) : (
                  <><ChevronDown size={16} /> View {extras.length} more projects</>
                )}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
