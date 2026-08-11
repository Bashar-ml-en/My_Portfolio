import { forwardRef } from 'react'

export const GlassCard = forwardRef(function GlassCard(
  { as: Component = 'div', className = '', children, ...props },
  ref,
) {
  return (
    <Component ref={ref} className={`glass-card ${className}`.trim()} {...props}>
      {children}
    </Component>
  )
})

export function Badge({ children, className = '' }) {
  return <span className={`badge ${className}`.trim()}>{children}</span>
}

export function Pill({ children, className = '', color, icon, style = {}, ...props }) {
  const customStyle = color
    ? { '--brand-color': color, ...style }
    : style

  return (
    <span className={`pill ${className}`.trim()} style={customStyle} {...props}>
      {icon && <span className="pill-icon" aria-hidden="true">{icon}</span>}
      <span>{children}</span>
    </span>
  )
}

export function Button({ as: Component = 'a', variant = 'primary', className = '', children, ...props }) {
  return (
    <Component className={`button button-${variant} ${className}`.trim()} {...props}>
      {children}
    </Component>
  )
}

export function SectionHeading({ label, title, text, split = false }) {
  return (
    <div className={split ? 'section-heading section-heading-split' : 'section-heading'}>
      <div>
        <p className="section-label">{label}</p>
        <h2>{title}</h2>
      </div>
      {text && <p>{text}</p>}
    </div>
  )
}

export function PipelineMotif({ className = '', compact = false }) {
  return (
    <svg
      className={`pipeline-motif ${compact ? 'pipeline-compact' : ''} ${className}`.trim()}
      viewBox="0 0 640 220"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pipeline-gradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="var(--accent-cyan)" stopOpacity="0.15" />
          <stop offset="52%" stopColor="var(--accent-cyan)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <path className="pipeline-path" d="M18 164 C92 44 156 58 218 112 S334 205 402 104 532 26 622 82" />
      <path className="pipeline-ghost" d="M20 118 C114 155 160 90 232 72 S350 73 420 142 542 184 622 108" />
      {[18, 132, 244, 354, 478, 622].map((x, index) => (
        <circle key={x} className="pipeline-node" cx={x} cy={[164, 70, 118, 160, 70, 82][index]} r="7" />
      ))}
    </svg>
  )
}
