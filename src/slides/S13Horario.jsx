import Lamina from '../components/Lamina.jsx'
import { Grafico } from '../components/Grafico.jsx'

/* Horario extendido — recorte de la lámina 25 del PPTX de KPIs: el piloto de
   junio de 2026, con la farmacia abierta de 19:00 a 22:00 durante 25 días.
   El horario habitual de cierre son las 7:00 pm. */
export default function S13Horario() {
  return (
    <Lamina fondo={14} titulo="Horario extendido" subtitulo="Piloto de junio 2026 · 25 días">
      <div className="lienzo">
        <div className="bloque-grafico ancho fila-crece">
          <div className="marco-grafico">
            <Grafico
              name="horario-extendido.png"
              alt="Facturas y facturación por bloque de treinta minutos, de 19:00 a 22:00"
            />
          </div>
          <div className="columna-cifras">
            <div className="tarjeta-cifra">
              <div className="rot">Facturas del piloto</div>
              <div className="val val-sm">318</div>
            </div>
            <div className="tarjeta-cifra">
              <div className="rot">Facturado</div>
              <div className="val val-sm">$3.783,27</div>
              <div className="pie">$151,33 por día</div>
            </div>
            <div className="tarjeta-cifra">
              <div className="rot">Ticket de la franja</div>
              <div className="val val-sm">$11,90</div>
              <div className="pie">Ticket general: $22,80</div>
            </div>
          </div>
        </div>

        <div className="rejilla rejilla-3" style={{ minHeight: 172 }}>
          <div className="tarjeta-cifra destacada">
            <div className="rot">Hasta las 8:30 pm</div>
            <div className="val val-sm">$2.843,39</div>
            <div className="pie">75 % de lo facturado, en la mitad de las horas</div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">De 8:30 a 10:00 pm</div>
            <div className="val val-sm">$939,88</div>
            <div className="pie">25 % restante, al mismo costo de operación</div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">Proyección mensual a 8:30 pm</div>
            <div className="val val-sm">$3.412</div>
            <div className="pie">$113,74 por día sobre 30 días</div>
          </div>
        </div>

        <div className="banda-nota">
          <div className="nota">
            El ticket de la franja nocturna está por debajo del general: la extensión
            se mide por tráfico y margen absoluto, no por ticket. A margen bruto del
            período aporta unos $1.452 mensuales, que es el techo de costo
            incremental que admite la operación.
          </div>
        </div>
      </div>
    </Lamina>
  )
}
