// Extracted from local content; copy, links and visual variants arrive through props.


export default function CareersSection({ content }) {
  return (
    <section {...content.sectionProps}>
      {content.sectionSpace}
      <img {...content.imgProps} />
      {content.sectionSpace2}
      <div {...content.divProps}>
        {content.divSpace}
      </div>
      {content.sectionSpace3}
      <div {...content.divProps2}>
        {content.divSpace2}
        <h2 {...content.h2Props}>
          {content.h2Space}
          {content.heading}
          {content.h2Space2}
        </h2>
        {content.divSpace3}
        <p {...content.pProps}>
          {content.pSpace}
          {content.description}
          {content.pSpace2}
        </p>
        {content.divSpace4}
        <div {...content.divProps3}>
          {content.divSpace5}
          <a {...content.aProps}>
            {content.aSpace}
            {content.linkLabel}
            {content.aSpace2}
          </a>
          {content.divSpace6}
        </div>
        {content.divSpace7}
      </div>
      {content.sectionSpace4}
    </section>
  )
}
