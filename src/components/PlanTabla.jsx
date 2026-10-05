/* Tabla del plan: acción · fecha · dueño · indicador.
   Formato elegido por la gerencia para responder a la junta: cada acción
   con fecha, responsable y una medida que se puede revisar. Cada frente
   abre con su línea base (agosto 2026) y su meta a diciembre. */
export default function PlanTabla({ frentes }) {
  return (
    <div className="plan-tabla fila-crece">
      <div className="plan-cab">
        <div>Acción</div>
        <div>Fecha</div>
        <div>Dueño · apoyo</div>
        <div>Indicador · meta</div>
      </div>
      {frentes.map((f) => (
        <FrenteFilas key={f.nombre} f={f} />
      ))}
    </div>
  )
}

function FrenteFilas({ f }) {
  return (
    <>
      <div className="plan-frente">
        <span className="nombre">{f.nombre}</span>
        {f.base && <span className="base">{f.base}</span>}
      </div>
      {f.acciones.map((a) => (
        <div key={a.titulo} className="plan-fila" style={{ borderLeftColor: f.color }}>
          <div className="plan-accion">
            <b>{a.titulo}</b>
            <span>{a.detalle}</span>
          </div>
          <div className="fecha">{a.fecha}</div>
          <div className="dueno">{a.dueno}</div>
          <div className="kpi">{a.kpi}</div>
        </div>
      ))}
    </>
  )
}
