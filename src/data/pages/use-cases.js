import { chromeByPage } from './navigation'

// Local content preserved verbatim. Reorder sections here; templates contain no page copy.
export default {
  layout: "PageLayout",
  content: { ...chromeByPage["use-cases"], ...{
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
    "type": "HeroSubSectionVariant6",
    "key": "use-cases-HeroSubSectionVariant6-1",
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
        "data-density": "0.6",
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
        "label2": "Resources",
        "spanProps3": {
          "aria-hidden": "true"
        },
        "label3": "/",
        "spanProps4": {
          "aria-current": "page"
        },
        "label4": "Use Cases"
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
      "label": "Real",
      "h1Space2": " ",
      "spanProps3": {
        "className": "w"
      },
      "spanProps4": {
        "style": {
          "--i": "1"
        }
      },
      "label2": "Outcomes.",
      "h1Space3": " ",
      "spanProps5": {
        "className": "w"
      },
      "spanProps6": {
        "style": {
          "--i": "2"
        }
      },
      "label3": "Measurable",
      "h1Space4": " ",
      "spanProps7": {
        "className": "w"
      },
      "spanProps8": {
        "style": {
          "--i": "3"
        }
      },
      "label4": "Impact.",
      "pProps": {
        "className": "lead"
      },
      "description": "Explore how Palni applies Salesforce, ServiceNow and Databricks to practical enterprise challenges. Each use case explains the challenge, the work carried out and the outcomes reported for that engagement.",
      "divProps2": {
        "className": "btns"
      },
      "aProps": {
        "className": "btn btn-primary",
        "href": "/contact"
      },
      "linkLabel": "Start with a Discovery"
    }
  },
  {
    "type": "text",
    "key": "space-2",
    "content": "\n\n"
  },
  {
    "type": "LibrarySection",
    "key": "library",
    "content": {
      "sectionProps": {
        "data-tone": "sf",
        "className": "sec",
        "id": "library",
        "aria-labelledby": "h-library"
      },
      "divProps": {
        "className": "wrap"
      },
      "divSpace": "\n",
      "divProps2": {
        "className": "sec-head"
      },
      "divProps3": {
        "className": "t"
      },
      "h2Props": {
        "id": "h-library"
      },
      "heading": "Find Use Cases by Service",
      "pProps": {
        "className": "lead"
      },
      "description": "Choose a service to find examples relevant to your priorities. Cross platform examples show how more than one service contributes to a solution. Every card follows Challenge, What Palni Did, Outcome. Full stories add Industry and Technology.",
      "divSpace7": "\n",
      "divProps4": {
        "className": "filters",
        "id": "uc-filters",
        "role": "group",
        "aria-label": "Filter use cases by service"
      },
      "buttonProps": {
        "type": "button",
        "className": "c-brand",
        "data-filter": "all",
        "aria-pressed": "true"
      },
      "buttonLabel": "All ",
      "spanProps": {
        "className": "n"
      },
      "buttonProps2": {
        "type": "button",
        "className": "c-salesforce",
        "data-filter": "salesforce",
        "aria-pressed": "false"
      },
      "buttonLabel2": "Salesforce ",
      "spanProps2": {
        "className": "n"
      },
      "buttonProps3": {
        "type": "button",
        "className": "c-servicenow",
        "data-filter": "servicenow",
        "aria-pressed": "false"
      },
      "buttonLabel3": "ServiceNow ",
      "spanProps3": {
        "className": "n"
      },
      "buttonProps4": {
        "type": "button",
        "className": "c-databricks",
        "data-filter": "databricks",
        "aria-pressed": "false"
      },
      "buttonLabel4": "Databricks ",
      "spanProps4": {
        "className": "n"
      },
      "buttonProps5": {
        "type": "button",
        "className": "c-other",
        "data-filter": "other",
        "aria-pressed": "false"
      },
      "buttonLabel5": "Service to confirm ",
      "spanProps5": {
        "className": "n"
      },
      "pProps2": {
        "id": "filter-status",
        "className": "small muted",
        "role": "status",
        "style": {
          "marginBottom": "var(--s5)"
        }
      },
      "divSpace15": "\n",
      "divProps5": {
        "className": "cases grid"
      },
      "useCaseCardItems": [
        {
          "key": "UseCaseCard-990b0e74",
          "space": "",
          "content": {
            "articleProps": {
              "className": "case c-servicenow",
              "data-tag": "servicenow"
            },
            "divProps": {
              "className": "head"
            },
            "spanProps": {
              "className": "chip c-servicenow"
            },
            "label": "ServiceNow",
            "divProps2": {
              "className": "metric-big"
            },
            "text": "25%",
            "h3Props": {
              "className": "title"
            },
            "cardTitle": "Reduction in Hardware Spend",
            "articleSpace2": "\n",
            "dlProps": {},
            "divProps3": {},
            "dtProps": {},
            "text2": "Challenge",
            "ddProps": {},
            "text3": "Asset tracking relied on spreadsheets, with unclear ownership, over ordering and audit risk.",
            "divProps4": {},
            "dtProps2": {},
            "text4": "What Palni did",
            "ddProps2": {},
            "text5": "Implemented lifecycle asset governance with real time tracking, asset normalisation and automated workflows.",
            "divProps5": {},
            "dtProps3": {},
            "text6": "Outcome",
            "ddProps3": {
              "className": "o"
            },
            "text7": "25% lower hardware spend, zero audit findings and improved asset visibility."
          }
        },
        {
          "key": "UseCaseCard-7678b645",
          "space": "",
          "content": {
            "articleProps": {
              "className": "case c-servicenow",
              "data-tag": "servicenow"
            },
            "divProps": {
              "className": "head"
            },
            "spanProps": {
              "className": "chip c-servicenow"
            },
            "label": "ServiceNow",
            "divProps2": {
              "className": "metric-big"
            },
            "text": "30%",
            "h3Props": {
              "className": "title"
            },
            "cardTitle": "Reduction in Software Spend",
            "articleSpace2": "\n",
            "dlProps": {},
            "divProps3": {},
            "dtProps": {},
            "text2": "Challenge",
            "ddProps": {},
            "text3": "Limited visibility into software use and entitlements led to unused licences, audit exposure and reactive compliance.",
            "divProps4": {},
            "dtProps2": {},
            "text4": "What Palni did",
            "ddProps2": {},
            "text5": "Implemented software asset lifecycle management with licence tracking, reconciliation and compliance automation.",
            "divProps5": {},
            "dtProps3": {},
            "text6": "Outcome",
            "ddProps3": {
              "className": "o"
            },
            "text7": "Reduced shadow IT, audit ready compliance and real time monitoring."
          }
        }
      ],
      "useCaseCardVariant2Items": [
        {
          "key": "UseCaseCardVariant2-c8a4d18d",
          "space": "",
          "content": {
            "articleProps": {
              "className": "case c-servicenow",
              "data-tag": "servicenow"
            },
            "divProps": {
              "className": "head"
            },
            "spanProps": {
              "className": "chip c-servicenow"
            },
            "label": "ServiceNow",
            "h3Props": {
              "className": "title"
            },
            "cardTitle": "Faster Ticket Reporting with Voice Intake",
            "articleSpace2": "\n",
            "dlProps": {},
            "divProps2": {},
            "dtProps": {},
            "text": "Challenge",
            "ddProps": {},
            "text2": "Users avoided ticketing systems because reporting felt difficult, leading to delays, weak data capture and service desk overload.",
            "divProps3": {},
            "dtProps2": {},
            "text3": "What Palni did",
            "ddProps2": {},
            "text4": "Enabled voice driven ticket creation and real time interaction within ServiceNow.",
            "divProps4": {},
            "dtProps3": {},
            "text5": "Outcome",
            "ddProps3": {
              "className": "o"
            },
            "text6": "Faster issue intake and reduced service desk burden."
          }
        },
        {
          "key": "UseCaseCardVariant2-6bb51448",
          "space": "",
          "content": {
            "articleProps": {
              "className": "case c-salesforce",
              "data-tag": "salesforce"
            },
            "divProps": {
              "className": "head"
            },
            "spanProps": {
              "className": "chip c-salesforce"
            },
            "label": "Salesforce",
            "h3Props": {
              "className": "title"
            },
            "cardTitle": "Improved Pipeline Visibility and Sales Adoption",
            "articleSpace2": "\n",
            "dlProps": {},
            "divProps2": {},
            "dtProps": {},
            "text": "Challenge",
            "ddProps": {},
            "text2": "Sales teams managed deals outside Salesforce because quoting was complex, which reduced pipeline visibility and adoption.",
            "divProps3": {},
            "dtProps2": {},
            "text3": "What Palni did",
            "ddProps2": {},
            "text4": "Implemented guided intake with automated opportunity and quote creation connected to email.",
            "divProps4": {},
            "dtProps3": {},
            "text5": "Outcome",
            "ddProps3": {
              "className": "o"
            },
            "text6": "More consistent deal tracking, better pipeline visibility and less manual data entry."
          }
        },
        {
          "key": "UseCaseCardVariant2-7935e74c",
          "space": "",
          "content": {
            "articleProps": {
              "className": "case c-salesforce",
              "data-tag": "salesforce"
            },
            "divProps": {
              "className": "head"
            },
            "spanProps": {
              "className": "chip c-salesforce"
            },
            "label": "Salesforce",
            "h3Props": {
              "className": "title"
            },
            "cardTitle": "AI Driven Quoting and Opportunity Creation",
            "articleSpace2": "\n",
            "dlProps": {},
            "divProps2": {},
            "dtProps": {},
            "text": "Challenge",
            "ddProps": {},
            "text2": "Requests arrived in Excel and PDF formats, creating delays, inconsistencies and incomplete deal data.",
            "divProps3": {},
            "dtProps2": {},
            "text3": "What Palni did",
            "ddProps2": {},
            "text4": "Built an AI supported intake workflow to collect missing information and create opportunities and quotes.",
            "divProps4": {},
            "dtProps3": {},
            "text5": "Outcome",
            "ddProps3": {
              "className": "o"
            },
            "text6": "Faster quote turnaround, improved data consistency and reduced manual effort."
          }
        },
        {
          "key": "UseCaseCardVariant2-41fb2b85",
          "space": "",
          "content": {
            "articleProps": {
              "className": "case c-salesforce",
              "data-tag": "salesforce"
            },
            "divProps": {
              "className": "head"
            },
            "spanProps": {
              "className": "chip c-salesforce"
            },
            "label": "Salesforce",
            "h3Props": {
              "className": "title"
            },
            "cardTitle": "Unified Customer View Across Systems",
            "articleSpace2": "\n",
            "dlProps": {},
            "divProps2": {},
            "dtProps": {},
            "text": "Challenge",
            "ddProps": {},
            "text2": "Customer information was fragmented across multiple systems, limiting visibility and coordination.",
            "divProps3": {},
            "dtProps2": {},
            "text3": "What Palni did",
            "ddProps2": {},
            "text4": "Integrated Salesforce with ERP and external systems to create a unified customer data model.",
            "divProps4": {},
            "dtProps3": {},
            "text5": "Outcome",
            "ddProps3": {
              "className": "o"
            },
            "text6": "A more consistent view of customer information and better cross team coordination."
          }
        }
      ],
      "useCaseCard": {
        "articleProps": {
          "className": "case c-databricks",
          "data-tag": "databricks"
        },
        "divProps": {
          "className": "head"
        },
        "spanProps": {
          "className": "chip c-databricks"
        },
        "label": "Databricks",
        "divProps2": {
          "className": "metric-big"
        },
        "text": "40%",
        "h3Props": {
          "className": "title"
        },
        "cardTitle": "Increase in Near Real Time Data Availability",
        "articleSpace2": "\n",
        "dlProps": {},
        "divProps3": {},
        "dtProps": {},
        "text2": "Challenge",
        "ddProps": {},
        "text3": "Data was siloed across ERP, CRM and legacy systems, with inconsistent reporting and low trust in metrics.",
        "divProps4": {},
        "dtProps2": {},
        "text4": "What Palni did",
        "ddProps2": {},
        "text5": "Migrated more than 10TB of data to Databricks and implemented automated pipelines, governance and centralised reporting.",
        "divProps5": {},
        "dtProps3": {},
        "text6": "Outcome",
        "ddProps3": {
          "className": "o"
        },
        "text7": "Improved data trust, process efficiency and ELT savings."
      },
      "useCaseCardVariant2Items2": [
        {
          "key": "UseCaseCardVariant2-326f37ce",
          "space": "",
          "content": {
            "articleProps": {
              "className": "case c-databricks",
              "data-tag": "databricks"
            },
            "divProps": {
              "className": "head"
            },
            "spanProps": {
              "className": "chip c-databricks"
            },
            "label": "Databricks",
            "h3Props": {
              "className": "title"
            },
            "cardTitle": "Planning Cycle Time Reduced from Hours to Seconds",
            "articleSpace2": "\n",
            "dlProps": {},
            "divProps2": {},
            "dtProps": {},
            "text": "Challenge",
            "ddProps": {},
            "text2": "Planners relied on fragmented systems and manual reconciliation, slowing decisions and limiting risk visibility.",
            "divProps3": {},
            "dtProps2": {},
            "text3": "What Palni did",
            "ddProps2": {},
            "text4": "Built a multi agent AI system on Databricks with natural language queries, real time data access and automated reasoning.",
            "divProps4": {},
            "dtProps3": {},
            "text5": "Outcome",
            "ddProps3": {
              "className": "o"
            },
            "text6": "Earlier risk detection, and better root cause analysis and decision making."
          }
        },
        {
          "key": "UseCaseCardVariant2-49229fc3",
          "space": "",
          "content": {
            "articleProps": {
              "className": "case c-databricks",
              "data-tag": "databricks"
            },
            "divProps": {
              "className": "head"
            },
            "spanProps": {
              "className": "chip c-databricks"
            },
            "label": "Databricks",
            "h3Props": {
              "className": "title"
            },
            "cardTitle": "Reduce Data Migration Effort",
            "articleSpace2": "\n",
            "dlProps": {},
            "divProps2": {},
            "dtProps": {},
            "text": "Challenge",
            "ddProps": {},
            "text2": "Manual schema mapping, SQL compatibility issues and data validation created long migration cycles and risk.",
            "divProps3": {},
            "dtProps2": {},
            "text3": "What Palni did",
            "ddProps2": {},
            "text4": "Deployed a migration accelerator for schema mapping, code conversion and automated validation.",
            "divProps4": {},
            "dtProps3": {},
            "text5": "Outcome",
            "ddProps3": {
              "className": "o"
            },
            "text6": "Reduced effort, faster cycles and improved validation."
          }
        }
      ],
      "useCaseCardItems2": [
        {
          "key": "UseCaseCard-eb1fb8da",
          "space": "",
          "content": {
            "articleProps": {
              "className": "case c-other",
              "data-tag": "other"
            },
            "divProps": {
              "className": "head"
            },
            "spanProps": {
              "className": "chip c-other"
            },
            "label": "Service to confirm",
            "divProps2": {
              "className": "metric-big"
            },
            "text": "70%",
            "h3Props": {
              "className": "title"
            },
            "cardTitle": "Faster Reporting",
            "articleSpace2": "\n",
            "dlProps": {},
            "divProps3": {},
            "dtProps": {},
            "text2": "Challenge",
            "ddProps": {},
            "text3": "Data was fragmented across systems, making reporting slow, inconsistent and manual.",
            "divProps4": {},
            "dtProps2": {},
            "text4": "What Palni did",
            "ddProps2": {},
            "text5": "Unified data into a scalable Snowflake environment with automated pipelines and centralised reporting.",
            "divProps5": {},
            "dtProps3": {},
            "text6": "Outcome",
            "ddProps3": {
              "className": "o"
            },
            "text7": "Faster reporting, a single source of truth and real time analytics."
          }
        },
        {
          "key": "UseCaseCard-e89c37f6",
          "space": "",
          "content": {
            "articleProps": {
              "className": "case c-other",
              "data-tag": "other"
            },
            "divProps": {
              "className": "head"
            },
            "spanProps": {
              "className": "chip c-other"
            },
            "label": "Service to confirm",
            "divProps2": {
              "className": "metric-big"
            },
            "text": "99.6%",
            "h3Props": {
              "className": "title"
            },
            "cardTitle": "Auto Reconciliation Rate",
            "articleSpace2": "\n",
            "dlProps": {},
            "divProps3": {},
            "dtProps": {},
            "text2": "Challenge",
            "ddProps": {},
            "text3": "Manual invoice processing across many formats caused delays, errors and heavy manual work.",
            "divProps4": {},
            "dtProps2": {},
            "text4": "What Palni did",
            "ddProps2": {},
            "text5": "Built AI supported invoice reconciliation using OCR and NLP across structured and unstructured formats.",
            "divProps5": {},
            "dtProps3": {},
            "text6": "Outcome",
            "ddProps3": {
              "className": "o"
            },
            "text7": "A higher auto reconciliation rate, time savings and improved accuracy."
          }
        }
      ],
      "divSpace18": "\n",
      "pProps3": {
        "className": "small muted",
        "style": {
          "marginTop": "var(--s6)"
        },
        "data-v": "Cross Platform filter appears once a case genuinely uses more than one of the three services. None of the eleven current cases does."
      },
      "description2": "Cross Platform examples will appear here once a published case uses more than one service.",
      "divSpace19": "\n"
    }
  },
  {
    "type": "text",
    "key": "space-4",
    "content": "\n\n"
  }
]
}
