import palniLogo from '../../assets/palni_logo.png'

export default function SiteFooter({ brand = 'Palni', description = '', serviceLinks = [], resourceLinks = [], companyLinks = [], contact = [], socialLinks = [], legalLinks = [], copyright = `© ${new Date().getFullYear()} ${brand}` }) {
  const groups = [['Services', serviceLinks], ['Resources', resourceLinks], ['Company', companyLinks]]
  return <footer className="site-footer">
    <div className="container site-footer__main">
      <div className="site-footer__brand"><a className="site-header__brand" href="#top" aria-label={`${brand} home`}><img className="site-header__logo" src={palniLogo} alt="Palni" /></a>{description && <p>{description}</p>}
        {contact.length > 0 && <address>{contact.map((item) => <a key={`${item.label}-${item.href}`} href={item.href}>{item.label}</a>)}</address>}
        {socialLinks.length > 0 && <div className="cluster site-footer__social" aria-label="Social links">{socialLinks.map((item) => <a key={`${item.label}-${item.href}`} href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined}>{item.label}</a>)}</div>}
      </div>
      {groups.map(([label, items]) => items.length > 0 && <div className="site-footer__group" key={label}><h2>{label}</h2>{items.map((item) => <a href={item.href} key={`${item.label}-${item.href}`}>{item.label}</a>)}</div>)}
    </div>
    <div className="site-footer__bottom"><div className="container site-footer__bottom-inner"><span>{copyright}</span>{legalLinks.length > 0 && <nav aria-label="Legal links">{legalLinks.map((item) => <a href={item.href} key={`${item.label}-${item.href}`}>{item.label}</a>)}</nav>}</div></div>
  </footer>
}
