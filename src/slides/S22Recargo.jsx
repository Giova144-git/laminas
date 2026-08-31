import Lamina from '../components/Lamina.jsx'
import { Grafico } from '../components/Grafico.jsx'

/* Gestión comercial 2/3 — El recargo preventivo del 10 %. Recorte de la
   lámina 14 del PPTX de cierre: análisis de pérdida cambiaria sobre las
   facturas de Mercantil pagadas entre mayo y julio de 2026.

   Mercantil paga a plazo. Entre que se emite la factura y se cobra, la tasa
   se mueve, y ese diferencial se lo come el margen. El recargo del 10 %
   aplicado por delante absorbió casi toda esa diferencia. */
export default function S22Recargo() {
  return (
    <Lamina fondo={12} cabeceraClara titulo="El recargo preventivo del 10 %" subtitulo="Gestión comercial · Mercantil Seguros">
      <div className="lienzo">
        <div className="marco-grafico fila-crece">
          <Grafico
            name="comercial-mercantil-recargo.png"
            alt="Comparativa de pérdida cambiaria con y sin el recargo del 10 % sobre la facturación Mercantil"
          />
        </div>

        <div className="rejilla rejilla-3" style={{ minHeight: 152 }}>
          <div className="tarjeta-cifra">
            <div className="rot">Sin el recargo, la pérdida habría sido</div>
            <div className="val val-sm">−10,80 %</div>
            <div className="pie">−$511,79 sobre lo facturado</div>
          </div>
          <div className="tarjeta-cifra destacada">
            <div className="rot">Con el recargo aplicado</div>
            <div className="val val-sm">−1,09 %</div>
            <div className="pie">−$64,74 · pérdida prácticamente neutralizada</div>
          </div>
          <div className="tarjeta-cifra">
            <div className="rot">Valor preservado</div>
            <div className="val val-sm">$447,05</div>
            <div className="pie">Sobre una base de $4.023,49</div>
          </div>
        </div>

        <div className="banda-nota">
          <div className="nota">
            La decisión funcionó: el diferencial cambiario entre emisión y cobro dejó
            de absorber margen. Es la condición que hace sostenible crecer por la vía
            del convenio.
          </div>
        </div>
      </div>
    </Lamina>
  )
}
