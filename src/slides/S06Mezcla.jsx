import Lamina from '../components/Lamina.jsx'
import Conclusion from '../components/Conclusion.jsx'

/* Composición de la venta — los dos repartos del tablero general (lámina 14
   del PDF de agosto), redibujados como barras apiladas con formas nativas:
   el donut recortado venía de una imagen de ~190 px y se veía pixelado. Los
   porcentajes son los del tablero. Debajo, el movimiento en UNIDADES por categoría (láminas 22
   y 23), septiembre 2025 – agosto 2026 contra el período pasado.

   Lectura de los donuts (comprobada por color de segmento):
     medicinas 59,82 % · misceláneos 40,18 % de la venta
     clientes nuevos 52,72 % · ya registrados 47,28 %
   Medicinas cedió 2.350 unidades (59.495 → 57.145); con prescripción perdió
   3.231 (46.619 → 43.388) y el resto de medicinas sumó 881.
   Fórmulas magistrales (lámina 21): $46.441,47 (+21,0 %), margen 49,74 %;
   agosto $3.818,65, +39,46 % sobre julio, su mejor mes desde marzo
   ($4.322,51). */
function Reparto({ rot, a, b }) {
  return (
    <div className="tarjeta-cifra reparto">
      <div className="rot">{rot}</div>
      <div className="reparto-leyenda">
        <div className="item">
          <div className="pct">{a.pct}</div>
          <div className="nombre"><span className="muestra" style={{ background: a.color }} /><span>{a.nombre}</span></div>
        </div>
        <div className="item der">
          <div className="pct">{b.pct}</div>
          <div className="nombre"><span className="muestra" style={{ background: b.color }} /><span>{b.nombre}</span></div>
        </div>
      </div>
      {/* barra apilada con formas superpuestas, sin recorte del contenedor:
          así sale igual en el PPTX (píldora del segundo color, píldora del
          primero y un tramo recto que cuadra la unión) */}
      <div className="reparto-barra">
        <div style={{ position: 'absolute', inset: 0, borderRadius: 14, background: b.color }} />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: a.ancho, borderRadius: 14, background: a.color }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: `calc(${a.ancho} - 18px)`, width: 18, background: a.color }} />
      </div>
    </div>
  )
}

export default function S06Mezcla() {
  return (
    <Lamina fondo={9} titulo="Composición de la venta" subtitulo="Septiembre 2025 – agosto 2026 · frente a septiembre 2024 – agosto 2025">
      <div className="lienzo">
        <div
          className="fila-crece"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30 }}
        >
          <Reparto
            rot="Venta por grupo · 12 meses"
            a={{ pct: '59,82 %', nombre: 'Medicinas', color: 'var(--fm-azul)', ancho: '59.82%' }}
            b={{ pct: '40,18 %', nombre: 'Misceláneos', color: 'var(--fm-amarillo-marca)', ancho: '40.18%' }}
          />
          <Reparto
            rot="Tipo de cliente · 12 meses"
            a={{ pct: '52,72 %', nombre: 'Nuevos', color: 'var(--fm-azul)', ancho: '52.72%' }}
            b={{ pct: '47,28 %', nombre: 'Ya registrados', color: 'var(--fm-amarillo-marca)', ancho: '47.28%' }}
          />
        </div>

        <div className="rejilla rejilla-4" style={{ minHeight: 192 }}>
          <div className="tarjeta-cifra destacada">
            <div className="rot">Misceláneos · unidades en 12 meses</div>
            <div className="val val-sm">183.081 <span className="delta sube" style={{ fontSize: 17 }}>+18,8 %</span></div>
            <div className="pie">12 meses anteriores: 154.065</div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">Medicinas · unidades en 12 meses</div>
            <div className="val val-sm">57.145 <span className="delta baja" style={{ fontSize: 17 }}>−3,9 %</span></div>
            <div className="pie">12 meses anteriores: 59.495</div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">Alimentos · unidades en 12 meses</div>
            <div className="val val-sm">131.556 <span className="delta sube" style={{ fontSize: 17 }}>+25,0 %</span></div>
            <div className="pie">12 meses anteriores: 105.231</div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">Fórmulas magistrales · 12 meses</div>
            <div className="val val-sm">$46.441,47 <span className="delta sube" style={{ fontSize: 17 }}>+21,0 %</span></div>
            <div className="pie">Margen 49,74 % · agosto: $3.818,65</div>
          </div>
        </div>

        <Conclusion>
          Medicinas es el 59,82 % de la venta, pero en unidades los últimos doce meses crecieron por
          misceláneos, con alimentos como motor. Medicinas cedió 2.350 unidades y la caída
          está en prescripción (−3.231). Fórmulas magistrales es la excepción: +21,0 % con el mejor
          margen de medicinas, y agosto (+39,5 % sobre julio) fue su mejor mes desde marzo.
        </Conclusion>
      </div>
    </Lamina>
  )
}
