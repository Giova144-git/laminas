import { useEffect, useState } from 'react'
import DeckStage from './components/DeckStage.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'
import useAssetLoader from './hooks/useAssetLoader.js'

import S01Portada from './slides/S01Portada.jsx'
import S02Contenido from './slides/S02Contenido.jsx'
import S03Resumen from './slides/S03Resumen.jsx'
import S04Facturacion from './slides/S04Facturacion.jsx'
import S05Margen from './slides/S05Margen.jsx'
import S06Mezcla from './slides/S06Mezcla.jsx'
import S07Altas from './slides/S07Altas.jsx'
import S08Altas26 from './slides/S08Altas26.jsx'
import S09Grupos from './slides/S09Grupos.jsx'
import S10Pagadores from './slides/S10Pagadores.jsx'
import S11Mercantil from './slides/S11Mercantil.jsx'
import S12Convenio from './slides/S12Convenio.jsx'
import S13Horario from './slides/S13Horario.jsx'
import S14Julio from './slides/S14Julio.jsx'
import S15Diagnostico from './slides/S15Diagnostico.jsx'
import S16Palancas from './slides/S16Palancas.jsx'
import S17Meta from './slides/S17Meta.jsx'
import S18Septiembre from './slides/S18Septiembre.jsx'
import S19Octubre from './slides/S19Octubre.jsx'
import S20Noviembre from './slides/S20Noviembre.jsx'
import S21Descuentos from './slides/S21Descuentos.jsx'
import S22Recargo from './slides/S22Recargo.jsx'
import S23Eventos from './slides/S23Eventos.jsx'
import S24Cierre from './slides/S24Cierre.jsx'

/* Estructura del deck. Los fondos siguen el ORDEN del PPTX corporativo
   (lámina 2 → fondo-02, lámina 3 → fondo-03…), y al agotarse la serie se
   reutilizan los que mejor encajan con el contenido. Cada lámina se construye
   sobre el fondo que le toca, sin recolorearlo.

   `oscura: true` = fondo azul a sangre → texto y cromo en negativo.

   Sin revelados por pasos: cada lámina se muestra completa. Con pasos no se
   distinguía dónde terminaba una lámina y empezaba la siguiente.

   Las tres últimas antes del cierre son el bloque de gestión comercial:
   decisiones ya tomadas durante el ejercicio, con su resultado medido. */
const SLIDES = [
  { id: 'portada',     label: 'Portada',     El: S01Portada },
  { id: 'contenido',   label: 'Contenido',   El: S02Contenido },
  { id: 'resumen',     label: 'Resumen',     El: S03Resumen },
  { id: 'facturacion', label: 'Facturación', El: S04Facturacion },
  { id: 'margen',      label: 'Margen',      El: S05Margen },
  { id: 'mezcla',      label: 'Mezcla',      El: S06Mezcla },
  { id: 'altas',       label: 'Altas',       El: S07Altas },
  { id: 'altas26',     label: '2026',        El: S08Altas26 },
  { id: 'grupos',      label: 'Grupos',      El: S09Grupos },
  { id: 'pagadores',   label: 'Pagadores',   El: S10Pagadores },
  { id: 'mercantil',   label: 'Mercantil',   El: S11Mercantil },
  { id: 'convenio',    label: 'Convenio',    El: S12Convenio },
  { id: 'horario',     label: 'Horario',     El: S13Horario },
  { id: 'julio',       label: 'Julio 2026',  El: S14Julio },
  { id: 'diagnostico', label: 'Diagnóstico', El: S15Diagnostico, oscura: true },
  { id: 'palancas',    label: 'Palancas',    El: S16Palancas },
  { id: 'meta',        label: 'La meta',     El: S17Meta },
  { id: 'septiembre',  label: 'Septiembre',  El: S18Septiembre },
  { id: 'octubre',     label: 'Octubre',     El: S19Octubre },
  { id: 'noviembre',   label: 'Noviembre',   El: S20Noviembre },
  { id: 'descuentos',  label: 'Descuentos',  El: S21Descuentos },
  { id: 'recargo',     label: 'Recargo 10 %', El: S22Recargo },
  { id: 'eventos',     label: 'Eventos',     El: S23Eventos },
  { id: 'cierre',      label: 'Cierre',      El: S24Cierre },
]

export default function App() {
  const { progress, ready } = useAssetLoader()
  const [showLoader, setShowLoader] = useState(true)
  const [fadingOut, setFadingOut] = useState(false)

  useEffect(() => {
    if (!ready || fadingOut) return
    setFadingOut(true)
    const t = setTimeout(() => setShowLoader(false), 520)
    return () => clearTimeout(t)
  }, [ready, fadingOut])

  return (
    <>
      {ready && <DeckStage slides={SLIDES} />}
      {showLoader && <LoadingScreen progress={progress} fadingOut={fadingOut} />}
    </>
  )
}
