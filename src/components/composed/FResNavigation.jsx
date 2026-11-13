// Extracted from local content; copy, links and visual variants arrive through props.


export default function FResNavigation({ content }) {
  return (
    <nav {...content.navProps}>
      {content.navSpace}
      <h2 {...content.h2Props}>
        {content.h2Space}
        {content.heading}
        {content.h2Space2}
      </h2>
      {content.navSpace2}
      <ul {...content.ulProps}>
        {content.ulSpace}
        <li {...content.liProps}>
          {content.liSpace}
          <a {...content.aProps}>
            {content.aSpace}
            {content.linkLabel}
            {content.aSpace2}
          </a>
          {content.liSpace2}
        </li>
        {content.ulSpace2}
        <li {...content.liProps2}>
          {content.liSpace3}
          <a {...content.aProps2}>
            {content.aSpace3}
            {content.linkLabel2}
            {content.aSpace4}
          </a>
          {content.liSpace4}
        </li>
        {content.ulSpace3}
      </ul>
      {content.navSpace3}
    </nav>
  )
}
