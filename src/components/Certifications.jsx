import { motion } from 'framer-motion'
import { ExternalLink, Award } from 'lucide-react'
import './Certifications.css'

const certs = [
  {
    id: 'claude',
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    year: '2026',
    tag: 'AI Development',
    tagColor: 'purple',
    desc: 'Hands-on course covering simple prompts to long-running, autonomous, and reliable AI-assisted development workflows.',
    url: 'https://verify.skilljar.com/c/khfamtk2c9ft', // add your certificate URL here
  },
  {
    id: 'ai-agentic',
    title: 'AI Engineer Agentic Track — Agent & MCP Course',
    issuer: 'Udemy',
    year: '2026',
    tag: 'AI & Agents',
    tagColor: 'cyan',
    desc: 'Deep dive into AI agents, Model Context Protocol (MCP), and building autonomous AI workflows.',
    url: 'https://www.udemy.com/certificate/UC-88d888bd-2fbe-4d0e-b414-2512f2b2ae48/', // add your Udemy certificate URL here
  },
  {
    id: 'docker',
    title: 'Fundamentals of Docker & Kubernetes',
    issuer: 'Scalar',
    year: '2026',
    tag: 'DevOps',
    tagColor: 'purple',
    desc: 'Containerisation fundamentals — Docker images, containers, volumes, and Kubernetes orchestration basics.',
    url: 'https://moonshot.scaler.com/s/sl/nHopNQ936z', // add your Scalar certificate URL here
  },
  {
    id: 'microsoft',
    title: 'Microsoft Learn Achievements & Badges',
    issuer: 'Microsoft',
    year: '2026',
    tag: 'Cloud & .NET',
    tagColor: 'cyan',
    desc: 'Earned multiple Microsoft Learn badges covering Azure fundamentals, .NET development, and cloud architecture.',
    url: 'https://learn.microsoft.com/en-us/users/bhavishaaswani-0992/', // add your Microsoft Learn profile URL here
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Certifications() {
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Header */}
          <motion.div variants={fadeUp}>
            <p className="section-label">Learning & Growth</p>
            <h2 className="section-title">
              Always <span className="gradient-text">picking up something new</span>
            </h2>
            <p className="section-subtitle">
              Certifications I've completed — mostly because AI tooling and DevOps are moving fast
              and I'd rather keep up than catch up.
            </p>
          </motion.div>

          {/* Cert Grid */}
          <motion.div className="certs__grid" variants={fadeUp}>
            {certs.map((cert, i) => (
              <motion.div
                key={cert.id}
                className="cert__card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                whileHover={{ y: -4 }}
              >
                {/* Top row */}
                <div className="cert__top">
                  <div className={`cert__icon cert__icon--${cert.tagColor}`}>
                    <Award size={18} />
                  </div>
                  <span className={`tag tag-${cert.tagColor}`}>{cert.tag}</span>
                </div>

                {/* Content */}
                <h3 className="cert__title">{cert.title}</h3>
                <div className="cert__meta">
                  <span className="cert__issuer">{cert.issuer}</span>
                  <span className="cert__dot">·</span>
                  <span className="cert__year">{cert.year}</span>
                </div>
                <p className="cert__desc">{cert.desc}</p>

                {/* Link */}
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert__link"
                    id={`cert-verify-${cert.id}`}
                  >
                    <ExternalLink size={13} />
                    <span>View Certificate</span>
                  </a>
                ) : (
                  <div className="cert__link cert__link--placeholder">
                    <Award size={13} />
                    <span>Completed</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
