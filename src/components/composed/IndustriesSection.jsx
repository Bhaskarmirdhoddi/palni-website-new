// Extracted from local content; copy, links and visual variants arrive through props.
import IndustryCard from './IndustryCard'

export default function IndustriesSection({ content }) {
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
          <IndustryCard content={content.industryCard} />
          {content.divSpace9}
          <article {...content.articleProps}>
            {content.articleSpace}
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
            {content.articleSpace2}
            <h3 {...content.h3Props}>
              {content.h3Space}
              {content.cardTitle}
              {content.h3Space2}
            </h3>
            {content.articleSpace3}
            <p {...content.pProps2}>
              {content.pSpace3}
              {content.description2}
              {content.pSpace4}
            </p>
            {content.articleSpace4}
            <p {...content.pProps3}>
              {content.pSpace5}
              {content.description3}
              {content.pSpace6}
            </p>
            {content.articleSpace5}
            <ul {...content.ulProps}>
              {content.ulSpace}
              <li {...content.liProps}>
                {content.liSpace}
                {content.text}
                {content.liSpace2}
              </li>
              {content.ulSpace2}
              <li {...content.liProps2}>
                {content.liSpace3}
                {content.text2}
                {content.liSpace4}
              </li>
              {content.ulSpace3}
              <li {...content.liProps3}>
                {content.liSpace5}
                {content.text3}
                {content.liSpace6}
              </li>
              {content.ulSpace4}
            </ul>
            {content.articleSpace6}
          </article>
          {content.divSpace10}
          <IndustryCard content={content.industryCard2} />
          {content.divSpace11}
        </div>
        {content.divSpace12}
      </div>
      {content.sectionSpace2}
    </section>
  )
}
