import { useEffect, useMemo, useState } from 'react'
import { GitHubStats } from './components/GitHubStats.jsx'
import { Button, GlassCard, PipelineMotif, SectionHeading } from './components/Primitives.jsx'
import { ProjectCard } from './components/ProjectCard.jsx'
import { githubStatsUrl, profile } from './data/profile.ts'
import { filters, projects } from './data/projects.ts'
import { skillGroups } from './data/skills.ts'

function App() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleProjects = useMemo(() => {
    const filtered = activeFilter === 'All' ? projects : projects.filter((project) => project.filter === activeFilter)
    return [...filtered].sort((a, b) => Number(Boolean(b.flagship)) - Number(Boolean(a.flagship)))
  }, [activeFilter])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined

    const intervalId = window.setInterval(() => {
      setPhraseIndex((currentIndex) => (currentIndex + 1) % profile.hero.typingPhrases.length)
    }, 2200)

    return () => window.clearInterval(intervalId)
  }, [])

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

  return (
    <>
      <header className="site-header">
        <a className="brand-mark" href="#hero" aria-label={`${profile.name} portfolio home`}>
          <span>{profile.ui.brandInitial}</span>
          <strong>{profile.name}</strong>
        </a>
        <nav aria-label="Portfolio navigation">
          {profile.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="portfolio-shell">
        <section className="hero-section reveal" id="hero" aria-labelledby="hero-title">
          <PipelineMotif className="hero-motif" />
          <div className="hero-orb hero-orb-cyan" aria-hidden="true" />
          <div className="hero-orb hero-orb-blue" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-content">
            <p className="eyebrow">{profile.hero.eyebrow}</p>
            <h1 id="hero-title">{profile.hero.headline}</h1>
            <p className="subtitle">{profile.hero.subtitle}</p>
            <p className="typing-line">
              <span>{profile.hero.typingPhrases[phraseIndex]}</span>
            </p>
            <p className="intro-copy">{profile.hero.intro}</p>
            <div className="hero-actions">
              <Button href="#projects">{profile.hero.primaryCta}</Button>
              <Button href={profile.github} target="_blank" rel="noreferrer" variant="ghost">
                {profile.hero.secondaryCta}
              </Button>
            </div>
          </div>

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
        </section>

        <section className="proof-strip reveal" aria-label="Portfolio proof metrics">
          {profile.proofStats.map((stat, index) => (
            <article key={stat.label} style={{ '--stagger': `${index * 60}ms` }}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

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

        <section className="section-panel systems-section reveal" id="systems" aria-labelledby="systems-title">
          <SectionHeading label={profile.sections.systems.label} title={profile.sections.systems.title} />
          <PipelineMotif compact className="section-divider-motif" />
          <div className="capability-grid">
            {profile.capabilities.map((capability, index) => (
              <GlassCard as="article" className="capability-card" key={capability.title} style={{ '--stagger': `${index * 60}ms` }}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </GlassCard>
            ))}
          </div>
        </section>

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
                    <span className="skill-badge" style={{ '--stagger': `${itemIndex * 60}ms` }} key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

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

        <section className="contact-section reveal" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="section-label">{profile.sections.contact.label}</p>
            <h2 id="contact-title">{profile.sections.contact.title}</h2>
            <p>{profile.sections.contact.text}</p>
          </div>
          <div className="contact-links">
            <Button href={`mailto:${profile.email}`}>{profile.email}</Button>
            <Button href={profile.github} target="_blank" rel="noreferrer" variant="ghost">
              {profile.github.replace('https://', '')}
            </Button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>{profile.ui.footer}</p>
        <nav aria-label="Footer navigation">
          {profile.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </footer>
    </>
  )
}

export default App
