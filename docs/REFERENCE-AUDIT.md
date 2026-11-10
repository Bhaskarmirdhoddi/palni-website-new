# Palni Reference Website Audit

> Historical snapshot from 3 November. The current live-reference audit, implemented changes and verification are documented in [REDESIGN-REPORT.md](REDESIGN-REPORT.md). The live site changed substantially after this snapshot.

Source: https://palni.indexstudio.net/  
Inspected: 3 November 2026  
Method: live page visit, computed CSS variables, original HTML/CSS/JS download (`site.css`, `site.js`, `scenes.js`).

## Stack on the reference

- Static HTML pages (not a SPA)
- One self-hosted font: **Space Grotesk** (`assets/fonts/space-grotesk.woff2`, weight 300–700)
- One stylesheet: `assets/site.css` (“Confluence” design system v2)
- Two scripts, no GSAP/AOS/Swiper/Bootstrap: `assets/site.js`, `assets/scenes.js`
- Canvas particle fields and 3D-style service scenes drawn in JavaScript
- Theme: `document.documentElement.dataset.theme` = `dark` | `light`, stored as `localStorage.palni-theme`

## Global design tokens (computed from `:root`)

| Token | Dark | Light |
| --- | --- | --- |
| Page background `--ink-0` | `#070D1C` | `#F4F5F9` |
| Surface `--ink-1` | `#0E1830` | `#FFFFFF` |
| Raised `--ink-2` | `#15223F` | `#EBEEF5` |
| Heading/body `--pearl` | `#EEF2FA` | `#0E162C` |
| Muted `--mist` | `#AAB6CF` | `#47526C` |
| Dim `--dim` | `#8592B0` | `#5E6984` |
| Brand gold `--gold-hi` | `#E0AA4E` | `#8E5F17` |
| Brand gold `--gold` | `#B37C27` | `#B37C27` |
| Maroon `--maroon` | `#883125` | `#883125` |
| Button `--btn-bg` / `--btn-fg` / `--btn-hover` | `#E0AA4E` / `#1C1305` / `#F0C06A` | `#883125` / `#FFFFFF` / `#A23C2E` |
| Salesforce `--sf` | `#4FB6FF` | `#0867AE` |
| ServiceNow `--sn` | `#5ED9A0` | `#0A7A4F` |
| Databricks `--db` | `#FF7448` | `#BF4117` |
| Max content `--wrap` | `1320px` | same |
| Header height `--hdr-h` | `72px` | same |
| Section padding `--sec-y` | `6rem` (4.5rem tablet, 3.5rem mobile) | same |
| Tile radius `--r-tile` | `18px` | same |
| Control radius `--r-ctl` | `10px` | same |
| Easing `--ease` | `cubic-bezier(.2, .75, .1, 1)` | same |

Typography (desktop ≥ 1024px): display 5rem / H1 4rem / H2 3rem / H3 1.75rem / H4 1.25rem / lead 1.25rem / body 1.0625rem / small 0.9375rem / micro 0.8125rem. One family for UI and reading.

Assets: `palni-logo-white.svg`, `palni-logo-color.svg`. No photography on the homepage; client logos are labelled placeholders (“Client logo”). Grain overlay is an inline SVG data URI.

## Navigation (all primary destinations)

| Label | Destination |
| --- | --- |
| Home | `index.html` |
| Databricks Overview | `databricks.html` |
| Capabilities | `databricks-capabilities.html` |
| Industry Solutions | `databricks-industries.html` |
| Expertise and Accelerators | `databricks-expertise.html` |
| ServiceNow | `servicenow.html` |
| Salesforce | `salesforce.html` |
| Use Cases | `use-cases.html` |
| Insights | **external** `https://palni.com/blog/` |
| About Palni | `about.html` (+ `#story` `#principles` `#how` `#leadership` `#people`) |
| Offices | `contact.html#locations` |
| Careers | `careers.html` |
| Contact | `contact.html` |
| Privacy / Terms | `https://palni.com/privacy-policy/` and `https://palni.com/terms-conditions/` |

Header: logo left, nav centre (Services / Resources / Company dropdowns, Careers, Contact), theme toggle + gold CTA + mobile burger. Dropdowns open on click, close on outside click / Escape. Header gains `.scrolled` after 8px. Progress bar `.hdr .bar`. Mobile drawer `#drawer`.

Footer: logo, description, LinkedIn, X, Services / Resources / Company columns, © 2026 Palni Inc., Hyderabad IST and Dallas CT clocks, legal links.

## Pages and sections

### Home (`index.html`)
Background: navy with animated tone orbs and confluence canvas. Hero display heading, lead, two CTAs, service chips. Sections: Trusted by Enterprise Teams (logo strip), Three Services (orbit/grid/lake canvases), Start With the Business Challenge (ledger rows), Practical Path (4 steps), Real Problems (metric tiles), Expertise quad, Careers promo, FAQ accordion (`details`), Contact CTA panel. Animations: word-stagger H1, magnetic buttons, pointer glow, tile tilt, scroll-driven `--tone-*`.

### Databricks (`databricks.html`, `data-svc="databricks"`)
Hero with lake scene, breadcrumbs, Databricks subnav (Overview / Capabilities / Industry Solutions / Expertise). Expertise tiles, six-stage journey, Modernize / Trust / Intelligence canvases (`strata`, `lanes`, `network`), FAQ, CTA.

### Databricks Capabilities (`databricks-capabilities.html`)
Capability groups, agentic data, tabs where present, FAQ, CTA.

### Databricks Industries (`databricks-industries.html`)
Industry cards (banking/FS, pharma/life sciences, manufacturing), FAQ, CTA.

### Databricks Expertise (`databricks-expertise.html`)
Certified expertise stats, accelerator cards, FAQ, CTA.

### ServiceNow (`servicenow.html`, `data-svc="servicenow"`)
Hero grid scene, partner copy, capabilities, outcomes, product capabilities, supporting capabilities, VoiceCueAI waveform canvas, case studies, accelerators, FAQ, CTA.

### Salesforce (`salesforce.html`, `data-svc="salesforce"`)
Hero orbit scene, Revenue Cloud/CPQ, Agentforce/AI, outcomes, capabilities, supporting capabilities, case studies, FAQ, CTA.

### Use Cases (`use-cases.html`)
Hero, filter bar `#uc-filters` (All / Salesforce / ServiceNow / Databricks / Service to confirm) with live counts, case grid (`Challenge` / `What Palni did` / `Outcome`), hash filters, FAQ.

### About (`about.html`)
Hero, intro, Our Story, Principles, How We Work, Leadership, People and Culture, CTA. Company items are in-page anchors, not separate HTML files.

### Careers (`careers.html`)
Hero, how we work, tracks, role filters/search/accordion, CV email form (client-side only), FAQ, CTA.

### Contact (`contact.html`)
Hero, enquiry form (name, email, service radios including hash `#databricks` etc.), validation, success state, office locations, FAQ/CTA as in source.

## Interaction and motion

- Flow fields: `canvas[data-field]` modes confluence, funnel, lanes, strata, network
- Service scenes: `canvas[data-scene]` orbit / grid / lake
- VoiceCueAI: `canvas[data-wave]`
- Count-up: `.num[data-to]`
- FAQ: native `details/summary`
- `prefers-reduced-motion`: fields draw a still frame; scenes step once
- Responsive breakpoints in CSS: 1023px, 639px (plus layout queries in components)

## Recreation approach

Reuse original `site.css`, `site.js`, `scenes.js`, font and logos. React + Vite + React Router render the original markup per route so layout, type, colour and animation stay matched rather than redesigned.
