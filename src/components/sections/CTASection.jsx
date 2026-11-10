import { useEffect, useRef } from 'react'

function CTAFlowCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!ctx) return undefined
    let width = 0
    let height = 0
    let frame = 0
    let time = 0
    let active = true
    const animate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = bounds.width; height = bounds.height
      canvas.width = width * dpr; canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const originX = width * .36
      const originY = height * .52
      const colors = ['#36aaff', '#2fd0b0', '#ee815d', '#dda94e']
      for (let i = 0; i < 104; i++) {
        const group = i % 4
        const spread = (i / 104 - .5) * height * 1.05
        const endX = width * (.56 + (i % 13) / 30)
        const endY = originY + spread + Math.sin(time + i * .31) * (8 + group * 2)
        const bendX = originX + (endX - originX) * .48
        const bendY = originY + spread * .28 + Math.sin(time * .75 + i * .2) * 18
        const alpha = .08 + (i % 7) * .017
        ctx.beginPath()
        ctx.moveTo(originX + (i % 9) * 2, originY + (i % 11 - 5) * 2)
        ctx.quadraticCurveTo(bendX, bendY, endX, endY)
        ctx.strokeStyle = colors[group]
        ctx.globalAlpha = alpha
        ctx.lineWidth = i % 12 === 0 ? 1.2 : .65
        ctx.stroke()
        const progress = (time * (.035 + (i % 5) * .006) + i * .137) % 1
        const particleX = (1 - progress) ** 2 * originX + 2 * (1 - progress) * progress * bendX + progress ** 2 * endX
        const particleY = (1 - progress) ** 2 * originY + 2 * (1 - progress) * progress * bendY + progress ** 2 * endY
        ctx.beginPath(); ctx.arc(particleX, particleY, i % 8 === 0 ? 1.5 : .8, 0, Math.PI * 2)
        ctx.globalAlpha = .35 + (i % 4) * .1
        ctx.fillStyle = colors[group]; ctx.fill()
      }
      ctx.globalAlpha = 1
      time += .018
      if (active && animate) frame = requestAnimationFrame(draw)
    }
    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    const onVisibilityChange = () => {
      active = !document.hidden
      cancelAnimationFrame(frame)
      if (active && animate) frame = requestAnimationFrame(draw)
    }
    document.addEventListener('visibilitychange', onVisibilityChange)
    if (animate) frame = requestAnimationFrame(draw)
    else draw()
    return () => {
      active = false
      cancelAnimationFrame(frame)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      observer.disconnect()
    }
  }, [])
  return <canvas ref={canvasRef} className="cta-flow-canvas" aria-hidden="true" />
}

export default function CTASection({ eyebrow, title, description, actions = [], tone = 'brand', aside, footer }) {
  return <section className={`cta-section cta-section--${tone}`}><div className="container cta-section__inner reveal-on-scroll">{tone === 'brand' && <CTAFlowCanvas />}<div className="cta-section__copy">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{description && <p>{description}</p>}{actions.length > 0 && <div className="cluster">{actions.map((action) => <a key={`${action.label}-${action.href}`} className={`button ${action.variant === 'outline' ? 'button-outline' : 'button-primary'}`} href={action.href}>{action.label}</a>)}</div>}</div>{aside && <div className="cta-section__aside">{aside}</div>}{footer && <div className="cta-section__footer">{footer}</div>}</div></section>
}
