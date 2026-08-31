import Lamina from '../components/Lamina.jsx'
import { Grafico } from '../components/Grafico.jsx'
import Comparativa from '../components/Comparativa.jsx'

/* Rentabilidad del convenio — recortes de las láminas 13 y 20 del PPTX de
   KPIs: márgenes del convenio Mercantil y su facturación mensual.

   Nota de método: el tablero muestra 150 facturas en la tarjeta y una serie
   mensual que suma 498. Las tarjetas de importe usan los valores del gráfico,
   que sí concilian; el conteo de facturas se cita sólo como serie mensual,
   que es lo que el propio gráfico etiqueta. */
export default function S12Convenio() {
  return (
    <Lamina fondo={13} titulo="Rentabilidad del convenio" subtitulo="Mercantil Seguros">
      <div className="lienzo">
        <div
          className="fila-crece"
          style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 400px', gap: 26 }}
        >
          <div style={{ display: 'grid', gridTemplateRows: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 20, minHeight: 0 }}>
            <div className="marco-grafico">
              <Grafico name="mercantil-margen.png" alt="Ingresos, costo promedio y margen bruto del convenio Mercantil" />
            </div>
            <div className="marco-grafico">
              <Grafico name="mercantil-facturado.png" alt="Facturación mensual del convenio Mercantil" />
            </div>
          </div>
          <div className="columna-cifras">
            <div className="tarjeta-cifra">
              <div className="rot">Ingresos del convenio</div>
              <div className="val val-sm">$10.403,95</div>
              <div className="pie">Costo promedio: $5.473,55</div>
            </div>
            <div className="tarjeta-cifra destacada">
              <div className="rot">Margen bruto</div>
              <div className="val">44,92 %</div>
              <div className="pie">General del período: 42,56 %</div>
            </div>
            <Comparativa
              rot="Facturado · junio → julio"
              junio="$3.705,70"
              julio="$2.531,60"
              delta="−31,7 %"
              pie="Junio fue el mes más alto del convenio"
            />
          </div>
        </div>

        <div className="rejilla rejilla-3" style={{ minHeight: 176 }}>
          <Comparativa
            rot="Facturas del convenio · junio → julio"
            junio="138"
            julio="148"
            delta="+7,2 %"
            pie="+10 facturas · más operaciones con menos importe cada una"
          />
          <div className="tarjeta-cifra">
            <div className="rot">Facturado en el período</div>
            <div className="val val-sm">$9.937,40</div>
            <div className="pie">Ticket promedio: $66,69</div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">Arranque del convenio</div>
            <div className="val val-sm">$45,07</div>
            <div className="pie">Marzo 2026, primer mes · en julio ya multiplicaba por 56</div>
          </div>
        </div>
      </div>
    </Lamina>
  )
}
