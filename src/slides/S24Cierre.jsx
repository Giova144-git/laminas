import Lamina from '../components/Lamina.jsx'

/* Cierre — solo "Gracias".
   Sin cabecera y SIN sello en la esquina superior derecha: ahí está la banda
   amarilla del fondo 19 y el isotipo chocaba contra ella. La banda queda
   limpia (se retiró el sello institucional que traía incrustado) y hace de
   único elemento gráfico. */
export default function S24Cierre() {
  return (
    <Lamina fondo={19} sinCabecera sinSello className="lam-cierre">
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          placeItems: 'center',
          zIndex: 10,
          paddingBottom: 40,
        }}
      >
        <h1
          className="anim"
          style={{ fontSize: 208, color: 'var(--fm-azul)', animationDelay: '0.12s' }}
        >
          Gracias
        </h1>
      </div>
    </Lamina>
  )
}
