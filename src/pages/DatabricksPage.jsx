import SiteFooter from '../components/layout/SiteFooter'
import SiteHeader from '../components/navigation/SiteHeader'
import ExpertiseCard from '../components/cards/ExpertiseCard'
import CTASection from '../components/sections/CTASection'
import { CTAContactDetails, CTAPromptList } from '../components/sections/CTAExtras'
import DatabricksCanvas from '../components/sections/DatabricksCanvas'
import PageHero from '../components/sections/PageHero'
import ProcessSteps from '../components/sections/ProcessSteps'
import SectionHeader from '../components/sections/SectionHeader'
import FAQAccordion from '../components/ui/FAQAccordion'
import { homepageFooterLinks } from '../data/navigation'
import { databricksContent as content } from '../data/databricks'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './DatabricksPage.css'

const featureIcons = {
  engineering: 'M4 7h16M7 4v6m10-6v6M5 13h14v7H5z M9 16h.01M15 16h.01',
  industry: 'M4 20V8l8-4 8 4v12z M8 20v-5h8v5M8 10h.01M12 10h.01M16 10h.01',
  ai: 'M12 3v3M12 18v3M3 12h3M18 12h3M12 8l1.5 2.5L16 12l-2.5 1.5L12 16l-1.5-2.5L8 12l2.5-1.5z',
  accelerator: 'M13 2 4 14h7l-1 8 10-13h-7z',
}

function ExpertiseCards() {
  return <div className="databricks-expertise-grid">{content.expertise.items.map((item) => <ExpertiseCard {...item} iconPath={featureIcons[item.icon]} className="databricks-expertise-card" key={item.title} />)}</div>
}

function PartnerJourney() {
  return <ProcessSteps steps={content.journey.steps} className="databricks-journey-grid" numberLabel={(index, count) => `Stage ${index + 1} of ${count}`} revealItems={false} />
}

function IntelligenceStages() {
  return <div className="databricks-stages">{content.intelligence.stages.map((stage) => <article className={`databricks-stage databricks-stage--${stage.art} reveal-on-scroll`} key={stage.number}>
    <div className="databricks-stage__copy"><span>{stage.number}</span><h3>{stage.title}</h3><p>{stage.description}</p></div>
    <div className="databricks-stage__visual"><DatabricksCanvas scene={stage.art} /></div>
  </article>)}</div>
}

export default function DatabricksPage() {
  useScrollReveal()
  return <>
    <SiteHeader links={[{ label: 'Careers', href: '/#careers' }, { label: 'Contact', href: '#contact' }]} cta={{ label: 'Talk to a Databricks Expert', href: '#contact' }} />
    <main className="databricks-page" id="top">
      <PageHero {...content.hero} className="databricks-hero" visual={<div className="databricks-hero-art"><DatabricksCanvas scene="hero" /><div className="databricks-hero-art__labels" aria-hidden="true"><span>AI dashboards</span><span>ML models</span><span>GenAI apps</span><span>BI</span><span>Data</span></div></div>} />

      <nav className="databricks-subnav" aria-label="Databricks page sections"><div className="container databricks-subnav__inner">
        <a className="databricks-subnav__brand" href="#top">Databricks</a>
        <a className="is-active" href="#overview">Overview</a><a href="#capabilities">Capabilities</a><a href="#industry-solutions">Industry Solutions</a><a href="#expertise">Expertise and Accelerators</a>
      </div></nav>

      <section className="databricks-section databricks-overview" id="overview"><div className="container">
        <div className="databricks-section-heading databricks-section-heading--overview"><SectionHeader title={content.expertise.title} /><p>{content.expertise.description}</p></div>
        <div id="expertise"><ExpertiseCards /></div>
      </div></section>

      <section className="databricks-section databricks-journey" id="capabilities"><div className="container">
        <div className="databricks-section-heading databricks-section-heading--journey"><SectionHeader title={content.journey.title} /><p>{content.journey.description}</p></div>
        <PartnerJourney />
      </div></section>

      <section className="databricks-section databricks-intelligence" id="industry-solutions"><div className="container">
        <div className="databricks-section-heading databricks-section-heading--intelligence"><SectionHeader title={content.intelligence.title} /><p>{content.intelligence.description}</p></div>
        <IntelligenceStages />
      </div></section>

      <section className="databricks-section databricks-faq" id="faqs"><div className="container databricks-faq__layout">
        <div className="databricks-faq__intro"><h2>Frequently Asked Questions</h2><p>Short answers to what people ask us most. Still unsure? Ask us directly.</p></div>
        <FAQAccordion items={content.faqs} defaultOpen={0} />
      </div></section>

      <div className="databricks-final-cta" id="contact"><CTASection eyebrow={content.contact.eyebrow} title={content.contact.title} description={content.contact.description} actions={content.contact.actions} tone="brand" aside={<CTAPromptList prompts={content.contact.prompts} />} footer={<CTAContactDetails />} /></div>
    </main>
    <SiteFooter description="Palni helps enterprises improve sales and service workflows, modernise data and apply AI to practical business challenges." contact={[{ label: 'sales@palni.com', href: 'mailto:sales@palni.com' }, { label: '+1 214 501 0690', href: 'tel:+12145010690' }]} socialLinks={[{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/palni-inc/', external: true }]} serviceLinks={homepageFooterLinks.services} resourceLinks={homepageFooterLinks.resources} companyLinks={homepageFooterLinks.company} legalLinks={[{ label: 'Privacy Policy', href: 'https://palni.com/privacy-policy/' }, { label: 'Terms & Conditions', href: 'https://palni.com/terms-conditions/' }]} />
  </>
}
