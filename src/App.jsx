import { BrowserRouter, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import AppRoutes from './routes/AppRoutes'

function InternalLinkRouter() {
  const navigate = useNavigate()

  useEffect(() => {
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const link = event.target.closest('a[href]')
      if (!link) return
      const href = link.getAttribute('href')
      if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return
      if (link.target === '_blank' || link.hasAttribute('download')) return
      const url = new URL(link.href, window.location.origin)
      if (url.origin !== window.location.origin) return
      event.preventDefault()
      navigate(`${url.pathname}${url.search}${url.hash}`)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [navigate])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <InternalLinkRouter />
      <AppRoutes />
    </BrowserRouter>
  )
}
