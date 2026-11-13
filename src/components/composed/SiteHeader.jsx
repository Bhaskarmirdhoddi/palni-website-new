// Extracted from local content; copy, links and visual variants arrive through props.
import DesktopNavigation from './DesktopNavigation'

export default function SiteHeader({ content }) {
  return (
    <header {...content.headerProps}>
      {content.headerSpace}
      <div {...content.divProps}>
        {content.divSpace}
        <a {...content.aProps}>
          {content.aSpace}
          <img {...content.imgProps} />
          {content.aSpace2}
          <img {...content.imgProps2} />
          {content.aSpace3}
        </a>
        {content.divSpace2}
        <DesktopNavigation content={content.desktopNavigation} />
        {content.divSpace3}
        <div {...content.divProps2}>
          {content.divSpace4}
          <button {...content.buttonProps}>
            {content.buttonSpace}
            <svg {...content.svgProps}>
              {content.svgSpace}
              <path {...content.pathProps}>
                {content.pathSpace}
              </path>
              {content.svgSpace2}
            </svg>
            {content.buttonSpace2}
            <svg {...content.svgProps2}>
              {content.svgSpace3}
              <path {...content.pathProps2}>
                {content.pathSpace2}
              </path>
              {content.svgSpace4}
            </svg>
            {content.buttonSpace3}
          </button>
          {content.divSpace5}
          <a {...content.aProps2}>
            {content.aSpace4}
            {content.linkLabel}
            {content.aSpace5}
          </a>
          {content.divSpace6}
          <button {...content.buttonProps2}>
            {content.buttonSpace4}
            <svg {...content.svgProps3}>
              {content.svgSpace5}
              <path {...content.pathProps3}>
                {content.pathSpace3}
              </path>
              {content.svgSpace6}
            </svg>
            {content.buttonSpace5}
          </button>
          {content.divSpace7}
        </div>
        {content.divSpace8}
      </div>
      {content.headerSpace2}
      <span {...content.spanProps}>
        {content.spanSpace}
      </span>
      {content.headerSpace3}
    </header>
  )
}
