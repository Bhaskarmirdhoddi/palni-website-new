// Extracted from local content; copy, links and visual variants arrive through props.
import OutcomeSlideVariant2 from './OutcomeSlideVariant2'

export default function ResultsSectionVariant2({ content }) {
  return (
    <section {...content.sectionProps}>
      {content.sectionSpace}
      <div {...content.divProps}>
        {content.divSpace}
        <div {...content.divProps2}>
          {content.divSpace2}
          <div {...content.divProps3}>
            {content.divSpace3}
            <h2 {...content.h2Props}>
              {content.h2Space}
              {content.heading}
              {content.h2Space2}
            </h2>
            {content.divSpace4}
          </div>
          {content.divSpace5}
        </div>
        {content.divSpace6}
      </div>
      {content.sectionSpace2}
      <div {...content.divProps4}>
        {content.divSpace7}
        <div {...content.divProps5}>
          {content.divSpace8}
          <OutcomeSlideVariant2 content={content.outcomeSlideVariant2} />
          {content.divSpace9}
        </div>
        {content.divSpace10}
      </div>
      {content.sectionSpace3}
    </section>
  )
}
