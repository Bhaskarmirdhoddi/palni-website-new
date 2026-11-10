const promptIcons = [
  'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M15.5 8.5l-2 5-5 2 2-5z',
  'M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20 M9.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z M16 4.3a3.5 3.5 0 0 1 0 6.7 M17 14.5a4 4 0 0 1 3 4V20',
  'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z M12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z',
]

export function CTAPromptList({ prompts = [] }) {
  return <ol className="cta-prompt-list">{prompts.map((prompt, index) => <li key={prompt.title}><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d={promptIcons[index % promptIcons.length]} /></svg></span><div><h3>{prompt.title}</h3><p>{prompt.description}</p></div></li>)}</ol>
}

export function CTAContactDetails() {
  return <div className="cta-contact-details">
    <a href="mailto:sales@palni.com"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3z M3 6l9 7 9-7" /></svg>sales@palni.com</a>
    <a href="tel:+12145010690"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 3a14 14 0 0 1-8-8l3-2z" /></svg>214 501 0690</a>
    <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z M12 10a2 2 0 1 0 0-.01" /></svg>8 offices across the USA and India</span>
  </div>
}
