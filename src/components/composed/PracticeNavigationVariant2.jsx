// Extracted from local content; copy, links and visual variants arrive through props.


export default function PracticeNavigationVariant2({ content }) {
  return (
    <div {...content.divProps}>
      {content.divSpace}
      <a {...content.aProps}>
        {content.aSpace}
        <span {...content.spanProps}>
          {content.spanSpace}
          <svg {...content.svgProps}>
            {content.svgSpace}
            <path {...content.pathProps}>
              {content.pathSpace}
            </path>
            {content.svgSpace2}
            <rect {...content.rectProps}>
              {content.rectSpace}
            </rect>
            {content.svgSpace3}
            <rect {...content.rectProps2}>
              {content.rectSpace2}
            </rect>
            {content.svgSpace4}
            <rect {...content.rectProps3}>
              {content.rectSpace3}
            </rect>
            {content.svgSpace5}
            <rect {...content.rectProps4}>
              {content.rectSpace4}
            </rect>
            {content.svgSpace6}
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
