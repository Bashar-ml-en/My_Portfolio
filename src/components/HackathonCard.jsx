import { useState } from 'react'
import { Badge, Button, GlassCard, Pill } from './Primitives.jsx'

export function HackathonCard({ hackathon, index }) {
  const [expanded, setExpanded] = useState(false)
  const [activeStepIndex, setActiveStepIndex] = useState(0)

  const detailsId = `hackathon-details-${hackathon.id}`

  return (
    <GlassCard
      as="article"
      className={`hackathon-card cursor-glow ${hackathon.id === 'autoguard-ai' ? 'hackathon-card-spotlight' : ''}`}
      style={{ '--stagger': `${index * 80}ms` }}
    >
      {/* Topline Badges */}
      <div className="hackathon-card-header">
        <div className="hackathon-badge-group">
          <span className="hackathon-event-badge" style={{ background: hackathon.badgeColor }}>
            🏆 {hackathon.hackathon}
          </span>
          <span className="hackathon-track-badge">
            {hackathon.track}
          </span>
        </div>
      </div>

      {/* Main Title & Tagline */}
      <div className="hackathon-headline">
        <h3>{hackathon.title}</h3>
        <p className="hackathon-tagline">{hackathon.tagline}</p>
      </div>

      {/* Metrics Row */}
      <div className="hackathon-metrics-row">
        {hackathon.metrics.map((m) => (
          <div className="hackathon-metric-chip" key={m.label}>
            <span className="metric-chip-value">{m.value}</span>
            <span className="metric-chip-label">{m.label}</span>
          </div>
        ))}
      </div>

      {/* Problem & Solution Quick Grid */}
      <div className="hackathon-challenge-grid">
        <div className="challenge-col problem-col">
          <span className="challenge-label">🚨 THE CRISIS / PROBLEM</span>
          <p>{hackathon.problem}</p>
        </div>
        <div className="challenge-col solution-col">
          <span className="challenge-label">💡 THE AI AGENT SOLUTION</span>
          <p>{hackathon.solution}</p>
        </div>
      </div>

      {/* Hackathon Event Photo Showcase if present */}
      {hackathon.image && (
        <div className="hackathon-photo-wrapper">
          <div className="hackathon-photo-container">
            <img
              src={hackathon.image}
              alt={hackathon.imageCaption || hackathon.title}
              className="hackathon-photo"
              loading="lazy"
              decoding="async"
            />
            {hackathon.imageCaption && (
              <div className="hackathon-photo-overlay">
                <span>{hackathon.imageCaption}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Operating Workflow Visualizer */}
      <div className="hackathon-operating-container">
        <div className="operating-header">
          <h4>⚙️ OPERATING WORKFLOW & MULTI-STAGE PIPELINE</h4>
          <span className="operating-step-counter">
            Stage {hackathon.operatingWorkflow[activeStepIndex]?.step} of {String(hackathon.operatingWorkflow.length).padStart(2, '0')}
          </span>
        </div>

        {/* Step Buttons Ribbon */}
        <div className="operating-steps-ribbon" role="tablist" aria-label={`${hackathon.title} workflow stages`}>
          {hackathon.operatingWorkflow.map((step, sIdx) => {
            const isActive = activeStepIndex === sIdx
            return (
              <button
                key={step.step}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`step-selector-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveStepIndex(sIdx)}
              >
                <span className="step-btn-num">{step.step}</span>
                <span className="step-btn-icon">{step.icon}</span>
                <span className="step-btn-title">{step.title}</span>
              </button>
            )
          })}
        </div>

        {/* Active Step Operating Detail Box */}
        {hackathon.operatingWorkflow[activeStepIndex] && (
          <div className="active-step-card" aria-live="polite">
            <div className="active-step-header">
              <span className="active-step-icon">
                {hackathon.operatingWorkflow[activeStepIndex].icon}
              </span>
              <div>
                <span className="active-step-num">STAGE {hackathon.operatingWorkflow[activeStepIndex].step}</span>
                <h5>{hackathon.operatingWorkflow[activeStepIndex].title}</h5>
              </div>
            </div>
            <p className="active-step-desc">
              {hackathon.operatingWorkflow[activeStepIndex].desc}
            </p>
          </div>
        )}
      </div>

      {/* Tech Stack Tags */}
      <div className="hackathon-tech-row" aria-label="Technologies used">
        {hackathon.techStack.map((tech) => (
          <Pill key={tech}>{tech}</Pill>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="hackathon-actions">
        {hackathon.liveDemo && (
          <Button href={hackathon.liveDemo} target="_blank" rel="noreferrer" variant="primary">
            ⚡ Live Interactive Demo
          </Button>
        )}
        <Button href={hackathon.repoUrl} target="_blank" rel="noreferrer" variant="ghost">
          📦 GitHub Repository
        </Button>
        <Button
          as="button"
          type="button"
          variant="plain"
          aria-expanded={expanded}
          aria-controls={detailsId}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? '▲ Hide Full Architecture' : '▼ View Architecture DAG & Features'}
        </Button>
      </div>

      {/* Expandable Architecture and Features */}
      {expanded && (
        <div className="hackathon-expanded-panel" id={detailsId}>
          <div className="architecture-box">
            <span className="box-label">&gt; SYSTEM ARCHITECTURE DAG</span>
            <code>{hackathon.architectureDAG}</code>
          </div>

          <div className="features-box">
            <span className="box-label">KEY CAPABILITIES & PROVEN INNOVATION</span>
            <ul>
              {hackathon.keyCapabilities.map((feat) => (
                <li key={feat}>{feat}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </GlassCard>
  )
}
