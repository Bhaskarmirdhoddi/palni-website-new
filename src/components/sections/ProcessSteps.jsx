export default function ProcessSteps({ steps = [], className = '', numberLabel = (index) => String(index + 1).padStart(2, '0'), revealItems = true }) {
  return <ol className={`process-steps grid grid-2 grid-4 ${className}`}>{steps.map((step, index) => <li className={`process-step${revealItems ? ' reveal-on-scroll' : ''}`} key={`${step.title}-${index}`}><span className="process-step__number">{numberLabel(index, steps.length)}</span><h3>{step.title}</h3><p className="text-muted">{step.description}</p></li>)}</ol>
}
