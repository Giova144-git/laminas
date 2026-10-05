import Lamina from '../components/Lamina.jsx'
import { Grafico } from '../components/Grafico.jsx'
import Comparativa from '../components/Comparativa.jsx'
import Conclusion from '../components/Conclusion.jsx'

/* Captación en el año en curso — recorte de la lámina 2 del PDF de agosto
   (enero – agosto 2026).

   Agosto aislado, por diferencia con enero – julio (6.018 altas, 1.552
   compraron, $115.185,68 por altas, $736.302,62 facturados):
     1.020 altas · 262 compraron · $21.190,88 · ticket $80,88
     $736.302,62 + $122.579,66 = $858.882,28 (cuadra con la tarjeta)
     peso de las altas en la venta de agosto: 17,3 %
   Promedio mensual enero – julio: 860 altas y 222 compradores. */
export default function S08Altas26() {
  return (
    <Lamina fondo={9} titulo="Captación del año" subtitulo="Enero – agosto 2026">
      <div className="lienzo">
        <div className="grafico-y-rejilla fila-crece">
          <div className="marco-grafico">
            <Grafico
              name="sem-participacion.png"
              alt="Participación mensual de pacientes de alta, enero a agosto de 2026"
            />
          </div>
          <div className="rejilla-2x3">
            <div className="tarjeta-cifra">
              <div className="rot">Pacientes de alta · <span className="sin-corte">enero – agosto</span></div>
              <div className="val val-sm">7.038</div>
              <div className="pie">1.814 compraron en la farmacia</div>
            </div>
            <div className="tarjeta-cifra destacada">
              <div className="rot">Participación · <span className="sin-corte">enero – agosto</span></div>
              <div className="val">25,77 %</div>
              <div className="pie">Enero 18,50 % · agosto 25,69 %</div>
            </div>
          <Comparativa
            rot="Participación · julio → agosto"
            antes="28,82 %"
            ahora="25,69 %"
            delta="−10,9 %"
            pie="−3,13 puntos"
          />
          <div className="tarjeta-cifra">
            <div className="rot">Agosto · compraron</div>
            <div className="val val-sm">262 <span className="de">de</span> 1.020</div>
            <div className="pie">Promedio <span className="sin-corte">enero – julio</span>: 222 de 860</div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">Facturado por altas · <span className="sin-corte">enero – agosto</span></div>
            <div className="val val-sm">$136.376,56</div>
            <div className="pie">15,88 % de la facturación <span className="sin-corte">enero – agosto</span></div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">Ticket de agosto</div>
            <div className="val val-sm">$80,88</div>
            <div className="pie">Promedio <span className="sin-corte">enero – agosto</span>: $75,18</div>
          </div>
          </div>
        </div>

        <Conclusion>
          Agosto tuvo más altas y más compradores que el promedio del año, y cada uno gastó
          más ($80,88): las altas facturaron $21.190,88, el 17,3 % de la venta del mes. Lo que
          bajó fue la proporción: compraron más pacientes, pero no al ritmo en que crecieron
          las altas.
        </Conclusion>
      </div>
    </Lamina>
  )
}
