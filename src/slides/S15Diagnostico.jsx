import Lamina from '../components/Lamina.jsx'

/* Diagnóstico — la lámina que articula todo el deck, sobre el fondo azul a
   sangre de la plantilla (lámina 16 del PPTX).

   Está escrita en clave de oportunidad, no de pérdida: los tres bloques
   enumeran activos que la farmacia ya tiene demostrados —margen probado,
   demanda cautiva y un canal que convierte— y la conclusión indica hacia
   dónde moverlos. Los mismos datos, leídos por lo que habilitan.

   El fondo trae ilustración de línea y una curva amarilla en su tercio
   izquierdo: el contenido arranca en x=600 para no cruzarse con ellas. */

const BLOQUES = [
  ['01', 'El margen ya demostró que puede subir',
    'El período cerró con el margen de medicinas casi cuatro puntos por encima del anterior. La rentabilidad por unidad vendida está probada: lo que queda por delante es apoyarla en más volumen.',
    'Margen en medicinas 40,49 % · desde 36,52 %'],
  ['02', 'La demanda ya está dentro de la casa',
    'Cada paciente de alta que compra deja más de tres veces el ticket general. Son personas identificadas, que ya están en el edificio y con una indicación médica en la mano: no hay que captarlas, hay que atenderlas.',
    '8.424 altas al año · ticket $74,45 · convierte 24,36 %'],
  ['03', 'El seguro es el canal que mejor convierte',
    'Donde la cobertura paga, el paciente resuelve en la farmacia sin comparar precio. Es el único canal medido que convierte por encima del 40 % y que además deja más margen que el promedio.',
    'Mercantil: 40,17 % de participación · 44,92 % de margen'],
]

export default function S15Diagnostico() {
  return (
    <Lamina fondo={16} oscura titulo="Diagnóstico" subtitulo="Tres activos ya demostrados">
      <div className="lienzo" style={{ paddingLeft: 600 }}>
        <div
          className="fila-crece"
          style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 440px', gap: 52, alignItems: 'stretch' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {BLOQUES.map(([n, titulo, cuerpo, cifra]) => (
              <div key={n} style={{ display: 'grid', gridTemplateColumns: '66px 1fr', gap: 20 }}>
                <div style={{
                  fontFamily: 'var(--fuente-titulo)', fontWeight: 700, fontSize: 26,
                  color: 'var(--fm-amarillo-claro)', paddingTop: 6,
                }}>{n}</div>
                <div>
                  <h3 style={{ fontSize: 38, color: 'var(--fm-blanco)', lineHeight: 1.12 }}>{titulo}</h3>
                  <div style={{
                    fontFamily: 'var(--fuente-texto)', fontSize: 21, lineHeight: 1.5,
                    color: 'var(--fm-neg-1)', marginTop: 10,
                  }}>{cuerpo}</div>
                  <div style={{
                    fontFamily: 'var(--fuente-titulo)', fontWeight: 700, fontSize: 22,
                    color: 'var(--fm-amarillo-claro)', marginTop: 12,
                  }}>{cifra}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            alignSelf: 'center',
            background: 'rgba(255,255,255,0.13)',
            border: '1px solid rgba(255,255,255,0.28)',
            borderRadius: 20, padding: '38px 34px',
          }}>
            <div style={{
              fontFamily: 'var(--fuente-titulo)', fontWeight: 700, fontSize: 16,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--fm-amarillo-claro)', marginBottom: 18,
            }}>La oportunidad</div>
            <div style={{
              fontFamily: 'var(--fuente-titulo)', fontWeight: 700, fontSize: 36,
              lineHeight: 1.22, color: 'var(--fm-blanco)',
            }}>
              Llevar la demanda que ya está dentro hacia los canales donde el seguro decide la compra.
            </div>
          </div>
        </div>
      </div>
    </Lamina>
  )
}
