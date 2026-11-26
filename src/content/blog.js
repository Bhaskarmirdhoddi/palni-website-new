import data from '../data/blog-posts.json' with { type: 'json' }

export const posts = data
export const pageSize = 4
export const journalTitle = 'Palni Insights | Enterprise Technology Journal'
export const journalDescription = 'Explore practical perspectives, technology insights and ideas shaping the future of enterprise transformation.'
export const siteOrigin = 'https://palni-website-new.vercel.app'
export const archivePath = (page = 1) => page === 1 ? '/blog/' : `/blog/page/${page}/`

export function blogMetadata(post, page = 1) {
  const url = siteOrigin + (post?.path ?? archivePath(page))
  const title = post ? `${post.title} | Palni Insights` : page === 1 ? journalTitle : `Page ${page} | ${journalTitle}`
  const description = post?.excerpt ?? journalDescription
  const image = siteOrigin + (post ?? posts[0]).image.src
  const schema = post ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description,
    image,
    url,
    mainEntityOfPage: url,
    datePublished: post.published,
    dateModified: post.modified,
    publisher: { '@type': 'Organization', name: 'Palni' },
    articleSection: post.categories.map(category => category.name),
    keywords: post.tags.map(tag => tag.name).join(', ') || undefined,
  } : null
  return { url, title, description, image, imageAlt: (post ?? posts[0]).image.alt, schema, type: post ? 'article' : 'website' }
}

export function blogMetaTags(meta) {
  return {
    'og:title': meta.title,
    'og:description': meta.description,
    'og:url': meta.url,
    'og:type': meta.type,
    'og:image': meta.image,
    'og:image:alt': meta.imageAlt,
    ...(meta.schema && { 'article:published_time': meta.schema.datePublished, 'article:modified_time': meta.schema.dateModified }),
  }
}
