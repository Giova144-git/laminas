/* Tarjeta de variación entre dos momentos (julio → agosto 2026).

   El deck cierra en agosto, así que el último mes necesita su referencia
   inmediata: sin ella una cifra suelta no dice si el negocio venía subiendo
   o bajando. Cada tarjeta muestra los dos meses y el signo del cambio, con
   el mismo semáforo verde/rojo de los tableros de Power BI.

   `unidades` cambia el rótulo del pie: en las métricas de conteo la
   variación se expresa también en piezas (pacientes, facturas, conversiones)
   y no sólo en porcentaje. */
export default function Comparativa({
  rot,
  antes,
  ahora,
  delta,
  pie,
  destacada = false,
  invertirColor = false,
}) {
  /* el signo se busca en TODA la cadena: las variaciones aproximadas llegan
     como "≈ −4 %", y comprobar sólo el primer carácter las daba por positivas.
     Sin signo la variación es neutra: no se pinta movimiento donde no lo hubo. */
  const tieneSigno = delta.includes('−') || delta.includes('+')
  let clase = 'neutro'
  if (tieneSigno) {
    const sube = !delta.includes('−')
    clase = (sube !== invertirColor) ? 'sube' : 'baja'
  }
  return (
    <div className={`tarjeta-cifra ${destacada ? 'destacada' : ''}`}>
      <div className="rot">{rot}</div>
      <div className="comparativa">
        <span className="antes">{antes}</span>
        <span className="flecha" aria-hidden="true">→</span>
        <span className="ahora">{ahora}</span>
      </div>
      <div>
        <span className={`delta ${clase}`}>{delta}</span>
      </div>
      {pie && <div className="pie">{pie}</div>}
    </div>
  )
}
