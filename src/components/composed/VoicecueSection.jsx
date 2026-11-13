// Extracted from local content; copy, links and visual variants arrive through props.


export default function VoicecueSection({ content }) {
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
            <div {...content.divProps4}>
              {content.divSpace6}
              <a {...content.aProps}>
                {content.aSpace}
                {content.linkLabel}
                {content.aSpace2}
              </a>
              {content.divSpace7}
            </div>
            {content.divSpace8}
          </div>
          {content.divSpace9}
          <figure {...content.figureProps}>
            {content.figureSpace}
            <canvas {...content.canvasProps}>
              {content.canvasSpace}
            </canvas>
            {content.figureSpace2}
            <p {...content.pProps2}>
              {content.pSpace3}
              {content.description2}
              {content.pSpace4}
            </p>
            {content.figureSpace3}
            <dl {...content.dlProps}>
              {content.dlSpace}
              <div {...content.divProps5}>
                {content.divSpace10}
                <dt {...content.dtProps}>
                  {content.dtSpace}
                  {content.text}
                  {content.dtSpace2}
                </dt>
                {content.divSpace11}
                <dd {...content.ddProps}>
                  {content.ddSpace}
                  {content.text2}
                  {content.ddSpace2}
                </dd>
                {content.divSpace12}
              </div>
              {content.dlSpace2}
              <div {...content.divProps6}>
                {content.divSpace13}
                <dt {...content.dtProps2}>
                  {content.dtSpace3}
                  {content.text3}
                  {content.dtSpace4}
                </dt>
                {content.divSpace14}
                <dd {...content.ddProps2}>
                  {content.ddSpace3}
                  {content.text4}
                  {content.ddSpace4}
                </dd>
                {content.divSpace15}
              </div>
              {content.dlSpace3}
              <div {...content.divProps7}>
                {content.divSpace16}
                <dt {...content.dtProps3}>
                  {content.dtSpace5}
                  {content.text5}
                  {content.dtSpace6}
                </dt>
                {content.divSpace17}
                <dd {...content.ddProps3}>
                  {content.ddSpace5}
                  {content.text6}
                  {content.ddSpace6}
                </dd>
                {content.divSpace18}
              </div>
              {content.dlSpace4}
              <div {...content.divProps8}>
                {content.divSpace19}
                <dt {...content.dtProps4}>
                  {content.dtSpace7}
                  {content.text7}
                  {content.dtSpace8}
                </dt>
                {content.divSpace20}
                <dd {...content.ddProps4}>
                  {content.ddSpace7}
                  {content.text8}
                  {content.ddSpace8}
                </dd>
                {content.divSpace21}
              </div>
              {content.dlSpace5}
            </dl>
            {content.figureSpace4}
            <figcaption {...content.figcaptionProps}>
              {content.figcaptionSpace}
              {content.text9}
              {content.figcaptionSpace2}
            </figcaption>
            {content.figureSpace5}
          </figure>
          {content.divSpace22}
        </div>
        {content.divSpace23}
      </div>
      {content.sectionSpace2}
    </section>
  )
}
