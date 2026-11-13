import { chromeByPage } from './navigation'

// Local content preserved verbatim. Reorder sections here; templates contain no page copy.
export default {
  layout: "PageLayout",
  content: { ...chromeByPage["servicenow"], ...{
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
    "type": "HeroSubHasSceneSectionVariant3",
    "key": "servicenow-HeroSubHasSceneSectionVariant3-1",
    "content": {
      "sectionProps": {
        "data-tone": "sn",
        "className": "hero sub has-scene",
        "aria-labelledby": "h1",
        "data-scene-host": ""
      },
      "canvasProps": {
        "className": "field scene",
        "data-scene": "grid",
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
        "label4": "ServiceNow"
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
      "label": "ServiceNow",
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
      "label4": "Better",
      "h1Space5": " ",
      "spanProps9": {
        "className": "w"
      },
      "spanProps10": {
        "style": {
          "--i": "4"
        }
      },
      "label5": "Operations",
      "pProps": {
        "className": "lead"
      },
      "description": "We help enterprises improve service delivery, structure workflows and reduce avoidable manual effort. Our ServiceNow work connects platform capabilities with the processes employees, service teams and business functions rely on every day.",
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
        "href": "/use-cases#servicenow"
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
    "type": "PartnerSection",
    "key": "partner",
    "content": {
      "sectionProps": {
        "data-tone": "night",
        "className": "sec tight",
        "id": "partner",
        "aria-labelledby": "h-partner"
      },
      "divProps": {
        "className": "wrap"
      },
      "divProps2": {
        "className": "strip"
      },
      "h2Props": {
        "className": "who",
        "id": "h-partner"
      },
      "svgProps": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps": {
        "d": "M9 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M15 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
      },
      "heading": " Official ServiceNow Partner",
      "pProps": {
        "className": "muted",
        "style": {
          "maxWidth": "52ch"
        }
      },
      "description": "Palni works with ServiceNow to help organisations improve service management and automate enterprise workflows."
    }
  },
  {
    "type": "text",
    "key": "space-4",
    "content": "\n"
  },
  {
    "type": "RoutesSection",
    "key": "focus",
    "content": {
      "sectionProps": {
        "data-tone": "sn",
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
      "heading": "Where ServiceNow Can Make a Difference",
      "pProps": {
        "className": "lead"
      },
      "description": "We focus on the workflows and service experiences that shape response times, operational effort and the quality of support.",
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
        "d": "M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4z M14 7v10"
      },
      "h3Props": {
        "className": "h3d"
      },
      "cardTitle": "ITSM & Service Operations",
      "pProps2": {},
      "description2": "Structure incident, request and problem management so teams can see work clearly and follow consistent service processes.",
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
        "d": "M12 3v3M12 18v3M3 12h3M18 12h3 M12 8.5l1.2 2.3 2.3 1.2-2.3 1.2L12 15.5l-1.2-2.3L8.5 12l2.3-1.2z M5.6 5.6l1.6 1.6 M16.8 16.8l1.6 1.6"
      },
      "h3Props2": {
        "className": "h3d"
      },
      "cardTitle2": "Now Assist & AI",
      "pProps3": {},
      "description3": "Use AI supported service workflows to help teams find information, prioritise work and respond with better context.",
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
        "d": "M4 4h6v5H4z M14 15h6v5h-6z M7 9v4a2 2 0 0 0 2 2h5"
      },
      "h3Props3": {
        "className": "h3d"
      },
      "cardTitle3": "Workflow Automation",
      "pProps4": {},
      "description4": "Replace avoidable manual steps with structured workflows that are easier to track, manage and improve.",
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
        "data-tone": "night",
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
      "heading": "Outcomes That Make ServiceNow More Effective Across the Business",
      "pProps": {
        "className": "lead"
      },
      "description": "A well structured ServiceNow environment makes service delivery more consistent and gives teams a clearer view of work, ownership and progress.",
      "divProps4": {
        "className": "quad"
      },
      "featureCardItems": [
        {
          "key": "FeatureCard-3594ba9c",
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
              "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3.5 2"
            },
            "h3Props": {},
            "cardTitle": "Faster Resolution Times",
            "pProps": {},
            "description": "Improve the intake and routing of service work to help reduce delays and repeated effort."
          }
        },
        {
          "key": "FeatureCard-1823c966",
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
              "d": "M4 6h10M18 6h2 M4 12h4M12 12h8 M4 18h12M20 18h0 M16 4v4 M10 10v4 M18 16v4"
            },
            "h3Props": {},
            "cardTitle": "Operational Efficiency",
            "pProps": {},
            "description": "Reduce unnecessary manual steps and make workflow execution more consistent."
          }
        },
        {
          "key": "FeatureCard-3bf18fbf",
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
              "d": "M4 20h16 M6 16l4-4 3 3 5-6 M15 9h3v3"
            },
            "h3Props": {},
            "cardTitle": "Scalable Service Delivery",
            "pProps": {},
            "description": "Build processes that can support changing service volumes, teams and business requirements."
          }
        },
        {
          "key": "FeatureCard-78dd0d04",
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
            "cardTitle": "AI Enabled Operations",
            "pProps": {},
            "description": "Apply Now Assist and other approved AI capabilities where they support service teams and workflows."
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
    "type": "SolutionsSectionVariant2",
    "key": "solutions",
    "content": {
      "sectionProps": {
        "data-tone": "sn",
        "className": "sec",
        "id": "solutions",
        "aria-labelledby": "h-solutions"
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
        "id": "h-solutions"
      },
      "heading": "Capabilities Across Service Management and Enterprise Workflows",
      "pProps": {
        "className": "lead"
      },
      "description": "Palni helps teams apply the relevant ServiceNow products to the operational workflows they need to improve.",
      "divProps4": {
        "className": "tiles"
      },
      "divProps5": {
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
        "d": "M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4z M14 7v10"
      },
      "spanProps2": {
        "className": "tag"
      },
      "label": "IT Service Management",
      "h3Props": {
        "className": "h4d"
      },
      "cardTitle": "ITSM",
      "pProps2": {},
      "description2": "Manage incidents, requests and problems with clear ownership, routing and service processes.",
      "divProps6": {
        "className": "tile"
      },
      "spanProps3": {
        "className": "icb"
      },
      "svgProps2": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps2": {
        "d": "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z"
      },
      "spanProps4": {
        "className": "tag"
      },
      "label2": "Field Service Management",
      "h3Props2": {
        "className": "h4d"
      },
      "cardTitle2": "FSM",
      "pProps3": {},
      "description3": "Coordinate field operations, scheduling and service work across teams and locations.",
      "divProps7": {
        "className": "tile"
      },
      "spanProps5": {
        "className": "icb"
      },
      "svgProps3": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps3": {
        "d": "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z M2.5 20a6.5 6.5 0 0 1 13 0 M16 4.6a3.5 3.5 0 0 1 0 6.8 M18 14.2a6 6 0 0 1 3.5 5.8"
      },
      "spanProps6": {
        "className": "tag"
      },
      "label3": "HR Service Delivery",
      "h3Props3": {
        "className": "h4d"
      },
      "cardTitle3": "HRSD",
      "pProps4": {},
      "description4": "Create clearer employee service experiences with structured requests and workflows.",
      "featureCard": {
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
          "d": "M12 3v3M12 18v3M3 12h3M18 12h3 M12 8.5l1.2 2.3 2.3 1.2-2.3 1.2L12 15.5l-1.2-2.3L8.5 12l2.3-1.2z M5.6 5.6l1.6 1.6 M16.8 16.8l1.6 1.6"
        },
        "h3Props": {
          "className": "h4d"
        },
        "cardTitle": "Now Assist",
        "pProps": {},
        "description": "Bring AI supported assistance into approved ServiceNow workflows to help teams work with better context."
      },
      "divProps8": {
        "className": "tile"
      },
      "spanProps7": {
        "className": "icb"
      },
      "svgProps4": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps4": {
        "d": "M4 15v-3a8 8 0 0 1 16 0v3 M4 14h3v6H4z M17 14h3v6h-3z M20 20a3 3 0 0 1-3 2h-3"
      },
      "spanProps8": {
        "className": "tag"
      },
      "label4": "Customer Service Management",
      "h3Props4": {
        "className": "h4d"
      },
      "cardTitle4": "CSM",
      "pProps5": {},
      "description5": "Connect customer service cases, resolution processes and service information.",
      "featureCard2": {
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
        "cardTitle": "Platform and Workflow Automation",
        "pProps": {},
        "description": "Connect services and automate routine processes across supported enterprise workflows."
      }
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
        "heading": "Let's Talk ServiceNow",
        "pProps": {},
        "description": "Tell us which service process needs the most attention. We will help you find a practical place to start.",
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
        "data-tone": "sn",
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
      "heading": "Supporting Capabilities for Wider Enterprise Needs",
      "pProps": {
        "className": "lead"
      },
      "description": "These capabilities strengthen the ServiceNow solution where the operating environment and priorities call for them.",
      "divProps4": {
        "className": "ledger compact"
      },
      "featureCardItems": [
        {
          "key": "FeatureCard-5fb1b376",
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
              "d": "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6 M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"
            },
            "h3Props": {},
            "cardTitle": "Asset and Configuration Management",
            "pProps": {},
            "description": "Improve visibility into assets, configuration relationships and the information teams need to manage services."
          }
        },
        {
          "key": "FeatureCard-7d39efe5",
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
              "d": "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"
            },
            "h3Props": {},
            "cardTitle": "Security and Risk Operations",
            "pProps": {},
            "description": "Support structured workflows for security, risk and related operational processes."
          }
        },
        {
          "key": "FeatureCard-2aa1d096",
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
            "cardTitle": "Integration and Automation",
            "pProps": {},
            "description": "Connect systems and reduce repeated manual steps through controlled workflows and integrations."
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
    "type": "VoicecueSection",
    "key": "voicecue",
    "content": {
      "sectionProps": {
        "data-tone": "night",
        "className": "sec",
        "id": "voicecue",
        "aria-labelledby": "h-voicecue"
      },
      "divProps": {
        "className": "wrap"
      },
      "divProps2": {
        "className": "feature"
      },
      "divProps3": {
        "style": {
          "display": "grid",
          "gap": "var(--s5)"
        }
      },
      "h2Props": {
        "id": "h-voicecue"
      },
      "heading": "VoiceCueAI: Make Service Requests Easier to Raise",
      "pProps": {
        "className": "lead"
      },
      "description": "VoiceCueAI lets users report incidents and raise service requests through a voice conversation. It captures the request and connects it to structured ServiceNow workflows. This reduces friction at intake and gives service teams clearer information to act on.",
      "divProps4": {
        "className": "btns"
      },
      "aProps": {
        "className": "btn btn-ghost",
        "href": "https://palni.com/servicenow/",
        "target": "_blank",
        "rel": "noopener"
      },
      "linkLabel": "Watch VoiceCueAI in Action",
      "divSpace9": "\n",
      "figureProps": {
        "className": "vc",
        "style": {
          "margin": "0"
        },
        "aria-label": "Illustration of a voice request becoming a structured ServiceNow ticket"
      },
      "canvasProps": {
        "data-wave": "",
        "aria-hidden": "true"
      },
      "figureSpace2": "\n",
      "pProps2": {
        "className": "small muted"
      },
      "description2": "“My laptop will not connect to the office VPN since this morning.”",
      "figureSpace3": "\n",
      "dlProps": {
        "className": "ticket",
        "style": {
          "margin": "0"
        }
      },
      "divProps5": {},
      "dtProps": {},
      "text": "Type",
      "ddProps": {},
      "text2": "Incident",
      "divProps6": {},
      "dtProps2": {},
      "text3": "Category",
      "ddProps2": {},
      "text4": "Network / VPN",
      "divProps7": {},
      "dtProps3": {},
      "text5": "Summary",
      "ddProps3": {},
      "text6": "Laptop cannot connect to VPN",
      "divProps8": {},
      "dtProps4": {},
      "text7": "Route to",
      "ddProps4": {},
      "text8": "Network service desk",
      "figureSpace4": "\n",
      "figcaptionProps": {
        "className": "cap2"
      },
      "text9": "Illustrative example. Use approved VoiceCueAI screenshots or video before launch."
    }
  },
  {
    "type": "text",
    "key": "space-16",
    "content": "\n"
  },
  {
    "type": "UsecasesSectionVariant2",
    "key": "usecases",
    "content": {
      "sectionProps": {
        "data-tone": "sn",
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
      "heading": "ServiceNow in Practice",
      "pProps": {
        "className": "lead"
      },
      "description": "These examples show how asset governance, software lifecycle management and simpler service intake improve operational control and service performance.",
      "divProps4": {
        "className": "slider",
        "aria-roledescription": "carousel",
        "aria-label": "ServiceNow in Practice"
      },
      "divProps5": {
        "className": "slides"
      },
      "outcomeSlideItems": [
        {
          "key": "OutcomeSlide-f870bae3",
          "space": "",
          "content": {
            "articleProps": {
              "className": "slide c-servicenow",
              "role": "group",
              "aria-roledescription": "slide",
              "aria-label": "1 of 3"
            },
            "articleSpace": "\n",
            "imgProps": {
              "className": "sl-bg",
              "src": "/assets/img/cs-sn-hardware.webp",
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
            "label2": "25%",
            "h3Props": {
              "className": "sl-t"
            },
            "cardTitle": "Reduction in Hardware Spend",
            "pProps": {},
            "description": "Lower hardware spend, zero audit findings and real time asset visibility, as currently published.",
            "divSpace5": "\n",
            "spanProps3": {
              "className": "sl-tag"
            },
            "label3": "ServiceNow · IT Asset Management",
            "aProps": {
              "className": "link",
              "href": "/use-cases#servicenow"
            },
            "linkLabel": "Read the use case"
          }
        },
        {
          "key": "OutcomeSlide-98a4c7ee",
          "space": "",
          "content": {
            "articleProps": {
              "className": "slide c-servicenow",
              "role": "group",
              "aria-roledescription": "slide",
              "aria-label": "2 of 3",
              "hidden": true
            },
            "articleSpace": "\n",
            "imgProps": {
              "className": "sl-bg",
              "src": "/assets/img/cs-sn-software.webp",
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
            "label2": "30%",
            "h3Props": {
              "className": "sl-t"
            },
            "cardTitle": "Reduction in Software Spend",
            "pProps": {},
            "description": "Reduced shadow IT, audit ready compliance and real time monitoring.",
            "divSpace5": "\n",
            "spanProps3": {
              "className": "sl-tag"
            },
            "label3": "ServiceNow · Software Asset Management",
            "aProps": {
              "className": "link",
              "href": "/use-cases#servicenow"
            },
            "linkLabel": "Read the use case"
          }
        }
      ],
      "outcomeSlideVariant2": {
        "articleProps": {
          "className": "slide c-servicenow",
          "role": "group",
          "aria-roledescription": "slide",
          "aria-label": "3 of 3",
          "hidden": true
        },
        "articleSpace": "\n",
        "imgProps": {
          "className": "sl-bg",
          "src": "/assets/img/cs-sn-ticket.webp",
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
        "cardTitle": "Faster Ticket Reporting with Voice Intake",
        "pProps": {},
        "description": "Faster intake and reduced service desk burden.",
        "divSpace4": "\n",
        "spanProps2": {
          "className": "sl-tag"
        },
        "label2": "ServiceNow · Voice intake and ITSM",
        "aProps": {
          "className": "link",
          "href": "/use-cases#servicenow"
        },
        "linkLabel": "Read the use case"
      },
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
        "href": "/use-cases#servicenow"
      },
      "linkLabel": "View All Use Cases"
    }
  },
  {
    "type": "text",
    "key": "space-18",
    "content": "\n"
  },
  {
    "type": "AcceleratorsSection",
    "key": "accelerators",
    "content": {
      "sectionProps": {
        "data-tone": "night",
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
      "heading": "Selected ServiceNow Accelerators",
      "pProps": {
        "className": "lead"
      },
      "description": "Reusable workflows and automation for defined ServiceNow challenges. VoiceCueAI is featured above.",
      "divProps4": {
        "className": "tiles"
      },
      "divProps5": {
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
      "spanProps2": {
        "className": "tag"
      },
      "label": "AUA / UAM 360",
      "h3Props": {
        "className": "h4d"
      },
      "cardTitle": "Access Management",
      "pProps2": {},
      "description2": "Centralise user access governance in ServiceNow with guided access decisions, lifecycle workflows, role and group management, and audit ready reporting.",
      "featureCard": {
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
          "d": "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6 M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"
        },
        "h3Props": {
          "className": "h4d"
        },
        "cardTitle": "CMDB and AI Readiness Assessment",
        "pProps": {},
        "description": "Review CMDB completeness, relationships, governance and readiness for AI driven service workflows. Get a prioritised view of gaps and recommended fixes."
      },
      "divProps6": {
        "className": "tile"
      },
      "spanProps3": {
        "className": "icb"
      },
      "svgProps2": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps2": {
        "d": "M12 15a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v7a3 3 0 0 0 3 3z M19 11a7 7 0 0 1-14 0 M12 18v3"
      },
      "spanProps4": {
        "className": "tag"
      },
      "label2": "Service Desk",
      "h3Props2": {
        "className": "h4d"
      },
      "cardTitle2": "VoiceCueAI",
      "pProps3": {},
      "description3": "Capture incidents and requests through voice and turn conversations into structured service workflows. Links to the feature above."
    }
  },
  {
    "type": "text",
    "key": "space-20",
    "content": "\n"
  },
  {
    "type": "DiscoveryCTA",
    "key": "final",
    "content": {
      "sectionProps": {
        "data-tone": "sn",
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
        "data-field": "lanes",
        "data-colors": "sn",
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
      "heading": "Let's Talk About Your ServiceNow Priorities",
      "pProps": {
        "className": "lead"
      },
      "description": "Tell us about the service process, workflow or operational challenge you want to improve. We will review your current environment and identify a practical starting point.",
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
        "href": "/use-cases#servicenow"
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
    "key": "space-22",
    "content": "\n"
  }
]
}
