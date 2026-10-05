import Lamina from '../components/Lamina.jsx'

/* Contenido — fondo blanco 9; el índice arranca a la derecha del arco, alineado con el título. Las seis secciones van en dos columnas de
   tres para ocupar el ancho completo de la lámina en lugar de apilarse en
   la mitad izquierda. */
const SECCIONES = [
  ['1', 'Resultados del período', 'Facturación, margen y composición de la venta'],
  ['2', 'Captación de pacientes de alta', 'Participación anual, del año en curso y por grupo'],
  ['3', 'Convenios y pagadores', 'Conversión por pagador y convenio Mercantil'],
  ['4', 'Cierre de agosto 2026', 'El mes comparado con julio'],
  ['5', 'Diagnóstico', 'Lectura del cierre de agosto'],
  ['6', 'Plan de acción', 'Meta, acciones y línea del tiempo · octubre – diciembre'],
]

export default function S02Contenido() {
  return (
    <Lamina fondo={9} titulo="Contenido">
      <div className="lienzo" style={{ paddingTop: 240, paddingBottom: 130, paddingLeft: 330 }}>
        <div
          className="fila-crece"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'repeat(3, minmax(0, 1fr))',
            gridAutoFlow: 'column',
            columnGap: 90,
            rowGap: 26,
          }}
        >
          {SECCIONES.map(([n, titulo, detalle]) => (
            <div
              key={n}
              style={{
                display: 'grid', gridTemplateColumns: '84px 1fr', gap: 22, alignItems: 'center',
                borderBottom: '1px solid rgba(40, 74, 134, 0.14)',
              }}
            >
              <div style={{
                fontFamily: 'var(--fuente-titulo)', fontWeight: 700, fontSize: 48,
                color: 'var(--fm-amarillo-marca)', letterSpacing: '0.02em',
              }}>{n}</div>
              <div>
                <h3 style={{ fontSize: 38, lineHeight: 1.1 }}>{titulo}</h3>
                <div style={{
                  fontFamily: 'var(--fuente-texto)', fontSize: 22, marginTop: 8,
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
