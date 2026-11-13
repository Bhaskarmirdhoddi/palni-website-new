// Extracted from local content; copy, links and visual variants arrive through props.
import MegaMenu from './MegaMenu'
import MegaMenuVariant2 from './MegaMenuVariant2'
import MegaMenuVariant3 from './MegaMenuVariant3'

export default function DesktopNavigation({ content }) {
  return (
    <nav {...content.navProps}>
      {content.navSpace}
      <MegaMenu content={content.megaMenu} />
      {content.navSpace2}
      <MegaMenuVariant2 content={content.megaMenuVariant2} />
      {content.navSpace3}
      <MegaMenuVariant3 content={content.megaMenuVariant3} />
      {content.navSpace4}
      <a {...content.aProps}>
        {content.aSpace}
        {content.linkLabel}
        {content.aSpace2}
      </a>
      {content.navSpace5}
      <a {...content.aProps2}>
        {content.aSpace3}
        {content.linkLabel2}
        {content.aSpace4}
      </a>
      {content.navSpace6}
    </nav>
  )
}
