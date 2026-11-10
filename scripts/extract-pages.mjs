import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const docs = join(root, 'docs')

const pages = [
  { file: 'ref-index.html', key: 'home', path: '/', htmlPath: '/index.html', title: 'Palni | Salesforce, ServiceNow and Databricks', svc: '' },
  { file: 'ref-databricks.html', key: 'databricks', path: '/databricks', htmlPath: '/databricks.html', title: 'Databricks Consulting and Data Modernisation | Palni', svc: 'databricks' },
  { file: 'ref-databricks-capabilities.html', key: 'databricks-capabilities', path: '/databricks-capabilities', htmlPath: '/databricks-capabilities.html', title: 'Databricks Data Engineering and AI Capabilities | Palni', svc: 'databricks' },
  { file: 'ref-databricks-industries.html', key: 'databricks-industries', path: '/databricks-industries', htmlPath: '/databricks-industries.html', title: 'Databricks Industry Solutions | Palni', svc: 'databricks' },
  { file: 'ref-databricks-expertise.html', key: 'databricks-expertise', path: '/databricks-expertise', htmlPath: '/databricks-expertise.html', title: 'Databricks Expertise and Accelerators | Palni', svc: 'databricks' },
  { file: 'ref-servicenow.html', key: 'servicenow', path: '/servicenow', htmlPath: '/servicenow.html', title: 'ServiceNow Consulting and Workflow Automation | Palni', svc: 'servicenow' },
  { file: 'ref-salesforce.html', key: 'salesforce', path: '/salesforce', htmlPath: '/salesforce.html', title: 'Salesforce Consulting and Revenue Transformation | Palni', svc: 'salesforce' },
  { file: 'ref-use-cases.html', key: 'use-cases', path: '/use-cases', htmlPath: '/use-cases.html', title: 'Enterprise Technology Use Cases | Palni', svc: 'brand' },
  { file: 'ref-about.html', key: 'about', path: '/about', htmlPath: '/about.html', title: 'About Palni | Enterprise Technology Expertise', svc: 'brand' },
  { file: 'ref-careers.html', key: 'careers', path: '/careers', htmlPath: '/careers.html', title: 'Careers at Palni | We Aim High. So Will You.', svc: 'brand' },
  { file: 'ref-contact.html', key: 'contact', path: '/contact', htmlPath: '/contact.html', title: 'Contact Palni | Start a Discovery', svc: 'brand' },
  { file: 'ref-data-engineering.html', key: 'data-engineering', path: '/data-engineering', htmlPath: '/data-engineering.html', svc: 'brand' },
  { file: 'ref-ai-automation.html', key: 'ai-automation', path: '/ai-automation', htmlPath: '/ai-automation.html', svc: 'brand' },
  { file: 'ref-cx-solutions.html', key: 'cx-solutions', path: '/cx-solutions', htmlPath: '/cx-solutions.html', svc: 'brand' },
]

function rewrite(html) {
  return html
    .replace(/src="assets\//g, 'src="/assets/')
    .replace(/href="index\.html(#[^"]*)?"/g, (_, hash = '') => `href="/${hash}"`)
    .replace(/href="([a-z0-9-]+)\.html(#[^"]*)?"/g, (_, page, hash = '') => `href="/${page}${hash}"`)
}

function extractBody(source) {
  const body = source.match(/<body([^>]*)>([\s\S]*?)<\/body>/i)
  const attrs = body?.[1] || ''
  let inner = body?.[2] || ''
  inner = inner.replace(/<script[\s\S]*?<\/script>/gi, '')
  inner = rewrite(inner.trim())
  const svc = attrs.match(/data-svc="([^"]+)"/)?.[1] || ''
  const description = source.match(/<meta name="description" content="([^"]*)"/)?.[1] || ''
  return { inner, svc, description }
}

const outDir = join(root, 'src', 'content')
mkdirSync(outDir, { recursive: true })

const records = pages.map((meta) => {
  const source = readFileSync(join(docs, meta.file), 'utf8')
  const extracted = extractBody(source)
  writeFileSync(join(outDir, `${meta.key}.html`), extracted.inner)
  return {
    ...meta,
    title: source.match(/<title>([^<]*)<\/title>/i)?.[1] || meta.title,
    svc: extracted.svc || meta.svc,
    description: extracted.description,
  }
})

const js = `/* Auto-generated from original Palni reference HTML. Do not edit by hand. */
${records.map((p) => `import ${p.key.replace(/-/g, '_')} from './${p.key}.html?raw'`).join('\n')}

export const pages = [
${records.map((p) => `  {
    key: ${JSON.stringify(p.key)},
    path: ${JSON.stringify(p.path)},
    htmlPath: ${JSON.stringify(p.htmlPath)},
    title: ${JSON.stringify(p.title)},
    description: ${JSON.stringify(p.description)},
    svc: ${JSON.stringify(p.svc)},
    html: ${p.key.replace(/-/g, '_')},
  }`).join(',\n')}
]

export const routeList = pages.flatMap((page) => [
  { path: page.path, page },
  { path: page.htmlPath, page },
])
`

writeFileSync(join(outDir, 'pages.js'), js)

mkdirSync(join(root, 'src', 'vendor'), { recursive: true })
copyFileSync(join(docs, 'ref-site.css'), join(root, 'src', 'styles', 'site.css'))
copyFileSync(join(docs, 'ref-site.js'), join(root, 'src', 'vendor', 'site.raw.js'))
copyFileSync(join(docs, 'ref-scenes.js'), join(root, 'src', 'vendor', 'scenes.raw.js'))

console.log(`Extracted ${records.length} pages`)
