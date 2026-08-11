import { useState } from 'react'
import { GlassCard } from './Primitives.jsx'

export function GitHubStats({ src, alt, fallbackTitle, fallbackText }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <GlassCard className="github-card" aria-label={alt}>
      {!loaded && !failed && <div className="github-skeleton" aria-hidden="true" />}
      {failed ? (
        <div className="github-fallback">
          <h3>{fallbackTitle}</h3>
          <p>{fallbackText}</p>
        </div>
      ) : (
        <img
          src={src}
          width="495"
          height="195"
          loading="lazy"
          decoding="async"
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={loaded ? 'loaded' : ''}
        />
      )}
    </GlassCard>
  )
}
