// Extracted from local content; copy, links and visual variants arrive through props.
import BreadcrumbsVariant3 from './BreadcrumbsVariant3'

export default function HeroSubHasSceneSection({ content }) {
  return (
    <section {...content.sectionProps}>
      {content.sectionSpace}
      <canvas {...content.canvasProps}>
        {content.canvasSpace}
      </canvas>
      {content.sectionSpace2}
      <div {...content.divProps}>
        {content.divSpace}
        <BreadcrumbsVariant3 content={content.breadcrumbsVariant3} />
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
          <span {...content.spanProps11}>
            {content.spanSpace21}
            <span {...content.spanProps12}>
              {content.spanSpace22}
              {content.label6}
              {content.spanSpace23}
            </span>
            {content.spanSpace24}
          </span>
          {content.h1Space7}
          <span {...content.spanProps13}>
            {content.spanSpace25}
            <span {...content.spanProps14}>
              {content.spanSpace26}
              {content.label7}
              {content.spanSpace27}
            </span>
            {content.spanSpace28}
          </span>
          {content.h1Space8}
        </h1>
        {content.divSpace3}
        <p {...content.pProps}>
          {content.pSpace}
          {content.description}
          {content.pSpace2}
        </p>
        {content.divSpace4}
        <div {...content.divProps2}>
          {content.divSpace5}
          <a {...content.aProps}>
            {content.aSpace}
            {content.linkLabel}
            {content.aSpace2}
          </a>
          {content.divSpace6}
        </div>
        {content.divSpace7}
      </div>
      {content.sectionSpace3}
    </section>
  )
}
