import { asset } from '../rutas.js'
/* Pantalla de carga: bloquea la presentación (nada se monta detrás) hasta
   que la tipografía, los logos, los 17 fondos de la plantilla y los
   recortes de los tableros estén en memoria. Sin esto, la primera pasada
   por el deck muestra los fondos apareciendo de golpe lámina a lámina. */
export default function LoadingScreen({ progress, fadingOut }) {
  return (
    <div className={`pantalla-carga ${fadingOut ? 'se-va' : ''}`} role="status" aria-live="polite">
      <img className="carga-logo" src={asset('/assets/logos/isotipo.png')} alt="" />
      <div className="carga-texto">Cargando presentación</div>
      <div className="carga-pista">
        <div className="carga-relleno" style={{ transform: `scaleX(${progress / 100})` }} />
      </div>
      <div className="carga-pct">{progress}%</div>
    </div>
  )
}
