import { chromeByPage } from './navigation'

// Local content preserved verbatim. Reorder sections here; templates contain no page copy.
export default {
  layout: "PageLayout",
  content: { ...chromeByPage["databricks-expertise"], ...{
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
    "type": "HeroSubHasSceneSection",
    "key": "databricks-expertise-HeroSubHasSceneSection-1",
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
      "sectionSpace2": "\n",
      "divProps": {
        "className": "wrap"
      },
      "breadcrumbsVariant3": {
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
        "aProps2": {
          "href": "/databricks"
        },
        "linkLabel2": "Databricks",
        "spanProps4": {
          "aria-hidden": "true"
        },
        "label4": "/",
        "spanProps5": {
          "aria-current": "page"
        },
        "label5": "Expertise and Accelerators"
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
      "label": "Deep",
      "h1Space2": " ",
      "spanProps3": {
        "className": "w"
      },
      "spanProps4": {
        "style": {
          "--i": "1"
        }
      },
      "label2": "Databricks",
      "h1Space3": " ",
      "spanProps5": {
        "className": "w"
      },
      "spanProps6": {
        "style": {
          "--i": "2"
        }
      },
      "label3": "Expertise",
      "h1Space4": " ",
      "spanProps7": {
        "className": "w"
      },
      "spanProps8": {
        "style": {
          "--i": "3"
        }
      },
      "label4": "Built",
      "h1Space5": " ",
      "spanProps9": {
        "className": "w"
      },
      "spanProps10": {
        "style": {
          "--i": "4"
        }
      },
      "label5": "for",
      "h1Space6": " ",
      "spanProps11": {
        "className": "w"
      },
      "spanProps12": {
        "style": {
          "--i": "5"
        }
      },
      "label6": "Enterprise",
      "h1Space7": " ",
      "spanProps13": {
        "className": "w"
      },
      "spanProps14": {
        "style": {
          "--i": "6"
        }
      },
      "label7": "Scale",
      "pProps": {
        "className": "lead"
      },
      "description": "Palni combines certified Databricks expertise across data engineering, analytics, governance and AI to deliver complex enterprise transformations at scale.",
      "divProps2": {
        "className": "btns"
      },
      "aProps": {
        "className": "btn btn-primary",
        "href": "/contact#databricks"
      },
      "linkLabel": "Talk to a Databricks Expert"
    }
  },
  {
    "type": "text",
    "key": "space-2",
    "content": "\n"
  },
  {
    "type": "SectionNavigation",
    "key": "databricks-expertise-SectionNavigation-3",
    "content": {
      "navProps": {
        "className": "subnav",
        "aria-label": "Databricks"
      },
      "divProps": {
        "className": "wrap"
      },
      "spanProps": {
        "className": "lbl"
      },
      "label": "Databricks",
      "aProps": {
        "href": "/databricks"
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
        "href": "/databricks-expertise",
        "aria-current": "page"
      },
      "linkLabel4": "Expertise and Accelerators"
    }
  },
  {
    "type": "text",
    "key": "space-4",
    "content": "\n"
  },
  {
    "type": "CertifiedSection",
    "key": "certified",
    "content": {
      "sectionProps": {
        "data-tone": "night",
        "className": "sec",
        "id": "certified",
        "aria-labelledby": "h-certified"
      },
      "divProps": {
        "className": "wrap"
      },
      "divProps2": {
        "className": "split"
      },
      "divProps3": {
        "style": {
          "display": "grid",
          "gap": "var(--s5)"
        }
      },
      "h2Props": {
        "id": "h-certified"
      },
      "heading": "Certified Across the Databricks Platform",
      "pProps": {
        "className": "lead"
      },
      "description": "Our Databricks certified expertise brings validated platform knowledge across data engineering, migration, governance, analytics and AI, giving enterprises confidence in each transformation.",
      "divSpace6": "\n",
      "divProps4": {
        "className": "panel",
        "style": {
          "display": "grid",
          "gap": "var(--s6)"
        }
      },
      "h3Props": {
        "className": "h3d"
      },
      "cardTitle": "Certified Expertise. Proven Databricks Delivery.",
      "divProps5": {
        "className": "metrics",
        "style": {
          "--n": "2"
        }
      },
      "divProps6": {
        "className": "metric"
      },
      "divProps7": {
        "className": "num",
        "data-to": "80"
      },
      "spanProps": {
        "className": "v"
      },
      "label": "80",
      "supProps": {},
      "text": "+",
      "pProps2": {},
      "description2": "Databricks Certified Resources",
      "divProps8": {
        "className": "metric"
      },
      "divProps9": {
        "className": "num",
        "data-to": "100"
      },
      "spanProps2": {
        "className": "v"
      },
      "label2": "100",
      "supProps2": {},
      "text2": "+",
      "pProps3": {},
      "description3": "Data Engineers and AI Practitioners",
      "divProps10": {
        "className": "logos",
        "style": {
          "gridTemplateColumns": "repeat(3,minmax(0,1fr))"
        }
      },
      "spanProps3": {},
      "label3": "Certification badge",
      "spanProps4": {},
      "label4": "Certification badge",
      "spanProps5": {},
      "label5": "Certification badge",
      "spanProps6": {},
      "label6": "Certification badge",
      "spanProps7": {},
      "label7": "Certification badge",
      "spanProps8": {},
      "label8": "Certification badge"
    }
  },
  {
    "type": "text",
    "key": "space-6",
    "content": "\n"
  },
  {
    "type": "PrinciplesSection",
    "key": "accelerators",
    "content": {
      "sectionProps": {
        "data-tone": "db",
        "className": "sec",
        "id": "accelerators",
        "aria-labelledby": "h-accelerators"
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
        "id": "h-accelerators"
      },
      "heading": "Six Accelerators. One Faster Path to Databricks Value.",
      "pProps": {
        "className": "lead"
      },
      "description": "Prebuilt accelerators help reduce delivery effort and move enterprise data from migration and ELT to governed, scalable AI solutions. They support faster implementation and more consistent delivery.",
      "divProps4": {
        "className": "tiles"
      },
      "featureCardItems": [
        {
          "key": "FeatureCard-4b882d42",
          "space": "",
          "content": {
            "divProps": {
              "className": "tile"
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
              "d": "M4 8h14l-3-3 M20 16H6l3 3"
            },
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "AI Powered Data Migration",
            "pProps": {},
            "description": "Automate enterprise scale Teradata migrations to Databricks with more repeatable delivery and less manual effort."
          }
        },
        {
          "key": "FeatureCard-9be9a15c",
          "space": "",
          "content": {
            "divProps": {
              "className": "tile"
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
              "d": "M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M8.6 13.5l6.8 4 M15.4 6.5l-6.8 4"
            },
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Semantic Migration",
            "pProps": {},
            "description": "Move business semantics, metrics, definitions and relationships into Databricks to support consistent, trusted analytics and AI experiences."
          }
        },
        {
          "key": "FeatureCard-c39ecff4",
          "space": "",
          "content": {
            "divProps": {
              "className": "tile"
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
              "d": "M5 11h14v10H5z M8 11V7a4 4 0 0 1 8 0v4"
            },
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Security Migration",
            "pProps": {},
            "description": "Migrate Teradata security controls to Unity Catalog with automated mapping, reconciliation and validation."
          }
        },
        {
          "key": "FeatureCard-269eb6ac",
          "space": "",
          "content": {
            "divProps": {
              "className": "tile"
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
              "d": "M4 4h6v5H4z M14 15h6v5h-6z M7 9v4a2 2 0 0 0 2 2h5"
            },
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "ELT Framework",
            "pProps": {},
            "description": "Accelerate incremental ELT synchronisation and pipeline monitoring across enterprise data environments with reusable components."
          }
        },
        {
          "key": "FeatureCard-511abdff",
          "space": "",
          "content": {
            "divProps": {
              "className": "tile"
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
              "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M8 12.2l2.8 2.8L16 9.5"
            },
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Genie Health Score",
            "pProps": {},
            "description": "Assess Genie semantic readiness, identify gaps and recommend corrective actions for stronger conversational analytics."
          }
        },
        {
          "key": "FeatureCard-39b2a7c4",
          "space": "",
          "content": {
            "divProps": {
              "className": "tile"
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
              "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z M12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
            },
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Genie Benchmarking",
            "pProps": {},
            "description": "Generate and analyse benchmark tests to evaluate and improve Genie performance across enterprise use cases."
          }
        }
      ]
    }
  },
  {
    "type": "text",
    "key": "space-8",
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
        "data-field": "strata",
        "data-colors": "db",
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
      "heading": "Put Our Databricks Expertise to Work",
      "pProps": {
        "className": "lead"
      },
      "description": "Talk to our Databricks experts about your data, modernisation or AI priorities.",
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
        "label3": "Meet a Databricks expert",
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
    "key": "space-10",
    "content": "\n"
  }
]
}
