import { chromeByPage } from './navigation'

// Local content preserved verbatim. Reorder sections here; templates contain no page copy.
export default {
  layout: "PageLayout",
  content: { ...chromeByPage["ai-automation"], ...{
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
    "type": "HeroSubSectionVariant2",
    "key": "ai-automation-HeroSubSectionVariant2-1",
    "content": {
      "sectionProps": {
        "data-tone": "brand",
        "className": "hero sub",
        "aria-labelledby": "h1",
        "data-scene-host": ""
      },
      "canvasProps": {
        "className": "field",
        "data-field": "network",
        "data-colors": "brand",
        "data-density": "1",
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
        "label4": "AI & Automation"
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
      "label3": "Operations",
      "h1Space4": " ",
      "spanProps7": {
        "className": "w"
      },
      "spanProps8": {
        "style": {
          "--i": "3"
        }
      },
      "label4": "with",
      "h1Space5": " ",
      "spanProps9": {
        "className": "w"
      },
      "spanProps10": {
        "style": {
          "--i": "4"
        }
      },
      "label5": "AI",
      "h1Space6": " ",
      "spanProps11": {
        "className": "w"
      },
      "spanProps12": {
        "style": {
          "--i": "5"
        }
      },
      "label6": "&",
      "h1Space7": " ",
      "spanProps13": {
        "className": "w"
      },
      "spanProps14": {
        "style": {
          "--i": "6"
        }
      },
      "label7": "Automation",
      "pProps": {
        "className": "lead"
      },
      "description": "Automate workflows, connect systems and embed AI into business processes to move faster and reduce manual effort across the enterprise.",
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
      "heading": "Agentic AI",
      "divProps3": {
        "className": "body"
      },
      "pProps": {},
      "description": "AI agents that interpret inputs, make decisions and trigger real business actions, grounded in your data and processes. We help organisations embed intelligent automation into everyday workflows, so work moves with more speed and accuracy."
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
      "description": "The priority areas where AI and automation drive measurable operational impact.",
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
        "d": "M4 4h6v5H4z M14 15h6v5h-6z M7 9v4a2 2 0 0 0 2 2h5"
      },
      "h3Props": {
        "className": "h3d"
      },
      "cardTitle": "Intelligent Workflow Automation",
      "pProps2": {},
      "description2": "Automate multi-step processes across systems with AI driven execution, so work moves without needless handoffs.",
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
      "cardTitle2": "Agentic AI and Decision Automation",
      "pProps3": {},
      "description3": "AI agents that interpret inputs, make decisions and trigger real business actions on trusted enterprise context.",
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
        "d": "M12 15a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v7a3 3 0 0 0 3 3z M19 11a7 7 0 0 1-14 0 M12 18v3"
      },
      "h3Props3": {
        "className": "h3d"
      },
      "cardTitle3": "Voice AI",
      "pProps4": {},
      "description4": "Voice agents that understand, route and act, turning spoken requests into structured workflows.",
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
        "d": "M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z M20 4h-6a3 3 0 0 0-3 3 M20 4v14h-7"
      },
      "h3Props4": {
        "className": "h3d"
      },
      "cardTitle4": "Knowledge AI",
      "pProps5": {},
      "description5": "Turn enterprise knowledge into instant answers, so teams and customers find accurate information without delay.",
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
      "heading": "AI & Automation Capabilities",
      "pProps": {
        "className": "lead"
      },
      "description": "From workflow automation to agents, voice, knowledge and data intelligence. AI built into real enterprise processes, not a side demo. Each capability acts on trusted data, with ownership and guardrails so it can run in production.",
      "divProps4": {
        "className": "xp"
      },
      "divProps5": {
        "className": "xp-tabs",
        "role": "tablist",
        "aria-label": "AI & Automation Capabilities",
        "aria-orientation": "vertical"
      },
      "buttonProps": {
        "role": "tab",
        "id": "xt-workflow-automation",
        "aria-controls": "xp-workflow-automation",
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
        "d": "M4 4h6v5H4z M14 15h6v5h-6z M7 9v4a2 2 0 0 0 2 2h5"
      },
      "spanProps2": {},
      "label": "Workflow Automation",
      "buttonProps2": {
        "role": "tab",
        "id": "xt-integration",
        "aria-controls": "xp-integration",
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
        "d": "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1 M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"
      },
      "spanProps4": {},
      "label2": "Integration",
      "buttonProps3": {
        "role": "tab",
        "id": "xt-agentic-ai",
        "aria-controls": "xp-agentic-ai",
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
        "d": "M5 9h14v10H5z M12 5v4 M12 3.6a1.4 1.4 0 1 0 0 .01 M9 13.5v1 M15 13.5v1 M9.5 17h5 M2.5 12.5v3 M21.5 12.5v3"
      },
      "spanProps6": {},
      "label3": "Agentic AI",
      "buttonProps4": {
        "role": "tab",
        "id": "xt-voice-ai",
        "aria-controls": "xp-voice-ai",
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
        "d": "M12 15a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v7a3 3 0 0 0 3 3z M19 11a7 7 0 0 1-14 0 M12 18v3"
      },
      "spanProps8": {},
      "label4": "Voice AI",
      "buttonProps5": {
        "role": "tab",
        "id": "xt-knowledge-ai",
        "aria-controls": "xp-knowledge-ai",
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
        "d": "M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z M20 4h-6a3 3 0 0 0-3 3 M20 4v14h-7"
      },
      "spanProps10": {},
      "label5": "Knowledge AI",
      "buttonProps6": {
        "role": "tab",
        "id": "xt-data-ai",
        "aria-controls": "xp-data-ai",
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
        "d": "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6 M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"
      },
      "spanProps12": {},
      "label6": "Data AI",
      "divProps6": {
        "className": "xp-panels"
      },
      "divProps7": {
        "className": "xp-panel",
        "role": "tabpanel",
        "id": "xp-workflow-automation",
        "aria-labelledby": "xt-workflow-automation"
      },
      "divProps8": {
        "className": "xp-copy"
      },
      "spanProps13": {
        "className": "xp-k"
      },
      "label7": "Workflow Automation",
      "h3Props": {
        "className": "h3d"
      },
      "cardTitle": "Processes that run themselves",
      "pProps2": {},
      "description2": "Automate multi-step processes across systems with AI driven execution. We design the process, the exceptions and the ownership, so automation runs in production instead of stopping at a demo.",
      "ulProps": {
        "className": "xp-tags",
        "aria-label": "Includes"
      },
      "liProps": {},
      "text": "Orchestration",
      "liProps2": {},
      "text2": "Approvals",
      "liProps3": {},
      "text3": "Exception handling",
      "aProps": {
        "className": "link more",
        "href": "/contact"
      },
      "linkLabel": "Talk to us about workflow automation",
      "figureProps": {
        "className": "xp-art has-img"
      },
      "imgProps": {
        "src": "/assets/img/production-workflow-automation.webp",
        "alt": "",
        "loading": "lazy",
        "decoding": "async"
      },
      "divProps9": {
        "className": "xp-panel",
        "role": "tabpanel",
        "id": "xp-integration",
        "aria-labelledby": "xt-integration",
        "hidden": true
      },
      "divProps10": {
        "className": "xp-copy"
      },
      "spanProps14": {
        "className": "xp-k"
      },
      "label8": "Integration",
      "h3Props2": {
        "className": "h3d"
      },
      "cardTitle2": "Systems that act as one",
      "pProps3": {},
      "description3": "Connect CRM, ERP, data platforms and APIs into unified workflows, so data and decisions do not stall at each handoff.",
      "ulProps2": {
        "className": "xp-tags",
        "aria-label": "Includes"
      },
      "liProps4": {},
      "text4": "CRM and ERP",
      "liProps5": {},
      "text5": "APIs",
      "liProps6": {},
      "text6": "Orchestration",
      "aProps2": {
        "className": "link more",
        "href": "/contact"
      },
      "linkLabel2": "Talk to us about integration",
      "figureProps2": {
        "className": "xp-art has-img"
      },
      "imgProps2": {
        "src": "/assets/img/enterprise-system-integration.webp",
        "alt": "",
        "loading": "lazy",
        "decoding": "async"
      },
      "divProps11": {
        "className": "xp-panel",
        "role": "tabpanel",
        "id": "xp-agentic-ai",
        "aria-labelledby": "xt-agentic-ai",
        "hidden": true
      },
      "divProps12": {
        "className": "xp-copy"
      },
      "spanProps15": {
        "className": "xp-k"
      },
      "label9": "Agentic AI",
      "h3Props3": {
        "className": "h3d"
      },
      "cardTitle3": "Agents that decide and act",
      "pProps4": {},
      "description4": "AI agents that interpret inputs, make decisions and trigger real business actions. Grounded in your data and processes, with guardrails so they run as part of the operation.",
      "ulProps3": {
        "className": "xp-tags",
        "aria-label": "Includes"
      },
      "liProps7": {},
      "text7": "Agents",
      "liProps8": {},
      "text8": "Decisions",
      "liProps9": {},
      "text9": "Governed actions",
      "aProps3": {
        "className": "link more",
        "href": "/contact"
      },
      "linkLabel3": "Talk to us about Agentic AI",
      "figureProps3": {
        "className": "xp-art has-img"
      },
      "imgProps3": {
        "src": "/assets/img/governed-agentic-ai.webp",
        "alt": "",
        "loading": "lazy",
        "decoding": "async"
      },
      "divProps13": {
        "className": "xp-panel",
        "role": "tabpanel",
        "id": "xp-voice-ai",
        "aria-labelledby": "xt-voice-ai",
        "hidden": true
      },
      "divProps14": {
        "className": "xp-copy"
      },
      "spanProps16": {
        "className": "xp-k"
      },
      "label10": "Voice AI",
      "h3Props4": {
        "className": "h3d"
      },
      "cardTitle4": "Requests captured by conversation",
      "pProps5": {},
      "description5": "Voice agents that understand, route and act. We capture the request accurately and land it in the system of record without extra forms.",
      "ulProps4": {
        "className": "xp-tags",
        "aria-label": "Includes"
      },
      "liProps10": {},
      "text10": "Voice agents",
      "liProps11": {},
      "text11": "Routing",
      "liProps12": {},
      "text12": "Ticket capture",
      "aProps4": {
        "className": "link more",
        "href": "/contact"
      },
      "linkLabel4": "Talk to us about Voice AI",
      "figureProps4": {
        "className": "xp-art has-img"
      },
      "imgProps4": {
        "src": "/assets/img/voice-to-structured-request.webp",
        "alt": "",
        "loading": "lazy",
        "decoding": "async"
      },
      "divProps15": {
        "className": "xp-panel",
        "role": "tabpanel",
        "id": "xp-knowledge-ai",
        "aria-labelledby": "xt-knowledge-ai",
        "hidden": true
      },
      "divProps16": {
        "className": "xp-copy"
      },
      "spanProps17": {
        "className": "xp-k"
      },
      "label11": "Knowledge AI",
      "h3Props5": {
        "className": "h3d"
      },
      "cardTitle5": "Answers from enterprise knowledge",
      "pProps6": {},
      "description6": "Turn enterprise knowledge into instant answers. Answers are grounded in owned sources, so they stay consistent and current.",
      "ulProps5": {
        "className": "xp-tags",
        "aria-label": "Includes"
      },
      "liProps13": {},
      "text13": "Knowledge bases",
      "liProps14": {},
      "text14": "Retrieval",
      "liProps15": {},
      "text15": "Grounded answers",
      "aProps5": {
        "className": "link more",
        "href": "/contact"
      },
      "linkLabel5": "Talk to us about Knowledge AI",
      "figureProps5": {
        "className": "xp-art has-img"
      },
      "imgProps5": {
        "src": "/assets/img/grounded-enterprise-knowledge.webp",
        "alt": "",
        "loading": "lazy",
        "decoding": "async"
      },
      "divProps17": {
        "className": "xp-panel",
        "role": "tabpanel",
        "id": "xp-data-ai",
        "aria-labelledby": "xt-data-ai",
        "hidden": true
      },
      "divProps18": {
        "className": "xp-copy"
      },
      "spanProps18": {
        "className": "xp-k"
      },
      "label12": "Data AI",
      "h3Props6": {
        "className": "h3d"
      },
      "cardTitle6": "Intelligence from live enterprise data",
      "pProps7": {},
      "description7": "Turn enterprise data into real-time intelligence for analytics, recommendations and automated decisions. We connect trusted data to the workflow so AI can act, not just report.",
      "ulProps6": {
        "className": "xp-tags",
        "aria-label": "Includes"
      },
      "liProps16": {},
      "text16": "Recommendations",
      "liProps17": {},
      "text17": "Analytics",
      "liProps18": {},
      "text18": "Automated decisions",
      "aProps6": {
        "className": "link more",
        "href": "/contact"
      },
      "linkLabel6": "Talk to us about Data AI",
      "figureProps6": {
        "className": "xp-art has-img"
      },
      "imgProps6": {
        "src": "/assets/img/live-data-intelligence.webp",
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
        "heading": "Let's Talk AI and Automation",
        "pProps": {},
        "description": "We will find one process where AI can take real work off the team, with the data and guardrails to run it.",
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
      "description": "Pick one process and prove the value quickly. Each focused engagement ends with something the team can use.",
      "divProps4": {
        "className": "tiles four offers"
      },
      "featureCardVariant3Items": [
        {
          "key": "FeatureCardVariant3-ec2dd316",
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
            "cardTitle": "Automation Opportunity Scan",
            "pProps": {},
            "description": "Find the processes where AI and automation will cut cycle time, and the ones that are not ready yet.",
            "divProps": {
              "className": "gets"
            },
            "bProps": {},
            "label2": "You get",
            "spanProps2": {},
            "label3": "Ranked opportunity list, data and process gaps, and a 90 day automation path.",
            "spanProps3": {
              "className": "link more"
            },
            "label4": "Request this"
          }
        },
        {
          "key": "FeatureCardVariant3-661091a1",
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
            "label": "4 weeks",
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Agent Workflow Pilot",
            "pProps": {},
            "description": "Stand up one agent that reads inputs, decides and triggers a real business action, with guardrails.",
            "divProps": {
              "className": "gets"
            },
            "bProps": {},
            "label2": "You get",
            "spanProps2": {},
            "label3": "Working agent workflow, governance notes and an expansion backlog.",
            "spanProps3": {
              "className": "link more"
            },
            "label4": "Request this"
          }
        },
        {
          "key": "FeatureCardVariant3-c6b7cde",
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
            "cardTitle": "Knowledge AI Grounding",
            "pProps": {},
            "description": "Turn enterprise knowledge into answers teams can trust, instead of another ungrounded chatbot.",
            "divProps": {
              "className": "gets"
            },
            "bProps": {},
            "label2": "You get",
            "spanProps2": {},
            "label3": "Source inventory, retrieval design and a first answer set with owners.",
            "spanProps3": {
              "className": "link more"
            },
            "label4": "Request this"
          }
        },
        {
          "key": "FeatureCardVariant3-d0bb06db",
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
            "label": "4 weeks",
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Voice AI Intake Pilot",
            "pProps": {},
            "description": "Capture requests by conversation and route them into structured workflows without extra forms.",
            "divProps": {
              "className": "gets"
            },
            "bProps": {},
            "label2": "You get",
            "spanProps2": {},
            "label3": "Voice intake path, routing rules and a quality baseline for the first process.",
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
      "heading": "How We Drive AI Transformation",
      "pProps": {
        "className": "lead"
      },
      "description": "From assessment through production. AI built for real workflows, governance and scale.",
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
        "description": "We find high impact automation opportunities, workflow bottlenecks and data readiness to set a clear AI path.",
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
        "description2": "One team builds production ready agents, integrations and governed automation, from architecture to rollout.",
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
        "description3": "We improve model performance, automation coverage and efficiency as usage grows across the enterprise."
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
          "key": "OutcomeSlide-f16216cc",
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
              "src": "/assets/img/cs-ai-invoice.webp",
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
            "label2": "99.6%",
            "h3Props": {
              "className": "sl-t"
            },
            "cardTitle": "Auto-Reconciliation Rate",
            "pProps": {},
            "description": "Built AI powered invoice reconciliation using OCR and NLP across structured and unstructured formats.",
            "divSpace5": "\n",
            "spanProps3": {
              "className": "sl-tag"
            },
            "label3": "AI & Automation · Document AI",
            "aProps": {
              "className": "link",
              "href": "/use-cases"
            },
            "linkLabel": "Read the use case"
          }
        },
        {
          "key": "OutcomeSlide-22b77702",
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
              "src": "/assets/img/cs-ai-voice.webp",
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
            "label2": "4x",
            "h3Props": {
              "className": "sl-t"
            },
            "cardTitle": "Increase in Call Handling Capacity",
            "pProps": {},
            "description": "Deployed voice agents that understand, route and act, with automated outbound calling and 24/7 availability.",
            "divSpace5": "\n",
            "spanProps3": {
              "className": "sl-tag"
            },
            "label3": "AI & Automation · Voice agents",
            "aProps": {
              "className": "link",
              "href": "/use-cases"
            },
            "linkLabel": "Read the use case"
          }
        },
        {
          "key": "OutcomeSlide-eda60c90",
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
              "src": "/assets/img/cs-ai-migration.webp",
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
            "label2": "50%",
            "h3Props": {
              "className": "sl-t"
            },
            "cardTitle": "Reduction in Data Migration Effort",
            "pProps": {},
            "description": "Deployed an AI driven migration accelerator for schema mapping, code conversion and automated validation.",
            "divSpace5": "\n",
            "spanProps3": {
              "className": "sl-tag"
            },
            "label3": "AI & Automation · Migration accelerator",
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
      "description": "A partner focused on practical AI and automation, from discovery through production, with outcomes that scale with your business.",
      "divProps4": {
        "className": "quad"
      },
      "featureCardItems": [
        {
          "key": "FeatureCard-be7c7505",
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
            "description": "Proven delivery across complex Salesforce, ServiceNow and data environments, with security and governance built in."
          }
        },
        {
          "key": "FeatureCard-6e2d55d9",
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
            "cardTitle": "Production-Ready AI",
            "pProps": {},
            "description": "Deep experience with agentic workflows, LLM integrations and automation frameworks built for real operations."
          }
        },
        {
          "key": "FeatureCard-747cac4d",
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
            "description": "From assessment and architecture to implementation and optimisation. One team owns the full AI lifecycle."
          }
        },
        {
          "key": "FeatureCard-9a96dc25",
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
            "description": "Clear success measures tied to cycle time, manual effort, data quality and operational efficiency."
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
      "heading": "Let's Talk About Your AI Priorities",
      "pProps": {
        "className": "lead"
      },
      "description": "We will review your current workflows and find where automation and AI can improve speed, accuracy and execution.",
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
