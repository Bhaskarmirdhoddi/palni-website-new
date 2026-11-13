// Extracted from local content; copy, links and visual variants arrive through props.
import DiscoverySteps from './DiscoverySteps'
import ContactDetails from './ContactDetails'

export default function DiscoveryCTA({ content }) {
  return (
    <section {...content.sectionProps}>
      {content.sectionSpace}
      <div {...content.divProps}>
        {content.divSpace}
        <div {...content.divProps2}>
          {content.divSpace2}
          <canvas {...content.canvasProps}>
            {content.canvasSpace}
          </canvas>
          {content.divSpace3}
          <div {...content.divProps3}>
            {content.divSpace4}
            <div {...content.divProps4}>
              {content.divSpace5}
              <h2 {...content.h2Props}>
                {content.h2Space}
                {content.heading}
                {content.h2Space2}
              </h2>
              {content.divSpace6}
              <p {...content.pProps}>
                {content.pSpace}
                {content.description}
                {content.pSpace2}
              </p>
              {content.divSpace7}
              <div {...content.divProps5}>
                {content.divSpace8}
                <a {...content.aProps}>
                  {content.aSpace}
                  {content.linkLabel}
                  {content.aSpace2}
                </a>
                {content.divSpace9}
                <a {...content.aProps2}>
                  {content.aSpace3}
                  {content.linkLabel2}
                  {content.aSpace4}
                </a>
                {content.divSpace10}
              </div>
              {content.divSpace11}
            </div>
            {content.divSpace12}
            <DiscoverySteps content={content.discoverySteps} />
            {content.divSpace13}
          </div>
          {content.divSpace14}
          <ContactDetails content={content.contactDetails} />
          {content.divSpace15}
        </div>
        {content.divSpace16}
      </div>
      {content.sectionSpace2}
    </section>
  )
}
