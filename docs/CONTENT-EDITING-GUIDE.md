# Website Content & Design Editing Guide

Updated after project cleanup on 13 November 2026. This guide documents the retained live implementation. Legacy HTML copies, audit archives, inactive page implementations and unused styles were removed. All linked file paths were checked on disk. Paths are relative to C:/bhaskar/palni-website-new.

## 1. The three places to edit

| Type of change | Active location | Effect |
| --- | --- | --- |
| Headings, paragraphs, cards, image URLs and CTA links | src/data/pages/<page>.js, using one of the exact existing paths in the page reference below | Page-specific content |
| Shared markup and UI behavior | src/components/composed/; the homepage introduction also uses src/components/sections/ | A component edit affects every consumer |
| Colors, typography, spacing, backgrounds and responsiveness | [src/styles/site.css](../src/styles/site.css) and [src/styles/app.css](../src/styles/app.css) | Shared selectors affect multiple pages; scope single-page changes |

The suggested separation already exists, but the present configuration is detailed DOM-oriented data, not a simplified CMS. Fields such as heading, label2, aProps3 and imgProps are real existing fields. Do not replace them with invented hero.title or button.url fields: a template will ignore a field it never reads.

**Open the page-specific data file first for copy changes.** The active route chain is [src/routes/AppRoutes.jsx](../src/routes/AppRoutes.jsx) -> [src/pages/ReferencePage.jsx](../src/pages/ReferencePage.jsx) -> [src/components/composed/ConfiguredPage.jsx](../src/components/composed/ConfiguredPage.jsx) -> [src/components/composed/PageLayout.jsx](../src/components/composed/PageLayout.jsx) -> [src/components/composed/SectionRenderer.jsx](../src/components/composed/SectionRenderer.jsx). [src/data/pages/index.js](../src/data/pages/index.js) maps page keys to their content modules. [src/components/composed/registry.js](../src/components/composed/registry.js) maps section type strings to their exact JSX templates.

### One active source for page content

The old HTML snapshots, reference documents, preview pages and duplicate data files have been removed. Update the active page modules below. The remaining src/content/pages.js contains route metadata, not HTML page content.

## 2. How to find the right field

Every page configuration has layout, content (page frame/header/footer data) and an ordered sections array. A visible section entry has a registered type, a stable key, and content. Entries whose type is text preserve whitespace; they are not content sections.

Find the section by its **key or current visible heading**, not its numeric array position. Moving a section changes indexes. Section keys and the DOM id inside sectionProps are different concepts; preserve both unless you also update incoming anchors and accessibility references.

| Field family | What to edit | What to retain |
| --- | --- | --- |
| heading, description, cardTitle and numbered variants | Visible section/card copy | The exact field name the component reads |
| label, label2, label3... in a hero | Individual animated H1 words/phrases | Existing span props, h1Space fields, word order and animation --i indexes |
| aProps.href, aProps2.href... + matching linkLabel fields | Button/link destination and text | Existing className, target/rel and accessibility attributes |
| imgProps.src, imgProps.alt and numbered equivalents | Image URL and accessible description | Appropriate width/height, loading and decoding behavior |
| featureCardItems and other *Items arrays | Keyed repeated components | Unique stable item.key and the child content schema |
| sectionProps.className / navProps.className | Existing visual/layout variants | Existing base classes and required behavior hooks |
| sectionProps['data-tone'] | Scroll atmosphere/accent palette | A supported tone name; this is not automatically a solid section background |
| *Props.style | Per-instance CSS variables and limited local style values | React style-object syntax, e.g. backgroundColor rather than background-color |
| canvasProps / numbered equivalents, including nested objects | Scene type, field, color tokens and density | Existing canvas tag/hooks and accessibility attributes |

The paragraph below a heading may be description, description2, or a nested child's description. Match the visible words to the field before editing. A hero may also contain breadcrumb labels: changing breadcrumbs.label4 is not the same as changing the H1's label4.

## 3. Shared header, navigation and footer

The active central file is [src/data/pages/navigation.js](../src/data/pages/navigation.js). Its defaults.compact and defaults.formatted hold shared header/drawer/footer data; pageOverrides holds sparse page-specific differences. chromeByPage merges them and deep-copies the result for each page.

- For a deliberate all-page navigation/footer change, edit the appropriate central defaults, considering both compact and formatted defaults. These names describe source formatting, not mobile/desktop modes.
- For a Salesforce-only header/footer change, edit pageOverrides.salesforce.overrides; do not edit a shared default to achieve a page-only change. Existing overrides can supersede defaults, so check all affected consumers after global edits.
- In an override, null removes an inherited property. Arrays are replaced as values rather than merged item by item. Do not casually replace a full menu array just to edit one link.
- Runtime deep copies prevent accidental object mutation from leaking between pages. They do not make a deliberate source edit to shared defaults page-specific.

All pages use [src/components/composed/PageLayout.jsx](../src/components/composed/PageLayout.jsx), which renders [src/components/composed/SiteHeader.jsx](../src/components/composed/SiteHeader.jsx), [src/components/composed/MobileNavigation.jsx](../src/components/composed/MobileNavigation.jsx) and [src/components/composed/SiteFooter.jsx](../src/components/composed/SiteFooter.jsx). The header uses [src/components/composed/DesktopNavigation.jsx](../src/components/composed/DesktopNavigation.jsx); menu structures use [src/components/composed/MegaMenu.jsx](../src/components/composed/MegaMenu.jsx), [src/components/composed/MegaMenuVariant2.jsx](../src/components/composed/MegaMenuVariant2.jsx) and [src/components/composed/MegaMenuVariant3.jsx](../src/components/composed/MegaMenuVariant3.jsx). Footer groups use [src/components/composed/FSvcNavigation.jsx](../src/components/composed/FSvcNavigation.jsx), [src/components/composed/FResNavigation.jsx](../src/components/composed/FResNavigation.jsx), [src/components/composed/FCoNavigation.jsx](../src/components/composed/FCoNavigation.jsx) and [src/components/composed/LegalNavigation.jsx](../src/components/composed/LegalNavigation.jsx).

Route aliases, browser title, meta description and platform body marker are defined in [src/content/pages.js](../src/content/pages.js); the title there is the browser/SEO title, not the visible H1. [src/App.jsx](../src/App.jsx) handles internal link routing.

## 4. Styling and animation files used by every page

[src/main.jsx](../src/main.jsx) imports site.css first and app.css second. There is no active SCSS import in this entry point.

- [src/styles/site.css](../src/styles/site.css): active :root design tokens, fonts/typographic scale, light theme, containers, heroes, cards, grids, ledger rows, CTA panels, tabs, forms, footer, responsive breakpoints, hover treatments and CSS scroll-reveal keyframes/view timelines. Token changes are global.
- [src/styles/app.css](../src/styles/app.css): active overrides, homepage service/intro styling, responsive four-card grid, scoped inner-page section-heading corrections, Careers display-heading correction and ledger-track corrections. Read its later rules before changing an earlier rule in site.css.
- [index.html](../index.html): font-face declaration/preload, initial theme bootstrap, baseline metadata and favicon. The font file is [public/assets/fonts/space-grotesk.woff2](../public/assets/fonts/space-grotesk.woff2).
- [src/vendor/site.raw.js](../src/vendor/site.raw.js): editable source for flow fields, pointer/hover behavior, scrolling atmosphere, counters, menus, theme, clocks, forms, tabs/filters and carousel behavior. [src/vendor/site.js](../src/vendor/site.js) is its generated lifecycle-wrapped runtime.
- [src/vendor/scenes.raw.js](../src/vendor/scenes.raw.js): editable source for scene drawings and scene animation; [src/vendor/scenes.js](../src/vendor/scenes.js) is the generated runtime.
- [scripts/wrap-vendor.mjs](../scripts/wrap-vendor.mjs): regenerates both runtime wrappers from their raw sources after an intentional engine edit. A copy-only update does not require this.
- [src/vendor/pageEffects.js](../src/vendor/pageEffects.js): route-scoped cleanup of animation frames, listeners, observers and timers. [src/pages/ReferencePage.jsx](../src/pages/ReferencePage.jsx) initializes/cleans up engines and manages navigation/hash behavior. Do not remove cleanup when changing effects.

Only site.css and app.css remain in src/styles/. There are no parallel inactive stylesheet sets to choose between.

### Scope a design change to one page

Prefer adding a modifier class to that page's existing sectionProps.className and targeting that modifier in app.css. Do not replace a shared base class. body[data-svc='databricks'] affects all four Databricks pages; body[data-svc='brand'] affects several company/cross-platform pages. IDs such as final, focus and why recur across pages. A bare #final or .hero h1 edit is not page-specific.

A class prop only changes the class. A type such as HeroSubHasSceneSectionVariant2 selects a different registered DOM structure. Do not swap section type strings unless the data object satisfies the other component's fields; there is no universal hero-variant prop.

## 5. Page-by-page map

For **every page below**, the content, sections array, hero copy, cards, image URLs, CTA links, section classes, per-instance style objects and canvas props live in its listed page module, except the explicitly named homepage companion files and global navigation/footer data. All pages use the two active CSS files and animation files documented above. Each section table lists its exact renderer and nested renderers.

### Home

- Routes: `/` and `/index.html`; metadata in [src/content/pages.js](../src/content/pages.js) under key `home`.
- Content file: [src/data/pages/home.js](../src/data/pages/home.js). Section configuration: the same file's `sections` array.
- Hero content: [src/data/pages/home.js](../src/data/pages/home.js), entry `key: 'home-HeroSection-1'`, `content`. H1 fields: `label`, `label2`, `label3`, `label4`, `label5`, `label6`, `label7`. Intro: `description`. Hero buttons: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2`.
- Cards, images and CTA links: [src/data/pages/home.js](../src/data/pages/home.js), in the section fields listed below. Header/footer copy is inherited from [src/data/pages/navigation.js](../src/data/pages/navigation.js).
- Backgrounds/visual variants: [src/data/pages/home.js](../src/data/pages/home.js), each entry's `content.sectionProps` (or `navProps`), nested `*Props.className/style`, and its registered `type`. Actual colors/background layers are styled in [src/styles/site.css](../src/styles/site.css) and [src/styles/app.css](../src/styles/app.css).
- Styling: [src/styles/site.css](../src/styles/site.css) plus [src/styles/app.css](../src/styles/app.css); classes in the JSX/data select the rules.
- Animation configuration: the same [src/data/pages/home.js](../src/data/pages/home.js) entries' canvas/field/scene props and word `--i` style values; engines in [src/vendor/site.raw.js](../src/vendor/site.raw.js) and [src/vendor/scenes.raw.js](../src/vendor/scenes.raw.js), runtime wrappers in [src/vendor/site.js](../src/vendor/site.js) and [src/vendor/scenes.js](../src/vendor/scenes.js), CSS reveals in [src/styles/site.css](../src/styles/site.css).

**Homepage companion files:** [src/data/pages/homeServiceIntro.js](../src/data/pages/homeServiceIntro.js) owns the new introduction's heading, paragraph and four independent card titles/descriptions. Its `cards` array maps to `homeServiceIntro.items`. [src/data/pages/servicePrinciples.js](../src/data/pages/servicePrinciples.js) owns the existing Beyond the Platform Boundary cards and supplies the introduction's icon/structural defaults. Editing those icon defaults can affect both homepage sections. The new introduction's title/description values override the shared defaults, so edit its own companion file for that copy. This composition is within Home; other pages do not import these files.

| Section key / visible heading | Content location in the page module | Actual renderer(s) | Card/list, image and CTA fields |
| --- | --- | --- | --- |
| `home-HeroSection-1` -> Scale  | `sections -> key 'home-HeroSection-1' -> content` | [HeroSection.jsx](../src/components/composed/HeroSection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2`. |
| `trust` -> Trusted by Enterprise Teams | `sections -> key 'trust' -> content` | [TrustSection.jsx](../src/components/composed/TrustSection.jsx) | Lists: None in this section.<br>Images: `imgProps.src`, `imgProps.alt`, `imgProps2.src` (plus remaining numbered entries).<br>Links: None in this section. |
| `service-intro` -> Removing Friction from Enterprise Operations | [src/data/pages/homeServiceIntro.js](../src/data/pages/homeServiceIntro.js): `homeServiceIntro` | [ServiceIntroSection.jsx](../src/components/sections/ServiceIntroSection.jsx)<br>[ServicePrinciplesGrid.jsx](../src/components/sections/ServicePrinciplesGrid.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Cards: `cards` in homeServiceIntro.js; heading/description: `homeServiceIntro`; icons: imported servicePrinciples defaults. No card CTA/image fields are rendered by this component. |
| `services` -> Enterprise transformation rarely lives in  | `sections -> key 'services' -> content` | [ServicesSection.jsx](../src/components/composed/ServicesSection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `aProps2.href`, `aProps3.href`, `aProps4.href` (plus remaining numbered entries). |
| `challenges` -> Removing Friction from Enterprise Operations | `sections -> key 'challenges' -> content` | [WhySection.jsx](../src/components/composed/WhySection.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Lists: `featureCardItems`.<br>Images: None in this section.<br>Links: None in this section. |
| `how` -> A Practical Path from Priority to Progress | `sections -> key 'how' -> content` | [HowSection.jsx](../src/components/composed/HowSection.jsx)<br>[ProcessSteps.jsx](../src/components/composed/ProcessSteps.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `proof` -> Real Problems. Useful Outcomes. | `sections -> key 'proof' -> content` | [ProofSection.jsx](../src/components/composed/ProofSection.jsx)<br>[OutcomeSlide.jsx](../src/components/composed/OutcomeSlide.jsx)<br>[OutcomeSlideVariant2.jsx](../src/components/composed/OutcomeSlideVariant2.jsx) | Lists: None in this section.<br>Images: `outcomeSlide.imgProps.src`, `outcomeSlide.imgProps.alt`, `outcomeSlideVariant2.imgProps.src` (plus remaining numbered entries).<br>Links: `outcomeSlide.aProps.href`, `outcomeSlide.linkLabel`, `outcomeSlideVariant2.aProps.href`, `outcomeSlideVariant2.linkLabel` (plus remaining numbered entries). |
| `why` -> Beyond the Platform Boundary | `sections -> key 'why' -> content` | [WhySection.jsx](../src/components/composed/WhySection.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Lists: `featureCardItems`.<br>Images: None in this section.<br>Links: None in this section. |
| `careers` -> Build What Comes Next with Palni | `sections -> key 'careers' -> content` | [CareersSection.jsx](../src/components/composed/CareersSection.jsx) | Lists: None in this section.<br>Images: `imgProps.src`, `imgProps.alt`.<br>Links: `aProps.href`, `linkLabel`. |
| `final` -> What Would You Like to Improve? | `sections -> key 'final' -> content` | [DiscoveryCTA.jsx](../src/components/composed/DiscoveryCTA.jsx)<br>[DiscoverySteps.jsx](../src/components/composed/DiscoverySteps.jsx)<br>[ContactDetails.jsx](../src/components/composed/ContactDetails.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2` (plus remaining numbered entries). |

The paths above are relative to the section's content object. An omitted list/image/link field means that feature is not present in this renderer; adding arbitrary data alone will not create new markup. Numbered fields correspond to existing fixed elements, while *Items arrays are rendered by the named child components.

### Databricks Overview

- Routes: `/databricks` and `/databricks.html`; metadata in [src/content/pages.js](../src/content/pages.js) under key `databricks`.
- Content file: [src/data/pages/databricks.js](../src/data/pages/databricks.js). Section configuration: the same file's `sections` array.
- Hero content: [src/data/pages/databricks.js](../src/data/pages/databricks.js), entry `key: 'databricks-HeroSubHasSceneSectionVariant2-1'`, `content`. H1 fields: `label`, `label2`, `label3`, `label4`, `label5`. Intro: `description`. Hero buttons: `aProps.href`, `linkLabel`.
- Cards, images and CTA links: [src/data/pages/databricks.js](../src/data/pages/databricks.js), in the section fields listed below. Header/footer copy is inherited from [src/data/pages/navigation.js](../src/data/pages/navigation.js).
- Backgrounds/visual variants: [src/data/pages/databricks.js](../src/data/pages/databricks.js), each entry's `content.sectionProps` (or `navProps`), nested `*Props.className/style`, and its registered `type`. Actual colors/background layers are styled in [src/styles/site.css](../src/styles/site.css) and [src/styles/app.css](../src/styles/app.css).
- Styling: [src/styles/site.css](../src/styles/site.css) plus [src/styles/app.css](../src/styles/app.css); classes in the JSX/data select the rules.
- Animation configuration: the same [src/data/pages/databricks.js](../src/data/pages/databricks.js) entries' canvas/field/scene props and word `--i` style values; engines in [src/vendor/site.raw.js](../src/vendor/site.raw.js) and [src/vendor/scenes.raw.js](../src/vendor/scenes.raw.js), runtime wrappers in [src/vendor/site.js](../src/vendor/site.js) and [src/vendor/scenes.js](../src/vendor/scenes.js), CSS reveals in [src/styles/site.css](../src/styles/site.css).

| Section key / visible heading | Content location in the page module | Actual renderer(s) | Card/list, image and CTA fields |
| --- | --- | --- | --- |
| `databricks-HeroSubHasSceneSectionVariant2-1` -> Modernize | `sections -> key 'databricks-HeroSubHasSceneSectionVariant2-1' -> content` | [HeroSubHasSceneSectionVariant2.jsx](../src/components/composed/HeroSubHasSceneSectionVariant2.jsx)<br>[Breadcrumbs.jsx](../src/components/composed/Breadcrumbs.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`. |
| `databricks-SectionNavigation-3` -> Databricks | `sections -> key 'databricks-SectionNavigation-3' -> content` | [SectionNavigation.jsx](../src/components/composed/SectionNavigation.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2` (plus remaining numbered entries). |
| `practice` -> Databricks Expertise. Built Around Your Business. | `sections -> key 'practice' -> content` | [PracticeSection.jsx](../src/components/composed/PracticeSection.jsx)<br>[FeatureCardVariant4.jsx](../src/components/composed/FeatureCardVariant4.jsx) | Lists: `featureCardVariant4Items`.<br>Images: `featureCardVariant4Items[0].content.imgProps.src`, `featureCardVariant4Items[0].content.imgProps.alt`, `featureCardVariant4Items[1].content.imgProps.src` (plus remaining numbered entries).<br>Links: `featureCardVariant4Items[0].content.aProps.href`, `featureCardVariant4Items[1].content.aProps.href`, `featureCardVariant4Items[2].content.aProps.href`, `featureCardVariant4Items[3].content.aProps.href`. |
| `journey` -> One Databricks Partner. From Strategy to Production AI. | `sections -> key 'journey' -> content` | [JourneySection.jsx](../src/components/composed/JourneySection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `talk` -> TalkSection | `sections -> key 'talk' -> content` | [TalkSection.jsx](../src/components/composed/TalkSection.jsx)<br>[ContactBand.jsx](../src/components/composed/ContactBand.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `contactBand.aProps.href`, `contactBand.linkLabel`. |
| `intelligence` -> From Modern Data to Enterprise Intelligence | `sections -> key 'intelligence' -> content` | [IntelligenceSection.jsx](../src/components/composed/IntelligenceSection.jsx)<br>[ModernisationStage.jsx](../src/components/composed/ModernisationStage.jsx) | Lists: `modernisationStageItems`.<br>Images: `modernisationStageItems[0].content.imgProps.src`, `modernisationStageItems[0].content.imgProps.alt`, `modernisationStageItems[1].content.imgProps.src` (plus remaining numbered entries).<br>Links: None in this section. |
| `final` -> Put Our Databricks Expertise to Work | `sections -> key 'final' -> content` | [DiscoveryCTA.jsx](../src/components/composed/DiscoveryCTA.jsx)<br>[DiscoverySteps.jsx](../src/components/composed/DiscoverySteps.jsx)<br>[ContactDetails.jsx](../src/components/composed/ContactDetails.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2` (plus remaining numbered entries). |

The paths above are relative to the section's content object. An omitted list/image/link field means that feature is not present in this renderer; adding arbitrary data alone will not create new markup. Numbered fields correspond to existing fixed elements, while *Items arrays are rendered by the named child components.

### Databricks Capabilities

- Routes: `/databricks-capabilities` and `/databricks-capabilities.html`; metadata in [src/content/pages.js](../src/content/pages.js) under key `databricks-capabilities`.
- Content file: [src/data/pages/databricks-capabilities.js](../src/data/pages/databricks-capabilities.js). Section configuration: the same file's `sections` array.
- Hero content: [src/data/pages/databricks-capabilities.js](../src/data/pages/databricks-capabilities.js), entry `key: 'databricks-capabilities-HeroSubHasSceneSection-1'`, `content`. H1 fields: `label`, `label2`, `label3`, `label4`, `label5`, `label6`, `label7`. Intro: `description`. Hero buttons: `aProps.href`, `linkLabel`.
- Cards, images and CTA links: [src/data/pages/databricks-capabilities.js](../src/data/pages/databricks-capabilities.js), in the section fields listed below. Header/footer copy is inherited from [src/data/pages/navigation.js](../src/data/pages/navigation.js).
- Backgrounds/visual variants: [src/data/pages/databricks-capabilities.js](../src/data/pages/databricks-capabilities.js), each entry's `content.sectionProps` (or `navProps`), nested `*Props.className/style`, and its registered `type`. Actual colors/background layers are styled in [src/styles/site.css](../src/styles/site.css) and [src/styles/app.css](../src/styles/app.css).
- Styling: [src/styles/site.css](../src/styles/site.css) plus [src/styles/app.css](../src/styles/app.css); classes in the JSX/data select the rules.
- Animation configuration: the same [src/data/pages/databricks-capabilities.js](../src/data/pages/databricks-capabilities.js) entries' canvas/field/scene props and word `--i` style values; engines in [src/vendor/site.raw.js](../src/vendor/site.raw.js) and [src/vendor/scenes.raw.js](../src/vendor/scenes.raw.js), runtime wrappers in [src/vendor/site.js](../src/vendor/site.js) and [src/vendor/scenes.js](../src/vendor/scenes.js), CSS reveals in [src/styles/site.css](../src/styles/site.css).

| Section key / visible heading | Content location in the page module | Actual renderer(s) | Card/list, image and CTA fields |
| --- | --- | --- | --- |
| `databricks-capabilities-HeroSubHasSceneSection-1` -> Engineering | `sections -> key 'databricks-capabilities-HeroSubHasSceneSection-1' -> content` | [HeroSubHasSceneSection.jsx](../src/components/composed/HeroSubHasSceneSection.jsx)<br>[BreadcrumbsVariant3.jsx](../src/components/composed/BreadcrumbsVariant3.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`. |
| `databricks-capabilities-SectionNavigation-3` -> Databricks | `sections -> key 'databricks-capabilities-SectionNavigation-3' -> content` | [SectionNavigation.jsx](../src/components/composed/SectionNavigation.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2` (plus remaining numbered entries). |
| `value` -> What Databricks Can Unlock for Your Enterprise | `sections -> key 'value' -> content` | [ValueSection.jsx](../src/components/composed/ValueSection.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Lists: `featureCardItems`.<br>Images: None in this section.<br>Links: None in this section. |
| `databricks-capabilities-SecSection-7` -> SecSection | `sections -> key 'databricks-capabilities-SecSection-7' -> content` | [SecSection.jsx](../src/components/composed/SecSection.jsx)<br>[CapabilityCard.jsx](../src/components/composed/CapabilityCard.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Lists: `capabilityCardItems`, `capabilityCardItems[0].content.featureCardItems`, `capabilityCardItems[1].content.featureCardItems` (plus remaining numbered entries).<br>Images: None in this section.<br>Links: None in this section. |
| `final` -> Put Our Databricks Expertise to Work | `sections -> key 'final' -> content` | [DiscoveryCTA.jsx](../src/components/composed/DiscoveryCTA.jsx)<br>[DiscoverySteps.jsx](../src/components/composed/DiscoverySteps.jsx)<br>[ContactDetails.jsx](../src/components/composed/ContactDetails.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2` (plus remaining numbered entries). |

The paths above are relative to the section's content object. An omitted list/image/link field means that feature is not present in this renderer; adding arbitrary data alone will not create new markup. Numbered fields correspond to existing fixed elements, while *Items arrays are rendered by the named child components.

### Databricks Industry Solutions

- Routes: `/databricks-industries` and `/databricks-industries.html`; metadata in [src/content/pages.js](../src/content/pages.js) under key `databricks-industries`.
- Content file: [src/data/pages/databricks-industries.js](../src/data/pages/databricks-industries.js). Section configuration: the same file's `sections` array.
- Hero content: [src/data/pages/databricks-industries.js](../src/data/pages/databricks-industries.js), entry `key: 'databricks-industries-HeroSubHasSceneSection-1'`, `content`. H1 fields: `label`, `label2`, `label3`, `label4`, `label5`, `label6`, `label7`. Intro: `description`. Hero buttons: `aProps.href`, `linkLabel`.
- Cards, images and CTA links: [src/data/pages/databricks-industries.js](../src/data/pages/databricks-industries.js), in the section fields listed below. Header/footer copy is inherited from [src/data/pages/navigation.js](../src/data/pages/navigation.js).
- Backgrounds/visual variants: [src/data/pages/databricks-industries.js](../src/data/pages/databricks-industries.js), each entry's `content.sectionProps` (or `navProps`), nested `*Props.className/style`, and its registered `type`. Actual colors/background layers are styled in [src/styles/site.css](../src/styles/site.css) and [src/styles/app.css](../src/styles/app.css).
- Styling: [src/styles/site.css](../src/styles/site.css) plus [src/styles/app.css](../src/styles/app.css); classes in the JSX/data select the rules.
- Animation configuration: the same [src/data/pages/databricks-industries.js](../src/data/pages/databricks-industries.js) entries' canvas/field/scene props and word `--i` style values; engines in [src/vendor/site.raw.js](../src/vendor/site.raw.js) and [src/vendor/scenes.raw.js](../src/vendor/scenes.raw.js), runtime wrappers in [src/vendor/site.js](../src/vendor/site.js) and [src/vendor/scenes.js](../src/vendor/scenes.js), CSS reveals in [src/styles/site.css](../src/styles/site.css).

| Section key / visible heading | Content location in the page module | Actual renderer(s) | Card/list, image and CTA fields |
| --- | --- | --- | --- |
| `databricks-industries-HeroSubHasSceneSection-1` -> Data | `sections -> key 'databricks-industries-HeroSubHasSceneSection-1' -> content` | [HeroSubHasSceneSection.jsx](../src/components/composed/HeroSubHasSceneSection.jsx)<br>[BreadcrumbsVariant3.jsx](../src/components/composed/BreadcrumbsVariant3.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`. |
| `databricks-industries-SectionNavigation-3` -> Databricks | `sections -> key 'databricks-industries-SectionNavigation-3' -> content` | [SectionNavigation.jsx](../src/components/composed/SectionNavigation.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2` (plus remaining numbered entries). |
| `industries` -> Built Around Your Industry | `sections -> key 'industries' -> content` | [IndustriesSection.jsx](../src/components/composed/IndustriesSection.jsx)<br>[IndustryCard.jsx](../src/components/composed/IndustryCard.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `outcomes` -> Turn Data and AI Into Business Outcomes | `sections -> key 'outcomes' -> content` | [PeopleSection.jsx](../src/components/composed/PeopleSection.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Lists: `featureCardItems`.<br>Images: None in this section.<br>Links: None in this section. |
| `solutions` -> Industry Solutions | `sections -> key 'solutions' -> content` | [SolutionsSection.jsx](../src/components/composed/SolutionsSection.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Lists: `featureCardItems`, `featureCardItems2`, `featureCardItems3`.<br>Images: None in this section.<br>Links: `buttonLabel`, `buttonLabel2`, `buttonLabel3`. |
| `scale` -> Experience That Delivers at Enterprise Scale | `sections -> key 'scale' -> content` | [ScaleSection.jsx](../src/components/composed/ScaleSection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `final` -> Put Our Databricks Expertise to Work | `sections -> key 'final' -> content` | [DiscoveryCTA.jsx](../src/components/composed/DiscoveryCTA.jsx)<br>[DiscoverySteps.jsx](../src/components/composed/DiscoverySteps.jsx)<br>[ContactDetails.jsx](../src/components/composed/ContactDetails.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2` (plus remaining numbered entries). |

The paths above are relative to the section's content object. An omitted list/image/link field means that feature is not present in this renderer; adding arbitrary data alone will not create new markup. Numbered fields correspond to existing fixed elements, while *Items arrays are rendered by the named child components.

### Databricks Expertise and Accelerators

- Routes: `/databricks-expertise` and `/databricks-expertise.html`; metadata in [src/content/pages.js](../src/content/pages.js) under key `databricks-expertise`.
- Content file: [src/data/pages/databricks-expertise.js](../src/data/pages/databricks-expertise.js). Section configuration: the same file's `sections` array.
- Hero content: [src/data/pages/databricks-expertise.js](../src/data/pages/databricks-expertise.js), entry `key: 'databricks-expertise-HeroSubHasSceneSection-1'`, `content`. H1 fields: `label`, `label2`, `label3`, `label4`, `label5`, `label6`, `label7`. Intro: `description`. Hero buttons: `aProps.href`, `linkLabel`.
- Cards, images and CTA links: [src/data/pages/databricks-expertise.js](../src/data/pages/databricks-expertise.js), in the section fields listed below. Header/footer copy is inherited from [src/data/pages/navigation.js](../src/data/pages/navigation.js).
- Backgrounds/visual variants: [src/data/pages/databricks-expertise.js](../src/data/pages/databricks-expertise.js), each entry's `content.sectionProps` (or `navProps`), nested `*Props.className/style`, and its registered `type`. Actual colors/background layers are styled in [src/styles/site.css](../src/styles/site.css) and [src/styles/app.css](../src/styles/app.css).
- Styling: [src/styles/site.css](../src/styles/site.css) plus [src/styles/app.css](../src/styles/app.css); classes in the JSX/data select the rules.
- Animation configuration: the same [src/data/pages/databricks-expertise.js](../src/data/pages/databricks-expertise.js) entries' canvas/field/scene props and word `--i` style values; engines in [src/vendor/site.raw.js](../src/vendor/site.raw.js) and [src/vendor/scenes.raw.js](../src/vendor/scenes.raw.js), runtime wrappers in [src/vendor/site.js](../src/vendor/site.js) and [src/vendor/scenes.js](../src/vendor/scenes.js), CSS reveals in [src/styles/site.css](../src/styles/site.css).

| Section key / visible heading | Content location in the page module | Actual renderer(s) | Card/list, image and CTA fields |
| --- | --- | --- | --- |
| `databricks-expertise-HeroSubHasSceneSection-1` -> Deep | `sections -> key 'databricks-expertise-HeroSubHasSceneSection-1' -> content` | [HeroSubHasSceneSection.jsx](../src/components/composed/HeroSubHasSceneSection.jsx)<br>[BreadcrumbsVariant3.jsx](../src/components/composed/BreadcrumbsVariant3.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`. |
| `databricks-expertise-SectionNavigation-3` -> Databricks | `sections -> key 'databricks-expertise-SectionNavigation-3' -> content` | [SectionNavigation.jsx](../src/components/composed/SectionNavigation.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2` (plus remaining numbered entries). |
| `certified` -> Certified Across the Databricks Platform | `sections -> key 'certified' -> content` | [CertifiedSection.jsx](../src/components/composed/CertifiedSection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `accelerators` -> Six Accelerators. One Faster Path to Databricks Value. | `sections -> key 'accelerators' -> content` | [PrinciplesSection.jsx](../src/components/composed/PrinciplesSection.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Lists: `featureCardItems`.<br>Images: None in this section.<br>Links: None in this section. |
| `final` -> Put Our Databricks Expertise to Work | `sections -> key 'final' -> content` | [DiscoveryCTA.jsx](../src/components/composed/DiscoveryCTA.jsx)<br>[DiscoverySteps.jsx](../src/components/composed/DiscoverySteps.jsx)<br>[ContactDetails.jsx](../src/components/composed/ContactDetails.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2` (plus remaining numbered entries). |

The paths above are relative to the section's content object. An omitted list/image/link field means that feature is not present in this renderer; adding arbitrary data alone will not create new markup. Numbered fields correspond to existing fixed elements, while *Items arrays are rendered by the named child components.

### ServiceNow

- Routes: `/servicenow` and `/servicenow.html`; metadata in [src/content/pages.js](../src/content/pages.js) under key `servicenow`.
- Content file: [src/data/pages/servicenow.js](../src/data/pages/servicenow.js). Section configuration: the same file's `sections` array.
- Hero content: [src/data/pages/servicenow.js](../src/data/pages/servicenow.js), entry `key: 'servicenow-HeroSubHasSceneSectionVariant3-1'`, `content`. H1 fields: `label`, `label2`, `label3`, `label4`, `label5`. Intro: `description`. Hero buttons: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2`.
- Cards, images and CTA links: [src/data/pages/servicenow.js](../src/data/pages/servicenow.js), in the section fields listed below. Header/footer copy is inherited from [src/data/pages/navigation.js](../src/data/pages/navigation.js).
- Backgrounds/visual variants: [src/data/pages/servicenow.js](../src/data/pages/servicenow.js), each entry's `content.sectionProps` (or `navProps`), nested `*Props.className/style`, and its registered `type`. Actual colors/background layers are styled in [src/styles/site.css](../src/styles/site.css) and [src/styles/app.css](../src/styles/app.css).
- Styling: [src/styles/site.css](../src/styles/site.css) plus [src/styles/app.css](../src/styles/app.css); classes in the JSX/data select the rules.
- Animation configuration: the same [src/data/pages/servicenow.js](../src/data/pages/servicenow.js) entries' canvas/field/scene props and word `--i` style values; engines in [src/vendor/site.raw.js](../src/vendor/site.raw.js) and [src/vendor/scenes.raw.js](../src/vendor/scenes.raw.js), runtime wrappers in [src/vendor/site.js](../src/vendor/site.js) and [src/vendor/scenes.js](../src/vendor/scenes.js), CSS reveals in [src/styles/site.css](../src/styles/site.css).

| Section key / visible heading | Content location in the page module | Actual renderer(s) | Card/list, image and CTA fields |
| --- | --- | --- | --- |
| `servicenow-HeroSubHasSceneSectionVariant3-1` -> ServiceNow | `sections -> key 'servicenow-HeroSubHasSceneSectionVariant3-1' -> content` | [HeroSubHasSceneSectionVariant3.jsx](../src/components/composed/HeroSubHasSceneSectionVariant3.jsx)<br>[Breadcrumbs.jsx](../src/components/composed/Breadcrumbs.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2`. |
| `partner` ->  Official ServiceNow Partner | `sections -> key 'partner' -> content` | [PartnerSection.jsx](../src/components/composed/PartnerSection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `focus` -> Where ServiceNow Can Make a Difference | `sections -> key 'focus' -> content` | [RoutesSection.jsx](../src/components/composed/RoutesSection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `outcomes` -> Outcomes That Make ServiceNow More Effective Across the Business | `sections -> key 'outcomes' -> content` | [WhySection.jsx](../src/components/composed/WhySection.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Lists: `featureCardItems`.<br>Images: None in this section.<br>Links: None in this section. |
| `solutions` -> Capabilities Across Service Management and Enterprise Workflows | `sections -> key 'solutions' -> content` | [SolutionsSectionVariant2.jsx](../src/components/composed/SolutionsSectionVariant2.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `talk` -> TalkSection | `sections -> key 'talk' -> content` | [TalkSection.jsx](../src/components/composed/TalkSection.jsx)<br>[ContactBand.jsx](../src/components/composed/ContactBand.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `contactBand.aProps.href`, `contactBand.linkLabel`. |
| `supporting` -> Supporting Capabilities for Wider Enterprise Needs | `sections -> key 'supporting' -> content` | [PeopleSection.jsx](../src/components/composed/PeopleSection.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Lists: `featureCardItems`.<br>Images: None in this section.<br>Links: None in this section. |
| `voicecue` -> VoiceCueAI: Make Service Requests Easier to Raise | `sections -> key 'voicecue' -> content` | [VoicecueSection.jsx](../src/components/composed/VoicecueSection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`. |
| `usecases` -> ServiceNow in Practice | `sections -> key 'usecases' -> content` | [UsecasesSectionVariant2.jsx](../src/components/composed/UsecasesSectionVariant2.jsx)<br>[OutcomeSlide.jsx](../src/components/composed/OutcomeSlide.jsx)<br>[OutcomeSlideVariant2.jsx](../src/components/composed/OutcomeSlideVariant2.jsx) | Lists: `outcomeSlideItems`.<br>Images: `outcomeSlideItems[0].content.imgProps.src`, `outcomeSlideItems[0].content.imgProps.alt`, `outcomeSlideItems[1].content.imgProps.src` (plus remaining numbered entries).<br>Links: `outcomeSlideItems[0].content.aProps.href`, `outcomeSlideItems[0].content.linkLabel`, `outcomeSlideItems[1].content.aProps.href`, `outcomeSlideItems[1].content.linkLabel` (plus remaining numbered entries). |
| `accelerators` -> Selected ServiceNow Accelerators | `sections -> key 'accelerators' -> content` | [AcceleratorsSection.jsx](../src/components/composed/AcceleratorsSection.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `final` -> Let's Talk About Your ServiceNow Priorities | `sections -> key 'final' -> content` | [DiscoveryCTA.jsx](../src/components/composed/DiscoveryCTA.jsx)<br>[DiscoverySteps.jsx](../src/components/composed/DiscoverySteps.jsx)<br>[ContactDetails.jsx](../src/components/composed/ContactDetails.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2` (plus remaining numbered entries). |

The paths above are relative to the section's content object. An omitted list/image/link field means that feature is not present in this renderer; adding arbitrary data alone will not create new markup. Numbered fields correspond to existing fixed elements, while *Items arrays are rendered by the named child components.

### Salesforce

- Routes: `/salesforce` and `/salesforce.html`; metadata in [src/content/pages.js](../src/content/pages.js) under key `salesforce`.
- Content file: [src/data/pages/salesforce.js](../src/data/pages/salesforce.js). Section configuration: the same file's `sections` array.
- Hero content: [src/data/pages/salesforce.js](../src/data/pages/salesforce.js), entry `key: 'salesforce-overview'`, `content`. H1 fields: `label`, `label2`, `label3`, `label4`, `label5`, `label6`. Intro: `description`. Hero buttons: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2`.
- Cards, images and CTA links: [src/data/pages/salesforce.js](../src/data/pages/salesforce.js), in the section fields listed below. Header/footer copy is inherited from [src/data/pages/navigation.js](../src/data/pages/navigation.js).
- Backgrounds/visual variants: [src/data/pages/salesforce.js](../src/data/pages/salesforce.js), each entry's `content.sectionProps` (or `navProps`), nested `*Props.className/style`, and its registered `type`. Actual colors/background layers are styled in [src/styles/site.css](../src/styles/site.css) and [src/styles/app.css](../src/styles/app.css).
- Styling: [src/styles/site.css](../src/styles/site.css) plus [src/styles/app.css](../src/styles/app.css); classes in the JSX/data select the rules.
- Animation configuration: the same [src/data/pages/salesforce.js](../src/data/pages/salesforce.js) entries' canvas/field/scene props and word `--i` style values; engines in [src/vendor/site.raw.js](../src/vendor/site.raw.js) and [src/vendor/scenes.raw.js](../src/vendor/scenes.raw.js), runtime wrappers in [src/vendor/site.js](../src/vendor/site.js) and [src/vendor/scenes.js](../src/vendor/scenes.js), CSS reveals in [src/styles/site.css](../src/styles/site.css).

| Section key / visible heading | Content location in the page module | Actual renderer(s) | Card/list, image and CTA fields |
| --- | --- | --- | --- |
| `salesforce-overview` -> Salesforce | `sections -> key 'salesforce-overview' -> content` | [SalesforceOverviewSection.jsx](../src/components/composed/SalesforceOverviewSection.jsx)<br>[Breadcrumbs.jsx](../src/components/composed/Breadcrumbs.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2`. |
| `focus` -> Where Salesforce Can Make a Difference | `sections -> key 'focus' -> content` | [RoutesSection.jsx](../src/components/composed/RoutesSection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `outcomes` -> Outcomes That Make Salesforce More Useful to the Business | `sections -> key 'outcomes' -> content` | [WhySection.jsx](../src/components/composed/WhySection.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Lists: `featureCardItems`.<br>Images: None in this section.<br>Links: None in this section. |
| `clouds` -> Capabilities Across Sales, Service, Revenue and Industry Needs | `sections -> key 'clouds' -> content` | [PrinciplesSection.jsx](../src/components/composed/PrinciplesSection.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Lists: `featureCardItems`.<br>Images: None in this section.<br>Links: None in this section. |
| `talk` -> TalkSection | `sections -> key 'talk' -> content` | [TalkSection.jsx](../src/components/composed/TalkSection.jsx)<br>[ContactBand.jsx](../src/components/composed/ContactBand.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `contactBand.aProps.href`, `contactBand.linkLabel`. |
| `supporting` -> Supporting Capabilities Around the Salesforce Platform | `sections -> key 'supporting' -> content` | [PeopleSection.jsx](../src/components/composed/PeopleSection.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Lists: `featureCardItems`.<br>Images: None in this section.<br>Links: None in this section. |
| `usecases` -> Salesforce in Practice | `sections -> key 'usecases' -> content` | [UsecasesSection.jsx](../src/components/composed/UsecasesSection.jsx)<br>[OutcomeSlideVariant2.jsx](../src/components/composed/OutcomeSlideVariant2.jsx) | Lists: `outcomeSlideVariant2Items`.<br>Images: `outcomeSlideVariant2Items[0].content.imgProps.src`, `outcomeSlideVariant2Items[0].content.imgProps.alt`, `outcomeSlideVariant2Items[1].content.imgProps.src` (plus remaining numbered entries).<br>Links: `outcomeSlideVariant2Items[0].content.aProps.href`, `outcomeSlideVariant2Items[0].content.linkLabel`, `outcomeSlideVariant2Items[1].content.aProps.href`, `outcomeSlideVariant2Items[1].content.linkLabel` (plus remaining numbered entries). |
| `final` -> Let's Talk About Your Salesforce Priorities | `sections -> key 'final' -> content` | [DiscoveryCTA.jsx](../src/components/composed/DiscoveryCTA.jsx)<br>[DiscoverySteps.jsx](../src/components/composed/DiscoverySteps.jsx)<br>[ContactDetails.jsx](../src/components/composed/ContactDetails.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2` (plus remaining numbered entries). |

The paths above are relative to the section's content object. An omitted list/image/link field means that feature is not present in this renderer; adding arbitrary data alone will not create new markup. Numbered fields correspond to existing fixed elements, while *Items arrays are rendered by the named child components.

### Use Cases

- Routes: `/use-cases` and `/use-cases.html`; metadata in [src/content/pages.js](../src/content/pages.js) under key `use-cases`.
- Content file: [src/data/pages/use-cases.js](../src/data/pages/use-cases.js). Section configuration: the same file's `sections` array.
- Hero content: [src/data/pages/use-cases.js](../src/data/pages/use-cases.js), entry `key: 'use-cases-HeroSubSectionVariant6-1'`, `content`. H1 fields: `label`, `label2`, `label3`, `label4`. Intro: `description`. Hero buttons: `aProps.href`, `linkLabel`.
- Cards, images and CTA links: [src/data/pages/use-cases.js](../src/data/pages/use-cases.js), in the section fields listed below. Header/footer copy is inherited from [src/data/pages/navigation.js](../src/data/pages/navigation.js).
- Backgrounds/visual variants: [src/data/pages/use-cases.js](../src/data/pages/use-cases.js), each entry's `content.sectionProps` (or `navProps`), nested `*Props.className/style`, and its registered `type`. Actual colors/background layers are styled in [src/styles/site.css](../src/styles/site.css) and [src/styles/app.css](../src/styles/app.css).
- Styling: [src/styles/site.css](../src/styles/site.css) plus [src/styles/app.css](../src/styles/app.css); classes in the JSX/data select the rules.
- Animation configuration: the same [src/data/pages/use-cases.js](../src/data/pages/use-cases.js) entries' canvas/field/scene props and word `--i` style values; engines in [src/vendor/site.raw.js](../src/vendor/site.raw.js) and [src/vendor/scenes.raw.js](../src/vendor/scenes.raw.js), runtime wrappers in [src/vendor/site.js](../src/vendor/site.js) and [src/vendor/scenes.js](../src/vendor/scenes.js), CSS reveals in [src/styles/site.css](../src/styles/site.css).

| Section key / visible heading | Content location in the page module | Actual renderer(s) | Card/list, image and CTA fields |
| --- | --- | --- | --- |
| `use-cases-HeroSubSectionVariant6-1` -> Real | `sections -> key 'use-cases-HeroSubSectionVariant6-1' -> content` | [HeroSubSectionVariant6.jsx](../src/components/composed/HeroSubSectionVariant6.jsx)<br>[Breadcrumbs.jsx](../src/components/composed/Breadcrumbs.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`. |
| `library` -> Find Use Cases by Service | `sections -> key 'library' -> content` | [LibrarySection.jsx](../src/components/composed/LibrarySection.jsx)<br>[UseCaseCard.jsx](../src/components/composed/UseCaseCard.jsx)<br>[UseCaseCardVariant2.jsx](../src/components/composed/UseCaseCardVariant2.jsx) | Lists: `useCaseCardItems`, `useCaseCardVariant2Items`, `useCaseCardVariant2Items2` (plus remaining numbered entries).<br>Images: None in this section.<br>Links: `buttonLabel`, `buttonLabel2`, `buttonLabel3`, `buttonLabel4` (plus remaining numbered entries). |

The paths above are relative to the section's content object. An omitted list/image/link field means that feature is not present in this renderer; adding arbitrary data alone will not create new markup. Numbered fields correspond to existing fixed elements, while *Items arrays are rendered by the named child components.

### About Palni

- Routes: `/about` and `/about.html`; metadata in [src/content/pages.js](../src/content/pages.js) under key `about`.
- Content file: [src/data/pages/about.js](../src/data/pages/about.js). Section configuration: the same file's `sections` array.
- Hero content: [src/data/pages/about.js](../src/data/pages/about.js), entry `key: 'about-HeroSubSection-1'`, `content`. H1 fields: `label`, `label2`, `label3`, `label4`, `label5`, `label6`. Intro: `description`. Hero buttons: `aProps.href`, `linkLabel`.
- Cards, images and CTA links: [src/data/pages/about.js](../src/data/pages/about.js), in the section fields listed below. Header/footer copy is inherited from [src/data/pages/navigation.js](../src/data/pages/navigation.js).
- Backgrounds/visual variants: [src/data/pages/about.js](../src/data/pages/about.js), each entry's `content.sectionProps` (or `navProps`), nested `*Props.className/style`, and its registered `type`. Actual colors/background layers are styled in [src/styles/site.css](../src/styles/site.css) and [src/styles/app.css](../src/styles/app.css).
- Styling: [src/styles/site.css](../src/styles/site.css) plus [src/styles/app.css](../src/styles/app.css); classes in the JSX/data select the rules.
- Animation configuration: the same [src/data/pages/about.js](../src/data/pages/about.js) entries' canvas/field/scene props and word `--i` style values; engines in [src/vendor/site.raw.js](../src/vendor/site.raw.js) and [src/vendor/scenes.raw.js](../src/vendor/scenes.raw.js), runtime wrappers in [src/vendor/site.js](../src/vendor/site.js) and [src/vendor/scenes.js](../src/vendor/scenes.js), CSS reveals in [src/styles/site.css](../src/styles/site.css).

| Section key / visible heading | Content location in the page module | Actual renderer(s) | Card/list, image and CTA fields |
| --- | --- | --- | --- |
| `about-HeroSubSection-1` -> People | `sections -> key 'about-HeroSubSection-1' -> content` | [HeroSubSection.jsx](../src/components/composed/HeroSubSection.jsx)<br>[Breadcrumbs.jsx](../src/components/composed/Breadcrumbs.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`. |
| `story` -> Trusted Expertise, Committed to Your Success | `sections -> key 'story' -> content` | [StorySection.jsx](../src/components/composed/StorySection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `philosophy` -> Think Big. Win Together. | `sections -> key 'philosophy' -> content` | [PhilosophySection.jsx](../src/components/composed/PhilosophySection.jsx) | Lists: None in this section.<br>Images: `imgProps.src`, `imgProps.alt`.<br>Links: None in this section. |
| `principles` -> The Principles That Guide Our Work | `sections -> key 'principles' -> content` | [PrinciplesSection.jsx](../src/components/composed/PrinciplesSection.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Lists: `featureCardItems`.<br>Images: None in this section.<br>Links: None in this section. |
| `how` -> How We Work | `sections -> key 'how' -> content` | [HowSection.jsx](../src/components/composed/HowSection.jsx)<br>[ProcessSteps.jsx](../src/components/composed/ProcessSteps.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `routes` -> Practical Ways to Move from Idea to Delivery | `sections -> key 'routes' -> content` | [RoutesSection.jsx](../src/components/composed/RoutesSection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `leadership` -> The People Leading Palni | `sections -> key 'leadership' -> content` | [LeadershipSection.jsx](../src/components/composed/LeadershipSection.jsx)<br>[PersonCard.jsx](../src/components/composed/PersonCard.jsx) | Lists: `personCardItems`.<br>Images: None in this section.<br>Links: None in this section. |
| `footprint` -> Eight Offices Across the USA and India | `sections -> key 'footprint' -> content` | [FootprintSection.jsx](../src/components/composed/FootprintSection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`. |
| `partners` -> Built on the Platforms Enterprises Trust | `sections -> key 'partners' -> content` | [PartnersSection.jsx](../src/components/composed/PartnersSection.jsx)<br>[FeatureCardVariant2.jsx](../src/components/composed/FeatureCardVariant2.jsx) | Lists: `featureCardVariant2Items`.<br>Images: None in this section.<br>Links: None in this section. |
| `people` -> People Make the Difference | `sections -> key 'people' -> content` | [PeopleSection.jsx](../src/components/composed/PeopleSection.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Lists: `featureCardItems`.<br>Images: None in this section.<br>Links: None in this section. |
| `final` -> Work with Palni | `sections -> key 'final' -> content` | [DiscoveryCTA.jsx](../src/components/composed/DiscoveryCTA.jsx)<br>[DiscoverySteps.jsx](../src/components/composed/DiscoverySteps.jsx)<br>[ContactDetails.jsx](../src/components/composed/ContactDetails.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2` (plus remaining numbered entries). |

The paths above are relative to the section's content object. An omitted list/image/link field means that feature is not present in this renderer; adding arbitrary data alone will not create new markup. Numbered fields correspond to existing fixed elements, while *Items arrays are rendered by the named child components.

### Careers

- Routes: `/careers` and `/careers.html`; metadata in [src/content/pages.js](../src/content/pages.js) under key `careers`.
- Content file: [src/data/pages/careers.js](../src/data/pages/careers.js). Section configuration: the same file's `sections` array.
- Hero content: [src/data/pages/careers.js](../src/data/pages/careers.js), entry `key: 'careers-HeroSubSectionVariant3-1'`, `content`. H1 fields: `label`, `label2`, `label3`, `label4`, `label5`. Intro: `description`. Hero buttons: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2`, `aProps3.href`, `linkLabel3`.
- Cards, images and CTA links: [src/data/pages/careers.js](../src/data/pages/careers.js), in the section fields listed below. Header/footer copy is inherited from [src/data/pages/navigation.js](../src/data/pages/navigation.js).
- Backgrounds/visual variants: [src/data/pages/careers.js](../src/data/pages/careers.js), each entry's `content.sectionProps` (or `navProps`), nested `*Props.className/style`, and its registered `type`. Actual colors/background layers are styled in [src/styles/site.css](../src/styles/site.css) and [src/styles/app.css](../src/styles/app.css).
- Styling: [src/styles/site.css](../src/styles/site.css) plus [src/styles/app.css](../src/styles/app.css); classes in the JSX/data select the rules.
- Animation configuration: the same [src/data/pages/careers.js](../src/data/pages/careers.js) entries' canvas/field/scene props and word `--i` style values; engines in [src/vendor/site.raw.js](../src/vendor/site.raw.js) and [src/vendor/scenes.raw.js](../src/vendor/scenes.raw.js), runtime wrappers in [src/vendor/site.js](../src/vendor/site.js) and [src/vendor/scenes.js](../src/vendor/scenes.js), CSS reveals in [src/styles/site.css](../src/styles/site.css).

| Section key / visible heading | Content location in the page module | Actual renderer(s) | Card/list, image and CTA fields |
| --- | --- | --- | --- |
| `careers-HeroSubSectionVariant3-1` -> 7 | `sections -> key 'careers-HeroSubSectionVariant3-1' -> content` | [HeroSubSectionVariant3.jsx](../src/components/composed/HeroSubSectionVariant3.jsx)<br>[BreadcrumbsVariant2.jsx](../src/components/composed/BreadcrumbsVariant2.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2` (plus remaining numbered entries). |
| `values` -> Aim high | `sections -> key 'values' -> content` | [ValuesSection.jsx](../src/components/composed/ValuesSection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `how` -> How We Work | `sections -> key 'how' -> content` | [WhySection.jsx](../src/components/composed/WhySection.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Lists: `featureCardItems`.<br>Images: None in this section.<br>Links: None in this section. |
| `numbers` -> Palni in Numbers | `sections -> key 'numbers' -> content` | [NumbersSection.jsx](../src/components/composed/NumbersSection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `team` -> Aim High. Together. | `sections -> key 'team' -> content` | [TeamSection.jsx](../src/components/composed/TeamSection.jsx) | Lists: None in this section.<br>Images: `imgProps.src`, `imgProps.alt`.<br>Links: `aProps.href`, `linkLabel`. |
| `tracks` -> Create Your Career | `sections -> key 'tracks' -> content` | [TracksSection.jsx](../src/components/composed/TracksSection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `aProps2.href`, `aProps3.href`, `aProps4.href` (plus remaining numbered entries). |
| `openroles` -> Find Your Seat | `sections -> key 'openroles' -> content` | [OpenrolesSection.jsx](../src/components/composed/OpenrolesSection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `buttonLabel`, `buttonLabel2`, `buttonLabel3`, `buttonLabel4` (plus remaining numbered entries). |
| `life` -> Room to Grow, Support to Get There | `sections -> key 'life' -> content` | [LifeSection.jsx](../src/components/composed/LifeSection.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Lists: `featureCardItems`.<br>Images: None in this section.<br>Links: None in this section. |
| `hire` -> Five Steps. No Surprises. | `sections -> key 'hire' -> content` | [HireSection.jsx](../src/components/composed/HireSection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `final` -> Don't See Your Role? Aim High. | `sections -> key 'final' -> content` | [DiscoveryCTAVariant2.jsx](../src/components/composed/DiscoveryCTAVariant2.jsx)<br>[ContactDetails.jsx](../src/components/composed/ContactDetails.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `buttonLabel`, `contactDetails.aProps.href`, `contactDetails.linkLabel`, `contactDetails.aProps2.href` (plus remaining numbered entries). |

The paths above are relative to the section's content object. An omitted list/image/link field means that feature is not present in this renderer; adding arbitrary data alone will not create new markup. Numbered fields correspond to existing fixed elements, while *Items arrays are rendered by the named child components.

### Contact

- Routes: `/contact` and `/contact.html`; metadata in [src/content/pages.js](../src/content/pages.js) under key `contact`.
- Content file: [src/data/pages/contact.js](../src/data/pages/contact.js). Section configuration: the same file's `sections` array.
- Hero content: [src/data/pages/contact.js](../src/data/pages/contact.js), entry `key: 'contact-HeroSubSectionVariant4-1'`, `content`. H1 fields: `label`, `label2`, `label3`, `label4`, `label5`. Intro: `description`. Hero buttons: None in this section.
- Cards, images and CTA links: [src/data/pages/contact.js](../src/data/pages/contact.js), in the section fields listed below. Header/footer copy is inherited from [src/data/pages/navigation.js](../src/data/pages/navigation.js).
- Backgrounds/visual variants: [src/data/pages/contact.js](../src/data/pages/contact.js), each entry's `content.sectionProps` (or `navProps`), nested `*Props.className/style`, and its registered `type`. Actual colors/background layers are styled in [src/styles/site.css](../src/styles/site.css) and [src/styles/app.css](../src/styles/app.css).
- Styling: [src/styles/site.css](../src/styles/site.css) plus [src/styles/app.css](../src/styles/app.css); classes in the JSX/data select the rules.
- Animation configuration: the same [src/data/pages/contact.js](../src/data/pages/contact.js) entries' canvas/field/scene props and word `--i` style values; engines in [src/vendor/site.raw.js](../src/vendor/site.raw.js) and [src/vendor/scenes.raw.js](../src/vendor/scenes.raw.js), runtime wrappers in [src/vendor/site.js](../src/vendor/site.js) and [src/vendor/scenes.js](../src/vendor/scenes.js), CSS reveals in [src/styles/site.css](../src/styles/site.css).

| Section key / visible heading | Content location in the page module | Actual renderer(s) | Card/list, image and CTA fields |
| --- | --- | --- | --- |
| `contact-HeroSubSectionVariant4-1` -> Start | `sections -> key 'contact-HeroSubSectionVariant4-1' -> content` | [HeroSubSectionVariant4.jsx](../src/components/composed/HeroSubSectionVariant4.jsx)<br>[BreadcrumbsVariant2.jsx](../src/components/composed/BreadcrumbsVariant2.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `form` -> Tell Us What You Are Working On | `sections -> key 'form' -> content` | [FormSection.jsx](../src/components/composed/FormSection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2` (plus remaining numbered entries). |
| `locations` -> Our Offices | `sections -> key 'locations' -> content` | [LocationsSection.jsx](../src/components/composed/LocationsSection.jsx)<br>[OfficeCard.jsx](../src/components/composed/OfficeCard.jsx) | Lists: `officeCardItems`, `officeCardItems2`.<br>Images: None in this section.<br>Links: `officeCardItems[0].content.aProps.href`, `officeCardItems[0].content.linkLabel`, `officeCardItems[1].content.aProps.href`, `officeCardItems[1].content.linkLabel` (plus remaining numbered entries). |

The paths above are relative to the section's content object. An omitted list/image/link field means that feature is not present in this renderer; adding arbitrary data alone will not create new markup. Numbered fields correspond to existing fixed elements, while *Items arrays are rendered by the named child components.

### Data Engineering

- Routes: `/data-engineering` and `/data-engineering.html`; metadata in [src/content/pages.js](../src/content/pages.js) under key `data-engineering`.
- Content file: [src/data/pages/data-engineering.js](../src/data/pages/data-engineering.js). Section configuration: the same file's `sections` array.
- Hero content: [src/data/pages/data-engineering.js](../src/data/pages/data-engineering.js), entry `key: 'data-engineering-HeroSubSectionVariant5-1'`, `content`. H1 fields: `label`, `label2`, `label3`, `label4`, `label5`, `label6`, `label7`, `label8`. Intro: `description`. Hero buttons: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2`.
- Cards, images and CTA links: [src/data/pages/data-engineering.js](../src/data/pages/data-engineering.js), in the section fields listed below. Header/footer copy is inherited from [src/data/pages/navigation.js](../src/data/pages/navigation.js).
- Backgrounds/visual variants: [src/data/pages/data-engineering.js](../src/data/pages/data-engineering.js), each entry's `content.sectionProps` (or `navProps`), nested `*Props.className/style`, and its registered `type`. Actual colors/background layers are styled in [src/styles/site.css](../src/styles/site.css) and [src/styles/app.css](../src/styles/app.css).
- Styling: [src/styles/site.css](../src/styles/site.css) plus [src/styles/app.css](../src/styles/app.css); classes in the JSX/data select the rules.
- Animation configuration: the same [src/data/pages/data-engineering.js](../src/data/pages/data-engineering.js) entries' canvas/field/scene props and word `--i` style values; engines in [src/vendor/site.raw.js](../src/vendor/site.raw.js) and [src/vendor/scenes.raw.js](../src/vendor/scenes.raw.js), runtime wrappers in [src/vendor/site.js](../src/vendor/site.js) and [src/vendor/scenes.js](../src/vendor/scenes.js), CSS reveals in [src/styles/site.css](../src/styles/site.css).

| Section key / visible heading | Content location in the page module | Actual renderer(s) | Card/list, image and CTA fields |
| --- | --- | --- | --- |
| `data-engineering-HeroSubSectionVariant5-1` -> Transform | `sections -> key 'data-engineering-HeroSubSectionVariant5-1' -> content` | [HeroSubSectionVariant5.jsx](../src/components/composed/HeroSubSectionVariant5.jsx)<br>[Breadcrumbs.jsx](../src/components/composed/Breadcrumbs.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2`. |
| `intro` -> AI-Ready Data | `sections -> key 'intro' -> content` | [StorySection.jsx](../src/components/composed/StorySection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `focus` -> Where We Focus | `sections -> key 'focus' -> content` | [FocusSection.jsx](../src/components/composed/FocusSection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `capabilities` -> Data Engineering Capabilities | `sections -> key 'capabilities' -> content` | [CapabilitiesSection.jsx](../src/components/composed/CapabilitiesSection.jsx) | Lists: None in this section.<br>Images: `imgProps.src`, `imgProps.alt`, `imgProps2.src` (plus remaining numbered entries).<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2` (plus remaining numbered entries). |
| `talk` -> TalkSection | `sections -> key 'talk' -> content` | [TalkSection.jsx](../src/components/composed/TalkSection.jsx)<br>[ContactBand.jsx](../src/components/composed/ContactBand.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `contactBand.aProps.href`, `contactBand.linkLabel`. |
| `offers` -> Start With What Matters Now | `sections -> key 'offers' -> content` | [OffersSection.jsx](../src/components/composed/OffersSection.jsx)<br>[FeatureCardVariant3.jsx](../src/components/composed/FeatureCardVariant3.jsx) | Lists: `featureCardVariant3Items`.<br>Images: None in this section.<br>Links: `featureCardVariant3Items[0].content.aProps.href`, `featureCardVariant3Items[1].content.aProps.href`, `featureCardVariant3Items[2].content.aProps.href`, `featureCardVariant3Items[3].content.aProps.href`. |
| `how` -> How We Drive Data Transformation | `sections -> key 'how' -> content` | [HowSectionVariant2.jsx](../src/components/composed/HowSectionVariant2.jsx)<br>[ProcessStepsVariant2.jsx](../src/components/composed/ProcessStepsVariant2.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `results` -> Selected Client Outcomes | `sections -> key 'results' -> content` | [ResultsSection.jsx](../src/components/composed/ResultsSection.jsx)<br>[OutcomeSlide.jsx](../src/components/composed/OutcomeSlide.jsx) | Lists: `outcomeSlideItems`.<br>Images: `outcomeSlideItems[0].content.imgProps.src`, `outcomeSlideItems[0].content.imgProps.alt`, `outcomeSlideItems[1].content.imgProps.src` (plus remaining numbered entries).<br>Links: `outcomeSlideItems[0].content.aProps.href`, `outcomeSlideItems[0].content.linkLabel`, `outcomeSlideItems[1].content.aProps.href`, `outcomeSlideItems[1].content.linkLabel` (plus remaining numbered entries). |
| `why` -> Why Organisations Choose Palni | `sections -> key 'why' -> content` | [WhySection.jsx](../src/components/composed/WhySection.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Lists: `featureCardItems`.<br>Images: None in this section.<br>Links: None in this section. |
| `final` -> Let's Talk About Your Data Priorities | `sections -> key 'final' -> content` | [DiscoveryCTA.jsx](../src/components/composed/DiscoveryCTA.jsx)<br>[DiscoverySteps.jsx](../src/components/composed/DiscoverySteps.jsx)<br>[ContactDetails.jsx](../src/components/composed/ContactDetails.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2` (plus remaining numbered entries). |

The paths above are relative to the section's content object. An omitted list/image/link field means that feature is not present in this renderer; adding arbitrary data alone will not create new markup. Numbered fields correspond to existing fixed elements, while *Items arrays are rendered by the named child components.

### AI & Automation

- Routes: `/ai-automation` and `/ai-automation.html`; metadata in [src/content/pages.js](../src/content/pages.js) under key `ai-automation`.
- Content file: [src/data/pages/ai-automation.js](../src/data/pages/ai-automation.js). Section configuration: the same file's `sections` array.
- Hero content: [src/data/pages/ai-automation.js](../src/data/pages/ai-automation.js), entry `key: 'ai-automation-HeroSubSectionVariant2-1'`, `content`. H1 fields: `label`, `label2`, `label3`, `label4`, `label5`, `label6`, `label7`. Intro: `description`. Hero buttons: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2`.
- Cards, images and CTA links: [src/data/pages/ai-automation.js](../src/data/pages/ai-automation.js), in the section fields listed below. Header/footer copy is inherited from [src/data/pages/navigation.js](../src/data/pages/navigation.js).
- Backgrounds/visual variants: [src/data/pages/ai-automation.js](../src/data/pages/ai-automation.js), each entry's `content.sectionProps` (or `navProps`), nested `*Props.className/style`, and its registered `type`. Actual colors/background layers are styled in [src/styles/site.css](../src/styles/site.css) and [src/styles/app.css](../src/styles/app.css).
- Styling: [src/styles/site.css](../src/styles/site.css) plus [src/styles/app.css](../src/styles/app.css); classes in the JSX/data select the rules.
- Animation configuration: the same [src/data/pages/ai-automation.js](../src/data/pages/ai-automation.js) entries' canvas/field/scene props and word `--i` style values; engines in [src/vendor/site.raw.js](../src/vendor/site.raw.js) and [src/vendor/scenes.raw.js](../src/vendor/scenes.raw.js), runtime wrappers in [src/vendor/site.js](../src/vendor/site.js) and [src/vendor/scenes.js](../src/vendor/scenes.js), CSS reveals in [src/styles/site.css](../src/styles/site.css).

| Section key / visible heading | Content location in the page module | Actual renderer(s) | Card/list, image and CTA fields |
| --- | --- | --- | --- |
| `ai-automation-HeroSubSectionVariant2-1` -> Transform | `sections -> key 'ai-automation-HeroSubSectionVariant2-1' -> content` | [HeroSubSectionVariant2.jsx](../src/components/composed/HeroSubSectionVariant2.jsx)<br>[Breadcrumbs.jsx](../src/components/composed/Breadcrumbs.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2`. |
| `intro` -> Agentic AI | `sections -> key 'intro' -> content` | [StorySection.jsx](../src/components/composed/StorySection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `focus` -> Where We Focus | `sections -> key 'focus' -> content` | [FocusSection.jsx](../src/components/composed/FocusSection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `capabilities` -> AI & Automation Capabilities | `sections -> key 'capabilities' -> content` | [CapabilitiesSection.jsx](../src/components/composed/CapabilitiesSection.jsx) | Lists: None in this section.<br>Images: `imgProps.src`, `imgProps.alt`, `imgProps2.src` (plus remaining numbered entries).<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2` (plus remaining numbered entries). |
| `talk` -> TalkSection | `sections -> key 'talk' -> content` | [TalkSection.jsx](../src/components/composed/TalkSection.jsx)<br>[ContactBand.jsx](../src/components/composed/ContactBand.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `contactBand.aProps.href`, `contactBand.linkLabel`. |
| `offers` -> Start With What Matters Now | `sections -> key 'offers' -> content` | [OffersSection.jsx](../src/components/composed/OffersSection.jsx)<br>[FeatureCardVariant3.jsx](../src/components/composed/FeatureCardVariant3.jsx) | Lists: `featureCardVariant3Items`.<br>Images: None in this section.<br>Links: `featureCardVariant3Items[0].content.aProps.href`, `featureCardVariant3Items[1].content.aProps.href`, `featureCardVariant3Items[2].content.aProps.href`, `featureCardVariant3Items[3].content.aProps.href`. |
| `how` -> How We Drive AI Transformation | `sections -> key 'how' -> content` | [HowSectionVariant2.jsx](../src/components/composed/HowSectionVariant2.jsx)<br>[ProcessStepsVariant2.jsx](../src/components/composed/ProcessStepsVariant2.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `results` -> Selected Client Outcomes | `sections -> key 'results' -> content` | [ResultsSection.jsx](../src/components/composed/ResultsSection.jsx)<br>[OutcomeSlide.jsx](../src/components/composed/OutcomeSlide.jsx) | Lists: `outcomeSlideItems`.<br>Images: `outcomeSlideItems[0].content.imgProps.src`, `outcomeSlideItems[0].content.imgProps.alt`, `outcomeSlideItems[1].content.imgProps.src` (plus remaining numbered entries).<br>Links: `outcomeSlideItems[0].content.aProps.href`, `outcomeSlideItems[0].content.linkLabel`, `outcomeSlideItems[1].content.aProps.href`, `outcomeSlideItems[1].content.linkLabel` (plus remaining numbered entries). |
| `why` -> Why Organisations Choose Palni | `sections -> key 'why' -> content` | [WhySection.jsx](../src/components/composed/WhySection.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Lists: `featureCardItems`.<br>Images: None in this section.<br>Links: None in this section. |
| `final` -> Let's Talk About Your AI Priorities | `sections -> key 'final' -> content` | [DiscoveryCTA.jsx](../src/components/composed/DiscoveryCTA.jsx)<br>[DiscoverySteps.jsx](../src/components/composed/DiscoverySteps.jsx)<br>[ContactDetails.jsx](../src/components/composed/ContactDetails.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2` (plus remaining numbered entries). |

The paths above are relative to the section's content object. An omitted list/image/link field means that feature is not present in this renderer; adding arbitrary data alone will not create new markup. Numbered fields correspond to existing fixed elements, while *Items arrays are rendered by the named child components.

### CX Solutions

- Routes: `/cx-solutions` and `/cx-solutions.html`; metadata in [src/content/pages.js](../src/content/pages.js) under key `cx-solutions`.
- Content file: [src/data/pages/cx-solutions.js](../src/data/pages/cx-solutions.js). Section configuration: the same file's `sections` array.
- Hero content: [src/data/pages/cx-solutions.js](../src/data/pages/cx-solutions.js), entry `key: 'cx-solutions-HeroSubSectionVariant5-1'`, `content`. H1 fields: `label`, `label2`, `label3`, `label4`, `label5`, `label6`, `label7`, `label8`. Intro: `description`. Hero buttons: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2`.
- Cards, images and CTA links: [src/data/pages/cx-solutions.js](../src/data/pages/cx-solutions.js), in the section fields listed below. Header/footer copy is inherited from [src/data/pages/navigation.js](../src/data/pages/navigation.js).
- Backgrounds/visual variants: [src/data/pages/cx-solutions.js](../src/data/pages/cx-solutions.js), each entry's `content.sectionProps` (or `navProps`), nested `*Props.className/style`, and its registered `type`. Actual colors/background layers are styled in [src/styles/site.css](../src/styles/site.css) and [src/styles/app.css](../src/styles/app.css).
- Styling: [src/styles/site.css](../src/styles/site.css) plus [src/styles/app.css](../src/styles/app.css); classes in the JSX/data select the rules.
- Animation configuration: the same [src/data/pages/cx-solutions.js](../src/data/pages/cx-solutions.js) entries' canvas/field/scene props and word `--i` style values; engines in [src/vendor/site.raw.js](../src/vendor/site.raw.js) and [src/vendor/scenes.raw.js](../src/vendor/scenes.raw.js), runtime wrappers in [src/vendor/site.js](../src/vendor/site.js) and [src/vendor/scenes.js](../src/vendor/scenes.js), CSS reveals in [src/styles/site.css](../src/styles/site.css).

| Section key / visible heading | Content location in the page module | Actual renderer(s) | Card/list, image and CTA fields |
| --- | --- | --- | --- |
| `cx-solutions-HeroSubSectionVariant5-1` -> CX | `sections -> key 'cx-solutions-HeroSubSectionVariant5-1' -> content` | [HeroSubSectionVariant5.jsx](../src/components/composed/HeroSubSectionVariant5.jsx)<br>[Breadcrumbs.jsx](../src/components/composed/Breadcrumbs.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2`. |
| `intro` -> Intelligent Support | `sections -> key 'intro' -> content` | [StorySection.jsx](../src/components/composed/StorySection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `focus` -> Where We Focus | `sections -> key 'focus' -> content` | [FocusSection.jsx](../src/components/composed/FocusSection.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `capabilities` -> CX Capabilities | `sections -> key 'capabilities' -> content` | [CapabilitiesSection.jsx](../src/components/composed/CapabilitiesSection.jsx) | Lists: None in this section.<br>Images: `imgProps.src`, `imgProps.alt`, `imgProps2.src` (plus remaining numbered entries).<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2` (plus remaining numbered entries). |
| `talk` -> TalkSection | `sections -> key 'talk' -> content` | [TalkSection.jsx](../src/components/composed/TalkSection.jsx)<br>[ContactBand.jsx](../src/components/composed/ContactBand.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `contactBand.aProps.href`, `contactBand.linkLabel`. |
| `offers` -> Start With What Matters Now | `sections -> key 'offers' -> content` | [OffersSection.jsx](../src/components/composed/OffersSection.jsx)<br>[FeatureCardVariant3.jsx](../src/components/composed/FeatureCardVariant3.jsx) | Lists: `featureCardVariant3Items`.<br>Images: None in this section.<br>Links: `featureCardVariant3Items[0].content.aProps.href`, `featureCardVariant3Items[1].content.aProps.href`, `featureCardVariant3Items[2].content.aProps.href`, `featureCardVariant3Items[3].content.aProps.href`. |
| `how` -> How We Drive CX Transformation | `sections -> key 'how' -> content` | [HowSectionVariant2.jsx](../src/components/composed/HowSectionVariant2.jsx)<br>[ProcessStepsVariant2.jsx](../src/components/composed/ProcessStepsVariant2.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: None in this section. |
| `results` -> Selected Client Outcomes | `sections -> key 'results' -> content` | [ResultsSectionVariant2.jsx](../src/components/composed/ResultsSectionVariant2.jsx)<br>[OutcomeSlideVariant2.jsx](../src/components/composed/OutcomeSlideVariant2.jsx) | Lists: None in this section.<br>Images: `outcomeSlideVariant2.imgProps.src`, `outcomeSlideVariant2.imgProps.alt`.<br>Links: `outcomeSlideVariant2.aProps.href`, `outcomeSlideVariant2.linkLabel`. |
| `why` -> Why Organisations Choose Palni | `sections -> key 'why' -> content` | [WhySection.jsx](../src/components/composed/WhySection.jsx)<br>[FeatureCard.jsx](../src/components/composed/FeatureCard.jsx) | Lists: `featureCardItems`.<br>Images: None in this section.<br>Links: None in this section. |
| `final` -> Let's Talk About Your CX Priorities | `sections -> key 'final' -> content` | [DiscoveryCTA.jsx](../src/components/composed/DiscoveryCTA.jsx)<br>[DiscoverySteps.jsx](../src/components/composed/DiscoverySteps.jsx)<br>[ContactDetails.jsx](../src/components/composed/ContactDetails.jsx) | Lists: None in this section.<br>Images: None in this section.<br>Links: `aProps.href`, `linkLabel`, `aProps2.href`, `linkLabel2` (plus remaining numbered entries). |

The paths above are relative to the section's content object. An omitted list/image/link field means that feature is not present in this renderer; adding arbitrary data alone will not create new markup. Numbered fields correspond to existing fixed elements, while *Items arrays are rendered by the named child components.

### Homepage introduction exception

The added introduction is not an extracted sectionProps template. Its `heading`, `description`, `id` and `items` are defined in [src/data/pages/homeServiceIntro.js](../src/data/pages/homeServiceIntro.js). [src/components/sections/ServiceIntroSection.jsx](../src/components/sections/ServiceIntroSection.jsx) supplies the `service-intro` class and `data-tone="brand"` directly. Change its background through a scoped `#service-intro` rule in [src/styles/app.css](../src/styles/app.css); adding a sectionProps object to its data alone will have no effect. Its card grid is rendered by [src/components/sections/ServicePrinciplesGrid.jsx](../src/components/sections/ServicePrinciplesGrid.jsx).

## 6. Practical editing examples

These are **documentation examples**, not changes applied to the site. Edit the indicated fields inside the existing object; keep the rest of that object. Example wording is illustrative, not approved replacement copy.

### A. Change a page heading

Open [src/data/pages/databricks.js](../src/data/pages/databricks.js). Find `key: 'databricks-HeroSubHasSceneSectionVariant2-1'`. Its H1 is assembled from `content.label` through `content.label5`. Changing only the opening word is an ordinary content edit:

```js
// Existing hero content field; keep the surrounding properties.
"label": "Modernise"
```

This changes "Modernize" to "Modernise" in that page's visible H1. It does not change the browser title, navigation label, breadcrumb, or another Databricks page. Edit those separately only when intended. To change a full multiword title, update the participating label fields while preserving spans, whitespace and stagger indexes.

For an ordinary section heading, open [src/data/pages/salesforce.js](../src/data/pages/salesforce.js), find `key: 'focus'`, and edit `content.heading`. Do not edit the shared RoutesSection JSX to change Salesforce copy.

### B. Change a paragraph

In that same Salesforce focus entry, edit `content.description`:

```js
"description": "Connect sales and service workflows around your business priorities."
```

The first row's paragraph is description2, not description. The table and JSX reveal which field belongs to each visible block. For the new homepage introduction, edit `homeServiceIntro.description` directly in [src/data/pages/homeServiceIntro.js](../src/data/pages/homeServiceIntro.js).

### C. Replace an image

Use an existing image-bearing section listed above; search its page data for the current image URL. Update its relevant `imgProps.src` (or numbered/nested equivalent) and alt text. An existing available asset is [public/assets/img/trusted-analytics.webp](../public/assets/img/trusted-analytics.webp), served as `/assets/img/trusted-analytics.webp`:

```js
// Fields inside the existing image props object.
"src": "/assets/img/trusted-analytics.webp",
"alt": "Trusted enterprise analytics"
```

Public-file paths use /assets/... in the browser, not /public/assets/.... Keep accurate dimensions/aspect behavior and inspect the crop at desktop/mobile sizes. Decorative images can legitimately have an empty alt; informational images need an appropriate description. This example reuses an actual file rather than inventing an asset filename. A canvas is not an img: do not replace canvasProps with a src field.

### D. Change a button label and URL

In the Databricks overview hero above, edit the existing pair:

```js
"aProps": {
  "className": "btn btn-primary",
  "href": "/contact#databricks"
},
"linkLabel": "Discuss Your Data Priorities"
```

Changing label and href together prevents mismatched calls to action. Other links may use aProps2/linkLabel2 or a nested slide/card object. Preserve external-link rel/target settings. For the header CTA instead, use that page's navigation override, not the body hero.

### E. Add a new card where the grid is data-driven

Open [src/data/pages/salesforce.js](../src/data/pages/salesforce.js), find `key: 'outcomes'`, then `content.featureCardItems`. Append one new item using that existing schema. The following example follows the current first card's schema and supplies new copy/key:

```js
{
  "key": "salesforce-team-adoption",
  "content": {
    "divProps": {},
    "spanProps": {
      "className": "icb"
    },
    "svgProps": {
      "className": "ic",
      "viewBox": "0 0 24 24",
      "aria-hidden": "true",
      "focusable": "false"
    },
    "pathProps": {
      "d": "M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2 M9 15l-3-3c1-5 5-9 12-9 0 7-4 11-9 12z M14.5 10.2a1.2 1.2 0 1 0 0-.01"
    },
    "h3Props": {},
    "cardTitle": "Stronger Team Adoption",
    "pProps": {},
    "description": "Help teams adopt consistent Salesforce workflows."
  }
}
```

[src/components/composed/WhySection.jsx](../src/components/composed/WhySection.jsx) maps featureCardItems to [src/components/composed/FeatureCard.jsx](../src/components/composed/FeatureCard.jsx). The new card therefore renders without duplicating JSX. Keep a unique stable key and check grid balance after changing the count. Reuse icon defaults where appropriate; do not copy an entire page configuration to add one card.

**Fixed-structure exceptions:** Salesforce focus rows currently use cardTitle/cardTitle2/cardTitle3 and matching numbered description/props fields in RoutesSection. Adding cardTitle4 alone will not create another row. ServicesSection likewise contains fixed service-link blocks. A structural addition there needs an intentional component change. The homepage introduction currently selects icon defaults by card index from a four-item servicePrinciples array; blindly appending a fifth cards entry exceeds that source array. Adding a fifth requires explicitly handling its icon/default data, not just adding copy.

### F. Remove a section

Open the target page's data module and find its object by key. For example, Salesforce's `key: 'talk'` is its intermediate contact band; deleting that **entire entry** from sections removes only that instance. Do not delete the TalkSection file or its registry entry: other pages use it. Keep the final CTA unless you intend to remove it as well.

After removal, remove/update any header, subnav, breadcrumb or CTA links that point to its DOM id and any aria-labelledby references that would become invalid. Whitespace text entries can remain, but do not mistake them for content sections. There is no general enabled/visible field in the current registry; adding enabled:false by itself will not hide a section. ServiceIntroSection is a specific exception: it renders nothing when its items list is empty.

### G. Change a section background without affecting other pages

For Salesforce outcomes, preserve its existing base classes and add a page-specific modifier inside that entry's sectionProps.className. For example, if its base class is sec, use `sec salesforce-outcomes-soft`. Then add an intentionally scoped rule to [src/styles/app.css](../src/styles/app.css):

```css
/* Example new modifier, scoped to the one configured section. */
.salesforce-outcomes-soft {
  background: linear-gradient(135deg, var(--ink-1), var(--ink-0));
}
```

This modifier is a proposed example, not a claim that it already exists. Keep required base classes and data-tone. For a data-only style override, the existing sectionProps can accept `style: { backgroundColor: 'var(--ink-1)' }`, because the renderer spreads DOM props. Prefer a scoped class for repeated/responsive designs.

A CTA's visible gradient may belong to its nested cta-panel and pseudo-elements rather than the outer section. Target those layers beneath a unique section modifier if needed. data-tone adjusts scroll atmosphere/accent state via the engine and supports existing keys such as brand, night, sf, sn and db; it does not replace every nested background.

### H. Change section order

In [src/data/pages/salesforce.js](../src/data/pages/salesforce.js), move the existing full `key: 'outcomes'` entry before the existing `key: 'focus'` entry if that is the intended new order. Preserve each type/key/content object. Do not rename keys to match positions and do not reorder the shared registry. Move nearby whitespace-only entries as desired; they do not control visual section identity.

If the page has section navigation, update that navigation's link order to match. On Databricks pages it is another SectionNavigation entry with its own link props; moving a main section does not automatically reorder those links. Keep hero and breadcrumb landmarks sensible, then verify anchor scrolling and the full mobile reading order.

### I. Update mobile-specific styling

[src/styles/app.css](../src/styles/app.css) already contains the homepage service-principles grid's mobile rule. A one-section-only change should be scoped more tightly than .service-principles, which can be reused. For example:

```css
@media (max-width: 767px) {
  #service-intro .service-principles > div {
    padding: 20px;
  }
}
```

This example affects the introduction cards, not Salesforce/ServiceNow cards. Use the existing project's breakpoints rather than assuming one global mobile breakpoint: site.css has token changes around 1024/640 and component rules around 900/760; app.css additionally uses 767, 901 and 761. Verify both sides of the breakpoint, text wrapping, buttons, images/canvases and horizontal overflow. Put scoped mobile overrides in app.css; there is no separate responsive stylesheet to maintain.

## 7. Animation and design maintenance boundaries

For a page-only animation adjustment, edit its existing canvasProps/nested canvas props and keep supported scene/field names. data-scene selects a drawing from scenes.raw.js; data-field selects a field from site.raw.js. data-colors accepts the engine's color keys; data-density/data-fade/data-compact/data-interactive tune supported field/scene behavior. Fields are not interchangeable with scenes, and not every engine reads every attribute. Check the matching raw source before changing a value.

For a shared engine change, edit the appropriate raw source, regenerate wrappers with `node scripts/wrap-vendor.mjs`, and test affected pages, repeated SPA navigation and reduced motion. Changes to site.css reveal keyframes, shared hover selectors, or pageEffects cleanup can affect many pages. Preserve ResizeObserver sizing, reduced-motion checks, offscreen pauses and cleanup.

## 8. A practical update and verification workflow

1. Identify the page in the final reference below and edit its active data file. For copy-only work, leave JSX and CSS alone.
2. Match the visible section by stable key and current words. Change the smallest relevant fields, preserving IDs, keys, aria references and canvas hooks.
3. For one-page design work, use that entry's props/modifier and a scoped rule in app.css. Check all consumers before editing a shared template or global token.
4. Preview with npm run dev. Read the actual Local URL printed by Vite. Check the changed page and an unaffected platform page at desktop, tablet and mobile widths.
5. Run npm run build after the edit.
6. For browser checks, start npm run dev -- --host 127.0.0.1 --port 5174, then run node scripts/verify-site.mjs. [scripts/verify-site.mjs](../scripts/verify-site.mjs) checks all route aliases, configured sections, mobile overflow/menus, page-data isolation and the fallback redirect. It writes no screenshots or reports. Set SITE_URL or CHROME_PATH if your server/browser location differs.
7. For an intentional animation engine change, edit the relevant raw source and run node scripts/wrap-vendor.mjs. Recheck animation, reduced motion and navigation manually; the lightweight verification script is not a complete visual or animation audit.

The old audit reports, screenshots and migration tools have been removed to keep the project focused on editing. The root [README.md](../README.md) and this guide are the maintained documentation. A successful build is not a visual comparison: inspect the rendered pages after a design change. No screenshot, baseline-regeneration or content-migration command is required for an ordinary copy edit.

## 9. Quick page-by-page editing reference

| Page | Routes | Open this active content/section file |
| --- | --- | --- |
| Home | `/`, `/index.html` | [src/data/pages/home.js](../src/data/pages/home.js) |
| Databricks Overview | `/databricks`, `/databricks.html` | [src/data/pages/databricks.js](../src/data/pages/databricks.js) |
| Databricks Capabilities | `/databricks-capabilities`, `/databricks-capabilities.html` | [src/data/pages/databricks-capabilities.js](../src/data/pages/databricks-capabilities.js) |
| Databricks Industry Solutions | `/databricks-industries`, `/databricks-industries.html` | [src/data/pages/databricks-industries.js](../src/data/pages/databricks-industries.js) |
| Databricks Expertise and Accelerators | `/databricks-expertise`, `/databricks-expertise.html` | [src/data/pages/databricks-expertise.js](../src/data/pages/databricks-expertise.js) |
| ServiceNow | `/servicenow`, `/servicenow.html` | [src/data/pages/servicenow.js](../src/data/pages/servicenow.js) |
| Salesforce | `/salesforce`, `/salesforce.html` | [src/data/pages/salesforce.js](../src/data/pages/salesforce.js) |
| Use Cases | `/use-cases`, `/use-cases.html` | [src/data/pages/use-cases.js](../src/data/pages/use-cases.js) |
| About Palni | `/about`, `/about.html` | [src/data/pages/about.js](../src/data/pages/about.js) |
| Careers | `/careers`, `/careers.html` | [src/data/pages/careers.js](../src/data/pages/careers.js) |
| Contact | `/contact`, `/contact.html` | [src/data/pages/contact.js](../src/data/pages/contact.js) |
| Data Engineering | `/data-engineering`, `/data-engineering.html` | [src/data/pages/data-engineering.js](../src/data/pages/data-engineering.js) |
| AI & Automation | `/ai-automation`, `/ai-automation.html` | [src/data/pages/ai-automation.js](../src/data/pages/ai-automation.js) |
| CX Solutions | `/cx-solutions`, `/cx-solutions.html` | [src/data/pages/cx-solutions.js](../src/data/pages/cx-solutions.js) |

For Home's added four-card introduction, open [src/data/pages/homeServiceIntro.js](../src/data/pages/homeServiceIntro.js). For its existing Beyond the Platform Boundary cards/icon defaults, open [src/data/pages/servicePrinciples.js](../src/data/pages/servicePrinciples.js).

| Shared task | Exact active file |
| --- | --- |
| Header/menu/mobile drawer/footer copy | [src/data/pages/navigation.js](../src/data/pages/navigation.js) |
| Route aliases, browser title, meta description, platform body marker | [src/content/pages.js](../src/content/pages.js) |
| Registered section types | [src/components/composed/registry.js](../src/components/composed/registry.js) |
| Shared baseline design tokens/styles | [src/styles/site.css](../src/styles/site.css) |
| Scoped overrides and mobile introduction styling | [src/styles/app.css](../src/styles/app.css) |
| Field/menu/form/carousel engine source | [src/vendor/site.raw.js](../src/vendor/site.raw.js) |
| Scene engine source | [src/vendor/scenes.raw.js](../src/vendor/scenes.raw.js) |

Content edits belong to the listed data source; structural changes belong to the named JSX renderer; visual changes belong to the active stylesheets with appropriate scope. This separation lets page copy evolve independently while maintaining the existing shared components and different page designs.


Path validation after cleanup: 134 distinct linked files exist. All 14 live page configurations remain in src/data/pages/. The cleanup preserved their content, the active stylesheets, animation engines and all public/assets images/fonts/logos.
