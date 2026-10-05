import Lamina from '../components/Lamina.jsx'
import { asset } from '../rutas.js'

/* Portada — calca la lámina 2 de la plantilla corporativa: masa amarilla con
   la fachada al fondo, panel blanco girado a la derecha y el título abajo a
   la izquierda. Donde la plantilla lleva el sello "50 Años Innovando" va el
   logotipo de la farmacia (el sello se borró del fondo, el hueco blanco es
   exactamente el que ocupaba). */
export default function S01Portada() {
  return (
    <Lamina fondo={2} sinCabecera sinSello className="lam-portada">
      {/* logotipo de la farmacia en el panel blanco */}
      <div
        className="anim"
        style={{
          position: 'absolute',
          left: 1101, top: 288, width: 698, height: 509,
          display: 'grid', placeItems: 'center', zIndex: 10,
          animationDelay: '0.15s',
        }}
      >
        <img
          src={asset('/assets/logos/logotipo.png')}
          alt="Farmacia Policlínica Metropolitana"
          style={{ height: 404, display: 'block' }}
        />
      </div>

      {/* filiación institucional bajo el logotipo */}
      <div
        className="anim"
        style={{
          position: 'absolute', left: 1101, top: 816, width: 698,
          textAlign: 'center', zIndex: 10, animationDelay: '0.3s',
        }}
      >
        <div style={{
          fontFamily: 'var(--fuente-titulo)', fontWeight: 700, fontSize: 22,
          letterSpacing: '0.22em', color: 'var(--fm-azul)',
        }}>
          POLICLÍNICA METROPOLITANA
        </div>
        <div style={{
          height: 3, width: 132, margin: '10px auto 0',
          borderRadius: 2, background: 'var(--fm-amarillo-marca)',
        }} />
      </div>

      {/* título sobre la masa amarilla, en la misma posición de la plantilla.
          El mes va con cuerpo de título (no de subtítulo) porque ES el título:
          "Gestión operativa · Agosto 2026". */}
      <div style={{ position: 'absolute', left: 58, top: 448, zIndex: 10, maxWidth: 900 }}>
        <h1 className="anim" style={{ fontSize: 84, lineHeight: 1.02, color: 'var(--fm-tinta)', animationDelay: '0.08s' }}>
          Gestión operativa
        </h1>
        <div
          className="anim"
          style={{
            fontFamily: 'var(--fuente-titulo)', fontWeight: 700, fontSize: 64, lineHeight: 1.05,
            marginTop: 6, color: 'var(--fm-azul)', animationDelay: '0.14s',
          }}
        >
          Agosto 2026
        </div>
      </div>
    </Lamina>
  )
}
