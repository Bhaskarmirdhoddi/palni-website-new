import SiteFooter from '../components/layout/SiteFooter'
import SiteHeader from '../components/navigation/SiteHeader'
import ChallengeCard from '../components/cards/ChallengeCard'
import CaseStudyCard from '../components/cards/CaseStudyCard'
import ExpertiseCard from '../components/cards/ExpertiseCard'
import ServiceCard from '../components/cards/ServiceCard'
import CTASection from '../components/sections/CTASection'
import { CTAContactDetails, CTAPromptList } from '../components/sections/CTAExtras'
import PageHero from '../components/sections/PageHero'
import DatabricksCanvas from '../components/sections/DatabricksCanvas'
import { initScenes } from '../vendor/scenes'
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
  if (type === 'databricks') return <DatabricksCanvas scene="hero" />
  return <canvas className="service-artwork-canvas" data-scene={type === 'salesforce' ? 'orbit' : 'grid'} data-compact="1" aria-hidden="true" />
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
  useEffect(() => initScenes(), [])
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
