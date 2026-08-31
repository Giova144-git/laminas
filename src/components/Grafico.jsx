import { useState } from 'react'
import { asset } from '../rutas.js'

/* Recorte de un gráfico del tablero de KPIs (PPTX "KPI's farmacia Julio 26").
   Los gráficos NO se re-dibujan: se muestran tal como los generó Power BI,
   recortados y enmarcados. Si el archivo aún no existe, deja un marco con
   el nombre exacto que espera, para poder soltarlo después sin tocar código. */
export function Grafico({ name, className = '', style = {}, alt = '' }) {
  const [falta, setFalta] = useState(false)

  if (!falta) {
    return (
      <img
        src={asset(`/assets/graficos/${name}`)}
        onError={() => setFalta(true)}
        className={`grafico ${className}`}
        style={style}
        alt={alt}
      />
    )
  }
  return (
    <div className={`marco-ph ${className}`} style={style}>
      <div style={{ textAlign: 'center', padding: 20 }}>
        <div className="ph-nombre">{name}</div>
        <div className="ph-pista">recorte pendiente</div>
      </div>
    </div>
  )
}

/* Icono de la biblioteca corporativa (lámina 21 del PPTX de plantillas). */
export function Icono({ n, size = 64, className = '', style = {} }) {
  return (
    <img
      className={`icono ${className}`}
      src={asset(`/assets/iconos/icono-${String(n).padStart(2, '0')}.png`)}
      style={{ width: size, height: size, ...style }}
      alt=""
    />
  )
}
