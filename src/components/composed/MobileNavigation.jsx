// Extracted from local content; copy, links and visual variants arrive through props.
import MobileNavigationVariant2 from './MobileNavigationVariant2'

export default function MobileNavigation({ content }) {
  return (
    <div {...content.divProps}>
      {content.divSpace}
      <div {...content.divProps2}>
        {content.divSpace2}
        <a {...content.aProps}>
          {content.aSpace}
          <img {...content.imgProps} />
          {content.aSpace2}
          <img {...content.imgProps2} />
          {content.aSpace3}
        </a>
        {content.divSpace3}
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
        </button>
        {content.divSpace4}
      </div>
      {content.divSpace5}
      <MobileNavigationVariant2 content={content.mobileNavigationVariant2} />
      {content.divSpace6}
    </div>
  )
}
