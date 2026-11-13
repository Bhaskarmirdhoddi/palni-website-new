// Extracted from local content; copy, links and visual variants arrive through props.
import BreadcrumbsVariant2 from './BreadcrumbsVariant2'

export default function HeroSubSectionVariant4({ content }) {
  return (
    <section {...content.sectionProps}>
      {content.sectionSpace}
      <canvas {...content.canvasProps}>
        {content.canvasSpace}
      </canvas>
      {content.sectionSpace2}
      <div {...content.divProps}>
        {content.divSpace}
        <BreadcrumbsVariant2 content={content.breadcrumbsVariant2} />
        {content.divSpace2}
        <h1 {...content.h1Props}>
          {content.h1Space}
          <span {...content.spanProps}>
            {content.spanSpace}
            <span {...content.spanProps2}>
              {content.spanSpace2}
              {content.label}
              {content.spanSpace3}
            </span>
            {content.spanSpace4}
          </span>
          {content.h1Space2}
          <span {...content.spanProps3}>
            {content.spanSpace5}
            <span {...content.spanProps4}>
              {content.spanSpace6}
              {content.label2}
              {content.spanSpace7}
            </span>
            {content.spanSpace8}
          </span>
          {content.h1Space3}
          <span {...content.spanProps5}>
            {content.spanSpace9}
            <span {...content.spanProps6}>
              {content.spanSpace10}
              {content.label3}
              {content.spanSpace11}
            </span>
            {content.spanSpace12}
          </span>
          {content.h1Space4}
          <span {...content.spanProps7}>
            {content.spanSpace13}
            <span {...content.spanProps8}>
              {content.spanSpace14}
              {content.label4}
              {content.spanSpace15}
            </span>
            {content.spanSpace16}
          </span>
          {content.h1Space5}
          <span {...content.spanProps9}>
            {content.spanSpace17}
            <span {...content.spanProps10}>
              {content.spanSpace18}
              {content.label5}
              {content.spanSpace19}
            </span>
            {content.spanSpace20}
          </span>
          {content.h1Space6}
        </h1>
        {content.divSpace3}
        <p {...content.pProps}>
          {content.pSpace}
          {content.description}
          {content.pSpace2}
        </p>
        {content.divSpace4}
      </div>
      {content.sectionSpace3}
    </section>
  )
}
