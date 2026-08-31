/* Resuelve la ruta de un asset contra la base del sitio.

   En desarrollo la base es "/" y todo funciona con rutas absolutas. Pero al
   publicar en GitHub Pages el deck cuelga de un subdirectorio
   (…github.io/laminas/), y una ruta que empiece por "/" apunta a la raíz del
   dominio: los fondos, los logos, los iconos y los recortes darían 404 y las
   láminas saldrían en blanco.

   `import.meta.env.BASE_URL` lo pone Vite a partir de `base` en la config, así
   que el mismo código sirve para servir en local y para publicar bajo
   cualquier subdirectorio. */
export function asset(ruta) {
  return import.meta.env.BASE_URL + String(ruta).replace(/^\//, '')
}
