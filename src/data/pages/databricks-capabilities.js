import { chromeByPage } from './navigation'

// Local content preserved verbatim. Reorder sections here; templates contain no page copy.
export default {
  layout: "PageLayout",
  content: { ...chromeByPage["databricks-capabilities"], ...{
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
    "type": "HeroSubHasSceneSection",
    "key": "databricks-capabilities-HeroSubHasSceneSection-1",
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
        "label5": "Capabilities"
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
      "label": "Engineering",
      "h1Space2": " ",
      "spanProps3": {
        "className": "w"
      },
      "spanProps4": {
        "style": {
          "--i": "1"
        }
      },
      "label2": "Enterprise",
      "h1Space3": " ",
      "spanProps5": {
        "className": "w"
      },
      "spanProps6": {
        "style": {
          "--i": "2"
        }
      },
      "label3": "Data",
      "h1Space4": " ",
      "spanProps7": {
        "className": "w"
      },
      "spanProps8": {
        "style": {
          "--i": "3"
        }
      },
      "label4": "for",
      "h1Space5": " ",
      "spanProps9": {
        "className": "w"
      },
      "spanProps10": {
        "style": {
          "--i": "4"
        }
      },
      "label5": "the",
      "h1Space6": " ",
      "spanProps11": {
        "className": "w"
      },
      "spanProps12": {
        "style": {
          "--i": "5"
        }
      },
      "label6": "AI",
      "h1Space7": " ",
      "spanProps13": {
        "className": "w"
      },
      "spanProps14": {
        "style": {
          "--i": "6"
        }
      },
      "label7": "Era",
      "divSpace3": "\n      ",
      "pProps": {
        "className": "lead"
      },
      "description": "Palni brings data engineering, migration, governance and AI expertise together to help enterprises\n        move from complex data environments to trusted, AI ready platforms.",
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
    "key": "databricks-capabilities-SectionNavigation-3",
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
        "href": "/databricks"
      },
      "linkLabel": "Overview",
      "aProps2": {
        "href": "/databricks-capabilities",
        "aria-current": "page"
      },
      "linkLabel2": "Capabilities",
      "aProps3": {
        "href": "/databricks-industries"
      },
      "linkLabel3": "Industry\n        Solutions",
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
    "type": "ValueSection",
    "key": "value",
    "content": {
      "sectionProps": {
        "data-tone": "night",
        "className": "sec",
        "id": "value",
        "aria-labelledby": "h-value"
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
        "id": "h-value"
      },
      "heading": "What Databricks Can Unlock for Your Enterprise",
      "divSpace4": "\n        ",
      "divSpace5": "\n        ",
      "pProps": {
        "className": "lead"
      },
      "description": "Show the business improvements the capability set supports before listing technical detail.",
      "divSpace6": "\n      ",
      "divSpace7": "\n      ",
      "divProps4": {
        "className": "tiles five"
      },
      "featureCardItems": [
        {
          "key": "FeatureCard-b9eb2f49",
          "space": "\n        ",
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
            "svgSpace": "\n              ",
            "pathProps": {
              "d": "M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2 M9 15l-3-3c1-5 5-9 12-9 0 7-4 11-9 12z M14.5 10.2a1.2 1.2 0 1 0 0-.01"
            },
            "svgSpace2": "\n            ",
            "divSpace2": "\n          ",
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Faster Modernisation",
            "divSpace3": "\n          ",
            "pProps": {},
            "description": "Move beyond legacy data platforms.",
            "divSpace4": "\n        "
          }
        },
        {
          "key": "FeatureCard-cec189de",
          "space": "\n        ",
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
            "svgSpace": "\n              ",
            "pathProps": {
              "d": "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4"
            },
            "svgSpace2": "\n            ",
            "divSpace2": "\n          ",
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Trusted Data",
            "divSpace3": "\n          ",
            "pProps": {},
            "description": "Build governed, secure and reliable data.",
            "divSpace4": "\n        "
          }
        },
        {
          "key": "FeatureCard-5547684e",
          "space": "\n        ",
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
            "svgSpace": "\n              ",
            "pathProps": {
              "d": "M13 2L4 14h7l-1 8 9-12h-7z"
            },
            "svgSpace2": "\n            ",
            "divSpace2": "\n          ",
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Real Time Intelligence",
            "divSpace3": "\n          ",
            "pProps": {},
            "description": "Turn data into faster decisions.",
            "divSpace4": "\n        "
          }
        },
        {
          "key": "FeatureCard-f56d36e4",
          "space": "\n        ",
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
            "svgSpace": "\n              ",
            "pathProps": {
              "d": "M5 6.5a2 2 0 1 0 0-.01 M5 17.5a2 2 0 1 0 0-.01 M12 12a2 2 0 1 0 0-.01 M19 6.5a2 2 0 1 0 0-.01 M19 17.5a2 2 0 1 0 0-.01 M6.7 7.7l3.6 3.1 M6.7 16.3l3.6-3.1 M13.7 10.8l3.6-3.1 M13.7 13.2l3.6 3.1"
            },
            "svgSpace2": "\n            ",
            "divSpace2": "\n          ",
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "AI at Scale",
            "divSpace3": "\n          ",
            "pProps": {},
            "description": "Move AI from pilots to production.",
            "divSpace4": "\n        "
          }
        },
        {
          "key": "FeatureCard-ae440136",
          "space": "\n        ",
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
            "svgSpace": "\n              ",
            "pathProps": {
              "d": "M4 6h10M18 6h2 M4 12h4M12 12h8 M4 18h12M20 18h0 M16 4v4 M10 10v4 M18 16v4"
            },
            "svgSpace2": "\n            ",
            "divSpace2": "\n          ",
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Lower Data Complexity",
            "divSpace3": "\n          ",
            "pProps": {},
            "description": "Simplify fragmented data environments.",
            "divSpace4": "\n        "
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
    "key": "space-6",
    "content": "\n  "
  },
  {
    "type": "SecSection",
    "key": "databricks-capabilities-SecSection-7",
    "content": {
      "sectionProps": {
        "data-tone": "db",
        "className": "sec",
        "aria-label": "Six capability areas"
      },
      "sectionSpace": "\n    ",
      "divProps": {
        "className": "wrap"
      },
      "capabilityCardItems": [
        {
          "key": "engineering",
          "space": "\n      ",
          "content": {
            "articleProps": {
              "className": "cap",
              "id": "engineering"
            },
            "articleSpace": "\n        ",
            "divProps": {
              "className": "side"
            },
            "divSpace": "\n          ",
            "h2Props": {
              "className": "h2"
            },
            "heading": "Data Engineering",
            "divSpace2": "\n          ",
            "pProps": {
              "className": "lead"
            },
            "description": "Build scalable lakehouse foundations with modern engineering practices that make enterprise\n            data reliable, accessible and ready for downstream use.",
            "canvasProps": {
              "data-field": "lanes",
              "data-colors": "db",
              "data-density": ".55",
              "aria-hidden": "true"
            },
            "divSpace4": "\n        ",
            "articleSpace2": "\n        ",
            "divProps2": {
              "className": "items"
            },
            "featureCardItems": [
              {
                "key": "FeatureCard-5abccbb8",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M12 3l9 5-9 5-9-5z M3 12.5l9 5 9-5 M3 17l9 5 9-5"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "Lakehouse Architecture",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Structure data for scalable engineering and analytics.",
                  "divSpace4": "\n          "
                }
              },
              {
                "key": "FeatureCard-cce92034",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M13 2L4 14h7l-1 8 9-12h-7z"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "Spark and Delta",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Use approved platform capabilities for dependable data processing.",
                  "divSpace4": "\n          "
                }
              },
              {
                "key": "FeatureCard-4d91144",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M3 5h18l-7 8v6l-4 2v-8z"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "Lakeflow Pipelines",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Create and manage data pipelines.",
                  "divSpace4": "\n          "
                }
              },
              {
                "key": "FeatureCard-ebd0a88",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M4 8h14l-3-3 M20 16H6l3 3"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "Data Ingestion and Transformation",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Bring data from source systems into usable formats.",
                  "divSpace4": "\n          "
                }
              }
            ],
            "divSpace5": "\n        ",
            "articleSpace3": "\n      "
          }
        },
        {
          "key": "products",
          "space": "\n      ",
          "content": {
            "articleProps": {
              "className": "cap",
              "id": "products"
            },
            "articleSpace": "\n        ",
            "divProps": {
              "className": "side"
            },
            "divSpace": "\n          ",
            "h2Props": {
              "className": "h2"
            },
            "heading": "Data Products",
            "divSpace2": "\n          ",
            "pProps": {
              "className": "lead"
            },
            "description": "Turn complex enterprise data into trusted, business ready products that support consistent\n            reporting, analytics and informed decisions.",
            "canvasProps": {
              "data-field": "strata",
              "data-colors": "db",
              "data-density": ".55",
              "aria-hidden": "true"
            },
            "divSpace4": "\n        ",
            "articleSpace2": "\n        ",
            "divProps2": {
              "className": "items"
            },
            "featureCardItems": [
              {
                "key": "FeatureCard-bb79598",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M12 2.5l8.5 4.8v9.4L12 21.5l-8.5-4.8V7.3z M3.5 7.3L12 12l8.5-4.7 M12 12v9.5"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "Business Ready Datasets",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Prepare reliable datasets for clear business use.",
                  "divSpace4": "\n          "
                }
              },
              {
                "key": "FeatureCard-78272085",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M8.6 13.5l6.8 4 M15.4 6.5l-6.8 4"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "Semantic Modelling",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Create consistent definitions and relationships.",
                  "divSpace4": "\n          "
                }
              },
              {
                "key": "FeatureCard-ed5444b8",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "Governance and Grain",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Make ownership, definitions and quality easier to understand.",
                  "divSpace4": "\n          "
                }
              },
              {
                "key": "FeatureCard-13722223",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M4 20h16 M7 16v-5 M12 16V7 M17 16v-8"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "Analytics Ready Data",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Prepare data for reporting, analytics and AI use cases.",
                  "divSpace4": "\n          "
                }
              }
            ],
            "divSpace5": "\n        ",
            "articleSpace3": "\n      "
          }
        },
        {
          "key": "ai",
          "space": "\n      ",
          "content": {
            "articleProps": {
              "className": "cap",
              "id": "ai"
            },
            "articleSpace": "\n        ",
            "divProps": {
              "className": "side"
            },
            "divSpace": "\n          ",
            "h2Props": {
              "className": "h2"
            },
            "heading": "AI and Machine Learning",
            "divSpace2": "\n          ",
            "pProps": {
              "className": "lead"
            },
            "description": "Prepare enterprise data and platforms for machine learning and agentic AI applications\n            grounded in trusted business context.",
            "canvasProps": {
              "data-field": "network",
              "data-colors": "db",
              "data-density": ".55",
              "aria-hidden": "true"
            },
            "divSpace4": "\n        ",
            "articleSpace2": "\n        ",
            "divProps2": {
              "className": "items"
            },
            "featureCardItems": [
              {
                "key": "FeatureCard-ea042f01",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M5 6.5a2 2 0 1 0 0-.01 M5 17.5a2 2 0 1 0 0-.01 M12 12a2 2 0 1 0 0-.01 M19 6.5a2 2 0 1 0 0-.01 M19 17.5a2 2 0 1 0 0-.01 M6.7 7.7l3.6 3.1 M6.7 16.3l3.6-3.1 M13.7 10.8l3.6-3.1 M13.7 13.2l3.6 3.1"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "Machine Learning",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Use data to support predictive models and analytical workflows.",
                  "divSpace4": "\n          "
                }
              },
              {
                "key": "FeatureCard-1c95ee90",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M12 3v3M12 18v3M3 12h3M18 12h3 M12 8.5l1.2 2.3 2.3 1.2-2.3 1.2L12 15.5l-1.2-2.3L8.5 12l2.3-1.2z M5.6 5.6l1.6 1.6 M16.8 16.8l1.6 1.6"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "Generative AI",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Build GenAI experiences around approved enterprise use cases.",
                  "divSpace4": "\n          "
                }
              },
              {
                "key": "FeatureCard-ca0bce34",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M5 9h14v10H5z M12 5v4 M12 3.6a1.4 1.4 0 1 0 0 .01 M9 13.5v1 M15 13.5v1 M9.5 17h5 M2.5 12.5v3 M21.5 12.5v3"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "Agentic AI",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Connect agents to trusted data and controlled workflows.",
                  "divSpace4": "\n          "
                }
              },
              {
                "key": "FeatureCard-37b90fd6",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M4 4h6v5H4z M14 15h6v5h-6z M7 9v4a2 2 0 0 0 2 2h5"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "AI Assisted Workflows",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Use AI to support defined tasks and decisions.",
                  "divSpace4": "\n          "
                }
              }
            ],
            "divSpace5": "\n        ",
            "articleSpace3": "\n      "
          }
        },
        {
          "key": "governance",
          "space": "\n      ",
          "content": {
            "articleProps": {
              "className": "cap",
              "id": "governance"
            },
            "articleSpace": "\n        ",
            "divProps": {
              "className": "side"
            },
            "divSpace": "\n          ",
            "h2Props": {
              "className": "h2"
            },
            "heading": "Governance and Security",
            "divSpace2": "\n          ",
            "pProps": {
              "className": "lead"
            },
            "description": "Establish governed data environments with security, lineage and quality controls designed for\n            enterprise analytics and AI.",
            "canvasProps": {
              "data-field": "funnel",
              "data-colors": "db",
              "data-density": ".55",
              "aria-hidden": "true"
            },
            "divSpace4": "\n        ",
            "articleSpace2": "\n        ",
            "divProps2": {
              "className": "items"
            },
            "featureCardItems": [
              {
                "key": "FeatureCard-ada525c5",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M5 11h14v10H5z M8 11V7a4 4 0 0 1 8 0v4"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "Fine Grained Data Security",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Manage access in line with enterprise requirements.",
                  "divSpace4": "\n          "
                }
              },
              {
                "key": "FeatureCard-6f3b4d12",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M4 4h5v5H4z M15 15h5v5h-5z M15 4h5v5h-5z M9 6.5h6 M17.5 9v6"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "Data Lineage",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Improve visibility into where data comes from and how it is used.",
                  "divSpace4": "\n          "
                }
              },
              {
                "key": "FeatureCard-f929c7be",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M8.6 13.5l6.8 4 M15.4 6.5l-6.8 4"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "Data Sharing and Collaboration",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Support controlled data access across teams.",
                  "divSpace4": "\n          "
                }
              },
              {
                "key": "FeatureCard-68c1fe7c",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "Data Quality and Compliance",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Improve reliability and oversight.",
                  "divSpace4": "\n          "
                }
              }
            ],
            "divSpace5": "\n        ",
            "articleSpace3": "\n      "
          }
        },
        {
          "key": "migration",
          "space": "\n      ",
          "content": {
            "articleProps": {
              "className": "cap",
              "id": "migration"
            },
            "articleSpace": "\n        ",
            "divProps": {
              "className": "side"
            },
            "divSpace": "\n          ",
            "h2Props": {
              "className": "h2"
            },
            "heading": "Migration and Modernisation",
            "divSpace2": "\n          ",
            "pProps": {
              "className": "lead"
            },
            "description": "Modernise legacy data platforms through discovery, automated conversion, migration, validation\n            and alignment with modern lakehouse architecture.",
            "canvasProps": {
              "data-field": "confluence",
              "data-colors": "db,db,db",
              "data-density": ".55",
              "aria-hidden": "true"
            },
            "divSpace4": "\n        ",
            "articleSpace2": "\n        ",
            "divProps2": {
              "className": "items"
            },
            "featureCardItems": [
              {
                "key": "FeatureCard-f9ea592c",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M20.5 20.5l-4.5-4.5"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "Platform Assessment and Discovery",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Understand the current estate and migration scope.",
                  "divSpace4": "\n          "
                }
              },
              {
                "key": "FeatureCard-3d8d3228",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M8 6l-6 6 6 6 M16 6l6 6-6 6 M13.5 4l-3 16"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "SQL and ETL Transformation",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Convert workloads with structured review and validation.",
                  "divSpace4": "\n          "
                }
              },
              {
                "key": "FeatureCard-a4e2f590",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M12 2.5l8.5 4.8v9.4L12 21.5l-8.5-4.8V7.3z M3.5 7.3L12 12l8.5-4.7 M12 12v9.5"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "Data Model and Architecture Redesign",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Plan modern architecture around business needs.",
                  "divSpace4": "\n          "
                }
              },
              {
                "key": "FeatureCard-57f493d",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M8 12.2l2.8 2.8L16 9.5"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "Migration Assurance and Validation",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Check data, logic and outputs through the move.",
                  "divSpace4": "\n          "
                }
              }
            ],
            "divSpace5": "\n        ",
            "articleSpace3": "\n      "
          }
        },
        {
          "key": "agentic",
          "space": "\n      ",
          "content": {
            "articleProps": {
              "className": "cap",
              "id": "agentic"
            },
            "articleSpace": "\n        ",
            "divProps": {
              "className": "side"
            },
            "divSpace": "\n          ",
            "h2Props": {
              "className": "h2"
            },
            "heading": "Agentic Data and AI",
            "divSpace2": "\n          ",
            "pProps": {
              "className": "lead"
            },
            "description": "Turn enterprise data into intelligent systems that can answer questions, support decisions and trigger controlled actions.",
            "canvasProps": {
              "data-field": "network",
              "data-colors": "db",
              "data-density": ".55",
              "aria-hidden": "true"
            },
            "divSpace4": "\n        ",
            "articleSpace2": "\n        ",
            "divProps2": {
              "className": "items"
            },
            "featureCardItems": [
              {
                "key": "FeatureCard-bd77c03c",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M20.5 20.5l-4.5-4.5"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "Business Driven Data Querying",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Let users ask questions grounded in enterprise data.",
                  "divSpace4": "\n          "
                }
              },
              {
                "key": "FeatureCard-28df80da",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M5 9h14v10H5z M12 5v4 M12 3.6a1.4 1.4 0 1 0 0 .01 M9 13.5v1 M15 13.5v1 M9.5 17h5 M2.5 12.5v3 M21.5 12.5v3"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "Conversational Analytics",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Make governed analytics easier to access through natural language.",
                  "divSpace4": "\n          "
                }
              },
              {
                "key": "FeatureCard-da47b2da",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M5 9h14v10H5z M12 5v4 M12 3.6a1.4 1.4 0 1 0 0 .01 M9 13.5v1 M15 13.5v1 M9.5 17h5 M2.5 12.5v3 M21.5 12.5v3"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "Agentic Workflow Orchestration",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Connect agents to defined business processes.",
                  "divSpace4": "\n          "
                }
              },
              {
                "key": "FeatureCard-6b0a6159",
                "space": "\n          ",
                "content": {
                  "divProps": {},
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
                    "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z M12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                  },
                  "svgSpace2": "\n              ",
                  "divSpace2": "\n            ",
                  "h3Props": {},
                  "cardTitle": "AI Powered Decision Intelligence",
                  "divSpace3": "\n            ",
                  "pProps": {},
                  "description": "Support better decisions with trusted information and clear controls.",
                  "divSpace4": "\n          "
                }
              }
            ],
            "divSpace5": "\n        ",
            "articleSpace3": "\n      "
          }
        }
      ],
      "divSpace": "\n    ",
      "sectionSpace2": "\n  "
    }
  },
  {
    "type": "text",
    "key": "space-8",
    "content": "\n  "
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
      "description": "Discuss your data architecture, migration or AI priorities with Palni.",
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
    "key": "space-10",
    "content": "\n"
  }
]
}
