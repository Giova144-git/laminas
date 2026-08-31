import Lamina from '../components/Lamina.jsx'
import { Grafico } from '../components/Grafico.jsx'

/* Composición de la venta — los dos donuts del tablero general recortados a
   su tarjeta blanca, y debajo el movimiento en UNIDADES por categoría
   (láminas 22 y 23 del PPTX de KPIs), que es donde se ve qué creció y qué
   se encogió en piezas, no en dinero. */
export default function S06Mezcla() {
  return (
    <Lamina fondo={7} cabeceraClara titulo="Composición de la venta" subtitulo="Agosto 2025 – Julio 2026">
      <div className="lienzo">
        <div
          className="fila-crece"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30 }}
        >
          <div className="marco-grafico">
            <Grafico name="mezcla-categorias.png" alt="Reparto de la venta entre medicinas y misceláneos" />
          </div>
          <div className="marco-grafico">
            <Grafico name="tipo-cliente.png" alt="Reparto entre clientes nuevos y ya registrados" />
          </div>
        </div>

        <div className="rejilla rejilla-4" style={{ minHeight: 192 }}>
          <div className="tarjeta-cifra destacada">
            <div className="rot">Unidades · misceláneos</div>
            <div className="val val-sm">180.342 <span className="delta sube" style={{ fontSize: 17 }}>+18,7 %</span></div>
            <div className="pie">Período anterior: 151.977</div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">Unidades · medicinas</div>
            <div className="val val-sm">56.943 <span className="delta baja" style={{ fontSize: 17 }}>−4,4 %</span></div>
            <div className="pie">Período anterior: 59.586</div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">Alimentos · el mayor motor</div>
            <div className="val val-sm">129.394 <span className="delta sube" style={{ fontSize: 17 }}>+25,0 %</span></div>
            <div className="pie">Período anterior: 103.496</div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">Medicinas con prescripción</div>
            <div className="val val-sm">43.223 <span className="delta baja" style={{ fontSize: 17 }}>−7,6 %</span></div>
            <div className="pie">Período anterior: 46.792</div>
          </div>
        </div>

        <div className="banda-nota">
          <div className="nota">
            En unidades el período creció por misceláneos, con alimentos como motor.
            Las medicinas cedieron piezas pero ganaron margen (40,49 % desde 36,52 %),
            y el ticket promedio bajó 9,7 % por ese cambio de mezcla. La recompra se
            mantuvo al alza: 45,24 %, un punto y medio por encima del período anterior.
          </div>
        </div>
      </div>
    </Lamina>
  )
}
