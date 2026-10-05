import Lamina from '../components/Lamina.jsx'
import { Grafico } from '../components/Grafico.jsx'
import Comparativa from '../components/Comparativa.jsx'
import Conclusion from '../components/Conclusion.jsx'

/* Participación por grupo — recorte de la lámina 4 del PDF de agosto, con
   las tres series (CIAM, Emergencia, Hospitalización) sobre el mismo eje.
   Volumen y ticket del año: láminas 5 a 10.

   Agosto aislado por grupo, por diferencia con enero – julio (CIAM 827
   altas / 269 compraron, Hosp. 3.042 / 1.022, Emer. 2.149 / 261):
     CIAM 171 altas, 46 compraron → 26,90 %
     Hosp. 533 altas, 176 compraron → 33,02 %
     Emer. 316 altas, 40 compraron → 12,66 %
   Los tres porcentajes coinciden con los puntos de agosto del gráfico. */
export default function S09Grupos() {
  return (
    <Lamina fondo={17} titulo="Participación por grupo" subtitulo="Enero – agosto 2026">
      <div className="lienzo">
        <div className="bloque-grafico fila-crece" style={{ gridTemplateColumns: 'minmax(0, 1fr) 540px' }}>
          <div className="marco-grafico">
            <Grafico
              name="sem-grupos.png"
              alt="Participación mensual por grupo: CIAM, Emergencia y Hospitalización"
            />
          </div>
          <div className="columna-cifras">
            <Comparativa
              rot="CIAM · julio → agosto"
              antes="37,10 %"
              ahora="26,90 %"
              delta="−27,5 %"
              pie="Agosto: 46 de 171 altas · año: 998 altas, ticket $59,46"
            />
            <Comparativa
              rot="Hospitalización · julio → agosto"
              antes="33,07 %"
              ahora="33,02 %"
              delta="estable"
              pie="Agosto: 176 de 533 altas · año: 3.575 altas, ticket $83,51"
            />
            <Comparativa
              destacada
              rot="Emergencia · julio → agosto"
              antes="17,54 %"
              ahora="12,66 %"
              delta="−27,8 %"
              pie="Agosto: 40 de 316 altas · año: 2.465 altas, ticket $58,47"
            />
          </div>
        </div>

        <Conclusion>
          Hospitalización, que trajo más de la mitad de las altas del mes (533 de 1.020),
          sostuvo su conversión en 33 %. La caída de agosto viene de CIAM (−10,20 puntos) y
          de Emergencia (−4,88 puntos), que sigue siendo el grupo que menos convierte: 40
          compradores sobre 316 altas.
        </Conclusion>
      </div>
    </Lamina>
  )
}
