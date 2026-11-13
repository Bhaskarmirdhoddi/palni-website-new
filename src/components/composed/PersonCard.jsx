// Extracted from local content; copy, links and visual variants arrive through props.


export default function PersonCard({ content }) {
  return (
    <article {...content.articleProps}>
      {content.articleSpace}
      <div {...content.divProps}>
        {content.divSpace}
        <svg {...content.svgProps}>
          {content.svgSpace}
          <path {...content.pathProps}>
            {content.pathSpace}
          </path>
          {content.svgSpace2}
        </svg>
        {content.divSpace2}
      </div>
      {content.articleSpace2}
      <div {...content.divProps2}>
        {content.divSpace3}
        <h3 {...content.h3Props}>
          {content.h3Space}
          {content.cardTitle}
          {content.h3Space2}
        </h3>
        {content.divSpace4}
        <p {...content.pProps}>
          {content.pSpace}
          {content.description}
          {content.pSpace2}
        </p>
        {content.divSpace5}
      </div>
      {content.articleSpace3}
      <span {...content.spanProps}>
        {content.spanSpace}
        <svg {...content.svgProps2}>
          {content.svgSpace3}
          <path {...content.pathProps2}>
            {content.pathSpace2}
          </path>
          {content.svgSpace4}
        </svg>
        {content.spanSpace2}
        {content.label}
        {content.spanSpace3}
      </span>
      {content.articleSpace4}
    </article>
  )
}
