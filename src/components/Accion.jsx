import { Icono } from './Grafico.jsx'

/* Fila de acción del plan mensual. Las tres láminas de plan comparten esta
   pieza para que septiembre, octubre y noviembre se lean con exactamente el
   mismo ritmo: etiqueta de palanca, título, qué se hace, y con qué se mide. */
export default function Accion({ etiqueta, icono, titulo, detalle, indicador, responsable }) {
  return (
    <div className="accion">
      <div className="marca-icono"><Icono n={icono} size={52} /></div>
      <div>
        <div className="etiqueta">{etiqueta}</div>
        <h3>{titulo}</h3>
        <div className="detalle">{detalle}</div>
        <div className="indicador">
          Indicador: <b>{indicador}</b> · Responsable: <b>{responsable}</b>
        </div>
      </div>
    </div>
  )
}
