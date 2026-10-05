import Lamina from '../components/Lamina.jsx'

/* Cierre — solo "¡Gracias!", sobre el fondo blanco 17 con el sello de la
   farmacia en su esquina, como el resto del deck. */
export default function S24Cierre() {
  return (
    <Lamina fondo={17} sinCabecera className="lam-cierre">
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
          ¡Gracias!
        </h1>
      </div>
    </Lamina>
  )
}
