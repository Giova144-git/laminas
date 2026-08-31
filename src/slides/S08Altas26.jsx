import Lamina from '../components/Lamina.jsx'
import { Grafico } from '../components/Grafico.jsx'
import Comparativa from '../components/Comparativa.jsx'

/* Captación en el año en curso — recorte de la lámina 2 del PPTX de KPIs
   (ventana enero – julio 2026), donde la serie mensual se lee con detalle.
   La fila inferior cierra con el movimiento de junio a julio. */
export default function S08Altas26() {
  return (
    <Lamina fondo={9} titulo="Captación enero – julio 2026">
      <div className="lienzo">
        <div className="bloque-grafico ancho fila-crece">
          <div className="marco-grafico">
            <Grafico
              name="sem-participacion.png"
              alt="Participación mensual de pacientes de alta, enero a julio de 2026"
            />
          </div>
          <div className="columna-cifras">
            <div className="tarjeta-cifra">
              <div className="rot">Pacientes de alta</div>
              <div className="val val-sm">6.018</div>
            </div>
            <div className="tarjeta-cifra">
              <div className="rot">Compraron</div>
              <div className="val val-sm">1.552</div>
            </div>
            <div className="tarjeta-cifra destacada">
              <div className="rot">Participación del período</div>
              <div className="val">25,79 %</div>
              <div className="pie">Promedio del año anterior: 23,08 %</div>
            </div>
          </div>
        </div>

        <div className="rejilla rejilla-4" style={{ minHeight: 192 }}>
          <Comparativa
            destacada
            rot="Participación · junio → julio"
            junio="29,60 %"
            julio="28,82 %"
            delta="−2,6 %"
            pie="Los dos mejores meses del año, en ese orden"
          />
          <div className="tarjeta-cifra">
            <div className="rot">Facturado por pacientes de alta</div>
            <div className="val val-sm">$115.185,68</div>
            <div className="pie">15,64 % de la facturación del período</div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">Ticket promedio</div>
            <div className="val val-sm">$74,22</div>
            <div className="pie">Ticket general del período: $22,80</div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">Punto de partida · enero</div>
            <div className="val val-sm">18,50 %</div>
            <div className="pie">De enero a julio la participación subió 10,32 puntos</div>
          </div>
        </div>
      </div>
    </Lamina>
  )
}
