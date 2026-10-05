import Lamina from '../components/Lamina.jsx'
import Conclusion from '../components/Conclusion.jsx'

/* Línea del tiempo — las once acciones del plan en doce semanas, del lunes
   5 de octubre al 21 de diciembre de 2026. Índice de semana:
   0=5 oct · 1=12 · 2=19 · 3=26 · 4=2 nov · 5=9 · 6=16 · 7=23 · 8=30 ·
   9=7 dic · 10=14 · 11=21.
   Barras = trabajo en curso (suave = preparación); hitos = fecha de
   entrega o decisión. Las fechas coinciden con las de las tablas del plan. */

const SEMANAS = ['5', '12', '19', '26', '2', '9', '16', '23', '30', '7', '14', '21']
const AZUL = 'var(--fm-azul)'
const DATO = 'var(--fm-azul-dato)'
const AMAR = 'var(--fm-amarillo-marca)'

const FILAS = [
  { grupo: 'Emergencia' },
  { n: 'Altas por hora y turno', hitos: [[0, '9 oct · dato del sistema']] },
  { n: 'Récipe por QR · Emergencia', barras: [[1, 1, AZUL, '', true], [2, 11, AZUL, 'Desde el 19 oct']] },
  { n: 'Kit de alta por diagnóstico', barras: [[1, 2, AZUL, 'Armado', true], [3, 11, AZUL, 'En uso desde el 26 oct']] },
  { grupo: 'CIAM · consulta' },
  { n: 'Encuesta QR a médicos', barras: [[0, 0, DATO, '', true], [1, 2, DATO, 'Recolección']], hitos: [[3, '30 oct · resultados'], [9, 'Repetición']] },
  { n: 'PAMM y QR en consultorios', barras: [[4, 11, DATO, 'Desde el 2 nov']] },
  { n: 'Visita a médicos que más recetan', barras: [[4, 6, DATO, '2 – 20 nov']] },
  { grupo: 'B2B · convenios' },
  { n: 'Mercantil difunde el punto PAMM', barras: [[2, 11, AMAR, 'Seguimiento']], hitos: [[1, '16 oct']] },
  { n: 'Segundo convenio · Seguros Caracas', barras: [[4, 4, AMAR, '', true], [6, 10, AMAR, 'Negociación']], hitos: [[5, '13 nov']] },
  { grupo: 'Horario, margen y layout' },
  { n: 'Extensión de 7:00 a 8:30 pm', barras: [[1, 4, AZUL, 'Prueba desde el 15 oct']], hitos: [[5, '13 nov · decisión']] },
  { n: 'Revisión precio – costo', barras: [[0, 11, AZUL, 'Cada semana']] },
  { n: 'Layout · Grupo Atenas', barras: [[4, 7, AZUL, 'Diagnóstico', true]], hitos: [[0, '9 oct'], [10, 'Propuesta']] },
]

export default function S20Linea() {
  return (
    <Lamina fondo={9} titulo="Línea del tiempo" subtitulo="Octubre – diciembre 2026 · por semana">
      <div className="lienzo" style={{ gap: 18 }}>
        <div className="tarjeta-cifra fila-crece" style={{ justifyContent: 'stretch', gap: 0, padding: '14px 26px 10px' }}>
          <div className="gantt" style={{ flex: '1 1 auto' }}>
            {/* meses */}
            <div className="gantt-fila cab" style={{ borderBottom: 'none' }}>
              <div />
              <div className="gantt-mes" style={{ gridColumn: '2 / 6', background: 'rgba(40, 74, 134, 0.07)', borderRadius: 8, margin: '0 2px' }}>Octubre</div>
              <div className="gantt-mes" style={{ gridColumn: '6 / 11', background: 'rgba(240, 180, 16, 0.16)', borderRadius: 8, margin: '0 2px' }}>Noviembre</div>
              <div className="gantt-mes" style={{ gridColumn: '11 / 14', background: 'rgba(40, 74, 134, 0.07)', borderRadius: 8, margin: '0 2px' }}>Diciembre</div>
            </div>
            {/* semanas */}
            <div className="gantt-fila cab">
              <div className="gantt-sem" style={{ textAlign: 'left' }}>Semana del lunes</div>
              {SEMANAS.map((s, i) => <div key={i} className="gantt-sem">{s}</div>)}
            </div>
            {FILAS.map((f, i) => (f.grupo
              ? (
                <div key={i} className="gantt-fila" style={{ flex: '0 0 auto', borderBottom: 'none', paddingTop: 8 }}>
                  <div className="gantt-grupo">{f.grupo}</div>
                </div>
              )
              : (
                <div key={i} className="gantt-fila">
                  <div className="etiqueta">{f.n}</div>
                  {(f.barras || []).map(([a, b, color, txt, suave], k) => (
                    <div
                      key={'b' + k}
                      className={`gantt-barra ${suave ? 'suave' : ''}`}
                      style={{ gridColumn: `${a + 2} / ${b + 3}`, gridRow: 1, background: color }}
                    >{txt}</div>
                  ))}
                  {(f.hitos || []).map(([s, txt], k) => (
                    <div key={'h' + k} className="gantt-hito" style={{ gridColumn: `${s + 2} / span 3`, gridRow: 1 }}>
                      <span className="marca" /><span className="txt">{txt}</span>
                    </div>
                  ))}
                </div>
              )))}
          </div>
        </div>

        <Conclusion>
          Cada acción tiene semana de inicio, entrega y una medida. Las revisiones de cierre de
          octubre (2 nov) y de noviembre (7 dic) dicen qué se mantiene, qué se ajusta y qué se
          suspende; los datos de septiembre entran la semana del 12 de octubre.
        </Conclusion>
      </div>
    </Lamina>
  )
}
