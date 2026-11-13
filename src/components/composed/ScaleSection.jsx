// Extracted from local content; copy, links and visual variants arrive through props.


export default function ScaleSection({ content }) {
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
          <p {...content.pProps}>
            {content.pSpace}
            {content.description}
            {content.pSpace2}
          </p>
          {content.divSpace6}
        </div>
        {content.divSpace7}
        <div {...content.divProps4}>
          {content.divSpace8}
          <div {...content.divProps5}>
            {content.divSpace9}
            <div {...content.divProps6}>
              {content.divSpace10}
              <span {...content.spanProps}>
                {content.spanSpace}
                {content.label}
                {content.spanSpace2}
              </span>
              {content.divSpace11}
              <sup {...content.supProps}>
                {content.supSpace}
                {content.text}
                {content.supSpace2}
              </sup>
              {content.divSpace12}
            </div>
            {content.divSpace13}
            <p {...content.pProps2}>
              {content.pSpace3}
              {content.description2}
              {content.pSpace4}
            </p>
            {content.divSpace14}
          </div>
          {content.divSpace15}
          <div {...content.divProps7}>
            {content.divSpace16}
            <div {...content.divProps8}>
              {content.divSpace17}
              <span {...content.spanProps2}>
                {content.spanSpace3}
                {content.label2}
                {content.spanSpace4}
              </span>
              {content.divSpace18}
              <sup {...content.supProps2}>
                {content.supSpace3}
                {content.text2}
                {content.supSpace4}
              </sup>
              {content.divSpace19}
            </div>
            {content.divSpace20}
            <p {...content.pProps3}>
              {content.pSpace5}
              {content.description3}
              {content.pSpace6}
            </p>
            {content.divSpace21}
          </div>
          {content.divSpace22}
          <div {...content.divProps9}>
            {content.divSpace23}
            <div {...content.divProps10}>
              {content.divSpace24}
              <span {...content.spanProps3}>
                {content.spanSpace5}
                {content.label3}
                {content.spanSpace6}
              </span>
              {content.divSpace25}
              <sup {...content.supProps3}>
                {content.supSpace5}
                {content.text3}
                {content.supSpace6}
              </sup>
              {content.divSpace26}
            </div>
            {content.divSpace27}
            <p {...content.pProps4}>
              {content.pSpace7}
              {content.description4}
              {content.pSpace8}
            </p>
            {content.divSpace28}
          </div>
          {content.divSpace29}
          <div {...content.divProps11}>
            {content.divSpace30}
            <div {...content.divProps12}>
              {content.divSpace31}
              <span {...content.spanProps4}>
                {content.spanSpace7}
                {content.label4}
                {content.spanSpace8}
              </span>
              {content.divSpace32}
            </div>
            {content.divSpace33}
            <p {...content.pProps5}>
              {content.pSpace9}
              {content.description5}
              {content.pSpace10}
            </p>
            {content.divSpace34}
          </div>
          {content.divSpace35}
        </div>
        {content.divSpace36}
      </div>
      {content.sectionSpace2}
    </section>
  )
}
