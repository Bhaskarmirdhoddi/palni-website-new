import { useState } from 'react'

const defaultFields = [
  { name: 'name', label: 'Name', type: 'text', required: true, autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
  { name: 'message', label: 'Message', type: 'textarea', required: true },
]

export default function ContactForm({ fields = defaultFields, onSubmit, submitLabel = 'Send message' }) {
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [pending, setPending] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    if (!onSubmit) {
      setStatus({ type: 'notice', message: 'This form is not connected to a submission service. No message was sent.' })
      return
    }
    const form = event.currentTarget
    if (!form.reportValidity()) return
    setPending(true)
    setStatus({ type: 'idle', message: '' })
    try {
      await onSubmit(Object.fromEntries(new FormData(form).entries()))
      setStatus({ type: 'success', message: 'Your message was submitted.' })
      form.reset()
    } catch (error) {
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Your message could not be submitted. Please try again.' })
    } finally {
      setPending(false)
    }
  }

  return <form className="contact-form stack" onSubmit={handleSubmit}>
    {fields.map((field) => <label className="field" key={field.name}>{field.label}{field.type === 'textarea' ? <textarea className="textarea" name={field.name} required={field.required} autoComplete={field.autoComplete} placeholder={field.placeholder} minLength={field.minLength} /> : <input className="input" type={field.type || 'text'} name={field.name} required={field.required} autoComplete={field.autoComplete} placeholder={field.placeholder} minLength={field.minLength} />}</label>)}
    <div className="cluster"><button className="button button-primary" type="submit" disabled={pending}>{pending ? 'Sending…' : submitLabel}</button>{status.message && <p className={`form-status form-status--${status.type}`} role="status">{status.message}</p>}</div>
  </form>
}
