// Shared navigation/footer defaults; sparse overrides preserve local active states and copy.
const defaults = {
  "compact": {
    "siteHeader": {
      "headerProps": {
        "className": "hdr"
      },
      "divProps": {
        "className": "wrap"
      },
      "divSpace": "\n  ",
      "aProps": {
        "className": "mark",
        "href": "/",
        "aria-label": "Palni home"
      },
      "imgProps": {
        "className": "logo-d",
        "decoding": "async",
        "src": "/assets/palni-logo-white.svg",
        "alt": "Palni, Aim High",
        "width": "115",
        "height": "32"
      },
      "imgProps2": {
        "className": "logo-l",
        "loading": "lazy",
        "decoding": "async",
        "src": "/assets/palni-logo-color.svg",
        "alt": "Palni, Aim High",
        "width": "117",
        "height": "32"
      },
      "divSpace2": "\n  ",
      "desktopNavigation": {
        "navProps": {
          "className": "nav",
          "aria-label": "Main"
        },
        "navSpace": "\n    ",
        "megaMenu": {
          "divProps": {
            "className": "item mega-item"
          },
          "buttonProps": {
            "className": "top",
            "type": "button",
            "aria-expanded": "false",
            "aria-haspopup": "true"
          },
          "buttonLabel": "Capabilities ",
          "svgProps": {
            "className": "chev",
            "viewBox": "0 0 10 10",
            "aria-hidden": "true"
          },
          "pathProps": {
            "d": "M1 3l4 4 4-4",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "1.5"
          },
          "divProps2": {
            "className": "menu mega",
            "role": "group",
            "aria-label": "Capabilities"
          },
          "pProps": {
            "className": "mg-lbl"
          },
          "description": "Partner practices",
          "divProps3": {
            "className": "mg-practices"
          },
          "practiceNavigation": {
            "divProps": {
              "className": "mg-p c-salesforce"
            },
            "aProps": {
              "className": "mg-ph",
              "href": "/salesforce"
            },
            "spanProps": {
              "className": "em"
            },
            "svgProps": {
              "viewBox": "0 0 40 40",
              "aria-hidden": "true"
            },
            "ellipseProps": {
              "cx": "20",
              "cy": "22",
              "rx": "16",
              "ry": "6.5",
              "fill": "none",
              "stroke": "currentColor",
              "strokeOpacity": ".45"
            },
            "ellipseProps2": {
              "cx": "20",
              "cy": "22",
              "rx": "9",
              "ry": "3.6",
              "fill": "none",
              "stroke": "currentColor",
              "strokeOpacity": ".75"
            },
            "circleProps": {
              "cx": "20",
              "cy": "20.5",
              "r": "3.6",
              "fill": "currentColor"
            },
            "circleProps2": {
              "cx": "35.2",
              "cy": "20.2",
              "r": "1.8",
              "fill": "var(--value)"
            },
            "spanProps2": {},
            "bProps": {},
            "label": "Salesforce",
            "spanProps3": {
              "className": "d"
            },
            "label2": "Revenue, service and customer operations.",
            "ulProps": {
              "className": "mg-sub"
            },
            "liProps": {},
            "aProps2": {
              "href": "/salesforce"
            },
            "linkLabel": "Overview",
            "liProps2": {},
            "aProps3": {
              "href": "/salesforce#focus"
            },
            "linkLabel2": "Focus areas",
            "liProps3": {},
            "aProps4": {
              "href": "/salesforce#clouds"
            },
            "linkLabel3": "Capabilities",
            "liProps4": {},
            "aProps5": {
              "href": "/salesforce#usecases"
            },
            "linkLabel4": "Use cases"
          },
          "practiceNavigationVariant2": {
            "divProps": {
              "className": "mg-p c-servicenow"
            },
            "aProps": {
              "className": "mg-ph",
              "href": "/servicenow"
            },
            "spanProps": {
              "className": "em"
            },
            "svgProps": {
              "viewBox": "0 0 40 40",
              "aria-hidden": "true"
            },
            "pathProps": {
              "d": "M4 30l16-7 16 7-16 7z",
              "fill": "none",
              "stroke": "currentColor",
              "strokeOpacity": ".45"
            },
            "rectProps": {
              "x": "8",
              "y": "17",
              "width": "4",
              "height": "12",
              "rx": "1",
              "fill": "currentColor",
              "fillOpacity": ".55"
            },
            "rectProps2": {
              "x": "15",
              "y": "12",
              "width": "4",
              "height": "15",
              "rx": "1",
              "fill": "currentColor",
              "fillOpacity": ".75"
            },
            "rectProps3": {
              "x": "22",
              "y": "15",
              "width": "4",
              "height": "13",
              "rx": "1",
              "fill": "currentColor"
            },
            "rectProps4": {
              "x": "29",
              "y": "9",
              "width": "4",
              "height": "18",
              "rx": "1",
              "fill": "var(--value)"
            },
            "spanProps2": {},
            "bProps": {},
            "label": "ServiceNow",
            "spanProps3": {
              "className": "d"
            },
            "label2": "IT, operations and workflow automation.",
            "ulProps": {
              "className": "mg-sub"
            },
            "liProps": {},
            "aProps2": {
              "href": "/servicenow"
            },
            "linkLabel": "Overview",
            "liProps2": {},
            "aProps3": {
              "href": "/servicenow#solutions"
            },
            "linkLabel2": "Capabilities",
            "liProps3": {},
            "aProps4": {
              "href": "/servicenow#voicecue"
            },
            "linkLabel3": "VoiceCueAI",
            "liProps4": {},
            "aProps5": {
              "href": "/servicenow#accelerators"
            },
            "linkLabel4": "Accelerators"
          },
          "practiceNavigationVariant3": {
            "divProps": {
              "className": "mg-p c-databricks"
            },
            "aProps": {
              "className": "mg-ph",
              "href": "/databricks"
            },
            "spanProps": {
              "className": "em"
            },
            "svgProps": {
              "viewBox": "0 0 40 40",
              "aria-hidden": "true"
            },
            "pathProps": {
              "d": "M4 30l16-7 16 7-16 7z",
              "fill": "currentColor",
              "fillOpacity": ".25",
              "stroke": "currentColor",
              "strokeOpacity": ".6"
            },
            "pathProps2": {
              "d": "M4 22l16-7 16 7-16 7z",
              "fill": "none",
              "stroke": "currentColor",
              "strokeOpacity": ".8"
            },
            "pathProps3": {
              "d": "M4 14l16-7 16 7-16 7z",
              "fill": "var(--value)",
              "fillOpacity": ".3",
              "stroke": "var(--value)"
            },
            "spanProps2": {},
            "bProps": {},
            "label": "Databricks",
            "spanProps3": {
              "className": "d"
            },
            "label2": "Unity Catalog, SQL, Lakeflow and Mosaic AI.",
            "ulProps": {
              "className": "mg-sub"
            },
            "liProps": {},
            "aProps2": {
              "href": "/databricks"
            },
            "linkLabel": "Overview",
            "liProps2": {},
            "aProps3": {
              "href": "/databricks-capabilities"
            },
            "linkLabel2": "Capabilities",
            "liProps3": {},
            "aProps4": {
              "href": "/databricks-industries"
            },
            "linkLabel3": "Industry Solutions",
            "liProps4": {},
            "aProps5": {
              "href": "/databricks-expertise"
            },
            "linkLabel4": "Expertise and Accelerators"
          },
          "pProps2": {
            "className": "mg-lbl"
          },
          "description2": "Cross-platform solutions",
          "divProps4": {
            "className": "mg-solutions"
          },
          "aProps": {
            "className": "mg-s",
            "href": "/data-engineering"
          },
          "spanProps": {
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
          "spanProps2": {},
          "bProps": {},
          "label": "Data Engineering",
          "spanProps3": {
            "className": "d"
          },
          "label2": "Trusted platforms and AI-ready data.",
          "aProps2": {
            "className": "mg-s",
            "href": "/ai-automation"
          },
          "spanProps4": {
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
          "spanProps5": {},
          "bProps2": {},
          "label3": "AI & Automation",
          "spanProps6": {
            "className": "d"
          },
          "label4": "Agents inside real enterprise processes.",
          "aProps3": {
            "className": "mg-s",
            "href": "/cx-solutions"
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
          "bProps3": {},
          "label5": "CX Solutions",
          "spanProps9": {
            "className": "d"
          },
          "label6": "Journeys across channels and teams.",
          "divProps5": {
            "className": "mg-foot"
          },
          "spanProps10": {},
          "label7": "Not sure where to start? Tell us the problem and we will bring the right team.",
          "aProps4": {
            "className": "link",
            "href": "/contact"
          },
          "linkLabel": "Start with a Discovery"
        },
        "navSpace2": "\n    ",
        "megaMenuVariant2": {
          "divProps": {
            "className": "item mega-item"
          },
          "buttonProps": {
            "className": "top",
            "type": "button",
            "aria-expanded": "false",
            "aria-haspopup": "true"
          },
          "buttonLabel": "Resources ",
          "svgProps": {
            "className": "chev",
            "viewBox": "0 0 10 10",
            "aria-hidden": "true"
          },
          "pathProps": {
            "d": "M1 3l4 4 4-4",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "1.5"
          },
          "divProps2": {
            "className": "menu mega mid",
            "role": "group",
            "aria-label": "Resources"
          },
          "divProps3": {
            "className": "mg-cols"
          },
          "divProps4": {},
          "pProps": {
            "className": "mg-lbl"
          },
          "description": "Learn",
          "aProps": {
            "className": "mg-s",
            "href": "/use-cases"
          },
          "spanProps": {
            "className": "icb sm"
          },
          "svgProps2": {
            "className": "ic",
            "viewBox": "0 0 24 24",
            "aria-hidden": "true",
            "focusable": "false"
          },
          "pathProps2": {
            "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z M12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
          },
          "spanProps2": {},
          "bProps": {},
          "label": "Use Cases",
          "spanProps3": {
            "className": "d"
          },
          "label2": "Challenges, what Palni did and outcomes.",
          "aProps2": {
            "className": "mg-s",
            "href": "https://palni.com/blog/",
            "target": "_blank",
            "rel": "noopener"
          },
          "spanProps4": {
            "className": "icb sm"
          },
          "svgProps3": {
            "className": "ic",
            "viewBox": "0 0 24 24",
            "aria-hidden": "true",
            "focusable": "false"
          },
          "pathProps3": {
            "d": "M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z M20 4h-6a3 3 0 0 0-3 3 M20 4v14h-7"
          },
          "spanProps5": {},
          "bProps2": {},
          "label3": "Insights ",
          "svgProps4": {
            "className": "ext",
            "viewBox": "0 0 12 12",
            "aria-hidden": "true"
          },
          "pathProps4": {
            "d": "M4.5 2.5h5v5M9.5 2.5l-7 7",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "1.3"
          },
          "spanProps6": {
            "className": "d"
          },
          "label4": "Articles and perspectives.",
          "aProps3": {
            "className": "mg-s",
            "href": ""
          },
          "spanProps7": {
            "className": "icb sm"
          },
          "svgProps5": {
            "className": "ic",
            "viewBox": "0 0 24 24",
            "aria-hidden": "true",
            "focusable": "false"
          },
          "pathProps5": {
            "d": "M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2 M9 15l-3-3c1-5 5-9 12-9 0 7-4 11-9 12z M14.5 10.2a1.2 1.2 0 1 0 0-.01"
          },
          "spanProps8": {},
          "bProps3": {},
          "label5": "Accelerators",
          "spanProps9": {
            "className": "d"
          },
          "label6": "Databricks and ServiceNow accelerators.",
          "aProps4": {
            "className": "mg-feature",
            "href": "/use-cases#databricks"
          },
          "spanProps10": {
            "className": "mg-lbl"
          },
          "label7": "Featured outcome",
          "spanProps11": {
            "className": "fig"
          },
          "label8": "40%",
          "bProps4": {},
          "label9": "Increase in real-time data availability",
          "spanProps12": {
            "className": "d"
          },
          "label10": "10TB+ of fragmented data moved into Databricks, with governed pipelines and trusted reporting.",
          "spanProps13": {
            "className": "link more"
          },
          "label11": "Read the use case"
        },
        "navSpace3": "\n    ",
        "megaMenuVariant3": {
          "divProps": {
            "className": "item mega-item is-current"
          },
          "buttonProps": {
            "className": "top",
            "type": "button",
            "aria-expanded": "false",
            "aria-haspopup": "true"
          },
          "buttonLabel": "Company ",
          "svgProps": {
            "className": "chev",
            "viewBox": "0 0 10 10",
            "aria-hidden": "true"
          },
          "pathProps": {
            "d": "M1 3l4 4 4-4",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "1.5"
          },
          "divProps2": {
            "className": "menu mega mid",
            "role": "group",
            "aria-label": "Company"
          },
          "divProps3": {
            "className": "mg-cols"
          },
          "divProps4": {},
          "pProps": {
            "className": "mg-lbl"
          },
          "description": "Palni",
          "aProps": {
            "className": "mg-s",
            "href": "/about",
            "aria-current": "page"
          },
          "spanProps": {
            "className": "icb sm"
          },
          "svgProps2": {
            "className": "ic",
            "viewBox": "0 0 24 24",
            "aria-hidden": "true",
            "focusable": "false"
          },
          "pathProps2": {
            "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M15.5 8.5l-2 5-5 2 2-5z"
          },
          "spanProps2": {},
          "bProps": {},
          "label": "About Palni",
          "spanProps3": {
            "className": "d"
          },
          "label2": "Who we are and how we work.",
          "ulProps": {
            "className": "mg-sub inline"
          },
          "liProps": {},
          "aProps2": {
            "href": "/about#story"
          },
          "linkLabel": "Our Story",
          "liProps2": {},
          "aProps3": {
            "href": "/about#leadership"
          },
          "linkLabel2": "Leadership",
          "liProps3": {},
          "aProps4": {
            "href": "/about#principles"
          },
          "linkLabel3": "Principles",
          "liProps4": {},
          "aProps5": {
            "href": "/contact#locations"
          },
          "linkLabel4": "Offices",
          "aProps6": {
            "className": "mg-s",
            "href": "/careers"
          },
          "spanProps4": {
            "className": "icb sm"
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
          "spanProps5": {},
          "bProps2": {},
          "label3": "Careers",
          "spanProps6": {
            "className": "d"
          },
          "label4": "Open roles and life at Palni.",
          "aProps7": {
            "className": "mg-s",
            "href": "/contact"
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
            "d": "M3 5h18v14H3z M3.5 6l8.5 7 8.5-7"
          },
          "spanProps8": {},
          "bProps3": {},
          "label5": "Contact",
          "spanProps9": {
            "className": "d"
          },
          "label6": "Talk to the right team.",
          "divProps5": {
            "className": "mg-group"
          },
          "pProps2": {
            "className": "mg-lbl"
          },
          "description2": "Palni group",
          "aProps8": {
            "className": "mg-co",
            "href": "https://palnies.com/",
            "target": "_blank",
            "rel": "noopener"
          },
          "bProps4": {},
          "label7": "Engineering Services ",
          "svgProps5": {
            "className": "ext",
            "viewBox": "0 0 12 12",
            "aria-hidden": "true"
          },
          "pathProps5": {
            "d": "M4.5 2.5h5v5M9.5 2.5l-7 7",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "1.3"
          },
          "spanProps10": {
            "className": "d"
          },
          "label8": "palnies.com",
          "aProps9": {
            "className": "mg-co",
            "href": "https://smartbots.ai/",
            "target": "_blank",
            "rel": "noopener"
          },
          "bProps5": {},
          "label9": "SmartBots AI ",
          "svgProps6": {
            "className": "ext",
            "viewBox": "0 0 12 12",
            "aria-hidden": "true"
          },
          "pathProps6": {
            "d": "M4.5 2.5h5v5M9.5 2.5l-7 7",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "1.3"
          },
          "spanProps11": {
            "className": "d"
          },
          "label10": "smartbots.ai"
        },
        "navSpace4": "\n    ",
        "aProps": {
          "className": "top",
          "href": "/careers"
        },
        "linkLabel": "Careers",
        "navSpace5": "\n    ",
        "aProps2": {
          "className": "top",
          "href": "/contact"
        },
        "linkLabel2": "Contact",
        "navSpace6": "\n  "
      },
      "divSpace3": "\n  ",
      "divProps2": {
        "className": "hdr-actions"
      },
      "divSpace4": "\n    ",
      "buttonProps": {
        "className": "theme-toggle",
        "type": "button",
        "aria-pressed": "false",
        "aria-label": "Switch to light theme"
      },
      "svgProps": {
        "className": "ic sun",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps": {
        "d": "M12 15.6a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2z M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"
      },
      "svgProps2": {
        "className": "ic moon",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps2": {
        "d": "M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"
      },
      "divSpace5": "\n    ",
      "aProps2": {
        "className": "btn btn-primary btn-sm",
        "href": "/contact"
      },
      "linkLabel": "Start with a Discovery",
      "divSpace6": "\n    ",
      "buttonProps2": {
        "className": "burger",
        "type": "button",
        "aria-expanded": "false",
        "aria-controls": "drawer",
        "aria-label": "Open menu"
      },
      "svgProps3": {
        "viewBox": "0 0 18 18",
        "aria-hidden": "true"
      },
      "pathProps3": {
        "d": "M2 5h14M2 9h14M2 13h14",
        "stroke": "currentColor",
        "strokeWidth": "1.5"
      },
      "divSpace7": "\n  ",
      "divSpace8": "\n",
      "spanProps": {
        "className": "bar",
        "aria-hidden": "true"
      }
    },
    "mobileNavigation": {
      "divProps": {
        "className": "drawer",
        "id": "drawer",
        "hidden": true
      },
      "divSpace": "\n  ",
      "divProps2": {
        "className": "top"
      },
      "aProps": {
        "className": "mark",
        "href": "/",
        "aria-label": "Palni home"
      },
      "imgProps": {
        "className": "logo-d",
        "decoding": "async",
        "src": "/assets/palni-logo-white.svg",
        "alt": "Palni, Aim High",
        "width": "115",
        "height": "32"
      },
      "imgProps2": {
        "className": "logo-l",
        "loading": "lazy",
        "decoding": "async",
        "src": "/assets/palni-logo-color.svg",
        "alt": "Palni, Aim High",
        "width": "117",
        "height": "32"
      },
      "buttonProps": {
        "className": "burger close",
        "type": "button",
        "aria-label": "Close menu",
        "style": {
          "display": "inline-grid"
        }
      },
      "svgProps": {
        "viewBox": "0 0 18 18",
        "aria-hidden": "true"
      },
      "pathProps": {
        "d": "M4 4l10 10M14 4L4 14",
        "stroke": "currentColor",
        "strokeWidth": "1.5"
      },
      "divSpace5": "\n  ",
      "mobileNavigationVariant2": {
        "navProps": {
          "aria-label": "Mobile"
        },
        "navSpace": "\n    ",
        "divProps": {},
        "pProps": {
          "className": "dh"
        },
        "description": "Partner practices",
        "aProps": {
          "href": "/salesforce",
          "className": "c-salesforce"
        },
        "linkLabel": "Salesforce",
        "aProps2": {
          "className": "s",
          "href": "/salesforce#focus"
        },
        "linkLabel2": "Focus areas",
        "aProps3": {
          "className": "s",
          "href": "/salesforce#clouds"
        },
        "linkLabel3": "Capabilities",
        "aProps4": {
          "className": "s",
          "href": "/salesforce#usecases"
        },
        "linkLabel4": "Use cases",
        "aProps5": {
          "href": "/servicenow",
          "className": "c-servicenow"
        },
        "linkLabel5": "ServiceNow",
        "aProps6": {
          "className": "s",
          "href": "/servicenow#solutions"
        },
        "linkLabel6": "Capabilities",
        "aProps7": {
          "className": "s",
          "href": "/servicenow#voicecue"
        },
        "linkLabel7": "VoiceCueAI",
        "aProps8": {
          "className": "s",
          "href": "/servicenow#accelerators"
        },
        "linkLabel8": "Accelerators",
        "aProps9": {
          "href": "/databricks",
          "className": "c-databricks"
        },
        "linkLabel9": "Databricks",
        "aProps10": {
          "className": "s",
          "href": "/databricks-capabilities"
        },
        "linkLabel10": "Capabilities",
        "aProps11": {
          "className": "s",
          "href": "/databricks-industries"
        },
        "linkLabel11": "Industry Solutions",
        "aProps12": {
          "className": "s",
          "href": "/databricks-expertise"
        },
        "linkLabel12": "Expertise and Accelerators",
        "navSpace2": "\n    ",
        "divProps2": {},
        "pProps2": {
          "className": "dh"
        },
        "description2": "Cross-platform solutions",
        "aProps13": {
          "href": "/data-engineering"
        },
        "linkLabel13": "Data Engineering",
        "aProps14": {
          "href": "/ai-automation"
        },
        "linkLabel14": "AI & Automation",
        "aProps15": {
          "href": "/cx-solutions"
        },
        "linkLabel15": "CX Solutions",
        "navSpace3": "\n    ",
        "divProps3": {},
        "pProps3": {
          "className": "dh"
        },
        "description3": "Resources",
        "aProps16": {
          "href": "/use-cases"
        },
        "linkLabel16": "Use Cases",
        "aProps17": {
          "href": "https://palni.com/blog/",
          "target": "_blank",
          "rel": "noopener"
        },
        "linkLabel17": "Insights",
        "aProps18": {
          "href": "/databricks-expertise#accelerators"
        },
        "linkLabel18": "Accelerators",
        "navSpace4": "\n    ",
        "divProps4": {},
        "pProps4": {
          "className": "dh"
        },
        "description4": "Company",
        "aProps19": {
          "href": "/about"
        },
        "linkLabel19": "About Palni",
        "aProps20": {
          "href": "/careers"
        },
        "linkLabel20": "Careers",
        "aProps21": {
          "href": "/contact"
        },
        "linkLabel21": "Contact",
        "aProps22": {
          "className": "s",
          "href": "https://palnies.com/",
          "target": "_blank",
          "rel": "noopener"
        },
        "linkLabel22": "Engineering Services ",
        "svgProps": {
          "className": "ext",
          "viewBox": "0 0 12 12",
          "aria-hidden": "true"
        },
        "pathProps": {
          "d": "M4.5 2.5h5v5M9.5 2.5l-7 7",
          "fill": "none",
          "stroke": "currentColor",
          "strokeWidth": "1.3"
        },
        "aProps23": {
          "className": "s",
          "href": "https://smartbots.ai/",
          "target": "_blank",
          "rel": "noopener"
        },
        "linkLabel23": "SmartBots AI ",
        "svgProps2": {
          "className": "ext",
          "viewBox": "0 0 12 12",
          "aria-hidden": "true"
        },
        "pathProps2": {
          "d": "M4.5 2.5h5v5M9.5 2.5l-7 7",
          "fill": "none",
          "stroke": "currentColor",
          "strokeWidth": "1.3"
        },
        "navSpace5": "\n    ",
        "aProps24": {
          "className": "btn btn-primary",
          "href": "/contact"
        },
        "linkLabel24": "Start with a Discovery",
        "navSpace6": "\n  "
      },
      "divSpace6": "\n"
    },
    "siteFooter": {
      "footerProps": {
        "className": "ftr"
      },
      "divProps": {
        "className": "wrap"
      },
      "divSpace": "\n  ",
      "divProps2": {
        "className": "top"
      },
      "divSpace2": "\n    ",
      "divProps3": {
        "className": "brandcol"
      },
      "aProps": {
        "className": "mark",
        "href": "/",
        "aria-label": "Palni home"
      },
      "imgProps": {
        "className": "logo-d",
        "decoding": "async",
        "src": "/assets/palni-logo-white.svg",
        "alt": "Palni, Aim High",
        "width": "158",
        "height": "44"
      },
      "imgProps2": {
        "className": "logo-l",
        "loading": "lazy",
        "decoding": "async",
        "src": "/assets/palni-logo-color.svg",
        "alt": "Palni, Aim High",
        "width": "160",
        "height": "44"
      },
      "pProps": {},
      "description": "Palni helps enterprises improve sales and service workflows, modernise data and apply technology to practical business challenges.",
      "divProps4": {
        "className": "socials",
        "aria-label": "Palni on social media"
      },
      "aProps2": {
        "href": "https://www.linkedin.com/company/palni-inc/",
        "target": "_blank",
        "rel": "noopener"
      },
      "svgProps": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps": {
        "d": "M4 9h3.5v11H4z M5.75 6.5a1.75 1.75 0 1 0 0-.01 M10 9h3.3v1.6c.6-1 1.8-1.9 3.6-1.9 2.6 0 3.6 1.7 3.6 4.4V20H17v-6c0-1.4-.4-2.4-1.8-2.4-1.5 0-2.2 1-2.2 2.6V20H10z"
      },
      "linkLabel": "LinkedIn",
      "aProps3": {
        "href": "https://x.com/palniinc",
        "target": "_blank",
        "rel": "noopener"
      },
      "svgProps2": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps2": {
        "d": "M4 4l16 16 M20 4L4 20"
      },
      "linkLabel2": "X",
      "divProps5": {
        "className": "rule",
        "aria-hidden": "true"
      },
      "iProps": {
        "className": "c-brand"
      },
      "iProps2": {
        "className": "c-salesforce"
      },
      "iProps3": {
        "className": "c-servicenow"
      },
      "iProps4": {
        "className": "c-databricks"
      },
      "divSpace16": "\n    ",
      "fSvcNavigation": {
        "navProps": {
          "aria-labelledby": "f-svc"
        },
        "h2Props": {
          "className": "ftr-h",
          "id": "f-svc"
        },
        "heading": "Capabilities",
        "ulProps": {},
        "liProps": {},
        "aProps": {
          "href": "/salesforce"
        },
        "linkLabel": "Salesforce",
        "liProps2": {},
        "aProps2": {
          "href": "/servicenow"
        },
        "linkLabel2": "ServiceNow",
        "liProps3": {},
        "aProps3": {
          "href": "/databricks"
        },
        "linkLabel3": "Databricks",
        "liProps4": {},
        "aProps4": {
          "href": "/data-engineering"
        },
        "linkLabel4": "Data Engineering",
        "liProps5": {},
        "aProps5": {
          "href": "/ai-automation"
        },
        "linkLabel5": "AI & Automation",
        "liProps6": {},
        "aProps6": {
          "href": "/cx-solutions"
        },
        "linkLabel6": "CX Solutions"
      },
      "divSpace17": "\n    ",
      "fResNavigation": {
        "navProps": {
          "aria-labelledby": "f-res"
        },
        "h2Props": {
          "className": "ftr-h",
          "id": "f-res"
        },
        "heading": "Resources",
        "ulProps": {},
        "liProps": {},
        "aProps": {
          "href": "/use-cases"
        },
        "linkLabel": "Use Cases",
        "liProps2": {},
        "aProps2": {
          "href": "https://palni.com/blog/",
          "target": "_blank",
          "rel": "noopener"
        },
        "linkLabel2": "Insights"
      },
      "divSpace18": "\n    ",
      "fCoNavigation": {
        "navProps": {
          "aria-labelledby": "f-co"
        },
        "h2Props": {
          "className": "ftr-h",
          "id": "f-co"
        },
        "heading": "Company",
        "ulProps": {},
        "liProps": {},
        "aProps": {
          "href": "/about"
        },
        "linkLabel": "About Palni",
        "liProps2": {},
        "aProps2": {
          "href": "/about#leadership"
        },
        "linkLabel2": "Leadership",
        "liProps3": {},
        "aProps3": {
          "href": "/careers"
        },
        "linkLabel3": "Careers",
        "liProps4": {},
        "aProps4": {
          "href": "/contact"
        },
        "linkLabel4": "Contact",
        "liProps5": {},
        "aProps5": {
          "href": "/contact#locations"
        },
        "linkLabel5": "Offices",
        "liProps6": {},
        "aProps6": {
          "href": "https://palnies.com/",
          "target": "_blank",
          "rel": "noopener"
        },
        "linkLabel6": "Engineering Services",
        "liProps7": {},
        "aProps7": {
          "href": "https://smartbots.ai/",
          "target": "_blank",
          "rel": "noopener"
        },
        "linkLabel7": "SmartBots AI"
      },
      "divSpace19": "\n  ",
      "divSpace20": "\n  ",
      "divProps6": {
        "className": "base"
      },
      "spanProps": {},
      "label": "© 2026 Palni Inc. All rights reserved.",
      "divProps7": {
        "className": "clocks",
        "aria-label": "Local time at Palni offices"
      },
      "spanProps2": {},
      "svgProps3": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps3": {
        "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3.5 2"
      },
      "label2": "Hyderabad ",
      "timeProps": {
        "data-tz": "Asia/Kolkata"
      },
      "text": "--:--",
      "label3": " IST",
      "spanProps3": {},
      "svgProps4": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps4": {
        "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3.5 2"
      },
      "label4": "Dallas ",
      "timeProps2": {
        "data-tz": "America/Chicago"
      },
      "text2": "--:--",
      "label5": " CT",
      "legalNavigation": {
        "navProps": {
          "className": "legal",
          "aria-label": "Legal"
        },
        "aProps": {
          "href": "https://palni.com/privacy-policy/",
          "target": "_blank",
          "rel": "noopener"
        },
        "linkLabel": "Privacy Policy",
        "aProps2": {
          "href": "https://palni.com/terms-conditions/",
          "target": "_blank",
          "rel": "noopener"
        },
        "linkLabel2": "Terms & Conditions"
      },
      "divSpace28": "\n"
    }
  },
  "formatted": {
    "siteHeader": {
      "headerProps": {
        "className": "hdr"
      },
      "headerSpace": "\n  ",
      "divProps": {
        "className": "wrap"
      },
      "divSpace": "\n    ",
      "aProps": {
        "className": "mark",
        "href": "/",
        "aria-label": "Palni home"
      },
      "imgProps": {
        "className": "logo-d",
        "decoding": "async",
        "src": "/assets/palni-logo-white.svg",
        "alt": "Palni, Aim High",
        "width": "115",
        "height": "32"
      },
      "imgProps2": {
        "className": "logo-l",
        "loading": "lazy",
        "decoding": "async",
        "src": "/assets/palni-logo-color.svg",
        "alt": "Palni, Aim High",
        "width": "117",
        "height": "32"
      },
      "divSpace2": "\n    ",
      "desktopNavigation": {
        "navProps": {
          "className": "nav",
          "aria-label": "Main"
        },
        "navSpace": "\n      ",
        "megaMenu": {
          "divProps": {
            "className": "item mega-item"
          },
          "buttonProps": {
            "className": "top",
            "type": "button",
            "aria-expanded": "false",
            "aria-haspopup": "true"
          },
          "buttonLabel": "Capabilities ",
          "svgProps": {
            "className": "chev",
            "viewBox": "0 0 10 10",
            "aria-hidden": "true"
          },
          "svgSpace": "\n            ",
          "pathProps": {
            "d": "M1 3l4 4 4-4",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "1.5"
          },
          "svgSpace2": "\n          ",
          "divSpace2": "\n        ",
          "divProps2": {
            "className": "menu mega",
            "role": "group",
            "aria-label": "Capabilities"
          },
          "divSpace3": "\n          ",
          "pProps": {
            "className": "mg-lbl"
          },
          "description": "Partner practices",
          "divSpace4": "\n          ",
          "divProps3": {
            "className": "mg-practices"
          },
          "divSpace5": "\n            ",
          "practiceNavigation": {
            "divProps": {
              "className": "mg-p c-salesforce"
            },
            "aProps": {
              "className": "mg-ph",
              "href": "/salesforce"
            },
            "spanProps": {
              "className": "em"
            },
            "svgProps": {
              "viewBox": "0 0 40 40",
              "aria-hidden": "true"
            },
            "svgSpace": "\n                    ",
            "ellipseProps": {
              "cx": "20",
              "cy": "22",
              "rx": "16",
              "ry": "6.5",
              "fill": "none",
              "stroke": "currentColor",
              "strokeOpacity": ".45"
            },
            "svgSpace2": "\n                    ",
            "ellipseProps2": {
              "cx": "20",
              "cy": "22",
              "rx": "9",
              "ry": "3.6",
              "fill": "none",
              "stroke": "currentColor",
              "strokeOpacity": ".75"
            },
            "svgSpace3": "\n                    ",
            "circleProps": {
              "cx": "20",
              "cy": "20.5",
              "r": "3.6",
              "fill": "currentColor"
            },
            "svgSpace4": "\n                    ",
            "circleProps2": {
              "cx": "35.2",
              "cy": "20.2",
              "r": "1.8",
              "fill": "var(--value)"
            },
            "svgSpace5": "\n                  ",
            "spanProps2": {},
            "bProps": {},
            "label": "Salesforce",
            "spanProps3": {
              "className": "d"
            },
            "label2": "Revenue, service and customer\n                    operations.",
            "divSpace2": "\n              ",
            "ulProps": {
              "className": "mg-sub"
            },
            "ulSpace": "\n                ",
            "liProps": {},
            "aProps2": {
              "href": "/salesforce"
            },
            "linkLabel": "Overview",
            "ulSpace2": "\n                ",
            "liProps2": {},
            "aProps3": {
              "href": "/salesforce#focus"
            },
            "linkLabel2": "Focus areas",
            "ulSpace3": "\n                ",
            "liProps3": {},
            "aProps4": {
              "href": "/salesforce#clouds"
            },
            "linkLabel3": "Capabilities",
            "ulSpace4": "\n                ",
            "liProps4": {},
            "aProps5": {
              "href": "/salesforce#usecases"
            },
            "linkLabel4": "Use cases",
            "ulSpace5": "\n              ",
            "divSpace3": "\n            "
          },
          "divSpace6": "\n            ",
          "practiceNavigationVariant2": {
            "divProps": {
              "className": "mg-p c-servicenow"
            },
            "aProps": {
              "className": "mg-ph",
              "href": "/servicenow"
            },
            "spanProps": {
              "className": "em"
            },
            "svgProps": {
              "viewBox": "0 0 40 40",
              "aria-hidden": "true"
            },
            "svgSpace": "\n                    ",
            "pathProps": {
              "d": "M4 30l16-7 16 7-16 7z",
              "fill": "none",
              "stroke": "currentColor",
              "strokeOpacity": ".45"
            },
            "svgSpace2": "\n                    ",
            "rectProps": {
              "x": "8",
              "y": "17",
              "width": "4",
              "height": "12",
              "rx": "1",
              "fill": "currentColor",
              "fillOpacity": ".55"
            },
            "svgSpace3": "\n                    ",
            "rectProps2": {
              "x": "15",
              "y": "12",
              "width": "4",
              "height": "15",
              "rx": "1",
              "fill": "currentColor",
              "fillOpacity": ".75"
            },
            "svgSpace4": "\n                    ",
            "rectProps3": {
              "x": "22",
              "y": "15",
              "width": "4",
              "height": "13",
              "rx": "1",
              "fill": "currentColor"
            },
            "svgSpace5": "\n                    ",
            "rectProps4": {
              "x": "29",
              "y": "9",
              "width": "4",
              "height": "18",
              "rx": "1",
              "fill": "var(--value)"
            },
            "svgSpace6": "\n                  ",
            "spanProps2": {},
            "bProps": {},
            "label": "ServiceNow",
            "spanProps3": {
              "className": "d"
            },
            "label2": "IT, operations and workflow\n                    automation.",
            "divSpace2": "\n              ",
            "ulProps": {
              "className": "mg-sub"
            },
            "ulSpace": "\n                ",
            "liProps": {},
            "aProps2": {
              "href": "/servicenow"
            },
            "linkLabel": "Overview",
            "ulSpace2": "\n                ",
            "liProps2": {},
            "aProps3": {
              "href": "/servicenow#solutions"
            },
            "linkLabel2": "Capabilities",
            "ulSpace3": "\n                ",
            "liProps3": {},
            "aProps4": {
              "href": "/servicenow#voicecue"
            },
            "linkLabel3": "VoiceCueAI",
            "ulSpace4": "\n                ",
            "liProps4": {},
            "aProps5": {
              "href": "/servicenow#accelerators"
            },
            "linkLabel4": "Accelerators",
            "ulSpace5": "\n              ",
            "divSpace3": "\n            "
          },
          "divSpace7": "\n            ",
          "practiceNavigationVariant3": {
            "divProps": {
              "className": "mg-p c-databricks"
            },
            "aProps": {
              "className": "mg-ph",
              "href": "/databricks"
            },
            "spanProps": {
              "className": "em"
            },
            "svgProps": {
              "viewBox": "0 0 40 40",
              "aria-hidden": "true"
            },
            "svgSpace": "\n                    ",
            "pathProps": {
              "d": "M4 30l16-7 16 7-16 7z",
              "fill": "currentColor",
              "fillOpacity": ".25",
              "stroke": "currentColor",
              "strokeOpacity": ".6"
            },
            "svgSpace2": "\n                    ",
            "pathProps2": {
              "d": "M4 22l16-7 16 7-16 7z",
              "fill": "none",
              "stroke": "currentColor",
              "strokeOpacity": ".8"
            },
            "svgSpace3": "\n                    ",
            "pathProps3": {
              "d": "M4 14l16-7 16 7-16 7z",
              "fill": "var(--value)",
              "fillOpacity": ".3",
              "stroke": "var(--value)"
            },
            "svgSpace4": "\n                  ",
            "spanProps2": {},
            "bProps": {},
            "label": "Databricks",
            "spanProps3": {
              "className": "d"
            },
            "label2": "Unity Catalog, SQL, Lakeflow and Mosaic\n                    AI.",
            "divSpace2": "\n              ",
            "ulProps": {
              "className": "mg-sub"
            },
            "ulSpace": "\n                ",
            "liProps": {},
            "aProps2": {
              "href": "/databricks"
            },
            "linkLabel": "Overview",
            "ulSpace2": "\n                ",
            "liProps2": {},
            "aProps3": {
              "href": "/databricks-capabilities"
            },
            "linkLabel2": "Capabilities",
            "ulSpace3": "\n                ",
            "liProps3": {},
            "aProps4": {
              "href": "/databricks-industries"
            },
            "linkLabel3": "Industry Solutions",
            "ulSpace4": "\n                ",
            "liProps4": {},
            "aProps5": {
              "href": "/databricks-expertise"
            },
            "linkLabel4": "Expertise and Accelerators",
            "ulSpace5": "\n              ",
            "divSpace3": "\n            "
          },
          "divSpace8": "\n          ",
          "divSpace9": "\n          ",
          "pProps2": {
            "className": "mg-lbl"
          },
          "description2": "Cross-platform solutions",
          "divSpace10": "\n          ",
          "divProps4": {
            "className": "mg-solutions"
          },
          "aProps": {
            "className": "mg-s",
            "href": "/data-engineering"
          },
          "spanProps": {
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
            "d": "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6 M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"
          },
          "svgSpace4": "\n                ",
          "spanProps2": {},
          "bProps": {},
          "label": "Data Engineering",
          "spanProps3": {
            "className": "d"
          },
          "label2": "Trusted platforms and AI-ready\n                  data.",
          "aProps2": {
            "className": "mg-s",
            "href": "/ai-automation"
          },
          "spanProps4": {
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
            "d": "M5 9h14v10H5z M12 5v4 M12 3.6a1.4 1.4 0 1 0 0 .01 M9 13.5v1 M15 13.5v1 M9.5 17h5 M2.5 12.5v3 M21.5 12.5v3"
          },
          "svgSpace6": "\n                ",
          "spanProps5": {},
          "bProps2": {},
          "label3": "AI & Automation",
          "spanProps6": {
            "className": "d"
          },
          "label4": "Agents inside real enterprise\n                  processes.",
          "aProps3": {
            "className": "mg-s",
            "href": "/cx-solutions"
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
          "svgSpace7": "\n                  ",
          "pathProps4": {
            "d": "M4 15v-3a8 8 0 0 1 16 0v3 M4 14h3v6H4z M17 14h3v6h-3z M20 20a3 3 0 0 1-3 2h-3"
          },
          "svgSpace8": "\n                ",
          "spanProps8": {},
          "bProps3": {},
          "label5": "CX Solutions",
          "spanProps9": {
            "className": "d"
          },
          "label6": "Journeys across channels and\n                  teams.",
          "divSpace15": "\n          ",
          "divProps5": {
            "className": "mg-foot"
          },
          "spanProps10": {},
          "label7": "Not sure where to start? Tell us the problem and we will bring the right\n              team.",
          "aProps4": {
            "className": "link",
            "href": "/contact"
          },
          "linkLabel": "Start with a Discovery",
          "divSpace19": "\n        ",
          "divSpace20": "\n      "
        },
        "navSpace2": "\n      ",
        "megaMenuVariant2": {
          "divProps": {
            "className": "item mega-item"
          },
          "buttonProps": {
            "className": "top",
            "type": "button",
            "aria-expanded": "false",
            "aria-haspopup": "true"
          },
          "buttonLabel": "Resources\n          ",
          "svgProps": {
            "className": "chev",
            "viewBox": "0 0 10 10",
            "aria-hidden": "true"
          },
          "svgSpace": "\n            ",
          "pathProps": {
            "d": "M1 3l4 4 4-4",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "1.5"
          },
          "svgSpace2": "\n          ",
          "divSpace2": "\n        ",
          "divProps2": {
            "className": "menu mega mid",
            "role": "group",
            "aria-label": "Resources"
          },
          "divSpace3": "\n          ",
          "divProps3": {
            "className": "mg-cols"
          },
          "divSpace4": "\n            ",
          "divProps4": {},
          "divSpace5": "\n              ",
          "pProps": {
            "className": "mg-lbl"
          },
          "description": "Learn",
          "aProps": {
            "className": "mg-s",
            "href": "/use-cases"
          },
          "spanProps": {
            "className": "icb sm"
          },
          "svgProps2": {
            "className": "ic",
            "viewBox": "0 0 24 24",
            "aria-hidden": "true",
            "focusable": "false"
          },
          "svgSpace3": "\n                    ",
          "pathProps2": {
            "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z M12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
          },
          "svgSpace4": "\n                  ",
          "spanProps2": {},
          "bProps": {},
          "label": "Use Cases",
          "spanProps3": {
            "className": "d"
          },
          "label2": "Challenges, what Palni did and\n                    outcomes.",
          "aProps2": {
            "className": "mg-s",
            "href": "#",
            "target": "_blank",
            "rel": "noopener"
          },
          "spanProps4": {
            "className": "icb sm"
          },
          "svgProps3": {
            "className": "ic",
            "viewBox": "0 0 24 24",
            "aria-hidden": "true",
            "focusable": "false"
          },
          "svgSpace5": "\n                    ",
          "pathProps3": {
            "d": "M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z M20 4h-6a3 3 0 0 0-3 3 M20 4v14h-7"
          },
          "svgSpace6": "\n                  ",
          "spanProps5": {},
          "bProps2": {},
          "label3": "Insights ",
          "svgProps4": {
            "className": "ext",
            "viewBox": "0 0 12 12",
            "aria-hidden": "true"
          },
          "svgSpace7": "\n                      ",
          "pathProps4": {
            "d": "M4.5 2.5h5v5M9.5 2.5l-7 7",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "1.3"
          },
          "svgSpace8": "\n                    ",
          "spanProps6": {
            "className": "d"
          },
          "label4": "Articles and perspectives.",
          "aProps3": {
            "className": "mg-s",
            "href": "#"
          },
          "spanProps7": {
            "className": "icb sm"
          },
          "svgProps5": {
            "className": "ic",
            "viewBox": "0 0 24 24",
            "aria-hidden": "true",
            "focusable": "false"
          },
          "svgSpace9": "\n                    ",
          "pathProps5": {
            "d": "M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2 M9 15l-3-3c1-5 5-9 12-9 0 7-4 11-9 12z M14.5 10.2a1.2 1.2 0 1 0 0-.01"
          },
          "svgSpace10": "\n                  ",
          "spanProps8": {},
          "bProps3": {},
          "label5": "Accelerators",
          "spanProps9": {
            "className": "d"
          },
          "label6": "Databricks and ServiceNow\n                    accelerators.",
          "divSpace9": "\n            ",
          "aProps4": {
            "className": "mg-feature",
            "href": "/use-cases#databricks"
          },
          "spanProps10": {
            "className": "mg-lbl"
          },
          "label7": "Featured outcome",
          "spanProps11": {
            "className": "fig"
          },
          "label8": "40%",
          "bProps4": {},
          "label9": "Increase in real-time data availability",
          "spanProps12": {
            "className": "d"
          },
          "label10": "10TB+ of fragmented\n                data moved into Databricks, with governed pipelines and trusted reporting.",
          "spanProps13": {
            "className": "link more"
          },
          "label11": "Read the use case",
          "divSpace11": "\n          ",
          "divSpace12": "\n        ",
          "divSpace13": "\n      "
        },
        "navSpace3": "\n      ",
        "megaMenuVariant3": {
          "divProps": {
            "className": "item mega-item"
          },
          "buttonProps": {
            "className": "top",
            "type": "button",
            "aria-expanded": "false",
            "aria-haspopup": "true"
          },
          "buttonLabel": "Company\n          ",
          "svgProps": {
            "className": "chev",
            "viewBox": "0 0 10 10",
            "aria-hidden": "true"
          },
          "svgSpace": "\n            ",
          "pathProps": {
            "d": "M1 3l4 4 4-4",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "1.5"
          },
          "svgSpace2": "\n          ",
          "divSpace2": "\n        ",
          "divProps2": {
            "className": "menu mega mid",
            "role": "group",
            "aria-label": "Company"
          },
          "divSpace3": "\n          ",
          "divProps3": {
            "className": "mg-cols"
          },
          "divSpace4": "\n            ",
          "divProps4": {},
          "divSpace5": "\n              ",
          "pProps": {
            "className": "mg-lbl"
          },
          "description": "Palni",
          "aProps": {
            "className": "mg-s",
            "href": "/about"
          },
          "spanProps": {
            "className": "icb sm"
          },
          "svgProps2": {
            "className": "ic",
            "viewBox": "0 0 24 24",
            "aria-hidden": "true",
            "focusable": "false"
          },
          "svgSpace3": "\n                    ",
          "pathProps2": {
            "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M15.5 8.5l-2 5-5 2 2-5z"
          },
          "svgSpace4": "\n                  ",
          "spanProps2": {},
          "bProps": {},
          "label": "About Palni",
          "spanProps3": {
            "className": "d"
          },
          "label2": "Who we are and how we work.",
          "divSpace7": "\n              ",
          "ulProps": {
            "className": "mg-sub inline"
          },
          "ulSpace": "\n                ",
          "liProps": {},
          "aProps2": {
            "href": "/about#story"
          },
          "linkLabel": "Our Story",
          "ulSpace2": "\n                ",
          "liProps2": {},
          "aProps3": {
            "href": "/about#leadership"
          },
          "linkLabel2": "Leadership",
          "ulSpace3": "\n                ",
          "liProps3": {},
          "aProps4": {
            "href": "/about#principles"
          },
          "linkLabel3": "Principles",
          "ulSpace4": "\n                ",
          "liProps4": {},
          "aProps5": {
            "href": "/contact#locations"
          },
          "linkLabel4": "Offices",
          "ulSpace5": "\n              ",
          "aProps6": {
            "className": "mg-s",
            "href": "/careers"
          },
          "spanProps4": {
            "className": "icb sm"
          },
          "svgProps3": {
            "className": "ic",
            "viewBox": "0 0 24 24",
            "aria-hidden": "true",
            "focusable": "false"
          },
          "svgSpace5": "\n                    ",
          "pathProps3": {
            "d": "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z M2.5 20a6.5 6.5 0 0 1 13 0 M16 4.6a3.5 3.5 0 0 1 0 6.8 M18 14.2a6 6 0 0 1 3.5 5.8"
          },
          "svgSpace6": "\n                  ",
          "spanProps5": {},
          "bProps2": {},
          "label3": "Careers",
          "spanProps6": {
            "className": "d"
          },
          "label4": "Open roles and life at Palni.",
          "aProps7": {
            "className": "mg-s",
            "href": "/contact"
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
          "svgSpace7": "\n                    ",
          "pathProps4": {
            "d": "M3 5h18v14H3z M3.5 6l8.5 7 8.5-7"
          },
          "svgSpace8": "\n                  ",
          "spanProps8": {},
          "bProps3": {},
          "label5": "Contact",
          "spanProps9": {
            "className": "d"
          },
          "label6": "Talk to the right team.",
          "divSpace10": "\n            ",
          "divSpace11": "\n            ",
          "divProps5": {
            "className": "mg-group"
          },
          "divSpace12": "\n              ",
          "pProps2": {
            "className": "mg-lbl"
          },
          "description2": "Palni group",
          "aProps8": {
            "className": "mg-co",
            "href": "https://palnies.com/",
            "target": "_blank",
            "rel": "noopener"
          },
          "bProps4": {},
          "label7": "Engineering Services ",
          "svgProps5": {
            "className": "ext",
            "viewBox": "0 0 12 12",
            "aria-hidden": "true"
          },
          "svgSpace9": "\n                    ",
          "pathProps5": {
            "d": "M4.5 2.5h5v5M9.5 2.5l-7 7",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "1.3"
          },
          "svgSpace10": "\n                  ",
          "spanProps10": {
            "className": "d"
          },
          "label8": "palnies.com",
          "aProps9": {
            "className": "mg-co",
            "href": "https://smartbots.ai/",
            "target": "_blank",
            "rel": "noopener"
          },
          "bProps5": {},
          "label9": "SmartBots AI ",
          "svgProps6": {
            "className": "ext",
            "viewBox": "0 0 12 12",
            "aria-hidden": "true"
          },
          "svgSpace11": "\n                    ",
          "pathProps6": {
            "d": "M4.5 2.5h5v5M9.5 2.5l-7 7",
            "fill": "none",
            "stroke": "currentColor",
            "strokeWidth": "1.3"
          },
          "svgSpace12": "\n                  ",
          "spanProps11": {
            "className": "d"
          },
          "label10": "smartbots.ai",
          "divSpace15": "\n            ",
          "divSpace16": "\n          ",
          "divSpace17": "\n        ",
          "divSpace18": "\n      "
        },
        "navSpace4": "\n      ",
        "aProps": {
          "className": "top",
          "href": "/careers"
        },
        "linkLabel": "Careers",
        "navSpace5": "\n      ",
        "aProps2": {
          "className": "top",
          "href": "/contact"
        },
        "linkLabel2": "Contact",
        "navSpace6": "\n    "
      },
      "divSpace3": "\n    ",
      "divProps2": {
        "className": "hdr-actions"
      },
      "divSpace4": "\n      ",
      "buttonProps": {
        "className": "theme-toggle",
        "type": "button",
        "aria-pressed": "false",
        "aria-label": "Switch to light theme"
      },
      "svgProps": {
        "className": "ic sun",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "svgSpace": "\n          ",
      "pathProps": {
        "d": "M12 15.6a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2z M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"
      },
      "svgSpace2": "\n        ",
      "svgProps2": {
        "className": "ic moon",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "svgSpace3": "\n          ",
      "pathProps2": {
        "d": "M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"
      },
      "svgSpace4": "\n        ",
      "divSpace5": "\n      ",
      "aProps2": {
        "className": "btn btn-primary btn-sm",
        "href": "/contact"
      },
      "linkLabel": "Start with a Discovery",
      "divSpace6": "\n      ",
      "buttonProps2": {
        "className": "burger",
        "type": "button",
        "aria-expanded": "false",
        "aria-controls": "drawer",
        "aria-label": "Open menu"
      },
      "svgProps3": {
        "viewBox": "0 0 18 18",
        "aria-hidden": "true"
      },
      "svgSpace5": "\n          ",
      "pathProps3": {
        "d": "M2 5h14M2 9h14M2 13h14",
        "stroke": "currentColor",
        "strokeWidth": "1.5"
      },
      "svgSpace6": "\n        ",
      "divSpace7": "\n    ",
      "divSpace8": "\n  ",
      "spanProps": {
        "className": "bar",
        "aria-hidden": "true"
      },
      "headerSpace3": "\n"
    },
    "mobileNavigation": {
      "divProps": {
        "className": "drawer",
        "id": "drawer",
        "hidden": true
      },
      "divSpace": "\n  ",
      "divProps2": {
        "className": "top"
      },
      "aProps": {
        "className": "mark",
        "href": "/",
        "aria-label": "Palni home"
      },
      "imgProps": {
        "className": "logo-d",
        "decoding": "async",
        "src": "/assets/palni-logo-white.svg",
        "alt": "Palni, Aim High",
        "width": "115",
        "height": "32"
      },
      "imgProps2": {
        "className": "logo-l",
        "loading": "lazy",
        "decoding": "async",
        "src": "/assets/palni-logo-color.svg",
        "alt": "Palni, Aim High",
        "width": "117",
        "height": "32"
      },
      "buttonProps": {
        "className": "burger close",
        "type": "button",
        "aria-label": "Close menu",
        "style": {
          "display": "inline-grid"
        }
      },
      "svgProps": {
        "viewBox": "0 0 18 18",
        "aria-hidden": "true"
      },
      "svgSpace": "\n        ",
      "pathProps": {
        "d": "M4 4l10 10M14 4L4 14",
        "stroke": "currentColor",
        "strokeWidth": "1.5"
      },
      "svgSpace2": "\n      ",
      "divSpace5": "\n  ",
      "mobileNavigationVariant2": {
        "navProps": {
          "aria-label": "Mobile"
        },
        "navSpace": "\n    ",
        "divProps": {},
        "divSpace": "\n      ",
        "pProps": {
          "className": "dh"
        },
        "description": "Partner practices",
        "aProps": {
          "href": "/salesforce",
          "className": "c-salesforce"
        },
        "linkLabel": "Salesforce",
        "aProps2": {
          "className": "s",
          "href": "/salesforce#focus"
        },
        "linkLabel2": "Focus areas",
        "aProps3": {
          "className": "s",
          "href": "/salesforce#clouds"
        },
        "linkLabel3": "Capabilities",
        "aProps4": {
          "className": "s",
          "href": "/salesforce#usecases"
        },
        "linkLabel4": "Use cases",
        "aProps5": {
          "href": "/servicenow",
          "className": "c-servicenow"
        },
        "linkLabel5": "ServiceNow",
        "aProps6": {
          "className": "s",
          "href": "/servicenow#solutions"
        },
        "linkLabel6": "Capabilities",
        "aProps7": {
          "className": "s",
          "href": "/servicenow#voicecue"
        },
        "linkLabel7": "VoiceCueAI",
        "aProps8": {
          "className": "s",
          "href": "/servicenow#accelerators"
        },
        "linkLabel8": "Accelerators",
        "aProps9": {
          "href": "/databricks",
          "className": "c-databricks"
        },
        "linkLabel9": "Databricks",
        "aProps10": {
          "className": "s",
          "href": "/databricks-capabilities"
        },
        "linkLabel10": "Capabilities",
        "aProps11": {
          "className": "s",
          "href": "/databricks-industries"
        },
        "linkLabel11": "Industry\n        Solutions",
        "aProps12": {
          "className": "s",
          "href": "/databricks-expertise"
        },
        "linkLabel12": "Expertise and Accelerators",
        "divSpace14": "\n    ",
        "navSpace2": "\n    ",
        "divProps2": {},
        "divSpace15": "\n      ",
        "pProps2": {
          "className": "dh"
        },
        "description2": "Cross-platform solutions",
        "aProps13": {
          "href": "/data-engineering"
        },
        "linkLabel13": "Data Engineering",
        "aProps14": {
          "href": "/ai-automation"
        },
        "linkLabel14": "AI & Automation",
        "aProps15": {
          "href": "/cx-solutions"
        },
        "linkLabel15": "CX Solutions",
        "divSpace19": "\n    ",
        "navSpace3": "\n    ",
        "divProps3": {},
        "divSpace20": "\n      ",
        "pProps3": {
          "className": "dh"
        },
        "description3": "Resources",
        "aProps16": {
          "href": "/use-cases"
        },
        "linkLabel16": "Use Cases",
        "aProps17": {
          "href": "https://palni.com/blog/",
          "target": "_blank",
          "rel": "noopener"
        },
        "linkLabel17": "Insights",
        "aProps18": {
          "href": "/databricks-expertise#accelerators"
        },
        "linkLabel18": "Accelerators",
        "divSpace24": "\n    ",
        "navSpace4": "\n    ",
        "divProps4": {},
        "divSpace25": "\n      ",
        "pProps4": {
          "className": "dh"
        },
        "description4": "Company",
        "aProps19": {
          "href": "/about"
        },
        "linkLabel19": "About Palni",
        "aProps20": {
          "href": "/careers"
        },
        "linkLabel20": "Careers",
        "aProps21": {
          "href": "/contact"
        },
        "linkLabel21": "Contact",
        "aProps22": {
          "className": "s",
          "href": "https://palnies.com/",
          "target": "_blank",
          "rel": "noopener"
        },
        "linkLabel22": "Engineering\n        Services ",
        "svgProps": {
          "className": "ext",
          "viewBox": "0 0 12 12",
          "aria-hidden": "true"
        },
        "svgSpace": "\n          ",
        "pathProps": {
          "d": "M4.5 2.5h5v5M9.5 2.5l-7 7",
          "fill": "none",
          "stroke": "currentColor",
          "strokeWidth": "1.3"
        },
        "svgSpace2": "\n        ",
        "aProps23": {
          "className": "s",
          "href": "https://smartbots.ai/",
          "target": "_blank",
          "rel": "noopener"
        },
        "linkLabel23": "SmartBots AI ",
        "svgProps2": {
          "className": "ext",
          "viewBox": "0 0 12 12",
          "aria-hidden": "true"
        },
        "svgSpace3": "\n          ",
        "pathProps2": {
          "d": "M4.5 2.5h5v5M9.5 2.5l-7 7",
          "fill": "none",
          "stroke": "currentColor",
          "strokeWidth": "1.3"
        },
        "svgSpace4": "\n        ",
        "divSpace31": "\n    ",
        "navSpace5": "\n    ",
        "aProps24": {
          "className": "btn btn-primary",
          "href": "/contact"
        },
        "linkLabel24": "Start with a Discovery",
        "navSpace6": "\n  "
      },
      "divSpace6": "\n"
    },
    "siteFooter": {
      "footerProps": {
        "className": "ftr"
      },
      "footerSpace": "\n  ",
      "divProps": {
        "className": "wrap"
      },
      "divSpace": "\n    ",
      "divProps2": {
        "className": "top"
      },
      "divSpace2": "\n      ",
      "divProps3": {
        "className": "brandcol"
      },
      "aProps": {
        "className": "mark",
        "href": "/",
        "aria-label": "Palni home"
      },
      "imgProps": {
        "className": "logo-d",
        "decoding": "async",
        "src": "/assets/palni-logo-white.svg",
        "alt": "Palni, Aim High",
        "width": "158",
        "height": "44"
      },
      "imgProps2": {
        "className": "logo-l",
        "loading": "lazy",
        "decoding": "async",
        "src": "/assets/palni-logo-color.svg",
        "alt": "Palni, Aim High",
        "width": "160",
        "height": "44"
      },
      "divSpace4": "\n        ",
      "pProps": {},
      "description": "Palni helps enterprises improve sales and service workflows, modernise data and apply technology to practical\n          business challenges.",
      "divSpace5": "\n        ",
      "divProps4": {
        "className": "socials",
        "aria-label": "Palni on social media"
      },
      "aProps2": {
        "href": "https://www.linkedin.com/company/palni-inc/",
        "target": "_blank",
        "rel": "noopener"
      },
      "svgProps": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "svgSpace": "\n              ",
      "pathProps": {
        "d": "M4 9h3.5v11H4z M5.75 6.5a1.75 1.75 0 1 0 0-.01 M10 9h3.3v1.6c.6-1 1.8-1.9 3.6-1.9 2.6 0 3.6 1.7 3.6 4.4V20H17v-6c0-1.4-.4-2.4-1.8-2.4-1.5 0-2.2 1-2.2 2.6V20H10z"
      },
      "svgSpace2": "\n            ",
      "linkLabel": "LinkedIn",
      "aProps3": {
        "href": "https://x.com/palniinc",
        "target": "_blank",
        "rel": "noopener"
      },
      "svgProps2": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "svgSpace3": "\n              ",
      "pathProps2": {
        "d": "M4 4l16 16 M20 4L4 20"
      },
      "svgSpace4": "\n            ",
      "linkLabel2": "X",
      "divSpace9": "\n        ",
      "divProps5": {
        "className": "rule",
        "aria-hidden": "true"
      },
      "iProps": {
        "className": "c-brand"
      },
      "iProps2": {
        "className": "c-salesforce"
      },
      "iProps3": {
        "className": "c-servicenow"
      },
      "iProps4": {
        "className": "c-databricks"
      },
      "divSpace15": "\n      ",
      "divSpace16": "\n      ",
      "fSvcNavigation": {
        "navProps": {
          "aria-labelledby": "f-svc"
        },
        "navSpace": "\n        ",
        "h2Props": {
          "className": "ftr-h",
          "id": "f-svc"
        },
        "heading": "Capabilities",
        "navSpace2": "\n        ",
        "ulProps": {},
        "ulSpace": "\n          ",
        "liProps": {},
        "aProps": {
          "href": "/salesforce"
        },
        "linkLabel": "Salesforce",
        "ulSpace2": "\n          ",
        "liProps2": {},
        "aProps2": {
          "href": "/servicenow"
        },
        "linkLabel2": "ServiceNow",
        "ulSpace3": "\n          ",
        "liProps3": {},
        "aProps3": {
          "href": "/databricks"
        },
        "linkLabel3": "Databricks",
        "ulSpace4": "\n          ",
        "liProps4": {},
        "aProps4": {
          "href": "/data-engineering"
        },
        "linkLabel4": "Data Engineering",
        "ulSpace5": "\n          ",
        "liProps5": {},
        "aProps5": {
          "href": "/ai-automation"
        },
        "linkLabel5": "AI & Automation",
        "ulSpace6": "\n          ",
        "liProps6": {},
        "aProps6": {
          "href": "/cx-solutions"
        },
        "linkLabel6": "CX Solutions",
        "ulSpace7": "\n        ",
        "navSpace3": "\n      "
      },
      "divSpace17": "\n      ",
      "fResNavigation": {
        "navProps": {
          "aria-labelledby": "f-res"
        },
        "navSpace": "\n        ",
        "h2Props": {
          "className": "ftr-h",
          "id": "f-res"
        },
        "heading": "Resources",
        "navSpace2": "\n        ",
        "ulProps": {},
        "ulSpace": "\n          ",
        "liProps": {},
        "aProps": {
          "href": "/use-cases"
        },
        "linkLabel": "Use Cases",
        "ulSpace2": "\n          ",
        "liProps2": {},
        "aProps2": {
          "href": "https://palni.com/blog/",
          "target": "_blank",
          "rel": "noopener"
        },
        "linkLabel2": "Insights",
        "ulSpace3": "\n        ",
        "navSpace3": "\n      "
      },
      "divSpace18": "\n      ",
      "fCoNavigation": {
        "navProps": {
          "aria-labelledby": "f-co"
        },
        "navSpace": "\n        ",
        "h2Props": {
          "className": "ftr-h",
          "id": "f-co"
        },
        "heading": "Company",
        "navSpace2": "\n        ",
        "ulProps": {},
        "ulSpace": "\n          ",
        "liProps": {},
        "aProps": {
          "href": "/about"
        },
        "linkLabel": "About Palni",
        "ulSpace2": "\n          ",
        "liProps2": {},
        "aProps2": {
          "href": "/about#leadership"
        },
        "linkLabel2": "Leadership",
        "ulSpace3": "\n          ",
        "liProps3": {},
        "aProps3": {
          "href": "/careers"
        },
        "linkLabel3": "Careers",
        "ulSpace4": "\n          ",
        "liProps4": {},
        "aProps4": {
          "href": "/contact"
        },
        "linkLabel4": "Contact",
        "ulSpace5": "\n          ",
        "liProps5": {},
        "aProps5": {
          "href": "/contact#locations"
        },
        "linkLabel5": "Offices",
        "ulSpace6": "\n          ",
        "liProps6": {},
        "aProps6": {
          "href": "https://palnies.com/",
          "target": "_blank",
          "rel": "noopener"
        },
        "linkLabel6": "Engineering Services",
        "ulSpace7": "\n          ",
        "liProps7": {},
        "aProps7": {
          "href": "https://smartbots.ai/",
          "target": "_blank",
          "rel": "noopener"
        },
        "linkLabel7": "SmartBots AI",
        "ulSpace8": "\n        ",
        "navSpace3": "\n      "
      },
      "divSpace19": "\n    ",
      "divSpace20": "\n    ",
      "divProps6": {
        "className": "base"
      },
      "spanProps": {},
      "label": "© 2026 Palni Inc. All rights reserved.",
      "divSpace22": "\n      ",
      "divProps7": {
        "className": "clocks",
        "aria-label": "Local time at Palni offices"
      },
      "spanProps2": {},
      "svgProps3": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "svgSpace5": "\n            ",
      "pathProps3": {
        "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3.5 2"
      },
      "svgSpace6": "\n          ",
      "label2": "Hyderabad ",
      "timeProps": {
        "data-tz": "Asia/Kolkata"
      },
      "text": "--:--",
      "label3": " IST",
      "spanProps3": {},
      "svgProps4": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "svgSpace7": "\n            ",
      "pathProps4": {
        "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3.5 2"
      },
      "svgSpace8": "\n          ",
      "label4": "Dallas ",
      "timeProps2": {
        "data-tz": "America/Chicago"
      },
      "text2": "--:--",
      "label5": " CT",
      "divSpace26": "\n      ",
      "legalNavigation": {
        "navProps": {
          "className": "legal",
          "aria-label": "Legal"
        },
        "aProps": {
          "href": "https://palni.com/privacy-policy/",
          "target": "_blank",
          "rel": "noopener"
        },
        "linkLabel": "Privacy Policy",
        "aProps2": {
          "href": "https://palni.com/terms-conditions/",
          "target": "_blank",
          "rel": "noopener"
        },
        "linkLabel2": "Terms & Conditions"
      },
      "divSpace27": "\n    ",
      "divSpace28": "\n  ",
      "footerSpace2": "\n"
    }
  }
}

const pageOverrides = {
  "about": {
    "base": "compact",
    "overrides": {}
  },
  "ai-automation": {
    "base": "compact",
    "overrides": {
      "siteHeader": {
        "desktopNavigation": {
          "megaMenu": {
            "divProps": {
              "className": "item mega-item is-current"
            },
            "aProps2": {
              "aria-current": "page"
            }
          },
          "megaMenuVariant3": {
            "divProps": {
              "className": "item mega-item"
            },
            "aProps": {
              "aria-current": null
            }
          }
        }
      }
    }
  },
  "careers": {
    "base": "compact",
    "overrides": {
      "siteHeader": {
        "desktopNavigation": {
          "megaMenuVariant3": {
            "divProps": {
              "className": "item mega-item"
            },
            "aProps": {
              "aria-current": null
            },
            "aProps6": {
              "aria-current": "page"
            }
          },
          "aProps": {
            "aria-current": "page"
          }
        }
      }
    }
  },
  "contact": {
    "base": "compact",
    "overrides": {
      "siteHeader": {
        "desktopNavigation": {
          "megaMenuVariant3": {
            "divProps": {
              "className": "item mega-item"
            },
            "aProps": {
              "aria-current": null
            },
            "aProps7": {
              "aria-current": "page"
            }
          },
          "aProps2": {
            "aria-current": "page"
          }
        }
      }
    }
  },
  "cx-solutions": {
    "base": "compact",
    "overrides": {
      "siteHeader": {
        "desktopNavigation": {
          "megaMenu": {
            "divProps": {
              "className": "item mega-item is-current"
            },
            "aProps3": {
              "aria-current": "page"
            }
          },
          "megaMenuVariant3": {
            "divProps": {
              "className": "item mega-item"
            },
            "aProps": {
              "aria-current": null
            }
          }
        }
      }
    }
  },
  "data-engineering": {
    "base": "compact",
    "overrides": {
      "siteHeader": {
        "desktopNavigation": {
          "megaMenu": {
            "divProps": {
              "className": "item mega-item is-current"
            },
            "aProps": {
              "aria-current": "page"
            }
          },
          "megaMenuVariant3": {
            "divProps": {
              "className": "item mega-item"
            },
            "aProps": {
              "aria-current": null
            }
          }
        }
      }
    }
  },
  "databricks-capabilities": {
    "base": "formatted",
    "overrides": {
      "siteHeader": {
        "desktopNavigation": {
          "megaMenu": {
            "divProps": {
              "className": "item mega-item is-current"
            },
            "practiceNavigationVariant3": {
              "divProps": {
                "className": "mg-p c-databricks is-here"
              }
            }
          }
        },
        "aProps2": {
          "href": "/contact#databricks"
        },
        "linkLabel": "Talk to a Databricks Expert"
      }
    }
  },
  "databricks-expertise": {
    "base": "compact",
    "overrides": {
      "siteHeader": {
        "desktopNavigation": {
          "megaMenu": {
            "divProps": {
              "className": "item mega-item is-current"
            },
            "practiceNavigationVariant3": {
              "divProps": {
                "className": "mg-p c-databricks is-here"
              }
            }
          },
          "megaMenuVariant3": {
            "divProps": {
              "className": "item mega-item"
            },
            "aProps": {
              "aria-current": null
            }
          }
        },
        "aProps2": {
          "href": "/contact#databricks"
        },
        "linkLabel": "Talk to a Databricks Expert"
      }
    }
  },
  "databricks-industries": {
    "base": "formatted",
    "overrides": {
      "siteHeader": {
        "desktopNavigation": {
          "megaMenu": {
            "divProps": {
              "className": "item mega-item is-current"
            },
            "practiceNavigationVariant3": {
              "divProps": {
                "className": "mg-p c-databricks is-here"
              }
            }
          }
        },
        "aProps2": {
          "href": "/contact#databricks"
        },
        "linkLabel": "Talk to a Databricks Expert"
      }
    }
  },
  "databricks": {
    "base": "formatted",
    "overrides": {
      "siteHeader": {
        "desktopNavigation": {
          "megaMenu": {
            "divProps": {
              "className": "item mega-item is-current"
            },
            "practiceNavigationVariant3": {
              "divProps": {
                "className": "mg-p c-databricks is-here"
              },
              "aProps": {
                "aria-current": "page"
              }
            }
          }
        },
        "aProps2": {
          "href": "/contact#databricks"
        },
        "linkLabel": "Talk to a Databricks Expert"
      }
    }
  },
  "home": {
    "base": "formatted",
    "overrides": {}
  },
  "salesforce": {
    "base": "compact",
    "overrides": {
      "siteHeader": {
        "desktopNavigation": {
          "megaMenu": {
            "divProps": {
              "className": "item mega-item is-current"
            },
            "practiceNavigation": {
              "divProps": {
                "className": "mg-p c-salesforce is-here"
              },
              "aProps": {
                "aria-current": "page"
              }
            }
          },
          "megaMenuVariant3": {
            "divProps": {
              "className": "item mega-item"
            },
            "aProps": {
              "aria-current": null
            }
          }
        }
      }
    }
  },
  "servicenow": {
    "base": "compact",
    "overrides": {
      "siteHeader": {
        "desktopNavigation": {
          "megaMenu": {
            "divProps": {
              "className": "item mega-item is-current"
            },
            "practiceNavigationVariant2": {
              "divProps": {
                "className": "mg-p c-servicenow is-here"
              },
              "aProps": {
                "aria-current": "page"
              }
            }
          },
          "megaMenuVariant3": {
            "divProps": {
              "className": "item mega-item"
            },
            "aProps": {
              "aria-current": null
            }
          }
        }
      }
    }
  },
  "use-cases": {
    "base": "compact",
    "overrides": {
      "siteHeader": {
        "desktopNavigation": {
          "megaMenuVariant2": {
            "divProps": {
              "className": "item mega-item is-current"
            },
            "aProps": {
              "aria-current": "page"
            }
          },
          "megaMenuVariant3": {
            "divProps": {
              "className": "item mega-item"
            },
            "aProps": {
              "aria-current": null
            }
          }
        }
      }
    }
  }
}

function applyOverrides(base, overrides) {
  const result = { ...base }
  for (const [key, value] of Object.entries(overrides)) {
    if (value === null) delete result[key]
    else if (value && typeof value === 'object' && !Array.isArray(value) && base?.[key] && !Array.isArray(base[key])) result[key] = applyOverrides(base[key], value)
    else result[key] = value
  }
  return result
}

// Templates share presentation, but each page owns its mutable content tree.
// Deep-copy after merging so unchanged nested defaults cannot leak edits.
export const chromeByPage = Object.fromEntries(Object.entries(pageOverrides).map(([key, { base, overrides }]) => [key, structuredClone(applyOverrides(defaults[base], overrides))]))
