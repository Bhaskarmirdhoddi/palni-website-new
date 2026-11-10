import { readFile, writeFile } from 'node:fs/promises'

const pages = JSON.parse(await readFile('docs/visual-audit/inventory.json', 'utf8'))
const sizes = ['1920x1080', '1440x900', '768x1024', '390x844']
const html = `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Palni visual verification</title>
<style>body{margin:0;padding:40px;background:#070d1c;color:#eef2fa;font:16px/1.5 system-ui}main{max-width:1400px;margin:auto}h1{font-size:36px}a{color:#af9cff}section{padding:24px 0;border-top:1px solid #33405a}.pair{display:grid;grid-template-columns:1fr 1fr;gap:20px}img{width:100%;height:420px;object-fit:cover;object-position:top;border:1px solid #33405a;border-radius:12px}nav{display:flex;gap:16px;flex-wrap:wrap}h2{font-size:24px}small{color:#aab6cf}@media(max-width:600px){body{padding:20px}.pair{grid-template-columns:1fr}}</style>
<main><h1>Palni reference / local comparison</h1><p>14 pages · four viewport sizes · captured 10 November 2026</p><p><a href="../REDESIGN-REPORT.md">Mismatch and implementation report</a> · <a href="results.json">Detailed validation results</a> · <a href="interaction-results.json">Interaction checks</a></p>
${pages.map(p => { const slug = p.file.replace('.html', ''); return `<section><h2>${p.title}</h2><p><small>Preview: 1440 × 900. Open an image for the complete page.</small></p><div class="pair"><a href="1440x900/${slug}-reference.png"><img loading="lazy" src="1440x900/${slug}-reference.png" alt="${slug} reference"><br>Reference</a><a href="1440x900/${slug}-local.png"><img loading="lazy" src="1440x900/${slug}-local.png" alt="${slug} corrected local"><br>Corrected local</a></div><p>All viewport pairs:</p><nav>${sizes.map(size => `<span>${size}: <a href="${size}/${slug}-reference.png">reference</a> / <a href="${size}/${slug}-local.png">local</a></span>`).join('')}</nav></section>` }).join('')}
</main></html>`
await writeFile('docs/visual-audit/index.html', html)
console.log('Created visual audit gallery')
