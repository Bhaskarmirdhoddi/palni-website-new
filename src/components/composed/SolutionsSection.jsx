// Extracted from local content; copy, links and visual variants arrive through props.
import { Fragment } from 'react'
import FeatureCard from './FeatureCard'

export default function SolutionsSection({ content }) {
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
          {content.divSpace8}
          <button {...content.buttonProps}>
            {content.buttonSpace}
            {content.buttonLabel}
            {content.buttonSpace2}
          </button>
          {content.divSpace9}
          <button {...content.buttonProps2}>
            {content.buttonSpace3}
            {content.buttonLabel2}
            {content.buttonSpace4}
          </button>
          {content.divSpace10}
          <button {...content.buttonProps3}>
            {content.buttonSpace5}
            {content.buttonLabel3}
            {content.buttonSpace6}
          </button>
          {content.divSpace11}
        </div>
        {content.divSpace12}
        <div {...content.divProps5}>
          {content.divSpace13}
          <p {...content.pProps2}>
            {content.pSpace3}
            {content.description2}
            {content.pSpace4}
          </p>
          {content.divSpace14}
          <div {...content.divProps6}>
            {content.featureCardItems.map(item => (
              <Fragment key={item.key}>{item.space}<FeatureCard content={item.content} /></Fragment>
            ))}
            {content.divSpace15}
          </div>
          {content.divSpace16}
        </div>
        {content.divSpace17}
        <div {...content.divProps7}>
          {content.divSpace18}
          <p {...content.pProps3}>
            {content.pSpace5}
            {content.description3}
            {content.pSpace6}
          </p>
          {content.divSpace19}
          <div {...content.divProps8}>
            {content.featureCardItems2.map(item => (
              <Fragment key={item.key}>{item.space}<FeatureCard content={item.content} /></Fragment>
            ))}
            {content.divSpace20}
          </div>
          {content.divSpace21}
        </div>
        {content.divSpace22}
        <div {...content.divProps9}>
          {content.divSpace23}
          <p {...content.pProps4}>
            {content.pSpace7}
            {content.description4}
            {content.pSpace8}
          </p>
          {content.divSpace24}
          <div {...content.divProps10}>
            {content.featureCardItems3.map(item => (
              <Fragment key={item.key}>{item.space}<FeatureCard content={item.content} /></Fragment>
            ))}
            {content.divSpace25}
          </div>
          {content.divSpace26}
        </div>
        {content.divSpace27}
      </div>
      {content.sectionSpace2}
    </section>
  )
}
