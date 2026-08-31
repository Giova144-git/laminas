import Lamina from '../components/Lamina.jsx'
import Comparativa from '../components/Comparativa.jsx'

/* Cierre de julio 2026 — la lámina se reorganiza como comparación directa
   contra junio: es el último mes del período y sin su referencia inmediata
   ninguna de sus cifras dice si el negocio venía subiendo o bajando.

   El margen va en PORCENTAJE y no en importe: en dólares caía un 4 % por
   efecto del volumen, y eso contradecía la propia conclusión de la lámina.
   Los importes quedan al pie de la tarjeta.

   Power BI redondea a miles los importes del gráfico de márgenes, así que
   esas variaciones van con "≈". Las de participación y conversiones son
   exactas. */
export default function S14Julio() {
  return (
    <Lamina fondo={15} titulo="Cierre de julio 2026" subtitulo="Comparado con junio">
      <div className="lienzo">
        <div className="rejilla rejilla-4 fila-crece">
          <Comparativa
            rot="Facturación del mes"
            junio="$122.281"
            julio="≈ $117 mil"
            delta="≈ −4 %"
            pie="Junio fue el mes más alto del período"
          />
          <Comparativa
            rot="Costo del mes"
            junio="≈ $71 mil"
            julio="≈ $67 mil"
            delta="≈ −6 %"
            invertirColor
          />
          <Comparativa
            rot="Margen bruto del mes"
            junio="≈ 42,6 %"
            julio="≈ 42,7 %"
            delta="estable"
            pie="Se sostuvo con menos volumen · ≈ $52 mil → ≈ $50 mil"
          />
          <Comparativa
            destacada
            rot="Conversiones Mercantil"
            junio="109"
            julio="122"
            delta="+11,9 %"
            pie="+13 pacientes · máximo del año"
          />
        </div>

        <div className="rejilla rejilla-4 fila-crece">
          <Comparativa
            destacada
            rot="Participación de pacientes de alta"
            junio="29,60 %"
            julio="28,82 %"
            delta="−2,6 %"
            pie="Los dos mejores meses del año"
          />
          <Comparativa
            rot="CIAM · consulta"
            junio="36,56 %"
            julio="37,10 %"
            delta="+1,5 %"
          />
          <Comparativa
            rot="Hospitalización"
            junio="39,64 %"
            julio="33,07 %"
            delta="−16,6 %"
          />
          <Comparativa
            rot="Emergencia"
            junio="14,11 %"
            julio="17,54 %"
            delta="+24,3 %"
            pie="La mayor mejora del mes"
          />
        </div>

        <div className="banda-nota">
          <div className="nota">
            Julio cedió volumen frente a junio pero sostuvo el margen porcentual, subió
            en conversiones de seguro y registró la mejor cifra del año en Emergencia.
            El mes bajó en facturación; la mezcla de esa facturación mejoró.
          </div>
        </div>
      </div>
    </Lamina>
  )
}
