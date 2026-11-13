// Extracted from local content; copy, links and visual variants arrive through props.
import FeatureCard from './FeatureCard'

export default function AcceleratorsSection({ content }) {
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
          <div {...content.divProps5}>
            {content.divSpace9}
            <span {...content.spanProps}>
              {content.spanSpace}
              <svg {...content.svgProps}>
                {content.svgSpace}
                <path {...content.pathProps}>
                  {content.pathSpace}
                </path>
                {content.svgSpace2}
              </svg>
              {content.spanSpace2}
            </span>
            {content.divSpace10}
            <span {...content.spanProps2}>
              {content.spanSpace3}
              {content.label}
              {content.spanSpace4}
            </span>
            {content.divSpace11}
            <h3 {...content.h3Props}>
              {content.h3Space}
              {content.cardTitle}
              {content.h3Space2}
            </h3>
            {content.divSpace12}
            <p {...content.pProps2}>
              {content.pSpace3}
              {content.description2}
              {content.pSpace4}
            </p>
            {content.divSpace13}
          </div>
          {content.divSpace14}
          <FeatureCard content={content.featureCard} />
          {content.divSpace15}
          <div {...content.divProps6}>
            {content.divSpace16}
            <span {...content.spanProps3}>
              {content.spanSpace5}
              <svg {...content.svgProps2}>
                {content.svgSpace3}
                <path {...content.pathProps2}>
                  {content.pathSpace2}
                </path>
                {content.svgSpace4}
              </svg>
              {content.spanSpace6}
            </span>
            {content.divSpace17}
            <span {...content.spanProps4}>
              {content.spanSpace7}
              {content.label2}
              {content.spanSpace8}
            </span>
            {content.divSpace18}
            <h3 {...content.h3Props2}>
              {content.h3Space3}
              {content.cardTitle2}
              {content.h3Space4}
            </h3>
            {content.divSpace19}
            <p {...content.pProps3}>
              {content.pSpace5}
              {content.description3}
              {content.pSpace6}
            </p>
            {content.divSpace20}
          </div>
          {content.divSpace21}
        </div>
        {content.divSpace22}
      </div>
      {content.sectionSpace2}
    </section>
  )
}
