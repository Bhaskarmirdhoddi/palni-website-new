export default function ChallengeCard({ challenge, description, platform, href, icon, linkLabel = 'View approach', layout = 'card' }) {
  if (layout === 'row') {
    const service = platform.toLowerCase()
    const iconPaths = {
      funnel: 'M3 5h18l-7 8v6l-4 2v-8z',
      workflow: 'M4 4h6v5H4z M14 15h6v5h-6z M7 9v4a2 2 0 0 0 2 2h5',
      shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4',
      spark: 'M12 3v3M12 18v3M3 12h3M18 12h3 M12 8.5l1.2 2.3 2.3 1.2-2.3 1.2L12 15.5l-1.2-2.3L8.5 12l2.3-1.2z M5.6 5.6l1.6 1.6 M16.8 16.8l1.6 1.6',
    }
    return <article className={`challenge-row challenge-row--${service} reveal-on-scroll`}>
      <span className={`challenge-row__icon challenge-row__icon--${service}`} aria-hidden="true">
        <svg className="ic" viewBox="0 0 24 24" focusable="false"><path d={iconPaths[icon] || iconPaths.spark} /></svg>
      </span>
      <div className="challenge-row__copy"><h3>{challenge}</h3><p>{description}</p></div>
      <span className={`chip challenge-row__platform challenge-row__platform--${service}`}>{platform}</span>
      {/* {href && <a className="challenge-row__link" href={href} aria-label={`${linkLabel}: ${challenge}`}></a>} */}
    </article>
  }
  return <article className="challenge-card card hover-lift"><p className="eyebrow">{platform}</p><h3>{challenge}</h3><p className="text-muted">{description}</p>{href && <a href={href}>{linkLabel}<span aria-hidden="true"> ↗</span></a>}</article>
}
