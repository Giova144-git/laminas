import Lamina from '../components/Lamina.jsx'
import { Grafico } from '../components/Grafico.jsx'
import Comparativa from '../components/Comparativa.jsx'

/* Conversión por pagador — recorte de la lámina 11 del PPTX de KPIs.
   El fondo 11 es azul casi a sangre: todo el contenido viaja en tarjetas
   blancas, que es como el propio tablero resuelve el mismo problema.

   Aquí la unidad de medida son pacientes convertidos, así que la variación
   junio → julio se expresa también en piezas y no sólo en porcentaje. */
export default function S10Pagadores() {
  return (
    <Lamina fondo={11} cabeceraClara titulo="Conversión por pagador" subtitulo="Enero – julio 2026">
      <div className="lienzo">
        <div className="bloque-grafico fila-crece">
          <div className="marco-grafico">
            <Grafico
              name="sem-pagadores.png"
              alt="Pacientes que compraron en la farmacia, por compañía de seguros"
            />
          </div>
          <div className="columna-cifras">
            <Comparativa
              destacada
              rot="Mercantil Seguros · pacientes"
              junio="109"
              julio="122"
              delta="+11,9 %"
              pie="+13 pacientes · el único que supera los cien"
            />
            <Comparativa
              rot="Particular · pacientes"
              junio="50"
              julio="63"
              delta="+26,0 %"
              pie="+13 pacientes · enero 2026: 29"
            />
            <Comparativa
              rot="Makler · pacientes"
              junio="34"
              julio="30"
              delta="−11,8 %"
              pie="−4 pacientes · enero 2026: 7"
            />
          </div>
        </div>

        <div className="banda-nota">
          <div className="nota">
            Mercantil Seguros es el pagador con más conversiones en cada mes del año en
            curso y cerró julio en su máximo. Entre Mercantil y Particular sumaron 26
            pacientes más que en junio. La serie recoge diecisiete compañías.
          </div>
        </div>
      </div>
    </Lamina>
  )
}
