import Lamina from '../components/Lamina.jsx'
import { Grafico } from '../components/Grafico.jsx'
import Comparativa from '../components/Comparativa.jsx'
import Conclusion from '../components/Conclusion.jsx'

/* Facturación — recorte del gráfico mensual del tablero general (lámina 14
   del PDF de agosto): período actual contra período pasado.

   Todas las cifras del mes están etiquetadas al céntimo en el propio gráfico:
   julio $117.175,00 (−4,18 % sobre junio), agosto $122.579,66 (+4,61 %),
   junio $122.281,06, julio 2025 $119.826,04 y agosto 2025 $99.257,22.
   Agosto es el máximo de los doce meses. */
export default function S04Facturacion() {
  return (
    <Lamina fondo={9} titulo="Facturación" subtitulo="Septiembre 2025 – agosto 2026 · frente a septiembre 2024 – agosto 2025">
      <div className="lienzo">
        <div className="marco-grafico fila-crece">
          <Grafico
            name="anual-facturacion.png"
            alt="Facturación mensual, período actual contra período pasado"
          />
        </div>

        <div className="rejilla rejilla-4" style={{ minHeight: 200 }}>
          <div className="tarjeta-cifra">
            <div className="rot">Facturación · 12 meses</div>
            <div className="val val-sm">$1.249.909,29 <span className="delta sube" style={{ fontSize: 17 }}>+13,1 %</span></div>
            <div className="pie">12 meses anteriores: $1.105.357</div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">Facturas emitidas · 12 meses</div>
            <div className="val val-sm">55.665 <span className="delta sube" style={{ fontSize: 17 }}>+27,7 %</span></div>
            <div className="pie">12 meses anteriores: 43.776</div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">Ticket promedio · 12 meses</div>
            <div className="val val-sm">$22,46 <span className="delta baja" style={{ fontSize: 17 }}>−11,1 %</span></div>
            <div className="pie">12 meses anteriores: $25,27</div>
          </div>
          <Comparativa
            destacada
            rot="Cierre del mes · julio → agosto"
            antes="$117.175"
            ahora="$122.580"
            delta="+4,6 %"
            pie="El mes más alto de los últimos doce"
          />
        </div>

        <Conclusion>
          Agosto cerró en $122.579,66: el mes más alto de los doce, un 4,6 % sobre julio
          ($117.175,00) y un 23,5 % sobre agosto 2025 ($99.257,22). Julio había quedado por
          debajo de julio 2025 ($119.826,04); agosto recuperó la tendencia.
        </Conclusion>
      </div>
    </Lamina>
  )
}
