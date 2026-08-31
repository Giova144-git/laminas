import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* Carlito y Arimo son clones métricamente compatibles de Calibri y Arial —
   las dos fuentes que fija la guía de estilos corporativa. Van en local:
   el deck se ve igual en cualquier máquina y funciona sin internet. */
import '@fontsource/carlito/400.css'
import '@fontsource/carlito/700.css'
import '@fontsource/arimo/400.css'
import '@fontsource/arimo/700.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
