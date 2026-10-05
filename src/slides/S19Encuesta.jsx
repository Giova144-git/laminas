import Lamina from '../components/Lamina.jsx'
import Conclusion from '../components/Conclusion.jsx'

/* Encuesta a médicos sobre PAMM Mercantil — reemplaza al aviso por el chat
   de médicos, que no movió la conversión. Cinco preguntas, menos de un
   minuto, código QR en cada consultorio. Formulario gratuito (Google Forms o
   Microsoft Forms): el QR se genera con el enlace del formulario y va en el
   recuadro de la derecha. En diciembre se repite la misma encuesta para
   medir el cambio. */

const PREGUNTAS = [
  ['¿Sabe que el paciente con Mercantil puede retirar sus medicamentos en la farmacia sin pagar en el momento (PAMM)?', 'Sí · No'],
  ['En el último mes, ¿se lo ha indicado a algún paciente?', 'Sí · No · No sabía que existía'],
  ['¿Qué parte de sus pacientes tiene Mercantil?', 'Menos de 10 % · 10 a 30 % · Más de 30 %'],
  ['¿Qué le facilitaría recomendarlo?', 'Material para el paciente · Enviar la receta directo a la farmacia · Saber qué cubre · Otro'],
  ['Especialidad y consultorio', 'Opcional'],
]

const PASOS = [
  ['5 – 9 oct', 'Preguntas validadas, formulario y QR listos'],
  ['12 oct', 'QR en cada consultorio · aviso a coordinación médica'],
  ['12 – 23 oct', 'Recolección · recordatorio el 19 oct'],
  ['30 oct', 'Resultados y acción definida'],
  ['2 – 20 nov', 'Visitas a médicos según los resultados'],
  ['7 – 11 dic', 'Se repite la encuesta para medir el cambio'],
]

export default function S19Encuesta() {
  return (
    <Lamina fondo={9} titulo="Encuesta a médicos · PAMM Mercantil" subtitulo="Cinco preguntas · código QR en cada consultorio · octubre 2026">
      <div className="lienzo">
        <div
          className="fila-crece"
          style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 330px 420px', gap: 24, minHeight: 0 }}
        >
          {/* preguntas */}
          <div className="tarjeta-cifra" style={{ justifyContent: 'space-between', gap: 10, padding: '24px 30px' }}>
            {PREGUNTAS.map(([q, r], i) => (
              <div key={q} style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 14, alignItems: 'start' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, background: 'var(--fm-azul)', color: 'var(--fm-blanco)',
                  display: 'grid', placeItems: 'center',
                  fontFamily: 'var(--fuente-titulo)', fontWeight: 700, fontSize: 22,
                }}>{i + 1}</div>
                <div>
                  <div style={{ fontFamily: 'var(--fuente-titulo)', fontWeight: 700, fontSize: 22, lineHeight: 1.2, color: 'var(--fm-azul)' }}>{q}</div>
                  <div style={{ fontFamily: 'var(--fuente-texto)', fontSize: 17, marginTop: 4, color: 'var(--fm-txt-2)' }}>{r}</div>
                </div>
              </div>
            ))}
          </div>

          {/* recuadro del QR */}
          <div className="tarjeta-cifra" style={{ alignItems: 'center', justifyContent: 'center', gap: 16, textAlign: 'center' }}>
            <div style={{
              width: 230, height: 230, borderRadius: 16,
              border: '3px dashed rgba(40, 74, 134, 0.45)', background: 'var(--fm-crema)',
              display: 'grid', placeItems: 'center', padding: 20,
              fontFamily: 'var(--fuente-titulo)', fontWeight: 700, fontSize: 20, color: 'var(--fm-azul)',
            }}>
              Código QR del formulario
            </div>
            <div style={{ fontFamily: 'var(--fuente-titulo)', fontWeight: 700, fontSize: 21, color: 'var(--fm-azul)' }}>
              ¿Conoce PAMM Mercantil en la farmacia?
            </div>
            <div className="pie">Menos de un minuto · respuesta anónima</div>
          </div>

          {/* línea del tiempo de la encuesta */}
          <div className="tarjeta-cifra" style={{ justifyContent: 'space-between', gap: 0, padding: '24px 28px' }}>
            <div className="rot" style={{ fontSize: 21, marginBottom: 8 }}>Línea del tiempo</div>
            {PASOS.map(([f, t], i) => (
              <div key={f} style={{ display: 'grid', gridTemplateColumns: '22px 1fr', gap: 14, alignItems: 'stretch', flex: '1 1 0' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: 5, marginTop: 4, flex: '0 0 auto',
                    background: i === 3 || i === 5 ? 'var(--fm-amarillo-marca)' : 'var(--fm-azul)',
                  }} />
                  {i < PASOS.length - 1 && <div style={{ width: 3, flex: '1 1 auto', background: 'rgba(40, 74, 134, 0.2)', marginTop: 4 }} />}
                </div>
                <div style={{ paddingBottom: 6 }}>
                  <div style={{ fontFamily: 'var(--fuente-titulo)', fontWeight: 700, fontSize: 20, color: 'var(--fm-azul)' }}>{f}</div>
                  <div style={{ fontFamily: 'var(--fuente-texto)', fontSize: 17, lineHeight: 1.3, color: 'var(--fm-txt-1)' }}>{t}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Conclusion>
          El aviso por el chat de médicos no movió la conversión de CIAM. Antes de insistir,
          medimos qué sabe cada médico de PAMM y qué le impide recomendarlo; con eso se arma la
          visita de noviembre, y en diciembre la misma encuesta dice si cambió.
        </Conclusion>
      </div>
    </Lamina>
  )
}
