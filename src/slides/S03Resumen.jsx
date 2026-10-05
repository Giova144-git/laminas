import Lamina from '../components/Lamina.jsx'
import Comparativa from '../components/Comparativa.jsx'
import Conclusion from '../components/Conclusion.jsx'

/* Resumen del período — cifras de cabecera del tablero general (lámina 14
   del PDF "KPI's farmacia Agosto 26"): septiembre 2025 – agosto 2026 contra
   el período pasado (PP). La última fila cierra con el mes: julio → agosto.

   Facturación de julio y agosto: etiquetas al céntimo del gráfico mensual
   ($117.175,00 y $122.579,66). El margen del mes sale del gráfico de
   márgenes (lámina 19), que Power BI redondea a miles: va con "≈".
     julio  ≈ $50 mil / $117.175  → ≈ 42,7 %
     agosto ≈ $49 mil / $122.580  → ≈ 40,2 %  (costo ≈ $73 mil lo confirma)
   El período pasado de facturación se muestra truncado en el tablero
   ("$1.105.357,…"): se cita sin céntimos. */

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
    <Lamina fondo={17} titulo="Resumen del período" subtitulo="Septiembre 2025 – agosto 2026 · frente a septiembre 2024 – agosto 2025">
      <div className="lienzo">
        <div
          className="rejilla rejilla-3 fila-crece"
          style={{ gridTemplateRows: 'repeat(3, minmax(0, 1fr))', gap: 16 }}
        >
          <Cifra rot="Facturación · 12 meses" val="$1.249.909,29" delta="+13,1 %" pie="12 meses anteriores: $1.105.357" />
          <Cifra rot="Unidades · 12 meses" val="240.226" delta="+12,5 %" pie="12 meses anteriores: 213.560" />
          <Cifra rot="Facturas · 12 meses" val="55.665" delta="+27,7 %" pie="12 meses anteriores: 43.776" />
          <Cifra rot="Ticket promedio · 12 meses" val="$22,46" delta="−11,1 %" pie="12 meses anteriores: $25,27" />
          <Cifra rot="Clientes · 12 meses" val="19.539" delta="+7,42 %" pie="12 meses anteriores: 18.189" />
          <Cifra rot="Margen bruto · 12 meses" val="42,21 %" pie="Costo promedio: $722.474,05" />
          <Cifra rot="Tasa de recompra · 12 meses" val="45,09 %" delta="+1,06 %" pie="Casi uno de cada dos clientes vuelve" />
          <Comparativa
            rot="Facturación del mes · julio → agosto"
            antes="$117.175"
            ahora="$122.580"
            delta="+4,6 %"
          />
          <Comparativa
            destacada
            rot="Margen bruto del mes · julio → agosto"
            antes="≈ 42,7 %"
            ahora="≈ 40,2 %"
            delta="≈ −2,5 puntos"
          />
        </div>

        <Conclusion>
          Los últimos doce meses cerraron en $1.249.909,29, un 13,1 % sobre los doce anteriores,
          con más facturas y más clientes pero un ticket 11,1 % menor. Agosto fue el mes
          más alto del período (+4,6 % sobre julio); su margen, en cambio, bajó cerca de
          2,5 puntos.
        </Conclusion>
      </div>
    </Lamina>
  )
}
