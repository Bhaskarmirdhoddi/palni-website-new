import { chromeByPage } from './navigation'

// Local content preserved verbatim. Reorder sections here; templates contain no page copy.
export default {
  layout: "PageLayout",
  content: { ...chromeByPage["about"], ...{
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
    "type": "HeroSubSection",
    "key": "about-HeroSubSection-1",
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
        "data-density": "0.7",
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
        "label2": "Company",
        "spanProps3": {
          "aria-hidden": "true"
        },
        "label3": "/",
        "spanProps4": {
          "aria-current": "page"
        },
        "label4": "About Palni"
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
      "label": "People",
      "h1Space2": " ",
      "spanProps3": {
        "className": "w"
      },
      "spanProps4": {
        "style": {
          "--i": "1"
        }
      },
      "label2": "and",
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
      "label4": "Behind",
      "h1Space5": " ",
      "spanProps9": {
        "className": "w"
      },
      "spanProps10": {
        "style": {
          "--i": "4"
        }
      },
      "label5": "Better",
      "h1Space6": " ",
      "spanProps11": {
        "className": "w"
      },
      "spanProps12": {
        "style": {
          "--i": "5"
        }
      },
      "label6": "Outcomes",
      "pProps": {
        "className": "lead"
      },
      "description": "Palni brings together platform knowledge, engineering experience and industry understanding to help enterprises improve the systems, workflows and data they depend on.",
      "divProps2": {
        "className": "btns"
      },
      "aProps": {
        "className": "btn btn-primary",
        "href": "#how"
      },
      "linkLabel": "Explore How We Work"
    }
  },
  {
    "type": "text",
    "key": "space-2",
    "content": "\n\n"
  },
  {
    "type": "StorySection",
    "key": "story",
    "content": {
      "sectionProps": {
        "data-tone": "sf",
        "className": "sec",
        "id": "story",
        "aria-labelledby": "h-story"
      },
      "divProps": {
        "className": "wrap"
      },
      "divProps2": {
        "className": "split"
      },
      "h2Props": {
        "id": "h-story"
      },
      "heading": "Trusted Expertise, Committed to Your Success",
      "divProps3": {
        "className": "body"
      },
      "pProps": {},
      "description": "We put trust at the centre of how we work. Our teams combine collaboration, agility and creativity with technical, domain and business experience to help organisations solve practical challenges and improve digital operations."
    }
  },
  {
    "type": "text",
    "key": "space-4",
    "content": "\n"
  },
  {
    "type": "PhilosophySection",
    "key": "philosophy",
    "content": {
      "sectionProps": {
        "data-tone": "night",
        "className": "sec",
        "id": "philosophy",
        "aria-labelledby": "h-philosophy"
      },
      "divProps": {
        "className": "wrap"
      },
      "divProps2": {
        "className": "photostats"
      },
      "figureProps": {
        "className": "ps-photo"
      },
      "imgProps": {
        "src": "/assets/img/team.webp",
        "alt": "",
        "width": "640",
        "height": "372",
        "loading": "lazy",
        "decoding": "async"
      },
      "figcaptionProps": {},
      "spanProps": {
        "className": "dot"
      },
      "text": "Experience and Relationships",
      "divSpace3": "\n",
      "divProps3": {
        "className": "ps-body"
      },
      "h2Props": {
        "id": "h-philosophy"
      },
      "heading": "Think Big. Win Together.",
      "pProps": {
        "className": "lead"
      },
      "description": "We bring people with different skills and perspectives together around a shared goal. By combining practical thinking with consistent ways of working, we help teams make progress on complex technology and business priorities.",
      "divProps4": {
        "className": "ps-ms"
      },
      "divProps5": {
        "className": "ps-m"
      },
      "divProps6": {
        "className": "num",
        "data-to": "500"
      },
      "spanProps2": {
        "className": "v"
      },
      "label": "500",
      "supProps": {},
      "text2": "+",
      "pProps2": {},
      "description2": "Technical, domain and business experts",
      "divProps7": {
        "className": "ps-m"
      },
      "divProps8": {
        "className": "num",
        "data-to": "15"
      },
      "spanProps3": {
        "className": "v"
      },
      "label2": "15",
      "supProps2": {},
      "text3": "+",
      "pProps3": {},
      "description3": "Fortune 500 companies as clients",
      "divProps9": {
        "className": "ps-m"
      },
      "divProps10": {
        "className": "num",
        "data-to": "90"
      },
      "spanProps4": {
        "className": "v"
      },
      "label3": "90",
      "supProps3": {},
      "text4": "%",
      "pProps4": {},
      "description4": "Revenue from repeat customers"
    }
  },
  {
    "type": "text",
    "key": "space-6",
    "content": "\n"
  },
  {
    "type": "PrinciplesSection",
    "key": "principles",
    "content": {
      "sectionProps": {
        "data-tone": "sn",
        "className": "sec",
        "id": "principles",
        "aria-labelledby": "h-principles"
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
        "id": "h-principles"
      },
      "heading": "The Principles That Guide Our Work",
      "pProps": {
        "className": "lead"
      },
      "description": "These principles shape how we work with clients and with each other.",
      "divProps4": {
        "className": "tiles"
      },
      "featureCardItems": [
        {
          "key": "FeatureCard-ffc7ad5b",
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
              "d": "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4"
            },
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Trust",
            "pProps": {},
            "description": "Be clear about responsibilities, communicate openly and build confidence through consistent actions."
          }
        },
        {
          "key": "FeatureCard-794cecd1",
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
              "d": "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z M2.5 20a6.5 6.5 0 0 1 13 0 M16 4.6a3.5 3.5 0 0 1 0 6.8 M18 14.2a6 6 0 0 1 3.5 5.8"
            },
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Collaboration",
            "pProps": {},
            "description": "Bring clients and colleagues together to solve shared problems and make informed decisions."
          }
        },
        {
          "key": "FeatureCard-bd62abcd",
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
              "d": "M13 2L4 14h7l-1 8 9-12h-7z"
            },
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Agility",
            "pProps": {},
            "description": "Respond to changing priorities without losing sight of the business objective."
          }
        },
        {
          "key": "FeatureCard-7245b32f",
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
              "d": "M12 19l7-7 3 3-7 7z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z M2 2l7.6 7.6 M11 13a2 2 0 1 0 0-.01"
            },
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Creativity",
            "pProps": {},
            "description": "Look for practical ways to improve processes, platforms and experiences."
          }
        },
        {
          "key": "FeatureCard-f45725d2",
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
              "d": "M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z M20 4h-6a3 3 0 0 0-3 3 M20 4v14h-7"
            },
            "h3Props": {
              "className": "h4d"
            },
            "cardTitle": "Continuous Learning",
            "pProps": {},
            "description": "Keep developing skills as technology, customer needs and business contexts change."
          }
        },
        {
          "key": "FeatureCard-8f201adb",
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
            "cardTitle": "Commitment to Outcomes",
            "pProps": {},
            "description": "Focus on work that helps the business move forward, not activity for its own sake."
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
    "type": "HowSection",
    "key": "how",
    "content": {
      "sectionProps": {
        "data-tone": "brand",
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
      "description": "We start by understanding the business need, agree the first practical step, deliver focused work and improve from what we learn.",
      "processSteps": {
        "olProps": {
          "className": "steps",
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
        "description": "Understand the objective, the existing environment and the change the business needs.",
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
        "description2": "Turn the agreed priority into a focused solution with clear responsibilities and practical milestones.",
        "liProps3": {
          "className": "step"
        },
        "spanProps3": {
          "className": "n",
          "aria-hidden": "true"
        },
        "label3": "3",
        "h3Props3": {},
        "cardTitle3": "Optimise",
        "pProps3": {},
        "description3": "Review what is working, address friction and improve the solution.",
        "liProps4": {
          "className": "step"
        },
        "spanProps4": {
          "className": "n",
          "aria-hidden": "true"
        },
        "label4": "4",
        "h3Props4": {},
        "cardTitle4": "Scale",
        "pProps4": {},
        "description4": "Extend proven approaches where they create value across teams or operations."
      }
    }
  },
  {
    "type": "text",
    "key": "space-10",
    "content": "\n"
  },
  {
    "type": "RoutesSection",
    "key": "routes",
    "content": {
      "sectionProps": {
        "data-tone": "db",
        "className": "sec",
        "id": "routes",
        "aria-labelledby": "h-routes"
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
        "id": "h-routes"
      },
      "heading": "Practical Ways to Move from Idea to Delivery",
      "pProps": {
        "className": "lead"
      },
      "description": "Different priorities need different starting points. Palni helps teams clarify the opportunity, test an approach and create a path to delivery.",
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
        "d": "M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z M9 4v14 M15 6v14"
      },
      "h3Props": {
        "className": "h3d"
      },
      "cardTitle": "Discovery and Roadmaps",
      "pProps2": {},
      "description2": "Clarify business priorities, platform needs and the steps required to move forward.",
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
        "d": "M9 3h6 M10 3v6l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.5L14 9V3 M7 15h10"
      },
      "h3Props2": {
        "className": "h3d"
      },
      "cardTitle2": "Proof of Value",
      "pProps3": {},
      "description3": "Test an agreed approach against a defined problem before committing to wider implementation.",
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
        "d": "M13 2L4 14h7l-1 8 9-12h-7z"
      },
      "h3Props3": {
        "className": "h3d"
      },
      "cardTitle3": "Focused Accelerators",
      "pProps4": {},
      "description4": "Use relevant reusable components and frameworks where they support the delivery need.",
      "divProps10": {
        "className": "aside"
      }
    }
  },
  {
    "type": "text",
    "key": "space-12",
    "content": "\n"
  },
  {
    "type": "LeadershipSection",
    "key": "leadership",
    "content": {
      "sectionProps": {
        "data-tone": "night",
        "className": "sec",
        "id": "leadership",
        "aria-labelledby": "h-leadership"
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
        "id": "h-leadership"
      },
      "heading": "The People Leading Palni",
      "pProps": {
        "className": "lead"
      },
      "description": "A leadership team with deep platform, delivery and industry experience across the USA and India.",
      "divProps4": {
        "className": "people"
      },
      "personCardItems": [
        {
          "key": "PersonCard-900a250c",
          "space": "",
          "content": {
            "articleProps": {
              "className": "person"
            },
            "divProps": {
              "className": "ph",
              "role": "img",
              "aria-label": "Photo to come"
            },
            "svgProps": {
              "className": "ic",
              "viewBox": "0 0 24 24",
              "aria-hidden": "true",
              "focusable": "false"
            },
            "pathProps": {
              "d": "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21a8 8 0 0 1 16 0"
            },
            "divProps2": {},
            "h3Props": {
              "className": "nm"
            },
            "cardTitle": "[Name]",
            "pProps": {
              "className": "rl"
            },
            "description": "Founder and Chief Executive Officer",
            "spanProps": {
              "className": "li"
            },
            "svgProps2": {
              "className": "ic",
              "viewBox": "0 0 24 24",
              "aria-hidden": "true",
              "focusable": "false"
            },
            "pathProps2": {
              "d": "M4 9h3.5v11H4z M5.75 6.5a1.75 1.75 0 1 0 0-.01 M10 9h3.3v1.6c.6-1 1.8-1.9 3.6-1.9 2.6 0 3.6 1.7 3.6 4.4V20H17v-6c0-1.4-.4-2.4-1.8-2.4-1.5 0-2.2 1-2.2 2.6V20H10z"
            },
            "label": "LinkedIn profile"
          }
        },
        {
          "key": "PersonCard-eeacebf",
          "space": "",
          "content": {
            "articleProps": {
              "className": "person"
            },
            "divProps": {
              "className": "ph",
              "role": "img",
              "aria-label": "Photo to come"
            },
            "svgProps": {
              "className": "ic",
              "viewBox": "0 0 24 24",
              "aria-hidden": "true",
              "focusable": "false"
            },
            "pathProps": {
              "d": "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21a8 8 0 0 1 16 0"
            },
            "divProps2": {},
            "h3Props": {
              "className": "nm"
            },
            "cardTitle": "[Name]",
            "pProps": {
              "className": "rl"
            },
            "description": "Chief Operating Officer",
            "spanProps": {
              "className": "li"
            },
            "svgProps2": {
              "className": "ic",
              "viewBox": "0 0 24 24",
              "aria-hidden": "true",
              "focusable": "false"
            },
            "pathProps2": {
              "d": "M4 9h3.5v11H4z M5.75 6.5a1.75 1.75 0 1 0 0-.01 M10 9h3.3v1.6c.6-1 1.8-1.9 3.6-1.9 2.6 0 3.6 1.7 3.6 4.4V20H17v-6c0-1.4-.4-2.4-1.8-2.4-1.5 0-2.2 1-2.2 2.6V20H10z"
            },
            "label": "LinkedIn profile"
          }
        },
        {
          "key": "PersonCard-96bea0c8",
          "space": "",
          "content": {
            "articleProps": {
              "className": "person"
            },
            "divProps": {
              "className": "ph",
              "role": "img",
              "aria-label": "Photo to come"
            },
            "svgProps": {
              "className": "ic",
              "viewBox": "0 0 24 24",
              "aria-hidden": "true",
              "focusable": "false"
            },
            "pathProps": {
              "d": "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21a8 8 0 0 1 16 0"
            },
            "divProps2": {},
            "h3Props": {
              "className": "nm"
            },
            "cardTitle": "[Name]",
            "pProps": {
              "className": "rl"
            },
            "description": "Chief Technology Officer",
            "spanProps": {
              "className": "li"
            },
            "svgProps2": {
              "className": "ic",
              "viewBox": "0 0 24 24",
              "aria-hidden": "true",
              "focusable": "false"
            },
            "pathProps2": {
              "d": "M4 9h3.5v11H4z M5.75 6.5a1.75 1.75 0 1 0 0-.01 M10 9h3.3v1.6c.6-1 1.8-1.9 3.6-1.9 2.6 0 3.6 1.7 3.6 4.4V20H17v-6c0-1.4-.4-2.4-1.8-2.4-1.5 0-2.2 1-2.2 2.6V20H10z"
            },
            "label": "LinkedIn profile"
          }
        },
        {
          "key": "PersonCard-729bf76a",
          "space": "",
          "content": {
            "articleProps": {
              "className": "person"
            },
            "divProps": {
              "className": "ph",
              "role": "img",
              "aria-label": "Photo to come"
            },
            "svgProps": {
              "className": "ic",
              "viewBox": "0 0 24 24",
              "aria-hidden": "true",
              "focusable": "false"
            },
            "pathProps": {
              "d": "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21a8 8 0 0 1 16 0"
            },
            "divProps2": {},
            "h3Props": {
              "className": "nm"
            },
            "cardTitle": "[Name]",
            "pProps": {
              "className": "rl"
            },
            "description": "Head of Delivery",
            "spanProps": {
              "className": "li"
            },
            "svgProps2": {
              "className": "ic",
              "viewBox": "0 0 24 24",
              "aria-hidden": "true",
              "focusable": "false"
            },
            "pathProps2": {
              "d": "M4 9h3.5v11H4z M5.75 6.5a1.75 1.75 0 1 0 0-.01 M10 9h3.3v1.6c.6-1 1.8-1.9 3.6-1.9 2.6 0 3.6 1.7 3.6 4.4V20H17v-6c0-1.4-.4-2.4-1.8-2.4-1.5 0-2.2 1-2.2 2.6V20H10z"
            },
            "label": "LinkedIn profile"
          }
        },
        {
          "key": "PersonCard-f4b33689",
          "space": "",
          "content": {
            "articleProps": {
              "className": "person"
            },
            "divProps": {
              "className": "ph",
              "role": "img",
              "aria-label": "Photo to come"
            },
            "svgProps": {
              "className": "ic",
              "viewBox": "0 0 24 24",
              "aria-hidden": "true",
              "focusable": "false"
            },
            "pathProps": {
              "d": "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21a8 8 0 0 1 16 0"
            },
            "divProps2": {},
            "h3Props": {
              "className": "nm"
            },
            "cardTitle": "[Name]",
            "pProps": {
              "className": "rl"
            },
            "description": "Practice Head, Salesforce",
            "spanProps": {
              "className": "li"
            },
            "svgProps2": {
              "className": "ic",
              "viewBox": "0 0 24 24",
              "aria-hidden": "true",
              "focusable": "false"
            },
            "pathProps2": {
              "d": "M4 9h3.5v11H4z M5.75 6.5a1.75 1.75 0 1 0 0-.01 M10 9h3.3v1.6c.6-1 1.8-1.9 3.6-1.9 2.6 0 3.6 1.7 3.6 4.4V20H17v-6c0-1.4-.4-2.4-1.8-2.4-1.5 0-2.2 1-2.2 2.6V20H10z"
            },
            "label": "LinkedIn profile"
          }
        },
        {
          "key": "PersonCard-5dd1297b",
          "space": "",
          "content": {
            "articleProps": {
              "className": "person"
            },
            "divProps": {
              "className": "ph",
              "role": "img",
              "aria-label": "Photo to come"
            },
            "svgProps": {
              "className": "ic",
              "viewBox": "0 0 24 24",
              "aria-hidden": "true",
              "focusable": "false"
            },
            "pathProps": {
              "d": "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21a8 8 0 0 1 16 0"
            },
            "divProps2": {},
            "h3Props": {
              "className": "nm"
            },
            "cardTitle": "[Name]",
            "pProps": {
              "className": "rl"
            },
            "description": "Practice Head, ServiceNow",
            "spanProps": {
              "className": "li"
            },
            "svgProps2": {
              "className": "ic",
              "viewBox": "0 0 24 24",
              "aria-hidden": "true",
              "focusable": "false"
            },
            "pathProps2": {
              "d": "M4 9h3.5v11H4z M5.75 6.5a1.75 1.75 0 1 0 0-.01 M10 9h3.3v1.6c.6-1 1.8-1.9 3.6-1.9 2.6 0 3.6 1.7 3.6 4.4V20H17v-6c0-1.4-.4-2.4-1.8-2.4-1.5 0-2.2 1-2.2 2.6V20H10z"
            },
            "label": "LinkedIn profile"
          }
        },
        {
          "key": "PersonCard-3778c7a5",
          "space": "",
          "content": {
            "articleProps": {
              "className": "person"
            },
            "divProps": {
              "className": "ph",
              "role": "img",
              "aria-label": "Photo to come"
            },
            "svgProps": {
              "className": "ic",
              "viewBox": "0 0 24 24",
              "aria-hidden": "true",
              "focusable": "false"
            },
            "pathProps": {
              "d": "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21a8 8 0 0 1 16 0"
            },
            "divProps2": {},
            "h3Props": {
              "className": "nm"
            },
            "cardTitle": "[Name]",
            "pProps": {
              "className": "rl"
            },
            "description": "Practice Head, Data and AI",
            "spanProps": {
              "className": "li"
            },
            "svgProps2": {
              "className": "ic",
              "viewBox": "0 0 24 24",
              "aria-hidden": "true",
              "focusable": "false"
            },
            "pathProps2": {
              "d": "M4 9h3.5v11H4z M5.75 6.5a1.75 1.75 0 1 0 0-.01 M10 9h3.3v1.6c.6-1 1.8-1.9 3.6-1.9 2.6 0 3.6 1.7 3.6 4.4V20H17v-6c0-1.4-.4-2.4-1.8-2.4-1.5 0-2.2 1-2.2 2.6V20H10z"
            },
            "label": "LinkedIn profile"
          }
        },
        {
          "key": "PersonCard-54202ec5",
          "space": "",
          "content": {
            "articleProps": {
              "className": "person"
            },
            "divProps": {
              "className": "ph",
              "role": "img",
              "aria-label": "Photo to come"
            },
            "svgProps": {
              "className": "ic",
              "viewBox": "0 0 24 24",
              "aria-hidden": "true",
              "focusable": "false"
            },
            "pathProps": {
              "d": "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21a8 8 0 0 1 16 0"
            },
            "divProps2": {},
            "h3Props": {
              "className": "nm"
            },
            "cardTitle": "[Name]",
            "pProps": {
              "className": "rl"
            },
            "description": "Head of People",
            "spanProps": {
              "className": "li"
            },
            "svgProps2": {
              "className": "ic",
              "viewBox": "0 0 24 24",
              "aria-hidden": "true",
              "focusable": "false"
            },
            "pathProps2": {
              "d": "M4 9h3.5v11H4z M5.75 6.5a1.75 1.75 0 1 0 0-.01 M10 9h3.3v1.6c.6-1 1.8-1.9 3.6-1.9 2.6 0 3.6 1.7 3.6 4.4V20H17v-6c0-1.4-.4-2.4-1.8-2.4-1.5 0-2.2 1-2.2 2.6V20H10z"
            },
            "label": "LinkedIn profile"
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
    "type": "FootprintSection",
    "key": "footprint",
    "content": {
      "sectionProps": {
        "data-tone": "brand",
        "className": "sec",
        "id": "footprint",
        "aria-labelledby": "h-footprint"
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
        "id": "h-footprint"
      },
      "heading": "Eight Offices Across the USA and India",
      "pProps": {
        "className": "lead"
      },
      "description": "Teams in two countries give clients local leadership and delivery that runs across time zones.",
      "divProps4": {
        "className": "footprint"
      },
      "articleProps": {
        "className": "country"
      },
      "divProps5": {
        "className": "top"
      },
      "divProps6": {
        "style": {
          "display": "flex",
          "gap": "var(--s4)",
          "alignItems": "center"
        }
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
        "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3 12h18 M12 3a14 14 0 0 1 0 18 M12 3a14 14 0 0 0 0 18"
      },
      "h3Props": {
        "className": "h3d"
      },
      "cardTitle": "United States",
      "spanProps2": {
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
      "timeProps": {
        "data-tz": "America/Chicago"
      },
      "text": "--:--",
      "label": " CT",
      "divProps7": {
        "className": "num"
      },
      "spanProps3": {
        "className": "v"
      },
      "label2": "2",
      "supProps": {},
      "text2": " offices",
      "divProps8": {
        "className": "cities"
      },
      "spanProps4": {
        "className": "chip c-brand"
      },
      "label3": "Schaumburg, Illinois",
      "spanProps5": {
        "className": "chip c-brand"
      },
      "label4": "McKinney, Texas",
      "articleProps2": {
        "className": "country"
      },
      "divProps9": {
        "className": "top"
      },
      "divProps10": {
        "style": {
          "display": "flex",
          "gap": "var(--s4)",
          "alignItems": "center"
        }
      },
      "spanProps6": {
        "className": "icb"
      },
      "svgProps3": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps3": {
        "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3 12h18 M12 3a14 14 0 0 1 0 18 M12 3a14 14 0 0 0 0 18"
      },
      "h3Props2": {
        "className": "h3d"
      },
      "cardTitle2": "India",
      "spanProps7": {
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
      "timeProps2": {
        "data-tz": "Asia/Kolkata"
      },
      "text3": "--:--",
      "label5": " IST",
      "divProps11": {
        "className": "num"
      },
      "spanProps8": {
        "className": "v"
      },
      "label6": "6",
      "supProps2": {},
      "text4": " offices",
      "divProps12": {
        "className": "cities"
      },
      "spanProps9": {
        "className": "chip c-brand"
      },
      "label7": "Hyderabad ×4",
      "spanProps10": {
        "className": "chip c-brand"
      },
      "label8": "Vijayawada",
      "spanProps11": {
        "className": "chip c-brand"
      },
      "label9": "Bengaluru",
      "divProps13": {
        "style": {
          "marginTop": "var(--s6)"
        }
      },
      "aProps": {
        "className": "btn btn-ghost",
        "href": "/contact#locations"
      },
      "linkLabel": "See All Office Locations"
    }
  },
  {
    "type": "text",
    "key": "space-16",
    "content": "\n"
  },
  {
    "type": "PartnersSection",
    "key": "partners",
    "content": {
      "sectionProps": {
        "data-tone": "sf",
        "className": "sec",
        "id": "partners",
        "aria-labelledby": "h-partners"
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
        "id": "h-partners"
      },
      "heading": "Built on the Platforms Enterprises Trust",
      "pProps": {
        "className": "lead"
      },
      "description": "Palni works with the three platforms at the centre of its services.",
      "divProps4": {
        "className": "tiles"
      },
      "featureCardVariant2Items": [
        {
          "key": "FeatureCardVariant2-747e60bc",
          "space": "",
          "content": {
            "divProps": {
              "className": "tile c-servicenow"
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
              "d": "M9 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M15 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
            },
            "spanProps2": {
              "className": "chip c-servicenow"
            },
            "label": "ServiceNow",
            "pProps": {},
            "description": "Official ServiceNow Partner."
          }
        },
        {
          "key": "FeatureCardVariant2-696c7386",
          "space": "",
          "content": {
            "divProps": {
              "className": "tile c-databricks"
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
              "d": "M9 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M15 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
            },
            "spanProps2": {
              "className": "chip c-databricks"
            },
            "label": "Databricks",
            "pProps": {},
            "description": "Databricks Partner for enterprise data and AI."
          }
        },
        {
          "key": "FeatureCardVariant2-6940716e",
          "space": "",
          "content": {
            "divProps": {
              "className": "tile c-salesforce"
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
              "d": "M9 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M15 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
            },
            "spanProps2": {
              "className": "chip c-salesforce"
            },
            "label": "Salesforce",
            "pProps": {},
            "description": "Salesforce consulting across sales, service and revenue."
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
    "type": "PeopleSection",
    "key": "people",
    "content": {
      "sectionProps": {
        "data-tone": "brand",
        "className": "sec",
        "id": "people",
        "aria-labelledby": "h-people"
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
        "id": "h-people"
      },
      "heading": "People Make the Difference",
      "pProps": {
        "className": "lead"
      },
      "description": "Technology change depends on the people doing the work. At Palni, we value collaboration, new ideas, continued learning and an environment where people can contribute, take responsibility and grow through meaningful work.",
      "divProps4": {
        "className": "quad three"
      },
      "featureCardItems": [
        {
          "key": "FeatureCard-a0d863e5",
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
              "d": "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z M2.5 20a6.5 6.5 0 0 1 13 0 M16 4.6a3.5 3.5 0 0 1 0 6.8 M18 14.2a6 6 0 0 1 3.5 5.8"
            },
            "h3Props": {},
            "cardTitle": "Our Teams",
            "pProps": {},
            "description": "People with technical, domain and business knowledge work together to solve enterprise challenges."
          }
        },
        {
          "key": "FeatureCard-bfcd99ca",
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
            "h3Props": {},
            "cardTitle": "Our Culture",
            "pProps": {},
            "description": "Collaboration, open communication and a willingness to learn help people work through complex problems."
          }
        },
        {
          "key": "FeatureCard-e7612d6d",
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
            "cardTitle": "Our Growth",
            "pProps": {},
            "description": "Challenging projects create opportunities to build skills, share ideas and take on responsibility."
          }
        }
      ]
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
      "heading": "Work with Palni",
      "pProps": {
        "className": "lead"
      },
      "description": "Explore how our teams work with enterprise platforms and data, or find out what it is like to build your career with Palni.",
      "divProps5": {
        "className": "btns"
      },
      "aProps": {
        "className": "btn btn-primary",
        "href": "/#services"
      },
      "linkLabel": "Explore Our Services",
      "aProps2": {
        "className": "btn btn-ghost",
        "href": "/careers"
      },
      "linkLabel2": "Explore Careers",
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
