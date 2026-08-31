import { useEffect, useRef, useState } from 'react'

/* Cifra que cuenta desde 0 hasta su valor al montarse: la micro-anticipación
   del movimiento fija el número en memoria. Respeta prefers-reduced-motion
   mostrando el valor final de inmediato.

   Formato es-VE por defecto: millar con punto y decimal con coma, igual que
   los tableros de Power BI de los que salen las cifras ($1.226.616,10). */
export default function CountUp({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
  decimalChar = ',',
  thousands = true,
  duration = 900,
  delay = 0,
  className,
}) {
  const [val, setVal] = useState(0)
  const rafRef = useRef(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVal(to)
      return
    }
    let start
    const t0 = setTimeout(() => {
      const tick = (now) => {
        if (start === undefined) start = now
        const t = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - t, 3) /* ease-out cúbico */
        setVal(t < 1 ? to * eased : to)
        if (t < 1) rafRef.current = requestAnimationFrame(tick)
      }
      rafRef.current = requestAnimationFrame(tick)
    }, delay)
    return () => {
      clearTimeout(t0)
      cancelAnimationFrame(rafRef.current)
    }
  }, [to, duration, delay])

  const fixed = Math.abs(val).toFixed(decimals)
  const [intPart, decPart] = fixed.split('.')
  const intText = thousands ? Number(intPart).toLocaleString('es-VE') : intPart
  const signo = val < 0 ? '−' : ''

  return (
    <span className={className}>
      {signo + prefix + intText + (decPart ? decimalChar + decPart : '') + suffix}
    </span>
  )
}
