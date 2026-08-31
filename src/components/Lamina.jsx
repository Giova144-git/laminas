/* Envoltorio de lámina: pone el fondo corporativo, la cabecera de la
   plantilla (título + filete amarillo) y el sello con el isotipo de la
   farmacia.

   Los fondos son las imágenes tal cual salieron del PPTX corporativo
   ("Plantillas Corporativa Aniversario"): no se recolorean ni se
   recomponen — la lámina se construye ENCIMA de ese fondo.

   Como cada fondo trae una masa gráfica distinta bajo la esquina superior
   derecha, la cabecera se adapta al fondo que le toca:

     · `cabeceraClara`      → título en blanco (fondos con masa azul debajo:
                              3, 7, 11, 12). Es lo mismo que hace la plantilla
                              en su lámina 3. El filete sigue amarillo.
     · `cabeceraIzquierda`  → título a la izquierda (fondo 19: la banda
                              amarilla ocupa toda la esquina derecha).
     · `selloEnBanda`       → el isotipo va DENTRO de la banda amarilla, en el
                              hueco que dejó el sello institucional retirado. */
export default function Lamina({
  fondo,                     // número de fondo (02–19) o null para blanco liso
  titulo,
  subtitulo,
  oscura = false,            // fondo azul a sangre: texto y cromo en negativo
  cabeceraClara = false,     // título en blanco sin oscurecer todo el escenario
  cabeceraIzquierda = false,
  selloBlanco = false,       // sello blanco cuando el fondo bajo la esquina es amarillo
  selloEnBanda = false,
  sinCabecera = false,
  sinSello = false,
  children,
  className = '',
}) {
  const src = fondo ? `/assets/fondos/fondo-${String(fondo).padStart(2, '0')}.png` : null
  const claro = cabeceraClara || oscura

  return (
    <div className={`lamina ${oscura ? 'lamina-oscura' : ''} ${className}`}>
      {src && <img className="lamina-fondo" src={src} alt="" />}

      {!sinCabecera && titulo && (
        <div className={`cabecera ${claro ? 'clara' : ''} ${cabeceraIzquierda ? 'izquierda' : ''}`}>
          <div className="titulo anim" style={{ animationDelay: '0.05s' }}>{titulo}</div>
          {subtitulo && (
            <div className="subtitulo anim" style={{ animationDelay: '0.12s' }}>{subtitulo}</div>
          )}
          <div
            className="filete"
            style={{ animation: 'trazarFilete 0.75s var(--ease-slide) 0.2s both' }}
          />
        </div>
      )}

      {!sinSello && (
        selloEnBanda ? (
          <div className="sello-banda anim">
            <img src="/assets/logos/isotipo-negativo.png" alt="Farmacia Policlínica Metropolitana" />
          </div>
        ) : (
          <div className={`sello ${selloBlanco ? 'sello-blanco' : ''} anim`}>
            <img
              src={selloBlanco ? '/assets/logos/isotipo.png' : '/assets/logos/isotipo-negativo.png'}
              alt="Farmacia Policlínica Metropolitana"
            />
          </div>
        )
      )}

      {children}
    </div>
  )
}
