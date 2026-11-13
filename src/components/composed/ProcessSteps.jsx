// Extracted from local content; copy, links and visual variants arrive through props.


export default function ProcessSteps({ content }) {
  return (
    <ol {...content.olProps}>
      {content.olSpace}
      <li {...content.liProps}>
        {content.liSpace}
        <span {...content.spanProps}>
          {content.spanSpace}
          {content.label}
          {content.spanSpace2}
        </span>
        {content.liSpace2}
        <h3 {...content.h3Props}>
          {content.h3Space}
          {content.cardTitle}
          {content.h3Space2}
        </h3>
        {content.liSpace3}
        <p {...content.pProps}>
          {content.pSpace}
          {content.description}
          {content.pSpace2}
        </p>
        {content.liSpace4}
      </li>
      {content.olSpace2}
      <li {...content.liProps2}>
        {content.liSpace5}
        <span {...content.spanProps2}>
          {content.spanSpace3}
          {content.label2}
          {content.spanSpace4}
        </span>
        {content.liSpace6}
        <h3 {...content.h3Props2}>
          {content.h3Space3}
          {content.cardTitle2}
          {content.h3Space4}
        </h3>
        {content.liSpace7}
        <p {...content.pProps2}>
          {content.pSpace3}
          {content.description2}
          {content.pSpace4}
        </p>
        {content.liSpace8}
      </li>
      {content.olSpace3}
      <li {...content.liProps3}>
        {content.liSpace9}
        <span {...content.spanProps3}>
          {content.spanSpace5}
          {content.label3}
          {content.spanSpace6}
        </span>
        {content.liSpace10}
        <h3 {...content.h3Props3}>
          {content.h3Space5}
          {content.cardTitle3}
          {content.h3Space6}
        </h3>
        {content.liSpace11}
        <p {...content.pProps3}>
          {content.pSpace5}
          {content.description3}
          {content.pSpace6}
        </p>
        {content.liSpace12}
      </li>
      {content.olSpace4}
      <li {...content.liProps4}>
        {content.liSpace13}
        <span {...content.spanProps4}>
          {content.spanSpace7}
          {content.label4}
          {content.spanSpace8}
        </span>
        {content.liSpace14}
        <h3 {...content.h3Props4}>
          {content.h3Space7}
          {content.cardTitle4}
          {content.h3Space8}
        </h3>
        {content.liSpace15}
        <p {...content.pProps4}>
          {content.pSpace7}
          {content.description4}
          {content.pSpace8}
        </p>
        {content.liSpace16}
      </li>
      {content.olSpace5}
    </ol>
  )
}
