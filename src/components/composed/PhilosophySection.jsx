// Extracted from local content; copy, links and visual variants arrive through props.


export default function PhilosophySection({ content }) {
  return (
    <section {...content.sectionProps}>
      {content.sectionSpace}
      <div {...content.divProps}>
        {content.divSpace}
        <div {...content.divProps2}>
          {content.divSpace2}
          <figure {...content.figureProps}>
            {content.figureSpace}
            <img {...content.imgProps} />
            {content.figureSpace2}
            <figcaption {...content.figcaptionProps}>
              {content.figcaptionSpace}
              <span {...content.spanProps}>
                {content.spanSpace}
              </span>
              {content.figcaptionSpace2}
              {content.text}
              {content.figcaptionSpace3}
            </figcaption>
            {content.figureSpace3}
          </figure>
          {content.divSpace3}
          <div {...content.divProps3}>
            {content.divSpace4}
            <h2 {...content.h2Props}>
              {content.h2Space}
              {content.heading}
              {content.h2Space2}
            </h2>
            {content.divSpace5}
            <p {...content.pProps}>
              {content.pSpace}
              {content.description}
              {content.pSpace2}
            </p>
            {content.divSpace6}
            <div {...content.divProps4}>
              {content.divSpace7}
              <div {...content.divProps5}>
                {content.divSpace8}
                <div {...content.divProps6}>
                  {content.divSpace9}
                  <span {...content.spanProps2}>
                    {content.spanSpace2}
                    {content.label}
                    {content.spanSpace3}
                  </span>
                  {content.divSpace10}
                  <sup {...content.supProps}>
                    {content.supSpace}
                    {content.text2}
                    {content.supSpace2}
                  </sup>
                  {content.divSpace11}
                </div>
                {content.divSpace12}
                <p {...content.pProps2}>
                  {content.pSpace3}
                  {content.description2}
                  {content.pSpace4}
                </p>
                {content.divSpace13}
              </div>
              {content.divSpace14}
              <div {...content.divProps7}>
                {content.divSpace15}
                <div {...content.divProps8}>
                  {content.divSpace16}
                  <span {...content.spanProps3}>
                    {content.spanSpace4}
                    {content.label2}
                    {content.spanSpace5}
                  </span>
                  {content.divSpace17}
                  <sup {...content.supProps2}>
                    {content.supSpace3}
                    {content.text3}
                    {content.supSpace4}
                  </sup>
                  {content.divSpace18}
                </div>
                {content.divSpace19}
                <p {...content.pProps3}>
                  {content.pSpace5}
                  {content.description3}
                  {content.pSpace6}
                </p>
                {content.divSpace20}
              </div>
              {content.divSpace21}
              <div {...content.divProps9}>
                {content.divSpace22}
                <div {...content.divProps10}>
                  {content.divSpace23}
                  <span {...content.spanProps4}>
                    {content.spanSpace6}
                    {content.label3}
                    {content.spanSpace7}
                  </span>
                  {content.divSpace24}
                  <sup {...content.supProps3}>
                    {content.supSpace5}
                    {content.text4}
                    {content.supSpace6}
                  </sup>
                  {content.divSpace25}
                </div>
                {content.divSpace26}
                <p {...content.pProps4}>
                  {content.pSpace7}
                  {content.description4}
                  {content.pSpace8}
                </p>
                {content.divSpace27}
              </div>
              {content.divSpace28}
            </div>
            {content.divSpace29}
          </div>
          {content.divSpace30}
        </div>
        {content.divSpace31}
      </div>
      {content.sectionSpace2}
    </section>
  )
}
