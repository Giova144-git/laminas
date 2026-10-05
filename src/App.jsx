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
import S13Agosto from './slides/S13Agosto.jsx'
import S15Diagnostico from './slides/S15Diagnostico.jsx'
import S16Meta from './slides/S16Meta.jsx'
import S17PlanConversion from './slides/S17PlanConversion.jsx'
import S17Qr from './slides/S17Qr.jsx'
import S18PlanCanales from './slides/S18PlanCanales.jsx'
import S19Encuesta from './slides/S19Encuesta.jsx'
import S20Linea from './slides/S20Linea.jsx'
import S24Cierre from './slides/S24Cierre.jsx'

/* Estructura del deck · cierre de agosto 2026.

   Las láminas de datos y análisis siguen la estructura del cierre de julio,
   con las cifras del PDF "KPI's farmacia Agosto 26" y cada comparación de
   mes hecha contra julio. Todas van sobre los fondos blancos de la plantilla
   corporativa (la portada conserva el suyo) y cierran con su conclusión al
   pie.

   Plan de acción (octubre – diciembre 2026): la meta de julio en un solo
   bloque, acciones con fecha, dueño e indicador, la encuesta QR a médicos y
   la línea del tiempo por semana.

   Sin revelados por pasos: cada lámina se muestra completa. */
const SLIDES = [
  { id: 'portada',     label: 'Portada',      El: S01Portada },
  { id: 'contenido',   label: 'Contenido',    El: S02Contenido },
  { id: 'resumen',     label: 'Resumen',      El: S03Resumen },
  { id: 'facturacion', label: 'Facturación',  El: S04Facturacion },
  { id: 'margen',      label: 'Margen',       El: S05Margen },
  { id: 'mezcla',      label: 'Mezcla',       El: S06Mezcla },
  { id: 'altas',       label: 'Altas',        El: S07Altas },
  { id: 'altas26',     label: '2026',         El: S08Altas26 },
  { id: 'grupos',      label: 'Grupos',       El: S09Grupos },
  { id: 'pagadores',   label: 'Pagadores',    El: S10Pagadores },
  { id: 'mercantil',   label: 'Mercantil',    El: S11Mercantil },
  { id: 'convenio',    label: 'Convenio',     El: S12Convenio },
  { id: 'agosto',      label: 'Agosto 2026',  El: S13Agosto },
  { id: 'diagnostico', label: 'Diagnóstico',  El: S15Diagnostico },
  { id: 'meta',        label: 'La meta',      El: S16Meta },
  { id: 'plan-conv',   label: 'Plan 1',       El: S17PlanConversion },
  { id: 'recipe-qr',   label: 'Récipe QR',    El: S17Qr },
  { id: 'encuesta',    label: 'Encuesta',     El: S19Encuesta },
  { id: 'plan-canal',  label: 'Plan 2',       El: S18PlanCanales },
  { id: 'linea',       label: 'Línea',        El: S20Linea },
  { id: 'cierre',      label: 'Cierre',       El: S24Cierre },
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
