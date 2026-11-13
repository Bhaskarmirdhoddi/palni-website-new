// Extracted from local content; copy, links and visual variants arrive through props.


export default function DiscoverySteps({ content }) {
  return (
    <ol {...content.olProps}>
      {content.olSpace}
      <li {...content.liProps}>
        {content.liSpace}
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
        {content.liSpace2}
        <div {...content.divProps}>
          {content.divSpace}
          <b {...content.bProps}>
            {content.bSpace}
            {content.label}
            {content.bSpace2}
          </b>
          {content.divSpace2}
          <span {...content.spanProps2}>
            {content.spanSpace3}
            {content.label2}
            {content.spanSpace4}
          </span>
          {content.divSpace3}
        </div>
        {content.liSpace3}
      </li>
      {content.olSpace2}
      <li {...content.liProps2}>
        {content.liSpace4}
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
        {content.liSpace5}
        <div {...content.divProps2}>
          {content.divSpace4}
          <b {...content.bProps2}>
            {content.bSpace3}
            {content.label3}
            {content.bSpace4}
          </b>
          {content.divSpace5}
          <span {...content.spanProps4}>
            {content.spanSpace7}
            {content.label4}
            {content.spanSpace8}
          </span>
          {content.divSpace6}
        </div>
        {content.liSpace6}
      </li>
      {content.olSpace3}
      <li {...content.liProps3}>
        {content.liSpace7}
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
        {content.liSpace8}
        <div {...content.divProps3}>
          {content.divSpace7}
          <b {...content.bProps3}>
            {content.bSpace5}
            {content.label5}
            {content.bSpace6}
          </b>
          {content.divSpace8}
          <span {...content.spanProps6}>
            {content.spanSpace11}
            {content.label6}
            {content.spanSpace12}
          </span>
          {content.divSpace9}
        </div>
        {content.liSpace9}
      </li>
      {content.olSpace4}
    </ol>
  )
}
