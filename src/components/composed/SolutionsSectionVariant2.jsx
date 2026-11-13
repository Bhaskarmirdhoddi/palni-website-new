// Extracted from local content; copy, links and visual variants arrive through props.
import FeatureCard from './FeatureCard'

export default function SolutionsSectionVariant2({ content }) {
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
          <div {...content.divProps6}>
            {content.divSpace15}
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
            {content.divSpace16}
            <span {...content.spanProps4}>
              {content.spanSpace7}
              {content.label2}
              {content.spanSpace8}
            </span>
            {content.divSpace17}
            <h3 {...content.h3Props2}>
              {content.h3Space3}
              {content.cardTitle2}
              {content.h3Space4}
            </h3>
            {content.divSpace18}
            <p {...content.pProps3}>
              {content.pSpace5}
              {content.description3}
              {content.pSpace6}
            </p>
            {content.divSpace19}
          </div>
          {content.divSpace20}
          <div {...content.divProps7}>
            {content.divSpace21}
            <span {...content.spanProps5}>
              {content.spanSpace9}
              <svg {...content.svgProps3}>
                {content.svgSpace5}
                <path {...content.pathProps3}>
                  {content.pathSpace3}
                </path>
                {content.svgSpace6}
              </svg>
              {content.spanSpace10}
            </span>
            {content.divSpace22}
            <span {...content.spanProps6}>
              {content.spanSpace11}
              {content.label3}
              {content.spanSpace12}
            </span>
            {content.divSpace23}
            <h3 {...content.h3Props3}>
              {content.h3Space5}
              {content.cardTitle3}
              {content.h3Space6}
            </h3>
            {content.divSpace24}
            <p {...content.pProps4}>
              {content.pSpace7}
              {content.description4}
              {content.pSpace8}
            </p>
            {content.divSpace25}
          </div>
          {content.divSpace26}
          <FeatureCard content={content.featureCard} />
          {content.divSpace27}
          <div {...content.divProps8}>
            {content.divSpace28}
            <span {...content.spanProps7}>
              {content.spanSpace13}
              <svg {...content.svgProps4}>
                {content.svgSpace7}
                <path {...content.pathProps4}>
                  {content.pathSpace4}
                </path>
                {content.svgSpace8}
              </svg>
              {content.spanSpace14}
            </span>
            {content.divSpace29}
            <span {...content.spanProps8}>
              {content.spanSpace15}
              {content.label4}
              {content.spanSpace16}
            </span>
            {content.divSpace30}
            <h3 {...content.h3Props4}>
              {content.h3Space7}
              {content.cardTitle4}
              {content.h3Space8}
            </h3>
            {content.divSpace31}
            <p {...content.pProps5}>
              {content.pSpace9}
              {content.description5}
              {content.pSpace10}
            </p>
            {content.divSpace32}
          </div>
          {content.divSpace33}
          <FeatureCard content={content.featureCard2} />
          {content.divSpace34}
        </div>
        {content.divSpace35}
      </div>
      {content.sectionSpace2}
    </section>
  )
}
