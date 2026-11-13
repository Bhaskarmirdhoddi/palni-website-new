// Extracted from local content; copy, links and visual variants arrive through props.


export default function ModernisationStage({ content }) {
  return (
    <article {...content.articleProps}>
      {content.articleSpace}
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
      </div>
      {content.articleSpace2}
      <figure {...content.figureProps}>
        {content.figureSpace}
        <i {...content.iProps}>
          {content.iSpace}
        </i>
        {content.figureSpace2}
        <img {...content.imgProps} />
        {content.figureSpace3}
      </figure>
      {content.articleSpace3}
    </article>
  )
}
