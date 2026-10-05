import Lamina from '../components/Lamina.jsx'
import Conclusion from '../components/Conclusion.jsx'
import { asset } from '../rutas.js'

/* Récipe por QR al WhatsApp de la farmacia — reemplaza la idea de que
   Emergencia enviara la receta: el médico no tiene tiempo para eso y la
   farmacia no sabe cuándo sale de alta el paciente. El récipe se imprime en
   una impresora local de Emergencia (o llega impreso desde el consultorio);
   el paciente con seguro no pasa por caja.

   QR: https://wa.me/584143664516 con el mensaje "Hola, quisiera, por favor,
   la cotización de los siguientes medicamentos (adjunte la foto del récipe e
   indicaciones médicas)." Verificado con un lector de QR a varios tamaños.
   Tarjeta de 10 × 15 cm en public/assets/qr/tarjeta-qr-whatsapp.png. */

const DONDE = [
  ['Emergencia', 'Sala de espera, cubículos y puesto de enfermería.'],
  ['Caja de Emergencia', 'Para el paciente sin seguro, que sí pasa por caja.'],
  ['Consultorios de CIAM', 'El récipe también sale impreso en consulta. Desde el 2 de noviembre.'],
]
const MEDIDA = [
  ['Récipes recibidos por semana', 'cada mensaje que entra por el QR'],
  ['% de cotizaciones que terminan en venta', 'el récipe llegó y el paciente compró'],
  ['Emergencia: 12,66 % → 20 %', 'conversión del grupo en diciembre'],
]
const PASOS = [
  ['9 oct', 'QR y tarjeta listos', true],
  ['12 – 16 oct', 'Impresión y colocación en Emergencia'],
  ['19 oct', 'Arranque · se registra cada récipe recibido'],
  ['2 nov', 'Primera revisión · se extiende a CIAM', true],
  ['7 dic', 'Medición contra la meta'],
]

const titulo = { fontFamily: 'var(--fuente-titulo)', fontWeight: 700, color: 'var(--fm-azul)' }

export default function S17Qr() {
  return (
    <Lamina fondo={17} titulo="Récipe por WhatsApp · Emergencia" subtitulo="Código QR al WhatsApp de la farmacia · octubre 2026">
      <div className="lienzo">
        <div
          className="fila-crece"
          style={{ display: 'grid', gridTemplateColumns: 'auto minmax(0, 1fr) minmax(0, 1fr)', gap: 24, minHeight: 0 }}
        >
          <div className="marco-grafico" style={{ height: '100%' }}>
            <img
              className="grafico"
              src={asset('/assets/qr/tarjeta-qr-whatsapp.png')}
              alt="Tarjeta con código QR al WhatsApp de la farmacia"
              style={{ height: '100%', width: 'auto', maxWidth: 'none', borderRadius: 22, background: 'transparent' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateRows: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 18, minHeight: 0 }}>
            <div className="tarjeta-cifra" style={{ justifyContent: 'space-between', gap: 8, padding: '22px 26px' }}>
              <div className="rot" style={{ fontSize: 21 }}>Dónde va la tarjeta</div>
              {DONDE.map(([t, d]) => (
                <div key={t}>
                  <div style={{ ...titulo, fontSize: 21 }}>{t}</div>
                  <div className="pie" style={{ color: 'var(--fm-txt-1)' }}>{d}</div>
                </div>
              ))}
            </div>
            <div className="tarjeta-cifra" style={{ justifyContent: 'space-between', gap: 8, padding: '22px 26px' }}>
              <div className="rot" style={{ fontSize: 21 }}>Cómo se mide</div>
              {MEDIDA.map(([t, d]) => (
                <div key={t}>
                  <div style={{ ...titulo, fontSize: 21 }}>{t}</div>
                  <div className="pie">{d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="tarjeta-cifra" style={{ justifyContent: 'space-between', gap: 0, padding: '22px 26px' }}>
            <div className="rot" style={{ fontSize: 21, marginBottom: 6 }}>Línea del tiempo</div>
            {PASOS.map(([f, t, hito], i) => (
              <div key={f} style={{ display: 'grid', gridTemplateColumns: '22px 1fr', gap: 14, flex: '1 1 0' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: 5, marginTop: 4, flex: '0 0 auto',
                    background: hito ? 'var(--fm-amarillo-marca)' : 'var(--fm-azul)',
                  }} />
                  {i < PASOS.length - 1 && <div style={{ width: 3, flex: '1 1 auto', background: 'rgba(40, 74, 134, 0.2)', marginTop: 4 }} />}
                </div>
                <div>
                  <div style={{ ...titulo, fontSize: 21 }}>{f}</div>
                  <div style={{ fontFamily: 'var(--fuente-texto)', fontSize: 18, lineHeight: 1.3, color: 'var(--fm-txt-1)' }}>{t}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Conclusion>
          El médico no hace nada distinto y la farmacia no necesita saber cuándo sale el paciente
          de alta: el paciente manda la foto de su récipe mientras espera, con el mensaje ya escrito,
          y la cotización le llega antes de irse.
        </Conclusion>
      </div>
    </Lamina>
  )
}
