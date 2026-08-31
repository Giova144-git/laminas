import Lamina from '../components/Lamina.jsx'
import { Grafico } from '../components/Grafico.jsx'
import Comparativa from '../components/Comparativa.jsx'

/* Facturación — recorte directo del gráfico mensual del tablero general
   (lámina 14 del PPTX de KPIs): período actual contra período pasado.

   La cuarta tarjeta cierra el mes: julio contra junio. Los importes de esos
   dos meses se leen del gráfico de márgenes, que Power BI redondea a miles;
   por eso julio va con "≈". Junio sí está etiquetado al céntimo en el propio
   gráfico de facturación. */
export default function S04Facturacion() {
  return (
    <Lamina fondo={5} titulo="Facturación" subtitulo="Agosto 2025 – Julio 2026">
      <div className="lienzo">
        <div className="marco-grafico" style={{ flex: '0 0 430px' }}>
          <Grafico
            name="anual-facturacion.png"
            alt="Facturación mensual, período actual contra período pasado"
          />
        </div>

        <div className="rejilla rejilla-4 fila-crece">
          <div className="tarjeta-cifra">
            <div className="rot">Facturación del período</div>
            <div className="val val-sm">$1.226.616,10 <span className="delta sube" style={{ fontSize: 17 }}>+12,7 %</span></div>
            <div className="pie">Período anterior: $1.088.628,80</div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">Facturas emitidas</div>
            <div className="val val-sm">53.818 <span className="delta sube" style={{ fontSize: 17 }}>+25,3 %</span></div>
            <div className="pie">Período anterior: 43.166</div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">Ticket promedio</div>
            <div className="val val-sm">$22,80 <span className="delta baja" style={{ fontSize: 17 }}>−9,7 %</span></div>
            <div className="pie">Período anterior: $25,24</div>
          </div>
          <Comparativa
            destacada
            rot="Cierre del mes · junio → julio"
            junio="$122.281"
            julio="≈ $117 mil"
            delta="−4 %"
            pie="Junio fue el mes más alto del período"
          />
        </div>

        <div className="banda-nota">
          <div className="nota">
            Junio cerró en $122.281,06, el mes más alto de los doce. Julio bajó cerca
            de un 4 % frente a junio y quedó por debajo de los $119.826,04 de julio
            2025: es el único mes del cierre por debajo de su equivalente del período
            anterior.
          </div>
        </div>
      </div>
    </Lamina>
  )
}
