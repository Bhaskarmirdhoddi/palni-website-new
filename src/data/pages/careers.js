import { chromeByPage } from './navigation'

// Local content preserved verbatim. Reorder sections here; templates contain no page copy.
export default {
  layout: "PageLayout",
  content: { ...chromeByPage["careers"], ...{
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
    "type": "HeroSubSectionVariant3",
    "key": "careers-HeroSubSectionVariant3-1",
    "content": {
      "sectionProps": {
        "data-tone": "brand",
        "className": "hero sub",
        "aria-labelledby": "h1"
      },
      "canvasProps": {
        "className": "field",
        "data-field": "confluence",
        "data-colors": "sf,sn,db",
        "data-density": ".8",
        "data-interactive": "true",
        "aria-hidden": "true"
      },
      "sectionSpace2": "\n",
      "divProps": {
        "className": "wrap"
      },
      "breadcrumbsVariant2": {
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
        "spanProps2": {
          "aria-current": "page"
        },
        "label2": "Careers"
      },
      "aProps": {
        "className": "open-count",
        "href": "#openroles"
      },
      "bProps": {},
      "label": "7",
      "linkLabel": " open roles",
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
      "label2": "We",
      "h1Space2": " ",
      "spanProps3": {
        "className": "w"
      },
      "spanProps4": {
        "style": {
          "--i": "1"
        }
      },
      "label3": "aim",
      "h1Space3": " ",
      "spanProps5": {
        "className": "w"
      },
      "spanProps6": {
        "style": {
          "--i": "2"
        }
      },
      "label4": "high.",
      "brProps": {},
      "spanProps7": {
        "className": "tw"
      },
      "label5": "So will you.",
      "spanProps8": {
        "className": "caret",
        "aria-hidden": "true"
      },
      "pProps": {
        "className": "lead"
      },
      "description": "Every role at Palni comes with room to stretch, learn and lead, starting in your first week.",
      "divProps2": {
        "className": "btns"
      },
      "aProps2": {
        "className": "btn btn-primary",
        "href": "#openroles"
      },
      "linkLabel2": "Start Your Search",
      "aProps3": {
        "className": "btn btn-ghost",
        "href": "#life"
      },
      "linkLabel3": "Life at Palni"
    }
  },
  {
    "type": "text",
    "key": "space-2",
    "content": "\n\n"
  },
  {
    "type": "ValuesSection",
    "key": "values",
    "content": {
      "sectionProps": {
        "data-tone": "sf",
        "className": "sec tight",
        "id": "values",
        "aria-label": "What We Stand For"
      },
      "divProps": {
        "className": "marquee"
      },
      "divProps2": {
        "className": "track",
        "aria-hidden": "true"
      },
      "spanProps": {},
      "label": "Aim high",
      "spanProps2": {},
      "label2": "Own it",
      "spanProps3": {},
      "label3": "Build with care",
      "spanProps4": {},
      "label4": "Stay curious",
      "spanProps5": {},
      "label5": "Ship real things",
      "spanProps6": {},
      "label6": "Grow together",
      "spanProps7": {},
      "label7": "Aim high",
      "spanProps8": {},
      "label8": "Own it",
      "spanProps9": {},
      "label9": "Build with care",
      "spanProps10": {},
      "label10": "Stay curious",
      "spanProps11": {},
      "label11": "Ship real things",
      "spanProps12": {},
      "label12": "Grow together",
      "pProps": {
        "className": "sr",
        "style": {
          "position": "absolute",
          "left": "-9999px"
        }
      },
      "description": "Aim high, Own it, Build with care, Stay curious, Ship real things, Grow together"
    }
  },
  {
    "type": "text",
    "key": "space-4",
    "content": "\n"
  },
  {
    "type": "WhySection",
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
      "heading": "How We Work",
      "pProps": {
        "className": "lead"
      },
      "description": "We hire curious people, hand them real problems and back them all the way. Fewer layers, more ownership, and a team that keeps raising the bar together.",
      "divProps4": {
        "className": "quad"
      },
      "featureCardItems": [
        {
          "key": "FeatureCard-d7ee492f",
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
            "cardTitle": "Aim high",
            "pProps": {},
            "description": "We set ambitious goals and give people the support to reach them, not just the pressure."
          }
        },
        {
          "key": "FeatureCard-1c01f561",
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
            "cardTitle": "Own it",
            "pProps": {},
            "description": "Small teams own problems end to end. Fewer handoffs, clearer decisions, faster answers."
          }
        },
        {
          "key": "FeatureCard-dbe96d39",
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
              "d": "M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z M20 4h-6a3 3 0 0 0-3 3 M20 4v14h-7"
            },
            "h3Props": {},
            "cardTitle": "Learn out loud",
            "pProps": {},
            "description": "We share what we know, ask when we don't, and treat feedback as a gift."
          }
        },
        {
          "key": "FeatureCard-81a76c9c",
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
              "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M8 12.2l2.8 2.8L16 9.5"
            },
            "h3Props": {},
            "cardTitle": "Ship for real",
            "pProps": {},
            "description": "What we build goes to real users. We measure ourselves by what works, not what we planned."
          }
        }
      ]
    }
  },
  {
    "type": "text",
    "key": "space-6",
    "content": "\n"
  },
  {
    "type": "NumbersSection",
    "key": "numbers",
    "content": {
      "sectionProps": {
        "data-tone": "sn",
        "className": "sec",
        "id": "numbers",
        "aria-labelledby": "h-numbers"
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
        "id": "h-numbers"
      },
      "heading": "Palni in Numbers",
      "divProps4": {
        "className": "metrics",
        "style": {
          "--n": "4"
        }
      },
      "divProps5": {
        "className": "metric"
      },
      "divProps6": {
        "className": "num"
      },
      "spanProps": {
        "className": "v ph-v"
      },
      "label": "[00]",
      "pProps": {},
      "description": "Years building for our clients",
      "divProps7": {
        "className": "metric"
      },
      "divProps8": {
        "className": "num",
        "data-to": "500"
      },
      "spanProps2": {
        "className": "v"
      },
      "label2": "500",
      "supProps": {},
      "text": "+",
      "pProps2": {},
      "description2": "People on the Palni team",
      "divProps9": {
        "className": "metric"
      },
      "divProps10": {
        "className": "num"
      },
      "spanProps3": {
        "className": "v ph-v"
      },
      "label3": "[00]",
      "pProps3": {},
      "description3": "Clients across industries",
      "divProps11": {
        "className": "metric"
      },
      "divProps12": {
        "className": "num"
      },
      "spanProps4": {
        "className": "v ph-v"
      },
      "label4": "[00]",
      "pProps4": {},
      "description4": "Products and platforms shipped"
    }
  },
  {
    "type": "text",
    "key": "space-8",
    "content": "\n"
  },
  {
    "type": "TeamSection",
    "key": "team",
    "content": {
      "sectionProps": {
        "data-tone": "brand",
        "className": "sec",
        "id": "team",
        "aria-labelledby": "h-team"
      },
      "divProps": {
        "className": "wrap"
      },
      "divProps2": {
        "className": "photo has-img"
      },
      "imgProps": {
        "className": "ph-img",
        "src": "/assets/img/palni-culture.webp",
        "alt": "Palni teams at the annual festive day, Sankranti and team events",
        "width": "1440",
        "height": "600",
        "loading": "lazy",
        "decoding": "async"
      },
      "divProps3": {
        "className": "ph-scrim"
      },
      "divSpace5": "\n",
      "divProps4": {
        "className": "ph-body"
      },
      "h2Props": {
        "id": "h-team"
      },
      "heading": "Aim High. Together.",
      "divProps5": {
        "className": "btns"
      },
      "aProps": {
        "className": "btn btn-primary",
        "href": "/about#leadership"
      },
      "linkLabel": "Meet the Team"
    }
  },
  {
    "type": "text",
    "key": "space-10",
    "content": "\n"
  },
  {
    "type": "TracksSection",
    "key": "tracks",
    "content": {
      "sectionProps": {
        "data-tone": "db",
        "className": "sec",
        "id": "tracks",
        "aria-labelledby": "h-tracks"
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
        "id": "h-tracks"
      },
      "heading": "Create Your Career",
      "pProps": {
        "className": "lead"
      },
      "description": "Five tracks. Pick the work you want to grow in.",
      "divProps4": {
        "className": "tracks"
      },
      "aProps": {
        "className": "track-card",
        "href": "#openroles",
        "data-track": "Engineering"
      },
      "spanProps": {
        "className": "pill"
      },
      "label": "3 open",
      "spanProps2": {
        "className": "icb"
      },
      "svgProps": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps": {
        "d": "M8 6l-6 6 6 6 M16 6l6 6-6 6 M13.5 4l-3 16"
      },
      "spanProps3": {
        "className": "grow"
      },
      "label2": "Grow your",
      "h3Props": {
        "className": "h4d"
      },
      "cardTitle": "Engineering career",
      "pProps2": {},
      "description2": "Build and scale the platforms and products our clients rely on every day.",
      "spanProps4": {
        "className": "link more"
      },
      "label3": "Find your role",
      "aProps2": {
        "className": "track-card",
        "href": "#openroles",
        "data-track": "AI & Automation"
      },
      "spanProps5": {
        "className": "pill"
      },
      "label4": "1 open",
      "spanProps6": {
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
      "spanProps7": {
        "className": "grow"
      },
      "label5": "Grow your",
      "h3Props2": {
        "className": "h4d"
      },
      "cardTitle2": "AI & Automation career",
      "pProps3": {},
      "description3": "Design bots and intelligent workflows, like our SmartBots suite, that take real work off people's plates.",
      "spanProps8": {
        "className": "link more"
      },
      "label6": "Find your role",
      "aProps3": {
        "className": "track-card",
        "href": "#openroles",
        "data-track": "Design"
      },
      "spanProps9": {
        "className": "pill"
      },
      "label7": "1 open",
      "spanProps10": {
        "className": "icb"
      },
      "svgProps3": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps3": {
        "d": "M12 19l7-7 3 3-7 7z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z M2 2l7.6 7.6 M11 13a2 2 0 1 0 0-.01"
      },
      "spanProps11": {
        "className": "grow"
      },
      "label8": "Grow your",
      "h3Props3": {
        "className": "h4d"
      },
      "cardTitle3": "Design career",
      "pProps4": {},
      "description4": "Shape how people experience what we build, from first sketch to shipped screen.",
      "spanProps12": {
        "className": "link more"
      },
      "label9": "Find your role",
      "aProps4": {
        "className": "track-card",
        "href": "#openroles",
        "data-track": "People"
      },
      "spanProps13": {
        "className": "pill"
      },
      "label10": "1 open",
      "spanProps14": {
        "className": "icb"
      },
      "svgProps4": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps4": {
        "d": "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z M2.5 20a6.5 6.5 0 0 1 13 0 M16 4.6a3.5 3.5 0 0 1 0 6.8 M18 14.2a6 6 0 0 1 3.5 5.8"
      },
      "spanProps15": {
        "className": "grow"
      },
      "label11": "Grow your",
      "h3Props4": {
        "className": "h4d"
      },
      "cardTitle4": "People career",
      "pProps5": {},
      "description5": "Find, grow and look after the people who make Palni what it is.",
      "spanProps16": {
        "className": "link more"
      },
      "label12": "Find your role",
      "aProps5": {
        "className": "track-card",
        "href": "#openroles",
        "data-track": "Business"
      },
      "spanProps17": {
        "className": "pill"
      },
      "label13": "1 open",
      "spanProps18": {
        "className": "icb"
      },
      "svgProps5": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps5": {
        "d": "M3 7h18v13H3z M8 7V4h8v3 M3 13h18"
      },
      "spanProps19": {
        "className": "grow"
      },
      "label14": "Grow your",
      "h3Props5": {
        "className": "h4d"
      },
      "cardTitle5": "Business career",
      "pProps6": {},
      "description6": "Build relationships with enterprise teams and help them find the right starting point.",
      "spanProps20": {
        "className": "link more"
      },
      "label15": "Find your role"
    }
  },
  {
    "type": "text",
    "key": "space-12",
    "content": "\n"
  },
  {
    "type": "OpenrolesSection",
    "key": "openroles",
    "content": {
      "sectionProps": {
        "data-tone": "night",
        "className": "sec",
        "id": "openroles",
        "aria-labelledby": "h-openroles"
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
        "id": "h-openroles"
      },
      "heading": "Find Your Seat",
      "pProps": {
        "className": "lead"
      },
      "description": "Search or filter by team. Select a role to see the details.",
      "divProps4": {
        "className": "roles-bar"
      },
      "divProps5": {
        "className": "filters",
        "role": "group",
        "aria-label": "Filter roles by team",
        "style": {
          "margin": "0"
        }
      },
      "buttonProps": {
        "type": "button",
        "className": "c-brand",
        "data-team": "all",
        "aria-pressed": "true"
      },
      "buttonLabel": "All ",
      "spanProps": {
        "className": "n"
      },
      "label": "7",
      "buttonProps2": {
        "type": "button",
        "className": "c-brand",
        "data-team": "Engineering",
        "aria-pressed": "false"
      },
      "buttonLabel2": "Engineering ",
      "spanProps2": {
        "className": "n"
      },
      "label2": "3",
      "buttonProps3": {
        "type": "button",
        "className": "c-brand",
        "data-team": "AI & Automation",
        "aria-pressed": "false"
      },
      "buttonLabel3": "AI & Automation ",
      "spanProps3": {
        "className": "n"
      },
      "label3": "1",
      "buttonProps4": {
        "type": "button",
        "className": "c-brand",
        "data-team": "Design",
        "aria-pressed": "false"
      },
      "buttonLabel4": "Design ",
      "spanProps4": {
        "className": "n"
      },
      "label4": "1",
      "buttonProps5": {
        "type": "button",
        "className": "c-brand",
        "data-team": "People",
        "aria-pressed": "false"
      },
      "buttonLabel5": "People ",
      "spanProps5": {
        "className": "n"
      },
      "label5": "1",
      "buttonProps6": {
        "type": "button",
        "className": "c-brand",
        "data-team": "Business",
        "aria-pressed": "false"
      },
      "buttonLabel6": "Business ",
      "spanProps6": {
        "className": "n"
      },
      "label6": "1",
      "labelProps": {
        "className": "search"
      },
      "svgProps": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps": {
        "d": "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M20.5 20.5l-4.5-4.5"
      },
      "spanProps7": {
        "style": {
          "position": "absolute",
          "left": "-9999px"
        }
      },
      "label7": "Search roles",
      "inputProps": {
        "id": "role-q",
        "type": "search",
        "placeholder": "Search roles, skills, teams",
        "autoComplete": "off"
      },
      "divProps6": {
        "className": "roles"
      },
      "divProps7": {
        "className": "role",
        "data-team": "Engineering",
        "data-q": "senior angular developer engineering angular; typescript; ngrx / rxjs; performance",
        "data-open": ""
      },
      "divSpace20": "\n",
      "buttonProps7": {
        "type": "button",
        "aria-expanded": "true",
        "aria-controls": "role-0"
      },
      "spanProps8": {
        "className": "t"
      },
      "label8": "Senior Angular Developer",
      "spanProps9": {
        "className": "new"
      },
      "label9": "New",
      "spanProps10": {
        "className": "m"
      },
      "label10": "Engineering",
      "spanProps11": {
        "className": "m loc"
      },
      "label11": "[City] · Hybrid",
      "spanProps12": {
        "className": "m"
      },
      "label12": "5–8 yrs",
      "spanProps13": {
        "className": "pm"
      },
      "svgProps2": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps2": {
        "d": "M12 5v14M5 12h14"
      },
      "divSpace21": "\n",
      "divProps8": {
        "className": "detail",
        "id": "role-0"
      },
      "pProps2": {},
      "description2": "Own complex front ends end to end: state management, performance and the details users notice without knowing why.",
      "divProps9": {
        "className": "skills",
        "aria-label": "Skills"
      },
      "spanProps14": {},
      "label13": "Angular",
      "spanProps15": {},
      "label14": "TypeScript",
      "spanProps16": {},
      "label15": "NgRx / RxJS",
      "spanProps17": {},
      "label16": "Performance",
      "divProps10": {
        "className": "btns"
      },
      "aProps": {
        "className": "btn btn-primary btn-sm",
        "href": "mailto:jobs@palni.com?subject=Senior%20Angular%20Developer"
      },
      "linkLabel": "Apply for This Role",
      "aProps2": {
        "className": "btn btn-ghost btn-sm",
        "href": "#openroles"
      },
      "linkLabel2": "Read Full Description",
      "divProps11": {
        "className": "role",
        "data-team": "Engineering",
        "data-q": "full-stack engineer engineering [confirm skills]"
      },
      "divSpace36": "\n",
      "buttonProps8": {
        "type": "button",
        "aria-expanded": "false",
        "aria-controls": "role-1"
      },
      "spanProps18": {
        "className": "t"
      },
      "label17": "Full-Stack Engineer",
      "spanProps19": {
        "className": "m"
      },
      "label18": "Engineering",
      "spanProps20": {
        "className": "m loc"
      },
      "label19": "[City] · Hybrid",
      "spanProps21": {
        "className": "m"
      },
      "label20": "3–6 yrs",
      "spanProps22": {
        "className": "pm"
      },
      "svgProps3": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps3": {
        "d": "M12 5v14M5 12h14"
      },
      "divSpace37": "\n",
      "divProps12": {
        "className": "detail",
        "id": "role-1",
        "hidden": true
      },
      "pProps3": {},
      "description3": "[Role summary to confirm with the hiring manager.]",
      "divProps13": {
        "className": "skills",
        "aria-label": "Skills"
      },
      "spanProps23": {},
      "label21": "[Confirm skills]",
      "divProps14": {
        "className": "btns"
      },
      "aProps3": {
        "className": "btn btn-primary btn-sm",
        "href": "mailto:jobs@palni.com?subject=FullStack%20Engineer"
      },
      "linkLabel3": "Apply for This Role",
      "aProps4": {
        "className": "btn btn-ghost btn-sm",
        "href": "#openroles"
      },
      "linkLabel4": "Read Full Description",
      "divProps15": {
        "className": "role",
        "data-team": "AI & Automation",
        "data-q": "ai / ml engineer, smartbots ai & automation [confirm skills]"
      },
      "divSpace49": "\n",
      "buttonProps9": {
        "type": "button",
        "aria-expanded": "false",
        "aria-controls": "role-2"
      },
      "spanProps24": {
        "className": "t"
      },
      "label22": "AI / ML Engineer, SmartBots",
      "spanProps25": {
        "className": "new"
      },
      "label23": "New",
      "spanProps26": {
        "className": "m"
      },
      "label24": "AI & Automation",
      "spanProps27": {
        "className": "m loc"
      },
      "label25": "[City] · Hybrid",
      "spanProps28": {
        "className": "m"
      },
      "label26": "3–6 yrs",
      "spanProps29": {
        "className": "pm"
      },
      "svgProps4": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps4": {
        "d": "M12 5v14M5 12h14"
      },
      "divSpace50": "\n",
      "divProps16": {
        "className": "detail",
        "id": "role-2",
        "hidden": true
      },
      "pProps4": {},
      "description4": "[Role summary to confirm with the hiring manager.]",
      "divProps17": {
        "className": "skills",
        "aria-label": "Skills"
      },
      "spanProps30": {},
      "label27": "[Confirm skills]",
      "divProps18": {
        "className": "btns"
      },
      "aProps5": {
        "className": "btn btn-primary btn-sm",
        "href": "mailto:jobs@palni.com?subject=AI%20%20ML%20Engineer%20SmartBots"
      },
      "linkLabel5": "Apply for This Role",
      "aProps6": {
        "className": "btn btn-ghost btn-sm",
        "href": "#openroles"
      },
      "linkLabel6": "Read Full Description",
      "divProps19": {
        "className": "role",
        "data-team": "Engineering",
        "data-q": "qa automation engineer engineering [confirm skills]"
      },
      "divSpace62": "\n",
      "buttonProps10": {
        "type": "button",
        "aria-expanded": "false",
        "aria-controls": "role-3"
      },
      "spanProps31": {
        "className": "t"
      },
      "label28": "QA Automation Engineer",
      "spanProps32": {
        "className": "m"
      },
      "label29": "Engineering",
      "spanProps33": {
        "className": "m loc"
      },
      "label30": "[City] · On-site",
      "spanProps34": {
        "className": "m"
      },
      "label31": "2–5 yrs",
      "spanProps35": {
        "className": "pm"
      },
      "svgProps5": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps5": {
        "d": "M12 5v14M5 12h14"
      },
      "divSpace63": "\n",
      "divProps20": {
        "className": "detail",
        "id": "role-3",
        "hidden": true
      },
      "pProps5": {},
      "description5": "[Role summary to confirm with the hiring manager.]",
      "divProps21": {
        "className": "skills",
        "aria-label": "Skills"
      },
      "spanProps36": {},
      "label32": "[Confirm skills]",
      "divProps22": {
        "className": "btns"
      },
      "aProps7": {
        "className": "btn btn-primary btn-sm",
        "href": "mailto:jobs@palni.com?subject=QA%20Automation%20Engineer"
      },
      "linkLabel7": "Apply for This Role",
      "aProps8": {
        "className": "btn btn-ghost btn-sm",
        "href": "#openroles"
      },
      "linkLabel8": "Read Full Description",
      "divProps23": {
        "className": "role",
        "data-team": "Design",
        "data-q": "ui / ux designer design [confirm skills]"
      },
      "divSpace75": "\n",
      "buttonProps11": {
        "type": "button",
        "aria-expanded": "false",
        "aria-controls": "role-4"
      },
      "spanProps37": {
        "className": "t"
      },
      "label33": "UI / UX Designer",
      "spanProps38": {
        "className": "new"
      },
      "label34": "New",
      "spanProps39": {
        "className": "m"
      },
      "label35": "Design",
      "spanProps40": {
        "className": "m loc"
      },
      "label36": "[City] · Hybrid",
      "spanProps41": {
        "className": "m"
      },
      "label37": "3–5 yrs",
      "spanProps42": {
        "className": "pm"
      },
      "svgProps6": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps6": {
        "d": "M12 5v14M5 12h14"
      },
      "divSpace76": "\n",
      "divProps24": {
        "className": "detail",
        "id": "role-4",
        "hidden": true
      },
      "pProps6": {},
      "description6": "[Role summary to confirm with the hiring manager.]",
      "divProps25": {
        "className": "skills",
        "aria-label": "Skills"
      },
      "spanProps43": {},
      "label38": "[Confirm skills]",
      "divProps26": {
        "className": "btns"
      },
      "aProps9": {
        "className": "btn btn-primary btn-sm",
        "href": "mailto:jobs@palni.com?subject=UI%20%20UX%20Designer"
      },
      "linkLabel9": "Apply for This Role",
      "aProps10": {
        "className": "btn btn-ghost btn-sm",
        "href": "#openroles"
      },
      "linkLabel10": "Read Full Description",
      "divProps27": {
        "className": "role",
        "data-team": "People",
        "data-q": "talent acquisition specialist people [confirm skills]"
      },
      "divSpace88": "\n",
      "buttonProps12": {
        "type": "button",
        "aria-expanded": "false",
        "aria-controls": "role-5"
      },
      "spanProps44": {
        "className": "t"
      },
      "label39": "Talent Acquisition Specialist",
      "spanProps45": {
        "className": "m"
      },
      "label40": "People",
      "spanProps46": {
        "className": "m loc"
      },
      "label41": "[City] · On-site",
      "spanProps47": {
        "className": "m"
      },
      "label42": "2–4 yrs",
      "spanProps48": {
        "className": "pm"
      },
      "svgProps7": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps7": {
        "d": "M12 5v14M5 12h14"
      },
      "divSpace89": "\n",
      "divProps28": {
        "className": "detail",
        "id": "role-5",
        "hidden": true
      },
      "pProps7": {},
      "description7": "[Role summary to confirm with the hiring manager.]",
      "divProps29": {
        "className": "skills",
        "aria-label": "Skills"
      },
      "spanProps49": {},
      "label43": "[Confirm skills]",
      "divProps30": {
        "className": "btns"
      },
      "aProps11": {
        "className": "btn btn-primary btn-sm",
        "href": "mailto:jobs@palni.com?subject=Talent%20Acquisition%20Specialist"
      },
      "linkLabel11": "Apply for This Role",
      "aProps12": {
        "className": "btn btn-ghost btn-sm",
        "href": "#openroles"
      },
      "linkLabel12": "Read Full Description",
      "divProps31": {
        "className": "role",
        "data-team": "Business",
        "data-q": "business development executive business [confirm skills]"
      },
      "divSpace101": "\n",
      "buttonProps13": {
        "type": "button",
        "aria-expanded": "false",
        "aria-controls": "role-6"
      },
      "spanProps50": {
        "className": "t"
      },
      "label44": "Business Development Executive",
      "spanProps51": {
        "className": "m"
      },
      "label45": "Business",
      "spanProps52": {
        "className": "m loc"
      },
      "label46": "[City] · On-site",
      "spanProps53": {
        "className": "m"
      },
      "label47": "2–5 yrs",
      "spanProps54": {
        "className": "pm"
      },
      "svgProps8": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps8": {
        "d": "M12 5v14M5 12h14"
      },
      "divSpace102": "\n",
      "divProps32": {
        "className": "detail",
        "id": "role-6",
        "hidden": true
      },
      "pProps8": {},
      "description8": "[Role summary to confirm with the hiring manager.]",
      "divProps33": {
        "className": "skills",
        "aria-label": "Skills"
      },
      "spanProps55": {},
      "label48": "[Confirm skills]",
      "divProps34": {
        "className": "btns"
      },
      "aProps13": {
        "className": "btn btn-primary btn-sm",
        "href": "mailto:jobs@palni.com?subject=Business%20Development%20Executive"
      },
      "linkLabel13": "Apply for This Role",
      "aProps14": {
        "className": "btn btn-ghost btn-sm",
        "href": "#openroles"
      },
      "linkLabel14": "Read Full Description",
      "pProps9": {
        "className": "roles-empty",
        "id": "roles-empty",
        "hidden": true
      },
      "description9": "No roles match. Try another search, or send us your CV below."
    }
  },
  {
    "type": "text",
    "key": "space-14",
    "content": "\n"
  },
  {
    "type": "LifeSection",
    "key": "life",
    "content": {
      "sectionProps": {
        "data-tone": "brand",
        "className": "sec",
        "id": "life",
        "aria-labelledby": "h-life"
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
        "id": "h-life"
      },
      "heading": "Room to Grow, Support to Get There",
      "divProps4": {
        "className": "bento"
      },
      "divProps5": {
        "className": "big"
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
        "d": "M12 21v-9 M12 12C12 7 8 5 4 5c0 5 3 7 8 7z M12 14c0-4 3-6 8-6 0 4-3 6-8 6z"
      },
      "spanProps2": {
        "className": "k"
      },
      "label": "Growth",
      "h3Props": {
        "className": "h3d"
      },
      "cardTitle": "Your next step, mapped with you.",
      "pProps": {},
      "description": "A mentor from day one, regular growth conversations and a clear path to your next role.",
      "featureCardItems": [
        {
          "key": "FeatureCard-2c1ef5a9",
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
              "d": "M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z M20 4h-6a3 3 0 0 0-3 3 M20 4v14h-7"
            },
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Learning budget",
            "pProps": {},
            "description": "Courses and certifications, up to [AMOUNT] a year."
          }
        },
        {
          "key": "FeatureCard-b83c2a82",
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
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Real products",
            "pProps": {},
            "description": "Work on platforms like SmartBots that real users rely on."
          }
        },
        {
          "key": "FeatureCard-8611b415",
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
              "d": "M12 20s-7-4.5-9-9a4.5 4.5 0 0 1 9-3 4.5 4.5 0 0 1 9 3c-2 4.5-9 9-9 9z"
            },
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Health cover",
            "pProps": {},
            "description": "[Insurance details for you and your family]"
          }
        },
        {
          "key": "FeatureCard-62a0d77f",
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
              "d": "M3 11l9-7 9 7 M5 10v10h14V10 M10 20v-5h4v5"
            },
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Flexible work",
            "pProps": {},
            "description": "[Hybrid policy: office days and hours]"
          }
        }
      ],
      "divProps6": {
        "className": "wide"
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
        "d": "M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M8.5 14L7 22l5-3 5 3-1.5-8"
      },
      "spanProps4": {
        "className": "k"
      },
      "label2": "Recognition",
      "h3Props2": {
        "className": "h4d"
      },
      "cardTitle2": "Great work gets seen.",
      "pProps2": {},
      "description2": "[Awards, spot bonuses or recognition programme. Confirm with HR.]",
      "divProps7": {
        "className": "wide"
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
        "d": "M3 5h18v16H3z M3 10h18 M8 3v4 M16 3v4"
      },
      "spanProps6": {
        "className": "k"
      },
      "label3": "Time off",
      "h3Props3": {
        "className": "h4d"
      },
      "cardTitle3": "Rest is part of the work.",
      "pProps3": {},
      "description3": "[N] days of paid leave plus public holidays."
    }
  },
  {
    "type": "text",
    "key": "space-16",
    "content": "\n"
  },
  {
    "type": "HireSection",
    "key": "hire",
    "content": {
      "sectionProps": {
        "data-tone": "sf",
        "className": "sec",
        "id": "hire",
        "aria-labelledby": "h-hire"
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
        "id": "h-hire"
      },
      "heading": "Five Steps. No Surprises.",
      "pProps": {
        "className": "lead"
      },
      "description": "Here is exactly what happens after you apply.",
      "olProps": {
        "className": "steps five"
      },
      "liProps": {
        "className": "step"
      },
      "spanProps": {
        "className": "n",
        "aria-hidden": "true"
      },
      "label": "1",
      "spanProps2": {
        "className": "time"
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
      "label2": "~5 min",
      "h3Props": {},
      "cardTitle": "Apply",
      "pProps2": {},
      "description2": "Pick a role and send your CV. No cover letter essays required.",
      "liProps2": {
        "className": "step"
      },
      "spanProps3": {
        "className": "n",
        "aria-hidden": "true"
      },
      "label3": "2",
      "spanProps4": {
        "className": "time"
      },
      "svgProps2": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps2": {
        "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3.5 2"
      },
      "label4": "~30 min",
      "h3Props2": {},
      "cardTitle2": "Talk with TA",
      "pProps3": {},
      "description3": "A friendly call with our talent team about you, the role and what you want next.",
      "liProps3": {
        "className": "step"
      },
      "spanProps5": {
        "className": "n",
        "aria-hidden": "true"
      },
      "label5": "3",
      "spanProps6": {
        "className": "time"
      },
      "svgProps3": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps3": {
        "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3.5 2"
      },
      "label6": "~60 min",
      "h3Props3": {},
      "cardTitle3": "Technical round",
      "pProps4": {},
      "description4": "A practical conversation or exercise based on real work, not trivia.",
      "liProps4": {
        "className": "step"
      },
      "spanProps7": {
        "className": "n",
        "aria-hidden": "true"
      },
      "label7": "4",
      "spanProps8": {
        "className": "time"
      },
      "svgProps4": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps4": {
        "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3.5 2"
      },
      "label8": "~45 min",
      "h3Props4": {},
      "cardTitle4": "Meet your manager",
      "pProps5": {},
      "description5": "Talk goals, team and ways of working with the person you would report to.",
      "liProps5": {
        "className": "step"
      },
      "spanProps9": {
        "className": "n",
        "aria-hidden": "true"
      },
      "label9": "5",
      "spanProps10": {
        "className": "time"
      },
      "svgProps5": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps5": {
        "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3.5 2"
      },
      "label10": "[Timeline]",
      "h3Props5": {},
      "cardTitle5": "Offer and welcome",
      "pProps6": {},
      "description6": "A clear decision, an offer, and an onboarding plan for your first weeks."
    }
  },
  {
    "type": "text",
    "key": "space-18",
    "content": "\n"
  },
  {
    "type": "DiscoveryCTAVariant2",
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
      "heading": "Don't See Your Role? Aim High.",
      "pProps": {
        "className": "lead"
      },
      "description": "Send us your CV and a few lines on what you'd love to build at Palni. Our talent team reads every note.",
      "divSpace7": "\n",
      "formProps": {
        "className": "cv",
        "id": "cv-form",
        "noValidate": true
      },
      "labelProps": {
        "htmlFor": "cv-email",
        "style": {
          "position": "absolute",
          "left": "-9999px"
        }
      },
      "text": "Email address",
      "inputProps": {
        "id": "cv-email",
        "type": "email",
        "placeholder": "you@email.com",
        "autoComplete": "email"
      },
      "buttonProps": {
        "className": "btn btn-primary",
        "type": "submit"
      },
      "buttonLabel": "Get in Touch",
      "pProps2": {
        "className": "cv-msg",
        "id": "cv-msg",
        "role": "status"
      },
      "divSpace10": "\n",
      "divProps5": {
        "style": {
          "display": "grid",
          "gap": "var(--s3)"
        }
      },
      "divProps6": {
        "className": "fraud"
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
        "d": "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4"
      },
      "divProps7": {},
      "bProps": {},
      "label": "Recruitment fraud notice",
      "spanProps2": {},
      "label2": "Palni never asks candidates for money at any stage of hiring. Offers come only from a palni.com email address. If someone asks you to pay, report it to jobs@palni.com.",
      "divProps8": {
        "className": "fraud"
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
        "d": "M3 5h18v14H3z M3.5 6l8.5 7 8.5-7"
      },
      "divProps9": {},
      "bProps2": {},
      "label3": "Prefer email?",
      "spanProps4": {},
      "label4": "Write to jobs@palni.com with the role you are interested in.",
      "divSpace27": "\n",
      "contactDetails": {
        "divProps": {
          "className": "cta-contact"
        },
        "aProps": {
          "href": "mailto:jobs@palni.com"
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
        "linkLabel": "jobs@palni.com",
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
