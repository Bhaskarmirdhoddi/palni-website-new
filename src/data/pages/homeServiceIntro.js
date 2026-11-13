import { servicePrinciples } from './servicePrinciples'

const cards = [
  {
    key: 'connected-data',
    title: 'Fragmented Data',
    description: 'Critical data sits across applications, platforms and teams, making it difficult to access, reconcile and trust. We connect and organize enterprise data so it can reliably support operations, analytics and AI.',
  },
  {
    key: 'cross-platform-workflows',
    title: 'Disconnected Workflows',
    description: 'Business processes often span Salesforce, ServiceNow, internal applications and external systems. We connect those workflows end-to-end so information, decisions and actions move across the enterprise without unnecessary manual handoffs.',
  },
  {
    key: 'technology-complexity',
    title: 'Scaling Complexity',
    description: 'As platforms, integrations and data volumes grow, complexity grows with them. We design architectures and engineering foundations that remain reliable, maintainable and ready to evolve as the business scales.',
  },
  {
    key: 'ai-confidence',
    title: 'AI Readiness',
    description: 'AI is only as reliable as the data, context and workflows behind it. We prepare enterprise environments for AI by connecting trusted data, business context, applications and governed actions.',
  },
]

// Independent copy; reuse the established icon treatments and card structure.
export const homeServiceIntro = {
  id: 'service-intro',
  heading: 'Enterprise transformation rarely lives in one platform.',
  description: 'Palni brings applications, data and AI together so information flows, workflows move end-to-end, and AI works on trusted enterprise context.',
  items: cards.map((card, index) => ({
    key: card.key,
    content: {
      ...servicePrinciples[index].content,
      cardTitle: card.title,
      description: card.description,
    },
  })),
}
