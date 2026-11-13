import { chromeByPage } from './navigation'

// Local content preserved verbatim. Reorder sections here; templates contain no page copy.
export default {
  layout: "PageLayout",
  content: { ...chromeByPage["contact"], ...{
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
    "type": "HeroSubSectionVariant4",
    "key": "contact-HeroSubSectionVariant4-1",
    "content": {
      "sectionProps": {
        "data-tone": "brand",
        "className": "hero sub",
        "aria-labelledby": "h1",
        "data-scene-host": ""
      },
      "canvasProps": {
        "className": "field",
        "data-field": "funnel",
        "data-colors": "brand",
        "data-density": "0.7",
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
        "label2": "Contact"
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
      "label": "Start",
      "h1Space2": " ",
      "spanProps3": {
        "className": "w"
      },
      "spanProps4": {
        "style": {
          "--i": "1"
        }
      },
      "label2": "With",
      "h1Space3": " ",
      "spanProps5": {
        "className": "w"
      },
      "spanProps6": {
        "style": {
          "--i": "2"
        }
      },
      "label3": "the",
      "h1Space4": " ",
      "spanProps7": {
        "className": "w"
      },
      "spanProps8": {
        "style": {
          "--i": "3"
        }
      },
      "label4": "Business",
      "h1Space5": " ",
      "spanProps9": {
        "className": "w"
      },
      "spanProps10": {
        "style": {
          "--i": "4"
        }
      },
      "label5": "Problem",
      "pProps": {
        "className": "lead"
      },
      "description": "Tell us what you are trying to improve, modernise or scale. We will help identify a practical starting point across Salesforce, ServiceNow or Databricks."
    }
  },
  {
    "type": "text",
    "key": "space-2",
    "content": "\n\n"
  },
  {
    "type": "FormSection",
    "key": "form",
    "content": {
      "sectionProps": {
        "data-tone": "sf",
        "className": "sec",
        "id": "form",
        "aria-labelledby": "h-form"
      },
      "divProps": {
        "className": "wrap"
      },
      "divProps2": {
        "className": "contact-grid"
      },
      "divSpace2": "\n",
      "divProps3": {
        "style": {
          "display": "grid",
          "gap": "var(--s6)"
        }
      },
      "divProps4": {
        "style": {
          "display": "grid",
          "gap": "var(--s3)"
        }
      },
      "h2Props": {
        "id": "h-form"
      },
      "heading": "Tell Us What You Are Working On",
      "pProps": {
        "className": "lead"
      },
      "description": "Share a few details about your priority and the right Palni team will follow up.",
      "divSpace7": "\n",
      "formProps": {
        "id": "enquiry",
        "className": "form",
        "noValidate": true
      },
      "formSpace": "\n  ",
      "divProps5": {
        "className": "field-w"
      },
      "labelProps": {
        "htmlFor": "f-name"
      },
      "text": "Name",
      "inputProps": {
        "id": "f-name",
        "name": "name",
        "autoComplete": "name",
        "required": true,
        "data-label": "Name"
      },
      "spanProps": {
        "className": "err",
        "id": "f-name-err"
      },
      "formSpace2": "\n  ",
      "divProps6": {
        "className": "field-w"
      },
      "labelProps2": {
        "htmlFor": "f-email"
      },
      "text2": "Work email",
      "inputProps2": {
        "id": "f-email",
        "name": "email",
        "type": "email",
        "autoComplete": "email",
        "required": true,
        "data-label": "Work email"
      },
      "spanProps2": {
        "className": "err",
        "id": "f-email-err"
      },
      "formSpace3": "\n  ",
      "divProps7": {
        "className": "field-w"
      },
      "labelProps3": {
        "htmlFor": "f-company"
      },
      "text3": "Company",
      "inputProps3": {
        "id": "f-company",
        "name": "company",
        "autoComplete": "organization",
        "required": true,
        "data-label": "Company"
      },
      "spanProps3": {
        "className": "err",
        "id": "f-company-err"
      },
      "formSpace4": "\n  ",
      "divProps8": {
        "className": "field-w"
      },
      "labelProps4": {
        "htmlFor": "f-phone"
      },
      "text4": "Phone number ",
      "spanProps4": {
        "className": "opt"
      },
      "label": "(optional)",
      "inputProps4": {
        "id": "f-phone",
        "name": "phone",
        "type": "tel",
        "autoComplete": "tel"
      },
      "formSpace5": "\n  ",
      "fieldsetProps": {
        "className": "field-w full"
      },
      "legendProps": {},
      "text5": "Service Area ",
      "spanProps5": {
        "className": "opt"
      },
      "label2": "(optional)",
      "divProps9": {
        "className": "opts"
      },
      "labelProps5": {
        "className": "c-salesforce"
      },
      "inputProps5": {
        "type": "radio",
        "name": "service",
        "id": "service-salesforce",
        "defaultValue": "salesforce"
      },
      "spanProps6": {},
      "label3": "Salesforce",
      "labelProps6": {
        "className": "c-servicenow"
      },
      "inputProps6": {
        "type": "radio",
        "name": "service",
        "id": "service-servicenow",
        "defaultValue": "servicenow"
      },
      "spanProps7": {},
      "label4": "ServiceNow",
      "labelProps7": {
        "className": "c-databricks"
      },
      "inputProps7": {
        "type": "radio",
        "name": "service",
        "id": "service-databricks",
        "defaultValue": "databricks"
      },
      "spanProps8": {},
      "label5": "Databricks",
      "labelProps8": {},
      "inputProps8": {
        "type": "radio",
        "name": "service",
        "id": "service-not-sure-yet",
        "defaultValue": "not-sure-yet"
      },
      "spanProps9": {},
      "label6": "Not sure yet",
      "formSpace6": "\n  ",
      "fieldsetProps2": {
        "className": "field-w full"
      },
      "legendProps2": {},
      "text6": "Business Priority ",
      "spanProps10": {
        "className": "opt"
      },
      "label7": "(optional)",
      "divProps10": {
        "className": "opts"
      },
      "labelProps9": {},
      "inputProps9": {
        "type": "radio",
        "name": "priority",
        "id": "priority-sales-and-revenue",
        "defaultValue": "sales-and-revenue"
      },
      "spanProps11": {},
      "label8": "Sales and revenue",
      "labelProps10": {},
      "inputProps10": {
        "type": "radio",
        "name": "priority",
        "id": "priority-service-operations",
        "defaultValue": "service-operations"
      },
      "spanProps12": {},
      "label9": "Service operations",
      "labelProps11": {},
      "inputProps11": {
        "type": "radio",
        "name": "priority",
        "id": "priority-data-modernisation",
        "defaultValue": "data-modernisation"
      },
      "spanProps13": {},
      "label10": "Data modernisation",
      "labelProps12": {},
      "inputProps12": {
        "type": "radio",
        "name": "priority",
        "id": "priority-analytics-and-ai",
        "defaultValue": "analytics-and-ai"
      },
      "spanProps14": {},
      "label11": "Analytics and AI",
      "labelProps13": {
        "className": "c-other"
      },
      "inputProps13": {
        "type": "radio",
        "name": "priority",
        "id": "priority-other",
        "defaultValue": "other"
      },
      "spanProps15": {},
      "label12": "Other",
      "formSpace7": "\n  ",
      "divProps11": {
        "className": "field-w full"
      },
      "labelProps14": {
        "htmlFor": "f-msg"
      },
      "text7": "Message ",
      "spanProps16": {
        "className": "opt"
      },
      "label13": "(optional)",
      "textareaProps": {
        "id": "f-msg",
        "name": "message",
        "placeholder": "What are you trying to improve, and what would you like to achieve?"
      },
      "formSpace8": "\n  ",
      "labelProps15": {
        "className": "consent field-w full",
        "htmlFor": "f-sms"
      },
      "inputProps14": {
        "type": "checkbox",
        "id": "f-sms",
        "name": "sms"
      },
      "spanProps17": {},
      "label14": "By providing your phone number, you agree to receive text messages from Palni. Message and data rates may apply. Message frequency varies. To stop receiving messages, reply 'STOP' at any time. For more information, reply 'HELP'. ",
      "aProps": {
        "href": "https://palni.com/privacy-policy/",
        "target": "_blank",
        "rel": "noopener"
      },
      "linkLabel": "Privacy Policy",
      "label15": " and ",
      "aProps2": {
        "href": "https://palni.com/terms-conditions/",
        "target": "_blank",
        "rel": "noopener"
      },
      "linkLabel2": "Terms & Conditions",
      "label16": ".",
      "formSpace9": "\n  ",
      "divProps12": {
        "className": "field-w full"
      },
      "divProps13": {
        "className": "btns"
      },
      "buttonProps": {
        "className": "btn btn-primary",
        "type": "submit"
      },
      "buttonLabel": "Submit Enquiry ",
      "svgProps": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps": {
        "d": "M21 3L10 14 M21 3l-6.5 18-4-8.5L2 8.5z"
      },
      "pProps2": {
        "className": "small muted"
      },
      "description2": "This prototype does not send data. The live form will route to the right Palni team.",
      "formSpace10": "\n",
      "divSpace42": "\n",
      "divProps14": {
        "id": "enquiry-done",
        "className": "done",
        "hidden": true,
        "tabIndex": "-1",
        "role": "status"
      },
      "h3Props": {
        "className": "h3d"
      },
      "cardTitle": "Thank You. We Have Received Your Enquiry.",
      "pProps3": {
        "className": "muted"
      },
      "description3": "Thank you for contacting Palni. Your message has been received and will go to the relevant team. If your request is urgent, use the contact details on this page.",
      "divProps15": {},
      "buttonProps2": {
        "className": "btn btn-ghost btn-sm",
        "id": "enquiry-again",
        "type": "button"
      },
      "buttonLabel2": "Send another enquiry",
      "divSpace49": "\n",
      "divSpace50": "\n",
      "asideProps": {
        "aria-labelledby": "h-other",
        "style": {
          "display": "grid",
          "gap": "var(--s4)",
          "alignContent": "start"
        }
      },
      "h2Props2": {
        "className": "h3d",
        "id": "h-other"
      },
      "heading2": "Talk to the Right Team",
      "pProps4": {
        "className": "muted"
      },
      "description4": "For sales, careers or training, contact the team directly.",
      "divProps16": {
        "className": "routes"
      },
      "divProps17": {
        "className": "route"
      },
      "spanProps18": {
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
      "divProps18": {},
      "bProps": {},
      "label17": "General Enquiries",
      "spanProps19": {},
      "label18": "info@palni.com | 214 501 0690",
      "divProps19": {
        "className": "route"
      },
      "spanProps20": {
        "className": "icb sm"
      },
      "svgProps3": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps3": {
        "d": "M3 7h18v13H3z M8 7V4h8v3 M3 13h18"
      },
      "divProps20": {},
      "bProps2": {},
      "label19": "Sales Enquiries",
      "spanProps21": {},
      "label20": "sales@palni.com | 214 501 0690",
      "divProps21": {
        "className": "route"
      },
      "spanProps22": {
        "className": "icb sm"
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
      "divProps22": {},
      "bProps3": {},
      "label21": "Job Enquiries",
      "spanProps23": {},
      "label22": "jobs@palni.com | 214 501 0690",
      "divProps23": {
        "className": "route"
      },
      "spanProps24": {
        "className": "icb sm"
      },
      "svgProps5": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps5": {
        "d": "M2 9l10-5 10 5-10 5z M6 11v5c3 2 9 2 12 0v-5 M22 9v6"
      },
      "divProps24": {},
      "bProps4": {},
      "label23": "Training Enquiries",
      "spanProps25": {},
      "label24": "skilling@palni.com | 214 501 0690",
      "divSpace80": "\n"
    }
  },
  {
    "type": "LocationsSection",
    "key": "locations",
    "content": {
      "sectionProps": {
        "data-tone": "night",
        "className": "sec",
        "id": "locations",
        "aria-labelledby": "h-locations"
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
        "id": "h-locations"
      },
      "heading": "Our Offices",
      "pProps": {
        "className": "lead"
      },
      "description": "Eight offices across the United States and India.",
      "divProps4": {
        "className": "offices"
      },
      "divProps5": {
        "className": "office-group"
      },
      "h3Props": {},
      "svgProps": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps": {
        "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3 12h18 M12 3a14 14 0 0 1 0 18 M12 3a14 14 0 0 0 0 18"
      },
      "cardTitle": "United States ",
      "spanProps": {
        "className": "muted",
        "style": {
          "font": "500 var(--fs-small) var(--text)"
        }
      },
      "label": "2 offices",
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
      "label2": " CT",
      "divProps6": {
        "className": "office-list"
      },
      "officeCardItems": [
        {
          "key": "OfficeCard-2ef65ebd",
          "space": "",
          "content": {
            "articleProps": {
              "className": "office"
            },
            "divProps": {
              "className": "city"
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
              "d": "M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
            },
            "divProps2": {},
            "bProps": {},
            "label": "Schaumburg, Illinois",
            "smallProps": {},
            "text": "USA, Illinois",
            "addressProps": {},
            "text2": "109 S. Roselle Road, Suite 201, Schaumburg, IL 60193",
            "aProps": {
              "className": "dir",
              "href": "https://www.google.com/maps/search/?api=1&query=109+S.+Roselle+Road,+Suite+201,+Schaumburg,+IL+60193",
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
              "d": "M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z M9 4v14 M15 6v14"
            },
            "linkLabel": "Get directions"
          }
        },
        {
          "key": "OfficeCard-350f62d6",
          "space": "",
          "content": {
            "articleProps": {
              "className": "office"
            },
            "divProps": {
              "className": "city"
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
              "d": "M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
            },
            "divProps2": {},
            "bProps": {},
            "label": "McKinney, Texas",
            "smallProps": {},
            "text": "USA, Dallas",
            "addressProps": {},
            "text2": "8751 Collin McKinney Parkway, Suite 801, McKinney, TX 75070",
            "aProps": {
              "className": "dir",
              "href": "https://www.google.com/maps/search/?api=1&query=8751+Collin+McKinney+Parkway,+Suite+801,+McKinney,+TX+75070",
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
              "d": "M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z M9 4v14 M15 6v14"
            },
            "linkLabel": "Get directions"
          }
        }
      ],
      "divProps7": {
        "className": "office-group"
      },
      "h3Props2": {},
      "svgProps3": {
        "className": "ic",
        "viewBox": "0 0 24 24",
        "aria-hidden": "true",
        "focusable": "false"
      },
      "pathProps3": {
        "d": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3 12h18 M12 3a14 14 0 0 1 0 18 M12 3a14 14 0 0 0 0 18"
      },
      "cardTitle2": "India ",
      "spanProps3": {
        "className": "muted",
        "style": {
          "font": "500 var(--fs-small) var(--text)"
        }
      },
      "label3": "6 offices",
      "spanProps4": {
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
      "text2": "--:--",
      "label4": " IST",
      "divProps8": {
        "className": "office-list"
      },
      "officeCardItems2": [
        {
          "key": "OfficeCard-e2a2639c",
          "space": "",
          "content": {
            "articleProps": {
              "className": "office"
            },
            "divProps": {
              "className": "city"
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
              "d": "M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
            },
            "divProps2": {},
            "bProps": {},
            "label": "Hyderabad",
            "smallProps": {},
            "text": "iLabs Centre, Madhapur",
            "addressProps": {},
            "text2": "6th Floor, 6D Block C&D, iLabs Centre, Madhapur, Hyderabad, Telangana 500081",
            "aProps": {
              "className": "dir",
              "href": "https://www.google.com/maps/search/?api=1&query=6th+Floor,+6D+Block+CandD,+iLabs+Centre,+Madhapur,+Hyderabad,+Telangana+500081",
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
              "d": "M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z M9 4v14 M15 6v14"
            },
            "linkLabel": "Get directions"
          }
        },
        {
          "key": "OfficeCard-846c8991",
          "space": "",
          "content": {
            "articleProps": {
              "className": "office"
            },
            "divProps": {
              "className": "city"
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
              "d": "M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
            },
            "divProps2": {},
            "bProps": {},
            "label": "Hyderabad",
            "smallProps": {},
            "text": "Meenakshi Tech Park, Gachibowli",
            "addressProps": {},
            "text2": "5th Floor, Block B & C, Meenakshi Tech Park, Phase 2, Gachibowli, Serilingampally, Hyderabad, Telangana 500032",
            "aProps": {
              "className": "dir",
              "href": "https://www.google.com/maps/search/?api=1&query=5th+Floor,+Block+B+and+C,+Meenakshi+Tech+Park,+Phase+2,+Gachibowli,+Serilingampally,+Hyderabad,+Telangana+500032",
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
              "d": "M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z M9 4v14 M15 6v14"
            },
            "linkLabel": "Get directions"
          }
        },
        {
          "key": "OfficeCard-1ee29071",
          "space": "",
          "content": {
            "articleProps": {
              "className": "office"
            },
            "divProps": {
              "className": "city"
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
              "d": "M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
            },
            "divProps2": {},
            "bProps": {},
            "label": "Hyderabad",
            "smallProps": {},
            "text": "Techno Pearl, Hitech City",
            "addressProps": {},
            "text2": "6/2 & 6/3, 2nd Floor, Techno Pearl, HUDA Techno Enclave, Hitech City, Hyderabad, Telangana 500081",
            "aProps": {
              "className": "dir",
              "href": "https://www.google.com/maps/search/?api=1&query=6/2+and+6/3,+2nd+Floor,+Techno+Pearl,+HUDA+Techno+Enclave,+Hitech+City,+Hyderabad,+Telangana+500081",
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
              "d": "M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z M9 4v14 M15 6v14"
            },
            "linkLabel": "Get directions"
          }
        },
        {
          "key": "OfficeCard-88a3a607",
          "space": "",
          "content": {
            "articleProps": {
              "className": "office"
            },
            "divProps": {
              "className": "city"
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
              "d": "M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
            },
            "divProps2": {},
            "bProps": {},
            "label": "Hyderabad",
            "smallProps": {},
            "text": "Cyber Gateway, Hitech City",
            "addressProps": {},
            "text2": "6th Floor, A Block, Wing 2, Cyber Gateway, Hitech City, Madhapur, Hyderabad, Telangana 500081",
            "aProps": {
              "className": "dir",
              "href": "https://www.google.com/maps/search/?api=1&query=6th+Floor,+A+Block,+Wing+2,+Cyber+Gateway,+Hitech+City,+Madhapur,+Hyderabad,+Telangana+500081",
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
              "d": "M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z M9 4v14 M15 6v14"
            },
            "linkLabel": "Get directions"
          }
        },
        {
          "key": "OfficeCard-f0d893d5",
          "space": "",
          "content": {
            "articleProps": {
              "className": "office"
            },
            "divProps": {
              "className": "city"
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
              "d": "M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
            },
            "divProps2": {},
            "bProps": {},
            "label": "Vijayawada",
            "smallProps": {},
            "text": "Medha I Tower, Gannavaram",
            "addressProps": {},
            "text2": "1st Floor, Module No 7, Medha I Tower, Ace Urban Hitech City Limited, Kesarapalli Village, Gannavaram 521102",
            "aProps": {
              "className": "dir",
              "href": "https://www.google.com/maps/search/?api=1&query=1st+Floor,+Module+No+7,+Medha+I+Tower,+Ace+Urban+Hitech+City+Limited,+Kesarapalli+Village,+Gannavaram+521102",
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
              "d": "M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z M9 4v14 M15 6v14"
            },
            "linkLabel": "Get directions"
          }
        },
        {
          "key": "OfficeCard-f55e5a25",
          "space": "",
          "content": {
            "articleProps": {
              "className": "office"
            },
            "divProps": {
              "className": "city"
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
              "d": "M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
            },
            "divProps2": {},
            "bProps": {},
            "label": "Bengaluru",
            "smallProps": {},
            "text": "Flex Co-works, JP Nagar",
            "addressProps": {},
            "text2": "Flex Co-works, 2nd Floor, No. 71, Vishnu Estates, 15th Cross, JP Nagar 3rd Phase, Bengaluru, Karnataka 560078",
            "aProps": {
              "className": "dir",
              "href": "https://www.google.com/maps/search/?api=1&query=Flex+Co-works,+2nd+Floor,+No.+71,+Vishnu+Estates,+15th+Cross,+JP+Nagar+3rd+Phase,+Bengaluru,+Karnataka+560078",
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
              "d": "M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z M9 4v14 M15 6v14"
            },
            "linkLabel": "Get directions"
          }
        }
      ]
    }
  },
  {
    "type": "text",
    "key": "space-5",
    "content": "\n\n"
  }
]
}
