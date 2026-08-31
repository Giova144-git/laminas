import Lamina from '../components/Lamina.jsx'
import Accion from '../components/Accion.jsx'

/* Plan · Octubre — el mes en que entra Emergencia, el hueco más grande, y en
   que Grupo Atenas entrega su propuesta de categorías. */
const ACCIONES = [
  {
    etiqueta: 'Palanca 02 · Emergencia', icono: 13,
    titulo: 'Entrevista de farmacia en Emergencia',
    detalle: 'El mismo paso del alta, con guion adaptado: el paciente de emergencia llega angustiado y no está disponible para una conversación comercial. Se le informan las opciones de pago de forma breve y se le deja decidir, incluida la de comprar en otro lugar.',
    indicador: 'Participación de Emergencia · base julio: 17,54 %',
    responsable: 'Coordinación de Farmacia y Jefatura de Emergencia',
  },
  {
    etiqueta: 'Palanca 03 · B2B y cobertura', icono: 5,
    titulo: 'De contado a cobertura',
    detalle: 'Identificar al paciente asegurado en el mostrador y ofrecerle la vía PAMM antes de que pague de su bolsillo. Hoy dos de cada tres pacientes Mercantil que compran lo hacen de contado teniendo cobertura.',
    indicador: '% PAMM sobre compras Mercantil · base: 34,29 %',
    responsable: 'Coordinación de Farmacia',
  },
  {
    etiqueta: 'Habilitador · Categorías', icono: 26,
    titulo: 'Grupo Atenas: layout y cierre de huecos de surtido',
    detalle: 'Entrega del planograma, la revisión de surtido y el estudio de mercado sobre qué se vende que hoy no está en el anaquel. El objetivo cuantificado: recuperar las 2.643 unidades de medicinas cedidas, que a $12,87 valen $34.023.',
    indicador: 'Unidades de medicinas por mes · base del período: 56.943 (−4,4 %)',
    responsable: 'Grupo Atenas con Compras',
  },
]

export default function S19Octubre() {
  return (
    <Lamina fondo={3} cabeceraClara titulo="Plan de acción · Octubre">
      <div className="lienzo">
        <div className="fila-crece" style={{ display: 'grid', gridTemplateRows: 'repeat(3, minmax(0, 1fr))', gap: 22 }}>
          {ACCIONES.map((a) => <Accion key={a.titulo} {...a} />)}
        </div>
      </div>
    </Lamina>
  )
}
