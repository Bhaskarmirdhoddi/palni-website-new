// Extracted from local content; copy, links and visual variants arrive through props.


export default function StorySection({ content }) {
  return (
    <section {...content.sectionProps}>
      {content.sectionSpace}
      <div {...content.divProps}>
        {content.divSpace}
        <div {...content.divProps2}>
          {content.divSpace2}
          <h2 {...content.h2Props}>
            {content.h2Space}
            {content.heading}
            {content.h2Space2}
          </h2>
          {content.divSpace3}
          <div {...content.divProps3}>
            {content.divSpace4}
            <p {...content.pProps}>
              {content.pSpace}
              {content.description}
              {content.pSpace2}
            </p>
            {content.divSpace5}
          </div>
          {content.divSpace6}
        </div>
        {content.divSpace7}
      </div>
      {content.sectionSpace2}
    </section>
  )
}
