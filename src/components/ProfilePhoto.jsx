export function ProfilePhoto({ src, alt }) {
  return (
    <div className="profile-photo-wrapper">
      <div className="profile-photo-glow" aria-hidden="true" />
      <div className="profile-photo-ring">
        <img
          src={src}
          alt={alt}
          width="280"
          height="280"
          loading="eager"
          decoding="async"
          className="profile-photo"
        />
      </div>
      <div className="profile-photo-badge">
        <span className="status-dot" aria-hidden="true" />
        Open to Work
      </div>
    </div>
  )
}
