import Lamina from '../components/Lamina.jsx'
import { Grafico } from '../components/Grafico.jsx'
import Comparativa from '../components/Comparativa.jsx'
import Conclusion from '../components/Conclusion.jsx'

/* Rentabilidad del convenio — recorte de la lámina 13 del PDF de agosto
   (márgenes del convenio Mercantil, marzo – agosto 2026).

   Agosto aislado, por diferencia con la tarjeta de marzo – julio del deck
   anterior (ingresos $10.403,95, costo $5.473,55):
     ingresos agosto $6.892,09 (cuadra con el facturado de la lámina 20)
     costo agosto    $3.718,41
     margen agosto   $3.173,68 → 39 % de los $8.104,08 de margen en
                     dólares acumulados desde marzo
   El margen superior al de la farmacia es INTENCIONAL: los precios del
   convenio se subieron para compensar el cobro a 30 días con devaluación.
   Se presenta como protección que funcionó, no como resultado extraordinario.
   El margen porcentual del tablero (44,92 % → 45,38 %) no sale de
   (ingresos − costo) / ingresos, así que no se recalcula por mes: se cita el
   del tablero y su movimiento. */
export default function S12Convenio() {
  return (
    <Lamina fondo={9} titulo="Rentabilidad del convenio" subtitulo="Mercantil Seguros · marzo – agosto 2026">
      <div className="lienzo">
        <div className="grafico-y-rejilla columna-ancha fila-crece">
          <div className="marco-grafico">
            <Grafico name="mercantil-margen.png" alt="Ingresos, costo promedio y margen bruto del convenio Mercantil" />
          </div>
          <div className="columna-cifras">
            <div className="tarjeta-cifra">
              <div className="rot">Ingresos del convenio · <span className="sin-corte">marzo – agosto</span></div>
              <div className="val val-sm">$17.296,04</div>
              <div className="pie">Costo promedio: $9.191,96</div>
            </div>
            <div className="tarjeta-cifra destacada">
              <div className="rot">Margen bruto · <span className="sin-corte">marzo – agosto</span></div>
              <div className="val">45,38 %</div>
              <div className="pie">Precio protegido por el cobro a 30 días · farmacia: 42,21 %</div>
            </div>
            <Comparativa
              rot="Margen acumulado · a julio → a agosto"
              antes="44,92 %"
              ahora="45,38 %"
              delta="+0,46 puntos"
              pie="La protección se sostuvo con el triple de volumen"
            />
            <div className="tarjeta-cifra">
              <div className="rot">Margen en dólares de agosto</div>
              <div className="val val-sm">$3.173,68</div>
              <div className="pie">39 % del acumulado desde marzo · ingresos $6.892,09, costo $3.718,41</div>
            </div>
          </div>
        </div>

        <Conclusion>
          El margen del convenio está por encima del de la farmacia (45,38 % contra 42,21 %)
          por diseño: sus precios incluyen la protección por el cobro a 30 días con devaluación.
          No es un resultado extraordinario, es la prevención funcionando, y se sostuvo con el
          triple de volumen en agosto.
        </Conclusion>
      </div>
    </Lamina>
  )
}
