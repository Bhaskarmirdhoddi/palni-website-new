// Extracted from local content; copy, links and visual variants arrive through props.


export default function FeatureCardVariant2({ content }) {
  return (
    <div {...content.divProps}>
      {content.divSpace}
      <span {...content.spanProps}>
        {content.spanSpace}
        <svg {...content.svgProps}>
          {content.svgSpace}
          <path {...content.pathProps}>
            {content.pathSpace}
          </path>
          {content.svgSpace2}
        </svg>
        {content.spanSpace2}
      </span>
      {content.divSpace2}
      <span {...content.spanProps2}>
        {content.spanSpace3}
        {content.label}
        {content.spanSpace4}
      </span>
      {content.divSpace3}
      <p {...content.pProps}>
        {content.pSpace}
        {content.description}
        {content.pSpace2}
      </p>
      {content.divSpace4}
    </div>
  )
}
