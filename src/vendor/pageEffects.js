// Dispose reference animations and listeners when React changes the page.
export function createPageEffects() {
  const controller = new AbortController()
  const frames = new Set(), idle = new Set(), timeouts = new Set(), intervals = new Set(), observers = new Set()
  let disposed = false
  const nativeAdd = EventTarget.prototype.addEventListener
  const captureListeners = (run) => {
    if (disposed) return
    EventTarget.prototype.addEventListener = function (type, listener, options) {
      const settings = typeof options === 'boolean' ? { capture: options } : options || {}
      nativeAdd.call(this, type, listener, { ...settings, signal: settings.signal || controller.signal })
    }
    try { return run() } finally { EventTarget.prototype.addEventListener = nativeAdd }
  }
  const observer = (Native) => class extends Native {
    constructor(callback, options) {
      super((...args) => captureListeners(() => callback(...args)), options)
      observers.add(this)
    }
  }
  const api = {
    requestAnimationFrame(callback) {
      if (disposed) return 0
      const id = window.requestAnimationFrame(time => { frames.delete(id); captureListeners(() => callback(time)) })
      frames.add(id)
      return id
    },
    cancelAnimationFrame(id) { window.cancelAnimationFrame(id); frames.delete(id) },
    requestIdleCallback(callback, options) {
      if (disposed) return 0
      const id = window.requestIdleCallback(deadline => { idle.delete(id); captureListeners(() => callback(deadline)) }, options)
      idle.add(id)
      return id
    },
    setTimeout(callback, delay, ...args) {
      if (disposed) return 0
      const id = window.setTimeout(() => { timeouts.delete(id); captureListeners(() => callback(...args)) }, delay)
      timeouts.add(id)
      return id
    },
    clearTimeout(id) { window.clearTimeout(id); timeouts.delete(id) },
    setInterval(callback, delay, ...args) {
      if (disposed) return 0
      const id = window.setInterval(() => captureListeners(() => callback(...args)), delay)
      intervals.add(id)
      return id
    },
    clearInterval(id) { window.clearInterval(id); intervals.delete(id) },
    IntersectionObserver: observer(window.IntersectionObserver),
    ResizeObserver: observer(window.ResizeObserver),
    MutationObserver: observer(window.MutationObserver),
    addEventListener(type, listener, options) { captureListeners(() => window.addEventListener(type, listener, options)) },
  }
  const dispose = () => {
    disposed = true
    controller.abort()
    frames.forEach(id => window.cancelAnimationFrame(id))
    idle.forEach(id => window.cancelIdleCallback(id))
    timeouts.forEach(id => window.clearTimeout(id))
    intervals.forEach(id => window.clearInterval(id))
    observers.forEach(item => item.disconnect())
    document.documentElement.style.overflow = ''
  }
  return { api, captureListeners, dispose }
}
