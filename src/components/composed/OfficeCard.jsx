// Extracted from local content; copy, links and visual variants arrive through props.


export default function OfficeCard({ content }) {
  return (
    <article {...content.articleProps}>
      {content.articleSpace}
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
        <div {...content.divProps2}>
          {content.divSpace3}
          <b {...content.bProps}>
            {content.bSpace}
            {content.label}
            {content.bSpace2}
          </b>
          {content.divSpace4}
          <small {...content.smallProps}>
            {content.smallSpace}
            {content.text}
            {content.smallSpace2}
          </small>
          {content.divSpace5}
        </div>
        {content.divSpace6}
      </div>
      {content.articleSpace2}
      <address {...content.addressProps}>
        {content.addressSpace}
        {content.text2}
        {content.addressSpace2}
      </address>
      {content.articleSpace3}
      <a {...content.aProps}>
        {content.aSpace}
        <svg {...content.svgProps2}>
          {content.svgSpace3}
          <path {...content.pathProps2}>
            {content.pathSpace2}
          </path>
          {content.svgSpace4}
        </svg>
        {content.aSpace2}
        {content.linkLabel}
        {content.aSpace3}
      </a>
      {content.articleSpace4}
    </article>
  )
}
