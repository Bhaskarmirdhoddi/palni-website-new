import SiteHeader from './SiteHeader'
import MobileNavigation from './MobileNavigation'
import SiteFooter from './SiteFooter'
import SectionRenderer from './SectionRenderer'

export default function PageLayout({ content, sections }) {
  return (
<div {...content.divProps}>
  {content.divSpace}
  <a {...content.aProps}>
    {content.aSpace}
    {content.linkLabel}
    {content.aSpace2}
  </a>
  {content.divSpace2}
  <div {...content.divProps2}>
    {content.divSpace3}
    <i {...content.iProps}>
      {content.iSpace}
    </i>
    {content.divSpace4}
    <i {...content.iProps2}>
      {content.iSpace2}
    </i>
    {content.divSpace5}
    <i {...content.iProps3}>
      {content.iSpace3}
    </i>
    {content.divSpace6}
    <span {...content.spanProps}>
      {content.spanSpace}
    </span>
    {content.divSpace7}
  </div>
  {content.divSpace8}
  <SiteHeader content={content.siteHeader} />
  {content.divSpace9}
  <MobileNavigation content={content.mobileNavigation} />
  {content.divSpace10}
  <main {...content.mainProps}>
      <SectionRenderer sections={sections} />
    </main>
  {content.divSpace11}
  <SiteFooter content={content.siteFooter} />
  {content.divSpace12}
</div>
  )
}
