import Lamina from '../components/Lamina.jsx'
import { Grafico } from '../components/Grafico.jsx'

/* Gestión comercial 1/3 — Descuentos en compras. Recorte de la lámina 7 del
   PPTX "Gestión Operativa Farmacia PCM · Cierre junio 2026".

   Es la primera de las tres láminas de cierre comercial: decisiones tomadas
   durante el ejercicio que produjeron resultado medible. Este es un ingreso
   que no depende del tráfico ni del ticket — se negocia en la compra. */
export default function S21Descuentos() {
  return (
    <Lamina fondo={4} titulo="Descuentos en compras" subtitulo="Gestión comercial · Julio 2025 – Junio 2026">
      <div className="lienzo">
        <div className="bloque-grafico fila-crece">
          <div className="marco-grafico">
            <Grafico
              name="comercial-descuentos.png"
              alt="Descuentos en compras logrados por mes, en dólares"
            />
          </div>
          <div className="columna-cifras">
            <div className="tarjeta-cifra destacada">
              <div className="rot">Acumulado del período</div>
              <div className="val">$28.816</div>
              <div className="pie">Negociado con proveedores</div>
            </div>
            <div className="tarjeta-cifra">
              <div className="rot">Mejor mes</div>
              <div className="val val-sm">$4.624,07</div>
              <div className="pie">Octubre 2025 · marzo 2026: $4.062,01</div>
            </div>
            <div className="tarjeta-cifra">
              <div className="rot">Peso sobre el margen bruto</div>
              <div className="val val-sm">5,5 %</div>
              <div className="pie">2,3 % de la facturación del período</div>
            </div>
          </div>
        </div>

        <div className="banda-nota">
          <div className="nota">
            Es el ingreso que no depende del tráfico ni del ticket: se consigue en la
            mesa de compra y entra directo al resultado. Sobre los $521.887 de margen
            bruto del período, estos $28.816 representan uno de cada dieciocho dólares
            de margen, sin costo comercial asociado.
          </div>
        </div>
      </div>
    </Lamina>
  )
}
