import { useEffect, useId, useRef, useState } from 'react'
import ThemeToggle from '../../theme/ThemeToggle'
import { navigationGroups } from '../../data/navigation'
import palniLogo from '../../assets/palni_logo.png'

function ArrowIcon() {
  return <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
}

function ChevronDownIcon() {
  return <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
}

export default function SiteHeader({ brand = 'Palni', groups = navigationGroups, links = [], cta = { label: 'Start a conversation', href: '#contact' }, sticky = true }) {
  const [activeGroup, setActiveGroup] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const drawerRef = useRef(null)
  const triggerRefs = useRef({})
  const mobileToggleRef = useRef(null)
  const panelBaseId = useId()

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        if (activeGroup) triggerRefs.current[activeGroup]?.focus()
        else if (mobileOpen) mobileToggleRef.current?.focus()
        setActiveGroup(null)
        setMobileOpen(false)
      }
      if (mobileOpen && event.key === 'Tab') {
        const focusables = drawerRef.current?.querySelectorAll('a[href], button:not([disabled])')
        if (!focusables?.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    function onPointerDown(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) setActiveGroup(null)
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [activeGroup, mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    drawerRef.current?.querySelector('button, a[href]')?.focus()
    return () => { document.body.style.overflow = previousOverflow }
  }, [mobileOpen])

  useEffect(() => {
    const header = headerRef.current
    if (!header) return undefined
    let frameId = 0
    const updateScrollState = () => {
      if (frameId) return
      frameId = requestAnimationFrame(() => {
        frameId = 0
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight
        const progress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0
        header.dataset.scrolled = window.scrollY > 20 ? 'true' : 'false'
        header.style.setProperty('--scroll-progress', `${progress}`)
      })
    }
    window.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState, { passive: true })
    updateScrollState()
    return () => {
      window.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [])

  function closeOnNavigate() {
    setActiveGroup(null)
    setMobileOpen(false)
  }

  return (
    <header ref={headerRef} className={`hdr site-header${sticky ? ' site-header--sticky' : ''}`}>
      <div className="site-header__inner container-xl">
        <a className="site-header__brand" href="#top" onClick={closeOnNavigate} aria-label={`${brand} home`}><img className="site-header__logo" src={palniLogo} alt="Palni" /></a>
        <nav className={`nav site-nav${mobileOpen ? ' site-nav--open' : ''}`} aria-label="Main navigation">
          {groups.map((group, index) => {
            const expanded = activeGroup === group.label
            const panelId = `${panelBaseId}-panel-${index}`
            return <div className="site-nav__group" key={group.label} onMouseEnter={() => { if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) setActiveGroup(group.label) }} onMouseLeave={() => { if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) setActiveGroup(null) }}>
              <button ref={(node) => { triggerRefs.current[group.label] = node }} className="site-nav__trigger nav-text" type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => setActiveGroup(expanded ? null : group.label)}>{group.label}<span aria-hidden="true" className={`site-nav__chevron${expanded ? ' is-open' : ''}`}><ChevronDownIcon /></span></button>
              <div id={panelId} ref={expanded ? menuRef : null} className="menu site-nav__panel" role="region" aria-label={`${group.label} links`} hidden={!expanded}>
                {group.items.map((item) => <a className="site-nav__link" href={item.href} key={`${item.label}-${item.href}`} onClick={closeOnNavigate} tabIndex={expanded ? 0 : -1}><span>{item.label}</span><ArrowIcon /></a>)}
              </div>
            </div>
          })}
          {links.map((link) => <a className="site-nav__direct-link" href={link.href} key={`${link.label}-${link.href}`} onClick={closeOnNavigate}>{link.label}</a>)}
        </nav>
        <div className="hdr-actions site-header__actions"><ThemeToggle /><a className="button button-primary site-header__cta-button" href={cta.href} onClick={closeOnNavigate}>{cta.label}</a><button ref={mobileToggleRef} className="icon-button site-menu-toggle" type="button" aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileOpen} aria-controls="mobile-site-nav" onClick={() => setMobileOpen(!mobileOpen)}><span className="site-menu-toggle__icon" aria-hidden="true">{mobileOpen ? 'Ã—' : 'â˜°'}</span></button></div>
      </div>
      <div id="mobile-site-nav" ref={drawerRef} className={`drawer site-mobile-nav${mobileOpen ? ' is-open' : ''}`} aria-hidden={!mobileOpen}>
        <button className="site-drawer-close" type="button" tabIndex={mobileOpen ? 0 : -1} aria-label="Close navigation menu" onClick={closeOnNavigate}><span aria-hidden="true">Ã—</span></button>
        {groups.map((group) => <section key={group.label} className="site-mobile-nav__group"><h2>{group.label}</h2>{group.items.map((item) => <a key={`${item.label}-${item.href}`} href={item.href} tabIndex={mobileOpen ? 0 : -1} onClick={closeOnNavigate}>{item.label}</a>)}</section>)}
        {links.length > 0 && <section className="site-mobile-nav__group"><h2>More</h2>{links.map((link) => <a key={`${link.label}-${link.href}`} href={link.href} tabIndex={mobileOpen ? 0 : -1} onClick={closeOnNavigate}>{link.label}</a>)}</section>}
        <a className="button button-primary" href={cta.href} tabIndex={mobileOpen ? 0 : -1} onClick={closeOnNavigate}>{cta.label}</a>
      </div>
    </header>
  )
}
