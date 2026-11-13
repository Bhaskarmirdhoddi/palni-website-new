// Extracted from local content; copy, links and visual variants arrive through props.
import PracticeNavigation from './PracticeNavigation'
import PracticeNavigationVariant2 from './PracticeNavigationVariant2'
import PracticeNavigationVariant3 from './PracticeNavigationVariant3'

export default function MegaMenu({ content }) {
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
        <p {...content.pProps}>
          {content.pSpace}
          {content.description}
          {content.pSpace2}
        </p>
        {content.divSpace4}
        <div {...content.divProps3}>
          {content.divSpace5}
          <PracticeNavigation content={content.practiceNavigation} />
          {content.divSpace6}
          <PracticeNavigationVariant2 content={content.practiceNavigationVariant2} />
          {content.divSpace7}
          <PracticeNavigationVariant3 content={content.practiceNavigationVariant3} />
          {content.divSpace8}
        </div>
        {content.divSpace9}
        <p {...content.pProps2}>
          {content.pSpace3}
          {content.description2}
          {content.pSpace4}
        </p>
        {content.divSpace10}
        <div {...content.divProps4}>
          {content.divSpace11}
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
          {content.divSpace12}
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
          {content.divSpace13}
          <a {...content.aProps3}>
            {content.aSpace7}
            <span {...content.spanProps7}>
              {content.spanSpace15}
              <svg {...content.svgProps4}>
                {content.svgSpace7}
                <path {...content.pathProps4}>
                  {content.pathSpace4}
                </path>
                {content.svgSpace8}
              </svg>
              {content.spanSpace16}
            </span>
            {content.aSpace8}
            <span {...content.spanProps8}>
              {content.spanSpace17}
              <b {...content.bProps3}>
                {content.bSpace5}
                {content.label5}
                {content.bSpace6}
              </b>
              {content.spanSpace18}
              <span {...content.spanProps9}>
                {content.spanSpace19}
                {content.label6}
                {content.spanSpace20}
              </span>
              {content.spanSpace21}
            </span>
            {content.aSpace9}
          </a>
          {content.divSpace14}
        </div>
        {content.divSpace15}
        <div {...content.divProps5}>
          {content.divSpace16}
          <span {...content.spanProps10}>
            {content.spanSpace22}
            {content.label7}
            {content.spanSpace23}
          </span>
          {content.divSpace17}
          <a {...content.aProps4}>
            {content.aSpace10}
            {content.linkLabel}
            {content.aSpace11}
          </a>
          {content.divSpace18}
        </div>
        {content.divSpace19}
      </div>
      {content.divSpace20}
    </div>
  )
}
