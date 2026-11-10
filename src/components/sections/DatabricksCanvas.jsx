import { useEffect, useRef } from 'react'

export default function DatabricksCanvas({ scene = 'hero' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!context) return undefined
    let width = 0
    let height = 0
    let time = 0
    let frame = 0
    let inView = false
    let pageVisible = !document.hidden
    const animate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const color = '#f27648'
    const warm = '#e3a94b'

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = bounds.width
      height = bounds.height
      canvas.width = width * ratio
      canvas.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      draw()
      animateIfNeeded()
    }

    const line = (points, stroke = color, alpha = .26, lineWidth = .7) => {
      context.beginPath()
      points.forEach(([x, y], index) => index ? context.lineTo(x, y) : context.moveTo(x, y))
      context.strokeStyle = stroke
      context.globalAlpha = alpha
      context.lineWidth = lineWidth
      context.stroke()
    }

    const dot = (x, y, radius = 1.2, fill = color, alpha = .72) => {
      context.beginPath()
      context.arc(x, y, radius, 0, Math.PI * 2)
      context.fillStyle = fill
      context.globalAlpha = alpha
      context.fill()
    }

    const drawHero = () => {
      const cx = width * .52
      const cy = height * .55
      for (let row = -5; row <= 5; row++) {
        for (let column = -6; column <= 6; column++) {
          const x = cx + column * width * .048 + row * width * .018
          const y = cy + row * height * .042
          dot(x, y, .8, row % 2 ? color : warm, .32)
        }
      }
      for (let layer = 0; layer < 3; layer++) {
        const lift = layer * height * .14 + Math.sin(time + layer) * 2
        const x = cx
        const y = height * .72 - lift
        const dx = width * (.32 - layer * .025)
        const dy = height * .155
        const stroke = layer === 1 ? warm : color
        line([[x, y - dy], [x + dx, y], [x, y + dy], [x - dx, y], [x, y - dy]], stroke, .64, 1)
        for (let row = -3; row <= 3; row++) for (let col = -5; col <= 5; col++) {
          const px = x + col * dx / 5.5 + row * dx / 8
          const py = y + row * dy / 3.5
          dot(px, py, 1, stroke, .48)
        }
      }
      for (let i = 0; i < 10; i++) {
        const angle = i * 2.1 + time * .45
        const x = cx + Math.cos(angle) * width * .32
        const y = height * (.25 + (i % 4) * .11) + Math.sin(angle) * height * .07
        line([[x, y], [cx + (x - cx) * .5, height * .54]], i % 2 ? warm : color, .18)
        dot(x, y, i % 3 === 0 ? 2.1 : 1.4, i % 2 ? warm : '#ffd9bd', .82)
      }
    }

    const drawMigration = () => {
      for (let i = 0; i < 96; i++) {
        const y = height * (.14 + i / 96 * .72)
        const wave = Math.sin(time * .55 + i * .17) * height * .08
        const start = width * .08
        const end = width * .98
        context.beginPath()
        context.moveTo(start, y + wave)
        context.bezierCurveTo(width * .34, y - wave * .8, width * .55, y + wave * .5, end, y + Math.sin(i * .1 + time) * height * .035)
        context.strokeStyle = i % 7 === 0 ? warm : color
        context.globalAlpha = .08 + (i % 6) * .014
        context.lineWidth = i % 13 === 0 ? 1.2 : .65
        context.stroke()
        const progress = (time * (.02 + (i % 4) * .004) + i * .19) % 1
        const px = start + (end - start) * progress
        const py = y + wave * (1 - progress) + Math.sin(i * .1 + time) * height * .035 * progress
        if (i % 3 === 0) dot(px, py, i % 9 === 0 ? 1.8 : 1, i % 7 === 0 ? warm : color, .55)
      }
    }

    const drawTrust = () => {
      const rows = 4
      const cols = 5
      for (let row = 0; row < rows; row++) for (let col = 0; col < cols; col++) {
        const x = width * (.12 + col * .17)
        const base = height * (.83 - row * .13)
        const w = width * .13
        const h = height * (.23 + ((row + col) % 3) * .07)
        const skew = w * .16
        const shift = Math.sin(time * .4 + col) * 2
        const c = (row + col) % 3 === 0 ? warm : color
        line([[x, base + shift], [x, base - h], [x + skew, base - h - skew * .35], [x + skew, base + shift - skew * .35], [x, base + shift]], c, .18, .65)
        line([[x, base - h], [x + w, base - h], [x + w + skew, base - h - skew * .35], [x + skew, base - h - skew * .35]], c, .25)
        for (let n = 0; n < 5; n++) {
          const py = base - ((n * h / 5 + time * 5) % h)
          line([[x + 3, py], [x + w - 2, py]], c, .12)
        }
      }
      for (let i = 0; i < 22; i++) {
        const x = ((i * 71 + time * 8) % (width + 24)) - 12
        const y = height * (.15 + (i * 31 % 70) / 100)
        dot(x, y, 1.4, i % 4 ? color : warm, .48)
      }
    }

    const drawIntelligence = () => {
      const nodes = Array.from({ length: 34 }, (_, index) => ({
        x: width * (.08 + ((index * 47) % 88) / 100) + Math.sin(time + index) * 3,
        y: height * (.12 + ((index * 29) % 76) / 100) + Math.cos(time * .8 + index) * 3,
      }))
      nodes.forEach((node, index) => {
        for (let link = 1; link <= 2; link++) {
          const next = nodes[(index + link * (index % 5 + 1)) % nodes.length]
          const dx = node.x - next.x
          const dy = node.y - next.y
          if (dx * dx + dy * dy < (width * .27) ** 2) line([[node.x, node.y], [next.x, next.y]], color, .14)
        }
        const pulse = .7 + (Math.sin(time * 2 + index) + 1) * .7
        dot(node.x, node.y, index % 6 === 0 ? pulse + 1 : pulse, index % 5 === 0 ? warm : color, .72)
      })
    }

    function draw() {
      context.clearRect(0, 0, width, height)
      if (scene === 'hero') drawHero()
      else if (scene === 'migration') drawMigration()
      else if (scene === 'trust') drawTrust()
      else drawIntelligence()
      context.globalAlpha = 1
      time += .012
      frame = 0
    }

    function animateIfNeeded() {
      if (!animate || !inView || !pageVisible || frame) return
      frame = requestAnimationFrame(() => { draw(); animateIfNeeded() })
    }

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      if (!inView) { cancelAnimationFrame(frame); frame = 0 }
      else animateIfNeeded()
    }, { threshold: .05 })
    visibilityObserver.observe(canvas)
    const sizeObserver = new ResizeObserver(resize)
    sizeObserver.observe(canvas)
    const onVisibility = () => {
      pageVisible = !document.hidden
      if (!pageVisible) { cancelAnimationFrame(frame); frame = 0 }
      else animateIfNeeded()
    }
    document.addEventListener('visibilitychange', onVisibility)
    resize()
    if (animate) animateIfNeeded()
    return () => {
      cancelAnimationFrame(frame)
      visibilityObserver.disconnect()
      sizeObserver.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [scene])

  return <canvas ref={canvasRef} className={`databricks-canvas databricks-canvas--${scene}`} aria-hidden="true" />
}
