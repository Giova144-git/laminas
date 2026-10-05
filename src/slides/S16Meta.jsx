import Lamina from '../components/Lamina.jsx'
import Conclusion from '../components/Conclusion.jsx'

/* La meta — la misma de julio (+15 % anual), ahora en UN solo bloque y
   medida mes a mes contra el mismo mes de 2025.

   Base: últimos doce meses (septiembre 2025 – agosto 2026) $1.249.909,29
     × 15 % = $187.486,39 → $1.437.395,68 al año.
   Puntos de control (facturación 2025 del gráfico mensual × 1,15):
     octubre   $101.946,57 → $117.238,56
     noviembre  $93.023,86 → $106.977,44
     diciembre $102.355,12 → $117.708,39
     trimestre $297.325,55 → $341.924,38
   Indicadores de control: base agosto 2026; metas propuestas por la
   gerencia para diciembre. */

const MESES = [
  ['Octubre', '$101.947', '$117.239'],
  ['Noviembre', '$93.024', '$106.977'],
  ['Diciembre', '$102.355', '$117.708'],
]

const INDICADORES = [
  ['Participación de pacientes de alta', '25,69 %', '30 %'],
  ['Emergencia', '12,66 %', '20 %'],
  ['CIAM · consulta', '26,90 %', '37 %'],
  ['Hospitalización', '33,02 %', '33 % o más'],
  ['Margen bruto del mes', '≈ 40,2 %', '42 % o más'],
  ['Facturas del convenio Mercantil', '186', '250'],
]

const celda = { fontFamily: 'var(--fuente-titulo)', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }

export default function S16Meta() {
  return (
    <Lamina fondo={17} titulo="La meta" subtitulo="Octubre – diciembre 2026">
      <div className="lienzo">
        <div
          className="fila-crece"
          style={{ display: 'grid', gridTemplateColumns: '440px minmax(0, 1fr) minmax(0, 1.15fr)', gap: 26, minHeight: 0 }}
        >
          {/* la meta */}
          <div style={{
            background: 'var(--fm-azul)', borderRadius: 20, padding: '40px 38px',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14,
            boxShadow: '0 16px 40px rgba(40, 74, 134, 0.28)',
          }}>
            <div style={{ ...celda, fontSize: 17, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--fm-amarillo-claro)' }}>
              Crecimiento anual
            </div>
            <div style={{ ...celda, fontSize: 132, lineHeight: 0.95, color: 'var(--fm-blanco)', letterSpacing: '-0.03em' }}>+15 %</div>
            <div style={{ height: 4, width: 96, borderRadius: 2, background: 'var(--fm-amarillo-marca)', margin: '6px 0' }} />
            <div style={{ fontFamily: 'var(--fuente-texto)', fontSize: 22, lineHeight: 1.45, color: 'var(--fm-neg-1)' }}>
              ≈ +$187.486 al año sobre los $1.249.909,29 de los últimos doce meses.
            </div>
            <div style={{ fontFamily: 'var(--fuente-texto)', fontSize: 19, lineHeight: 1.45, color: 'var(--fm-neg-2)' }}>
              Se mide cada mes contra el mismo mes de 2025.
            </div>
          </div>

          {/* puntos de control mensuales */}
          <div className="tarjeta-cifra" style={{ justifyContent: 'space-between', gap: 0, padding: '28px 30px' }}>
            <div className="rot" style={{ fontSize: 22, marginBottom: 18 }}>Puntos de control · facturación del mes</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', columnGap: 26, rowGap: 0, alignItems: 'baseline' }}>
              <div className="pie" style={{ paddingBottom: 10 }}>Mes</div>
              <div className="pie" style={{ textAlign: 'right', paddingBottom: 10 }}>2025</div>
              <div className="pie" style={{ textAlign: 'right', paddingBottom: 10 }}>Meta 2026</div>
              {MESES.map(([m, a, b]) => (
                <Fila key={m} m={m} a={a} b={b} />
              ))}
              <div style={{ ...celda, fontSize: 26, color: 'var(--fm-azul)', paddingTop: 16 }}>Trimestre</div>
              <div style={{ ...celda, fontSize: 24, color: 'var(--fm-txt-3)', textAlign: 'right', paddingTop: 16 }}>$297.326</div>
              <div style={{ ...celda, fontSize: 34, color: 'var(--fm-amarillo-marca)', textAlign: 'right', paddingTop: 16 }}>$341.924</div>
            </div>
            <div className="pie" style={{ paddingTop: 18 }}>
              Referencia: agosto 2026 cerró en $122.580.
            </div>
          </div>

          {/* indicadores de control */}
          <div className="tarjeta-cifra" style={{ justifyContent: 'flex-start', gap: 0, padding: '28px 30px' }}>
            <div className="rot" style={{ fontSize: 22, marginBottom: 12 }}>Indicadores de control · agosto → meta a diciembre</div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto', justifyContent: 'space-between' }}>
              {INDICADORES.map(([n, base, meta]) => (
                <div key={n} style={{
                  display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', alignItems: 'baseline',
                  padding: '9px 0', borderBottom: '1px solid rgba(40, 74, 134, 0.10)',
                }}>
                  <div style={{ fontFamily: 'var(--fuente-texto)', fontSize: 20, color: 'var(--fm-txt-1)' }}>{n}</div>
                  <div className="comparativa" style={{ justifyContent: 'flex-end' }}>
                    <span className="antes" style={{ fontSize: 22 }}>{base}</span>
                    <span className="flecha" style={{ fontSize: 20 }}>→</span>
                    <span className="ahora" style={{ fontSize: 28 }}>{meta}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Conclusion>
          Una sola meta, la misma de julio, medida mes a mes contra el mismo mes de 2025. Los
          seis indicadores dicen si el plan está funcionando antes de que lo diga la venta: la
          conversión en Emergencia y CIAM y el margen del mes son los que agosto dejó abajo.
        </Conclusion>
      </div>
    </Lamina>
  )
}

function Fila({ m, a, b }) {
  return (
    <>
      <div style={{ ...celda, fontSize: 24, color: 'var(--fm-azul)', padding: '12px 0', borderTop: '1px solid rgba(40, 74, 134, 0.10)' }}>{m}</div>
      <div style={{ ...celda, fontSize: 22, color: 'var(--fm-txt-3)', textAlign: 'right', padding: '12px 0', borderTop: '1px solid rgba(40, 74, 134, 0.10)' }}>{a}</div>
      <div style={{ ...celda, fontSize: 28, color: 'var(--fm-azul)', textAlign: 'right', padding: '12px 0', borderTop: '1px solid rgba(40, 74, 134, 0.10)' }}>{b}</div>
    </>
  )
}
