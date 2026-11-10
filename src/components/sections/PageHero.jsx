export default function PageHero({ eyebrow, title, description, actions = [], visual, backgroundVisual, afterActions, layout = 'left', tone = 'default', className = '' }) {
  return <section className={`page-hero page-hero--${layout} page-hero--${tone} ${className}`}>
    {backgroundVisual && <div className="page-hero__background" aria-hidden="true">{backgroundVisual}</div>}
    <div className="container page-hero__inner">
      <div className="page-hero__copy motion-fade-up">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="display-heading">{title}</h1>
        {description && <p className="body-large page-hero__description">{description}</p>}
        {actions.length > 0 && <div className="cluster page-hero__actions">{actions.map((action) => <a key={`${action.label}-${action.href}`} className={`button ${action.variant === 'outline' ? 'button-outline' : action.variant === 'secondary' ? 'button-secondary' : 'button-primary'}`} href={action.href}>{action.label}</a>)}</div>}
        {afterActions}
      </div>
      {visual && <div className="page-hero__visual motion-fade-in">{typeof visual === 'string' ? <img src={visual} alt="" /> : visual}</div>}
    </div>
  </section>
}
