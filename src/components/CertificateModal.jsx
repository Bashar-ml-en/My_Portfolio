import { useEffect } from 'react'

export function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!certificate) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal" type="button">
          ✕
        </button>

        <div className="modal-header">
          <span className="issuer-badge">{certificate.issuer}</span>
          <span className="verify-badge">VERIFIED CERTIFICATE</span>
        </div>

        <h3 id="modal-title" className="modal-title">{certificate.title}</h3>
        <p className="modal-subtitle">Issued by {certificate.issuer} via Coursera • Credential ID: {certificate.id}</p>

        <div className="modal-image-wrapper">
          <img
            src={certificate.imageUrl}
            alt={`${certificate.title} Certificate`}
            className="certificate-modal-img"
            loading="lazy"
          />
        </div>

        <p className="modal-desc">{certificate.description}</p>

        <div className="modal-skills">
          <span className="box-label">SKILLS COVERED</span>
          <div className="badge-row">
            {certificate.skills.map((skill) => (
              <span key={skill} className="skill-badge" style={{ '--brand-color': '#00E5FF' }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-actions">
          <a
            href={certificate.verifyUrl}
            target="_blank"
            rel="noreferrer"
            className="button button-primary"
          >
            Verify on Coursera ↗
          </a>
          {certificate.pdfPath && (
            <a
              href={certificate.pdfPath}
              target="_blank"
              rel="noreferrer"
              className="button button-ghost"
            >
              Download PDF 📄
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
