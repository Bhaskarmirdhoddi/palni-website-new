// Extracted from local content; copy, links and visual variants arrive through props.
import ContactDetails from './ContactDetails'

export default function DiscoveryCTAVariant2({ content }) {
  return (
    <section {...content.sectionProps}>
      {content.sectionSpace}
      <div {...content.divProps}>
        {content.divSpace}
        <div {...content.divProps2}>
          {content.divSpace2}
          <canvas {...content.canvasProps}>
            {content.canvasSpace}
          </canvas>
          {content.divSpace3}
          <div {...content.divProps3}>
            {content.divSpace4}
            <div {...content.divProps4}>
              {content.divSpace5}
              <h2 {...content.h2Props}>
                {content.h2Space}
                {content.heading}
                {content.h2Space2}
              </h2>
              {content.divSpace6}
              <p {...content.pProps}>
                {content.pSpace}
                {content.description}
                {content.pSpace2}
              </p>
              {content.divSpace7}
              <form {...content.formProps}>
                {content.formSpace}
                <label {...content.labelProps}>
                  {content.labelSpace}
                  {content.text}
                  {content.labelSpace2}
                </label>
                {content.formSpace2}
                <input {...content.inputProps} />
                {content.formSpace3}
                <button {...content.buttonProps}>
                  {content.buttonSpace}
                  {content.buttonLabel}
                  {content.buttonSpace2}
                </button>
                {content.formSpace4}
              </form>
              {content.divSpace8}
              <p {...content.pProps2}>
                {content.pSpace3}
              </p>
              {content.divSpace9}
            </div>
            {content.divSpace10}
            <div {...content.divProps5}>
              {content.divSpace11}
              <div {...content.divProps6}>
                {content.divSpace12}
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
                {content.divSpace13}
                <div {...content.divProps7}>
                  {content.divSpace14}
                  <b {...content.bProps}>
                    {content.bSpace}
                    {content.label}
                    {content.bSpace2}
                  </b>
                  {content.divSpace15}
                  <span {...content.spanProps2}>
                    {content.spanSpace3}
                    {content.label2}
                    {content.spanSpace4}
                  </span>
                  {content.divSpace16}
                </div>
                {content.divSpace17}
              </div>
              {content.divSpace18}
              <div {...content.divProps8}>
                {content.divSpace19}
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
                {content.divSpace20}
                <div {...content.divProps9}>
                  {content.divSpace21}
                  <b {...content.bProps2}>
                    {content.bSpace3}
                    {content.label3}
                    {content.bSpace4}
                  </b>
                  {content.divSpace22}
                  <span {...content.spanProps4}>
                    {content.spanSpace7}
                    {content.label4}
                    {content.spanSpace8}
                  </span>
                  {content.divSpace23}
                </div>
                {content.divSpace24}
              </div>
              {content.divSpace25}
            </div>
            {content.divSpace26}
          </div>
          {content.divSpace27}
          <ContactDetails content={content.contactDetails} />
          {content.divSpace28}
        </div>
        {content.divSpace29}
      </div>
      {content.sectionSpace2}
    </section>
  )
}
