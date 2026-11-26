// Extracted from local content; copy, links and visual variants arrive through props.


export default function CertifiedSection({ content }) {
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
            <p {...content.pProps}>
              {content.pSpace}
              {content.description}
              {content.pSpace2}
            </p>
            {content.divSpace5}
          </div>
          {content.divSpace6}
          <div {...content.divProps4}>
            {content.divSpace7}
            <h3 {...content.h3Props}>
              {content.h3Space}
              {content.cardTitle}
              {content.h3Space2}
            </h3>
            {content.divSpace8}
            <div {...content.divProps5}>
              {content.divSpace9}
              <div {...content.divProps6}>
                {content.divSpace10}
                <div {...content.divProps7}>
                  {content.divSpace11}
                  <span {...content.spanProps}>
                    {content.spanSpace}
                    {content.label}
                    {content.spanSpace2}
                  </span>
                  {content.divSpace12}
                  <sup {...content.supProps}>
                    {content.supSpace}
                    {content.text}
                    {content.supSpace2}
                  </sup>
                  {content.divSpace13}
                </div>
                {content.divSpace14}
                <p {...content.pProps2}>
                  {content.pSpace3}
                  {content.description2}
                  {content.pSpace4}
                </p>
                {content.divSpace15}
              </div>
              {content.divSpace16}
              <div {...content.divProps8}>
                {content.divSpace17}
                <div {...content.divProps9}>
                  {content.divSpace18}
                  <span {...content.spanProps2}>
                    {content.spanSpace3}
                    {content.label2}
                    {content.spanSpace4}
                  </span>
                  {content.divSpace19}
                  <sup {...content.supProps2}>
                    {content.supSpace3}
                    {content.text2}
                    {content.supSpace4}
                  </sup>
                  {content.divSpace20}
                </div>
                {content.divSpace21}
                <p {...content.pProps3}>
                  {content.pSpace5}
                  {content.description3}
                  {content.pSpace6}
                </p>
                {content.divSpace22}
              </div>
              {content.divSpace23}
            </div>
          </div>
          {content.divSpace33}
        </div>
        {content.divSpace34}
      </div>
      {content.sectionSpace2}
    </section>
  )
}
