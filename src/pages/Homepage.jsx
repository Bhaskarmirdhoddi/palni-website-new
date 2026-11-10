import SiteFooter from '../components/layout/SiteFooter'
import SiteHeader from '../components/navigation/SiteHeader'
import ChallengeCard from '../components/cards/ChallengeCard'
import CaseStudyCard from '../components/cards/CaseStudyCard'
import ExpertiseCard from '../components/cards/ExpertiseCard'
import ServiceCard from '../components/cards/ServiceCard'
import CTASection from '../components/sections/CTASection'
import { CTAContactDetails, CTAPromptList } from '../components/sections/CTAExtras'
import PageHero from '../components/sections/PageHero'
import ProcessSteps from '../components/sections/ProcessSteps'
import SectionHeader from '../components/sections/SectionHeader'
import FAQAccordion from '../components/ui/FAQAccordion'
import { homepageContent as content } from '../data/homepage'
import { homepageFooterLinks } from '../data/navigation'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useEffect, useRef } from 'react'
import './Homepage.css'

function HeroParticleField() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!ctx) return undefined
    let width = 0
    let height = 0
    let frame = 0
    let time = 0
    let active = !document.hidden
    const animate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = bounds.width; height = bounds.height
      canvas.width = width * dpr; canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (!animate) draw()
    }
    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const center = height * .49
      const colors = ['#3098ff', '#37c6ad', '#e66e50', '#f0b640']
      for (let i = 0; i < 176; i++) {
        const lane = i / 176
        const group = lane < .38 ? 0 : lane < .63 ? 1 : lane < .82 ? 2 : 3
        const spread = (lane - .5) * height * 1.5
        const phase = time * (.35 + (i % 7) * .025) + i * .16
        const startX = -width * .08 - (i % 17) * 2
        const startY = center + spread * 1.02 + Math.sin(phase) * 10
        const control1X = width * .18
        const control1Y = center + spread * .68 + Math.sin(phase * .7) * 22
        const control2X = width * .48
        const control2Y = center + spread * .12 + Math.cos(phase * .6) * 19
        const endX = width * (1.02 + (i % 9) * .012)
        const endY = center + spread * .34 + Math.sin(phase * .45) * 12
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.bezierCurveTo(control1X, control1Y, control2X, control2Y, endX, endY)
        ctx.strokeStyle = colors[group]
        ctx.globalAlpha = .045 + (i % 8) * .012
        ctx.lineWidth = i % 16 === 0 ? 1.35 : .7
        ctx.stroke()
        if (i % 3 === 0) {
          const progress = (time * (.035 + (i % 6) * .004) + i * .19) % 1
          const inverse = 1 - progress
          const x = inverse ** 3 * startX + 3 * inverse ** 2 * progress * control1X + 3 * inverse * progress ** 2 * control2X + progress ** 3 * endX
          const y = inverse ** 3 * startY + 3 * inverse ** 2 * progress * control1Y + 3 * inverse * progress ** 2 * control2Y + progress ** 3 * endY
          ctx.beginPath(); ctx.arc(x, y, i % 8 === 0 ? 1.4 : .8, 0, Math.PI * 2)
          ctx.fillStyle = colors[group]; ctx.globalAlpha = .28 + (i % 4) * .1; ctx.fill()
        }
      }
      ctx.globalAlpha = 1
      time += .012
      if (active && animate) frame = requestAnimationFrame(draw)
    }
    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    const visibilityChange = () => {
      active = !document.hidden
      cancelAnimationFrame(frame)
      if (active && animate) frame = requestAnimationFrame(draw)
    }
    document.addEventListener('visibilitychange', visibilityChange)
    resize()
    if (animate && active) frame = requestAnimationFrame(draw)
    else draw()
    return () => {
      active = false
      cancelAnimationFrame(frame)
      observer.disconnect()
      document.removeEventListener('visibilitychange', visibilityChange)
    }
  }, [])
  return <canvas ref={canvasRef} className="home-hero-canvas" />
}

function ServiceArtwork({ type }) {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!ctx) return undefined
    let frame
    let width = 0
    let height = 0
    let tick = 0
    const palette = type === 'salesforce' ? ['#35baff', '#d5aa61'] : type === 'servicenow' ? ['#44e6ae', '#e7bd64'] : ['#f08056', '#edbd66']
    const resize = () => {
      const box = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = box.width; height = box.height
      canvas.width = width * dpr; canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const dot = (x, y, color, radius = 1.3, alpha = .8) => {
      ctx.globalAlpha = alpha; ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2); ctx.fill()
    }
    const line = (points, color, alpha = .35, lineWidth = 1) => {
      ctx.globalAlpha = alpha; ctx.strokeStyle = color; ctx.lineWidth = lineWidth; ctx.beginPath()
      points.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke()
    }
    const draw = () => {
      tick += .012
      ctx.clearRect(0, 0, width, height)
      const cx = width * .5; const cy = height * .52
      // Faint perspective grid grounds each scene like the reference artwork.
      for (let i = -7; i <= 7; i++) line([[cx + i * width * .07, height * .45], [cx + i * width * .16, height]], palette[0], .065)
      for (let i = 0; i < 7; i++) { const y = height * (.62 + i * i * .008); line([[width * .08, y], [width * .92, y]], palette[0], .065) }
      if (type === 'salesforce') {
        const r = Math.min(width, height) * .34
        ctx.save(); ctx.translate(cx, cy); ctx.rotate(-.32)
        ctx.globalAlpha = .42; ctx.strokeStyle = palette[0]; ctx.beginPath(); ctx.ellipse(0, 0, r * 1.2, r * .45, 0, 0, Math.PI * 2); ctx.stroke()
        ctx.rotate(.78); ctx.globalAlpha = .55; ctx.beginPath(); ctx.ellipse(0, 0, r * 1.12, r * .48, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore()
        ctx.globalAlpha = .35; ctx.strokeStyle = palette[0]; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke()
        for (let i = 0; i < 110; i++) { const a = i * 2.399; const rr = r * Math.sqrt(i / 110); dot(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr * .88, i % 5 === 0 ? palette[1] : palette[0], i % 9 === 0 ? 1.8 : 1, .25 + (i % 5) * .1) }
        for (let i = 0; i < 7; i++) { const a = i * 2.4 + tick * (i % 2 ? 1 : -1); const x = cx + Math.cos(a) * r * .88; const y = cy + Math.sin(a) * r * .55; line([[cx, cy], [x, y]], palette[0], .25); dot(x, y, '#dff5ff', 2.2 + (i % 2), .9) }
      } else if (type === 'servicenow') {
        const bases = [.26, .5, .74]
        bases.forEach((pos, i) => {
          const x = width * pos; const base = height * .72; const h = height * ([.22, .48, .54][i]) * (.9 + Math.sin(tick * 1.4 + i) * .08); const w = width * .065
          const top = base - h; const skew = w * .38
          const pts = [[x - w / 2, base], [x - w / 2, top], [x + w / 2, top - skew], [x + w / 2, base - skew], [x - w / 2, base], [x + w / 2, base - skew], [x + w / 2, top - skew], [x - w / 2, top], [x, top - skew * .5], [x + w / 2, top - skew], [x, top - skew * .5], [x, base - skew * .5]]
          line(pts.slice(0, 4), palette[i === 1 ? 0 : 1], .76); line(pts.slice(4), palette[i === 1 ? 0 : 1], .62)
          for (let j = 0; j < 22; j++) { const py = base - ((j / 22 * h + tick * 15) % h); dot(x + Math.sin(j * 12 + i) * w * .23, py, palette[i === 1 ? 0 : 1], 1.2, .72) }
          dot(x, top - skew * .5, '#e6fff2', 2.4, .95)
        })
        for (let i = 0; i < 5; i++) { const x = width * (.2 + i * .15); const y = height * (.69 + Math.sin(tick + i) * .035); dot(x, y, '#dcfff2', 2.2, .9); line([[x, y], [x + width * .04, y + 8]], palette[0], .35) }
      } else {
        const layers = [0, 1, 2]
        layers.forEach((layer) => {
          const lift = layer * height * .16 + Math.sin(tick + layer) * 2
          const x = cx; const y = height * .72 - lift; const dx = width * (.29 - layer * .015); const dy = height * .16
          const color = palette[layer === 1 ? 0 : 1]
          line([[x, y - dy], [x + dx, y], [x, y + dy], [x - dx, y], [x, y - dy]], color, .7, 1.2)
          for (let row = -4; row <= 4; row++) for (let col = -5; col <= 5; col++) { const px = x + col * dx / 5.5 + row * dx / 9; const py = y + row * dy / 4.5; dot(px, py, color, 1.2, .55) }
        })
        for (let i = 0; i < 6; i++) { const x = cx + Math.cos(i * 2.2 + tick) * width * .27; const y = height * (.25 + (i % 3) * .12); dot(x, y, '#ffe8bc', 2 + i % 2, .85); line([[x, y], [cx + (x - cx) * .55, height * .55]], palette[1], .18) }
      }
      ctx.globalAlpha = 1
      frame = requestAnimationFrame(draw)
    }
    resize(); const observer = new ResizeObserver(resize); observer.observe(canvas)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!reduced.matches) frame = requestAnimationFrame(draw); else { draw(); cancelAnimationFrame(frame) }
    return () => { cancelAnimationFrame(frame); observer.disconnect() }
  }, [type])
  const label = type === 'salesforce' ? 'Salesforce network' : type === 'servicenow' ? 'ServiceNow workflows' : 'Databricks data layers'
  return <canvas ref={canvasRef} className="service-artwork-canvas" role="img" aria-label={`Animated ${label} illustration`} />
}

function Section({ id, section, className = '', children }) {
  return <section className={`home-section ${className}`} id={id}>
    <div className="container">
      <SectionHeader eyebrow={section.eyebrow} title={section.title} description={section.description} />
      {children}
    </div>
  </section>
}

function TrustMarks() {
  return <ul className="trust-marks" aria-label="Palni platform expertise">
    {content.trust.platforms.map((platform) => <li className={`trust-mark trust-mark--${platform.accent}`} key={platform.label}><a href={platform.href}>{platform.label}</a></li>)}
    <li className="trust-mark trust-mark--enterprise">Enterprise delivery</li>
    <li className="trust-mark trust-mark--data">Data &amp; AI</li>
  </ul>
}

function FinalCtaAside() {
  return <CTAPromptList prompts={content.contact.prompts} />
}

export default function Homepage() {
  useScrollReveal()
  return <>
    <SiteHeader links={[{ label: 'Careers', href: '#careers' }, { label: 'Contact', href: '#contact' }]} cta={{ label: 'Start with a Discovery', href: '#contact' }} />
    <main className="home-page" id="top">
      <PageHero {...content.hero} backgroundVisual={<HeroParticleField />} afterActions={<div className="hero-platform-links">{content.hero.platforms.map((platform, index) => <span className={`hero-platform-links__item hero-platform-links__item--${index + 1}`} key={platform}>{platform}</span>)}</div>} title={<AnimatedTitle text={content.hero.title} />} layout="left" tone="default" className="home-hero" />

      <section id="trust" className="trust-section">
        <div className="container trust-section__inner">
          <div className="trust-section__copy"><p className="eyebrow">{content.trust.eyebrow}</p><h2>{content.trust.title}</h2><p>{content.trust.description}</p></div>
          <TrustMarks />
        </div>
      </section>

      <Section id="services" section={content.services} className="home-services">
        <div className="grid grid-3 home-service-grid">{content.services.items.map((item) => <div className="reveal-on-scroll" key={item.title}><ServiceCard {...item} visual={<ServiceArtwork type={item.artwork} />} linkLabel={item.linkLabel} /></div>)}</div>
      </Section>

      <Section id="challenges" section={content.challenges} className="home-challenges">
        <div className="challenge-list">{content.challenges.items.map((item) => <ChallengeCard key={item.challenge} {...item} layout="row" linkLabel="Explore the use case" />)}</div>
      </Section>

      <Section id="process" section={content.process} className="home-process">
        <ProcessSteps steps={content.process.steps} className="home-process-steps" />
      </Section>

      <Section id="case-studies" section={content.caseStudies} className="home-case-studies">
        <div className="grid grid-3 case-study-grid">{content.caseStudies.items.map((item) => <div className="reveal-on-scroll" key={item.headline}><CaseStudyCard {...item} /></div>)}</div>
        <a className="button button-quiet home-case-studies__all" href="https://palni.com/usecases/">View All Use Cases</a>
      </Section>

      <Section id="expertise" section={content.expertise} className="home-expertise">
        <div className="grid grid-2 expertise-grid">{content.expertise.items.map((item) => <div className="reveal-on-scroll" key={item.title}><ExpertiseCard {...item} /></div>)}</div>
      </Section>

      <section id="careers" className="home-section home-careers">
        <div className="container"><SectionHeader eyebrow={content.careers.eyebrow} title={content.careers.title} description={content.careers.description} action={content.careers.action} /></div>
      </section>

      <section id="faq" className="home-section home-faq">
        <div className="container home-faq__layout">
          <div className="home-faq__intro"><p className="eyebrow">{content.faqSection.eyebrow}</p><h2>{content.faqSection.title}</h2><p>{content.faqSection.description}</p></div>
          <FAQAccordion items={content.faqs} defaultOpen={0} />
        </div>
      </section>

      <div id="contact" className="home-final-cta">
        <CTASection
          eyebrow={content.contact.eyebrow}
          title={content.contact.title}
          description={content.contact.description}
          actions={content.contact.actions}
          tone="brand"
          aside={<FinalCtaAside />}
          footer={<CTAContactDetails />}
        />
      </div>
    </main>
    <SiteFooter description="Palni helps enterprises improve sales and service operations, modernise data and apply technology to practical business challenges." contact={[{ label: 'support@palni.com', href: 'mailto:support@palni.com' }, { label: '+1 214 501 0690', href: 'tel:+12145010690' }]} socialLinks={[{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/palni-inc/', external: true }]} serviceLinks={homepageFooterLinks.services} resourceLinks={homepageFooterLinks.resources} companyLinks={homepageFooterLinks.company} legalLinks={[{ label: 'Privacy Policy', href: 'https://palni.com/privacy-policy/' }, { label: 'Terms & Conditions', href: 'https://palni.com/terms-conditions/' }]} />
  </>
}

function AnimatedTitle({ text }) {
  return <span className="home-hero__title" aria-label={text}>{text}</span>
}
