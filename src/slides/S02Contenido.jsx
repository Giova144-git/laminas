import Lamina from '../components/Lamina.jsx'

/* Contenido — el fondo 3 lleva la masa azul en el tercio derecho, así que el
   índice se apoya en la mitad izquierda, que es la zona limpia. Las seis
   entradas se reparten el alto completo. */
const SECCIONES = [
  ['01', 'Resultados del período', 'Facturación, margen y composición de la venta'],
  ['02', 'Captación de pacientes de alta', 'Participación anual, del año en curso y por grupo'],
  ['03', 'Convenios y pagadores', 'Conversión por pagador y convenio Mercantil'],
  ['04', 'Horario extendido', 'Resultados del piloto de junio'],
  ['05', 'Diagnóstico', 'Los tres activos ya demostrados'],
  ['06', 'Plan de acción', 'Septiembre · Octubre · Noviembre'],
  ['07', 'Gestión comercial', 'Decisiones del ejercicio y su resultado'],
]

export default function S02Contenido() {
  return (
    <Lamina fondo={3} cabeceraClara titulo="Contenido">
      <div className="lienzo" style={{ paddingRight: 880 }}>
        <div
          className="fila-crece"
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          {SECCIONES.map(([n, titulo, detalle]) => (
            <div key={n} style={{ display: 'grid', gridTemplateColumns: '78px 1fr', gap: 22, alignItems: 'baseline' }}>
              <div style={{
                fontFamily: 'var(--fuente-titulo)', fontWeight: 700, fontSize: 30,
                color: 'var(--fm-amarillo-marca)', letterSpacing: '0.04em',
              }}>{n}</div>
              <div>
                <h3 style={{ fontSize: 36, lineHeight: 1.1 }}>{titulo}</h3>
                <div style={{
                  fontFamily: 'var(--fuente-texto)', fontSize: 21, marginTop: 8,
                  color: 'var(--fm-txt-2)',
                }}>{detalle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Lamina>
  )
}
