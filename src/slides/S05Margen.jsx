import Lamina from '../components/Lamina.jsx'
import { Grafico } from '../components/Grafico.jsx'
import Comparativa from '../components/Comparativa.jsx'

/* Margen bruto — recorte del tablero de márgenes (lámina 19 del PPTX de KPIs).
   Esta lámina va sobre blanco liso: es la equivalente a la lámina 6 de la
   plantilla, la única del set que no trae imagen de fondo.

   La fila inferior suma el cierre de mes. Ingresos y costo van en importe,
   porque son magnitudes; el margen va en PORCENTAJE, que es la métrica de
   negocio — en dólares caía un 4 % arrastrado por el volumen y eso leía como
   deterioro cuando la tasa se mantuvo. Los importes en dólares quedan al pie
   de esa tarjeta para no perder el dato.

   Power BI redondea esos importes a miles, así que todo va con "≈" y la
   variación del margen se declara estable en vez de fingir décimas: con esa
   redondeo, $52/$122 y $50/$117 no distinguen una décima de otra. */
export default function S05Margen() {
  return (
    <Lamina fondo={null} titulo="Margen bruto" subtitulo="Agosto 2025 – Julio 2026">
      <div className="lienzo">
        <div className="bloque-grafico fila-crece">
          <div className="marco-grafico">
            <Grafico name="anual-margen.png" alt="Ingresos, costo promedio y margen bruto por mes" />
          </div>
          <div className="columna-cifras">
            <div className="tarjeta-cifra">
              <div className="rot">Ingresos</div>
              <div className="val val-sm">$1.226.616,10</div>
            </div>
            <div className="tarjeta-cifra">
              <div className="rot">Costo promedio</div>
              <div className="val val-sm">$704.729,06</div>
            </div>
            <div className="tarjeta-cifra destacada">
              <div className="rot">Margen bruto</div>
              <div className="val">42,56 %</div>
            </div>
          </div>
        </div>

        <div className="rejilla rejilla-4" style={{ minHeight: 196 }}>
          <div className="tarjeta-cifra">
            <div className="rot">Margen en medicinas</div>
            <div className="val val-sm">40,49 % <span className="delta sube" style={{ fontSize: 17 }}>+10,87 %</span></div>
            <div className="pie">Período anterior: 36,52 %</div>
          </div>
          <Comparativa
            rot="Ingresos del mes · junio → julio"
            junio="≈ $122 mil"
            julio="≈ $117 mil"
            delta="≈ −4 %"
          />
          <Comparativa
            rot="Costo del mes · junio → julio"
            junio="≈ $71 mil"
            julio="≈ $67 mil"
            delta="≈ −6 %"
            invertirColor
            pie="Bajar el costo con la venta juega a favor"
          />
          <Comparativa
            destacada
            rot="Margen bruto del mes · junio → julio"
            junio="≈ 42,6 %"
            julio="≈ 42,7 %"
            delta="estable"
            pie="Se sostuvo con menos volumen · ≈ $52 mil → ≈ $50 mil"
          />
        </div>
      </div>
    </Lamina>
  )
}
