// Extracted from local content; copy, links and visual variants arrive through props.


export default function PracticeNavigation({ content }) {
  return (
    <div {...content.divProps}>
      {content.divSpace}
      <a {...content.aProps}>
        {content.aSpace}
        <span {...content.spanProps}>
          {content.spanSpace}
          <svg {...content.svgProps}>
            {content.svgSpace}
            <ellipse {...content.ellipseProps}>
              {content.ellipseSpace}
            </ellipse>
            {content.svgSpace2}
            <ellipse {...content.ellipseProps2}>
              {content.ellipseSpace2}
            </ellipse>
            {content.svgSpace3}
            <circle {...content.circleProps}>
              {content.circleSpace}
            </circle>
            {content.svgSpace4}
            <circle {...content.circleProps2}>
              {content.circleSpace2}
            </circle>
            {content.svgSpace5}
          </svg>
          {content.spanSpace2}
        </span>
        {content.aSpace2}
        <span {...content.spanProps2}>
          {content.spanSpace3}
          <b {...content.bProps}>
            {content.bSpace}
            {content.label}
            {content.bSpace2}
          </b>
          {content.spanSpace4}
          <span {...content.spanProps3}>
            {content.spanSpace5}
            {content.label2}
            {content.spanSpace6}
          </span>
          {content.spanSpace7}
        </span>
        {content.aSpace3}
      </a>
      {content.divSpace2}
      <ul {...content.ulProps}>
        {content.ulSpace}
        <li {...content.liProps}>
          {content.liSpace}
          <a {...content.aProps2}>
            {content.aSpace4}
            {content.linkLabel}
            {content.aSpace5}
          </a>
          {content.liSpace2}
        </li>
        {content.ulSpace2}
        <li {...content.liProps2}>
          {content.liSpace3}
          <a {...content.aProps3}>
            {content.aSpace6}
            {content.linkLabel2}
            {content.aSpace7}
          </a>
          {content.liSpace4}
        </li>
        {content.ulSpace3}
        <li {...content.liProps3}>
          {content.liSpace5}
          <a {...content.aProps4}>
            {content.aSpace8}
            {content.linkLabel3}
            {content.aSpace9}
          </a>
          {content.liSpace6}
        </li>
        {content.ulSpace4}
        <li {...content.liProps4}>
          {content.liSpace7}
          <a {...content.aProps5}>
            {content.aSpace10}
            {content.linkLabel4}
            {content.aSpace11}
          </a>
          {content.liSpace8}
        </li>
        {content.ulSpace5}
      </ul>
      {content.divSpace3}
    </div>
  )
}
