import { useEffect, useRef, useState } from 'react'
import { Badge, Button, GlassCard, Pill, PipelineMotif } from './Primitives.jsx'
import { getTechMeta } from '../data/skills.ts'

function useCountUp(metrics, active) {
  const [values, setValues] = useState(() => metrics?.map(() => 0) ?? [])

  useEffect(() => {
    if (!metrics?.length || !active) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setValues(metrics.map((metric) => metric.value))
      return
    }

    let animationFrame = 0
    const start = performance.now()
    const duration = 900

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValues(metrics.map((metric) => Number((metric.value * eased).toFixed(2))))
      if (progress < 1) animationFrame = requestAnimationFrame(tick)
    }

    animationFrame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animationFrame)
  }, [active, metrics])

  return values
}

export function ProjectCard({ project, labels, index }) {
  const [expanded, setExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)
  const metricValues = useCountUp(project.metrics, isVisible)

  useEffect(() => {
    const node = cardRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const handlePointerMove = (event) => {
    const node = cardRef.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    node.style.setProperty('--glow-x', `${event.clientX - rect.left}px`)
    node.style.setProperty('--glow-y', `${event.clientY - rect.top}px`)
  }

  const toggleExpanded = () => setExpanded((current) => !current)
  const handleCardClick = (event) => {
    if (event.target.closest('a, button')) return
    toggleExpanded()
  }
  const detailsId = `project-details-${project.repo.replace(/[^a-zA-Z0-9]/g, '-')}`

  return (
    <GlassCard
      as="article"
      ref={cardRef}
      className={`project-card cursor-glow ${project.flagship ? 'flagship-card' : ''}`}
      style={{ '--stagger': `${index * 60}ms` }}
      onPointerMove={handlePointerMove}
      onClick={handleCardClick}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          toggleExpanded()
        }
      }}
      aria-expanded={expanded}
      aria-controls={detailsId}
    >
      <div className="project-card-topline">
        <Badge>{project.category}</Badge>
        {project.status && <Badge className="badge-status">{project.status}</Badge>}
        {project.flagship && <Badge className="badge-strong">Flagship System</Badge>}
      </div>

      <div className="timeline-preview" aria-label={`${project.title} pipeline visualization`}>
        <PipelineMotif compact />
      </div>

      <h3>{project.title}</h3>
      <p className="project-desc">{project.description}</p>

      {project.metrics && (
        <div className="metric-row" aria-label={`${project.title} metrics`}>
          {project.metrics.map((metric, metricIndex) => (
            <span key={metric.label}>
              <strong>{metricValues[metricIndex]?.toFixed(metric.value % 1 === 0 ? 0 : 2)}</strong>
              {metric.suffix} {metric.label}
            </span>
          ))}
        </div>
      )}

      <div className="tech-pills" aria-label={`${project.title} technologies`}>
        {project.tech.map((item) => {
          const meta = getTechMeta(item)
          return (
            <Pill key={item} color={meta.color} icon={meta.icon}>
              {item}
            </Pill>
          )
        })}
      </div>

      <div className="project-actions">
        <Button href={`https://github.com/Bashar-ml-en/${project.repo}`} target="_blank" rel="noreferrer" variant="ghost">
          {labels.viewCodeLabel}
        </Button>
        {project.liveDemo && (
          <Button href={project.liveDemo} target="_blank" rel="noreferrer" variant="primary">
            {labels.liveDemoLabel}
          </Button>
        )}
        <Button
          as="button"
          type="button"
          variant="plain"
          aria-expanded={expanded}
          aria-controls={detailsId}
          onClick={toggleExpanded}
        >
          {expanded ? labels.collapseLabel : labels.expandLabel}
        </Button>
      </div>

      <div className={`project-details ${expanded ? 'expanded' : ''}`} id={detailsId} hidden={!expanded}>
        <p className="details-text">{project.details}</p>

        {project.architecture && (
          <div className="architecture-box">
            <span className="box-label">&gt; SYSTEM ARCHITECTURE</span>
            <code>{project.architecture}</code>
          </div>
        )}

        {project.features && (
          <div className="features-box">
            <span className="box-label">KEY SYSTEM FEATURES</span>
            <ul>
              {project.features.map((feat) => (
                <li key={feat}>{feat}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </GlassCard>
  )
}
