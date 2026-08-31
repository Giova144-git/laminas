import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import NavigationBar from './NavigationBar.jsx'

/* Motor del deck: lienzo fijo 1920×1080 escalado al viewport, navegación
   por teclado/táctil, pasos internos por lámina, una única transición
   (disolución con deriva direccional) y pantalla completa.

   Es el mismo motor del pitch de Kuadra, con la nomenclatura y el cromo
   traducidos a la identidad de la farmacia. */
export default function DeckStage({ slides }) {
  const [index, setIndex] = useState(0)
  const [step, setStep] = useState(0)
  const [scale, setScale] = useState(1)
  const [fullscreen, setFullscreen] = useState(false)
  const [back, setBack] = useState(false)
  const posRef = useRef({ i: 0, s: 0 })

  useEffect(() => { posRef.current = { i: index, s: step } }, [index, step])

  const stepsOf = (i) => slides[i].steps || 1

  useEffect(() => {
    /* visualViewport: en móvil la barra del navegador aparece y desaparece;
       el lienzo se reajusta siempre al área realmente visible */
    const fit = () => {
      const vv = window.visualViewport
      const vw = vv ? vv.width : window.innerWidth
      const vh = vv ? vv.height : window.innerHeight
      const chrome = document.fullscreenElement ? 0 : vw < 820 ? 44 : 56
      setScale(Math.min(vw / 1920, (vh - chrome) / 1080) * (document.fullscreenElement ? 1 : 0.99))
    }
    fit()
    window.addEventListener('resize', fit)
    window.addEventListener('orientationchange', fit)
    document.addEventListener('fullscreenchange', fit)
    window.visualViewport?.addEventListener('resize', fit)
    return () => {
      window.removeEventListener('resize', fit)
      window.removeEventListener('orientationchange', fit)
      document.removeEventListener('fullscreenchange', fit)
      window.visualViewport?.removeEventListener('resize', fit)
    }
  }, [])

  /* pantalla completa: sin barra de navegación ni numeración */
  useEffect(() => {
    const onFs = () => setFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onFs)
    return () => document.removeEventListener('fullscreenchange', onFs)
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen?.()
    } else {
      document.documentElement.requestFullscreen?.({ navigationUI: 'hide' })?.catch?.(() => {})
    }
  }, [])

  /* cambio de lámina: la nueva entra con disolución + deriva sobre el fondo
     del escenario. La saliente se desmonta al instante — re-montar una copia
     entera (fondos, tarjetas, gráficos) en el mismo frame del clic tiene un
     costo síncrono que se siente como un tirón al arrancar la transición. */
  const jump = useCallback((i, s = 0) => {
    const ci = Math.max(0, Math.min(slides.length - 1, i))
    const cur = posRef.current
    if (ci === cur.i) { setStep(s); return }
    setBack(ci < cur.i)
    setIndex(ci)
    setStep(s)
  }, [slides.length])

  const go = useCallback((i, s = 0) => jump(i, s), [jump])

  const next = useCallback(() => {
    const { i, s } = posRef.current
    if (s < stepsOf(i) - 1) { setStep(s + 1); return }
    if (i < slides.length - 1) jump(i + 1, 0)
  }, [jump, slides.length]) // eslint-disable-line react-hooks/exhaustive-deps

  const prev = useCallback(() => {
    const { i, s } = posRef.current
    if (s > 0) { setStep(s - 1); return }
    if (i > 0) jump(i - 1, stepsOf(i - 1) - 1)
  }, [jump]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const t = e.target
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown' || e.key === 'ArrowDown') { e.preventDefault(); next() }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'ArrowUp') { e.preventDefault(); prev() }
      else if (e.key === 'Home') go(0)
      else if (e.key === 'End') go(slides.length - 1)
      else if (e.key === 'f' || e.key === 'F') toggleFullscreen()
      else if (/^[1-9]$/.test(e.key)) go(Number(e.key) - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, go, slides.length, toggleFullscreen])

  /* navegación táctil/click: tap en el lado derecho avanza, en el izquierdo
     retrocede; el swipe horizontal también navega */
  const pressRef = useRef(null)
  const onPointerDown = (e) => { pressRef.current = { x: e.clientX, y: e.clientY } }
  const onPointerUp = (e) => {
    const p = pressRef.current
    pressRef.current = null
    if (!p) return
    const dx = e.clientX - p.x
    const dy = e.clientY - p.y
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next()
      else prev()
      return
    }
    if (Math.abs(dx) < 12 && Math.abs(dy) < 12) {
      if (e.clientX < window.innerWidth / 3) prev()
      else next()
    }
  }

  const Activa = slides[index].El
  const oscura = slides[index].oscura === true

  /* Render estático de todas las láminas para Ctrl+P → PDF. MEMOIZADO: sin
     esto, cada navegación re-renderizaría todas las láminas ocultas en el
     mismo frame del clic — costo JS síncrono que se suma al tirón de la
     transición sin que nada visible cambie. */
  const copiaImpresion = useMemo(() => (
    <div className="contenedor-impresion">
      {slides.map((s) => {
        const El = s.El
        return (
          <div key={s.id} style={{ position: 'relative' }}>
            <El step={(s.steps || 1) - 1} />
          </div>
        )
      })}
    </div>
  ), [slides])

  return (
    <>
      <div
        className={`stage ${oscura ? 'stage-oscuro' : ''}`}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <div
          style={{
            position: 'absolute',
            top: fullscreen ? '50%' : 'calc(50% - 24px)',
            left: '50%',
            width: 1920,
            height: 1080,
            marginLeft: -960,
            marginTop: -540,
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
          }}
        >
          <div
            key={index}
            className={`lamina-entra${back ? ' atras' : ''} entra-${slides[index].id}`}
            style={{ width: 1920, height: 1080, position: 'relative', zIndex: 1 }}
          >
            <Activa step={step} />
          </div>
        </div>
      </div>

      {!fullscreen && (
        <NavigationBar
          slides={slides}
          current={index}
          onGo={go}
          onPrev={prev}
          onNext={next}
          onFullscreen={toggleFullscreen}
          oscura={oscura}
        />
      )}

      {copiaImpresion}
    </>
  )
}
