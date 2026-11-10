import { useEffect, useState } from 'react'
import '../styles/designSystemPreview.css'
import BackgroundAtmosphere from '../components/layout/BackgroundAtmosphere'
import SiteFooter from '../components/layout/SiteFooter'
import SiteHeader from '../components/navigation/SiteHeader'
import ChallengeCard from '../components/cards/ChallengeCard'
import ExpertiseCard from '../components/cards/ExpertiseCard'
import ServiceCard from '../components/cards/ServiceCard'
import CTASection from '../components/sections/CTASection'
import ProcessSteps from '../components/sections/ProcessSteps'
import SectionHeader from '../components/sections/SectionHeader'
import FAQAccordion from '../components/ui/FAQAccordion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTheme } from '../theme/useTheme'

const darkTokens = [
  ['--ink-0', '#070D1C'], ['--ink-1', '#0E1830'], ['--ink-2', '#15223F'], ['--glass', 'rgba(16, 27, 54, .66)'], ['--glass-strong', 'rgba(14, 24, 48, .84)'],
  ['--line', 'rgba(206, 220, 255, .11)'], ['--line-strong', 'rgba(206, 220, 255, .22)'], ['--pearl', '#EEF2FA'], ['--mist', '#AAB6CF'], ['--dim', '#8592B0'],
  ['--maroon', '#883125'], ['--gold', '#B37C27'], ['--gold-hi', '#E0AA4E'], ['--brand', 'var(--gold-hi)'], ['--accent', 'var(--brand)'], ['--btn-bg', '#E0AA4E'], ['--btn-fg', '#1C1305'], ['--btn-hover', '#F0C06A'],
  ['--sf', '#4FB6FF'], ['--sn', '#5ED9A0'], ['--db', '#FF7448'], ['--review', '#F5C451'], ['--danger', '#FF8E8E'],
  ['--tone-a', '#8A2E21'], ['--tone-b', '#123A78'], ['--tone-c', '#8F6418'], ['--glow', '224 170 78'], ['--wash', '238 242 250'], ['--grain', '.09'],
]

const lightTokens = [
  ['--ink-0', '#F4F5F9'], ['--ink-1', '#FFFFFF'], ['--ink-2', '#EBEEF5'], ['--glass', 'rgba(255, 255, 255, .74)'], ['--glass-strong', 'rgba(250, 251, 254, .88)'],
  ['--line', 'rgba(14, 22, 44, .1)'], ['--line-strong', 'rgba(14, 22, 44, .2)'], ['--pearl', '#0E162C'], ['--mist', '#47526C'], ['--dim', '#5E6984'],
  ['--gold-hi', '#8E5F17'], ['--brand', 'var(--gold-hi)'], ['--accent', 'var(--brand)'], ['--btn-bg', '#883125'], ['--btn-fg', '#FFFFFF'], ['--btn-hover', '#A23C2E'],
  ['--sf', '#0867AE'], ['--sn', '#0A7A4F'], ['--db', '#BF4117'], ['--review', '#9A6B00'], ['--danger', '#B42318'],
  ['--tone-a', '#ECBFB2'], ['--tone-b', '#CBDAF3'], ['--tone-c', '#F0D19C'], ['--glow', '179 124 39'], ['--wash', '14 22 44'], ['--grain', '.05'],
]

const previewGroups = [
  { label: 'Foundations', items: [{ label: 'Color tokens', href: '#tokens' }, { label: 'Typography', href: '#type' }, { label: 'Themes', href: '#themes' }] },
  { label: 'Components', items: [{ label: 'Buttons and cards', href: '#components' }, { label: 'Layout primitives', href: '#layout' }] },
  { label: 'Motion', items: [{ label: 'Atmosphere and reveal', href: '#motion' }] },
]

const services = [
  { key: 'salesforce', label: 'Salesforce' },
  { key: 'servicenow', label: 'ServiceNow' },
  { key: 'databricks', label: 'Databricks' },
]

function TokenGrid({ tokens }) {
  function swatch(name) {
    if (name === '--glow') return 'rgb(var(--glow))'
    if (name === '--wash') return 'rgb(var(--wash))'
    if (name === '--grain') return 'var(--pearl)'
    return `var(${name})`
  }
  return <div className="tiles five token-grid">{tokens.map(([name, value]) => <article className="token-sample interactive-tile" key={name}>
    <div className="token-sample__swatch" style={{ background: swatch(name), opacity: name === '--grain' ? Number(value) : 1 }} />
    <div className="token-sample__meta"><code>{name}</code><span>{value}</span></div>
  </article>)}</div>
}

function ThemeSample({ theme }) {
  return <article className="theme-sample" data-theme={theme}>
    <div className="theme-sample__head"><span className="eyebrow">{theme} theme</span><code>data-theme="{theme}"</code></div>
    <div className="theme-sample__surface"><h3>Surface and text</h3><p>Theme semantic tokens update this surface while keeping the layout consistent.</p><a className="link" href="#components">Text link</a><div className="cluster"><button className="button button-primary" type="button">Primary action</button><button className="button button-ghost" type="button">Ghost action</button></div></div>
  </article>
}

function ServiceAccentPicker() {
  const [selected, setSelected] = useState('')
  useEffect(() => {
    const previousService = document.body.dataset.svc
    return () => {
      if (previousService) document.body.dataset.svc = previousService
      else delete document.body.dataset.svc
    }
  }, [])
  useEffect(() => {
    if (selected) document.body.dataset.svc = selected
    else delete document.body.dataset.svc
  }, [selected])
  function selectService(key) {
    setSelected((current) => current === key ? '' : key)
  }
  return <div className="service-accent-demo">
    <div className="cluster">{services.map((service) => <button className="chip service-chip" data-svc={service.key} type="button" key={service.key} aria-pressed={selected === service.key} onClick={() => selectService(service.key)}>{service.label}</button>)}</div>
    <p className="service-accent-demo__status" aria-live="polite">{selected ? `${services.find((service) => service.key === selected)?.label} accent is active across the page.` : 'Choose a service accent. Select it again to restore the default brand accent.'}</p>
    <div className="tiles three service-accent-grid">{services.map((service) => <article className="accent-demo-card" data-svc={service.key} key={service.key}><span className="service-indicator"/><strong>{service.label}</strong><span className="accent-demo-card__line"/><a className="link" href="#layout">Explore accent</a></article>)}</div>
  </div>
}

function PointerTile({ children }) {
  function trackPointer(event) {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - bounds.left
    const y = event.clientY - bounds.top
    event.currentTarget.style.setProperty('--pointer-x', `${x}px`)
    event.currentTarget.style.setProperty('--pointer-y', `${y}px`)
    event.currentTarget.style.transform = `perspective(900px) rotateX(${((.5 - y / bounds.height) * 2.4).toFixed(2)}deg) rotateY(${((x / bounds.width - .5) * 2.4).toFixed(2)}deg)`
  }
  function resetTilt(event) { event.currentTarget.style.transform = '' }
  return <article className="card interactive-tile pointer-tile" onPointerMove={trackPointer} onPointerLeave={resetTilt}>{children}</article>
}

export default function DesignSystemPreview() {
  const { theme } = useTheme()
  useScrollReveal()
  return <>
    <BackgroundAtmosphere />
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader brand="Palni" groups={previewGroups} cta={{ label: 'Token index', href: '#tokens' }} />
    <main id="main" className="ds-preview">
      <section id="top" className="hero ds-hero">
        <div className="wrap ds-hero__inner">
          <div className="ds-hero__copy">
            <p className="eyebrow fadeup">Confluence Design System · v2</p>
            <h1 className="display-heading wordup">{'A shared language for Palni'.split(' ').map((word, index) => <span style={{ '--i': index }} key={`${word}-${index}`}>{word}&nbsp;</span>)}</h1>
            <p className="lead fadeup">Exact foundation tokens, typography, layout and interaction primitives from the supplied specification.</p>
            <div className="cluster fadeup"><a className="button button-primary" href="#tokens">Explore foundations</a><a className="button button-ghost" href="#components">View components</a></div>
            <div className="ds-hero__legend fadeup"><span className="chip">Theme: {theme}</span><span className="chip">Space Grotesk</span><span className="chip">Responsive tokens</span></div>
          </div>
          <div className="ds-hero__visual" aria-hidden="true"><div className="hero-orbit hero-orbit--one"/><div className="hero-orbit hero-orbit--two"/><div className="hero-orbit hero-orbit--three"/><span>PALNI</span></div>
        </div>
      </section>

      <section className="sec" id="tokens"><div className="wrap"><SectionHeader eyebrow="01 / Color foundations" title="Color tokens" description="Dark mode is the base. Light mode changes surfaces, text, accents and atmosphere through the same semantic token names." /><h3 className="ds-subhead">Dark theme values</h3><TokenGrid tokens={darkTokens}/><h3 className="ds-subhead">Light theme overrides</h3><TokenGrid tokens={lightTokens}/></div></section>

      <section className="sec sec--alt" id="themes"><div className="wrap"><SectionHeader eyebrow="02 / Theme behavior" title="Two themes, one system" description="Both variants use matching component geometry and semantic roles. Use the header toggle to change the whole page." /><div className="tiles two theme-samples"><ThemeSample theme="dark"/><ThemeSample theme="light"/></div></div></section>

      <section className="sec" id="type"><div className="wrap"><SectionHeader eyebrow="03 / Typography" title="Space Grotesk, at the specified scale" description="Fixed desktop, tablet and mobile values follow the supplied breakpoint tokens. Body text stays readable and heading wraps are balanced." /><div className="type-scale panel"><div><span className="metadata">DISPLAY · 80 PX DESKTOP</span><p className="type-display">Confluence</p></div><div><span className="metadata">H1 · 64 PX DESKTOP</span><h1>Business outcomes, in focus.</h1></div><div><span className="metadata">H2 · 48 PX DESKTOP</span><h2>Make the system clear.</h2></div><div><span className="metadata">H3 · 28 PX DESKTOP</span><h3>Built for practical use.</h3></div><div><span className="metadata">H4 · 20 PX DESKTOP</span><h4>Details stay legible.</h4></div><div><span className="metadata">LEAD · 20 PX DESKTOP</span><p className="lead">A readable introduction with a maximum measure of forty-eight characters.</p></div><div><span className="metadata">BODY · 17 PX DESKTOP</span><p>Space Grotesk is used for both display and body text with a 1.65 line height. This paragraph demonstrates the body scale, line length, and the contrast between primary and supporting copy.</p></div></div><p className="font-license-note">Space Grotesk is requested as a self-hosted font in the source specification. No local font files were found; this preview loads the family from Google Fonts. The upstream typeface is licensed under SIL Open Font License 1.1.</p></div></section>

      <section className="sec sec--alt" id="components"><div className="wrap"><SectionHeader eyebrow="04 / Components" title="Controls and surfaces" description="Buttons, chips, links and cards share the same borders, radii, glass treatment and current accent." /><div className="ds-component-grid tiles two"><PointerTile><p className="eyebrow">Buttons</p><h3>Primary and ghost</h3><div className="cluster"><button className="button button-primary" type="button">Primary button</button><button className="button button-ghost" type="button">Ghost button</button><button className="button button-primary" type="button" disabled>Disabled</button></div></PointerTile><PointerTile><p className="eyebrow">Chips and links</p><h3>Quiet navigation cues</h3><div className="cluster"><span className="chip">Platform indicator</span><span className="chip" data-svc="salesforce">Salesforce</span><a className="link" href="#type">Explore system</a></div></PointerTile><PointerTile><p className="eyebrow">Glass card</p><h3>Glass surface</h3><p className="text-muted">A theme-aware surface with a one-pixel border and restrained depth.</p></PointerTile><PointerTile><p className="eyebrow">Interactive tile</p><h3>Pointer highlight</h3><p className="text-muted">Move a fine pointer over this card to reveal a local radial highlight.</p></PointerTile></div><div className="ds-service-accents"><h3 className="ds-subhead">Service accent selection</h3><ServiceAccentPicker /></div></div></section>

      <section className="sec" id="layout"><div className="wrap"><SectionHeader eyebrow="05 / Layout primitives" title="Editorial grids and metrics" description="The twelve-column header offsets its lead copy; content grids collapse at the specified component breakpoints." /><ProcessSteps steps={[{ title: 'Align', description: 'Priority and reading column.' }, { title: 'Execute', description: 'Grid and component layout.' }, { title: 'Optimise', description: 'Responsive thresholds.' }, { title: 'Scale', description: 'Consistent shared tokens.' }]} /><div className="ledger ds-ledger"><PointerTile><p className="eyebrow">12-column ledger</p><h3>Heading column</h3><p>Five columns of emphasis, followed by an offset reading column.</p></PointerTile><PointerTile><p className="eyebrow">Offset reading column</p><p className="lead">Supporting copy occupies columns eight through twelve on wide layouts, then stacks below 900 pixels.</p></PointerTile></div><div className="metrics ds-metrics"><article className="metric card"><span className="metadata">SPACING</span><strong className="figure-md">6rem</strong><span>Section rhythm</span></article><article className="metric card"><span className="metadata">WRAP</span><strong className="figure-md">1320</strong><span>Maximum width · px</span></article><article className="metric card"><span className="metadata">HEADER</span><strong className="figure-md">72px</strong><span>Base height</span></article><article className="metric card"><span className="metadata">RADIUS</span><strong className="figure-md">18px</strong><span>Tile geometry</span></article></div><div className="tiles four ds-layout-cards"><ServiceCard title="Service tile" description="Service cards lift six pixels on hover." href="#components" linkLabel="Explore"/><ChallengeCard challenge="Quad tile" description="Quad cards lift three pixels on hover." platform="Layout primitive" href="#components"/><ExpertiseCard title="Capability" description="A compact expertise item uses the shared accent and divider."/><div className="card glass-sample"><p className="eyebrow">Glass</p><h3>Layered surface</h3><p>Glass and stronger glass use the corresponding surface tokens.</p></div></div></div></section>

      <section className="sec sec--alt" id="motion"><div className="wrap"><SectionHeader eyebrow="06 / Motion" title="Atmosphere with restraint" description="CSS gradients drift at 28, 34 and 40 seconds. A low-cost canvas flow field pauses when hidden or when reduced motion is requested." /><div className="tiles two"><article className="card motion-card"><p className="eyebrow">Hero reveal</p><div className="wordup motion-word-demo">{'Platform first. Outcome focused.'.split(' ').map((word, index) => <span style={{ '--i': index }} key={`${word}-${index}`}>{word}&nbsp;</span>)}</div><p className="fadeup motion-support-demo">Supporting copy and actions fade up after the heading.</p></article><article className="card motion-card"><p className="eyebrow">Scroll reveal</p><h3 className="reveal-on-scroll">Content enters once, then stays visible.</h3><p className="text-muted">View-timeline animation is used where supported; IntersectionObserver handles browsers without it.</p></article></div><p className="motion-note">Reduced motion disables gradient drift, pointer glow and canvas movement. Content stays visible if animation support is unavailable.</p></div></section>

      <section className="sec"><div className="wrap"><SectionHeader eyebrow="07 / Interaction" title="Accessible navigation and disclosure" description="The header menu supports pointer hover, click, touch and keyboard. FAQ triggers use expanded state and labelled panels." /><div className="tiles two"><div className="card"><p className="eyebrow">Dropdown menu</p><p>Use any top navigation group to inspect the glass dropdown and focus states.</p><span className="chip">Escape closes and restores focus</span></div><div className="card"><p className="eyebrow">Accordion</p><FAQAccordion items={[{ question: 'How are menu items operated?', answer: 'The group trigger is a real button. Enter or Space opens the group, Tab moves through its links, and Escape closes it and returns focus.' }, { question: 'What changes when reduced motion is enabled?', answer: 'Continuous atmosphere movement is stopped and reveal content remains visible.' }]} /></div></div></div></section>

      <section className="sec sec--cta"><div className="wrap"><CTASection eyebrow="Design system preview" title="A reusable foundation for Palni." description="Use the original Confluence tokens and interaction patterns as the shared base for future pages." actions={[{ label: 'Back to color tokens', href: '#tokens' }, { label: 'Return to top', href: '#top', variant: 'outline' }]} /></div></section>
    </main>
    <SiteFooter description="Confluence design-system preview." serviceLinks={[{ label: 'Tokens', href: '#tokens' }, { label: 'Typography', href: '#type' }]} resourceLinks={[{ label: 'Components', href: '#components' }, { label: 'Motion', href: '#motion' }]} companyLinks={[{ label: 'Layout', href: '#layout' }, { label: 'Themes', href: '#themes' }]} copyright="Palni · Confluence Design System v2" />
  </>
}
