import Lamina from '../components/Lamina.jsx'

/* Diagnóstico — la lámina que articula el deck. Va sobre fondo blanco:
   tres lecturas del cierre de agosto a la izquierda y la conclusión en una
   tarjeta azul a la derecha.

   Cifras de apoyo (todas de las láminas anteriores):
   01 facturación +4,6 % · margen del mes ≈ 42,7 % → ≈ 40,2 %
   02 participación 28,82 % → 25,69 % · 1.020 altas y 262 compradores
      (promedio enero – julio: 860 y 222)
   03 convenio $2.531,60 → $6.892,10 · margen 45,38 % · 116 de 262
      compradores de agosto con Mercantil. El margen del convenio es
      intencional: precios con protección por el cobro a 30 días. */

const BLOQUES = [
  ['1', 'Más venta, el mismo margen',
    'Agosto fue el mes más alto de los doce, 23,5 % por encima de agosto 2025. Pero el costo creció al doble de ritmo que la venta: el margen del mes bajó cerca de 2,5 puntos y en dólares agosto ganó lo mismo que julio.',
    'Facturación +4,6 % · margen ≈ 42,7 % → ≈ 40,2 %'],
  ['2', 'Más pacientes de alta, menos conversión',
    'Hubo 1.020 altas y 262 compradores, ambos por encima del promedio del año, y cada uno gastó más. Pero la proporción cayó: CIAM y Emergencia perdieron más de una cuarta parte de su conversión; Hospitalización se sostuvo.',
    'Participación 28,82 % → 25,69 % · Emergencia 12,66 %'],
  ['3', 'Mercantil crece con el margen protegido',
    'Casi triplicó su facturación en un mes y concentra el 44 % de los pacientes de alta que compraron en agosto. Su margen por encima del promedio es la protección de precio por el cobro a 30 días con devaluación: la prevención funcionó.',
    'Agosto $6.892,10 · margen 45,38 % · 116 de 262 compradores'],
]

export default function S15Diagnostico() {
  return (
    <Lamina fondo={9} titulo="Diagnóstico" subtitulo="Lectura del cierre de agosto 2026">
      <div className="lienzo">
        <div
          className="fila-crece"
          style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 500px', gap: 56, alignItems: 'stretch' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 22 }}>
            {BLOQUES.map(([n, titulo, cuerpo, cifra]) => (
              <div
                key={n}
                style={{
                  display: 'grid', gridTemplateColumns: '88px 1fr', gap: 24,
                  flex: '1 1 0', alignItems: 'center',
                  background: 'var(--fm-blanco)', borderRadius: 16,
                  border: '1px solid rgba(40, 74, 134, 0.08)',
                  boxShadow: '0 10px 28px rgba(40, 74, 134, 0.10)',
                  padding: '20px 30px',
                }}
              >
                <div style={{
                  fontFamily: 'var(--fuente-titulo)', fontWeight: 700, fontSize: 60,
                  color: 'var(--fm-amarillo-marca)', lineHeight: 1,
                }}>{n}</div>
                <div>
                  <h3 style={{ fontSize: 40, color: 'var(--fm-azul)', lineHeight: 1.1 }}>{titulo}</h3>
                  <div style={{
                    fontFamily: 'var(--fuente-texto)', fontSize: 23, lineHeight: 1.42,
                    color: 'var(--fm-txt-1)', marginTop: 10,
                  }}>{cuerpo}</div>
                  <div style={{
                    fontFamily: 'var(--fuente-titulo)', fontWeight: 700, fontSize: 24,
                    color: 'var(--fm-azul)', marginTop: 12,
                    display: 'inline-block', paddingBottom: 3,
                    borderBottom: '3px solid var(--fm-amarillo-marca)',
                  }}>{cifra}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            alignSelf: 'stretch',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            background: 'var(--fm-azul)',
            borderRadius: 20, padding: '44px 40px',
            boxShadow: '0 16px 40px rgba(40, 74, 134, 0.28)',
          }}>
            <div style={{
              fontFamily: 'var(--fuente-titulo)', fontWeight: 700, fontSize: 19,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--fm-amarillo-claro)', marginBottom: 20,
            }}>La lectura</div>
            <div style={{
              fontFamily: 'var(--fuente-titulo)', fontWeight: 700, fontSize: 48,
              lineHeight: 1.18, color: 'var(--fm-blanco)',
            }}>
              Agosto vendió más, pero dejó menos margen y convirtió menos en Emergencia y CIAM. Ahí se concentra el plan.
            </div>
            <div style={{
              height: 4, width: 96, borderRadius: 2, marginTop: 28,
              background: 'var(--fm-amarillo-marca)',
            }} />
          </div>
        </div>
      </div>
    </Lamina>
  )
}
