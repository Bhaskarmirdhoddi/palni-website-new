// Extracted from local content; copy, links and visual variants arrive through props.


export default function LegalNavigation({ content }) {
  return (
    <nav {...content.navProps}>
      {content.navSpace}
      <a {...content.aProps}>
        {content.aSpace}
        {content.linkLabel}
        {content.aSpace2}
      </a>
      {content.navSpace2}
      <a {...content.aProps2}>
        {content.aSpace3}
        {content.linkLabel2}
        {content.aSpace4}
      </a>
      {content.navSpace3}
    </nav>
  )
}
