// Extracted from local content; copy, links and visual variants arrive through props.


export default function BreadcrumbsVariant3({ content }) {
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
      <span {...content.spanProps3}>
        {content.spanSpace5}
        {content.label3}
        {content.spanSpace6}
      </span>
      {content.navSpace5}
      <a {...content.aProps2}>
        {content.aSpace3}
        {content.linkLabel2}
        {content.aSpace4}
      </a>
      {content.navSpace6}
      <span {...content.spanProps4}>
        {content.spanSpace7}
        {content.label4}
        {content.spanSpace8}
      </span>
      {content.navSpace7}
      <span {...content.spanProps5}>
        {content.spanSpace9}
        {content.label5}
        {content.spanSpace10}
      </span>
      {content.navSpace8}
    </nav>
  )
}
