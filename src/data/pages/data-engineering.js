import { chromeByPage } from './navigation'

// Local content preserved verbatim. Reorder sections here; templates contain no page copy.
export default {
  layout: "PageLayout",
  content: { ...chromeByPage["data-engineering"], ...{
  "divProps": {
    "className": "page-root"
  },
  "aProps": {
    "className": "skip",
    "href": "#main"
  },
  "linkLabel": "Skip to content",
  "divSpace2": "\n",
  "divProps2": {
    "className": "bg",
    "aria-hidden": "true"
  },
  "iProps": {},
  "iProps2": {},
  "iProps3": {},
  "spanProps": {
    "className": "glow"
  },
  "divSpace8": "\n",
  "divSpace9": "\n",
  "divSpace10": "\n",
  "mainProps": {
    "id": "main"
  },
  "divSpace11": "\n"
} },
  sections: [
  {
    "type": "text",
    "key": "space-0",
    "content": "\n"
  },
  {
    "type": "HeroSubSectionVariant5",
    "key": "data-engineering-HeroSubSectionVariant5-1",
    "content": {
      "sectionProps": {
        "data-tone": "brand",
        "className": "hero sub",
        "aria-labelledby": "h1",
        "data-scene-host": ""
      },
      "canvasProps": {
        "className": "field",
        "data-field": "funnel",
        "data-colors": "brand",
        "data-density": "0.9",
        "data-interactive": "true",
        "aria-hidden": "true"
      },
      "sectionSpace2": "\n",
      "divProps": {
        "className": "wrap"
      },
      "breadcrumbs": {
        "navProps": {
          "className": "crumbs",
          "aria-label": "Breadcrumb"
        },
        "aProps": {
          "href": "/"
        },
        "linkLabel": "Home",
        "spanProps": {
          "aria-hidden": "true"
        },
        "label": "/",
        "spanProps2": {},
        "label2": "Capabilities",
        "spanProps3": {
          "aria-hidden": "true"
        },
        "label3": "/",
        "spanProps4": {
          "aria-current": "page"
        },
        "label4": "Data Engineering"
      },
      "h1Props": {
        "id": "h1"
      },
      "spanProps": {
        "className": "w"
      },
      "spanProps2": {
        "style": {
          "--i": "0"
        }
      },
      "label": "Transform",
      "h1Space2": " ",
      "spanProps3": {
        "className": "w"
      },
      "spanProps4": {
        "style": {
          "--i": "1"
        }
      },
      "label2": "Your",
      "h1Space3": " ",
      "spanProps5": {
        "className": "w"
      },
      "spanProps6": {
        "style": {
          "--i": "2"
        }
      },
      "label3": "Enterprise",
      "h1Space4": " ",
      "spanProps7": {
        "className": "w"
      },
      "spanProps8": {
        "style": {
          "--i": "3"
        }
      },
      "label4": "into",
      "h1Space5": " ",
      "spanProps9": {
        "className": "w"
      },
      "spanProps10": {
        "style": {
          "--i": "4"
        }
      },
      "label5": "a",
      "h1Space6": " ",
      "spanProps11": {
        "className": "w"
      },
      "spanProps12": {
        "style": {
          "--i": "5"
        }
      },
      "label6": "Data",
      "h1Space7": " ",
      "spanProps13": {
        "className": "w"
      },
      "spanProps14": {
        "style": {
          "--i": "6"
        }
      },
      "label7": "Driven",
      "h1Space8": " ",
      "spanProps15": {
        "className": "w"
      },
      "spanProps16": {
        "style": {
          "--i": "7"
        }
      },
      "label8": "Organisation",
      "pProps": {
        "className": "lead"
      },
      "description": "Enable faster and better informed decision making by uncovering insights from your data.",
      "divProps2": {
        "className": "btns"
      },
      "aProps": {
        "className": "btn btn-primary",
        "href": "/contact"
      },
      "linkLabel": "Start with a Discovery",
      "aProps2": {
        "className": "btn btn-ghost",
        "href": "/use-cases"
      },
      "linkLabel2": "View Use Cases"
    }
  },
  {
    "type": "text",
    "key": "space-2",
    "content": "\n\n"
  },
  {
    "type": "StorySection",
    "key": "intro",
    "content": {
      "sectionProps": {
        "data-tone": "sf",
        "className": "sec",
        "id": "intro",
        "aria-labelledby": "h-intro"
      },
      "divProps": {
        "className": "wrap"
      },
      "divProps2": {
        "className": "split"
      },
      "h2Props": {
        "id": "h-intro"
      },
      "heading": "AI-Ready Data",
      "divProps3": {
        "className": "body"
      },
      "pProps": {},
      "description": "Governed, trusted data platforms that make analytics and AI reliable, not another isolated project. We help organisations centralise fragmented data, modernise reporting and build scalable systems that support analytics, automation and operations."
    }
  },
  {
    "type": "text",
    "key": "space-4",
    "content": "\n"
  },
  {
    "type": "FocusSection",
    "key": "focus",
    "content": {
      "sectionProps": {
        "data-tone": "night",
        "className": "sec",
        "id": "focus",
        "aria-labelledby": "h-focus"
      },
      "divProps": {
        "className": "wrap"
      },
      "divProps2": {
        "className": "sec-head"
      },
      "divProps3": {
        "className": "t"
      },
      "h2Props": {
        "id": "h-focus"
      },
      "heading": "Where We Focus",
      "pProps": {
        "className": "lead"
      },
      "description": "The priority areas that drive measurable business impact.",
      "divProps4": {
        "className": "ledger"
      },
      "divProps5": {
        "className": "row"
      },
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
        "d": "M12 3l9 5-9 5-9-5z M3 12.5l9 5 9-5 M3 17l9 5 9-5"
      },
      "h3Props": {
        "className": "h3d"
      },
      "cardTitle": "Modern Data Platforms",
      "pProps2": {},
      "description2": "Lakehouse architectures to unify data, analytics, and AI so teams work from one trusted foundation instead of disconnected stores.",
      "divProps6": {
        "className": "aside"
      },
      "divProps7": {
        "className": "row"
      },
      "spanProps2": {
        "className": "icb"
      },
      "svgProps2": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps2": {
        "d": "M4 20h16 M7 16v-5 M12 16V7 M17 16v-8"
      },
      "h3Props2": {
        "className": "h3d"
      },
      "cardTitle2": "Data Warehousing and Analytics",
      "pProps3": {},
      "description3": "Centralized data, transformation, and analytics for reporting and business insights that leadership can act on.",
      "divProps8": {
        "className": "aside"
      },
      "divProps9": {
        "className": "row"
      },
      "spanProps3": {
        "className": "icb"
      },
      "svgProps3": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps3": {
        "d": "M5 9h14v10H5z M12 5v4 M12 3.6a1.4 1.4 0 1 0 0 .01 M9 13.5v1 M15 13.5v1 M9.5 17h5 M2.5 12.5v3 M21.5 12.5v3"
      },
      "h3Props3": {
        "className": "h3d"
      },
      "cardTitle3": "Agentic AI",
      "pProps4": {},
      "description4": "AI agents that interpret data, generate insights, and trigger workflows on governed enterprise context.",
      "divProps10": {
        "className": "aside"
      },
      "divProps11": {
        "className": "row"
      },
      "spanProps4": {
        "className": "icb"
      },
      "svgProps4": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps4": {
        "d": "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4"
      },
      "h3Props4": {
        "className": "h3d"
      },
      "cardTitle4": "Governance and Quality",
      "pProps5": {},
      "description5": "Access control, lineage, and quality built into the platform so data stays trusted as it scales across teams and use cases.",
      "divProps12": {
        "className": "aside"
      }
    }
  },
  {
    "type": "text",
    "key": "space-6",
    "content": "\n"
  },
  {
    "type": "CapabilitiesSection",
    "key": "capabilities",
    "content": {
      "sectionProps": {
        "data-tone": "sn",
        "className": "sec",
        "id": "capabilities",
        "aria-labelledby": "h-capabilities"
      },
      "divProps": {
        "className": "wrap"
      },
      "divProps2": {
        "className": "sec-head"
      },
      "divProps3": {
        "className": "t"
      },
      "h2Props": {
        "id": "h-capabilities"
      },
      "heading": "Data Engineering Capabilities",
      "pProps": {
        "className": "lead"
      },
      "description": "From ingestion to insight, we engineer data platforms, pipelines, warehousing, analytics, transformation, and governance as one connected foundation. Cloud warehouses, lakehouse platforms, and governed data models work together so reporting, analytics, and AI operate on consistent, trusted data.",
      "divProps4": {
        "className": "xp"
      },
      "divProps5": {
        "className": "xp-tabs",
        "role": "tablist",
        "aria-label": "Data Engineering Capabilities",
        "aria-orientation": "vertical"
      },
      "buttonProps": {
        "role": "tab",
        "id": "xt-data-platforms",
        "aria-controls": "xp-data-platforms",
        "aria-selected": "true",
        "tabIndex": "0",
        "type": "button"
      },
      "spanProps": {
        "className": "icb sm"
      },
      "svgProps": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps": {
        "d": "M12 3l9 5-9 5-9-5z M3 12.5l9 5 9-5 M3 17l9 5 9-5"
      },
      "spanProps2": {},
      "label": "Data Platforms",
      "buttonProps2": {
        "role": "tab",
        "id": "xt-warehousing",
        "aria-controls": "xp-warehousing",
        "aria-selected": "false",
        "tabIndex": "-1",
        "type": "button"
      },
      "spanProps3": {
        "className": "icb sm"
      },
      "svgProps2": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps2": {
        "d": "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6 M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"
      },
      "spanProps4": {},
      "label2": "Warehousing",
      "buttonProps3": {
        "role": "tab",
        "id": "xt-integration-and-pipelines",
        "aria-controls": "xp-integration-and-pipelines",
        "aria-selected": "false",
        "tabIndex": "-1",
        "type": "button"
      },
      "spanProps5": {
        "className": "icb sm"
      },
      "svgProps3": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps3": {
        "d": "M4 4h6v5H4z M14 15h6v5h-6z M7 9v4a2 2 0 0 0 2 2h5"
      },
      "spanProps6": {},
      "label3": "Integration and Pipelines",
      "buttonProps4": {
        "role": "tab",
        "id": "xt-analytics",
        "aria-controls": "xp-analytics",
        "aria-selected": "false",
        "tabIndex": "-1",
        "type": "button"
      },
      "spanProps7": {
        "className": "icb sm"
      },
      "svgProps4": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps4": {
        "d": "M4 20h16 M7 16v-5 M12 16V7 M17 16v-8"
      },
      "spanProps8": {},
      "label4": "Analytics",
      "buttonProps5": {
        "role": "tab",
        "id": "xt-transformation",
        "aria-controls": "xp-transformation",
        "aria-selected": "false",
        "tabIndex": "-1",
        "type": "button"
      },
      "spanProps9": {
        "className": "icb sm"
      },
      "svgProps5": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps5": {
        "d": "M21 12a9 9 0 1 1-3-6.7 M21 4v5h-5"
      },
      "spanProps10": {},
      "label5": "Transformation",
      "buttonProps6": {
        "role": "tab",
        "id": "xt-governance",
        "aria-controls": "xp-governance",
        "aria-selected": "false",
        "tabIndex": "-1",
        "type": "button"
      },
      "spanProps11": {
        "className": "icb sm"
      },
      "svgProps6": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps6": {
        "d": "M4 4h5v5H4z M15 15h5v5h-5z M15 4h5v5h-5z M9 6.5h6 M17.5 9v6"
      },
      "spanProps12": {},
      "label6": "Governance",
      "divProps6": {
        "className": "xp-panels"
      },
      "divProps7": {
        "className": "xp-panel",
        "role": "tabpanel",
        "id": "xp-data-platforms",
        "aria-labelledby": "xt-data-platforms"
      },
      "divProps8": {
        "className": "xp-copy"
      },
      "spanProps13": {
        "className": "xp-k"
      },
      "label7": "Data Platforms",
      "h3Props": {
        "className": "h3d"
      },
      "cardTitle": "Lakehouse architectures that unify the estate",
      "pProps2": {},
      "description2": "Cloud data platforms that bring sources, models, and access onto one foundation — lakehouse or warehouse, chosen for how the business actually operates. We unify those stores so teams stop working from competing copies of the same data.",
      "ulProps": {
        "className": "xp-tags",
        "aria-label": "Includes"
      },
      "liProps": {},
      "text": "Lakehouse",
      "liProps2": {},
      "text2": "Cloud warehouses",
      "liProps3": {},
      "text3": "Platform design",
      "aProps": {
        "className": "link more",
        "href": "/contact"
      },
      "linkLabel": "Talk to us about data platforms",
      "figureProps": {
        "className": "xp-art has-img"
      },
      "imgProps": {
        "src": "/assets/img/unified-data-platform.webp",
        "alt": "",
        "loading": "lazy",
        "decoding": "async"
      },
      "divProps9": {
        "className": "xp-panel",
        "role": "tabpanel",
        "id": "xp-warehousing",
        "aria-labelledby": "xt-warehousing",
        "hidden": true
      },
      "divProps10": {
        "className": "xp-copy"
      },
      "spanProps14": {
        "className": "xp-k"
      },
      "label8": "Warehousing",
      "h3Props2": {
        "className": "h3d"
      },
      "cardTitle2": "Warehousing built for scale",
      "pProps3": {},
      "description3": "Snowflake and cloud warehouses for sharing, performance, and analytics that grow with the business. We design the warehouse so reporting stays fast, governed, and ready as volumes and users increase.",
      "ulProps2": {
        "className": "xp-tags",
        "aria-label": "Includes"
      },
      "liProps4": {},
      "text4": "Snowflake",
      "liProps5": {},
      "text5": "Sharing",
      "liProps6": {},
      "text6": "Scalable analytics",
      "aProps2": {
        "className": "link more",
        "href": "/contact"
      },
      "linkLabel2": "Talk to us about warehousing",
      "figureProps2": {
        "className": "xp-art has-img"
      },
      "imgProps2": {
        "src": "/assets/img/scalable-cloud-warehouse.webp",
        "alt": "",
        "loading": "lazy",
        "decoding": "async"
      },
      "divProps11": {
        "className": "xp-panel",
        "role": "tabpanel",
        "id": "xp-integration-and-pipelines",
        "aria-labelledby": "xt-integration-and-pipelines",
        "hidden": true
      },
      "divProps12": {
        "className": "xp-copy"
      },
      "spanProps15": {
        "className": "xp-k"
      },
      "label9": "Integration and Pipelines",
      "h3Props3": {
        "className": "h3d"
      },
      "cardTitle3": "Data that moves when the business needs it",
      "pProps4": {},
      "description4": "Streaming, ingestion, and automated pipelines that connect systems without brittle handoffs. We move data when the business needs it — with monitoring, retries, and ownership so jobs do not fail silently.",
      "ulProps3": {
        "className": "xp-tags",
        "aria-label": "Includes"
      },
      "liProps7": {},
      "text7": "Kafka",
      "liProps8": {},
      "text8": "Ingestion",
      "liProps9": {},
      "text9": "Event processing",
      "aProps3": {
        "className": "link more",
        "href": "/contact"
      },
      "linkLabel3": "Talk to us about integration and pipelines",
      "figureProps3": {
        "className": "xp-art has-img"
      },
      "imgProps3": {
        "src": "/assets/img/reliable-data-pipelines.webp",
        "alt": "",
        "loading": "lazy",
        "decoding": "async"
      },
      "divProps13": {
        "className": "xp-panel",
        "role": "tabpanel",
        "id": "xp-analytics",
        "aria-labelledby": "xt-analytics",
        "hidden": true
      },
      "divProps14": {
        "className": "xp-copy"
      },
      "spanProps16": {
        "className": "xp-k"
      },
      "label10": "Analytics",
      "h3Props4": {
        "className": "h3d"
      },
      "cardTitle4": "Insights teams can trust",
      "pProps5": {},
      "description5": "Tableau, Power BI, and reporting layers on consistent models — so every team sees the same numbers. We fix metric conflicts at the model layer instead of patching dashboards after the fact.",
      "ulProps4": {
        "className": "xp-tags",
        "aria-label": "Includes"
      },
      "liProps10": {},
      "text10": "Visualisation",
      "liProps11": {},
      "text11": "Reporting",
      "liProps12": {},
      "text12": "Business insights",
      "aProps4": {
        "className": "link more",
        "href": "/contact"
      },
      "linkLabel4": "Talk to us about analytics",
      "figureProps4": {
        "className": "xp-art has-img"
      },
      "imgProps4": {
        "src": "/assets/img/trusted-analytics.webp",
        "alt": "",
        "loading": "lazy",
        "decoding": "async"
      },
      "divProps15": {
        "className": "xp-panel",
        "role": "tabpanel",
        "id": "xp-transformation",
        "aria-labelledby": "xt-transformation",
        "hidden": true
      },
      "divProps16": {
        "className": "xp-copy"
      },
      "spanProps17": {
        "className": "xp-k"
      },
      "label11": "Transformation",
      "h3Props5": {
        "className": "h3d"
      },
      "cardTitle5": "Models that stay maintainable",
      "pProps6": {},
      "description6": "DBT and analytics engineering that turn raw data into governed, reusable models. We build transformations teams can maintain, test, and trust as new sources and use cases are added.",
      "ulProps5": {
        "className": "xp-tags",
        "aria-label": "Includes"
      },
      "liProps13": {},
      "text13": "dbt",
      "liProps14": {},
      "text14": "Modelling",
      "liProps15": {},
      "text15": "Analytics engineering",
      "aProps5": {
        "className": "link more",
        "href": "/contact"
      },
      "linkLabel5": "Talk to us about transformation",
      "figureProps5": {
        "className": "xp-art has-img"
      },
      "imgProps5": {
        "src": "/assets/img/maintainable-data-transformation.webp",
        "alt": "",
        "loading": "lazy",
        "decoding": "async"
      },
      "divProps17": {
        "className": "xp-panel",
        "role": "tabpanel",
        "id": "xp-governance",
        "aria-labelledby": "xt-governance",
        "hidden": true
      },
      "divProps18": {
        "className": "xp-copy"
      },
      "spanProps18": {
        "className": "xp-k"
      },
      "label12": "Governance",
      "h3Props6": {
        "className": "h3d"
      },
      "cardTitle6": "Quality and control as the data grows",
      "pProps7": {},
      "description7": "Access, lineage, quality, and compliance designed into the platform — not added after the fact. We make it clear who owns the data, who can use it, and whether it is ready for analytics or AI.",
      "ulProps6": {
        "className": "xp-tags",
        "aria-label": "Includes"
      },
      "liProps16": {},
      "text16": "Access control",
      "liProps17": {},
      "text17": "Lineage",
      "liProps18": {},
      "text18": "Compliance",
      "aProps6": {
        "className": "link more",
        "href": "/contact"
      },
      "linkLabel6": "Talk to us about governance",
      "figureProps6": {
        "className": "xp-art has-img"
      },
      "imgProps6": {
        "src": "/assets/img/governed-data-quality.webp",
        "alt": "",
        "loading": "lazy",
        "decoding": "async"
      }
    }
  },
  {
    "type": "text",
    "key": "space-8",
    "content": "\n"
  },
  {
    "type": "TalkSection",
    "key": "talk",
    "content": {
      "sectionProps": {
        "data-tone": "brand",
        "className": "sec tight band-sec",
        "id": "talk",
        "aria-labelledby": "h-talk"
      },
      "divProps": {
        "className": "wrap"
      },
      "contactBand": {
        "divProps": {
          "className": "band"
        },
        "spanProps": {
          "className": "band-glow",
          "aria-hidden": "true"
        },
        "divProps2": {
          "className": "band-t"
        },
        "h2Props": {
          "id": "h-talk"
        },
        "heading": "Let's Talk Data",
        "pProps": {},
        "description": "We will review quality, pipelines, reporting and AI readiness, and find the first gap worth fixing.",
        "aProps": {
          "className": "btn btn-primary",
          "href": "/contact"
        },
        "linkLabel": "Start with a Discovery ",
        "svgProps": {
          "viewBox": "0 0 14 14",
          "aria-hidden": "true"
        },
        "pathProps": {
          "d": "M4 10L10 4M5 4h5v5",
          "fill": "none",
          "stroke": "currentColor",
          "strokeWidth": "1.4"
        }
      }
    }
  },
  {
    "type": "text",
    "key": "space-10",
    "content": "\n"
  },
  {
    "type": "OffersSection",
    "key": "offers",
    "content": {
      "sectionProps": {
        "data-tone": "db",
        "className": "sec",
        "id": "offers",
        "aria-labelledby": "h-offers"
      },
      "divProps": {
        "className": "wrap"
      },
      "divProps2": {
        "className": "sec-head"
      },
      "divProps3": {
        "className": "t"
      },
      "h2Props": {
        "id": "h-offers"
      },
      "heading": "Start With What Matters Now",
      "pProps": {
        "className": "lead"
      },
      "description": "Target a specific problem, strengthen what is already in place or define the next move. Each focused engagement turns a priority into a clear plan.",
      "divProps4": {
        "className": "tiles four offers"
      },
      "featureCardVariant3Items": [
        {
          "key": "FeatureCardVariant3-c35f4de5",
          "space": "",
          "content": {
            "aProps": {
              "className": "tile offer",
              "href": "/contact"
            },
            "spanProps": {
              "className": "pill"
            },
            "svgProps": {
              "className": "ic",
              "viewBox": "0 0 24 24",
              "aria-hidden": "true",
              "focusable": "false"
            },
            "pathProps": {
              "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3.5 2"
            },
            "label": "2 weeks",
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Data Foundation Diagnostic",
            "pProps": {},
            "description": "See where data fragments, quality breaks, and reporting cannot be trusted — then rank the fixes that unlock analytics and AI.",
            "divProps": {
              "className": "gets"
            },
            "bProps": {},
            "label2": "You get",
            "spanProps2": {},
            "label3": "Source map, quality risks, and a sequenced modernization plan.",
            "spanProps3": {
              "className": "link more"
            },
            "label4": "Request this"
          }
        },
        {
          "key": "FeatureCardVariant3-d1ec51d6",
          "space": "",
          "content": {
            "aProps": {
              "className": "tile offer",
              "href": "/contact"
            },
            "spanProps": {
              "className": "pill"
            },
            "svgProps": {
              "className": "ic",
              "viewBox": "0 0 24 24",
              "aria-hidden": "true",
              "focusable": "false"
            },
            "pathProps": {
              "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3.5 2"
            },
            "label": "3 weeks",
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Pipeline Acceleration Plan",
            "pProps": {},
            "description": "Find the latency, brittle jobs, and handoffs that keep teams waiting on data.",
            "divProps": {
              "className": "gets"
            },
            "bProps": {},
            "label2": "You get",
            "spanProps2": {},
            "label3": "Pipeline inventory, bottleneck list, and a 90-day acceleration scope.",
            "spanProps3": {
              "className": "link more"
            },
            "label4": "Request this"
          }
        },
        {
          "key": "FeatureCardVariant3-1fa698da",
          "space": "",
          "content": {
            "aProps": {
              "className": "tile offer",
              "href": "/contact"
            },
            "spanProps": {
              "className": "pill"
            },
            "svgProps": {
              "className": "ic",
              "viewBox": "0 0 24 24",
              "aria-hidden": "true",
              "focusable": "false"
            },
            "pathProps": {
              "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3.5 2"
            },
            "label": "2 weeks",
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Analytics Trust Review",
            "pProps": {},
            "description": "Reconcile competing numbers so leadership, finance, and operations work from one model.",
            "divProps": {
              "className": "gets"
            },
            "bProps": {},
            "label2": "You get",
            "spanProps2": {},
            "label3": "Metric conflict list, governed model recommendations, and dashboard priorities.",
            "spanProps3": {
              "className": "link more"
            },
            "label4": "Request this"
          }
        },
        {
          "key": "FeatureCardVariant3-15c20e65",
          "space": "",
          "content": {
            "aProps": {
              "className": "tile offer",
              "href": "/contact"
            },
            "spanProps": {
              "className": "pill"
            },
            "svgProps": {
              "className": "ic",
              "viewBox": "0 0 24 24",
              "aria-hidden": "true",
              "focusable": "false"
            },
            "pathProps": {
              "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3.5 2"
            },
            "label": "3 weeks",
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "AI Readiness Assessment",
            "pProps": {},
            "description": "Confirm whether your data, lineage, and access controls can safely ground AI — before you fund an agent.",
            "divProps": {
              "className": "gets"
            },
            "bProps": {},
            "label2": "You get",
            "spanProps2": {},
            "label3": "Readiness score, data gaps, and the first AI-safe use case.",
            "spanProps3": {
              "className": "link more"
            },
            "label4": "Request this"
          }
        }
      ]
    }
  },
  {
    "type": "text",
    "key": "space-12",
    "content": "\n"
  },
  {
    "type": "HowSectionVariant2",
    "key": "how",
    "content": {
      "sectionProps": {
        "data-tone": "night",
        "className": "sec",
        "id": "how",
        "aria-labelledby": "h-how"
      },
      "divProps": {
        "className": "wrap"
      },
      "divProps2": {
        "className": "sec-head"
      },
      "divProps3": {
        "className": "t"
      },
      "h2Props": {
        "id": "h-how"
      },
      "heading": "How We Drive Data Transformation",
      "pProps": {
        "className": "lead"
      },
      "description": "From assessment through production. Data platforms built for quality, governance and AI readiness.",
      "processStepsVariant2": {
        "olProps": {
          "className": "steps three",
          "style": {
            "listStyle": "none",
            "margin": "0",
            "padding": "0"
          }
        },
        "liProps": {
          "className": "step"
        },
        "spanProps": {
          "className": "n",
          "aria-hidden": "true"
        },
        "label": "1",
        "h3Props": {},
        "cardTitle": "Align",
        "pProps": {},
        "description": "We review your current data environment and identify where quality, pipelines, or AI readiness can improve.",
        "liProps2": {
          "className": "step"
        },
        "spanProps2": {
          "className": "n",
          "aria-hidden": "true"
        },
        "label2": "2",
        "h3Props2": {},
        "cardTitle2": "Execute",
        "pProps2": {},
        "description2": "From assessment and architecture to implementation — one team designs and builds platforms that unify data, analytics, and AI.",
        "liProps3": {
          "className": "step"
        },
        "spanProps3": {
          "className": "n",
          "aria-hidden": "true"
        },
        "label3": "3",
        "h3Props3": {},
        "cardTitle3": "Scale",
        "pProps3": {},
        "description3": "Architectures designed for growth and complexity, with governed data that stays reliable as the business expands."
      }
    }
  },
  {
    "type": "text",
    "key": "space-14",
    "content": "\n"
  },
  {
    "type": "ResultsSection",
    "key": "results",
    "content": {
      "sectionProps": {
        "data-tone": "brand",
        "className": "sec slider-sec",
        "id": "results",
        "aria-labelledby": "h-results"
      },
      "divProps": {
        "className": "wrap"
      },
      "divProps2": {
        "className": "sec-head"
      },
      "divProps3": {
        "className": "t"
      },
      "h2Props": {
        "id": "h-results"
      },
      "heading": "Selected Client Outcomes",
      "divProps4": {
        "className": "slider",
        "aria-roledescription": "carousel",
        "aria-label": "Selected client outcomes"
      },
      "divProps5": {
        "className": "slides"
      },
      "outcomeSlideItems": [
        {
          "key": "OutcomeSlide-6789faf6",
          "space": "",
          "content": {
            "articleProps": {
              "className": "slide c-brand",
              "role": "group",
              "aria-roledescription": "slide",
              "aria-label": "1 of 3"
            },
            "articleSpace": "\n",
            "imgProps": {
              "className": "sl-bg",
              "src": "/assets/img/cs-de-realtime.webp",
              "alt": "",
              "width": "1456",
              "height": "818",
              "loading": "lazy",
              "decoding": "async"
            },
            "divProps": {
              "className": "wrap sl-body"
            },
            "spanProps": {
              "className": "sl-k"
            },
            "label": "Selected client outcome",
            "spanProps2": {
              "className": "sl-met"
            },
            "label2": "40%",
            "h3Props": {
              "className": "sl-t"
            },
            "cardTitle": "Increase in Real-Time Data Availability",
            "pProps": {},
            "description": "Migrated 10TB+ of fragmented enterprise data into Databricks with automated pipelines, central governance and trusted reporting across ERP, CRM and legacy systems. 70% improvement in data trust. $100K annual ELT savings.",
            "divSpace5": "\n",
            "spanProps3": {
              "className": "sl-tag"
            },
            "label3": "Data Engineering · Lakehouse migration",
            "aProps": {
              "className": "link",
              "href": "/use-cases"
            },
            "linkLabel": "Read the use case"
          }
        },
        {
          "key": "OutcomeSlide-94abefa4",
          "space": "",
          "content": {
            "articleProps": {
              "className": "slide c-brand",
              "role": "group",
              "aria-roledescription": "slide",
              "aria-label": "2 of 3",
              "hidden": true
            },
            "articleSpace": "\n",
            "imgProps": {
              "className": "sl-bg",
              "src": "/assets/img/cs-de-reporting.webp",
              "alt": "",
              "width": "1456",
              "height": "818",
              "loading": "lazy",
              "decoding": "async"
            },
            "divProps": {
              "className": "wrap sl-body"
            },
            "spanProps": {
              "className": "sl-k"
            },
            "label": "Selected client outcome",
            "spanProps2": {
              "className": "sl-met"
            },
            "label2": "70%",
            "h3Props": {
              "className": "sl-t"
            },
            "cardTitle": "Faster Reporting",
            "pProps": {},
            "description": "Unified data into a scalable Snowflake platform with real-time pipelines and central reporting.",
            "divSpace5": "\n",
            "spanProps3": {
              "className": "sl-tag"
            },
            "label3": "Data Engineering · Snowflake platform",
            "aProps": {
              "className": "link",
              "href": "/use-cases"
            },
            "linkLabel": "Read the use case"
          }
        },
        {
          "key": "OutcomeSlide-e3613c95",
          "space": "",
          "content": {
            "articleProps": {
              "className": "slide c-brand",
              "role": "group",
              "aria-roledescription": "slide",
              "aria-label": "3 of 3",
              "hidden": true
            },
            "articleSpace": "\n",
            "imgProps": {
              "className": "sl-bg",
              "src": "/assets/img/cs-de-realtime.webp",
              "alt": "",
              "width": "1456",
              "height": "818",
              "loading": "lazy",
              "decoding": "async"
            },
            "divProps": {
              "className": "wrap sl-body"
            },
            "spanProps": {
              "className": "sl-k"
            },
            "label": "Selected client outcome",
            "spanProps2": {
              "className": "sl-met"
            },
            "label2": "Hours to seconds",
            "h3Props": {
              "className": "sl-t"
            },
            "cardTitle": "Planning Cycle Time",
            "pProps": {},
            "description": "Built a multi-agent AI system on Databricks for natural language queries, real-time data access and automated reasoning.",
            "divSpace5": "\n",
            "spanProps3": {
              "className": "sl-tag"
            },
            "label3": "Data Engineering · Lakehouse migration",
            "aProps": {
              "className": "link",
              "href": "/use-cases"
            },
            "linkLabel": "Read the use case"
          }
        }
      ],
      "divProps6": {
        "className": "wrap sl-ctrl"
      },
      "buttonProps": {
        "type": "button",
        "className": "sl-arrow prev",
        "aria-label": "Previous outcome"
      },
      "svgProps": {
        "viewBox": "0 0 16 16",
        "aria-hidden": "true"
      },
      "pathProps": {
        "d": "M10 3L5 8l5 5",
        "fill": "none",
        "stroke": "currentColor",
        "strokeWidth": "1.6"
      },
      "buttonProps2": {
        "type": "button",
        "className": "sl-arrow next",
        "aria-label": "Next outcome"
      },
      "svgProps2": {
        "viewBox": "0 0 16 16",
        "aria-hidden": "true"
      },
      "pathProps2": {
        "d": "M6 3l5 5-5 5",
        "fill": "none",
        "stroke": "currentColor",
        "strokeWidth": "1.6"
      },
      "divProps7": {
        "className": "sl-dots"
      },
      "buttonProps3": {
        "type": "button",
        "className": "sl-dot",
        "aria-label": "Show outcome 1",
        "aria-current": "true"
      },
      "buttonProps4": {
        "type": "button",
        "className": "sl-dot",
        "aria-label": "Show outcome 2"
      },
      "buttonProps5": {
        "type": "button",
        "className": "sl-dot",
        "aria-label": "Show outcome 3"
      },
      "spanProps": {
        "className": "sl-count",
        "aria-hidden": "true"
      },
      "bProps": {},
      "label": "1",
      "label2": " / 3"
    }
  },
  {
    "type": "text",
    "key": "space-16",
    "content": "\n"
  },
  {
    "type": "WhySection",
    "key": "why",
    "content": {
      "sectionProps": {
        "data-tone": "sf",
        "className": "sec",
        "id": "why",
        "aria-labelledby": "h-why"
      },
      "divProps": {
        "className": "wrap"
      },
      "divProps2": {
        "className": "sec-head"
      },
      "divProps3": {
        "className": "t"
      },
      "h2Props": {
        "id": "h-why"
      },
      "heading": "Why Organisations Choose Palni",
      "pProps": {
        "className": "lead"
      },
      "description": "A partner focused on practical data engineering, from strategy through production, with outcomes that scale with your business.",
      "divProps4": {
        "className": "quad"
      },
      "featureCardItems": [
        {
          "key": "FeatureCard-1009b385",
          "space": "",
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
              "d": "M4 21V5l8-3v19 M12 8h8v13 M7 8h2M7 12h2M7 16h2M15 12h2M15 16h2 M2 21h20"
            },
            "h3Props": {},
            "cardTitle": "Enterprise Experience",
            "pProps": {},
            "description": "Proven delivery across complex environments with governance, security, and reliability built into every layer."
          }
        },
        {
          "key": "FeatureCard-67506f07",
          "space": "",
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
              "d": "M12 2.5l8.5 4.8v9.4L12 21.5l-8.5-4.8V7.3z M3.5 7.3L12 12l8.5-4.7 M12 12v9.5"
            },
            "h3Props": {},
            "cardTitle": "Cloud-Native Expertise",
            "pProps": {},
            "description": "Deep experience with modern cloud data platforms, orchestration tools, and cost-optimized infrastructure design."
          }
        },
        {
          "key": "FeatureCard-50ac6857",
          "space": "",
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
              "d": "M4 4h6v5H4z M14 15h6v5h-6z M7 9v4a2 2 0 0 0 2 2h5"
            },
            "h3Props": {},
            "cardTitle": "End-to-End Delivery",
            "pProps": {},
            "description": "From assessment and architecture to implementation and optimization — one team accountable for the full data lifecycle."
          }
        },
        {
          "key": "FeatureCard-46350940",
          "space": "",
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
              "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z M12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
            },
            "h3Props": {},
            "cardTitle": "Measurable Outcomes",
            "pProps": {},
            "description": "Clear success metrics tied to reporting speed, data quality, operational efficiency, and total cost of ownership."
          }
        }
      ]
    }
  },
  {
    "type": "text",
    "key": "space-18",
    "content": "\n"
  },
  {
    "type": "DiscoveryCTA",
    "key": "final",
    "content": {
      "sectionProps": {
        "data-tone": "brand",
        "className": "cta",
        "id": "final",
        "aria-labelledby": "h-final"
      },
      "divProps": {
        "className": "wrap"
      },
      "divProps2": {
        "className": "cta-panel"
      },
      "canvasProps": {
        "data-field": "confluence",
        "data-colors": "sf,sn,db",
        "data-density": ".6",
        "data-fade": ".06",
        "aria-hidden": "true"
      },
      "divSpace3": "\n",
      "divProps3": {
        "className": "cta-grid"
      },
      "divProps4": {
        "className": "cta-main"
      },
      "h2Props": {
        "id": "h-final"
      },
      "heading": "Let's Talk About Your Data Priorities",
      "pProps": {
        "className": "lead"
      },
      "description": "We will review your current environment and identify opportunities to improve data quality, governance and AI readiness.",
      "divProps5": {
        "className": "btns"
      },
      "aProps": {
        "className": "btn btn-primary",
        "href": "/contact"
      },
      "linkLabel": "Start with a Discovery",
      "aProps2": {
        "className": "btn btn-ghost",
        "href": "/use-cases"
      },
      "linkLabel2": "View Use Cases",
      "divSpace12": "\n",
      "discoverySteps": {
        "olProps": {
          "className": "cta-steps",
          "aria-label": "What happens next"
        },
        "liProps": {},
        "spanProps": {
          "className": "icb sm"
        },
        "svgProps": {
          "className": "ic",
          "viewBox": "0 0 24 24",
          "aria-hidden": "true",
          "focusable": "false"
        },
        "pathProps": {
          "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M15.5 8.5l-2 5-5 2 2-5z"
        },
        "divProps": {},
        "bProps": {},
        "label": "Share your priority",
        "spanProps2": {},
        "label2": "Tell us the challenge, platform or data priority you are working on.",
        "liProps2": {},
        "spanProps3": {
          "className": "icb sm"
        },
        "svgProps2": {
          "className": "ic",
          "viewBox": "0 0 24 24",
          "aria-hidden": "true",
          "focusable": "false"
        },
        "pathProps2": {
          "d": "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z M2.5 20a6.5 6.5 0 0 1 13 0 M16 4.6a3.5 3.5 0 0 1 0 6.8 M18 14.2a6 6 0 0 1 3.5 5.8"
        },
        "divProps2": {},
        "bProps2": {},
        "label3": "Meet a platform expert",
        "spanProps4": {},
        "label4": "A senior Palni expert reviews your current setup with you.",
        "liProps3": {},
        "spanProps5": {
          "className": "icb sm"
        },
        "svgProps3": {
          "className": "ic",
          "viewBox": "0 0 24 24",
          "aria-hidden": "true",
          "focusable": "false"
        },
        "pathProps3": {
          "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z M12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
        },
        "divProps3": {},
        "bProps3": {},
        "label5": "Agree a practical first step",
        "spanProps6": {},
        "label6": "Leave with a clear starting point you can act on."
      },
      "contactDetails": {
        "divProps": {
          "className": "cta-contact"
        },
        "aProps": {
          "href": "mailto:sales@palni.com"
        },
        "svgProps": {
          "className": "ic",
          "viewBox": "0 0 24 24",
          "aria-hidden": "true",
          "focusable": "false"
        },
        "pathProps": {
          "d": "M3 5h18v14H3z M3.5 6l8.5 7 8.5-7"
        },
        "linkLabel": "sales@palni.com",
        "spanProps": {},
        "svgProps2": {
          "className": "ic",
          "viewBox": "0 0 24 24",
          "aria-hidden": "true",
          "focusable": "false"
        },
        "pathProps2": {
          "d": "M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"
        },
        "label": "214 501 0690",
        "aProps2": {
          "href": "/contact#locations"
        },
        "svgProps3": {
          "className": "ic",
          "viewBox": "0 0 24 24",
          "aria-hidden": "true",
          "focusable": "false"
        },
        "pathProps3": {
          "d": "M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
        },
        "linkLabel2": "8 offices across the USA and India"
      }
    }
  },
  {
    "type": "text",
    "key": "space-20",
    "content": "\n"
  }
]
}
