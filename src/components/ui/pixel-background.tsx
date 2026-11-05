import { useEffect, useRef } from 'react'

type PixelBackgroundProps = {
  gap?: number
  speed?: number
  colors?: string
  opacity?: number
  direction?: 'top' | 'bottom'
  className?: string
}

/** Lightweight canvas version of the pixel background used in the supplied hero. */
export default function PixelBackground({
  gap = 9,
  speed = 40,
  colors = '#d8b8bf,#e5d6d4,#cba6b0,#efe4df',
  opacity = 0.55,
  direction = 'top',
  className = '',
}: PixelBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    const palette = colors.split(',')
    let frame = 0
    let tick = 0
    let width = 0
    let height = 0
    let visible = true
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = bounds.width
      height = bounds.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      draw()
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const seed = Math.abs(Math.sin(x * 12.9898 + y * 78.233) * 43758.5453) % 1
          const fade = direction === 'top' ? 1 - y / Math.max(height, 1) : y / Math.max(height, 1)
          const pulse = reducedMotion.matches ? 0.78 : 0.62 + 0.38 * Math.sin(tick + x * 0.009 + y * 0.014)
          context.globalAlpha = Math.max(0, fade) * opacity * (0.24 + seed * 0.55) * pulse
          context.fillStyle = palette[Math.floor(seed * palette.length)]
          const size = 1.6 + seed * 2.1
          context.fillRect(x, y, size, size)
        }
      }
      context.globalAlpha = 1
    }

    const animate = () => {
      frame = 0
      if (!visible || document.hidden || reducedMotion.matches) return
      tick += 0.008 * (speed / 40)
      draw()
      frame = window.requestAnimationFrame(animate)
    }
    const sync = () => {
      window.cancelAnimationFrame(frame)
      draw()
      if (visible && !document.hidden && !reducedMotion.matches) frame = window.requestAnimationFrame(animate)
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      sync()
    })
    intersectionObserver.observe(canvas)
    document.addEventListener('visibilitychange', sync)
    reducedMotion.addEventListener('change', sync)
    resize()
    sync()

    return () => {
      window.cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      document.removeEventListener('visibilitychange', sync)
      reducedMotion.removeEventListener('change', sync)
    }
  }, [colors, direction, gap, opacity, speed])

  return <canvas ref={canvasRef} className={`pixel-background ${className}`} aria-hidden="true" />
}
