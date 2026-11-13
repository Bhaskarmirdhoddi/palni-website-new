// Extracted from local content; copy, links and visual variants arrive through props.
import { Fragment } from 'react'
import OutcomeSlide from './OutcomeSlide'
import OutcomeSlideVariant2 from './OutcomeSlideVariant2'

export default function UsecasesSectionVariant2({ content }) {
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
      </div>
      {content.sectionSpace2}
      <div {...content.divProps4}>
        {content.divSpace8}
        <div {...content.divProps5}>
          {content.outcomeSlideItems.map(item => (
            <Fragment key={item.key}>{item.space}<OutcomeSlide content={item.content} /></Fragment>
          ))}
          {content.divSpace9}
          <OutcomeSlideVariant2 content={content.outcomeSlideVariant2} />
          {content.divSpace10}
        </div>
        {content.divSpace11}
        <div {...content.divProps6}>
          {content.divSpace12}
          <button {...content.buttonProps}>
            {content.buttonSpace}
            <svg {...content.svgProps}>
              {content.svgSpace}
              <path {...content.pathProps}>
                {content.pathSpace}
              </path>
              {content.svgSpace2}
            </svg>
            {content.buttonSpace2}
          </button>
          {content.divSpace13}
          <button {...content.buttonProps2}>
            {content.buttonSpace3}
            <svg {...content.svgProps2}>
              {content.svgSpace3}
              <path {...content.pathProps2}>
                {content.pathSpace2}
              </path>
              {content.svgSpace4}
            </svg>
            {content.buttonSpace4}
          </button>
          {content.divSpace14}
          <div {...content.divProps7}>
            {content.divSpace15}
            <button {...content.buttonProps3}>
              {content.buttonSpace5}
            </button>
            {content.divSpace16}
            <button {...content.buttonProps4}>
              {content.buttonSpace6}
            </button>
            {content.divSpace17}
            <button {...content.buttonProps5}>
              {content.buttonSpace7}
            </button>
            {content.divSpace18}
          </div>
          {content.divSpace19}
          <span {...content.spanProps}>
            {content.spanSpace}
            <b {...content.bProps}>
              {content.bSpace}
              {content.label}
              {content.bSpace2}
            </b>
            {content.spanSpace2}
            {content.label2}
            {content.spanSpace3}
          </span>
          {content.divSpace20}
        </div>
        {content.divSpace21}
      </div>
      {content.sectionSpace3}
      <div {...content.divProps8}>
        {content.divSpace22}
        <div {...content.divProps9}>
          {content.divSpace23}
          <a {...content.aProps}>
            {content.aSpace}
            {content.linkLabel}
            {content.aSpace2}
          </a>
          {content.divSpace24}
        </div>
        {content.divSpace25}
      </div>
      {content.sectionSpace4}
    </section>
  )
}
