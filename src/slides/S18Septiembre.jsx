import Lamina from '../components/Lamina.jsx'
import Accion from '../components/Accion.jsx'

/* Plan · Septiembre — el mes de puesta en marcha. La cabecera va a la
   izquierda y el isotipo dentro de la banda amarilla del fondo 19, en el
   hueco que dejó el sello institucional retirado. */
const ACCIONES = [
  {
    etiqueta: 'Palanca 01 · Captación al alta', icono: 14,
    titulo: 'Entrevista de farmacia en el protocolo de alta',
    detalle: 'Ningún paciente de hospitalización recibe el alta sin haber conocido sus opciones: cobertura del seguro, contrarreembolso o resolver por su cuenta. No es una gestión de venta, es información antes de irse.',
    indicador: '% de altas con entrevista registrada',
    responsable: 'Coordinación de Farmacia y Dirección Médica',
  },
  {
    etiqueta: 'Palanca 03 · B2B y cobertura', icono: 1,
    titulo: 'Circuito Mercantil en consultorios y vía ambulatoria',
    detalle: 'El paciente sale de consulta con la orden montada y sin desembolso. En paralelo se habilita PAMM para el asegurado que no pasó por la clínica: es autogestión, no requiere hospitalización, y hoy ya produce 4 facturas al mes sin promoción.',
    indicador: 'Conversiones Mercantil (base julio: 122) y facturas ambulatorias PAMM (base: 4 al mes)',
    responsable: 'Coordinación de Farmacia',
  },
  {
    etiqueta: 'Habilitador · Horario', icono: 2,
    titulo: 'Extensión a 8:30 pm con medición de costo real',
    detalle: 'Se pasa del piloto a la operación regular y se mide el costo incremental de la hora y media: personal, vigilancia y energía.',
    indicador: 'Facturación por día · base piloto: $113,74 · techo de costo: $1.452 al mes',
    responsable: 'Administración',
  },
]

export default function S18Septiembre() {
  return (
    <Lamina fondo={19} cabeceraIzquierda selloEnBanda titulo="Plan de acción · Septiembre">
      <div className="lienzo" style={{ paddingTop: 268 }}>
        <div className="fila-crece" style={{ display: 'grid', gridTemplateRows: 'repeat(3, minmax(0, 1fr))', gap: 22 }}>
          {ACCIONES.map((a) => <Accion key={a.titulo} {...a} />)}
        </div>
      </div>
    </Lamina>
  )
}
