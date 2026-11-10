const palni = 'https://palni.com'

export const databricksContent = {
  hero: {
    eyebrow: 'Home / Services / Databricks',
    title: 'Modernize Your Data. Accelerate AI.',
    description: 'From legacy modernisation to production AI, Palni helps enterprises build trusted data foundations on Databricks through data engineering, governance, analytics and industry-focused solutions.',
    actions: [{ label: 'Talk to a Databricks Expert', href: '#contact' }],
  },
  expertise: {
    title: 'Databricks Expertise. Built Around Your Business.',
    description: 'Palni combines Databricks engineering, industry understanding, accelerators and practical AI experience to address complex enterprise data challenges. We build foundations that support trusted reporting today and new intelligence use cases over time.',
    items: [
      { title: 'Data Engineering', description: 'Build and modernise scalable data platforms, pipelines and data products that support reliable analytics and AI.', icon: 'engineering', link: '#capabilities' },
      { title: 'Industry Expertise', description: 'Connect data initiatives to industry priorities, operating models and business decisions.', icon: 'industry', link: '#industry-solutions' },
      { title: 'AI and Agentic', description: 'Explore conversational analytics, AI agents and intelligent workflows grounded in enterprise data.', icon: 'ai', link: '#industry-solutions' },
      { title: 'Accelerators', description: 'Use repeatable patterns and accelerators to support migration, engineering and selected AI delivery needs.', icon: 'accelerator', link: '#capabilities' },
    ],
  },
  journey: {
    title: 'One Databricks Partner, From Strategy to Production AI.',
    description: 'Connect the early decisions, engineering work and operating discipline needed to make enterprise data useful. Palni supports the journey from direction and architecture through delivery and ongoing improvement.',
    steps: [
      { title: 'Architecture and Strategy', description: 'Define the data roadmap, architecture priorities and business case before committing to a delivery path.' },
      { title: 'Modernization and Migration', description: 'Move legacy data environments to modern platforms through structured discovery, conversion and validation.' },
      { title: 'Data Engineering', description: 'Build scalable pipelines, dependable ingestion and transformation, and trusted data products.' },
      { title: 'Governance and Security', description: 'Strengthen access control, lineage, ownership, quality and governance across the data environment.' },
      { title: 'Analytics and AI', description: 'Turn governed data into reporting, analytics, machine learning and AI applications.' },
      { title: 'Operate and Optimise', description: 'Improve reliability, performance, cost and scale as data products and use cases grow.' },
    ],
  },
  intelligence: {
    title: 'From Modern Data to Enterprise Intelligence',
    description: 'Connect fragmented data, modernise critical platforms and put trusted intelligence into the hands of the people who need it.',
    stages: [
      { number: '01', title: 'Modernize: Move Beyond Legacy Data', description: 'Migrate complex platforms and workloads to Databricks while preserving business logic, data quality and confidence in the results.', art: 'migration' },
      { number: '02', title: 'Trust: Build Confidence in Enterprise Data', description: 'Unify, reconcile and govern enterprise data so teams and AI agents can work from trusted information with the controls and lineage the business requires.', art: 'trust' },
      { number: '03', title: 'Intelligence: Put AI to Work on Your Data', description: 'Bring governed analytics, GenAI, conversational experiences and AI agents together with enterprise context to deliver useful answers, applications and actions.', art: 'intelligence' },
    ],
  },
  faqs: [
    { question: 'What does Palni help enterprises do with Databricks?', answer: 'Palni helps modernise data platforms, build trusted data products, strengthen governance and bring analytics and AI closer to enterprise teams.' },
    { question: 'What is the Modernize, Trust, Intelligence journey?', answer: 'It is a practical way to sequence data work: modernise platforms, build confidence through quality and governance, then use trusted data for analytics and AI.' },
    { question: 'Can Palni migrate us from Teradata to Databricks?', answer: 'Palni can help assess migration goals, workloads, dependencies and a suitable delivery approach. A discovery conversation can clarify the best first step for your environment.' },
    { question: 'Where should we start with Databricks?', answer: 'Start with the business outcome and current data landscape. From there, teams can identify the highest-value platform, governance or use-case priorities.' },
    { question: 'How many Databricks certified people does Palni have?', answer: 'Certification counts can change. Contact Palni for current team credentials and the experience relevant to your project.' },
    { question: 'Does Palni help with AI on Databricks?', answer: 'Yes. Palni works on governed data foundations and practical analytics and AI use cases, including intelligent workflows and enterprise AI applications.' },
  ],
  contact: {
    eyebrow: 'Databricks services',
    title: 'Put Our Databricks Expertise to Work',
    description: 'Talk to our Databricks experts about your data, modernisation or AI priorities. We can help you clarify the opportunity and identify the next practical step.',
    actions: [{ label: 'Talk to a Databricks Expert', href: `${palni}/contact-us/` }, { label: 'View Use Cases', href: '/#case-studies', variant: 'outline' }],
    prompts: [
      { title: 'Share your priority', description: 'Tell us the challenge, platform or data priority you are working on.' },
      { title: 'Meet a Databricks expert', description: 'A senior Palni expert reviews your current setup with you.' },
      { title: 'Agree a practical first step', description: 'Leave with a clear starting point you can act on.' },
    ],
  },
}
