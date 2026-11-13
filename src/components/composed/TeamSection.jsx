// Extracted from local content; copy, links and visual variants arrive through props.


export default function TeamSection({ content }) {
  return (
    <section {...content.sectionProps}>
      {content.sectionSpace}
      <div {...content.divProps}>
        {content.divSpace}
        <div {...content.divProps2}>
          {content.divSpace2}
          <img {...content.imgProps} />
          {content.divSpace3}
          <div {...content.divProps3}>
            {content.divSpace4}
          </div>
          {content.divSpace5}
          <div {...content.divProps4}>
            {content.divSpace6}
            <h2 {...content.h2Props}>
              {content.h2Space}
              {content.heading}
              {content.h2Space2}
            </h2>
            {content.divSpace7}
            <div {...content.divProps5}>
              {content.divSpace8}
              <a {...content.aProps}>
                {content.aSpace}
                {content.linkLabel}
                {content.aSpace2}
              </a>
              {content.divSpace9}
            </div>
            {content.divSpace10}
          </div>
          {content.divSpace11}
        </div>
        {content.divSpace12}
      </div>
      {content.sectionSpace2}
    </section>
  )
}
