import Lamina from '../components/Lamina.jsx'
import PlanTabla from '../components/PlanTabla.jsx'

/* Plan · convenios (B2B), horario, margen y layout — los otros frentes de
   las premisas de julio, con fecha y medida.

   · B2B: hoy sólo Mercantil. Su margen superior es la protección de precio
     por el cobro a 30 días con devaluación; el segundo convenio se propone
     con el mismo esquema. Seguros Caracas: tercer pagador de agosto (35
     pacientes, +5 sobre julio).
   · Horario: de 7:00 a 8:30 pm (el 75 % de la venta nocturna del piloto
     de junio entró antes de las 8:30). Días a escoger con la venta del
     piloto por día de la semana. De 7:00 a 8:30 no queda farmacéutico.
   · Margen: agosto ≈ 40,2 % con costo ≈ +9 % sobre julio; meta ≥ 42 %.
   · Layout: Grupo Atenas, la intervención aún no se ha solicitado. */

const FRENTES = [
  {
    nombre: 'B2B · convenios',
    base: 'hoy sólo Mercantil: 186 facturas y $6.892,10 en agosto',
    color: 'var(--fm-amarillo-marca)',
    acciones: [
      {
        titulo: 'Mercantil difunde el punto PAMM',
        detalle: 'Proponer a Mercantil que informe a sus asegurados que la farmacia es punto PAMM, sin costo para la farmacia.',
        fecha: 'Propuesta 16 oct',
        dueno: 'Gerencia de Farmacia · Mercantil',
        kpi: <><b>Facturas del convenio</b> · 250 en diciembre</>,
      },
      {
        titulo: 'Segundo convenio',
        detalle: 'Llevar el esquema Mercantil, con el precio protegido por el cobro a 30 días, a Seguros Caracas.',
        fecha: 'Propuesta 13 nov · respuesta en diciembre',
        dueno: 'Gerencia de Farmacia',
        kpi: <><b>Convenio firmado</b></>,
      },
    ],
  },
  {
    nombre: 'Horario y margen',
    base: 'horario: el piloto de junio dejó $113,74 por día hasta las 8:30 pm · margen de agosto ≈ 40,2 %',
    color: 'var(--fm-azul)',
    acciones: [
      {
        titulo: 'Extensión de 7:00 a 8:30 pm',
        detalle: 'Días según la venta del piloto por día; turno corrido sin personal nuevo. Sin farmacéutico en ese tramo: definir qué se despacha.',
        fecha: 'Inicio 15 oct · decisión 13 nov',
        dueno: 'Gerencia de Farmacia',
        kpi: <><b>Venta de 7:00 a 8:30 pm</b> contra su costo</>,
      },
      {
        titulo: 'Revisión semanal precio – costo',
        detalle: 'Los 200 productos más vendidos: cada aumento de proveedor se traslada al precio en 48 horas.',
        fecha: 'Desde el 7 oct, cada semana',
        dueno: 'Gerencia de Farmacia',
        kpi: <><b>Margen bruto del mes</b> · 42 % o más</>,
      },
      {
        titulo: 'Layout de categorías · Grupo Atenas',
        detalle: 'Solicitud formal, diagnóstico en tienda y propuesta de planograma y surtido.',
        fecha: 'Solicitud 9 oct · propuesta en diciembre',
        dueno: 'Gerencia de Farmacia · Grupo Atenas',
        kpi: <><b>Propuesta entregada</b></>,
      },
    ],
  },
]

export default function S18PlanCanales() {
  return (
    <Lamina fondo={17} titulo="Plan de acción · Convenios, horario y margen" subtitulo="Octubre – diciembre 2026">
      <div className="lienzo">
        <PlanTabla frentes={FRENTES} />
      </div>
    </Lamina>
  )
}
