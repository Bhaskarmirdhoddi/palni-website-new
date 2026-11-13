import { servicePrinciples } from './servicePrinciples'
import { homeServiceIntro } from './homeServiceIntro'
import { chromeByPage } from './navigation'

// Local content preserved verbatim. Reorder sections here; templates contain no page copy.
export default {
  layout: "PageLayout",
  content: { ...chromeByPage["home"], ...{
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
    "type": "HeroSection",
    "key": "home-HeroSection-1",
    "content": {
      "sectionProps": {
        "data-tone": "brand",
        "className": "hero",
        "aria-labelledby": "h1",
        "data-scene-host": ""
      },
      "canvasProps": {
        "className": "field",
        "data-field": "confluence",
        "data-colors": "sf,sn,db",
        "data-density": "1",
        "data-interactive": "true",
        "aria-hidden": "true"
      },
      "sectionSpace2": "\n    ",
      "divProps": {
        "className": "wrap"
      },
      "divSpace": "\n      ",
      "h1Props": {
        "id": "h1",
        "className": "home"
      },
      "spanProps": {
        "className": "w"
      },
      "spanProps2": {
        "style": {
          "--i": "0"
        }
      },
      "label": "Scale ",
      "h1Space2": " ",
      "spanProps3": {
        "className": "w"
      },
      "spanProps4": {
        "style": {
          "--i": "1"
        }
      },
      "label2": "Enterprise ",
      "h1Space3": " ",
      "spanProps5": {
        "className": "w"
      },
      "spanProps6": {
        "style": {
          "--i": "2"
        }
      },
      "label3": "Operations ",
      "brProps": {},
      "h1Space5": "\n        ",
      "spanProps7": {
        "className": "w"
      },
      "spanProps8": {
        "style": {
          "--i": "3"
        }
      },
      "label4": "with ",
      "h1Space6": " ",
      "spanProps9": {
        "className": "w"
      },
      "spanProps10": {
        "style": {
          "--i": "4"
        }
      },
      "label5": "Salesforce,",
      "h1Space7": " ",
      "spanProps11": {
        "className": "w"
      },
      "spanProps12": {
        "style": {
          "--i": "5"
        }
      },
      "label6": "ServiceNow, ",
      "h1Space8": "\n        ",
      "brProps2": {},
      "spanProps13": {
        "className": "w"
      },
      "spanProps14": {
        "style": {
          "--i": "6"
        }
      },
      "label7": "Data & AI",
      "divSpace2": "\n      ",
      "pProps": {
        "className": "lead"
      },
      "description": "We help teams improve pipeline visibility, automate workflows, and scale operations — from\n        strategy through execution.\n      ",
      "divSpace3": "\n      ",
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
      "linkLabel2": "Explore Use Cases",
      "divSpace7": "\n    ",
      "sectionSpace3": "\n  "
    }
  },
  {
    "type": "text",
    "key": "space-2",
    "content": "\n\n  "
  },
  {
    "type": "TrustSection",
    "key": "trust",
    "content": {
      "sectionProps": {
        "data-tone": "night",
        "className": "sec tight trust-sec",
        "id": "trust",
        "aria-labelledby": "h-trust"
      },
      "sectionSpace": "\n    ",
      "divProps": {
        "className": "wrap trust-head"
      },
      "divSpace": "\n      ",
      "h2Props": {
        "className": "who",
        "id": "h-trust"
      },
      "heading": "Trusted by Enterprise Teams",
      "divSpace2": "\n      ",
      "pProps": {
        "className": "muted small"
      },
      "description": "We work with enterprise teams across industries to improve the systems, workflows and data\n        that support their business.",
      "divSpace3": "\n    ",
      "sectionSpace2": "\n    ",
      "divProps2": {
        "className": "logo-marquee"
      },
      "divSpace4": "\n      ",
      "ulProps": {
        "className": "lm-track",
        "aria-label": "Clients"
      },
      "ulSpace": "\n        ",
      "liProps": {},
      "imgProps": {
        "src": "/assets/img/logos/abbott.png",
        "alt": "Abbott",
        "decoding": "async"
      },
      "ulSpace2": "\n        ",
      "liProps2": {},
      "imgProps2": {
        "src": "/assets/img/logos/amdocs.png",
        "alt": "Amdocs",
        "decoding": "async"
      },
      "ulSpace3": "\n        ",
      "liProps3": {},
      "imgProps3": {
        "src": "/assets/img/logos/amerisourcebergen.png",
        "alt": "AmerisourceBergen",
        "decoding": "async"
      },
      "ulSpace4": "\n        ",
      "liProps4": {},
      "imgProps4": {
        "src": "/assets/img/logos/dycom.png",
        "alt": "Dycom",
        "decoding": "async"
      },
      "ulSpace5": "\n        ",
      "liProps5": {},
      "imgProps5": {
        "src": "/assets/img/logos/fundbox.png",
        "alt": "Fundbox",
        "decoding": "async"
      },
      "ulSpace6": "\n        ",
      "liProps6": {},
      "imgProps6": {
        "src": "/assets/img/logos/hastings.png",
        "alt": "Hastings Mutual",
        "decoding": "async"
      },
      "ulSpace7": "\n        ",
      "liProps7": {},
      "imgProps7": {
        "src": "/assets/img/logos/interstate-batteries.png",
        "alt": "Interstate Batteries",
        "decoding": "async"
      },
      "ulSpace8": "\n        ",
      "liProps8": {},
      "imgProps8": {
        "src": "/assets/img/logos/mastec.png",
        "alt": "MasTec",
        "decoding": "async"
      },
      "ulSpace9": "\n        ",
      "liProps9": {},
      "imgProps9": {
        "src": "/assets/img/logos/ziply-fiber.png",
        "alt": "Ziply Fiber",
        "decoding": "async"
      },
      "ulSpace10": "\n        ",
      "liProps10": {},
      "imgProps10": {
        "src": "/assets/img/logos/virta.png",
        "alt": "Virta",
        "decoding": "async"
      },
      "ulSpace11": "\n      ",
      "divSpace5": "\n      ",
      "ulProps2": {
        "className": "lm-track",
        "aria-hidden": "true"
      },
      "ulSpace12": "\n        ",
      "liProps11": {},
      "imgProps11": {
        "src": "/assets/img/logos/abbott.png",
        "alt": "",
        "decoding": "async"
      },
      "ulSpace13": "\n        ",
      "liProps12": {},
      "imgProps12": {
        "src": "/assets/img/logos/amdocs.png",
        "alt": "",
        "decoding": "async"
      },
      "ulSpace14": "\n        ",
      "liProps13": {},
      "imgProps13": {
        "src": "/assets/img/logos/amerisourcebergen.png",
        "alt": "",
        "decoding": "async"
      },
      "ulSpace15": "\n        ",
      "liProps14": {},
      "imgProps14": {
        "src": "/assets/img/logos/dycom.png",
        "alt": "",
        "decoding": "async"
      },
      "ulSpace16": "\n        ",
      "liProps15": {},
      "imgProps15": {
        "src": "/assets/img/logos/fundbox.png",
        "alt": "",
        "decoding": "async"
      },
      "ulSpace17": "\n        ",
      "liProps16": {},
      "imgProps16": {
        "src": "/assets/img/logos/hastings.png",
        "alt": "",
        "decoding": "async"
      },
      "ulSpace18": "\n        ",
      "liProps17": {},
      "imgProps17": {
        "src": "/assets/img/logos/interstate-batteries.png",
        "alt": "",
        "decoding": "async"
      },
      "ulSpace19": "\n        ",
      "liProps18": {},
      "imgProps18": {
        "src": "/assets/img/logos/mastec.png",
        "alt": "",
        "decoding": "async"
      },
      "ulSpace20": "\n        ",
      "liProps19": {},
      "imgProps19": {
        "src": "/assets/img/logos/ziply-fiber.png",
        "alt": "",
        "decoding": "async"
      },
      "ulSpace21": "\n        ",
      "liProps20": {},
      "imgProps20": {
        "src": "/assets/img/logos/virta.png",
        "alt": "",
        "decoding": "async"
      },
      "ulSpace22": "\n      ",
      "divSpace6": "\n    ",
      "sectionSpace3": "\n  "
    }
  },
  {
    "type": "text",
    "key": "space-4",
    "content": "\n  "
  },
  {
    type: 'ServiceIntroSection',
    key: 'service-intro',
    content: homeServiceIntro,
  },
  {
    "type": "ServicesSection",
    "key": "services",
    "content": {
      "sectionProps": {
        "data-tone": "brand",
        "className": "sec",
        "id": "services",
        "aria-labelledby": "h-services"
      },
      "sectionSpace": "\n    ",
      "divProps": {
        "className": "wrap"
      },
      "divSpace": "\n      ",
      "divProps2": {
        "className": "services-head text-center"
      },
      "divSpace2": "\n        ",
      "h2Props": {
        "id": "h-services"
      },
      "heading": "Enterprise transformation rarely lives in ",
      "brProps": {},
      "heading2": "one platform.",
      "divSpace3": "\n        ",
      "pProps": {
        "className": "d-services muted"
      },
      "description": "Palni brings applications, data and AI together so information flows, workflows move\n          end-to-end, and AI works on trusted enterprise context.",
      "divSpace4": "\n      ",
      "divSpace5": "\n      ",
      "divProps3": {
        "className": "currents"
      },
      "aProps": {
        "className": "current c-salesforce",
        "href": "/salesforce",
        "data-scene-host": ""
      },
      "canvasProps": {
        "data-scene": "orbit",
        "data-compact": "1",
        "aria-hidden": "true"
      },
      "aSpace2": "\n          ",
      "divProps4": {
        "className": "body"
      },
      "divSpace7": "\n            ",
      "h3Props": {
        "className": "name"
      },
      "cardTitle": "Salesforce",
      "divSpace8": "\n            ",
      "pProps2": {},
      "description2": "Improve pipeline visibility, simplify quoting and connect sales and service workflows. Palni helps shape\n              Salesforce around the way your teams sell, serve and grow.",
      "spanProps": {
        "className": "link",
        "style": {
          "--c": "var(--sf)"
        }
      },
      "label": "Explore Salesforce",
      "divSpace10": "\n          ",
      "aSpace3": "\n        ",
      "aProps2": {
        "className": "current c-servicenow",
        "href": "/servicenow",
        "data-scene-host": ""
      },
      "canvasProps2": {
        "data-scene": "grid",
        "data-compact": "1",
        "aria-hidden": "true"
      },
      "aSpace5": "\n          ",
      "divProps5": {
        "className": "body"
      },
      "divSpace12": "\n            ",
      "h3Props2": {
        "className": "name"
      },
      "cardTitle2": "ServiceNow",
      "divSpace13": "\n            ",
      "pProps3": {},
      "description3": "Improve service delivery, reduce manual effort and create more consistent workflows across IT and\n              enterprise operations.",
      "spanProps2": {
        "className": "link",
        "style": {
          "--c": "var(--sn)"
        }
      },
      "label2": "Explore ServiceNow",
      "divSpace15": "\n          ",
      "aSpace6": "\n        ",
      "aProps3": {
        "className": "current c-databricks",
        "href": "/databricks",
        "data-scene-host": ""
      },
      "canvasProps3": {
        "data-scene": "lake",
        "data-compact": "1",
        "aria-hidden": "true"
      },
      "aSpace8": "\n          ",
      "divProps6": {
        "className": "body"
      },
      "divSpace17": "\n            ",
      "h3Props3": {
        "className": "name"
      },
      "cardTitle3": "Databricks",
      "divSpace18": "\n            ",
      "pProps4": {},
      "description4": "Modernise data foundations, improve trust in enterprise information and make analytics and AI more useful\n              to the business.",
      "spanProps3": {
        "className": "link",
        "style": {
          "--c": "var(--db)"
        }
      },
      "label3": "Explore Databricks",
      "divSpace20": "\n          ",
      "aSpace9": "\n        ",
      "divSpace22": "\n      ",
      "divProps7": {
        "className": "cross-platform",
        "role": "group",
        "aria-labelledby": "h-cross-platform"
      },
      "divSpace23": "\n        ",
      "divProps8": {
        "className": "sec-head"
      },
      "divSpace24": "\n          ",
      "h3Props4": {
        "id": "h-cross-platform"
      },
      "cardTitle4": "Cross-platform Solutions",
      "divSpace25": "\n          ",
      "pProps5": {
        "className": "lead"
      },
      "description5": "Connect data, automation and customer experiences across your enterprise platforms.",
      "divSpace26": "\n        ",
      "divSpace27": "\n        ",
      "divProps9": {
        "className": "currents"
      },
      "divSpace28": "\n          ",
      "aProps4": {
        "className": "current c-salesforce",
        "href": "/data-engineering"
      },
      "aSpace10": "\n            ",
      "canvasProps4": {
        "data-field": "strata",
        "data-colors": "sf,brand",
        "data-density": ".6",
        "aria-hidden": "true"
      },
      "aSpace11": "\n            ",
      "divProps10": {
        "className": "body"
      },
      "divSpace29": "\n              ",
      "h4Props": {
        "className": "name"
      },
      "text": "Data Engineering",
      "divSpace30": "\n              ",
      "pProps6": {},
      "description6": "Connect fragmented data, build reliable pipelines and create trusted, AI-ready foundations for\n                analytics and better business decisions.",
      "divSpace31": "\n              ",
      "spanProps4": {
        "className": "link",
        "style": {
          "--c": "var(--sf)"
        }
      },
      "label4": "Explore Data Engineering",
      "divSpace32": "\n            ",
      "aSpace12": "\n          ",
      "divSpace33": "\n          ",
      "aProps5": {
        "className": "current c-brand",
        "href": "/ai-automation"
      },
      "aSpace13": "\n            ",
      "canvasProps5": {
        "data-field": "network",
        "data-colors": "brand,sf",
        "data-density": ".6",
        "aria-hidden": "true"
      },
      "aSpace14": "\n            ",
      "divProps11": {
        "className": "body"
      },
      "divSpace34": "\n              ",
      "h4Props2": {
        "className": "name"
      },
      "text2": "AI & Automation",
      "divSpace35": "\n              ",
      "pProps7": {},
      "description7": "Bring enterprise knowledge, intelligent agents and workflow automation together to reduce manual effort\n                and turn AI into practical business outcomes.",
      "divSpace36": "\n              ",
      "spanProps5": {
        "className": "link",
        "style": {
          "--c": "var(--brand)"
        }
      },
      "label5": "Explore AI & Automation",
      "divSpace37": "\n            ",
      "aSpace15": "\n          ",
      "divSpace38": "\n          ",
      "aProps6": {
        "className": "current c-servicenow",
        "href": "/cx-solutions"
      },
      "aSpace16": "\n            ",
      "canvasProps6": {
        "data-field": "lanes",
        "data-colors": "sn,brand",
        "data-density": ".6",
        "aria-hidden": "true"
      },
      "aSpace17": "\n            ",
      "divProps12": {
        "className": "body"
      },
      "divSpace39": "\n              ",
      "h4Props3": {
        "className": "name"
      },
      "text3": "CX Solutions",
      "divSpace40": "\n              ",
      "pProps8": {},
      "description8": "Connect customer journeys across channels and teams, improve support experiences and help people get\n                consistent, useful answers faster.",
      "divSpace41": "\n              ",
      "spanProps6": {
        "className": "link",
        "style": {
          "--c": "var(--sn)"
        }
      },
      "label6": "Explore CX Solutions",
      "divSpace42": "\n            ",
      "aSpace18": "\n          ",
      "divSpace43": "\n        ",
      "divSpace44": "\n      ",
      "divSpace45": "\n    ",
      "sectionSpace2": "\n  "
    }
  },
  {
    "type": "text",
    "key": "space-6",
    "content": "\n  "
  },
  // {
  //   "type": "WhySection",
  //   "key": "challenges",
  //   "content": {
  //     "sectionProps": {
  //       "data-tone": "sf",
  //       "className": "sec",
  //       "id": "challenges",
  //       "aria-labelledby": "h-challenges"
  //     },
  //     "sectionSpace": "\n    ",
  //     "divProps": {
  //       "className": "wrap"
  //     },
  //     "divSpace": "\n      ",
  //     "divProps2": {
  //       "className": "sec-head"
  //     },
  //     "divSpace2": "\n        ",
  //     "divProps3": {
  //       "className": "t"
  //     },
  //     "divSpace3": "\n          ",
  //     "h2Props": {
  //       "id": "h-challenges"
  //     },
  //     "heading": "Removing Friction from Enterprise Operations",
  //     "divSpace4": "\n        ",
  //     "divSpace5": "\n        ",
  //     "pProps": {
  //       "className": "lead"
  //     },
  //     "description": "Fragmented data, cross-platform workflows and expanding technology stacks make enterprise change\n          harder than it needs to be. Palni helps reduce that complexity by creating greater consistency across systems,\n          workflows and data—so the business can operate more effectively and adopt AI with confidence.",
  //     "divSpace6": "\n      ",
  //     "divSpace7": "\n      ",
  //     "divProps4": {
  //       "className": "ledger"
  //     },
  //     "featureCardItems": [
  //       {
  //         "key": "FeatureCard-5476d725",
  //         "space": "\n        ",
  //         "content": {
  //           "divProps": {
  //             "className": "row c-salesforce"
  //           },
  //           "spanProps": {
  //             "className": "icb"
  //           },
  //           "svgProps": {
  //             "className": "ic",
  //             "viewBox": "0 0 24 24",
  //             "aria-hidden": "true",
  //             "focusable": "false"
  //           },
  //           "svgSpace": "\n              ",
  //           "pathProps": {
  //             "d": "M3 5h18l-7 8v6l-4 2v-8z"
  //           },
  //           "svgSpace2": "\n            ",
  //           "divSpace2": "\n          ",
  //           "h3Props": {
  //             "className": "h3d"
  //           },
  //           "cardTitle": "Fragmented Data",
  //           "divSpace3": "\n          ",
  //           "pProps": {},
  //           "description": "Critical data sits across applications, platforms and teams, making it difficult to access, reconcile and\n            trust. We connect and organize enterprise data so it can reliably support operations, analytics and AI.",
  //           "divSpace4": "\n        "
  //         }
  //       },
  //       {
  //         "key": "FeatureCard-ebcf72a6",
  //         "space": "\n        ",
  //         "content": {
  //           "divProps": {
  //             "className": "row c-servicenow"
  //           },
  //           "spanProps": {
  //             "className": "icb"
  //           },
  //           "svgProps": {
  //             "className": "ic",
  //             "viewBox": "0 0 24 24",
  //             "aria-hidden": "true",
  //             "focusable": "false"
  //           },
  //           "svgSpace": "\n              ",
  //           "pathProps": {
  //             "d": "M4 4h6v5H4z M14 15h6v5h-6z M7 9v4a2 2 0 0 0 2 2h5"
  //           },
  //           "svgSpace2": "\n            ",
  //           "divSpace2": "\n          ",
  //           "h3Props": {
  //             "className": "h3d"
  //           },
  //           "cardTitle": "Disconnected Workflows",
  //           "divSpace3": "\n          ",
  //           "pProps": {},
  //           "description": "Business processes often span Salesforce, ServiceNow, internal applications and external systems. We\n            connect those workflows end-to-end so information, decisions and actions move across the enterprise without\n            unnecessary manual handoffs.",
  //           "divSpace4": "\n        "
  //         }
  //       },
  //       {
  //         "key": "FeatureCard-985487d3",
  //         "space": "\n        ",
  //         "content": {
  //           "divProps": {
  //             "className": "row c-databricks"
  //           },
  //           "spanProps": {
  //             "className": "icb"
  //           },
  //           "svgProps": {
  //             "className": "ic",
  //             "viewBox": "0 0 24 24",
  //             "aria-hidden": "true",
  //             "focusable": "false"
  //           },
  //           "svgSpace": "\n              ",
  //           "pathProps": {
  //             "d": "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4"
  //           },
  //           "svgSpace2": "\n            ",
  //           "divSpace2": "\n          ",
  //           "h3Props": {
  //             "className": "h3d"
  //           },
  //           "cardTitle": "Scaling Complexity",
  //           "divSpace3": "\n          ",
  //           "pProps": {},
  //           "description": "As platforms, integrations and data volumes grow, complexity grows with them. We design architectures and\n            engineering foundations that remain reliable, maintainable and ready to evolve as the business scales.",
  //           "divSpace4": "\n        "
  //         }
  //       },
  //       {
  //         "key": "FeatureCard-77171070",
  //         "space": "\n        ",
  //         "content": {
  //           "divProps": {
  //             "className": "row c-databricks"
  //           },
  //           "spanProps": {
  //             "className": "icb"
  //           },
  //           "svgProps": {
  //             "className": "ic",
  //             "viewBox": "0 0 24 24",
  //             "aria-hidden": "true",
  //             "focusable": "false"
  //           },
  //           "svgSpace": "\n              ",
  //           "pathProps": {
  //             "d": "M12 3v3M12 18v3M3 12h3M18 12h3 M12 8.5l1.2 2.3 2.3 1.2-2.3 1.2L12 15.5l-1.2-2.3L8.5 12l2.3-1.2z M5.6 5.6l1.6 1.6 M16.8 16.8l1.6 1.6"
  //           },
  //           "svgSpace2": "\n            ",
  //           "divSpace2": "\n          ",
  //           "h3Props": {
  //             "className": "h3d"
  //           },
  //           "cardTitle": "AI Readiness",
  //           "divSpace3": "\n          ",
  //           "pProps": {},
  //           "description": "AI is only as reliable as the data, context and workflows behind it. We prepare enterprise environments for\n            AI by connecting trusted data, business context, applications and governed actions.",
  //           "divSpace4": "\n        "
  //         }
  //       }
  //     ],
  //     "divSpace8": "\n      ",
  //     "divSpace9": "\n    ",
  //     "sectionSpace2": "\n  "
  //   }
  // },
  {
    "type": "text",
    "key": "space-8",
    "content": "\n  "
  },
  {
    "type": "HowSection",
    "key": "how",
    "content": {
      "sectionProps": {
        "data-tone": "sn",
        "className": "sec",
        "id": "how",
        "aria-labelledby": "h-how"
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
        "id": "h-how"
      },
      "heading": "A Practical Path from Priority to Progress",
      "divSpace4": "\n        ",
      "divSpace5": "\n        ",
      "pProps": {
        "className": "lead"
      },
      "description": "We begin with the business priority, define a practical route forward, deliver working solutions\n          and improve them based on what the organisation needs next.",
      "divSpace6": "\n      ",
      "divSpace7": "\n      ",
      "processSteps": {
        "olProps": {
          "className": "steps",
          "style": {
            "listStyle": "none",
            "margin": "0",
            "padding": "0"
          }
        },
        "olSpace": "\n        ",
        "liProps": {
          "className": "step"
        },
        "spanProps": {
          "className": "n",
          "aria-hidden": "true"
        },
        "label": "1",
        "liSpace2": "\n          ",
        "h3Props": {},
        "cardTitle": "Align",
        "liSpace3": "\n          ",
        "pProps": {},
        "description": "Understand the objective, the existing environment and the change the business needs.",
        "liSpace4": "\n        ",
        "olSpace2": "\n        ",
        "liProps2": {
          "className": "step"
        },
        "spanProps2": {
          "className": "n",
          "aria-hidden": "true"
        },
        "label2": "2",
        "liSpace6": "\n          ",
        "h3Props2": {},
        "cardTitle2": "Execute",
        "liSpace7": "\n          ",
        "pProps2": {},
        "description2": "Turn the agreed priority into a focused solution with clear responsibilities and practical milestones.",
        "liSpace8": "\n        ",
        "olSpace3": "\n        ",
        "liProps3": {
          "className": "step"
        },
        "spanProps3": {
          "className": "n",
          "aria-hidden": "true"
        },
        "label3": "3",
        "liSpace10": "\n          ",
        "h3Props3": {},
        "cardTitle3": "Optimise",
        "liSpace11": "\n          ",
        "pProps3": {},
        "description3": "Review what is working, address friction and improve the solution.",
        "liSpace12": "\n        ",
        "olSpace4": "\n        ",
        "liProps4": {
          "className": "step"
        },
        "spanProps4": {
          "className": "n",
          "aria-hidden": "true"
        },
        "label4": "4",
        "liSpace14": "\n          ",
        "h3Props4": {},
        "cardTitle4": "Scale",
        "liSpace15": "\n          ",
        "pProps4": {},
        "description4": "Extend proven approaches where they create value across teams or operations.",
        "liSpace16": "\n        ",
        "olSpace5": "\n      "
      },
      "divSpace8": "\n    ",
      "sectionSpace2": "\n  "
    }
  },
  {
    "type": "text",
    "key": "space-10",
    "content": "\n  "
  },
  {
    "type": "ProofSection",
    "key": "proof",
    "content": {
      "sectionProps": {
        "data-tone": "db",
        "className": "sec slider-sec",
        "id": "proof",
        "aria-labelledby": "h-proof"
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
        "id": "h-proof"
      },
      "heading": "Real Problems. Useful Outcomes.",
      "divSpace4": "\n        ",
      "divSpace5": "\n        ",
      "pProps": {
        "className": "lead"
      },
      "description": "Explore examples of how Palni has applied enterprise platforms, data engineering and AI to\n          practical business challenges.",
      "divSpace6": "\n      ",
      "divSpace7": "\n    ",
      "sectionSpace2": "\n    ",
      "divProps4": {
        "className": "slider",
        "aria-roledescription": "carousel",
        "aria-label": "Real Problems. Useful Outcomes."
      },
      "divSpace8": "\n      ",
      "divProps5": {
        "className": "slides"
      },
      "divSpace9": "\n        ",
      "outcomeSlide": {
        "articleProps": {
          "className": "slide c-servicenow",
          "role": "group",
          "aria-roledescription": "slide",
          "aria-label": "1 of 3"
        },
        "articleSpace": "\n          ",
        "imgProps": {
          "className": "sl-bg",
          "src": "/assets/img/cs-sn-hardware.webp",
          "alt": "",
          "width": "1456",
          "height": "818",
          "loading": "lazy",
          "decoding": "async"
        },
        "articleSpace2": "\n          ",
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
        "label2": "25%",
        "divSpace3": "\n            ",
        "h3Props": {
          "className": "sl-t"
        },
        "cardTitle": "Reduction in Hardware Spend",
        "divSpace4": "\n            ",
        "pProps": {},
        "description": "25% lower hardware spend, zero audit findings and improved asset visibility.",
        "divSpace5": "\n            ",
        "spanProps3": {
          "className": "sl-tag"
        },
        "label3": "ServiceNow · IT Asset Management",
        "aProps": {
          "className": "link",
          "href": "/use-cases#servicenow"
        },
        "linkLabel": "Read the use case",
        "divSpace7": "\n          ",
        "articleSpace3": "\n        "
      },
      "divSpace10": "\n        ",
      "outcomeSlideVariant2": {
        "articleProps": {
          "className": "slide c-salesforce",
          "role": "group",
          "aria-roledescription": "slide",
          "aria-label": "2 of 3",
          "hidden": true
        },
        "articleSpace": "\n          ",
        "imgProps": {
          "className": "sl-bg",
          "src": "/assets/img/cs-sf-pipeline.webp",
          "alt": "",
          "width": "1456",
          "height": "818",
          "loading": "lazy",
          "decoding": "async"
        },
        "articleSpace2": "\n          ",
        "divProps": {
          "className": "wrap sl-body"
        },
        "spanProps": {
          "className": "sl-k"
        },
        "label": "Selected client outcome",
        "divSpace2": "\n            ",
        "h3Props": {
          "className": "sl-t"
        },
        "cardTitle": "Improved Pipeline Visibility and Sales Adoption",
        "divSpace3": "\n            ",
        "pProps": {},
        "description": "More consistent deal tracking, better pipeline visibility and less manual data entry.",
        "divSpace4": "\n            ",
        "spanProps2": {
          "className": "sl-tag"
        },
        "label2": "Salesforce · Sales Cloud",
        "aProps": {
          "className": "link",
          "href": "/use-cases#salesforce"
        },
        "linkLabel": "Read the\n              use case",
        "divSpace6": "\n          ",
        "articleSpace3": "\n        "
      },
      "divSpace11": "\n        ",
      "outcomeSlide2": {
        "articleProps": {
          "className": "slide c-databricks",
          "role": "group",
          "aria-roledescription": "slide",
          "aria-label": "3 of 3",
          "hidden": true
        },
        "articleSpace": "\n          ",
        "imgProps": {
          "className": "sl-bg",
          "src": "/assets/img/cs-de-realtime.webp",
          "alt": "",
          "width": "1456",
          "height": "818",
          "loading": "lazy",
          "decoding": "async"
        },
        "articleSpace2": "\n          ",
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
        "divSpace3": "\n            ",
        "h3Props": {
          "className": "sl-t"
        },
        "cardTitle": "Increase in Near Real Time Data Availability",
        "divSpace4": "\n            ",
        "pProps": {},
        "description": "Improved data trust, process efficiency and ELT savings.",
        "divSpace5": "\n            ",
        "spanProps3": {
          "className": "sl-tag"
        },
        "label3": "Databricks · Lakehouse migration",
        "aProps": {
          "className": "link",
          "href": "/use-cases#databricks"
        },
        "linkLabel": "Read the use case",
        "divSpace7": "\n          ",
        "articleSpace3": "\n        "
      },
      "divSpace12": "\n      ",
      "divSpace13": "\n      ",
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
      "svgSpace": "\n            ",
      "pathProps": {
        "d": "M10 3L5 8l5 5",
        "fill": "none",
        "stroke": "currentColor",
        "strokeWidth": "1.6"
      },
      "svgSpace2": "\n          ",
      "buttonProps2": {
        "type": "button",
        "className": "sl-arrow next",
        "aria-label": "Next outcome"
      },
      "svgProps2": {
        "viewBox": "0 0 16 16",
        "aria-hidden": "true"
      },
      "svgSpace3": "\n            ",
      "pathProps2": {
        "d": "M6 3l5 5-5 5",
        "fill": "none",
        "stroke": "currentColor",
        "strokeWidth": "1.6"
      },
      "svgSpace4": "\n          ",
      "divSpace16": "\n        ",
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
      "label2": " / 3",
      "divSpace22": "\n      ",
      "divSpace23": "\n    ",
      "sectionSpace3": "\n    ",
      "divProps8": {
        "className": "wrap",
        "style": {
          "marginTop": "var(--s6)"
        }
      },
      "divSpace24": "\n      ",
      "divProps9": {
        "className": "btns"
      },
      "aProps": {
        "className": "btn btn-ghost",
        "href": "/use-cases"
      },
      "linkLabel": "View All Use Cases",
      "divSpace27": "\n    ",
      "sectionSpace4": "\n  "
    }
  },
  {
    "type": "text",
    "key": "space-12",
    "content": "\n  "
  },
  {
    "type": "WhySection",
    "key": "why",
    "content": {
      "sectionProps": {
        "data-tone": "brand",
        "className": "sec",
        "id": "why",
        "aria-labelledby": "h-why"
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
        "id": "h-why"
      },
      "heading": "Beyond the Platform Boundary",
      "divSpace4": "\n        ",
      "divSpace5": "\n        ",
      "pProps": {
        "className": "lead"
      },
      "description": "The hardest enterprise problems often live in the gaps—between systems, teams and decisions.\n          Palni has the depth within platforms and the breadth to work across them.",
      "divSpace6": "\n      ",
      "divSpace7": "\n      ",
      "divProps4": {
        "className": "quad"
      },
      "featureCardItems": servicePrinciples,
      "divSpace8": "\n      ",
      "divSpace9": "\n    ",
      "sectionSpace2": "\n  "
    }
  },
  {
    "type": "text",
    "key": "space-14",
    "content": "\n  "
  },
  {
    "type": "CareersSection",
    "key": "careers",
    "content": {
      "sectionProps": {
        "data-tone": "night",
        "className": "imgband",
        "id": "careers",
        "aria-labelledby": "h-careers"
      },
      "imgProps": {
        "className": "ib-bg",
        "src": "/assets/img/career-hands.webp",
        "alt": "",
        "width": "1456",
        "height": "492",
        "loading": "lazy",
        "decoding": "async"
      },
      "sectionSpace2": "\n    ",
      "divProps": {
        "className": "ib-scrim"
      },
      "sectionSpace3": "\n    ",
      "divProps2": {
        "className": "wrap ib-body"
      },
      "divSpace2": "\n      ",
      "h2Props": {
        "id": "h-careers"
      },
      "heading": "Build What Comes Next with Palni",
      "divSpace3": "\n      ",
      "pProps": {
        "className": "lead"
      },
      "description": "Work with people who value collaboration, new ideas, learning and the opportunity to solve\n        practical enterprise challenges.",
      "divSpace4": "\n      ",
      "divProps3": {
        "className": "btns"
      },
      "aProps": {
        "className": "btn btn-primary",
        "href": "/careers"
      },
      "linkLabel": "Explore Careers",
      "divSpace7": "\n    ",
      "sectionSpace4": "\n  "
    }
  },
  {
    "type": "text",
    "key": "space-16",
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
        "data-field": "confluence",
        "data-colors": "sf,sn,db",
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
      "heading": "What Would You Like to Improve?",
      "divSpace6": "\n            ",
      "pProps": {
        "className": "lead"
      },
      "description": "Tell us about the business challenge, platform or data priority you are working on. We will\n              help identify a practical place to start.",
      "divSpace7": "\n            ",
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
        "label3": "Meet a platform expert",
        "spanProps4": {},
        "label4": "A senior Palni expert reviews your current setup with you.",
        "divSpace6": "\n              ",
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
    "key": "space-18",
    "content": "\n"
  }
]
}
