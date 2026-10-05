import Lamina from '../components/Lamina.jsx'
import Comparativa from '../components/Comparativa.jsx'
import Conclusion from '../components/Conclusion.jsx'

/* Cierre de agosto 2026 — comparación directa contra julio, el cierre que se
   presentó el mes pasado.

   Exactas: facturación (etiquetas al céntimo), participación y grupos
   (puntos del gráfico), convenio Mercantil (serie mensual de la lámina 20).
   Con "≈": costo y margen del mes, que Power BI redondea a miles.
   Todo el contenido es de julio y agosto 2026 (por eso el subtítulo dice
   "comparado con julio"): agosto − julio = $5.404,66 en facturación y
   $4.360,50 en el convenio. */
export default function S13Agosto() {
  return (
    <Lamina fondo={17} titulo="Cierre de agosto 2026" subtitulo="Comparado con julio 2026">
      <div className="lienzo">
        <div className="rejilla rejilla-4 fila-crece rejilla-grande">
          <Comparativa
            rot="Facturación del mes"
            antes="$117.175"
            ahora="$122.580"
            delta="+4,6 %"
            pie="+$5.404,66 en el mes"
          />
          <Comparativa
            rot="Costo del mes"
            antes="≈ $67 mil"
            ahora="≈ $73 mil"
            delta="≈ +9 %"
            invertirColor
            pie="Creció al doble de ritmo que la venta"
          />
          <Comparativa
            rot="Margen bruto del mes"
            antes="≈ 42,7 %"
            ahora="≈ 40,2 %"
            delta="≈ −2,5 puntos"
            pie="En dólares: ≈ $50 mil → ≈ $49 mil"
          />
          <Comparativa
            destacada
            rot="Convenio Mercantil · facturado"
            antes="$2.532"
            ahora="$6.892"
            delta="+172,2 %"
            pie="+$4.360,50 en el mes"
          />
        </div>

        <div className="rejilla rejilla-4 fila-crece rejilla-grande">
          <Comparativa
            destacada
            rot="Participación de pacientes de alta"
            antes="28,82 %"
            ahora="25,69 %"
            delta="−10,9 %"
            pie="Agosto: 262 compraron de 1.020 altas"
          />
          <Comparativa
            rot="CIAM · consulta"
            antes="37,10 %"
            ahora="26,90 %"
            delta="−27,5 %"
            pie="−10,20 puntos"
          />
          <Comparativa
            rot="Hospitalización"
            antes="33,07 %"
            ahora="33,02 %"
            delta="estable"
            pie="Más de la mitad de las altas del mes"
          />
          <Comparativa
            rot="Emergencia"
            antes="17,54 %"
            ahora="12,66 %"
            delta="−27,8 %"
            pie="−4,88 puntos"
          />
        </div>

        <Conclusion>
          Agosto vendió 4,6 % más que julio y el convenio Mercantil casi triplicó su
          facturación, pero el costo subió más que la venta: el margen bajó cerca de 2,5
          puntos y en dólares quedó en el nivel de julio. La participación de pacientes de
          alta cayó 3,13 puntos, por CIAM y Emergencia; Hospitalización se sostuvo.
        </Conclusion>
      </div>
    </Lamina>
  )
}
