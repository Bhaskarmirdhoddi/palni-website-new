export function PolicyHero({ content: { title, introduction } }) {
  return (
    <section className="hero sub policy-hero" data-tone="brand" aria-labelledby="policy-title">
      <canvas className="field" data-field="confluence" data-colors="sf,sn,db" data-density="0.45" aria-hidden="true" />
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{title}</span>
        </nav>
        <h1 id="policy-title">{title}</h1>
        <p className="lead">{introduction}</p>
      </div>
    </section>
  )
}

export function PolicyContent({ content: { topics, relatedLink, sourceUrl } }) {
  return (
    <section className="sec tight" aria-labelledby="policy-summary">
      <div className="wrap policy-grid">
        <nav className="policy-nav" aria-label="On this page">
          <h2 className="h4d">On this page</h2>
          <ul>
            {topics.map(topic => <li key={topic.id}><a href={`#${topic.id}`}>{topic.title}</a></li>)}
            <li><a href="#policy-contact">Contact</a></li>
          </ul>
        </nav>
        <div className="policy-copy">
          <header className="policy-intro">
            <h2 className="h2" id="policy-summary">Summary</h2>
            <a className="link" href={sourceUrl}>Read the full published policy <span aria-hidden="true">↗</span></a>
          </header>
          {topics.map(({ id, title, text }) => (
            <section className="policy-topic" key={id} id={id} aria-labelledby={`${id}-title`}>
              <h3 id={`${id}-title`}>{title}</h3>
              <p>{text}</p>
            </section>
          ))}
          <section className="policy-topic" id="policy-contact" aria-labelledby="policy-contact-title">
            <h3 id="policy-contact-title">Contact</h3>
            <p>For questions or requests, email <a href="mailto:support@palni.com">support@palni.com</a> or call <a href="tel:+12145010690">214-501-0690</a>.</p>
            <a className="link" href={relatedLink.href}>{relatedLink.label} <span aria-hidden="true">→</span></a>
          </section>
        </div>
      </div>
    </section>
  )
}
