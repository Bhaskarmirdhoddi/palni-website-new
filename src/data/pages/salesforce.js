import { chromeByPage } from './navigation'

// Local content preserved verbatim. Reorder sections here; templates contain no page copy.
export default {
  layout: "PageLayout",
  content: { ...chromeByPage["salesforce"], ...{
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
    "type": "SalesforceOverviewSection",
    "key": "salesforce-overview",
    "content": {
      "sectionProps": {
        "id": "salesforce-overview",
        "data-tone": "sf",
        "className": "hero sub has-scene",
        "aria-labelledby": "h1",
        "data-scene-host": ""
      },
      "canvasProps": {
        "className": "field scene",
        "data-scene": "orbit",
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
        "label4": "Salesforce"
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
      "label": "Salesforce",
      "h1Space2": " ",
      "spanProps3": {
        "className": "w"
      },
      "spanProps4": {
        "style": {
          "--i": "1"
        }
      },
      "label2": "Transformation",
      "h1Space3": " ",
      "spanProps5": {
        "className": "w"
      },
      "spanProps6": {
        "style": {
          "--i": "2"
        }
      },
      "label3": "for",
      "h1Space4": " ",
      "spanProps7": {
        "className": "w"
      },
      "spanProps8": {
        "style": {
          "--i": "3"
        }
      },
      "label4": "Revenue",
      "h1Space5": " ",
      "spanProps9": {
        "className": "w"
      },
      "spanProps10": {
        "style": {
          "--i": "4"
        }
      },
      "label5": "and",
      "h1Space6": " ",
      "spanProps11": {
        "className": "w"
      },
      "spanProps12": {
        "style": {
          "--i": "5"
        }
      },
      "label6": "Automation",
      "pProps": {
        "className": "lead"
      },
      "description": "We help teams improve pipeline visibility, simplify quoting and bring AI into sales and service workflows. Our Salesforce work connects platform configuration, business process and integrations around the way your teams sell and support customers.",
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
        "href": "/use-cases#salesforce"
      },
      "linkLabel2": "View Use Cases"
    }
  },
  {
    "type": "text",
    "key": "space-2",
    "content": "\n"
  },
  {
    "type": "text",
    "key": "space-4",
    "content": "\n\n"
  },
  {
    "type": "RoutesSection",
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
      "heading": "Where Salesforce Can Make a Difference",
      "pProps": {
        "className": "lead"
      },
      "description": "We focus on the parts of sales and service where a better connected Salesforce experience makes day to day work easier and gives leaders clearer information.",
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
        "d": "M7 3h7l5 5v13H7z M14 3v5h5 M10 13h6 M10 17h4"
      },
      "h3Props": {
        "className": "h3d"
      },
      "cardTitle": "Revenue Cloud & CPQ",
      "pProps2": {},
      "description2": "Simplify complex quoting, pricing and approvals. Connect the steps that move a deal from quote to cash.",
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
        "d": "M5 9h14v10H5z M12 5v4 M12 3.6a1.4 1.4 0 1 0 0 .01 M9 13.5v1 M15 13.5v1 M9.5 17h5 M2.5 12.5v3 M21.5 12.5v3"
      },
      "h3Props2": {
        "className": "h3d"
      },
      "cardTitle2": "Agentforce & AI",
      "pProps3": {},
      "description3": "Bring AI supported tasks and guided workflows into sales and service processes where they help teams act with better context.",
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
        "d": "M3 5h18l-7 8v6l-4 2v-8z"
      },
      "h3Props3": {
        "className": "h3d"
      },
      "cardTitle3": "Sales & Pipeline Visibility",
      "pProps4": {},
      "description4": "Improve opportunity tracking, forecasting and deal health with clearer information across the sales process.",
      "divProps10": {
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
    "type": "WhySection",
    "key": "outcomes",
    "content": {
      "sectionProps": {
        "data-tone": "sf",
        "className": "sec",
        "id": "outcomes",
        "aria-labelledby": "h-outcomes"
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
        "id": "h-outcomes"
      },
      "heading": "Outcomes That Make Salesforce More Useful to the Business",
      "pProps": {
        "className": "lead"
      },
      "description": "A well designed Salesforce environment helps teams spend less time managing systems and more time moving customer and revenue activity forward.",
      "divProps4": {
        "className": "quad"
      },
      "featureCardItems": [
        {
          "key": "FeatureCard-65462324",
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
              "d": "M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2 M9 15l-3-3c1-5 5-9 12-9 0 7-4 11-9 12z M14.5 10.2a1.2 1.2 0 1 0 0-.01"
            },
            "h3Props": {},
            "cardTitle": "Faster Sales Cycles",
            "pProps": {},
            "description": "Reduce avoidable delays in quote preparation, reviews and approvals."
          }
        },
        {
          "key": "FeatureCard-ed5e8f",
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
              "d": "M12 3v3M12 18v3M3 12h3M18 12h3 M12 8.5l1.2 2.3 2.3 1.2-2.3 1.2L12 15.5l-1.2-2.3L8.5 12l2.3-1.2z M5.6 5.6l1.6 1.6 M16.8 16.8l1.6 1.6"
            },
            "h3Props": {},
            "cardTitle": "AI Enabled Workflows",
            "pProps": {},
            "description": "Support routine sales and service tasks with guided automation and relevant information."
          }
        },
        {
          "key": "FeatureCard-4259f0fd",
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
              "d": "M3 5h18l-7 8v6l-4 2v-8z"
            },
            "h3Props": {},
            "cardTitle": "Predictable Pipelines",
            "pProps": {},
            "description": "Improve visibility across opportunities, stages, forecasts and deal health."
          }
        },
        {
          "key": "FeatureCard-59693459",
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
              "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M15 9h-4.5a1.8 1.8 0 0 0 0 3.6h3a1.8 1.8 0 0 1 0 3.6H9 M12 7v1.5M12 16.2v1.5"
            },
            "h3Props": {},
            "cardTitle": "Scalable Revenue Operations",
            "pProps": {},
            "description": "Build repeatable processes that can support more products, teams and transaction complexity."
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
    "type": "PrinciplesSection",
    "key": "clouds",
    "content": {
      "sectionProps": {
        "data-tone": "brand",
        "className": "sec",
        "id": "clouds",
        "aria-labelledby": "h-clouds"
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
        "id": "h-clouds"
      },
      "heading": "Capabilities Across Sales, Service, Revenue and Industry Needs",
      "pProps": {
        "className": "lead"
      },
      "description": "Palni brings the relevant Salesforce products together around the workflows your business needs to improve.",
      "divProps4": {
        "className": "tiles"
      },
      "featureCardItems": [
        {
          "key": "FeatureCard-3596faf3",
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
              "d": "M3 17l6-6 4 4 8-8 M15 7h6v6"
            },
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Sales Cloud",
            "pProps": {},
            "description": "Manage leads and opportunities, support pipeline discipline and give teams a clearer view of sales activity."
          }
        },
        {
          "key": "FeatureCard-5c3c15ab",
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
              "d": "M4 15v-3a8 8 0 0 1 16 0v3 M4 14h3v6H4z M17 14h3v6h-3z M20 20a3 3 0 0 1-3 2h-3"
            },
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Service Cloud",
            "pProps": {},
            "description": "Organise cases, service processes and customer support work so teams can respond with better context."
          }
        },
        {
          "key": "FeatureCard-8bc9135e",
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
              "d": "M7 3h7l5 5v13H7z M14 3v5h5 M10 13h6 M10 17h4"
            },
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Revenue Cloud & CPQ",
            "pProps": {},
            "description": "Support product configuration, pricing, quote creation, approvals and contracting."
          }
        },
        {
          "key": "FeatureCard-a566c6fb",
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
              "d": "M3 10v4h3l6 4V6l-6 4z M16 9a4 4 0 0 1 0 6 M19 6a8 8 0 0 1 0 12"
            },
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Marketing Cloud",
            "pProps": {},
            "description": "Connect customer and campaign activity to support more relevant communications and engagement."
          }
        },
        {
          "key": "FeatureCard-b8d09d55",
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
              "d": "M5 9h14v10H5z M12 5v4 M12 3.6a1.4 1.4 0 1 0 0 .01 M9 13.5v1 M15 13.5v1 M9.5 17h5 M2.5 12.5v3 M21.5 12.5v3"
            },
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Agentforce",
            "pProps": {},
            "description": "Explore where AI agents and guided workflows can support customer and employee tasks within Salesforce."
          }
        },
        {
          "key": "FeatureCard-308a7117",
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
              "d": "M4 21V5l8-3v19 M12 8h8v13 M7 8h2M7 12h2M7 16h2M15 12h2M15 16h2 M2 21h20"
            },
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Industry Clouds",
            "pProps": {},
            "description": "Use industry specific Salesforce capabilities where they fit the business model, requirements and customer journey."
          }
        }
      ]
    }
  },
  {
    "type": "text",
    "key": "space-10",
    "content": "\n"
  },
  {
    "type": "TalkSection",
    "key": "talk",
    "content": {
      "sectionProps": {
        "data-tone": "night",
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
        "heading": "Let's Talk Salesforce",
        "pProps": {},
        "description": "Tell us where pipeline, quoting or service work slows down. We will point to the first fix worth making.",
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
    "key": "space-12",
    "content": "\n"
  },
  {
    "type": "PeopleSection",
    "key": "supporting",
    "content": {
      "sectionProps": {
        "data-tone": "sf",
        "className": "sec",
        "id": "supporting",
        "aria-labelledby": "h-supporting"
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
        "id": "h-supporting"
      },
      "heading": "Supporting Capabilities Around the Salesforce Platform",
      "pProps": {
        "className": "lead"
      },
      "description": "We bring these in where they make the Salesforce solution stronger.",
      "divProps4": {
        "className": "ledger compact"
      },
      "featureCardItems": [
        {
          "key": "FeatureCard-628ecf",
          "space": "",
          "content": {
            "divProps": {
              "className": "row"
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
              "d": "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1 M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"
            },
            "h3Props": {},
            "cardTitle": "Platform & Integration",
            "pProps": {},
            "description": "Connect Salesforce with ERP, finance and other enterprise systems. Plan APIs and integrations around reliable information flow."
          }
        },
        {
          "key": "FeatureCard-1300dac3",
          "space": "",
          "content": {
            "divProps": {
              "className": "row"
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
              "d": "M3 10v4h3l6 4V6l-6 4z M16 9a4 4 0 0 1 0 6 M19 6a8 8 0 0 1 0 12"
            },
            "h3Props": {},
            "cardTitle": "Marketing & Engagement",
            "pProps": {},
            "description": "Support connected customer journeys, campaign activity and partner interactions."
          }
        },
        {
          "key": "FeatureCard-87c8d7d",
          "space": "",
          "content": {
            "divProps": {
              "className": "row"
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
              "d": "M4 20h16 M7 16v-5 M12 16V7 M17 16v-8"
            },
            "h3Props": {},
            "cardTitle": "Data & Analytics",
            "pProps": {},
            "description": "Improve reporting and customer insight by connecting relevant data and making key information easier to use."
          }
        }
      ]
    }
  },
  {
    "type": "text",
    "key": "space-14",
    "content": "\n"
  },
  {
    "type": "UsecasesSection",
    "key": "usecases",
    "content": {
      "sectionProps": {
        "data-tone": "night",
        "className": "sec slider-sec",
        "id": "usecases",
        "aria-labelledby": "h-usecases"
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
        "id": "h-usecases"
      },
      "heading": "Salesforce in Practice",
      "pProps": {
        "className": "lead"
      },
      "description": "These examples show how workflow design, automation and integration address practical challenges in sales operations and customer data.",
      "divProps4": {
        "className": "slider",
        "aria-roledescription": "carousel",
        "aria-label": "Salesforce in Practice"
      },
      "divProps5": {
        "className": "slides"
      },
      "outcomeSlideVariant2Items": [
        {
          "key": "OutcomeSlideVariant2-ac41a5a7",
          "space": "",
          "content": {
            "articleProps": {
              "className": "slide c-salesforce",
              "role": "group",
              "aria-roledescription": "slide",
              "aria-label": "1 of 3"
            },
            "articleSpace": "\n",
            "imgProps": {
              "className": "sl-bg",
              "src": "/assets/img/cs-sf-pipeline.webp",
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
            "h3Props": {
              "className": "sl-t"
            },
            "cardTitle": "Improved Pipeline Visibility and Sales Adoption",
            "pProps": {},
            "description": "More consistent deal tracking, improved pipeline visibility and less manual entry.",
            "divSpace4": "\n",
            "spanProps2": {
              "className": "sl-tag"
            },
            "label2": "Salesforce · Sales Cloud",
            "aProps": {
              "className": "link",
              "href": "/use-cases#salesforce"
            },
            "linkLabel": "Read the use case"
          }
        },
        {
          "key": "OutcomeSlideVariant2-cfc5a790",
          "space": "",
          "content": {
            "articleProps": {
              "className": "slide c-salesforce",
              "role": "group",
              "aria-roledescription": "slide",
              "aria-label": "2 of 3",
              "hidden": true
            },
            "articleSpace": "\n",
            "imgProps": {
              "className": "sl-bg",
              "src": "/assets/img/cs-sf-quoting.webp",
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
            "h3Props": {
              "className": "sl-t"
            },
            "cardTitle": "AI Driven Quoting and Opportunity Creation",
            "pProps": {},
            "description": "Faster quote turnaround, better data consistency and less manual effort.",
            "divSpace4": "\n",
            "spanProps2": {
              "className": "sl-tag"
            },
            "label2": "Salesforce · Revenue Cloud and AI",
            "aProps": {
              "className": "link",
              "href": "/use-cases#salesforce"
            },
            "linkLabel": "Read the use case"
          }
        },
        {
          "key": "OutcomeSlideVariant2-5f12e78a",
          "space": "",
          "content": {
            "articleProps": {
              "className": "slide c-salesforce",
              "role": "group",
              "aria-roledescription": "slide",
              "aria-label": "3 of 3",
              "hidden": true
            },
            "articleSpace": "\n",
            "imgProps": {
              "className": "sl-bg",
              "src": "/assets/img/cs-sf-customer-view.webp",
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
            "h3Props": {
              "className": "sl-t"
            },
            "cardTitle": "Unified Customer View Across Systems",
            "pProps": {},
            "description": "A more consistent view of customer information and better cross team coordination.",
            "divSpace4": "\n",
            "spanProps2": {
              "className": "sl-tag"
            },
            "label2": "Salesforce · Integration and Data Cloud",
            "aProps": {
              "className": "link",
              "href": "/use-cases#salesforce"
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
      "label2": " / 3",
      "divProps8": {
        "className": "wrap",
        "style": {
          "marginTop": "var(--s6)"
        }
      },
      "divProps9": {
        "className": "btns"
      },
      "aProps": {
        "className": "btn btn-ghost",
        "href": "/use-cases#salesforce"
      },
      "linkLabel": "View All Use Cases"
    }
  },
  {
    "type": "text",
    "key": "space-16",
    "content": "\n"
  },
  {
    "type": "DiscoveryCTA",
    "key": "final",
    "content": {
      "sectionProps": {
        "data-tone": "sf",
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
        "data-field": "funnel",
        "data-colors": "sf",
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
      "heading": "Let's Talk About Your Salesforce Priorities",
      "pProps": {
        "className": "lead"
      },
      "description": "Tell us about the sales, service or revenue process you want to improve. We will review your current setup and identify where Salesforce can make work clearer, faster or more consistent.",
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
        "href": "/use-cases#salesforce"
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
    "key": "space-18",
    "content": "\n"
  }
]
}
