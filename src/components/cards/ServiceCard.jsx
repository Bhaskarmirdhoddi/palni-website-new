export default function ServiceCard({ icon, image, visual, artwork, title, description, href, linkLabel = 'Explore service' }) {
  return <article className={`card service-card hover-lift${artwork ? ` service-card--${artwork}` : ''}`}>
    {visual && <div className="service-card__image service-card__visual">{visual}</div>}
    {image && <div className="image-frame service-card__image"><img src={image.src} alt={image.alt || ''} loading="lazy" /></div>}
    {icon && <div className="service-card__icon" aria-hidden="true">{icon}</div>}
    <div className="stack service-card__body"><h3>{title}</h3><p className="text-muted">{description}</p>{href && <a className="service-card__link" href={href}>{linkLabel}<span aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><title>arrow-right</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 12h15m-5.625 6l5.625-6l-5.625-6"/></svg></span></a>}</div>
  </article>
}
