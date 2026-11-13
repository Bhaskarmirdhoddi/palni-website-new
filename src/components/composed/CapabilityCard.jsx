// Extracted from local content; copy, links and visual variants arrive through props.
import { Fragment } from 'react'
import FeatureCard from './FeatureCard'

export default function CapabilityCard({ content }) {
  return (
    <article {...content.articleProps}>
      {content.articleSpace}
      <div {...content.divProps}>
        {content.divSpace}
        <h2 {...content.h2Props}>
          {content.h2Space}
          {content.heading}
          {content.h2Space2}
        </h2>
        {content.divSpace2}
        <p {...content.pProps}>
          {content.pSpace}
          {content.description}
          {content.pSpace2}
        </p>
        {content.divSpace3}
        <canvas {...content.canvasProps}>
          {content.canvasSpace}
        </canvas>
        {content.divSpace4}
      </div>
      {content.articleSpace2}
      <div {...content.divProps2}>
        {content.featureCardItems.map(item => (
          <Fragment key={item.key}>{item.space}<FeatureCard content={item.content} /></Fragment>
        ))}
        {content.divSpace5}
      </div>
      {content.articleSpace3}
    </article>
  )
}
