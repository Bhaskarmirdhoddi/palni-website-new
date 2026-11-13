// Extracted from local content; copy, links and visual variants arrive through props.
import ContactBand from './ContactBand'

export default function TalkSection({ content }) {
  return (
    <section {...content.sectionProps}>
      {content.sectionSpace}
      <div {...content.divProps}>
        {content.divSpace}
        <ContactBand content={content.contactBand} />
        {content.divSpace2}
      </div>
      {content.sectionSpace2}
    </section>
  )
}
