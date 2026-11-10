export default function ExpertiseCard({ title, description, icon, iconPath, href, linkLabel = 'Learn more', className = '' }) {
  const iconPaths = {
    award: 'M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M8.5 14L7 22l5-3 5 3-1.5-8',
    target: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z M12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z',
    rocket: 'M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2 M9 15l-3-3c1-5 5-9 12-9 0 7-4 11-9 12z M14.5 10.2a1.2 1.2 0 1 0 0-.01',
    partnership: 'M2 11l4-4 4 1 3-2 3 1 6 5-3 3 M7 16l2 2 M9.5 14l2.5 2.5 M12 12l3 3 M2 11l5 5',
  }
  return <article className={`expertise-card ${className}`.trim()}><div className="expertise-card__heading">{(iconPath || icon) && <span aria-hidden="true"><svg className="ic" viewBox="0 0 24 24" focusable="false"><path d={iconPath || iconPaths[icon] || iconPaths.award} /></svg></span>}</div><h3>{title}</h3><p className="text-muted">{description}</p>{href && <a className="expertise-card__link" href={href}>{linkLabel}<span aria-hidden="true">→</span></a>}</article>
}
