const palni = 'https://palni.com'

export const homepageContent = {
  hero: {
    eyebrow: '',
    title: 'Scale Enterprise Operations with Salesforce, ServiceNow, Data & AI',
    description: 'We help teams improve pipeline visibility, automate workflows, and scale operations — from strategy through execution.',
    actions: [
      { label: 'Start with a Discovery', href: '#contact' },
      { label: 'Explore Use Cases', href: '#case-studies', variant: 'outline' },
    ],
    platforms: ['Salesforce', 'ServiceNow', 'Databricks'],
  },
  trust: {
    eyebrow: 'Enterprise technology expertise',
    title: 'Trusted by Enterprise Teams',
    description: 'We work with enterprise teams across industries to improve the systems, workflows and data that support their business.',
    platforms: [
      { label: 'Salesforce', href: `${palni}/salesforce/`, accent: 'salesforce' },
      { label: 'ServiceNow', href: `${palni}/servicenow/`, accent: 'servicenow' },
      { label: 'Databricks', href: '/databricks/', accent: 'databricks' },
    ],
  },
  services: {
    eyebrow: 'What we do',
    title: 'Three Services. Clear Areas of Expertise.',
    description: 'Choose the area that best matches the business challenge you want to address.',
    items: [
      { title: 'Salesforce', description: 'Improve pipeline visibility, simplify quoting and connect sales and service workflows. Palni helps shape Salesforce around the way your teams sell, serve and grow.', href: `${palni}/salesforce/`, linkLabel: 'Explore Salesforce', artwork: 'salesforce' },
      { title: 'ServiceNow', description: 'Improve service delivery, reduce manual effort and create more connected workflows across IT and enterprise operations.', href: `${palni}/servicenow/`, linkLabel: 'Explore ServiceNow', artwork: 'servicenow' },
      { title: 'Databricks', description: 'Modernise data foundations, improve trust in enterprise information and make analytics and AI more useful to the business.', href: '/databricks/', linkLabel: 'Explore Databricks', artwork: 'databricks' },
    ],
  },
  challenges: {
    eyebrow: 'Use cases',
    title: 'Start With the Business Challenge',
    description: 'The best starting point is the change you want to make, not a list of platform features.',
    items: [
      { challenge: 'Improve Sales Visibility', description: 'Connect opportunity data, quoting and sales workflows so teams can manage pipeline activity with greater clarity.', platform: 'Salesforce', icon: 'funnel', href: `${palni}/usecases/` },
      { challenge: 'Improve Service Operations', description: 'Structure service requests, automate routine work and improve operational visibility.', platform: 'ServiceNow', icon: 'workflow', href: `${palni}/usecases/` },
      { challenge: 'Build Trusted Data', description: 'Connect data sources, improve quality and governance, and build a stronger foundation for analytics.', platform: 'Databricks', icon: 'shield', href: '/databricks/' },
      { challenge: 'Prepare Data for AI', description: 'Create trusted, governed data environments that can support practical analytics and AI use cases.', platform: 'Databricks', icon: 'spark', href: '/databricks/' },
    ],
  },
  process: {
    eyebrow: 'How we work',
    title: 'A Practical Path from Priority to Progress',
    description: 'We begin with the business problem, define a practical route forward, deliver working solutions and improve them based on what the organisation needs next.',
    steps: [
      { title: 'Align', description: 'Understand the objective, the change that matters and the teams involved.' },
      { title: 'Execute', description: 'Turn the agreed priorities into a focused solution, with clear responsibilities and practical milestones.' },
      { title: 'Optimise', description: 'Review what is working, address friction and improve the solution.' },
      { title: 'Scale', description: 'Extend proven approaches where they create value across teams or operations.' },
    ],
  },
  caseStudies: {
    eyebrow: 'Selected outcomes',
    title: 'Real Problems. Useful Outcomes.',
    description: 'Explore examples of how Palni has applied enterprise platforms, data engineering and AI to practical business challenges.',
    items: [
      { platform: 'ServiceNow', metric: '25%', metricLabel: 'Reduction', headline: 'Reduction in Hardware Spend', summary: 'Replaced spreadsheet-led tracking with full lifecycle asset governance, real-time visibility and automated workflows.',  href: `${palni}/servicenow/` },
      { platform: 'Salesforce', headline: 'Improved Pipeline Visibility and Sales Adoption', summary: 'Used guided intake and automated opportunity and quote creation to support consistent deal tracking.',  href: `${palni}/salesforce/` },
      { platform: 'Databricks', metric: '40%', metricLabel: 'Reduction', headline: 'Increase in Near Real-Time Data Availability', summary: 'Connected enterprise data through automated pipelines, governance and central reporting.',  href: '/databricks/' },
    ],
  },
  expertise: {
    eyebrow: 'Why Palni',
    title: 'Expertise That Connects Strategy with Delivery',
    description: 'Palni brings platform knowledge, engineering capability and practical delivery experience together to help teams move from a defined priority to a working solution.',
    items: [
      { title: 'Senior Expertise, Lean Teams', description: 'Senior-led delivery with hands-on execution, without oversized teams.', icon: 'award' },
      { title: 'Outcome Focused', description: 'Work is aligned to business results, not just implementation.', icon: 'target' },
      { title: 'Accelerated Delivery', description: 'Proven patterns and purpose-built accelerators help teams reach value sooner.', icon: 'rocket' },
      { title: 'Embedded Partnership', description: 'We work as part of the team throughout delivery.', icon: 'partnership' },
    ],
  },
  careers: {
    eyebrow: 'Careers',
    title: 'Build What Comes Next with Palni',
    description: 'Work with people who value collaboration, new ideas, learning and the opportunity to solve practical enterprise challenges.',
    action: { label: 'Explore Careers', href: `${palni}/careers/` },
  },
  faqs: [
    { question: 'What does Palni do?', answer: 'Palni helps enterprises transform customer experience, modernise operations and unlock the value of data with Salesforce, ServiceNow and Databricks.' },
    { question: 'Which services does Palni offer?', answer: 'Palni works across Salesforce transformation, ServiceNow transformation, data engineering, Databricks data platforms, AI and automation, and customer experience solutions.' },
    { question: 'How does an engagement with Palni start?', answer: 'A discovery conversation is a practical first step to discuss your priorities, existing platforms and desired outcomes.' },
    { question: 'How does Palni deliver work?', answer: 'Palni describes its approach as aligning on priorities, executing working solutions, optimising based on what is learned and scaling what proves useful.' },
    { question: 'Can Palni work across more than one platform?', answer: 'Yes. Palniâ€™s service areas cover Salesforce, ServiceNow and Databricks, including connected customer, operations and data work.' },
    { question: 'Which industries does Palni work with?', answer: 'Palni lists banking and financial services, insurance, telecom, pharma and life sciences, retail, manufacturing, media and healthcare.' },
    { question: 'Where is Palni based?', answer: 'Palni lists offices in the United States and India. Contact Palni for the location best suited to your enquiry.' },
    { question: 'Where can I see examples of Palniâ€™s work?', answer: 'Visit Palniâ€™s use cases to explore published examples across Salesforce, ServiceNow and Databricks.' },
  ],
  faqSection: {
    eyebrow: 'FAQs',
    title: 'Frequently Asked Questions',
    description: 'Short answers to what people ask us most. Still unsure? Ask us directly.',
  },
  contact: {
    eyebrow: 'Start a conversation',
    title: 'What Would You Like to Improve?',
    description: 'Tell us about the business challenge, platform or data priority you are working on. We will help identify a practical place to start.',
    actions: [
      { label: 'Start with a Discovery', href: `${palni}/contact-us/` },
      { label: 'View Use Cases', href: '#case-studies', variant: 'outline' },
    ],
    prompts: [
      { title: 'Share your priority', description: 'Tell us the challenge, platform or data priority you are working on.' },
      { title: 'Meet a platform expert', description: 'A senior Palni expert reviews your current setup with you.' },
      { title: 'Agree a practical first step', description: 'Leave with a clear starting point you can act on.' },
    ],
  },
}
