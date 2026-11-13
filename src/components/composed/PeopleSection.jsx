// Extracted from local content; copy, links and visual variants arrive through props.
import { Fragment } from 'react'
import FeatureCard from './FeatureCard'

export default function PeopleSection({ content }) {
  return (
    <section {...content.sectionProps}>
      {content.sectionSpace}
      <div {...content.divProps}>
        {content.divSpace}
        <div {...content.divProps2}>
          {content.divSpace2}
          <div {...content.divProps3}>
            {content.divSpace3}
            <h2 {...content.h2Props}>
              {content.h2Space}
              {content.heading}
              {content.h2Space2}
            </h2>
            {content.divSpace4}
          </div>
          {content.divSpace5}
          <p {...content.pProps}>
            {content.pSpace}
            {content.description}
            {content.pSpace2}
          </p>
          {content.divSpace6}
        </div>
        {content.divSpace7}
        <div {...content.divProps4}>
          {content.featureCardItems.map(item => (
            <Fragment key={item.key}>{item.space}<FeatureCard content={item.content} /></Fragment>
          ))}
          {content.divSpace8}
        </div>
        {content.divSpace9}
      </div>
      {content.sectionSpace2}
    </section>
  )
}
