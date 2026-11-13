import { chromeByPage } from './navigation'

// Local content preserved verbatim. Reorder sections here; templates contain no page copy.
export default {
  layout: "PageLayout",
  content: {
    ...chromeByPage["cx-solutions"], ...{
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
    }
  },
  sections: [
    {
      "type": "text",
      "key": "space-0",
      "content": "\n"
    },
    {
      "type": "HeroSubSectionVariant5",
      "key": "cx-solutions-HeroSubSectionVariant5-1",
      "content": {
        "sectionProps": {
          "data-tone": "brand",
          "className": "hero sub",
          "aria-labelledby": "h1",
          "data-scene-host": ""
        },
        "canvasProps": {
          "className": "field",
          "data-field": "confluence",
          "data-colors": "sf,sn,db",
          "data-density": "0.8",
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
          "label4": "CX Solutions"
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
        "label": "CX",
        "h1Space2": " ",
        "spanProps3": {
          "className": "w"
        },
        "spanProps4": {
          "style": {
            "--i": "1"
          }
        },
        "label2": "Solutions",
        "h1Space3": " ",
        "spanProps5": {
          "className": "w"
        },
        "spanProps6": {
          "style": {
            "--i": "2"
          }
        },
        "label3": "That",
        "h1Space4": " ",
        "spanProps7": {
          "className": "w"
        },
        "spanProps8": {
          "style": {
            "--i": "3"
          }
        },
        "label4": "Improve",
        "h1Space5": " ",
        "spanProps9": {
          "className": "w"
        },
        "spanProps10": {
          "style": {
            "--i": "4"
          }
        },
        "label5": "Service,",
        "h1Space6": " ",
        "spanProps11": {
          "className": "w"
        },
        "spanProps12": {
          "style": {
            "--i": "5"
          }
        },
        "label6": "Support",
        "h1Space7": " ",
        "spanProps13": {
          "className": "w"
        },
        "spanProps14": {
          "style": {
            "--i": "6"
          }
        },
        "label7": "and",
        "h1Space8": " ",
        "spanProps15": {
          "className": "w"
        },
        "spanProps16": {
          "style": {
            "--i": "7"
          }
        },
        "label8": "Loyalty",
        "pProps": {
          "className": "lead"
        },
        "description": "We help businesses modernize customer journeys, support operations, and back-office processes with technology-enabled CX services.",
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
        "heading": "Intelligent Support",
        "divProps3": {
          "className": "body"
        },
        "pProps": {},
        "description": "AI-enabled routing, case handling, and knowledge — so customers get faster answers and teams spend less time on manual work."
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
        "description": "The priority areas that improve customer experience and service outcomes.",
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
          "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M15.5 8.5l-2 5-5 2 2-5z"
        },
        "h3Props": {
          "className": "h3d"
        },
        "cardTitle": "Customer Journey Transformation",
        "pProps2": {},
        "description2": "Design and optimize end-to-end customer journeys across digital and human touchpoints.",
        "divProps6": {
          "className": ""
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
        "cardTitle2": "AI and Intelligent Support",
        "pProps3": {},
        "description3": "Embed AI into customer interactions and support workflows to enable faster responses, smarter routing, and better resolution.",
        "divProps8": {
          "className": ""
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
          "d": "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        },
        "h3Props3": {
          "className": "h3d"
        },
        "cardTitle3": "Service Operations and Visibility",
        "pProps4": {},
        "description4": "Improve service performance with better case management and real-time insights across SLAs and resolution timelines.",
        "divProps10": {
          "className": ""
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
          "d": "M4 15v-3a8 8 0 0 1 16 0v3 M4 14h3v6H4z M17 14h3v6h-3z M20 20a3 3 0 0 1-3 2h-3"
        },
        "h3Props4": {
          "className": "h3d"
        },
        "cardTitle4": "Omnichannel Support",
        "pProps5": {},
        "description5": "Voice, chat, email, and digital channels managed in a unified support model so customers get a consistent experience.",
        "divProps12": {
          "className": ""
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
        "heading": "CX Capabilities",
        "pProps": {
          "className": "lead"
        },
        "description": "From customer journeys and intelligent support to omnichannel service, operations, insights, and knowledge, we design CX as one connected experience rather than a collection of channels. Shared customer context, clear ownership, and a consistent path to resolution keep every interaction informed and seamless.",
        "divProps4": {
          "className": "xp"
        },
        "divProps5": {
          "className": "xp-tabs",
          "role": "tablist",
          "aria-label": "CX Capabilities",
          "aria-orientation": "vertical"
        },
        "buttonProps": {
          "role": "tab",
          "id": "xt-customer-journeys",
          "aria-controls": "xp-customer-journeys",
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
          "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M15.5 8.5l-2 5-5 2 2-5z"
        },
        "spanProps2": {},
        "label": "Customer Journeys",
        "buttonProps2": {
          "role": "tab",
          "id": "xt-intelligent-support",
          "aria-controls": "xp-intelligent-support",
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
          "d": "M12 3v3M12 18v3M3 12h3M18 12h3 M12 8.5l1.2 2.3 2.3 1.2-2.3 1.2L12 15.5l-1.2-2.3L8.5 12l2.3-1.2z M5.6 5.6l1.6 1.6 M16.8 16.8l1.6 1.6"
        },
        "spanProps4": {},
        "label2": "Intelligent Support",
        "buttonProps3": {
          "role": "tab",
          "id": "xt-service-operations",
          "aria-controls": "xp-service-operations",
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
          "d": "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        },
        "spanProps6": {},
        "label3": "Service Operations",
        "buttonProps4": {
          "role": "tab",
          "id": "xt-omnichannel",
          "aria-controls": "xp-omnichannel",
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
          "d": "M4 15v-3a8 8 0 0 1 16 0v3 M4 14h3v6H4z M17 14h3v6h-3z M20 20a3 3 0 0 1-3 2h-3"
        },
        "spanProps8": {},
        "label4": "Omnichannel",
        "buttonProps5": {
          "role": "tab",
          "id": "xt-insights-and-analytics",
          "aria-controls": "xp-insights-and-analytics",
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
          "d": "M3 17l6-6 4 4 8-8 M15 7h6v6"
        },
        "spanProps10": {},
        "label5": "Insights and Analytics",
        "buttonProps6": {
          "role": "tab",
          "id": "xt-knowledge",
          "aria-controls": "xp-knowledge",
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
          "d": "M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z M20 4h-6a3 3 0 0 0-3 3 M20 4v14h-7"
        },
        "spanProps12": {},
        "label6": "Knowledge",
        "divProps6": {
          "className": "xp-panels"
        },
        "divProps7": {
          "className": "xp-panel",
          "role": "tabpanel",
          "id": "xp-customer-journeys",
          "aria-labelledby": "xt-customer-journeys"
        },
        "divProps8": {
          "className": "xp-copy"
        },
        "spanProps13": {
          "className": "xp-k"
        },
        "label7": "Customer Journeys",
        "h3Props": {
          "className": "h3d"
        },
        "cardTitle": "Journeys that stay connected",
        "pProps2": {},
        "description2": "Design and optimize end-to-end customer journeys across digital and human touchpoints. We find the handoffs that break the experience and reconnect them so the journey stays consistent.",
        "ulProps": {
          "className": "xp-tags",
          "aria-label": "Includes"
        },
        "liProps": {},
        "text": "Journey design",
        "liProps2": {},
        "text2": "Touchpoints",
        "liProps3": {},
        "text3": "Handoffs",
        "aProps": {
          "className": "link more",
          "href": "/contact"
        },
        "linkLabel": "Talk to us about customer journeys",
        "figureProps": {
          "className": "xp-art has-img"
        },
        "imgProps": {
          "src": "/assets/img/connected-customer-journeys.webp",
          "alt": "",
          "loading": "lazy",
          "decoding": "async"
        },
        "divProps9": {
          "className": "xp-panel",
          "role": "tabpanel",
          "id": "xp-intelligent-support",
          "aria-labelledby": "xt-intelligent-support",
          "hidden": true
        },
        "divProps10": {
          "className": "xp-copy"
        },
        "spanProps14": {
          "className": "xp-k"
        },
        "label8": "Intelligent Support",
        "h3Props2": {
          "className": "h3d"
        },
        "cardTitle2": "Support that resolves faster",
        "pProps3": {},
        "description3": "Embed AI into customer interactions and support workflows for smarter routing and better resolution. We put assist where agents and customers already work so cases close faster without extra tools.",
        "ulProps2": {
          "className": "xp-tags",
          "aria-label": "Includes"
        },
        "liProps4": {},
        "text4": "Routing",
        "liProps5": {},
        "text5": "AI assist",
        "liProps6": {},
        "text6": "Resolution",
        "aProps2": {
          "className": "link more",
          "href": "/contact"
        },
        "linkLabel2": "Talk to us about intelligent support",
        "figureProps2": {
          "className": "xp-art has-img"
        },
        "imgProps2": {
          "src": "/assets/img/intelligent-support-resolution.webp",
          "alt": "",
          "loading": "lazy",
          "decoding": "async"
        },
        "divProps11": {
          "className": "xp-panel",
          "role": "tabpanel",
          "id": "xp-service-operations",
          "aria-labelledby": "xt-service-operations",
          "hidden": true
        },
        "divProps12": {
          "className": "xp-copy"
        },
        "spanProps15": {
          "className": "xp-k"
        },
        "label9": "Service Operations",
        "h3Props3": {
          "className": "h3d"
        },
        "cardTitle3": "Service performance you can see",
        "pProps4": {},
        "description4": "Improve service performance with better case management and real-time insights. We make SLAs, queues, and ownership visible so leaders can see where work stalls and why.",
        "ulProps3": {
          "className": "xp-tags",
          "aria-label": "Includes"
        },
        "liProps7": {},
        "text7": "Case management",
        "liProps8": {},
        "text8": "SLAs",
        "liProps9": {},
        "text9": "Visibility",
        "aProps3": {
          "className": "link more",
          "href": "/contact"
        },
        "linkLabel3": "Talk to us about service operations",
        "figureProps3": {
          "className": "xp-art has-img"
        },
        "imgProps3": {
          "src": "/assets/img/visible-service-operations.webp",
          "alt": "",
          "loading": "lazy",
          "decoding": "async"
        },
        "divProps13": {
          "className": "xp-panel",
          "role": "tabpanel",
          "id": "xp-omnichannel",
          "aria-labelledby": "xt-omnichannel",
          "hidden": true
        },
        "divProps14": {
          "className": "xp-copy"
        },
        "spanProps16": {
          "className": "xp-k"
        },
        "label10": "Omnichannel",
        "h3Props4": {
          "className": "h3d"
        },
        "cardTitle4": "One support model across channels",
        "pProps5": {},
        "description5": "Voice, chat, email, and digital channels managed in a unified support model. Customers keep the same context and ownership as they move between channels, instead of starting over.",
        "ulProps4": {
          "className": "xp-tags",
          "aria-label": "Includes"
        },
        "liProps10": {},
        "text10": "Voice",
        "liProps11": {},
        "text11": "Chat",
        "liProps12": {},
        "text12": "Email",
        "aProps4": {
          "className": "link more",
          "href": "/contact"
        },
        "linkLabel4": "Talk to us about omnichannel",
        "figureProps4": {
          "className": "xp-art has-img"
        },
        "imgProps4": {
          "src": "/assets/img/unified-omnichannel-context.webp",
          "alt": "",
          "loading": "lazy",
          "decoding": "async"
        },
        "divProps15": {
          "className": "xp-panel",
          "role": "tabpanel",
          "id": "xp-insights-and-analytics",
          "aria-labelledby": "xt-insights-and-analytics",
          "hidden": true
        },
        "divProps16": {
          "className": "xp-copy"
        },
        "spanProps17": {
          "className": "xp-k"
        },
        "label11": "Insights and Analytics",
        "h3Props5": {
          "className": "h3d"
        },
        "cardTitle5": "Experience measured, not guessed",
        "pProps6": {},
        "description6": "Capture and analyze interaction data to understand behavior, sentiment, and service performance. We turn those signals into actions teams can use — not a dashboard that sits unused.",
        "ulProps5": {
          "className": "xp-tags",
          "aria-label": "Includes"
        },
        "liProps13": {},
        "text13": "Sentiment",
        "liProps14": {},
        "text14": "Behaviour",
        "liProps15": {},
        "text15": "Service performance",
        "aProps5": {
          "className": "link more",
          "href": "/contact"
        },
        "linkLabel5": "Talk to us about insights and analytics",
        "figureProps5": {
          "className": "xp-art has-img"
        },
        "imgProps5": {
          "src": "/assets/img/actionable-customer-insights.webp",
          "alt": "",
          "loading": "lazy",
          "decoding": "async"
        },
        "divProps17": {
          "className": "xp-panel",
          "role": "tabpanel",
          "id": "xp-knowledge",
          "aria-labelledby": "xt-knowledge",
          "hidden": true
        },
        "divProps18": {
          "className": "xp-copy"
        },
        "spanProps18": {
          "className": "xp-k"
        },
        "label12": "Knowledge",
        "h3Props6": {
          "className": "h3d"
        },
        "cardTitle6": "Answers that stay consistent",
        "pProps7": {},
        "description7": "Centralize knowledge bases to enable faster resolution and consistent customer responses. Agents and customers get the same answer from owned content, so service quality does not depend on who picks up the case.",
        "ulProps6": {
          "className": "xp-tags",
          "aria-label": "Includes"
        },
        "liProps16": {},
        "text16": "Knowledge bases",
        "liProps17": {},
        "text17": "Consistency",
        "liProps18": {},
        "text18": "Faster resolution",
        "aProps6": {
          "className": "link more",
          "href": "/contact"
        },
        "linkLabel6": "Talk to us about knowledge",
        "figureProps6": {
          "className": "xp-art has-img"
        },
        "imgProps6": {
          "src": "/assets/img/consistent-customer-knowledge.webp",
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
          "heading": "Find Where the Experience Breaks",
          "pProps": {},
          "description": "We’ll find the journey or support break that is costing conversion, loyalty, or handle time.",
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
        "description": "Target a specific business problem, strengthen what is already in place, or define the next move with confidence. Our focused engagements turn priorities into a clear path to action.",
        "divProps4": {
          "className": "tiles four offers"
        },
        "featureCardVariant3Items": [
          {
            "key": "FeatureCardVariant3-24d301f1",
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
              "cardTitle": "Journey Friction Diagnostic",
              "pProps": {},
              "description": "Find the handoffs, channel breaks, and delays that cost conversion, loyalty, or extra handle time.",
              "divProps": {
                "className": "gets"
              },
              "bProps": {},
              "label2": "You get",
              "spanProps2": {},
              "label3": "Journey friction map, ranked fixes, and a 90-day CX path.",
              "spanProps3": {
                "className": "link more"
              },
              "label4": "Request this"
            }
          },
          {
            "key": "FeatureCardVariant3-5c5a2493",
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
              "cardTitle": "Intelligent Support Review",
              "pProps": {},
              "description": "See where routing, knowledge, and AI assist would resolve cases faster — without adding agent load.",
              "divProps": {
                "className": "gets"
              },
              "bProps": {},
              "label2": "You get",
              "spanProps2": {},
              "label3": "Support flow map, assist opportunities, and a fundable automation scope.",
              "spanProps3": {
                "className": "link more"
              },
              "label4": "Request this"
            }
          },
          {
            "key": "FeatureCardVariant3-65f8993b",
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
              "cardTitle": "Omnichannel Operating Model",
              "pProps": {},
              "description": "Unify voice, chat, email, and digital into one ownership model so customers stop repeating themselves.",
              "divProps": {
                "className": "gets"
              },
              "bProps": {},
              "label2": "You get",
              "spanProps2": {},
              "label3": "Channel operating model, case ownership rules, and an implementation plan.",
              "spanProps3": {
                "className": "link more"
              },
              "label4": "Request this"
            }
          },
          {
            "key": "FeatureCardVariant3-f9d51295",
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
              "cardTitle": "Knowledge Consistency Audit",
              "pProps": {},
              "description": "Eliminate conflicting answers so agents and customers get the same resolution every time.",
              "divProps": {
                "className": "gets"
              },
              "bProps": {},
              "label2": "You get",
              "spanProps2": {},
              "label3": "Knowledge gap list, ownership model, and a first consistent answer set.",
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
        "heading": "How We Drive CX Transformation",
        "pProps": {
          "className": "lead"
        },
        "description": "From assessment through production. CX built for journeys, service operations and scale.",
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
          "description": "We assess your current journeys, support model, and operations to identify where CX and automation can improve.",
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
          "description2": "From journey design to platform delivery — one team connects channels, data, and AI into working customer operations.",
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
          "description3": "Processes designed for growth and complexity, with CX systems built for consistent service and measurable loyalty outcomes."
        }
      }
    },
    {
      "type": "text",
      "key": "space-14",
      "content": "\n"
    },
    {
      "type": "ResultsSectionVariant2",
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
        "outcomeSlideVariant2": {
          "articleProps": {
            "className": "slide c-brand",
            "role": "group",
            "aria-roledescription": "slide",
            "aria-label": "1 of 1"
          },
          "articleSpace": "\n",
          "imgProps": {
            "className": "sl-bg",
            "src": "/assets/img/cs-cx-guided-selling.webp",
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
          "cardTitle": "Guided Selling and Workflow Automation",
          "pProps": {},
          "description": "Implemented guided selling with AI driven recommendations and workflow automation.",
          "divSpace4": "\n",
          "spanProps2": {
            "className": "sl-tag"
          },
          "label2": "CX Solutions · Guided selling",
          "aProps": {
            "className": "link",
            "href": "/use-cases"
          },
          "linkLabel": "Read the use case"
        }
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
        "description": "A CX partner focused on practical experience outcomes — from journey strategy through platform delivery — with solutions built for scale.",
        "divProps4": {
          "className": "quad"
        },
        "featureCardItems": [
          {
            "key": "FeatureCard-d209b266",
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
                "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M15.5 8.5l-2 5-5 2 2-5z"
              },
              "h3Props": {},
              "cardTitle": "Journey Expertise",
              "pProps": {},
              "description": "Cross-channel experience design grounded in real customer behavior, operational constraints, and business goals."
            }
          },
          {
            "key": "FeatureCard-dea06658",
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
                "d": "M12 3l9 5-9 5-9-5z M3 12.5l9 5 9-5 M3 17l9 5 9-5"
              },
              "h3Props": {},
              "cardTitle": "Platform Fluency",
              "pProps": {},
              "description": "Deep experience integrating CRM, service, marketing, and analytics platforms into one connected CX stack."
            }
          },
          {
            "key": "FeatureCard-c342b622",
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
              "description": "From assessment and architecture to implementation and optimization — one team accountable for the full CX lifecycle."
            }
          },
          {
            "key": "FeatureCard-46725eb2",
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
              "description": "Clear success metrics tied to conversion, retention, satisfaction, service efficiency, and lifetime value."
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
        "heading": "Let's Talk About Your CX Priorities",
        "pProps": {
          "className": "lead"
        },
        "description": "We assess your current journeys, support model, and operations to identify where CX, automation, and process improvements deliver impact.",
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
