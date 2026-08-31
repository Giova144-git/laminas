import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/* Vite normaliza cualquier <link> de CSS a un <link rel="stylesheet">
   bloqueante y descarta atributos personalizados — por eso el truco
   preload+swap se aplica DESPUÉS (enforce: 'post'), reescribiendo el
   <link> que Vite ya inyectó. Así el primer pintado (el boot-loader
   estático de index.html) no espera a que baje el CSS grande. */
function asyncCss() {
  return {
    name: 'async-css',
    enforce: 'post',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet"([^>]*?)href="([^"]+\.css)"([^>]*)>/g,
        (_match, pre, href, post) =>
          `<link rel="preload" as="style"${pre}href="${href}"${post} onload="this.onload=null;this.rel='stylesheet'">` +
          `<noscript><link rel="stylesheet" href="${href}"></noscript>`
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  /* GitHub Pages sirve el deck desde un subdirectorio (…github.io/laminas/).
     La base llega por entorno para que `npm run dev` siga sirviendo en la
     raíz y no haya que tocar la config al alternar entre local y publicado. */
  base: process.env.VITE_BASE || '/',
  plugins: [react(), asyncCss()],
  /* puerto fijo: el deck se abre siempre en la misma dirección, y el
     entorno de vista previa no tiene que adivinar a cuál saltó Vite */
  server: { port: 5188, strictPort: true },
})
