// Extracted from local content; copy, links and visual variants arrive through props.
import { Fragment } from 'react'
import UseCaseCard from './UseCaseCard'
import UseCaseCardVariant2 from './UseCaseCardVariant2'

export default function LibrarySection({ content }) {
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
          <button {...content.buttonProps}>
            {content.buttonSpace}
            {content.buttonLabel}
            {content.buttonSpace2}
            <span {...content.spanProps}>
              {content.spanSpace}
            </span>
            {content.buttonSpace3}
          </button>
          {content.divSpace9}
          <button {...content.buttonProps2}>
            {content.buttonSpace4}
            {content.buttonLabel2}
            {content.buttonSpace5}
            <span {...content.spanProps2}>
              {content.spanSpace2}
            </span>
            {content.buttonSpace6}
          </button>
          {content.divSpace10}
          <button {...content.buttonProps3}>
            {content.buttonSpace7}
            {content.buttonLabel3}
            {content.buttonSpace8}
            <span {...content.spanProps3}>
              {content.spanSpace3}
            </span>
            {content.buttonSpace9}
          </button>
          {content.divSpace11}
          <button {...content.buttonProps4}>
            {content.buttonSpace10}
            {content.buttonLabel4}
            {content.buttonSpace11}
            <span {...content.spanProps4}>
              {content.spanSpace4}
            </span>
            {content.buttonSpace12}
          </button>
          {content.divSpace12}
          <button {...content.buttonProps5}>
            {content.buttonSpace13}
            {content.buttonLabel5}
            {content.buttonSpace14}
            <span {...content.spanProps5}>
              {content.spanSpace5}
            </span>
            {content.buttonSpace15}
          </button>
          {content.divSpace13}
        </div>
        {content.divSpace14}
        <p {...content.pProps2}>
          {content.pSpace3}
        </p>
        {content.divSpace15}
        <div {...content.divProps5}>
          {content.useCaseCardItems.map(item => (
            <Fragment key={item.key}>{item.space}<UseCaseCard content={item.content} /></Fragment>
          ))}
          {content.useCaseCardVariant2Items.map(item => (
            <Fragment key={item.key}>{item.space}<UseCaseCardVariant2 content={item.content} /></Fragment>
          ))}
          {content.divSpace16}
          <UseCaseCard content={content.useCaseCard} />
          {content.useCaseCardVariant2Items2.map(item => (
            <Fragment key={item.key}>{item.space}<UseCaseCardVariant2 content={item.content} /></Fragment>
          ))}
          {content.useCaseCardItems2.map(item => (
            <Fragment key={item.key}>{item.space}<UseCaseCard content={item.content} /></Fragment>
          ))}
          {content.divSpace17}
        </div>
        {content.divSpace18}
        <p {...content.pProps3}>
          {content.pSpace4}
          {content.description2}
          {content.pSpace5}
        </p>
        {content.divSpace19}
      </div>
      {content.sectionSpace2}
    </section>
  )
}
