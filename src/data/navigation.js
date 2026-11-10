import { homepageContent } from './homepage'

const palni = 'https://palni.com'

export const navigationGroups = [
  { label: 'Services', items: [{ label: 'Salesforce', href: `${palni}/salesforce/` }, { label: 'ServiceNow', href: `${palni}/servicenow/` }, { label: 'Databricks', href: '/databricks/' }] },
  { label: 'Resources', items: [{ label: 'Use cases', href: '#case-studies' }, { label: 'Insights', href: `${palni}/blog/` }] },
  { label: 'Company', items: [{ label: 'About Palni', href: `${palni}/about-us/` }, { label: 'Our approach', href: '#process' }] },
]

export const homepageFooterLinks = {
  services: homepageContent.services.items.map(({ title, href }) => ({ label: title, href })),
  resources: [{ label: 'Use cases', href: '#case-studies' }, { label: 'Insights', href: `${palni}/blog/` }],
  company: [{ label: 'About Palni', href: `${palni}/about-us/` }, { label: 'Careers', href: '#careers' }, { label: 'Contact', href: '#contact' }],
}
