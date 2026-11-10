import { useId, useState } from 'react'

export default function FAQAccordion({ items = [], allowMultiple = false, defaultOpen = null }) {
  const [openItems, setOpenItems] = useState(() => defaultOpen == null ? [] : [defaultOpen])
  const accordionId = useId()
  function toggle(index) {
    setOpenItems((current) => current.includes(index) ? current.filter((item) => item !== index) : allowMultiple ? [...current, index] : [index])
  }
  return <div className="faq-accordion">{items.map((item, index) => {
    const isOpen = openItems.includes(index)
    const panelId = `${accordionId}-answer-${index}`
    const questionId = `${accordionId}-question-${index}`
    return <section className={`faq-item${isOpen ? ' is-open' : ''}`} key={`${item.question}-${index}`}>
      <h3><button className="accordion-trigger faq-item__trigger" type="button" id={questionId} aria-expanded={isOpen} aria-controls={panelId} onClick={() => toggle(index)}>{item.question}<span className="faq-item__plus" aria-hidden="true">{isOpen ? <svg className="ic" viewBox="0 0 24 24" focusable="false"><path fill="currentColor" d="M19 12.998H5v-2h14z" /></svg> : <svg className="ic" viewBox="0 0 24 24" focusable="false"><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" /></svg>}</span></button></h3>
      <div className="faq-item__panel" id={panelId} role="region" aria-labelledby={questionId} hidden={!isOpen}><div>{item.answer}</div></div>
    </section>
  })}</div>
}
