import Lamina from '../components/Lamina.jsx'
import { Grafico } from '../components/Grafico.jsx'
import Comparativa from '../components/Comparativa.jsx'

/* Participación por grupo — la lámina bisagra del deck. El recorte es de la
   lámina 4 del PPTX de KPIs, con las tres series (CIAM, Emergencia,
   Hospitalización) sobre el mismo eje.

   Cada grupo va en UNA sola tarjeta: el movimiento de junio a julio arriba y
   su tamaño en el período al pie. Antes la información estaba repartida en
   dos filas —la columna de la derecha y una fila inferior— y a las tarjetas
   de la columna les quedaban 134 px para un contenido que pedía más del
   doble, así que el texto se salía. Consolidarlas quita la duplicación y de
   paso le devuelve altura al gráfico.

   Volumen y ticket por grupo salen de las láminas 5 a 10 del mismo PPTX. Son
   los que dimensionan la oportunidad: Emergencia es el segundo grupo por
   volumen y el último por conversión. */
export default function S09Grupos() {
  return (
    <Lamina fondo={10} titulo="Participación por grupo" subtitulo="Enero – julio 2026">
      <div className="lienzo">
        <div className="bloque-grafico fila-crece">
          <div className="marco-grafico">
            <Grafico
              name="sem-grupos.png"
              alt="Participación mensual por grupo: CIAM, Emergencia y Hospitalización"
            />
          </div>
          <div className="columna-cifras">
            <Comparativa
              rot="CIAM · consulta"
              junio="36,56 %"
              julio="37,10 %"
              delta="+1,5 %"
              pie="827 altas · 32,53 % · ticket $60,83"
            />
            <Comparativa
              rot="Hospitalización"
              junio="39,64 %"
              julio="33,07 %"
              delta="−16,6 %"
              pie="3.042 altas · 33,60 % · ticket $81,61"
            />
            <Comparativa
              destacada
              rot="Emergencia"
              junio="14,11 %"
              julio="17,54 %"
              delta="+24,3 %"
              pie="2.149 altas · 12,15 % · ticket $59,08"
            />
          </div>
        </div>

        <div className="banda-nota">
          <div className="nota">
            Emergencia es el segundo grupo por volumen —2.149 de las 6.018 altas del
            período— y el que menos convierte: ahí está la mayor oportunidad medida del
            negocio. Julio trae su mejor señal del año: subió 3,43 puntos sobre junio,
            la mayor mejora de los tres grupos.
          </div>
        </div>
      </div>
    </Lamina>
  )
}
