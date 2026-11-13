// Extracted from local content; copy, links and visual variants arrive through props.


export default function FeatureCardVariant4({ content }) {
  return (
    <a {...content.aProps}>
      {content.aSpace}
      <figure {...content.figureProps}>
        {content.figureSpace}
        <img {...content.imgProps} />
        {content.figureSpace2}
      </figure>
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
      <span {...content.spanProps}>
        {content.spanSpace}
        {content.label}
        {content.spanSpace2}
      </span>
      {content.aSpace5}
    </a>
  )
}
