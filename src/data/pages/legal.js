import { chromeByPage } from './navigation'

function policyPage(key, title, introduction, topics, relatedLink) {
  return {
    layout: 'PageLayout',
    content: {
      ...chromeByPage[key],
      divProps: { className: 'page-root' },
      aProps: { className: 'skip', href: '#main' },
      linkLabel: 'Skip to content',
      divProps2: { className: 'bg', 'aria-hidden': true },
      spanProps: { className: 'glow' },
      mainProps: { id: 'main' },
    },
    sections: [
      { key: 'hero', type: 'PolicyHero', content: { title, introduction } },
      {
        key: 'summary',
        type: 'PolicyContent',
        content: { topics, relatedLink, sourceUrl: `https://palni.com/${key}/` },
      },
    ],
  }
}

export const privacyPolicy = policyPage(
  'privacy-policy',
  'Privacy Policy',
  'An overview of how Palni collects, uses, shares, and protects personal information.',
  [
    { id: 'collection-and-use', title: 'Information collection and use', text: 'Palni may collect contact and business details, inquiries, and device or browsing data. It uses this information to respond to requests, provide services, improve the site, prevent fraud, and meet its obligations.' },
    { id: 'communications', title: 'Communications and preferences', text: 'Palni may send service updates and, with consent where required, marketing messages. You can ask to stop receiving communications by using the unsubscribe option or contacting Palni.' },
    { id: 'retention-and-security', title: 'Retention and security', text: 'Palni keeps personal information as needed for its stated purposes and obligations. It uses measures such as access controls and encryption where appropriate to protect that information.' },
    { id: 'sharing-and-transfers', title: 'Sharing and transfers', text: 'Palni may share information with providers, partners, or other parties when needed to deliver services or meet legal requirements. Processing may take place in other countries. Palni does not sell personal information.' },
    { id: 'cookies-and-rights', title: 'Cookies and privacy rights', text: 'You can manage cookies in your browser. Depending on applicable law, you may be able to access, correct, or delete your information or restrict its use.' },
  ],
  { href: '/terms-conditions', label: 'Terms & Conditions' },
)

export const termsConditions = policyPage(
  'terms-conditions',
  'Terms & Conditions',
  'An overview of the terms for using Palni’s website, engaging its services, and receiving communications.',
  [
    { id: 'website-use', title: 'Website use and ownership', text: 'Use the website for lawful business purposes. Palni and its licensors own the site materials unless stated otherwise. Reuse requires permission.' },
    { id: 'service-agreements', title: 'Service agreements and billing', text: 'Proposals or written agreements may set the scope, fees, timelines, and responsibilities for an engagement. A signed agreement governs the services it covers if its terms conflict with the website terms.' },
    { id: 'customer-information', title: 'Customer information', text: 'Provide accurate information and share only materials you are authorized to provide. Palni uses customer materials as needed for the services, subject to its policies and applicable agreements.' },
    { id: 'messaging', title: 'Messaging consent and opt-out', text: 'When you opt in, Palni may send service, support, or promotional messages. Frequency varies. Reply STOP to unsubscribe from text messages or contact Palni for assistance.' },
    { id: 'liability-and-disputes', title: 'Availability, liability, and disputes', text: 'The full terms describe service availability, warranty disclaimers, liability limits, and conditions for suspension. Texas law generally governs, subject to applicable law and separate written agreements.' },
  ],
  { href: '/privacy-policy', label: 'Privacy Policy' },
)
