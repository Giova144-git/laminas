import Lamina from '../components/Lamina.jsx'
import { Grafico } from '../components/Grafico.jsx'
import Comparativa from '../components/Comparativa.jsx'
import Conclusion from '../components/Conclusion.jsx'

/* Mercantil Seguros — recortes de la lámina 20 del PDF de agosto ("Cuadro
   general de facturación FranRos Mercantil"): facturas y facturado por mes.
   La serie mensual cuadra con las tarjetas: 2+87+123+138+148+186 = 684
   facturas y $16.829,50.

   El informe de agosto no trae el desglose contado / PAMM ni la serie
   semanal de la lámina anterior (su lámina 12 repite la 11), así que esta
   lámina se arma con lo que sí trae.

   Facturado por factura: julio $2.531,60 / 148 = $17,11 · agosto
   $6.892,10 / 186 = $37,05. Peso en la venta del mes: julio 2,16 %
   ($2.531,60 / $117.175,00) · agosto 5,62 % ($6.892,10 / $122.579,66). */
export default function S11Mercantil() {
  return (
    <Lamina fondo={17} titulo="Mercantil Seguros" subtitulo="Convenio · marzo – agosto 2026">
      <div className="lienzo">
        <div
          className="fila-crece"
          style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 420px', gap: 26 }}
        >
          <div style={{ display: 'grid', gridTemplateRows: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 20, minHeight: 0 }}>
            <div className="marco-grafico">
              <Grafico name="mercantil-facturas.png" alt="Facturas mensuales del convenio Mercantil" />
            </div>
            <div className="marco-grafico">
              <Grafico name="mercantil-facturado.png" alt="Facturación mensual del convenio Mercantil" />
            </div>
          </div>
          <div className="columna-cifras">
            <Comparativa
              destacada
              rot="Facturado · julio → agosto"
              antes="$2.531,60"
              ahora="$6.892,10"
              delta="+172,2 %"
              pie="El mejor mes del convenio"
            />
            <Comparativa
              rot="Facturas · julio → agosto"
              antes="148"
              ahora="186"
              delta="+25,7 %"
              pie="+38 facturas"
            />
            <div className="tarjeta-cifra">
              <div className="rot">Acumulado <span className="sin-corte">marzo – agosto</span></div>
              <div className="val val-sm">$16.829,50</div>
              <div className="pie">684 facturas · 729 unidades</div>
            </div>
            <Comparativa
              rot="Peso en la venta del mes"
              antes="2,16 %"
              ahora="5,62 %"
              delta="+3,46 puntos"
            />
          </div>
        </div>

        <Conclusion>
          Agosto casi triplicó lo facturado en julio con un cuarto más de facturas: cada
          factura pasó de $17,11 a $37,05. En seis meses el convenio fue de $45,07 a
          $6.892,10 mensuales y ya representa el 5,6 % de la venta de la farmacia.
        </Conclusion>
      </div>
    </Lamina>
  )
}
