// Extracted from local content; copy, links and visual variants arrive through props.


export default function BreadcrumbsVariant2({ content }) {
  return (
    <nav {...content.navProps}>
      {content.navSpace}
      <a {...content.aProps}>
        {content.aSpace}
        {content.linkLabel}
        {content.aSpace2}
      </a>
      {content.navSpace2}
      <span {...content.spanProps}>
        {content.spanSpace}
        {content.label}
        {content.spanSpace2}
      </span>
      {content.navSpace3}
      <span {...content.spanProps2}>
        {content.spanSpace3}
        {content.label2}
        {content.spanSpace4}
      </span>
      {content.navSpace4}
    </nav>
  )
}
