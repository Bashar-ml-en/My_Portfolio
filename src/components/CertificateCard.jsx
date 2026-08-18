import { Button, GlassCard, Pill } from './Primitives.jsx'
import { getTechMeta } from '../data/skills.ts'

export function CertificateCard({ certificate, onOpenModal, index }) {
  return (
    <GlassCard
      as="article"
      className="certificate-card cursor-glow"
      style={{ '--stagger': `${index * 60}ms` }}
    >
      <div className="cert-topline">
        <span className={`issuer-badge issuer-${certificate.issuer.toLowerCase().replace(/[^a-z]/g, '')}`}>
          {certificate.issuer}
        </span>
        <span className="cert-id">ID: {certificate.id}</span>
      </div>

      <div className="cert-preview-box" onClick={() => onOpenModal(certificate)} role="button" tabIndex={0}>
        <img
          src={certificate.imageUrl}
          alt={`${certificate.title} Preview`}
          className="cert-thumbnail"
          loading="lazy"
        />
        <div className="cert-preview-overlay">
          <span>🔍 Zoom Certificate</span>
        </div>
      </div>

      <h3 className="cert-title">{certificate.title}</h3>
      <p className="cert-desc">{certificate.description}</p>

      <div className="tech-pills" aria-label="Certificate skills">
        {certificate.skills.map((skill) => {
          const meta = getTechMeta(skill)
          return (
            <Pill key={skill} color={meta.color} icon={meta.icon}>
              {skill}
            </Pill>
          )
        })}
      </div>

      <div className="cert-actions">
        <Button href={certificate.verifyUrl} target="_blank" rel="noreferrer" variant="primary">
          Verify on Coursera ↗
        </Button>
        <Button
          as="button"
          type="button"
          variant="ghost"
          onClick={() => onOpenModal(certificate)}
        >
          View Certificate
        </Button>
      </div>
    </GlassCard>
  )
}
