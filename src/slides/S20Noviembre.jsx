import Lamina from '../components/Lamina.jsx'
import Accion from '../components/Accion.jsx'

/* Plan · Noviembre — el mes de consolidación: se mide el ritmo alcanzado, se
   abre la vía institucional y arranca la recompra de crónicos con un tercero.
   Es el mes que debe cerrar con el ritmo que sostiene el 15 % anual. */
const ACCIONES = [
  {
    etiqueta: 'Palancas 01 y 02 · Consolidación', icono: 24,
    titulo: 'Medir el trimestre contra el 38 %',
    detalle: 'Revisión de los tres grupos —CIAM, Hospitalización y Emergencia— contra el objetivo, y corrección donde la entrevista de alta no se esté ejecutando. El cierre de noviembre es la prueba del ritmo anual.',
    indicador: 'Conversión global de altas · base período: 24,36 %',
    responsable: 'Coordinación de Farmacia',
  },
  {
    etiqueta: 'Palanca 03 · B2B institucional', icono: 6,
    titulo: 'Replicar el esquema con los siguientes pagadores',
    detalle: 'Con el circuito PAMM ya probado, se negocia un mecanismo equivalente de autogestión o facturación directa con los siguientes pagadores de la lista, y se abre la conversación con instituciones de salud y organizaciones.',
    indicador: 'Facturas de cobertura por mes · meta del tramo 2: 64 · base: 4',
    responsable: 'Dirección',
  },
  {
    etiqueta: 'Habilitadores · Categorías y recompra', icono: 18,
    titulo: 'Nuevo layout operativo y primera campaña de recompra',
    detalle: 'Implementación del layout propuesto por Grupo Atenas y primera campaña de recompra sobre tratamientos crónicos —cardiovascular, endocrino metabólico e hipolipemiante—, con ciclos de reposición predecibles y operada por un tercero.',
    indicador: 'Tasa de respuesta de la campaña',
    responsable: 'Compras y proveedor externo',
  },
]

export default function S20Noviembre() {
  return (
    <Lamina fondo={9} titulo="Plan de acción · Noviembre">
      <div className="lienzo">
        <div className="fila-crece" style={{ display: 'grid', gridTemplateRows: 'repeat(3, minmax(0, 1fr))', gap: 22 }}>
          {ACCIONES.map((a) => <Accion key={a.titulo} {...a} />)}
        </div>
      </div>
    </Lamina>
  )
}
