import Lamina from '../components/Lamina.jsx'
import { Icono } from '../components/Grafico.jsx'

/* Gestión comercial 3/3 — Resumen de eventos comerciales. Contenido de la
   lámina 16 del PPTX de cierre, reescrito en tarjetas propias: esa lámina
   no trae ningún gráfico, sólo cifras, así que se rehace en el lenguaje del
   deck en lugar de recortarla.

   Cierra el bloque comercial mostrando que las tres vías —activaciones,
   negociación con laboratorios y extensión de horario— rindieron y que la
   de mayor retorno directo fue precisamente el horario extendido, la misma
   que el plan propone consolidar. */

const CABECERA = [
  ['Actividades ejecutadas', '26', 'Eventos en el ejercicio'],
  ['Ventas generadas', '$9.011,35', 'Por impulso en punto de venta'],
  ['Descuentos negociados', '$5.760,00', 'Ahorro neto acumulado'],
  ['Retorno total', '$14.771,35', 'Ventas más ahorro'],
]

const DESGLOSE = [
  {
    ic: 2, titulo: 'Extensión de horario · 7:00 a 10:00 pm', cifra: '$6.121,24',
    detalle: 'El evento de mayor impacto directo en ventas de todo el ejercicio. Es la misma vía que el plan propone consolidar hasta las 8:30 pm.',
  },
  {
    ic: 6, titulo: 'Mesas de negociación · Dronena', cifra: '$5.760,00',
    detalle: 'Dos mesas ejecutadas: 23 de octubre de 2025 ($3.850,00) y 24 de marzo de 2026 ($1.910,00). Ahorro que entra directo al margen.',
  },
  {
    ic: 27, titulo: 'Días de producto y marcas', cifra: '$2.890,11',
    detalle: 'Veinticuatro activaciones: Recette, Marck, Sensilis, Cumlaude, día del padre, inauguración del Mundial y cambio de layout, entre otras.',
  },
]

export default function S23Eventos() {
  return (
    <Lamina fondo={17} titulo="Eventos comerciales" subtitulo="Gestión comercial · Ejercicio 2025 – 2026">
      <div className="lienzo">
        <div className="rejilla rejilla-4" style={{ minHeight: 168 }}>
          {CABECERA.map(([rot, val, pie], i) => (
            <div key={rot} className={`tarjeta-cifra ${i === 3 ? 'destacada' : ''}`}>
              <div className="rot">{rot}</div>
              <div className="val val-sm">{val}</div>
              <div className="pie">{pie}</div>
            </div>
          ))}
        </div>

        <div className="rejilla rejilla-3 fila-crece">
          {DESGLOSE.map((d) => (
            <div key={d.titulo} className="palanca">
              <div className="palanca-cuerpo">
                <Icono n={d.ic} size={54} />
                <h3 style={{ fontSize: 26 }}>{d.titulo}</h3>
                <p>{d.detalle}</p>
              </div>
              <div className="cifra-apoyo">Generó <b>{d.cifra}</b></div>
            </div>
          ))}
        </div>

        <div className="banda-nota">
          <div className="nota">
            La extensión de horario se midió aquí como evento comercial sobre el mes
            completo; el tablero de KPIs registra $3.783,27 en su propia ventana de 25
            días. Son dos lecturas del mismo piloto sobre períodos distintos, y ambas
            apuntan en la misma dirección.
          </div>
        </div>
      </div>
    </Lamina>
  )
}
