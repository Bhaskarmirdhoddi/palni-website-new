import { chromeByPage } from './navigation'

// Local content preserved verbatim. Reorder sections here; templates contain no page copy.
export default {
  layout: "PageLayout",
  content: { ...chromeByPage["databricks"], ...{
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
    "content": "\n  "
  },
  {
    "type": "HeroSubHasSceneSectionVariant2",
    "key": "databricks-HeroSubHasSceneSectionVariant2-1",
    "content": {
      "sectionProps": {
        "data-tone": "db",
        "className": "hero sub has-scene",
        "aria-labelledby": "h1",
        "data-scene-host": ""
      },
      "canvasProps": {
        "className": "field scene",
        "data-scene": "lake",
        "aria-hidden": "true"
      },
      "sectionSpace2": "\n    ",
      "divProps": {
        "className": "wrap"
      },
      "divSpace": "\n      ",
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
        "label4": "Databricks"
      },
      "divSpace2": "\n      ",
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
      "label": "Modernize",
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
      "label3": "Data.",
      "h1Space4": " ",
      "spanProps7": {
        "className": "w"
      },
      "spanProps8": {
        "style": {
          "--i": "3"
        }
      },
      "label4": "Accelerate",
      "h1Space5": " ",
      "spanProps9": {
        "className": "w"
      },
      "spanProps10": {
        "style": {
          "--i": "4"
        }
      },
      "label5": "AI.",
      "h1Space6": "\n      ",
      "divSpace3": "\n      ",
      "pProps": {
        "className": "lead"
      },
      "description": "From legacy modernisation to production AI, Palni helps enterprises build trusted data foundations\n        on Databricks through engineering expertise, accelerators and industry solutions.",
      "divSpace4": "\n      ",
      "divProps2": {
        "className": "btns"
      },
      "aProps": {
        "className": "btn btn-primary",
        "href": "/contact#databricks"
      },
      "linkLabel": "Talk to a Databricks Expert",
      "divSpace7": "\n    ",
      "sectionSpace3": "\n  "
    }
  },
  {
    "type": "text",
    "key": "space-2",
    "content": "\n  "
  },
  {
    "type": "SectionNavigation",
    "key": "databricks-SectionNavigation-3",
    "content": {
      "navProps": {
        "className": "subnav",
        "aria-label": "Databricks"
      },
      "navSpace": "\n    ",
      "divProps": {
        "className": "wrap"
      },
      "spanProps": {
        "className": "lbl"
      },
      "label": "Databricks",
      "aProps": {
        "href": "/databricks",
        "aria-current": "page"
      },
      "linkLabel": "Overview",
      "aProps2": {
        "href": "/databricks-capabilities"
      },
      "linkLabel2": "Capabilities",
      "aProps3": {
        "href": "/databricks-industries"
      },
      "linkLabel3": "Industry Solutions",
      "aProps4": {
        "href": "/databricks-expertise"
      },
      "linkLabel4": "Expertise and Accelerators",
      "navSpace2": "\n  "
    }
  },
  {
    "type": "text",
    "key": "space-4",
    "content": "\n  "
  },
  {
    "type": "PracticeSection",
    "key": "practice",
    "content": {
      "sectionProps": {
        "data-tone": "night",
        "className": "sec",
        "id": "practice",
        "aria-labelledby": "h-practice"
      },
      "sectionSpace": "\n    ",
      "divProps": {
        "className": "wrap"
      },
      "divSpace": "\n      ",
      "divProps2": {
        "className": "sec-head"
      },
      "divSpace2": "\n        ",
      "divProps3": {
        "className": "t"
      },
      "divSpace3": "\n          ",
      "h2Props": {
        "id": "h-practice"
      },
      "heading": "Databricks Expertise. Built Around Your Business.",
      "divSpace4": "\n        ",
      "divSpace5": "\n        ",
      "pProps": {
        "className": "lead"
      },
      "description": "Palni combines Databricks engineering, industry expertise, AI capabilities and proven\n          accelerators to solve complex enterprise data challenges.",
      "divSpace6": "\n      ",
      "divSpace7": "\n      ",
      "divProps4": {
        "className": "tiles four"
      },
      "featureCardVariant4Items": [
        {
          "key": "FeatureCardVariant4-72c308d6",
          "space": "",
          "content": {
            "aProps": {
              "className": "tile",
              "href": "/databricks-capabilities"
            },
            "aSpace": "\n          ",
            "figureProps": {
              "className": "tile-img"
            },
            "imgProps": {
              "src": "/assets/img/db-engineering.webp",
              "alt": "",
              "width": "344",
              "height": "344",
              "loading": "lazy",
              "decoding": "async"
            },
            "aSpace2": "\n          ",
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Data Engineering",
            "aSpace3": "\n          ",
            "pProps": {},
            "description": "Build scalable pipelines, modern lakehouse foundations and trusted data products.",
            "spanProps": {
              "className": "link more"
            },
            "label": "Learn more",
            "aSpace5": "\n        "
          }
        },
        {
          "key": "FeatureCardVariant4-3a362593",
          "space": "",
          "content": {
            "aProps": {
              "className": "tile",
              "href": "/databricks-industries"
            },
            "aSpace": "\n          ",
            "figureProps": {
              "className": "tile-img"
            },
            "imgProps": {
              "src": "/assets/img/db-industry.webp",
              "alt": "",
              "width": "344",
              "height": "344",
              "loading": "lazy",
              "decoding": "async"
            },
            "aSpace2": "\n          ",
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Industry Expertise",
            "aSpace3": "\n          ",
            "pProps": {},
            "description": "Apply data and AI to business priorities in selected industries.",
            "spanProps": {
              "className": "link more"
            },
            "label": "Learn more",
            "aSpace5": "\n        "
          }
        },
        {
          "key": "FeatureCardVariant4-ab3a8870",
          "space": "",
          "content": {
            "aProps": {
              "className": "tile",
              "href": "/databricks-capabilities#agentic"
            },
            "aSpace": "\n          ",
            "figureProps": {
              "className": "tile-img"
            },
            "imgProps": {
              "src": "/assets/img/db-ai-agentic.webp",
              "alt": "",
              "width": "344",
              "height": "344",
              "loading": "lazy",
              "decoding": "async"
            },
            "aSpace2": "\n          ",
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "AI and Agentic",
            "aSpace3": "\n          ",
            "pProps": {},
            "description": "Bring analytics, GenAI and agentic workflows closer to enterprise data.",
            "spanProps": {
              "className": "link more"
            },
            "label": "Learn more",
            "aSpace5": "\n        "
          }
        },
        {
          "key": "FeatureCardVariant4-854ad9bb",
          "space": "",
          "content": {
            "aProps": {
              "className": "tile",
              "href": "/databricks-expertise"
            },
            "aSpace": "\n          ",
            "figureProps": {
              "className": "tile-img"
            },
            "imgProps": {
              "src": "/assets/img/db-accelerators.webp",
              "alt": "",
              "width": "344",
              "height": "344",
              "loading": "lazy",
              "decoding": "async"
            },
            "aSpace2": "\n          ",
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Accelerators",
            "aSpace3": "\n          ",
            "pProps": {},
            "description": "Use proven components to reduce repeated effort where they fit the problem.",
            "spanProps": {
              "className": "link more"
            },
            "label": "Learn more",
            "aSpace5": "\n        "
          }
        }
      ],
      "divSpace9": "\n    ",
      "sectionSpace2": "\n  "
    }
  },
  {
    "type": "text",
    "key": "space-6",
    "content": "\n  "
  },
  {
    "type": "JourneySection",
    "key": "journey",
    "content": {
      "sectionProps": {
        "data-tone": "db",
        "className": "sec",
        "id": "journey",
        "aria-labelledby": "h-journey"
      },
      "sectionSpace": "\n    ",
      "divProps": {
        "className": "wrap"
      },
      "divSpace": "\n      ",
      "divProps2": {
        "className": "sec-head"
      },
      "divSpace2": "\n        ",
      "divProps3": {
        "className": "t"
      },
      "divSpace3": "\n          ",
      "h2Props": {
        "id": "h-journey"
      },
      "heading": "One Databricks Partner. From Strategy to Production AI.",
      "divSpace4": "\n        ",
      "divSpace5": "\n        ",
      "pProps": {
        "className": "lead"
      },
      "description": "Connect strategy, engineering, governance and operations in one practical delivery path.",
      "divSpace6": "\n      ",
      "divSpace7": "\n      ",
      "divProps4": {
        "className": "panel"
      },
      "divSpace8": "\n        ",
      "divProps5": {
        "className": "grid6"
      },
      "divSpace9": "\n          ",
      "divProps6": {},
      "spanProps": {
        "className": "icb sm"
      },
      "svgProps": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "svgSpace": "\n                ",
      "pathProps": {
        "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M15.5 8.5l-2 5-5 2 2-5z"
      },
      "svgSpace2": "\n              ",
      "spanProps2": {
        "className": "ph"
      },
      "label": "Stage 1 of 6",
      "divSpace12": "\n            ",
      "h3Props": {},
      "cardTitle": "Advisory and Strategy",
      "divSpace13": "\n            ",
      "pProps2": {},
      "description2": "Define the roadmap, architecture and business case.",
      "divSpace14": "\n          ",
      "divSpace15": "\n          ",
      "divProps7": {},
      "spanProps3": {
        "className": "icb sm"
      },
      "svgProps2": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "svgSpace3": "\n                ",
      "pathProps2": {
        "d": "M4 8h14l-3-3 M20 16H6l3 3"
      },
      "svgSpace4": "\n              ",
      "spanProps4": {
        "className": "ph"
      },
      "label2": "Stage 2 of 6",
      "divSpace18": "\n            ",
      "h3Props2": {},
      "cardTitle2": "Modernisation and Migration",
      "divSpace19": "\n            ",
      "pProps3": {},
      "description3": "Move legacy workloads to Databricks with controlled conversion and validation.",
      "divSpace20": "\n          ",
      "divSpace21": "\n          ",
      "divProps8": {},
      "spanProps5": {
        "className": "icb sm"
      },
      "svgProps3": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "svgSpace5": "\n                ",
      "pathProps3": {
        "d": "M12 3l9 5-9 5-9-5z M3 12.5l9 5 9-5 M3 17l9 5 9-5"
      },
      "svgSpace6": "\n              ",
      "spanProps6": {
        "className": "ph"
      },
      "label3": "Stage 3 of 6",
      "divSpace24": "\n            ",
      "h3Props3": {},
      "cardTitle3": "Data Engineering",
      "divSpace25": "\n            ",
      "pProps4": {},
      "description4": "Build scalable pipelines and trusted data products.",
      "divSpace26": "\n          ",
      "divSpace27": "\n          ",
      "divProps9": {},
      "spanProps7": {
        "className": "icb sm"
      },
      "svgProps4": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "svgSpace7": "\n                ",
      "pathProps4": {
        "d": "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"
      },
      "svgSpace8": "\n              ",
      "spanProps8": {
        "className": "ph"
      },
      "label4": "Stage 4 of 6",
      "divSpace30": "\n            ",
      "h3Props4": {},
      "cardTitle4": "Governance and Security",
      "divSpace31": "\n            ",
      "pProps5": {},
      "description5": "Establish data quality, lineage, access and governance.",
      "divSpace32": "\n          ",
      "divSpace33": "\n          ",
      "divProps10": {},
      "spanProps9": {
        "className": "icb sm"
      },
      "svgProps5": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "svgSpace9": "\n                ",
      "pathProps5": {
        "d": "M4 20h16 M7 16v-5 M12 16V7 M17 16v-8"
      },
      "svgSpace10": "\n              ",
      "spanProps10": {
        "className": "ph"
      },
      "label5": "Stage 5 of 6",
      "divSpace36": "\n            ",
      "h3Props5": {},
      "cardTitle5": "Analytics and AI",
      "divSpace37": "\n            ",
      "pProps6": {},
      "description6": "Turn governed data into BI, Genie, GenAI, retrieval augmented generation and AI applications.",
      "divSpace38": "\n          ",
      "divSpace39": "\n          ",
      "divProps11": {},
      "spanProps11": {
        "className": "icb sm"
      },
      "svgProps6": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "svgSpace11": "\n                ",
      "pathProps6": {
        "d": "M21 12a9 9 0 1 1-3-6.7 M21 4v5h-5"
      },
      "svgSpace12": "\n              ",
      "spanProps12": {
        "className": "ph"
      },
      "label6": "Stage 6 of 6",
      "divSpace42": "\n            ",
      "h3Props6": {},
      "cardTitle6": "Operate and Optimise",
      "divSpace43": "\n            ",
      "pProps7": {},
      "description7": "Improve reliability, performance, cost and scale.",
      "divSpace44": "\n          ",
      "divSpace45": "\n        ",
      "divSpace46": "\n      ",
      "divSpace47": "\n    ",
      "sectionSpace2": "\n  "
    }
  },
  {
    "type": "text",
    "key": "space-8",
    "content": "\n  "
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
      "sectionSpace": "\n    ",
      "divProps": {
        "className": "wrap"
      },
      "divSpace": "\n      ",
      "contactBand": {
        "divProps": {
          "className": "band"
        },
        "spanProps": {
          "className": "band-glow",
          "aria-hidden": "true"
        },
        "divSpace2": "\n        ",
        "divProps2": {
          "className": "band-t"
        },
        "divSpace3": "\n          ",
        "h2Props": {
          "id": "h-talk"
        },
        "heading": "Let's Talk Databricks",
        "divSpace4": "\n          ",
        "pProps": {},
        "description": "Tell us where your data platform stands today. We will help you plan the next step.",
        "divSpace5": "\n        ",
        "aProps": {
          "className": "btn btn-primary",
          "href": "/contact#databricks"
        },
        "linkLabel": "Talk to a Databricks Expert ",
        "svgProps": {
          "viewBox": "0 0 14 14",
          "aria-hidden": "true"
        },
        "svgSpace": "\n            ",
        "pathProps": {
          "d": "M4 10L10 4M5 4h5v5",
          "fill": "none",
          "stroke": "currentColor",
          "strokeWidth": "1.4"
        },
        "svgSpace2": "\n          ",
        "divSpace7": "\n      "
      },
      "divSpace2": "\n    ",
      "sectionSpace2": "\n  "
    }
  },
  {
    "type": "text",
    "key": "space-10",
    "content": "\n  "
  },
  {
    "type": "IntelligenceSection",
    "key": "intelligence",
    "content": {
      "sectionProps": {
        "data-tone": "db",
        "className": "sec",
        "id": "intelligence",
        "aria-labelledby": "h-intelligence"
      },
      "sectionSpace": "\n    ",
      "divProps": {
        "className": "wrap"
      },
      "divSpace": "\n      ",
      "divProps2": {
        "className": "sec-head"
      },
      "divSpace2": "\n        ",
      "divProps3": {
        "className": "t"
      },
      "divSpace3": "\n          ",
      "h2Props": {
        "id": "h-intelligence"
      },
      "heading": "From Modern Data to Enterprise Intelligence",
      "divSpace4": "\n        ",
      "divSpace5": "\n        ",
      "pProps": {
        "className": "lead"
      },
      "description": "Connect fragmented data, modernise critical platforms and put trusted intelligence into the\n          hands of the people who need it.",
      "divSpace6": "\n      ",
      "divSpace7": "\n      ",
      "divProps4": {
        "className": "stages"
      },
      "modernisationStageItems": [
        {
          "key": "ModernisationStage-bf37ee66",
          "space": "\n        ",
          "content": {
            "articleProps": {
              "className": "stage",
              "style": {
                "--i": "0"
              }
            },
            "articleSpace": "\n          ",
            "divProps": {
              "className": "txt"
            },
            "spanProps": {
              "className": "idx"
            },
            "label": "01",
            "divSpace2": "\n            ",
            "h3Props": {
              "className": "h3d"
            },
            "cardTitle": "Modernize: Move Beyond Legacy Data",
            "divSpace3": "\n            ",
            "pProps": {},
            "description": "Migrate complex platforms and workloads to Databricks while preserving business logic, data quality and\n              confidence in the results.",
            "divSpace4": "\n          ",
            "articleSpace2": "\n          ",
            "figureProps": {
              "className": "st-art",
              "aria-hidden": "true"
            },
            "iProps": {
              "className": "st-glow"
            },
            "imgProps": {
              "className": "st-img",
              "src": "/assets/img/moderniz-1.webp",
              "alt": "",
              "width": "460",
              "height": "452",
              "loading": "lazy",
              "decoding": "async"
            },
            "figureSpace3": "\n          ",
            "articleSpace3": "\n        "
          }
        },
        {
          "key": "ModernisationStage-de880bf3",
          "space": "\n        ",
          "content": {
            "articleProps": {
              "className": "stage",
              "style": {
                "--i": "1"
              }
            },
            "articleSpace": "\n          ",
            "divProps": {
              "className": "txt"
            },
            "spanProps": {
              "className": "idx"
            },
            "label": "02",
            "divSpace2": "\n            ",
            "h3Props": {
              "className": "h3d"
            },
            "cardTitle": "Trust: Build Confidence in Enterprise Data",
            "divSpace3": "\n            ",
            "pProps": {},
            "description": "Unify, reconcile and govern enterprise data so teams and AI agents can work from trusted information with\n              the controls and lineage the business requires.",
            "divSpace4": "\n          ",
            "articleSpace2": "\n          ",
            "figureProps": {
              "className": "st-art",
              "aria-hidden": "true"
            },
            "iProps": {
              "className": "st-glow"
            },
            "imgProps": {
              "className": "st-img",
              "src": "/assets/img/moderniz-2.webp",
              "alt": "",
              "width": "460",
              "height": "452",
              "loading": "lazy",
              "decoding": "async"
            },
            "figureSpace3": "\n          ",
            "articleSpace3": "\n        "
          }
        },
        {
          "key": "ModernisationStage-6b666525",
          "space": "\n        ",
          "content": {
            "articleProps": {
              "className": "stage",
              "style": {
                "--i": "2"
              }
            },
            "articleSpace": "\n          ",
            "divProps": {
              "className": "txt"
            },
            "spanProps": {
              "className": "idx"
            },
            "label": "03",
            "divSpace2": "\n            ",
            "h3Props": {
              "className": "h3d"
            },
            "cardTitle": "Intelligence: Put AI to Work on Your Data",
            "divSpace3": "\n            ",
            "pProps": {},
            "description": "Bring governed analytics, GenAI, conversational experiences and AI agents together with enterprise\n              context to deliver useful answers, applications and actions.",
            "divSpace4": "\n          ",
            "articleSpace2": "\n          ",
            "figureProps": {
              "className": "st-art",
              "aria-hidden": "true"
            },
            "iProps": {
              "className": "st-glow"
            },
            "imgProps": {
              "className": "st-img",
              "src": "/assets/img/moderniz-3.webp",
              "alt": "",
              "width": "460",
              "height": "452",
              "loading": "lazy",
              "decoding": "async"
            },
            "figureSpace3": "\n          ",
            "articleSpace3": "\n        "
          }
        }
      ],
      "divSpace8": "\n      ",
      "divSpace9": "\n    ",
      "sectionSpace2": "\n  "
    }
  },
  {
    "type": "text",
    "key": "space-12",
    "content": "\n  "
  },
  {
    "type": "DiscoveryCTA",
    "key": "final",
    "content": {
      "sectionProps": {
        "data-tone": "night",
        "className": "cta",
        "id": "final",
        "aria-labelledby": "h-final"
      },
      "sectionSpace": "\n    ",
      "divProps": {
        "className": "wrap"
      },
      "divSpace": "\n      ",
      "divProps2": {
        "className": "cta-panel"
      },
      "canvasProps": {
        "data-field": "strata",
        "data-colors": "db",
        "data-density": ".6",
        "data-fade": ".06",
        "aria-hidden": "true"
      },
      "divSpace3": "\n        ",
      "divProps3": {
        "className": "cta-grid"
      },
      "divSpace4": "\n          ",
      "divProps4": {
        "className": "cta-main"
      },
      "divSpace5": "\n            ",
      "h2Props": {
        "id": "h-final"
      },
      "heading": "Put Our Databricks Expertise to Work",
      "divSpace6": "\n            ",
      "pProps": {
        "className": "lead"
      },
      "description": "Talk to our Databricks team about your data, modernisation or AI priorities. We will help you identify a practical starting point.",
      "divSpace7": "\n            ",
      "divProps5": {
        "className": "btns"
      },
      "aProps": {
        "className": "btn btn-primary",
        "href": "/contact#databricks"
      },
      "linkLabel": "Talk to a Databricks Expert",
      "aProps2": {
        "className": "btn btn-ghost",
        "href": "/use-cases#databricks"
      },
      "linkLabel2": "View Use Cases",
      "divSpace11": "\n          ",
      "divSpace12": "\n          ",
      "discoverySteps": {
        "olProps": {
          "className": "cta-steps",
          "aria-label": "What happens next"
        },
        "olSpace": "\n            ",
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
        "svgSpace": "\n                  ",
        "pathProps": {
          "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M15.5 8.5l-2 5-5 2 2-5z"
        },
        "svgSpace2": "\n                ",
        "liSpace2": "\n              ",
        "divProps": {},
        "bProps": {},
        "label": "Share your priority",
        "spanProps2": {},
        "label2": "Tell us the challenge, platform or data priority you are working\n                  on.",
        "liSpace3": "\n            ",
        "olSpace2": "\n            ",
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
        "svgSpace3": "\n                  ",
        "pathProps2": {
          "d": "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z M2.5 20a6.5 6.5 0 0 1 13 0 M16 4.6a3.5 3.5 0 0 1 0 6.8 M18 14.2a6 6 0 0 1 3.5 5.8"
        },
        "svgSpace4": "\n                ",
        "liSpace5": "\n              ",
        "divProps2": {},
        "bProps2": {},
        "label3": "Meet a Databricks expert",
        "spanProps4": {},
        "label4": "A senior Palni expert reviews your current setup with\n                  you.",
        "liSpace6": "\n            ",
        "olSpace3": "\n            ",
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
        "svgSpace5": "\n                  ",
        "pathProps3": {
          "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z M12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
        },
        "svgSpace6": "\n                ",
        "liSpace8": "\n              ",
        "divProps3": {},
        "bProps3": {},
        "label5": "Agree a practical first step",
        "spanProps6": {},
        "label6": "Leave with a clear starting point you can act on.",
        "divSpace9": "\n              ",
        "liSpace9": "\n            ",
        "olSpace4": "\n          "
      },
      "divSpace13": "\n        ",
      "divSpace14": "\n        ",
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
        "svgSpace": "\n              ",
        "pathProps": {
          "d": "M3 5h18v14H3z M3.5 6l8.5 7 8.5-7"
        },
        "svgSpace2": "\n            ",
        "linkLabel": "sales@palni.com",
        "spanProps": {},
        "svgProps2": {
          "className": "ic",
          "viewBox": "0 0 24 24",
          "aria-hidden": "true",
          "focusable": "false"
        },
        "svgSpace3": "\n              ",
        "pathProps2": {
          "d": "M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"
        },
        "svgSpace4": "\n            ",
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
        "svgSpace5": "\n              ",
        "pathProps3": {
          "d": "M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
        },
        "svgSpace6": "\n            ",
        "linkLabel2": "8 offices across the USA and India"
      },
      "divSpace15": "\n      ",
      "divSpace16": "\n    ",
      "sectionSpace2": "\n  "
    }
  },
  {
    "type": "text",
    "key": "space-14",
    "content": "\n"
  }
]
}
