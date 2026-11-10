import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const targets = document.querySelectorAll('.reveal-on-scroll')
    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => {
        target.classList.add('is-visible')
        target.classList.remove('is-pending')
      })
      return undefined
    }
    targets.forEach((target) => target.classList.add('is-pending'))
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          entry.target.classList.remove('is-pending')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])
}
