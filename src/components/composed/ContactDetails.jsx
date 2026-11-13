// Extracted from local content; copy, links and visual variants arrive through props.


export default function ContactDetails({ content }) {
  return (
    <div {...content.divProps}>
      {content.divSpace}
      <a {...content.aProps}>
        {content.aSpace}
        <svg {...content.svgProps}>
          {content.svgSpace}
          <path {...content.pathProps}>
            {content.pathSpace}
          </path>
          {content.svgSpace2}
        </svg>
        {content.aSpace2}
        {content.linkLabel}
        {content.aSpace3}
      </a>
      {content.divSpace2}
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
      {content.divSpace3}
      <a {...content.aProps2}>
        {content.aSpace4}
        <svg {...content.svgProps3}>
          {content.svgSpace5}
          <path {...content.pathProps3}>
            {content.pathSpace3}
          </path>
          {content.svgSpace6}
        </svg>
        {content.aSpace5}
        {content.linkLabel2}
        {content.aSpace6}
      </a>
      {content.divSpace4}
    </div>
  )
}
