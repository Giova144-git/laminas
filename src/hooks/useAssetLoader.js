import { useEffect, useState } from 'react'

/* Precarga todo antes de mostrar el deck: tipografía, logos, los fondos de
   la plantilla corporativa, los iconos y los recortes de los tableros.

   Los fondos son el activo pesado (17 imágenes de 2000×1125): sin precarga,
   la primera pasada por el deck los muestra apareciendo de golpe al llegar
   a cada lámina, que es exactamente lo que no puede pasar en vivo.

   La carga corre en un singleton de módulo (no dentro del efecto de React):
   en desarrollo StrictMode invoca los efectos dos veces con una limpieza
   sintética entre medias, y esa limpieza cancelaría la descarga real. Con el
   singleton, ambas invocaciones se SUSCRIBEN al mismo proceso en curso. */

const LOGOS = [
  '/assets/logos/isotipo.png',
  '/assets/logos/isotipo-negativo.png',
  '/assets/logos/isotipo-azul.png',
  '/assets/logos/logotipo.png',
  '/assets/logos/logotipo-negativo.png',
  '/assets/logos/logotipo-azul.png',
]

/* fondos disponibles: las láminas 6 y 20 del PPTX no traen imagen de fondo
   (son blanco liso), por eso faltan de la serie */
const FONDOS = [2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  .map((n) => `/assets/fondos/fondo-${String(n).padStart(2, '0')}.png`)

const ICONOS = Array.from({ length: 29 }, (_, i) =>
  `/assets/iconos/icono-${String(i + 1).padStart(2, '0')}.png`)

/* recortes de los tableros de Power BI (PPTX "KPI's farmacia Julio 26").
   Se añaden aquí a medida que cada lámina los va usando. */
const GRAFICOS = [
  'anual-facturacion',
  'comercial-descuentos',
  'comercial-mercantil-recargo',
  'anual-margen',
  'anual-participacion',
  'horario-extendido',
  'mercantil-facturado',
  'mercantil-facturas',
  'mercantil-margen',
  'mercantil-pie',
  'mercantil-semanas',
  'mezcla-categorias',
  'sem-grupos',
  'sem-pagadores',
  'sem-participacion',
  'tipo-cliente',
].map((n) => `/assets/graficos/${n}.png`)

const TODAS = [...LOGOS, ...FONDOS, ...ICONOS, ...GRAFICOS]

const TIMEOUT_IMAGEN_MS = 12000
const TIMEOUT_GLOBAL_MS = 26000
const P_FUENTES = 8
const P_IMAGENES = 92

function cargarImagen(src) {
  return new Promise((resolve) => {
    const img = new Image()
    let listo = false
    const fin = () => { if (!listo) { listo = true; resolve() } }
    img.onload = fin
    /* un recorte que todavía no existe no puede bloquear el deck: cuenta
       como resuelto y la lámina mostrará su marco de "pendiente" */
    img.onerror = fin
    img.src = src
    setTimeout(fin, TIMEOUT_IMAGEN_MS)
  })
}

let singleton = null

function getLoader() {
  if (singleton) return singleton

  const oyentes = new Set()
  const data = { progress: 0, ready: false }
  const emitir = () => oyentes.forEach((fn) => fn({ ...data }))

  const estado = { fuentesListas: false, imagenes: 0 }
  const calcular = () => {
    const parteImg = TODAS.length ? (estado.imagenes / TODAS.length) * P_IMAGENES : P_IMAGENES
    return Math.min(99, Math.round((estado.fuentesListas ? P_FUENTES : 0) + parteImg))
  }
  const reportar = () => {
    const pct = calcular()
    if (pct === data.progress) return
    data.progress = pct
    emitir()
  }

  ;(async () => {
    const fuentes = (document.fonts?.ready ? document.fonts.ready.catch(() => {}) : Promise.resolve())
      .then(() => { estado.fuentesListas = true; reportar() })

    const imagenes = Promise.all(
      TODAS.map((src) => cargarImagen(src).then(() => { estado.imagenes += 1; reportar() }))
    )

    const topeGlobal = new Promise((r) => setTimeout(r, TIMEOUT_GLOBAL_MS))
    await Promise.race([Promise.all([fuentes, imagenes]), topeGlobal])

    data.progress = 100
    emitir()
    setTimeout(() => { data.ready = true; emitir() }, 240)
  })()

  singleton = {
    subscribe(fn) {
      oyentes.add(fn)
      fn({ ...data })
      return () => oyentes.delete(fn)
    },
  }
  return singleton
}

export default function useAssetLoader() {
  const [state, setState] = useState(() => ({ progress: 0, ready: false }))
  useEffect(() => getLoader().subscribe(setState), [])
  return state
}
