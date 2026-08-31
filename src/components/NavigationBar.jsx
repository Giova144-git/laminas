import { asset } from '../rutas.js'
/* Cromo de presentación:
   - contador con el isotipo de la farmacia abajo-izquierda, que cambia de
     color según el fondo de la lámina (amarillo sobre claro, blanco sobre azul)
   - pista de progreso central con el isotipo como marcador deslizante y
     segmentos clicables
   - etiqueta de la lámina abajo-derecha */
export default function NavigationBar({ slides, current, onGo, onPrev, onNext, onFullscreen, oscura }) {
  const n = slides.length
  const pct = n > 1 ? (current / (n - 1)) * 100 : 0
  const iso = asset(oscura ? '/assets/logos/isotipo-negativo.png' : '/assets/logos/isotipo.png')

  return (
    <div className={`cromo ${oscura ? 'oscuro' : ''}`} aria-label="Navegación de láminas">
      <div className="cromo-esquina">
        <img src={iso} alt="" />
        <span>
          {String(current + 1).padStart(2, '0')} <em>/</em> {String(n).padStart(2, '0')}
        </span>
      </div>

      <div className="cromo-centro">
        <button className="btn" onClick={onPrev} aria-label="Lámina anterior">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="pista">
          <div className="riel" />
          {/* relleno y marcador viajan con transform (compositor GPU) — nunca
              width/left, que repintarían la pista en cada cambio de lámina */}
          <div className="relleno" style={{ transform: `translateY(-50%) scaleX(${pct / 100})` }} />
          {slides.map((s, i) => (
            <button
              key={s.id}
              className="seg"
              style={{ left: `${(i / n) * 100}%`, width: `${100 / n}%` }}
              onClick={() => onGo(i)}
              aria-label={`Ir a ${s.label}`}
              title={s.label}
            />
          ))}
          <div className="riel-marcador" style={{ transform: `translateX(${pct}%)` }}>
            <img className="marcador" src={asset('/assets/logos/isotipo.png')} alt="" />
          </div>
        </div>

        <button className="btn" onClick={onNext} aria-label="Lámina siguiente">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="cromo-derecha">
        <div className="cromo-etiqueta">{slides[current].label}</div>
        <button
          className="btn"
          onClick={onFullscreen}
          aria-label="Pantalla completa (F)"
          title="Pantalla completa (F)"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3H5a2 2 0 0 0-2 2v3" />
            <path d="M16 3h3a2 2 0 0 1 2 2v3" />
            <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
            <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
          </svg>
        </button>
      </div>
    </div>
  )
}
