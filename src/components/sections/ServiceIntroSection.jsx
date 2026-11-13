import ServicePrinciplesGrid from './ServicePrinciplesGrid'

export default function ServiceIntroSection({ content }) {
  if (!content.items.length) return null

  return (
    <section id={content.id} className="service-intro" data-tone="brand" aria-labelledby={`${content.id}-heading`}>
      <div className="wrap">
        <div className="service-intro__head">
          <h2 id={`${content.id}-heading`}>{content.heading}</h2>
          <p className="lead">{content.description}</p>
        </div>
        <ServicePrinciplesGrid items={content.items} />
      </div>
    </section>
  )
}
