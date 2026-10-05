import Lamina from '../components/Lamina.jsx'
import PlanTabla from '../components/PlanTabla.jsx'

/* Plan · Emergencia y CIAM — los dos grupos que bajaron en agosto
   (Emergencia 17,54 % → 12,66 %, CIAM 37,10 % → 26,90 %).

   Parte de las premisas de julio (captación al alta y entrevista en
   Emergencia), pero con mecanismos nuevos: el paciente de Emergencia sale
   ansioso y no escucha a un vendedor, y el médico no tiene tiempo de enviar
   nada: es el paciente quien manda la foto del récipe por el QR al WhatsApp
   de la farmacia mientras espera el alta; en CIAM la comunicación por el chat de médicos no funcionó, así
   que primero se mide qué saben los médicos de PAMM (encuesta QR) y se le
   habla directo al paciente en la sala de espera. Fechas: semanas de
   octubre – noviembre 2026 (el 5 de octubre es lunes). */

const FRENTES = [
  {
    nombre: 'Emergencia',
    base: 'agosto: 40 de 316 altas compraron (12,66 %) · meta diciembre: 20 %',
    color: 'var(--fm-azul)',
    acciones: [
      {
        titulo: 'Récipe por QR al WhatsApp de la farmacia',
        detalle: 'Tarjeta con QR en Emergencia: el paciente envía la foto del récipe mientras espera el alta y recibe la cotización.',
        fecha: 'Tarjetas 16 oct · arranque 19 oct',
        dueno: 'Gerencia de Farmacia',
        kpi: <><b>Récipes recibidos por semana</b> · % que termina en venta</>,
      },
      {
        titulo: 'Kit de alta por diagnóstico',
        detalle: 'Los cinco diagnósticos más frecuentes, armados y con precio cerrado; la cobertura Mercantil indicada en el kit.',
        fecha: '26 oct',
        dueno: 'Gerencia de Farmacia',
        kpi: <><b>Kits dispensados por semana</b></>,
      },
      {
        titulo: 'Altas de Emergencia por hora',
        detalle: 'Pedir al sistema el histórico de altas por hora y día para saber cuántas salen con la farmacia cerrada.',
        fecha: '9 oct',
        dueno: 'Gerencia de Farmacia · Sistemas',
        kpi: <><b>% de altas después de las 7:00 pm</b> · dimensiona el horario</>,
      },
    ],
  },
  {
    nombre: 'CIAM · consulta',
    base: 'agosto: 46 de 171 altas compraron (26,90 %) · meta diciembre: 37 %',
    color: 'var(--fm-azul-dato)',
    acciones: [
      {
        titulo: 'Encuesta QR a médicos sobre PAMM',
        detalle: 'Cinco preguntas en cada consultorio: si conocen PAMM Mercantil en la farmacia y qué les impide recomendarlo.',
        fecha: '12 – 23 oct · resultados 30 oct',
        dueno: 'Gerencia de Farmacia · Coordinación médica',
        kpi: <><b>Una respuesta por consultorio</b> · % que conoce PAMM</>,
      },
      {
        titulo: 'PAMM y QR en consultorios',
        detalle: 'Aviso PAMM y la misma tarjeta QR en consultorios y salas de espera: el récipe impreso en consulta también llega.',
        fecha: '2 nov',
        dueno: 'Gerencia de Farmacia',
        kpi: <><b>Facturas del convenio</b> · base agosto 186</>,
      },
      {
        titulo: 'Visita a los médicos que más recetan',
        detalle: 'Cinco minutos con los diez médicos de CIAM con más recetas, con lo que muestre la encuesta.',
        fecha: '2 – 20 nov',
        dueno: 'Gerencia de Farmacia',
        kpi: <><b>Conversión CIAM</b> · 37 % en diciembre</>,
      },
    ],
  },
]

export default function S17PlanConversion() {
  return (
    <Lamina fondo={9} titulo="Plan de acción · Emergencia y CIAM" subtitulo="Octubre – diciembre 2026">
      <div className="lienzo">
        <PlanTabla frentes={FRENTES} />
      </div>
    </Lamina>
  )
}
