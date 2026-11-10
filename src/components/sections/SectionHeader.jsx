export default function SectionHeader({ eyebrow, title, description, action, align = 'left', width = 'medium', id }) {
  return <div className={`section-header section-header--${align} section-header--${width}`}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    {title && <h2 id={id}>{title}</h2>}
    {description && <p className="section-header__description text-muted">{description}</p>}
    {action && <a className="section-header__action" href={action.href}>{action.label}</a>}
  </div>
}
