// Extracted from local content; copy, links and visual variants arrive through props.
import { Fragment } from 'react'
import CapabilityCard from './CapabilityCard'

export default function SecSection({ content }) {
  return (
    <section {...content.sectionProps}>
      {content.sectionSpace}
      <div {...content.divProps}>
        {content.capabilityCardItems.map(item => (
          <Fragment key={item.key}>{item.space}<CapabilityCard content={item.content} /></Fragment>
        ))}
        {content.divSpace}
      </div>
      {content.sectionSpace2}
    </section>
  )
}
