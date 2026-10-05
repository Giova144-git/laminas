import Lamina from '../components/Lamina.jsx'
import { Grafico } from '../components/Grafico.jsx'
import Comparativa from '../components/Comparativa.jsx'
import Conclusion from '../components/Conclusion.jsx'

/* Margen bruto — recorte del tablero de márgenes (lámina 19 del PDF de
   agosto), sobre fondo blanco.

   Ingresos del mes: exactos, del gráfico de facturación ($117.175,00 →
   $122.579,66). Costo y margen del mes: del gráfico de márgenes, que Power BI
   redondea a miles, así que van con "≈":
     costo  julio ≈ $67 mil → agosto ≈ $73 mil  (≈ +9 %, rango +7,4 a +10,5 %)
     margen julio ≈ $50 mil (≈ 42,7 %) → agosto ≈ $49 mil (≈ 40,2 %)
   Con agosto dentro de la ventana el margen anual pasó de 42,56 % (agosto
   2025 – julio 2026) a 42,21 %.
   Margen de medicinas: lámina 23, 40,49 % contra 37,23 % del período pasado. */
export default function S05Margen() {
  return (
    <Lamina fondo={17} titulo="Margen bruto" subtitulo="Septiembre 2025 – agosto 2026 · frente a septiembre 2024 – agosto 2025">
      <div className="lienzo">
        <div className="grafico-y-rejilla columna-ancha fila-crece">
          <div className="marco-grafico">
            <Grafico name="anual-margen.png" alt="Ingresos, costo promedio y margen bruto por mes" />
          </div>
          <div className="columna-cifras">
            <div className="tarjeta-cifra">
              <div className="rot">Margen bruto · 12 meses</div>
              <div className="val">42,21 %</div>
              <div className="pie">Ingresos $1.249.909,29 · costo promedio $722.474,05</div>
            </div>
            <div className="tarjeta-cifra">
              <div className="rot">Margen en medicinas · 12 meses</div>
              <div className="val val-sm">40,49 % <span className="delta sube" style={{ fontSize: 17 }}>+8,75 %</span></div>
              <div className="pie">12 meses anteriores: 37,23 %</div>
            </div>
            <Comparativa
              rot="Costo del mes · julio → agosto"
              antes="≈ $67 mil"
              ahora="≈ $73 mil"
              delta="≈ +9 %"
              invertirColor
              pie="Ingresos del mes: $117.175 → $122.580"
            />
            <Comparativa
              destacada
              rot="Margen bruto del mes · julio → agosto"
              antes="≈ 42,7 %"
              ahora="≈ 40,2 %"
              delta="≈ −2,5 puntos"
              pie="En dólares: ≈ $50 mil → ≈ $49 mil"
            />
          </div>
        </div>

        <Conclusion>
          Agosto vendió 4,6 % más que julio, pero el costo creció cerca del doble: el margen
          del mes bajó a ≈ 40 % y en dólares quedó en el nivel de julio. Con agosto dentro,
          el margen de los doce meses pasó de 42,56 % a 42,21 %. Medicinas sigue arriba:
          40,49 % contra 37,23 % de los doce meses anteriores.
        </Conclusion>
      </div>
    </Lamina>
  )
}
