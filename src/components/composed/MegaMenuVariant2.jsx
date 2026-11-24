// Extracted from local content; copy, links and visual variants arrive through props.


export default function MegaMenuVariant2({ content }) {
  return (
    <div {...content.divProps}>
      {content.divSpace}
      <button {...content.buttonProps}>
        {content.buttonSpace}
        {content.buttonLabel}
        {content.buttonSpace2}
        <svg {...content.svgProps}>
          {content.svgSpace}
          <path {...content.pathProps}>
            {content.pathSpace}
          </path>
          {content.svgSpace2}
        </svg>
        {content.buttonSpace3}
      </button>
      {content.divSpace2}
      <div {...content.divProps2}>
        {content.divSpace3}
        <div {...content.divProps3}>
          {content.divSpace4}
          <div {...content.divProps4}>
            {content.divSpace5}
            <p {...content.pProps}>
              {content.pSpace}
              {content.description}
              {content.pSpace2}
            </p>
            {content.divSpace6}
            <a {...content.aProps}>
              {content.aSpace}
              <span {...content.spanProps}>
                {content.spanSpace}
                <svg {...content.svgProps2}>
                  {content.svgSpace3}
                  <path {...content.pathProps2}>
                    {content.pathSpace2}
                  </path>
                  {content.svgSpace4}
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
            {content.divSpace7}
            <a {...content.aProps2}>
              {content.aSpace4}
              <span {...content.spanProps4}>
                {content.spanSpace8}
                <svg {...content.svgProps3}>
                  {content.svgSpace5}
                  <path {...content.pathProps3}>
                    {content.pathSpace3}
                  </path>
                  {content.svgSpace6}
                </svg>
                {content.spanSpace9}
              </span>
              {content.aSpace5}
              <span {...content.spanProps5}>
                {content.spanSpace10}
                <b {...content.bProps2}>
                  {content.bSpace3}
                  {content.label3}
                  {content.bSpace4}
                  {content.bSpace5}
                </b>
                {content.spanSpace11}
                <span {...content.spanProps6}>
                  {content.spanSpace12}
                  {content.label4}
                  {content.spanSpace13}
                </span>
                {content.spanSpace14}
              </span>
              {content.aSpace6}
            </a>
            {content.divSpace9}
          </div>
          {content.divSpace10}
          <a {...content.aProps4}>
            {content.aSpace10}
            <span {...content.spanProps10}>
              {content.spanSpace22}
              {content.label7}
              {content.spanSpace23}
            </span>
            {content.aSpace11}
            <span {...content.spanProps11}>
              {content.spanSpace24}
              {content.label8}
              {content.spanSpace25}
            </span>
            {content.aSpace12}
            <b {...content.bProps4}>
              {content.bSpace8}
              {content.label9}
              {content.bSpace9}
            </b>
            {content.aSpace13}
            <span {...content.spanProps12}>
              {content.spanSpace26}
              {content.label10}
              {content.spanSpace27}
            </span>
            {content.aSpace14}
            <span {...content.spanProps13}>
              {content.spanSpace28}
              {content.label11}
              {content.spanSpace29}
            </span>
            {content.aSpace15}
          </a>
          {content.divSpace11}
        </div>
        {content.divSpace12}
      </div>
      {content.divSpace13}
    </div>
  )
}
