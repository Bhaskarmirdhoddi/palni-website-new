import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { initScenes } from '../vendor/scenes'
import { initSite } from '../vendor/site'
import ConfiguredPage from '../components/composed/ConfiguredPage'
import { pageConfigurations } from '../data/pages'

export default function ReferencePage({ page }) {
  const location = useLocation()

  useLayoutEffect(() => {
    document.title = page.title
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', page.description.replace(/&#x27;/g, "'"))
    if (page.svc) document.body.dataset.svc = page.svc
    else delete document.body.dataset.svc
  }, [page])

  useLayoutEffect(() => {
    const nav = document.querySelector('[data-section-nav]')
    if (!nav) return
    const links = [...nav.querySelectorAll('a[href^="#"]')]
    const sections = links.map(link => document.getElementById(link.hash.slice(1)))
    let frame = 0
    const update = () => {
      frame = 0
      const boundary = nav.getBoundingClientRect().bottom + 24
      let current = 0
      sections.forEach((section, index) => {
        if (section && section.getBoundingClientRect().top <= boundary) current = index
      })
      links.forEach((link, index) => {
        if (index === current) link.setAttribute('aria-current', 'location')
        else link.removeAttribute('aria-current')
      })
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    update()
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      cancelAnimationFrame(frame)
    }
  }, [page])

  useLayoutEffect(() => {
    const destroySite = initSite()
    const destroyScenes = initScenes()
    return () => {
      destroySite?.()
      destroyScenes?.()
    }
  }, [page])

  useLayoutEffect(() => {
    // React Router updates history without a native hashchange event. Reference
    // filters listen for that event, including links within the use-cases page.
    window.dispatchEvent(new HashChangeEvent('hashchange'))
    const hash = location.hash.slice(1)
    if (hash) {
      const service = document.getElementById(`service-${hash}`)
      if (service) service.checked = true
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ block: 'start' })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [page, location.hash, location.pathname])

  return <ConfiguredPage key={page.key} configuration={pageConfigurations[page.key]} />
}
