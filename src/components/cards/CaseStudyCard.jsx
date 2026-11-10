export default function CaseStudyCard({ platform, metric, metricLabel, headline, summary, image, href, imageRatio = '16 / 10', layout = 'vertical', details = [], linkLabel = 'Read the use case' }) {
  const platformClass = platform.toLowerCase().replace(/[^a-z]+/g, '-')
  return <article className={`case-study-card card case-study-card--${layout} case-study-card--${platformClass} hover-lift`}>
    {image && <div className="image-frame case-study-card__image" style={{ aspectRatio: imageRatio }}><img src={image.src} alt={image.alt || ''} loading="lazy" /></div>}
    <div className="case-study-card__body"><p className="eyebrow">{platform}</p>{metric && <div className="case-study-card__outcome"><p className="case-study-card__metric">{metric}</p>{metricLabel && <p className="case-study-card__metric-label">{metricLabel}</p>}</div>}<h3>{headline}</h3><p className="text-muted">{summary}</p>{details.length > 0 && <ul className="case-study-card__details">{details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}{href && <a href={href}>{linkLabel}<span aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24"><title>arrow-right</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 12h15m-5.625 6l5.625-6l-5.625-6"/></svg></span></a>}</div>
  </article>
}
