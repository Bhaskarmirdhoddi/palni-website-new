// Extracted from local content; copy, links and visual variants arrive through props.


export default function ValuesSection({ content }) {
  return (
    <section {...content.sectionProps}>
      {content.sectionSpace}
      <div {...content.divProps}>
        {content.divSpace}
        <div {...content.divProps2}>
          {content.divSpace2}
          <span {...content.spanProps}>
            {content.spanSpace}
            {content.label}
            {content.spanSpace2}
          </span>
          {content.divSpace3}
          <span {...content.spanProps2}>
            {content.spanSpace3}
            {content.label2}
            {content.spanSpace4}
          </span>
          {content.divSpace4}
          <span {...content.spanProps3}>
            {content.spanSpace5}
            {content.label3}
            {content.spanSpace6}
          </span>
          {content.divSpace5}
          <span {...content.spanProps4}>
            {content.spanSpace7}
            {content.label4}
            {content.spanSpace8}
          </span>
          {content.divSpace6}
          <span {...content.spanProps5}>
            {content.spanSpace9}
            {content.label5}
            {content.spanSpace10}
          </span>
          {content.divSpace7}
          <span {...content.spanProps6}>
            {content.spanSpace11}
            {content.label6}
            {content.spanSpace12}
          </span>
          {content.divSpace8}
          <span {...content.spanProps7}>
            {content.spanSpace13}
            {content.label7}
            {content.spanSpace14}
          </span>
          {content.divSpace9}
          <span {...content.spanProps8}>
            {content.spanSpace15}
            {content.label8}
            {content.spanSpace16}
          </span>
          {content.divSpace10}
          <span {...content.spanProps9}>
            {content.spanSpace17}
            {content.label9}
            {content.spanSpace18}
          </span>
          {content.divSpace11}
          <span {...content.spanProps10}>
            {content.spanSpace19}
            {content.label10}
            {content.spanSpace20}
          </span>
          {content.divSpace12}
          <span {...content.spanProps11}>
            {content.spanSpace21}
            {content.label11}
            {content.spanSpace22}
          </span>
          {content.divSpace13}
          <span {...content.spanProps12}>
            {content.spanSpace23}
            {content.label12}
            {content.spanSpace24}
          </span>
          {content.divSpace14}
        </div>
        {content.divSpace15}
        <p {...content.pProps}>
          {content.pSpace}
          {content.description}
          {content.pSpace2}
        </p>
        {content.divSpace16}
      </div>
      {content.sectionSpace2}
    </section>
  )
}
