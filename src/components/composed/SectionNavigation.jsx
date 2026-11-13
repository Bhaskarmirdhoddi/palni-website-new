// Extracted from local content; copy, links and visual variants arrive through props.


export default function SectionNavigation({ content }) {
  return (
    <nav {...content.navProps}>
      {content.navSpace}
      <div {...content.divProps}>
        {content.divSpace}
        <span {...content.spanProps}>
          {content.spanSpace}
          {content.label}
          {content.spanSpace2}
        </span>
        {content.divSpace2}
        <a {...content.aProps}>
          {content.aSpace}
          {content.linkLabel}
          {content.aSpace2}
        </a>
        {content.divSpace3}
        <a {...content.aProps2}>
          {content.aSpace3}
          {content.linkLabel2}
          {content.aSpace4}
        </a>
        {content.divSpace4}
        <a {...content.aProps3}>
          {content.aSpace5}
          {content.linkLabel3}
          {content.aSpace6}
        </a>
        {content.divSpace5}
        <a {...content.aProps4}>
          {content.aSpace7}
          {content.linkLabel4}
          {content.aSpace8}
        </a>
        {content.divSpace6}
      </div>
      {content.navSpace2}
    </nav>
  )
}
