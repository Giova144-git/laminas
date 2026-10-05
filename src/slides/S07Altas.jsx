import Lamina from '../components/Lamina.jsx'
import { Grafico } from '../components/Grafico.jsx'
import Conclusion from '../components/Conclusion.jsx'

/* Captación de pacientes de alta — recorte del tablero "Seguimiento altas"
   (lámina 1 del PDF de agosto), ventana julio 2025 – agosto 2026.

   Agosto aislado, por diferencia con el deck anterior (julio 2025 – julio
   2026: 8.424 altas, 2.052 compraron, $152.780,92):
     1.020 altas · 262 compraron · 25,69 % (coincide con el punto del gráfico)
     $21.190,88 facturados → ticket $80,88 */
export default function S07Altas() {
  return (
    <Lamina fondo={17} titulo="Captación de pacientes de alta" subtitulo="Julio 2025 – agosto 2026">
      <div className="lienzo">
        <div className="grafico-y-rejilla fila-crece">
          <div className="marco-grafico">
            <Grafico
              name="anual-participacion.png"
              alt="Porcentaje de participación de pacientes de alta en la farmacia, por mes"
            />
          </div>
          <div className="rejilla-2x3">
            <div className="tarjeta-cifra">
              <div className="rot">Pacientes de alta · 14 meses</div>
              <div className="val val-sm">9.444</div>
            </div>
            <div className="tarjeta-cifra">
              <div className="rot">Compraron · 14 meses</div>
              <div className="val val-sm">2.314</div>
            </div>
            <div className="tarjeta-cifra destacada">
              <div className="rot">Participación · 14 meses</div>
              <div className="val">24,50 %</div>
              <div className="pie">Agosto: 25,69 %</div>
            </div>
          <div className="tarjeta-cifra">
            <div className="rot">Facturado por altas · 14 meses</div>
            <div className="val val-sm">$173.971,80</div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">Peso sobre la facturación</div>
            <div className="val val-sm">11,84 %</div>
            <div className="pie">Sobre $1.469.531,57 facturados en 14 meses</div>
          </div>
          <div className="tarjeta-cifra destacada">
            <div className="rot">Ticket del paciente de alta</div>
            <div className="val val-sm">$75,18</div>
            <div className="pie">Ticket general: $22,46</div>
          </div>
          </div>
        </div>

        <Conclusion>
          Agosto cerró en 25,69 %: 3,06 puntos sobre agosto 2025 (22,63 %) y por encima del
          promedio de los catorce meses (23,27 %), pero 3,13 puntos por debajo de julio. El
          paciente de alta que compra deja más de tres veces el ticket general.
        </Conclusion>
      </div>
    </Lamina>
  )
}
