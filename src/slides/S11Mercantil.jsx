import Lamina from '../components/Lamina.jsx'
import { Grafico } from '../components/Grafico.jsx'

/* Mercantil Seguros — recortes de la lámina 12 del PPTX de KPIs: la serie
   semanal de altas Mercantil con compra y el reparto entre contado y PAMM.
   PAMM: autogestión del asegurado — monta su orden, retira en la farmacia y
   Mercantil paga después a la farmacia. */
export default function S11Mercantil() {
  return (
    <Lamina fondo={12} cabeceraClara titulo="Mercantil Seguros" subtitulo="Abril – julio 2026">
      <div className="lienzo">
        <div
          className="fila-crece"
          style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 430px', gap: 26 }}
        >
          <div style={{ display: 'grid', gridTemplateRows: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 20, minHeight: 0 }}>
            <div className="marco-grafico">
              <Grafico name="mercantil-semanas.png" alt="Pacientes de alta Mercantil con compras en la farmacia, por semana" />
            </div>
            <div className="marco-grafico">
              <Grafico name="mercantil-pie.png" alt="Reparto entre pago de contado y PAMM" />
            </div>
          </div>
          <div className="columna-cifras">
            <div className="tarjeta-cifra">
              <div className="rot">Pacientes de alta Mercantil</div>
              <div className="val val-sm">951</div>
            </div>
            <div className="tarjeta-cifra destacada">
              <div className="rot">Participación</div>
              <div className="val">40,17 %</div>
              <div className="pie">General del período: 25,79 %</div>
            </div>
            <div className="tarjeta-cifra">
              <div className="rot">Ticket promedio</div>
              <div className="val val-sm">$71,59</div>
            </div>
            <div className="tarjeta-cifra">
              <div className="rot">Forma de pago</div>
              <div className="val val-sm">251 contado · 131 PAMM</div>
              <div className="pie">65,71 % de contado · 34,29 % por cobertura</div>
            </div>
          </div>
        </div>

        <div className="banda-nota">
          <div className="nota">
            PAMM es la autogestión del asegurado: el paciente monta su orden, retira
            en la farmacia y Mercantil paga después. Sobre 149 facturas PAMM el
            promedio fue de $69,50 y el facturado por esa vía alcanzó $10.355,24.
          </div>
        </div>
      </div>
    </Lamina>
  )
}
