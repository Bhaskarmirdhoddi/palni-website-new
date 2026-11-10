import { useEffect, useRef } from 'react'

function readAccent() {
  return getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#E0AA4E'
}

export default function BackgroundAtmosphere() {
  const canvasRef = useRef(null)
  const pointerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d', { alpha: true })
    if (!canvas || !context) return undefined

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const particles = []
    let width = 0
    let height = 0
    let frameId = 0
    let lastTime = 0
    let accent = readAccent()
    let motionReduced = motionPreference.matches

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      const count = Math.min(110, Math.max(24, Math.round((width * height) / 28000)))
      particles.length = 0
      for (let index = 0; index < count; index += 1) {
        particles.push({ x: Math.random() * width, y: Math.random() * height, phase: Math.random() * Math.PI * 2, speed: 5 + Math.random() * 8 })
      }
      draw(0, true)
      start()
    }

    function draw(deltaSeconds, staticFrame = false) {
      context.clearRect(0, 0, width, height)
      context.strokeStyle = accent
      context.fillStyle = accent
      context.lineWidth = .7
      context.globalAlpha = .2
      for (const particle of particles) {
        const angle = Math.sin(particle.x * .003 + particle.phase) * .8 + Math.cos(particle.y * .0024 - particle.phase) * .6
        const dx = Math.cos(angle) * particle.speed * deltaSeconds
        const dy = Math.sin(angle) * particle.speed * deltaSeconds
        const nextX = particle.x + dx * (staticFrame ? 1 : 1)
        const nextY = particle.y + dy * (staticFrame ? 1 : 1)
        if (!staticFrame) {
          particle.x = nextX < 0 ? width : nextX > width ? 0 : nextX
          particle.y = nextY < 0 ? height : nextY > height ? 0 : nextY
        }
        context.beginPath()
        context.moveTo(particle.x, particle.y)
        context.lineTo(particle.x + dx * 2.2, particle.y + dy * 2.2)
        context.stroke()
        context.globalAlpha = .42
        context.fillRect(particle.x - 1, particle.y - 1, 2, 2)
        context.globalAlpha = .2
      }
      context.globalAlpha = 1
    }

    function animate(time) {
      frameId = 0
      if (document.hidden || motionReduced) return
      const delta = lastTime ? Math.min((time - lastTime) / 1000, .04) : 0
      lastTime = time
      draw(delta)
      frameId = requestAnimationFrame(animate)
    }

    function start() {
      if (!motionReduced && !document.hidden && !frameId) frameId = requestAnimationFrame(animate)
    }

    function stop() {
      if (frameId) cancelAnimationFrame(frameId)
      frameId = 0
      lastTime = 0
    }

    function handleVisibility() {
      if (document.hidden) stop()
      else start()
    }

    function handleMotionChange(event) {
      motionReduced = event.matches
      if (motionReduced) {
        stop()
        draw(0, true)
      } else start()
    }

    function handlePointer(event) {
      if (!pointerRef.current || event.pointerType === 'touch' || motionReduced) return
      pointerRef.current.style.left = `${event.clientX}px`
      pointerRef.current.style.top = `${event.clientY}px`
      pointerRef.current.style.opacity = '1'
    }

    const observer = new MutationObserver(() => { accent = readAccent() })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-svc'] })
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(document.documentElement)
    document.addEventListener('visibilitychange', handleVisibility)
    window.addEventListener('pointermove', handlePointer, { passive: true })
    motionPreference.addEventListener?.('change', handleMotionChange)
    resize()

    return () => {
      stop()
      resizeObserver.disconnect()
      observer.disconnect()
      document.removeEventListener('visibilitychange', handleVisibility)
      window.removeEventListener('pointermove', handlePointer)
      motionPreference.removeEventListener?.('change', handleMotionChange)
    }
  }, [])

  return <div className="bg" aria-hidden="true">
    <div className="bg__tone bg__tone--a" />
    <div className="bg__tone bg__tone--b" />
    <div className="bg__tone bg__tone--c" />
    <div className="bg__pointer" ref={pointerRef} />
    <canvas className="bg__field" ref={canvasRef} />
    <div className="bg__grain" />
  </div>
}
