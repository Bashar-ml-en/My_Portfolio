import { useEffect, useRef, useState } from 'react'

export function AnimatedCounter({ value, suffix = '', duration = 1400 }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  const numericValue = typeof value === 'string' ? parseFloat(value) : value
  const isDecimal = String(value).includes('.')
  const decimalPlaces = isDecimal ? (String(value).split('.')[1] || '').length : 0

  useEffect(() => {
    const node = ref.current
    if (!node || hasAnimated.current) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setDisplay(numericValue)
      hasAnimated.current = true
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const start = performance.now()

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(numericValue * eased)
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [numericValue, duration])

  return (
    <strong ref={ref}>
      {display.toFixed(decimalPlaces)}{suffix}
    </strong>
  )
}
