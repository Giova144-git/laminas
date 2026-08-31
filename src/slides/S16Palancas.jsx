import Lamina from '../components/Lamina.jsx'
import { Icono } from '../components/Grafico.jsx'

/* Palancas — tres vías de captación y dos habilitadores. Los iconos salen de
   la biblioteca corporativa (lámina 21 del PPTX de plantillas): 14 paciente
   hospitalizado, 13 signos vitales, 01 cobertura, 02 horario, 26 crecimiento
   por categorías. */

const PALANCAS = [
  {
    ic: 14, num: 'PALANCA 01', titulo: 'Captación al alta',
    cuerpo: 'Llevar la participación de los pacientes que salen de hospitalización y consulta al nivel que CIAM ya alcanza hoy.',
    hoy: '24,36 %', apoyo: 'CIAM ya logra 37,10 %',
  },
  {
    ic: 13, num: 'PALANCA 02', titulo: 'Emergencia',
    cuerpo: 'Entrevista de farmacia antes del alta, con guion no comercial: el paciente conoce sus opciones de pago antes de irse.',
    hoy: '17,54 %', apoyo: 'menos de la mitad que CIAM',
  },
  {
    ic: 1, num: 'PALANCA 03', titulo: 'Cobertura abierta',
    cuerpo: 'PAMM es autogestión del asegurado y no exige hospitalización: se abre a toda la comunidad Mercantil y el esquema se replica con los siguientes pagadores.',
    hoy: '4 facturas', apoyo: 'ambulatorias al mes, sin promoción alguna',
  },
]

export default function S16Palancas() {
  return (
    <Lamina fondo={17} titulo="Tres palancas y dos habilitadores">
      <div className="lienzo">
        <div className="rejilla rejilla-3 fila-crece">
          {PALANCAS.map((p) => (
            <div key={p.num} className="palanca">
              <div className="palanca-cuerpo">
                <Icono n={p.ic} size={58} />
                <div className="num">{p.num}</div>
                <h3>{p.titulo}</h3>
                <p>{p.cuerpo}</p>
              </div>
              <div className="cifra-apoyo">Hoy <b>{p.hoy}</b> · {p.apoyo}</div>
            </div>
          ))}
        </div>

        <div className="rejilla rejilla-2" style={{ minHeight: 186 }}>
          <div className="habilitador">
            <Icono n={2} size={56} />
            <div className="txt">
              <b>Horario hasta las 8:30 pm</b>
              Hoy se cierra a las 7:00 pm: las altas y las emergencias de la tarde
              encuentran la farmacia cerrada.
            </div>
          </div>
          <div className="habilitador">
            <Icono n={26} size={56} />
            <div className="txt">
              <b>Layout de categorías · Grupo Atenas</b>
              Planograma, surtido y estudio de mercado: el camino para recuperar las
              2.643 unidades de medicinas cedidas en el período.
            </div>
          </div>
        </div>
      </div>
    </Lamina>
  )
}
