import Lamina from '../components/Lamina.jsx'
import { Grafico } from '../components/Grafico.jsx'

/* Captación de pacientes de alta — recorte del tablero "Seguimiento altas"
   (lámina 1 del PPTX de KPIs), ventana julio 2025 – julio 2026.
   El fondo 8 lleva la masa azul en la columna izquierda inferior. */
export default function S07Altas() {
  return (
    <Lamina fondo={8} titulo="Captación de pacientes de alta" subtitulo="Julio 2025 – Julio 2026">
      <div className="lienzo">
        <div className="bloque-grafico ancho fila-crece">
          <div className="marco-grafico">
            <Grafico
              name="anual-participacion.png"
              alt="Porcentaje de participación de pacientes de alta en la farmacia, por mes"
            />
          </div>
          <div className="columna-cifras">
            <div className="tarjeta-cifra">
              <div className="rot">Pacientes de alta</div>
              <div className="val val-sm">8.424</div>
            </div>
            <div className="tarjeta-cifra">
              <div className="rot">Compraron en la farmacia</div>
              <div className="val val-sm">2.052</div>
            </div>
            <div className="tarjeta-cifra destacada">
              <div className="rot">Participación</div>
              <div className="val">24,36 %</div>
            </div>
          </div>
        </div>

        <div className="rejilla rejilla-3" style={{ minHeight: 176 }}>
          <div className="tarjeta-cifra">
            <div className="rot">Facturado por pacientes de alta</div>
            <div className="val val-sm">$152.780,92</div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">Peso sobre la facturación</div>
            <div className="val val-sm">11,34 %</div>
          </div>
          <div className="tarjeta-cifra destacada">
            <div className="rot">Ticket del paciente de alta</div>
            <div className="val val-sm">$74,45</div>
            <div className="pie">Ticket general: $22,80</div>
          </div>
        </div>
      </div>
    </Lamina>
  )
}
