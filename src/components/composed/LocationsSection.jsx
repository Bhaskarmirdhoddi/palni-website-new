// Extracted from local content; copy, links and visual variants arrive through props.
import { Fragment } from 'react'
import OfficeCard from './OfficeCard'

export default function LocationsSection({ content }) {
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
            <h3 {...content.h3Props}>
              {content.h3Space}
              <svg {...content.svgProps}>
                {content.svgSpace}
                <path {...content.pathProps}>
                  {content.pathSpace}
                </path>
                {content.svgSpace2}
              </svg>
              {content.h3Space2}
              {content.cardTitle}
              {content.h3Space3}
              <span {...content.spanProps}>
                {content.spanSpace}
                {content.label}
                {content.spanSpace2}
              </span>
              {content.h3Space4}
              <span {...content.spanProps2}>
                {content.spanSpace3}
                <svg {...content.svgProps2}>
                  {content.svgSpace3}
                  <path {...content.pathProps2}>
                    {content.pathSpace2}
                  </path>
                  {content.svgSpace4}
                </svg>
                {content.spanSpace4}
                <time {...content.timeProps}>
                  {content.timeSpace}
                  {content.text}
                  {content.timeSpace2}
                </time>
                {content.spanSpace5}
                {content.label2}
                {content.spanSpace6}
              </span>
              {content.h3Space5}
            </h3>
            {content.divSpace10}
            <div {...content.divProps6}>
              {content.officeCardItems.map(item => (
                <Fragment key={item.key}>{item.space}<OfficeCard content={item.content} /></Fragment>
              ))}
              {content.divSpace11}
            </div>
            {content.divSpace12}
          </div>
          {content.divSpace13}
          <div {...content.divProps7}>
            {content.divSpace14}
            <h3 {...content.h3Props2}>
              {content.h3Space6}
              <svg {...content.svgProps3}>
                {content.svgSpace5}
                <path {...content.pathProps3}>
                  {content.pathSpace3}
                </path>
                {content.svgSpace6}
              </svg>
              {content.h3Space7}
              {content.cardTitle2}
              {content.h3Space8}
              <span {...content.spanProps3}>
                {content.spanSpace7}
                {content.label3}
                {content.spanSpace8}
              </span>
              {content.h3Space9}
              <span {...content.spanProps4}>
                {content.spanSpace9}
                <svg {...content.svgProps4}>
                  {content.svgSpace7}
                  <path {...content.pathProps4}>
                    {content.pathSpace4}
                  </path>
                  {content.svgSpace8}
                </svg>
                {content.spanSpace10}
                <time {...content.timeProps2}>
                  {content.timeSpace3}
                  {content.text2}
                  {content.timeSpace4}
                </time>
                {content.spanSpace11}
                {content.label4}
                {content.spanSpace12}
              </span>
              {content.h3Space10}
            </h3>
            {content.divSpace15}
            <div {...content.divProps8}>
              {content.officeCardItems2.map(item => (
                <Fragment key={item.key}>{item.space}<OfficeCard content={item.content} /></Fragment>
              ))}
              {content.divSpace16}
            </div>
            {content.divSpace17}
          </div>
          {content.divSpace18}
        </div>
        {content.divSpace19}
      </div>
      {content.sectionSpace2}
    </section>
  )
}
