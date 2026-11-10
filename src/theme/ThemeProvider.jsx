import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './ThemeContext'

function getInitialTheme() {
  try {
    const preference = localStorage.getItem('palni-theme')
    if (preference === 'light' || preference === 'dark') return preference
  } catch { /* Storage can be unavailable in private browsing. */ }
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)
  const setThemePreference = useCallback((nextTheme) => {
    setTheme((current) => {
      const resolved = typeof nextTheme === 'function' ? nextTheme(current) : nextTheme
      if (resolved !== 'light' && resolved !== 'dark') return current
      try { localStorage.setItem('palni-theme', resolved) } catch { /* Keep the in-memory choice. */ }
      return resolved
    })
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    const themeColor = document.querySelector('meta[name="theme-color"]')
    if (themeColor) themeColor.content = getComputedStyle(root).getPropertyValue('--ink-0').trim()
  }, [theme])

  const value = useMemo(() => ({ theme, setTheme: setThemePreference, toggleTheme: () => setThemePreference((current) => current === 'light' ? 'dark' : 'light') }), [theme, setThemePreference])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

