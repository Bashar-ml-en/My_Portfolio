import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatedCounter } from './components/AnimatedCounter.jsx'
import { BackToTop } from './components/BackToTop.jsx'
import { GitHubStats } from './components/GitHubStats.jsx'
import { ProfilePhoto } from './components/ProfilePhoto.jsx'
import { Button, GlassCard, PipelineMotif, SectionHeading } from './components/Primitives.jsx'
import { ProjectCard } from './components/ProjectCard.jsx'
import { ScrollProgress } from './components/ScrollProgress.jsx'
import { TypeWriter } from './components/TypeWriter.jsx'
import { githubStatsUrl, profile } from './data/profile.ts'
import { filters, projects } from './data/projects.ts'
import { skillGroups } from './data/skills.ts'

/* ── SVG icons ────────────────────────────────────────────── */
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

/* ── Active section tracker hook ──────────────────────────── */
function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5] },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}

/* ── Main App ─────────────────────────────────────────────── */
function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [menuOpen, setMenuOpen] = useState(false)

  const sectionIds = useMemo(() => profile.nav.map((item) => item.href.replace('#', '')), [])
  const activeSection = useActiveSection(sectionIds)

  const visibleProjects = useMemo(() => {
    const filtered = activeFilter === 'All' ? projects : projects.filter((project) => project.filter === activeFilter)
    return [...filtered].sort((a, b) => Number(Boolean(b.flagship)) - Number(Boolean(a.flagship)))
  }, [activeFilter])

  /* Reveal-on-scroll */
  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll('.reveal'))
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add('visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 },
    )

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [activeFilter])

  /* Close mobile menu on nav click */
  const handleNavClick = useCallback(() => {
    setMenuOpen(false)
  }, [])

  /* Close mobile menu on escape */
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    if (menuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <ScrollProgress />

      {/* ─── Header ─── */}
      <header className="site-header">
        <a className="brand-mark" href="#hero" aria-label={`${profile.name} portfolio home`}>
          <span>{profile.ui.brandInitial}</span>
          <strong>{profile.name}</strong>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />}

        <nav aria-label="Portfolio navigation" className={menuOpen ? 'nav-open' : ''}>
          {profile.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.replace('#', '') ? 'nav-active' : ''}
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resumePath}
            download
            className="nav-resume-btn"
            onClick={handleNavClick}
          >
            <DownloadIcon /> Resume
          </a>
        </nav>
      </header>

      {/* ─── Main ─── */}
      <main className="portfolio-shell">

        {/* Hero */}
        <section className="hero-section reveal" id="hero" aria-labelledby="hero-title">
          <PipelineMotif className="hero-motif" />
          <div className="hero-orb hero-orb-cyan" aria-hidden="true" />
          <div className="hero-orb hero-orb-blue" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-content">
            <p className="eyebrow">{profile.hero.eyebrow}</p>
            <h1 id="hero-title">{profile.hero.headline}</h1>
            <p className="subtitle">{profile.hero.subtitle}</p>
            <TypeWriter phrases={profile.hero.typingPhrases} />
            <p className="intro-copy">{profile.hero.intro}</p>
            <div className="hero-actions">
              <Button href="#projects">{profile.hero.primaryCta}</Button>
              <Button href={profile.github} target="_blank" rel="noreferrer" variant="ghost">
                {profile.hero.secondaryCta}
              </Button>
              <Button href={profile.resumePath} download variant="ghost" className="resume-btn">
                <DownloadIcon /> {profile.hero.resumeCta}
              </Button>
            </div>
            <div className="hero-social-row">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-icon-link" aria-label="LinkedIn profile">
                <LinkedInIcon />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="social-icon-link" aria-label="GitHub profile">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href={`mailto:${profile.email}`} className="social-icon-link" aria-label="Send email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
              </a>
              <a href={`tel:${profile.phone}`} className="social-icon-link" aria-label="Call phone">
                <PhoneIcon />
              </a>
            </div>
          </div>

          <div className="hero-right">
            <ProfilePhoto src="/profile-photo.jpeg" alt={`${profile.name} — ${profile.title}`} />
            <GlassCard as="aside" className="hero-console" aria-label="Portfolio system summary">
              <div className="console-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="console-body">
                <p className="console-kicker">{profile.ui.consoleKicker}</p>
                <h2>{profile.ui.consoleTitle}</h2>
                <dl>
                  {profile.ui.consoleRows.map((row) => (
                    <div key={row.term}>
                      <dt>{row.term}</dt>
                      <dd>{row.detail}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Proof Stats */}
        <section className="proof-strip reveal" aria-label="Portfolio proof metrics">
          {profile.proofStats.map((stat, index) => (
            <article key={stat.label} style={{ '--stagger': `${index * 60}ms` }}>
              <AnimatedCounter value={stat.numeric} suffix={stat.suffix || ''} />
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        {/* About */}
        <section className="section-panel about-section reveal" id="about" aria-labelledby="about-title">
          <div className="section-copy">
            <p className="section-label">{profile.sections.about.label}</p>
            <h2 id="about-title">{profile.sections.about.title}</h2>
            <p>{profile.bio}</p>
          </div>
          <GitHubStats
            src={githubStatsUrl}
            alt={profile.ui.githubStatsAlt}
            fallbackTitle={profile.ui.githubStatsFallbackTitle}
            fallbackText={profile.ui.githubStatsFallbackText}
          />
        </section>

        {/* Systems */}
        <section className="section-panel systems-section reveal" id="systems" aria-labelledby="systems-title">
          <SectionHeading label={profile.sections.systems.label} title={profile.sections.systems.title} />
          <PipelineMotif compact className="section-divider-motif" />
          <div className="capability-grid">
            {profile.capabilities.map((capability, index) => (
              <GlassCard as="article" className="capability-card" key={capability.title} style={{ '--stagger': `${index * 60}ms` }}>
                <span className="capability-icon">{capability.icon}</span>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section className="section-panel stack-section reveal" id="stack" aria-labelledby="stack-title">
          <SectionHeading
            split
            label={profile.sections.stack.label}
            title={profile.sections.stack.title}
            text={profile.sections.stack.text}
          />
          <div className="skill-groups" aria-label="Grouped technical skills">
            {skillGroups.map((group, groupIndex) => (
              <GlassCard as="article" className="skill-group" key={group.category} style={{ '--stagger': `${groupIndex * 60}ms` }}>
                <h3>{group.category}</h3>
                <div className="badge-row">
                  {group.items.map((item, itemIndex) => (
                    <span
                      className="skill-badge"
                      style={{
                        '--stagger': `${itemIndex * 60}ms`,
                        '--brand-color': item.color,
                      }}
                      key={item.name}
                    >
                      <span className="skill-icon" aria-hidden="true">{item.icon}</span>
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="section-panel projects-section reveal" id="projects" aria-labelledby="projects-title">
          <SectionHeading
            split
            label={profile.sections.projects.label}
            title={profile.sections.projects.title}
            text={profile.sections.projects.text}
          />
          <div className="filter-row" aria-label="Project category filters">
            {filters.map((filter) => (
              <button
                className={filter === activeFilter ? 'filter-button active' : 'filter-button'}
                key={filter}
                type="button"
                aria-pressed={filter === activeFilter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="project-grid" aria-live="polite">
            {visibleProjects.map((project, index) => (
              <ProjectCard project={project} labels={profile.ui} index={index} key={project.repo} />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="contact-section reveal" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="section-label">{profile.sections.contact.label}</p>
            <h2 id="contact-title">{profile.sections.contact.title}</h2>
            <p>{profile.sections.contact.text}</p>
          </div>

          <GlassCard className="contact-card" aria-label="Contact details">
            <div className="contact-card-header">
              <div className="contact-photo-ring">
                <img src="/profile-photo.jpeg" alt={`${profile.name} — ${profile.title}`} className="contact-photo" width="100" height="100" loading="lazy" decoding="async" />
              </div>
              <div className="contact-card-identity">
                <h3>{profile.name}</h3>
                <p>{profile.title}</p>
              </div>
            </div>

            <dl className="contact-details-list">
              <div>
                <dt>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg>
                  EMAIL
                </dt>
                <dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd>
              </div>
              <div>
                <dt>
                  <PhoneIcon />
                  PHONE
                </dt>
                <dd><a href={`tel:${profile.phone}`}>{profile.phone}</a></dd>
              </div>
              <div>
                <dt>
                  <LinkedInIcon />
                  LINKEDIN
                </dt>
                <dd><a href={profile.linkedin} target="_blank" rel="noreferrer">bashar-ibrahem</a></dd>
              </div>
              <div>
                <dt>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                  GITHUB
                </dt>
                <dd><a href={profile.github} target="_blank" rel="noreferrer">Bashar-ml-en</a></dd>
              </div>
              <div>
                <dt>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  LOCATION
                </dt>
                <dd>{profile.location}</dd>
              </div>
              <div className="contact-status-row">
                <dt>
                  <span className="status-dot" aria-hidden="true" />
                  STATUS
                </dt>
                <dd>Open to Opportunities</dd>
              </div>
            </dl>

            <div className="contact-card-actions">
              <Button href={profile.resumePath} download variant="primary" className="resume-btn">
                <DownloadIcon /> <span style={{ marginLeft: 8 }}>Download Resume</span>
              </Button>
              <Button href={`mailto:${profile.email}`} variant="ghost">
                Hire Me
              </Button>
            </div>
          </GlassCard>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="site-footer">
        <p>{profile.ui.footer}</p>
        <nav aria-label="Footer navigation">
          {profile.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-social">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </footer>

      <BackToTop />
    </>
  )
}

export default App
