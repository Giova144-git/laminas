import Lamina from '../components/Lamina.jsx'
import { Grafico } from '../components/Grafico.jsx'
import Comparativa from '../components/Comparativa.jsx'
import Conclusion from '../components/Conclusion.jsx'

/* Conversión por pagador — recorte de la lámina 11 del PDF de agosto.
   La unidad de medida son pacientes convertidos: la variación julio → agosto
   se expresa también en piezas.

   Nombres según la leyenda del tablero de agosto. La serie verde (julio 30,
   agosto 35) figuraba en el tablero de julio como Makler; en el de agosto la
   leyenda la nombra Seguros Caracas, con los mismos valores de enero a julio.

   Mercantil enero – agosto: 50+79+87+112+104+109+122+116 = 779 de 1.814
   (42,9 %). En agosto: 116 de 262 compradores (44 %). */
export default function S10Pagadores() {
  return (
    <Lamina fondo={9} titulo="Conversión por pagador" subtitulo="Enero – agosto 2026">
      <div className="lienzo">
        <div className="bloque-grafico fila-crece" style={{ gridTemplateColumns: 'minmax(0, 1fr) 540px' }}>
          <div className="marco-grafico">
            <Grafico
              name="sem-pagadores.png"
              alt="Pacientes que compraron en la farmacia, por compañía de seguros"
            />
          </div>
          <div className="columna-cifras">
            <Comparativa
              destacada
              rot="Mercantil Seguros · julio → agosto"
              antes="122"
              ahora="116"
              delta="−4,9 %"
              pie="−6 pacientes · 44 % de los compradores de agosto"
            />
            <Comparativa
              rot="Particular · julio → agosto"
              antes="63"
              ahora="49"
              delta="−22,2 %"
              pie="−14 pacientes · la mayor baja del mes"
            />
            <Comparativa
              rot="Seguros Caracas · julio → agosto"
              antes="30"
              ahora="35"
              delta="+16,7 %"
              pie="+5 pacientes · tercer pagador del mes"
            />
          </div>
        </div>

        <Conclusion>
          Mercantil Seguros encabeza la conversión todos los meses del año: 779 de los 1.814
          pacientes que compraron entre enero y agosto (42,9 %). La baja del mes se concentró
          en Particular, que perdió 14 pacientes; Seguros Caracas fue el único de los tres
          principales que creció.
        </Conclusion>
      </div>
    </Lamina>
  )
}
