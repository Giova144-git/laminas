import Lamina from '../components/Lamina.jsx'

/* La meta — en DOS TRAMOS, con la aritmética a la vista.

   Tramo 1: tres líneas con base medida en el tablero.
   Tramo 2: la apertura de cobertura, que se compromete en facturas por mes
   —lo que sí se puede seguir— y no en una cifra final.

   Se retiró la línea de "ticket del paciente de alta a $85" de la versión
   anterior: era un residuo despejado para cuadrar el total, y además el
   ticket asegurado que el tablero mide ($71,59 en Mercantil, $69,50 en PAMM)
   está POR DEBAJO de los $74,45 generales. Suponer que la cobertura sube el
   ticket iba contra el dato.

   Aritmética:
   · Altas — pesos reales por grupo (CIAM 13,7 % · Hosp 50,6 % · Emer 35,7 %):
     CIAM 32,53→37 %, Hosp 33,60→38 %, Emer 12,15→25 % ⇒ ponderado 33,2 %.
     8.424 × 33,2 % = 2.797 · − 2.052 = 745 pacientes × $74,45 = $55.465
   · Horario — $113,74/día del piloto × 30 × 12 = $40.944
   · Medicinas — el donut de mezcla es por facturación (las unidades suman
     237.285 y cuadran con el total), así que medicinas facturó $733.026 con
     56.943 unidades ⇒ $12,87 por unidad. Recuperar las 2.643 perdidas =
     $34.023, que a 40,49 % de margen aportan $13.776
   · Tramo 2 — $183.992 − $130.432 = $53.560 ÷ $69,50 = 771 facturas al año */

const TRAMOS = [
  { pct: 30.1, color: 'var(--fm-azul)', label: '$55.465' },
  { pct: 22.3, color: '#3D68B0', label: '$40.944' },
  { pct: 18.5, color: '#6E93CC', label: '$34.023' },
  { pct: 29.1, color: 'var(--fm-amarillo-marca)', label: '$53.560' },
]

export default function S17Meta() {
  return (
    <Lamina fondo={18} titulo="La meta" subtitulo="Crecimiento anual, en dos tramos">
      <div className="lienzo">
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 44 }}>
          <div>
            <div className="antetitulo">Crecimiento anual objetivo</div>
            <div className="cifra" style={{ fontSize: 106, marginTop: 10 }}>+15 %</div>
          </div>
          <div style={{ paddingBottom: 8 }}>
            <div className="cifra cifra-amarilla" style={{ fontSize: 46 }}>+$183.992 al año</div>
            <div className="rotulo" style={{ marginTop: 6, maxWidth: 720 }}>
              sobre los $1.226.616,10 facturados entre agosto 2025 y julio 2026
            </div>
          </div>
        </div>

        <div className="barra-meta">
          {TRAMOS.map((t) => (
            <div key={t.label} style={{ flex: t.pct, background: t.color }}>{t.label}</div>
          ))}
        </div>

        <div className="rejilla rejilla-4 fila-crece">
          <div className="tarjeta-cifra">
            <div className="rot">Conversión de altas · 24,36 → 33,2 %</div>
            <div className="val val-sm">+$55.465</div>
            <div className="pie">745 pacientes más al año · $6.272 por punto</div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">Horario hasta 8:30 pm</div>
            <div className="val val-sm">+$40.944</div>
            <div className="pie">$3.412 al mes, a ritmo del piloto de junio</div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">Recuperar unidades de medicinas</div>
            <div className="val val-sm">+$34.023</div>
            <div className="pie">2.643 unidades a $12,87 · $13.776 de margen</div>
          </div>
          <div className="tarjeta-cifra destacada">
            <div className="rot">Apertura de cobertura · PAMM y réplica</div>
            <div className="val val-sm">+$53.560</div>
            <div className="pie">≈ 64 facturas al mes · hoy 4</div>
          </div>
        </div>

        <div className="rejilla rejilla-2" style={{ minHeight: 132 }}>
          <div className="tarjeta-cifra">
            <div className="rot">Tramo 1 · con base medida en el tablero</div>
            <div className="val val-sm">+$130.432 <span className="delta sube" style={{ fontSize: 17 }}>+10,6 %</span></div>
            <div className="pie">Altas, horario y recuperación de unidades</div>
          </div>
          <div className="tarjeta-cifra destacada">
            <div className="rot">Tramo 2 · apertura de cobertura</div>
            <div className="val val-sm">+$53.560 <span className="delta sube" style={{ fontSize: 17 }}>+4,4 %</span></div>
            <div className="pie">Se compromete el seguimiento en facturas por mes, no la cifra</div>
          </div>
        </div>

        <div className="banda-nota">
          <div className="nota">
            PAMM es autogestión del asegurado y no exige hospitalización: el tablero ya
            registra 17 facturas ambulatorias sin que nadie las haya promovido. Cada
            100 facturas ambulatorias al mes valen $83.400 al año. El tramo 2 pide 64
            al mes, entre la comunidad Mercantil y la réplica del esquema con los
            siguientes pagadores.
          </div>
        </div>
      </div>
    </Lamina>
  )
}
