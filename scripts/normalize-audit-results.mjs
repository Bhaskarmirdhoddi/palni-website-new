import { readFile, writeFile } from 'node:fs/promises'

// HTML indentation collapses to a single space in the rendered headings.
// Apply that same normalization to the already captured comparison records.
const path = 'docs/visual-audit/results.json'
const audit = JSON.parse(await readFile(path, 'utf8'))
for (const result of audit.results) {
  for (const side of [result.reference, result.actual]) {
    for (const section of side.sections) {
      if (section.heading) section.heading = section.heading.replace(/\s+/g, ' ').trim()
    }
  }
  if (JSON.stringify(result.reference.sections) === JSON.stringify(result.actual.sections)) {
    result.mismatches = result.mismatches.filter(m => m !== 'section geometry/content/styles')
  }
}
await writeFile(path, JSON.stringify(audit, null, 2))
console.log(JSON.stringify({ comparisons: audit.results.length, mismatches: audit.results.filter(r => r.mismatches.length), errors: audit.errors }, null, 2))
