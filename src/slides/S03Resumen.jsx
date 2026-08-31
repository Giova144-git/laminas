import Lamina from '../components/Lamina.jsx'
import Comparativa from '../components/Comparativa.jsx'

/* Resumen del período — las cifras de cabecera del tablero general (lámina 14
   del PPTX de KPIs), reescritas en tarjetas propias y repartidas en una
   rejilla de 3×3 que ocupa el alto completo de la lámina.

   La última fila cierra con el mes: junio contra julio. La composición de la
   venta y el tipo de cliente salieron de aquí porque ya tienen su lámina
   propia con los donuts del tablero — repetirlas restaba sitio al dato que
   sí faltaba, que era el cierre.

   El margen del mes va en PORCENTAJE, no en dólares: en dólares caía un 4 %
   —arrastrado por el volumen— y eso leía como deterioro cuando la tasa se
   mantuvo. Es además el mismo lenguaje de la tarjeta anual (42,56 %). Los
   dos porcentajes salen de importes que Power BI redondea a miles, así que
   van con "≈" y la variación se declara estable en vez de fingir décimas. */

function Cifra({ rot, val, delta, pie, sm }) {
  return (
    <div className="tarjeta-cifra">
      <div className="rot">{rot}</div>
      <div className={`val ${sm ? 'val-sm' : ''}`}>{val}</div>
      {delta && (
        <div><span className={`delta ${delta.startsWith('−') ? 'baja' : 'sube'}`}>{delta}</span></div>
      )}
      {pie && <div className="pie">{pie}</div>}
    </div>
  )
}

export default function S03Resumen() {
  return (
    <Lamina fondo={4} titulo="Resumen del período" subtitulo="Agosto 2025 – Julio 2026">
      <div className="lienzo">
        <div
          className="rejilla rejilla-3 fila-crece"
          style={{ gridTemplateRows: 'repeat(3, minmax(0, 1fr))' }}
        >
          <Cifra rot="Facturación" val="$1.226.616,10" delta="+12,7 %" pie="Antes: $1.088.628,80" />
          <Cifra rot="Unidades" val="237.285" delta="+12,2 %" pie="Antes: 211.563" />
          <Cifra rot="Facturas" val="53.818" delta="+25,3 %" pie="Antes: 43.166" />
          <Cifra rot="Ticket promedio" val="$22,80" delta="−9,7 %" pie="Antes: $25,24" />
          <Cifra rot="Clientes" val="19.308" delta="+6,77 %" pie="Antes: 18.084" />
          <Cifra rot="Margen bruto" val="42,56 %" pie="Costo promedio: $704.729,06" />
          <Cifra rot="Tasa de recompra" val="45,24 %" delta="+1,54 %" pie="Uno de cada dos clientes vuelve" />
          <Comparativa
            rot="Facturación del mes · junio → julio"
            junio="$122.281"
            julio="≈ $117 mil"
            delta="≈ −4 %"
          />
          <Comparativa
            destacada
            rot="Margen bruto del mes · junio → julio"
            junio="≈ 42,6 %"
            julio="≈ 42,7 %"
            delta="estable"
            pie="El margen se sostuvo con menos volumen"
          />
        </div>
      </div>
    </Lamina>
  )
}
