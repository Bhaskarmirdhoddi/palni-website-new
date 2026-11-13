import { Fragment } from 'react'
import { sectionRegistry } from './registry'

export default function SectionRenderer({ sections }) {
  if (!Array.isArray(sections)) throw new Error('Page sections must be an array')
  const keys = new Set()
  return sections.map(section => {
    if (!section || typeof section.key !== 'string' || keys.has(section.key)) {
      throw new Error('Page sections require unique stable keys')
    }
    keys.add(section.key)
    if (section.type === 'text') return <Fragment key={section.key}>{section.content}</Fragment>
    const Component = sectionRegistry[section.type]
    if (!Object.hasOwn(sectionRegistry, section.type) || !Component || !section.content || typeof section.content !== 'object') {
      throw new Error(`Invalid page section: ${section.type}`)
    }
    return <Component key={section.key} content={section.content} />
  })
}
