# Palni live-reference redesign

Reference: https://palni.indexstudio.net/index.html. Audited 10 November 2026.

The active application uses `src/pages/ReferencePage.jsx` and `src/content/*.html`; the older `Homepage.jsx` and card components are not mounted by the router. Changes were made to the active application.

## Homepage mismatch report

These findings describe the **before** implementation, captured in `visual-audit/before/index.html.png`.

| Page | Reference section | Local status before changes | Required action implemented |
|---|---|---|---|
| Homepage | Header and navigation | Incorrect: compact Services dropdown; cross-platform links absent | Replace with Capabilities mega menu, three practice columns, solutions row, featured Resources outcome and Company group links |
| Homepage | Hero | Incorrect: “Scale Enterprise Operations…” heading and old supporting copy | Restore “Better Business Outcomes Start with the Right Platforms”, current description, links, proportions and animated field |
| Homepage | Trusted by Enterprise Teams | Incorrect: six labelled placeholders | Add ten actual client logos and duplicated animated marquee track; restore horizontal heading/copy layout |
| Homepage | Three Services. Clear Areas of Expertise. | Present, old styling; scene artwork absent in captured local render | Restore current service scenes, card layout, spacing and platform accents |
| Homepage | Start With the Business Challenge | Present, old icon and surface styling | Restore current four-row ledger, illuminated indicators and styling |
| Homepage | A Practical Path from Priority to Progress | Present | Restore current reference styling and retain four steps in order |
| Homepage | Real Problems. Useful Outcomes. | Incorrect: three compact text/metric tiles | Replace with full-width photographic, three-slide outcome carousel, metrics, labels, dots and previous/next controls |
| Homepage | Expertise That Connects Strategy with Delivery | Present, old surface/icon styling | Restore current four-card layout and violet brand accents |
| Homepage | Build What Comes Next with Palni | Incorrect: text-only section | Restore full-width hands photograph, scrim, heading, copy and careers button |
| Homepage | What Would You Like to Improve? | Present, old gold/maroon panel treatment | Restore current two-column violet/navy panel, three steps and contact row |
| Homepage | Footer | Incorrect: old Services column and incomplete links | Restore Capabilities column, cross-platform and group links, social icons, legal links and office clocks |
| Homepage | Frequently Asked Questions | Extra: absent from current reference | Remove section and its spacing from rendered homepage |

## Pages reviewed and corrected

| Reference/local route | Before finding | Correction |
|---|---|---|
| `/`, `/index.html` | Outdated homepage, navigation, photos, logos and extra FAQ | Rebuilt with current nine-section main content, header and footer |
| `/salesforce` | Missing “Let's Talk Salesforce” image band; extra FAQ | Added band; removed FAQ; updated imagery, capabilities and shared chrome |
| `/servicenow` | Missing “Let's Talk ServiceNow” band; extra FAQ | Added band; restored current solutions, VoiceCueAI, case studies and accelerators |
| `/databricks` | Missing “Let's Talk Databricks” band; extra FAQ | Added band; restored current six-stage journey and intelligence sections |
| `/databricks-capabilities` | Extra FAQ and outdated visual treatment | Removed FAQ; restored capability sections, imagery, tabs and CTA |
| `/databricks-industries` | Extra FAQ and outdated visual treatment | Removed FAQ; restored industry layouts and experience section |
| `/databricks-expertise` | Extra FAQ and outdated visual treatment | Removed FAQ; restored certification metrics and six accelerators |
| `/data-engineering` | Missing route: previously redirected to homepage | Added its own reference page with ten sections, capability tabs, images, process and outcomes |
| `/ai-automation` | Missing route: previously redirected to homepage | Added its own reference page with ten sections, agentic AI, capabilities, process and outcomes |
| `/cx-solutions` | Missing route: previously redirected to homepage | Added its own reference page with ten sections, support, capabilities, process and outcomes |
| `/use-cases` | Extra FAQ and outdated cards | Removed FAQ; restored photographed case studies and service filters |
| `/about` | Extra standalone “Experience and Relationships” section and FAQ | Removed both; preserved the reference's integrated story metrics; restored team imagery, principles, leadership, offices and culture sections |
| `/careers` | Extra FAQ and outdated visuals | Removed FAQ; restored current page imagery, tracks, role search/filter/expansion and hiring steps |
| `/contact` | Extra FAQ and outdated visuals | Removed FAQ; restored current form and office layouts |

Every named page also supports its reference `.html` URL.

## Destinations that are sections or external links

No separate designs were invented for these destinations:

| Requested item | Reference destination |
|---|---|
| Salesforce Focus Areas | `/salesforce#focus` |
| Salesforce Capabilities | `/salesforce#clouds` |
| Salesforce Use Cases | `/salesforce#usecases` |
| ServiceNow Capabilities | `/servicenow#solutions` |
| VoiceCueAI | `/servicenow#voicecue` |
| ServiceNow Accelerators | `/servicenow#accelerators` |
| Databricks Industry Solutions | `/databricks-industries` |
| Databricks Expertise and Accelerators | `/databricks-expertise` |
| Resources Accelerators | `/databricks-expertise#accelerators` |
| Insights | External: https://palni.com/blog/ |
| Our Story | `/about#story` |
| Leadership | `/about#leadership` |
| Principles | `/about#principles` |
| Offices | `/contact#locations` |

## Implementation

- Replaced all 14 active page bodies with freshly retrieved reference content; retained each page's own layout.
- Replaced the active stylesheet with the current reference design system, including responsive spacing, violet primary controls, mega menus, image bands, carousel and marquee.
- Downloaded the reference assets, including actual client logos and section photography, into `public/assets`; assets are served locally.
- Preserved live canvas fields, service scenes, scroll effects, count-ups, theme switching, tab navigation, filtering and native form behavior.
- Replaced the old vendor-script wrapper: multiple independent reference scripts now remain intact. Timers, frames, idle callbacks, observers and listeners are disposed on React route changes. The EventTarget patch is restored immediately after registering effects.
- Separated hash scrolling from page initialization so section navigation does not restart all animation and interaction handlers.

## Verification and evidence

`visual-audit/inventory.json` records all reference sections, images, destinations and before-page sections. The reference host returned 403 to direct browser navigation in this environment; Playwright's request transport retrieved the live responses and supplied them unchanged to the browser. The initial audit scrolled every page and captured rendered views.

`scripts/verify-reference.mjs` compares reference and local section headings, positions, heights, backgrounds, heading sizes and image counts at 1920×1080, 1440×900, 768×1024 and 390×844. Each size has full-page reference/local PNG pairs under `visual-audit/<width>x<height>/`. Static comparisons use reduced motion so running transitions do not obscure layout differences. Separate interaction checks run with normal motion.

Final machine-readable results and interaction outcomes are in `visual-audit/results.json`. Production output is built with `npm run build`.

Final outcome: **56/56 page/viewport comparisons passed** for the recorded section structure, position, height, background, heading size and image count. No horizontal overflow, broken visible images or browser script errors were recorded. The normal-motion canvas changed across frames; carousel controls, theme switching, nine SPA transitions, menu reinitialization, hash filters and anchor scrolling passed. Additional form, careers, tab and mobile checks passed in `visual-audit/interaction-results.json`.

The initial Databricks measurement difference came from undecoded lazy images. The final pass waits for every image to decode. Heading comparisons collapse HTML whitespace exactly as browser text layout does. These are structural checks with screenshot evidence, not a claim that every animated pixel is identical.

Open [the comparison gallery](visual-audit/index.html) for all 14 pages and all four viewport pairs. Representative corrected screenshots: [desktop homepage](visual-audit/home-desktop.png), [mobile homepage](visual-audit/home-mobile.png), [Capabilities mega menu](visual-audit/1440x900/menu-Capabilities-local.png), [mobile navigation](visual-audit/mobile-navigation.png).

To reproduce: install dependencies, start Vite with `npm run dev -- --host 127.0.0.1 --port 5174`, then run `node scripts/verify-reference.mjs` and `node scripts/verify-interactions.mjs`. The scripts use the installed Windows Chrome executable. `node scripts/audit-reference.mjs` refreshes live source captures and the before inventory; it is an intentional refresh operation, not needed to inspect existing evidence.

## Limits retained from the reference

- Reference leadership cards contain “[Name]” placeholders. These were preserved rather than replaced with invented people.
- Contact/CV success behavior is client-side, as on the reference; no delivery backend was added.
- Animated canvas particles and live office clocks can differ between screenshots. Structural comparisons exclude these changing pixels.
- External sites are preserved as external destinations; their content was not recreated locally.
- The production build reports a JavaScript chunk-size advisory (approximately 750 kB before gzip). It completes successfully.
