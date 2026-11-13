// Extracted from local content; copy, links and visual variants arrive through props.


export default function FCoNavigation({ content }) {
  return (
    <nav {...content.navProps}>
      {content.navSpace}
      <h2 {...content.h2Props}>
        {content.h2Space}
        {content.heading}
        {content.h2Space2}
      </h2>
      {content.navSpace2}
      <ul {...content.ulProps}>
        {content.ulSpace}
        <li {...content.liProps}>
          {content.liSpace}
          <a {...content.aProps}>
            {content.aSpace}
            {content.linkLabel}
            {content.aSpace2}
          </a>
          {content.liSpace2}
        </li>
        {content.ulSpace2}
        <li {...content.liProps2}>
          {content.liSpace3}
          <a {...content.aProps2}>
            {content.aSpace3}
            {content.linkLabel2}
            {content.aSpace4}
          </a>
          {content.liSpace4}
        </li>
        {content.ulSpace3}
        <li {...content.liProps3}>
          {content.liSpace5}
          <a {...content.aProps3}>
            {content.aSpace5}
            {content.linkLabel3}
            {content.aSpace6}
          </a>
          {content.liSpace6}
        </li>
        {content.ulSpace4}
        <li {...content.liProps4}>
          {content.liSpace7}
          <a {...content.aProps4}>
            {content.aSpace7}
            {content.linkLabel4}
            {content.aSpace8}
          </a>
          {content.liSpace8}
        </li>
        {content.ulSpace5}
        <li {...content.liProps5}>
          {content.liSpace9}
          <a {...content.aProps5}>
            {content.aSpace9}
            {content.linkLabel5}
            {content.aSpace10}
          </a>
          {content.liSpace10}
        </li>
        {content.ulSpace6}
        <li {...content.liProps6}>
          {content.liSpace11}
          <a {...content.aProps6}>
            {content.aSpace11}
            {content.linkLabel6}
            {content.aSpace12}
          </a>
          {content.liSpace12}
        </li>
        {content.ulSpace7}
        <li {...content.liProps7}>
          {content.liSpace13}
          <a {...content.aProps7}>
            {content.aSpace13}
            {content.linkLabel7}
            {content.aSpace14}
          </a>
          {content.liSpace14}
        </li>
        {content.ulSpace8}
      </ul>
      {content.navSpace3}
    </nav>
  )
}
