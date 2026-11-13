// Extracted from local content; copy, links and visual variants arrive through props.


export default function IndustryCard({ content }) {
  return (
    <article {...content.articleProps}>
      {content.articleSpace}
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
      {content.articleSpace2}
      <h3 {...content.h3Props}>
        {content.h3Space}
        {content.cardTitle}
        {content.h3Space2}
      </h3>
      {content.articleSpace3}
      <p {...content.pProps}>
        {content.pSpace}
        {content.description}
        {content.pSpace2}
      </p>
      {content.articleSpace4}
      <p {...content.pProps2}>
        {content.pSpace3}
        {content.description2}
        {content.pSpace4}
      </p>
      {content.articleSpace5}
      <ul {...content.ulProps}>
        {content.ulSpace}
        <li {...content.liProps}>
          {content.liSpace}
          {content.text}
          {content.liSpace2}
        </li>
        {content.ulSpace2}
        <li {...content.liProps2}>
          {content.liSpace3}
          {content.text2}
          {content.liSpace4}
        </li>
        {content.ulSpace3}
        <li {...content.liProps3}>
          {content.liSpace5}
          {content.text3}
          {content.liSpace6}
        </li>
        {content.ulSpace4}
        <li {...content.liProps4}>
          {content.liSpace7}
          {content.text4}
          {content.liSpace8}
        </li>
        {content.ulSpace5}
      </ul>
      {content.articleSpace6}
    </article>
  )
}
