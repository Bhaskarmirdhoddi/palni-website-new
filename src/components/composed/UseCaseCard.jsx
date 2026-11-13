// Extracted from local content; copy, links and visual variants arrive through props.


export default function UseCaseCard({ content }) {
  return (
    <article {...content.articleProps}>
      {content.articleSpace}
      <div {...content.divProps}>
        {content.divSpace}
        <span {...content.spanProps}>
          {content.spanSpace}
          {content.label}
          {content.spanSpace2}
        </span>
        {content.divSpace2}
        <div {...content.divProps2}>
          {content.divSpace3}
          {content.text}
          {content.divSpace4}
        </div>
        {content.divSpace5}
        <h3 {...content.h3Props}>
          {content.h3Space}
          {content.cardTitle}
          {content.h3Space2}
        </h3>
        {content.divSpace6}
      </div>
      {content.articleSpace2}
      <dl {...content.dlProps}>
        {content.dlSpace}
        <div {...content.divProps3}>
          {content.divSpace7}
          <dt {...content.dtProps}>
            {content.dtSpace}
            {content.text2}
            {content.dtSpace2}
          </dt>
          {content.divSpace8}
          <dd {...content.ddProps}>
            {content.ddSpace}
            {content.text3}
            {content.ddSpace2}
          </dd>
          {content.divSpace9}
        </div>
        {content.dlSpace2}
        <div {...content.divProps4}>
          {content.divSpace10}
          <dt {...content.dtProps2}>
            {content.dtSpace3}
            {content.text4}
            {content.dtSpace4}
          </dt>
          {content.divSpace11}
          <dd {...content.ddProps2}>
            {content.ddSpace3}
            {content.text5}
            {content.ddSpace4}
          </dd>
          {content.divSpace12}
        </div>
        {content.dlSpace3}
        <div {...content.divProps5}>
          {content.divSpace13}
          <dt {...content.dtProps3}>
            {content.dtSpace5}
            {content.text6}
            {content.dtSpace6}
          </dt>
          {content.divSpace14}
          <dd {...content.ddProps3}>
            {content.ddSpace5}
            {content.text7}
            {content.ddSpace6}
          </dd>
          {content.divSpace15}
        </div>
        {content.dlSpace4}
      </dl>
      {content.articleSpace3}
    </article>
  )
}
