import { useLayoutEffect, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import PageLayout from '../components/composed/PageLayout'
import { chromeByPage } from '../data/pages/navigation'
import { archivePath, blogMetadata, blogMetaTags, journalDescription, pageSize, posts } from '../content/blog'
import { initSite } from '../vendor/site'
import '../styles/blog.css'

const chrome = {
  ...chromeByPage['use-cases'],
  divProps: { className: 'page-root' },
  aProps: { className: 'skip', href: '#main' },
  linkLabel: 'Skip to content',
  divProps2: { className: 'bg', 'aria-hidden': true },
  spanProps: { className: 'glow' },
  mainProps: { id: 'main', className: 'journal' },
}
const topicsFor = post => [...post.categories, ...post.tags]
const topics = [...new Map(posts.flatMap(post => topicsFor(post).map(topic => [topic.slug, topic]))).values()]
const dateFormat = new Intl.DateTimeFormat('en', { dateStyle: 'long', timeZone: 'UTC' })
const searchable = posts.map(post => [
  post.title, post.excerpt, ...topicsFor(post).map(topic => topic.name),
  post.body.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&'),
].join(' ').toLowerCase())

function useBlogMetadata(post, page) {
  useLayoutEffect(() => {
    const meta = blogMetadata(post, page)
    document.title = meta.title
    document.querySelector('meta[name="description"]').content = meta.description
    document.querySelectorAll('[data-blog-meta]').forEach(element => element.remove())
    const append = (tag, attributes) => {
      const element = document.createElement(tag)
      Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value))
      element.dataset.blogMeta = ''
      document.head.append(element)
      return element
    }
    const elements = [
      append('link', { rel: 'canonical', href: meta.url }),
      ...Object.entries(blogMetaTags(meta)).map(([property, content]) => append('meta', { property, content })),
    ]
    if (meta.schema) {
      const script = append('script', { type: 'application/ld+json' })
      script.textContent = JSON.stringify(meta.schema)
      elements.push(script)
    }
    return () => elements.forEach(element => element.remove())
  }, [post, page])
}

function PostMeta({ post }) {
  return (
    <div className="journal-meta">
      <time dateTime={post.published}>{dateFormat.format(new Date(post.published))}</time>
      <span>{post.minutes} min read</span>
    </div>
  )
}

function Card({ post, featured = false }) {
  const Heading = featured ? 'h2' : 'h3'
  return (
    <article className={featured ? 'journal-card journal-feature' : 'journal-card'}>
      <Link to={post.path} className="journal-card-link" aria-labelledby={`journal-title-${post.id}`}>
        <div className="journal-card-image"><img {...post.image} loading={featured ? 'eager' : 'lazy'} decoding="async" /></div>
        <div className="journal-card-copy">
          <p className="journal-kicker">{featured ? 'Featured story' : post.categories[0]?.name}{featured && post.categories[0] ? ` / ${post.categories[0].name}` : ''}</p>
          <Heading id={`journal-title-${post.id}`}>{post.title}</Heading>
          <p className="journal-excerpt">{post.excerpt}</p>
          <PostMeta post={post} />
          <span className="journal-read">Read article <span aria-hidden="true">↗</span></span>
        </div>
      </Link>
    </article>
  )
}

function Newsletter() {
  return (
    <section className="journal-newsletter" aria-labelledby="journal-newsletter">
      <div>
        <p className="journal-kicker">Palni newsletter</p>
        <h2 id="journal-newsletter">Stay Ahead of What’s Next.</h2>
        <p className="lead">Get fresh perspectives on enterprise technology, innovation and digital transformation.</p>
      </div>
      <fieldset disabled aria-describedby="journal-newsletter-status">
        <label htmlFor="journal-email">Email address</label>
        <div className="journal-email">
          <input type="email" id="journal-email" placeholder="you@example.com" autoComplete="email" />
          <button type="button" className="btn btn-primary">Subscribe</button>
        </div>
        <p id="journal-newsletter-status">Subscriptions will open once an email service is connected.</p>
      </fieldset>
    </section>
  )
}

function Archive() {
  const { number } = useParams()
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const query = params.get('q')?.trim() ?? ''
  const topic = params.get('topic') ?? ''
  const results = posts.filter((post, index) =>
    (!topic || topicsFor(post).some(item => item.slug === topic)) &&
    query.toLowerCase().split(/\s+/).every(word => searchable[index].includes(word)))
  const lastPage = Math.max(1, Math.ceil(results.length / pageSize))
  const requested = number ? Number(number) : 1
  const valid = Number.isSafeInteger(requested) && requested >= 1 && requested <= lastPage
  const page = valid ? requested : 1
  const featured = !query && !topic && page === 1 ? results[0] : null
  const visible = results.slice((page - 1) * pageSize, page * pageSize).filter(post => post !== featured)
  const urlFor = (pageNumber, nextTopic = topic) => {
    const next = new URLSearchParams()
    if (query) next.set('q', query)
    if (nextTopic) next.set('topic', nextTopic)
    return archivePath(pageNumber) + (next.size ? `?${next}` : '')
  }
  const search = event => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const next = new URLSearchParams()
    const value = String(form.get('q')).trim()
    if (value) next.set('q', value)
    if (topic) next.set('topic', topic)
    navigate(archivePath() + (next.size ? `?${next}` : '') + '#latest-insights')
  }
  useBlogMetadata(null, page)
  if (!valid || (number && (page === 1 || String(page) !== number))) return <Navigate to={urlFor(page)} replace />

  return (
    <>
      <section className="journal-hero">
        <div className="wrap journal-hero-grid">
          <div>
            <p className="journal-kicker">Palni Insights</p>
            <h1>Ideas That Move <em>Business Forward.</em></h1>
          </div>
          <div className="journal-hero-intro">
            <p className="lead">{journalDescription}</p>
            <a href="#latest-insights" className="journal-read">Explore the journal <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>
      <div className="wrap">
        {featured && <Card post={featured} featured />}
        <section className="journal-index" id="latest-insights" aria-labelledby="journal-index-title">
          <div className="journal-index-head">
            <div>
              <p className="journal-kicker">The archive</p>
              <h2 id="journal-index-title">Latest insights</h2>
            </div>
            <form action={archivePath()} onSubmit={search} role="search" className="journal-search" key={query}>
              <label htmlFor="journal-query">Search articles</label>
              <div>
                <input id="journal-query" name="q" type="search" defaultValue={query} placeholder="Title or keyword" />
                {topic && <input type="hidden" name="topic" value={topic} />}
                <button className="btn btn-ghost" type="submit">Search</button>
              </div>
            </form>
          </div>
          <nav aria-label="Explore topics" className="journal-topics">
            <Link to={urlFor(1, '')} aria-current={!topic ? 'true' : undefined} preventScrollReset>All articles</Link>
            {topics.map(item => (
              <Link key={item.slug} to={urlFor(1, item.slug)} aria-current={topic === item.slug ? 'true' : undefined} preventScrollReset>{item.name}</Link>
            ))}
          </nav>
          <div className="journal-results">
            <p role="status">{results.length} {results.length === 1 ? 'article' : 'articles'}{query ? ` for “${query}”` : ''}{lastPage > 1 ? ` · Page ${page} of ${lastPage}` : ''}</p>
            {(topic || query) && <Link to={archivePath()} className="journal-read">Clear filters</Link>}
          </div>
          {results.length ? (
            <div className="journal-grid" key={`${query}|${topic}|${page}`}>
              {visible.map(post => <Card post={post} key={post.id} />)}
            </div>
          ) : (
            <div className="journal-empty"><h3>No articles found</h3><p>Try another keyword or select a different topic.</p></div>
          )}
          {lastPage > 1 && (
            <nav aria-label="Article pages" className="journal-pagination">
              {page > 1 && <Link to={urlFor(page - 1) + '#latest-insights'} rel="prev">← Previous</Link>}
              {Array.from({ length: lastPage }, (_, index) => {
                const target = index + 1
                return <Link key={target} to={urlFor(target) + '#latest-insights'} aria-label={`Page ${target}`} aria-current={target === page ? 'page' : undefined}>{target}</Link>
              })}
              {page < lastPage && <Link to={urlFor(page + 1) + '#latest-insights'} rel="next">Next →</Link>}
            </nav>
          )}
        </section>
        <Newsletter />
      </div>
    </>
  )
}

function Share({ post }) {
  const [feedback, setFeedback] = useState('')
  const { url } = blogMetadata(post)
  const encoded = encodeURIComponent(url)
  async function copy() {
    try {
      await navigator.clipboard.writeText(url)
      setFeedback('Link copied.')
    } catch {
      setFeedback('Copy the article URL from the address bar.')
    }
  }

  return (
    <div className="journal-share" role="group" aria-label="Share this article">
      <span>Share</span>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
      <a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encoded}`}>Email</a>
      <button type="button" onClick={copy}>Copy link</button>
      <span role="status">{feedback}</span>
    </div>
  )
}

function Article({ post }) {
  useBlogMetadata(post, 1)
  const index = posts.indexOf(post)
  const related = posts.filter(other => other !== post)
    .sort((left, right) => right.tags.filter(tag => post.tags.some(item => item.slug === tag.slug)).length -
      left.tags.filter(tag => post.tags.some(item => item.slug === tag.slug)).length)
    .slice(0, 2)
  const previous = posts[index + 1]
  const next = posts[index - 1]

  return (
    <div className="wrap journal-article">
      <article>
        <header className="journal-article-header">
          <nav className="journal-crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">/</span>
            <Link to={archivePath()}>Insights</Link><span aria-hidden="true">/</span>
            <span aria-current="page">{post.title}</span>
          </nav>
          <p className="journal-kicker">{post.categories.map(item => item.name).join(' / ')}</p>
          <h1>{post.title}</h1>
          <p className="lead">{post.excerpt}</p>
          <PostMeta post={post} />
        </header>
        <img className="journal-article-image" {...post.image} fetchPriority="high" />
        <div className="journal-reading">
          {post.outline.length >= 4 && (
            <aside className="journal-toc">
              <nav aria-label="On this page">
                <p className="journal-kicker">On this page</p>
                <ul>{post.outline.map(item => <li key={item.id} className={item.depth === 3 ? 'journal-toc-sub' : undefined}><a href={`#${item.id}`}>{item.label}</a></li>)}</ul>
              </nav>
            </aside>
          )}
          <div className="journal-reading-main">
            <div className="journal-prose" dangerouslySetInnerHTML={{ __html: post.body }} />
            {post.missingImages > 0 && <p className="journal-source-note">Two illustrations are unavailable in the original article.</p>}
            <Share post={post} key={post.id} />
          </div>
        </div>
      </article>
      <nav aria-label="Adjacent articles" className="journal-neighbors">
        {previous && <Link to={previous.path}><span className="journal-kicker">← Previous article</span>{previous.title}</Link>}
        {next && <Link to={next.path}><span className="journal-kicker">Next article →</span>{next.title}</Link>}
      </nav>
      <section className="journal-related" aria-labelledby="journal-related">
        <div className="journal-index-head">
          <h2 id="journal-related">Related articles</h2>
          <Link className="journal-read" to={archivePath()}>Back to all insights <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="journal-grid">{related.map(item => <Card post={item} key={item.id} />)}</div>
      </section>
    </div>
  )
}

export default function BlogPage({ post }) {
  const { pathname, search, hash } = useLocation()
  useLayoutEffect(() => {
    document.body.dataset.svc = 'brand'
    return initSite()
  }, [])
  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
      else if (!search) window.scrollTo(0, 0)
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, search, hash])

  return <PageLayout content={chrome}>{post ? <Article post={post} /> : <Archive />}</PageLayout>
}
