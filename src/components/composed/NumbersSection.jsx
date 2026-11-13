// Extracted from local content; copy, links and visual variants arrive through props.


export default function NumbersSection({ content }) {
  return (
    <section {...content.sectionProps}>
      {content.sectionSpace}
      <div {...content.divProps}>
        {content.divSpace}
        <div {...content.divProps2}>
          {content.divSpace2}
          <div {...content.divProps3}>
            {content.divSpace3}
            <h2 {...content.h2Props}>
              {content.h2Space}
              {content.heading}
              {content.h2Space2}
            </h2>
            {content.divSpace4}
          </div>
          {content.divSpace5}
        </div>
        {content.divSpace6}
        <div {...content.divProps4}>
          {content.divSpace7}
          <div {...content.divProps5}>
            {content.divSpace8}
            <div {...content.divProps6}>
              {content.divSpace9}
              <span {...content.spanProps}>
                {content.spanSpace}
                {content.label}
                {content.spanSpace2}
              </span>
              {content.divSpace10}
            </div>
            {content.divSpace11}
            <p {...content.pProps}>
              {content.pSpace}
              {content.description}
              {content.pSpace2}
            </p>
            {content.divSpace12}
          </div>
          {content.divSpace13}
          <div {...content.divProps7}>
            {content.divSpace14}
            <div {...content.divProps8}>
              {content.divSpace15}
              <span {...content.spanProps2}>
                {content.spanSpace3}
                {content.label2}
                {content.spanSpace4}
              </span>
              {content.divSpace16}
              <sup {...content.supProps}>
                {content.supSpace}
                {content.text}
                {content.supSpace2}
              </sup>
              {content.divSpace17}
            </div>
            {content.divSpace18}
            <p {...content.pProps2}>
              {content.pSpace3}
              {content.description2}
              {content.pSpace4}
            </p>
            {content.divSpace19}
          </div>
          {content.divSpace20}
          <div {...content.divProps9}>
            {content.divSpace21}
            <div {...content.divProps10}>
              {content.divSpace22}
              <span {...content.spanProps3}>
                {content.spanSpace5}
                {content.label3}
                {content.spanSpace6}
              </span>
              {content.divSpace23}
            </div>
            {content.divSpace24}
            <p {...content.pProps3}>
              {content.pSpace5}
              {content.description3}
              {content.pSpace6}
            </p>
            {content.divSpace25}
          </div>
          {content.divSpace26}
          <div {...content.divProps11}>
            {content.divSpace27}
            <div {...content.divProps12}>
              {content.divSpace28}
              <span {...content.spanProps4}>
                {content.spanSpace7}
                {content.label4}
                {content.spanSpace8}
              </span>
              {content.divSpace29}
            </div>
            {content.divSpace30}
            <p {...content.pProps4}>
              {content.pSpace7}
              {content.description4}
              {content.pSpace8}
            </p>
            {content.divSpace31}
          </div>
          {content.divSpace32}
        </div>
        {content.divSpace33}
      </div>
      {content.sectionSpace2}
    </section>
  )
}
