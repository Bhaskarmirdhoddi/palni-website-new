// Extracted from local content; copy, links and visual variants arrive through props.
import FSvcNavigation from './FSvcNavigation'
import FResNavigation from './FResNavigation'
import FCoNavigation from './FCoNavigation'
import LegalNavigation from './LegalNavigation'

export default function SiteFooter({ content }) {
  return (
    <footer {...content.footerProps}>
      {content.footerSpace}
      <div {...content.divProps}>
        {content.divSpace}
        <div {...content.divProps2}>
          {content.divSpace2}
          <div {...content.divProps3}>
            {content.divSpace3}
            <a {...content.aProps}>
              {content.aSpace}
              <img {...content.imgProps} />
              {content.aSpace2}
              <img {...content.imgProps2} />
              {content.aSpace3}
            </a>
            {content.divSpace4}
            <p {...content.pProps}>
              {content.pSpace}
              {content.description}
              {content.pSpace2}
            </p>
            {content.divSpace5}
            <div {...content.divProps4}>
              {content.divSpace6}
              <a {...content.aProps2}>
                {content.aSpace4}
                <svg {...content.svgProps}>
                  {content.svgSpace}
                  <path {...content.pathProps}>
                    {content.pathSpace}
                  </path>
                  {content.svgSpace2}
                </svg>
                {content.aSpace5}
                {content.linkLabel}
                {content.aSpace6}
              </a>
              {content.divSpace7}
              <a {...content.aProps3}>
                {content.aSpace7}
                <svg {...content.svgProps2}>
                  {content.svgSpace3}
                  <path {...content.pathProps2}>
                    {content.pathSpace2}
                  </path>
                  {content.svgSpace4}
                </svg>
                {content.aSpace8}
                {content.linkLabel2}
                {content.aSpace9}
              </a>
              {content.divSpace8}
            </div>
            {content.divSpace9}
            <div {...content.divProps5}>
              {content.divSpace10}
              <i {...content.iProps}>
                {content.iSpace}
              </i>
              {content.divSpace11}
              <i {...content.iProps2}>
                {content.iSpace2}
              </i>
              {content.divSpace12}
              <i {...content.iProps3}>
                {content.iSpace3}
              </i>
              {content.divSpace13}
              <i {...content.iProps4}>
                {content.iSpace4}
              </i>
              {content.divSpace14}
            </div>
            {content.divSpace15}
          </div>
          {content.divSpace16}
          <FSvcNavigation content={content.fSvcNavigation} />
          {content.divSpace17}
          <FResNavigation content={content.fResNavigation} />
          {content.divSpace18}
          <FCoNavigation content={content.fCoNavigation} />
          {content.divSpace19}
        </div>
        {content.divSpace20}
        <div {...content.divProps6}>
          {content.divSpace21}
          <span {...content.spanProps}>
            {content.spanSpace}
            {content.label}
            {content.spanSpace2}
          </span>
          {content.divSpace22}
          <div {...content.divProps7}>
            {content.divSpace23}
            <span {...content.spanProps2}>
              {content.spanSpace3}
              <svg {...content.svgProps3}>
                {content.svgSpace5}
                <path {...content.pathProps3}>
                  {content.pathSpace3}
                </path>
                {content.svgSpace6}
              </svg>
              {content.spanSpace4}
              {content.label2}
              {content.spanSpace5}
              <time {...content.timeProps}>
                {content.timeSpace}
                {content.text}
                {content.timeSpace2}
              </time>
              {content.spanSpace6}
              {content.label3}
              {content.spanSpace7}
            </span>
            {content.divSpace24}
            <span {...content.spanProps3}>
              {content.spanSpace8}
              <svg {...content.svgProps4}>
                {content.svgSpace7}
                <path {...content.pathProps4}>
                  {content.pathSpace4}
                </path>
                {content.svgSpace8}
              </svg>
              {content.spanSpace9}
              {content.label4}
              {content.spanSpace10}
              <time {...content.timeProps2}>
                {content.timeSpace3}
                {content.text2}
                {content.timeSpace4}
              </time>
              {content.spanSpace11}
              {content.label5}
              {content.spanSpace12}
            </span>
            {content.divSpace25}
          </div>
          {content.divSpace26}
          <LegalNavigation content={content.legalNavigation} />
          {content.divSpace27}
        </div>
        {content.divSpace28}
      </div>
      {content.footerSpace2}
    </footer>
  )
}
