// Extracted from local content; copy, links and visual variants arrive through props.


export default function OutcomeSlideVariant2({ content }) {
  return (
    <article {...content.articleProps}>
      {content.articleSpace}
      <img {...content.imgProps} />
      {content.articleSpace2}
      <div {...content.divProps}>
        {content.divSpace}
        <span {...content.spanProps}>
          {content.spanSpace}
          {content.label}
          {content.spanSpace2}
        </span>
        {content.divSpace2}
        <h3 {...content.h3Props}>
          {content.h3Space}
          {content.cardTitle}
          {content.h3Space2}
        </h3>
        {content.divSpace3}
        <p {...content.pProps}>
          {content.pSpace}
          {content.description}
          {content.pSpace2}
        </p>
        {content.divSpace4}
        <span {...content.spanProps2}>
          {content.spanSpace3}
          {content.label2}
          {content.spanSpace4}
        </span>
        {content.divSpace5}
        <a {...content.aProps}>
          {content.aSpace}
          {content.linkLabel}
          {content.aSpace2}
        </a>
        {content.divSpace6}
      </div>
      {content.articleSpace3}
    </article>
  )
}
