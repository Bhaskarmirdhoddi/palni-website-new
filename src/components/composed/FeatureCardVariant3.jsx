// Extracted from local content; copy, links and visual variants arrive through props.


export default function FeatureCardVariant3({ content }) {
  return (
    <a {...content.aProps}>
      {content.aSpace}
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
        {content.label}
        {content.spanSpace3}
      </span>
      {content.aSpace2}
      <h3 {...content.h3Props}>
        {content.h3Space}
        {content.cardTitle}
        {content.h3Space2}
      </h3>
      {content.aSpace3}
      <p {...content.pProps}>
        {content.pSpace}
        {content.description}
        {content.pSpace2}
      </p>
      {content.aSpace4}
      <div {...content.divProps}>
        {content.divSpace}
        <b {...content.bProps}>
          {content.bSpace}
          {content.label2}
          {content.bSpace2}
        </b>
        {content.divSpace2}
        <span {...content.spanProps2}>
          {content.spanSpace4}
          {content.label3}
          {content.spanSpace5}
        </span>
        {content.divSpace3}
      </div>
      {content.aSpace5}
      <span {...content.spanProps3}>
        {content.spanSpace6}
        {content.label4}
        {content.spanSpace7}
      </span>
      {content.aSpace6}
    </a>
  )
}
