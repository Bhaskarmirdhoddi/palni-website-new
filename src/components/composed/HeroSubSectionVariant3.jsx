// Extracted from local content; copy, links and visual variants arrive through props.
import BreadcrumbsVariant2 from './BreadcrumbsVariant2'

export default function HeroSubSectionVariant3({ content }) {
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
        <a {...content.aProps}>
          {content.aSpace}
          <b {...content.bProps}>
            {content.bSpace}
            {content.label}
            {content.bSpace2}
          </b>
          {content.aSpace2}
          {content.linkLabel}
          {content.aSpace3}
        </a>
        {content.divSpace3}
        <h1 {...content.h1Props}>
          {content.h1Space}
          <span {...content.spanProps}>
            {content.spanSpace}
            <span {...content.spanProps2}>
              {content.spanSpace2}
              {content.label2}
              {content.spanSpace3}
            </span>
            {content.spanSpace4}
          </span>
          {content.h1Space2}
          <span {...content.spanProps3}>
            {content.spanSpace5}
            <span {...content.spanProps4}>
              {content.spanSpace6}
              {content.label3}
              {content.spanSpace7}
            </span>
            {content.spanSpace8}
          </span>
          {content.h1Space3}
          <span {...content.spanProps5}>
            {content.spanSpace9}
            <span {...content.spanProps6}>
              {content.spanSpace10}
              {content.label4}
              {content.spanSpace11}
            </span>
            {content.spanSpace12}
          </span>
          {content.h1Space4}
          <br {...content.brProps} />
          {content.h1Space5}
          <span {...content.spanProps7}>
            {content.spanSpace13}
            {content.label5}
            {content.spanSpace14}
          </span>
          {content.h1Space6}
          <span {...content.spanProps8}>
            {content.spanSpace15}
          </span>
          {content.h1Space7}
        </h1>
        {content.divSpace4}
        <p {...content.pProps}>
          {content.pSpace}
          {content.description}
          {content.pSpace2}
        </p>
        {content.divSpace5}
        <div {...content.divProps2}>
          {content.divSpace6}
          <a {...content.aProps2}>
            {content.aSpace4}
            {content.linkLabel2}
            {content.aSpace5}
          </a>
          {content.divSpace7}
          <a {...content.aProps3}>
            {content.aSpace6}
            {content.linkLabel3}
            {content.aSpace7}
          </a>
          {content.divSpace8}
        </div>
        {content.divSpace9}
      </div>
      {content.sectionSpace3}
    </section>
  )
}
