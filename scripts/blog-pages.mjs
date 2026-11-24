import { archivePath, blogMetadata, blogMetaTags, pageSize, posts } from '../src/content/blog.js'

const escape = value => String(value).replace(/[&<">]/g, char => ({ '&': '&amp;', '<': '&lt;', '"': '&quot;', '>': '&gt;' })[char])
const postLink = post => `<li><a href="${escape(post.path)}">${escape(post.title)}</a></li>`

export default function blogPages() {
  return {
    name: 'palni-blog-pages',
    apply: 'build',
    generateBundle: {
      order: 'post',
      handler(_, bundle) {
        const index = bundle['index.html']
        if (index?.type !== 'asset') return
        const count = Math.ceil(posts.length / pageSize)
        const variants = [
          ...Array.from({ length: count }, (_, index) => {
            const page = index + 1
            const links = posts.slice(index * pageSize, page * pageSize).map(postLink).join('')
            const pagination = [
              ...(page > 1 ? [`<a href="${archivePath(page - 1)}" rel="prev">Previous page</a>`] : []),
              ...(page < count ? [`<a href="${archivePath(page + 1)}" rel="next">Next page</a>`] : []),
            ].join(' ')
            return {
              path: archivePath(page),
              meta: blogMetadata(null, page),
              content: `<h1>Palni Insights</h1><ul>${links}</ul><nav aria-label="Article pages">${pagination}</nav>`,
            }
          }),
          ...posts.map(post => ({
            path: post.path,
            meta: blogMetadata(post),
            content: `<article><h1>${escape(post.title)}</h1><p>${escape(post.excerpt)}</p>${post.body}</article><a href="/blog/">Back to all insights</a>`,
          })),
        ]
        for (const { path, meta, content } of variants) {
          const social = Object.entries(blogMetaTags(meta))
            .map(([property, value]) => `<meta data-blog-meta property="${property}" content="${escape(value)}">`)
            .join('\n    ')
          const schema = meta.schema ? `<script data-blog-meta type="application/ld+json">${JSON.stringify(meta.schema).replaceAll('<', '\\u003c')}</script>` : ''
          const html = String(index.source)
            .replace(/<title>.*?<\/title>/, () => `<title>${escape(meta.title)}</title>`)
            .replace(/<meta name="description"[^>]*>/, () => `<meta name="description" content="${escape(meta.description)}">`)
            .replace('</head>', () => `  <link data-blog-meta rel="canonical" href="${escape(meta.url)}">\n    ${social}\n    ${schema}\n  </head>`)
            .replace('<div id="root"></div>', () => `<div id="root"></div><noscript><main class="wrap">${content}</main></noscript>`)
          this.emitFile({ type: 'asset', fileName: `${path.slice(1)}index.html`, source: html })
        }
        this.emitFile({
          type: 'asset',
          fileName: 'blog-sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${variants.map(({ meta }) => `<url><loc>${escape(meta.url)}</loc></url>`).join('')}</urlset>\n`,
        })
      },
    },
  }
}
