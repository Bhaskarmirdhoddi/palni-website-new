import { useTheme } from './useTheme'

function SunIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>
}

function MoonIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.3 15.4A8.5 8.5 0 0 1 8.6 3.7 8.6 8.6 0 1 0 20.3 15.4Z"/></svg>
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const nextTheme = theme === 'light' ? 'dark' : 'light'
  return <button className="icon-button theme-toggle" data-current-theme={theme} type="button" onClick={toggleTheme} aria-label={`Switch to ${nextTheme} theme`} title={`Switch to ${nextTheme} theme`}><span className="visually-hidden">Switch to {nextTheme} theme</span><span className="theme-toggle__icon theme-toggle__icon--sun"><SunIcon /></span><span className="theme-toggle__icon theme-toggle__icon--moon"><MoonIcon /></span></button>
}
