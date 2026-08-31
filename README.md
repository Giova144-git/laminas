# Farmacia Policlínica Metropolitana — Gestión operativa

Presentación de la gestión operativa de la farmacia (**agosto 2025 – julio 2026**),
plan de acción para **septiembre, octubre y noviembre de 2026** y cierre con el
balance de la **gestión comercial** del ejercicio.

Construida en React (Vite) con el **mismo motor** del pitch de Kuadra
(`kuadra-pitch-v2`): lienzo fijo 1920×1080 escalado al viewport, numeración de
páginas, slider de progreso y pantalla completa.
Lo que cambia es toda la piel: paleta, tipografía, logo y fondos.

## Arrancar

```bash
npm install
npm run dev
```

Abre <http://localhost:5188>.

## Controles

| Tecla | Acción |
|---|---|
| `→` / `Espacio` | Lámina siguiente |
| `←` | Lámina anterior |
| `1–9` | Saltar a la lámina N |
| `Home` / `End` | Primera / última lámina |
| `F` | Pantalla completa (oculta el cromo) |
| `Ctrl+P` | Exportar el deck a PDF |

También responde a clic (tercio izquierdo retrocede, resto avanza), a *swipe*
horizontal y a los segmentos de la pista de progreso.

**Sin revelados por pasos**: cada lámina se muestra completa. Con pasos no se
distinguía dónde terminaba una lámina y empezaba la siguiente.

## Entregables

En `../entrega/`:

| Archivo | Qué es |
|---|---|
| `Farmacia PCM - Gestion operativa.pdf` | 24 páginas a 1440×810 pt |
| `Farmacia PCM - Gestion operativa.pptx` | **Editable**: 24 diapositivas con textos, formas e imágenes nativas |
| `web/` | Build estático del deck. Servir desde la raíz (`npx serve web`), no abrir con `file://` |

El PPTX **no** es una exportación de imágenes: los textos, las tarjetas, los
filetes y las barras son objetos nativos de PowerPoint. Solo van como imagen
las piezas que ya eran imagen — los fondos de la plantilla corporativa, los
recortes de los tableros de Power BI, los iconos y el logo.

Lo que se pierde al pasar a PPTX: la disolución entre láminas. La maquetación
es idéntica.

### Regenerarlos

```bash
npm run build
```

```bash
python tools/extraer_layout.py && python tools/construir_pptx.py
```

(desde la carpeta padre, con `npm run dev` corriendo). `extraer_layout.py` mide
con Playwright la maquetación real de las 21 láminas —posiciones, textos,
tipografías y colores— y `construir_pptx.py` la reconstruye con python-pptx.
El PDF sale de Chrome en modo headless imprimiendo el mismo contenedor.

## Identidad — de dónde sale cada cosa

Todo el sistema visual se extrajo de los dos PPTX entregados; nada es inventado.

### Colores

De la **Guía de estilos** (lámina 25 de *Plantillas Corporativa Aniversario*) y
del conteo de colores del propio XML del PPTX:

| Token | Valor | Origen |
|---|---|---|
| `--fm-azul` | `#284A86` | azul corporativo — 170 usos en la plantilla; títulos y párrafos |
| `--fm-azul-profundo` | `#002060` | cierre de degradados |
| `--fm-azul-vivo` | `#2642CA` | extremo oscuro de los fondos azules |
| `--fm-azul-cielo` | `#00A0F4` | extremo claro de los fondos azules |
| `--fm-amarillo` | `#FCBF00` | amarillo corporativo de la plantilla |
| `--fm-amarillo-marca` | `#F0B410` | amarillo **exacto** del logo de la farmacia |
| `--fm-amarillo-claro` | `#FFC311` | amarillo de las masas de color de los fondos |
| `--fm-crema` | `#FEF8EA` | formas secundarias de los fondos |

La guía asigna el amarillo a títulos/subtítulos y el azul (o el negro) a
títulos/párrafos: el deck respeta ese reparto. Las variaciones porcentuales
conservan el semáforo verde/rojo de los tableros de Power BI.

### Tipografía

La guía fija **Calibri** (títulos y subtítulos, solo Negrita y Regular) y
**Arial** (párrafos, solo Regular). El deck usa esas dos fuentes y, como
respaldo local, **Carlito** y **Arimo** — clones métricamente compatibles: si
la máquina que proyecta no tiene las fuentes de Office, el deck se ve idéntico
en vez de caer a una sans genérica. Funciona sin internet.

> La guía también fija topes de puntaje (Calibri 10–28 pt, Arial 5–14 pt).
> Esos topes están pensados para una lámina leída de cerca; proyectados harían
> el texto ilegible desde la tercera fila. El deck conserva las familias, los
> colores y la **jerarquía**, escalando los cuerpos a tamaño de proyección.

### Animación

La plantilla pide presentaciones sin efectos de movimiento —una regla que
existe por el peso del archivo PPTX, no por criterio visual—. El deck web usa
un registro **sobrio**: disolución entre láminas y entrada suave del contenido.
Sin revelados por pasos, sin conteos, sin flotaciones, sin rebotes.

### Comparación junio → julio

El deck cierra en julio, así que cada lámina con dato mensual lleva su
referencia inmediata: `<Comparativa>` muestra los dos meses, la flecha y el
signo del cambio, con el semáforo verde/rojo de los tableros. Está en las
láminas 3, 4, 5, 8, 9, 10, 12 y 14.

En las métricas de conteo la variación se expresa **también en piezas**
(pacientes, facturas, conversiones), no sólo en porcentaje. `invertirColor`
sirve para las métricas donde bajar es bueno: el costo del mes cae 6 % y eso
va en verde. Una variación sin signo —`estable`— se pinta en gris: no se
afirma un movimiento que el dato no respalda.

**El margen del mes va siempre en tasa, no en importe** (láminas 3, 5 y 14).
En dólares caía un 4 % arrastrado por el volumen y eso leía como deterioro
cuando la rentabilidad se mantuvo; los importes quedan al pie de la tarjeta.
Con el redondeo a miles, $52/$122 y $50/$117 no distinguen una décima, así
que la variación se declara estable en vez de fingir precisión.

Los importes de junio y julio se leen del gráfico de márgenes, que Power BI
**redondea a miles**; por eso esas variaciones van con `≈`. Las de
participación, conversiones y facturas son exactas.

| Métrica | Junio | Julio | Variación |
|---|---|---|---|
| Facturación | $122.281,06 | ≈ $117 mil | ≈ −4 % |
| Costo del mes | ≈ $71 mil | ≈ $67 mil | ≈ −6 % |
| Margen bruto (tasa) | ≈ 42,6 % | ≈ 42,7 % | estable |
| Participación de altas | 29,60 % | 28,82 % | −2,6 % |
| CIAM | 36,56 % | 37,10 % | +1,5 % |
| Hospitalización | 39,64 % | 33,07 % | −16,6 % |
| Emergencia | 14,11 % | 17,54 % | +24,3 % |
| Conversiones Mercantil | 109 | 122 | +11,9 % (+13 pacientes) |
| Conversiones Particular | 50 | 63 | +26,0 % (+13 pacientes) |
| Conversiones Makler | 34 | 30 | −11,8 % (−4 pacientes) |
| Facturado del convenio | $3.705,70 | $2.531,60 | −31,7 % |
| Facturas del convenio | 138 | 148 | +7,2 % (+10 facturas) |

El **tablero no trae unidades agregadas por mes** — la lámina 17 del PPTX de
KPIs las da por producto, no sumadas. Lo que sí existe es el crecimiento
anual en unidades por categoría (láminas 22 y 23), que alimenta la lámina 6:
misceláneos 180.342 (+18,7 %) contra medicinas 56.943 (−4,4 %), con alimentos
como motor (129.394, +25,0 %).

### Retícula

Todas las láminas de contenido ocupan **exactamente el mismo rango vertical**
—de 196 px a 994 px del lienzo de 1080— con un pie uniforme de 86 px. El
`.lienzo` es una columna flexible y las filas marcadas `.fila-crece` absorben
el espacio sobrante, así que ninguna lámina termina a media altura ni deja una
franja muerta abajo.

El contenido usa el **ancho completo** entre los márgenes corporativos. Las
tarjetas y los recortes son blancos con sombra y se leen igual sobre las masas
de color del fondo, que es como lo resuelve el propio tablero de Power BI. La
única excepción es el diagnóstico (lámina 15): ahí el texto va directo sobre el
fondo azul, sin tarjeta que lo aísle, y arranca en x=600 para no cruzarse con
la ilustración de línea.

Los recortes de tablero se escalan a su celda (`.marco-grafico` es flex con
alto definido). Con grid la fila se dimensionaba por el contenido y el
`max-height: 100%` de la imagen se medía contra sí mismo: el gráfico se salía
de la lámina.

### Logo

| Archivo | Uso |
|---|---|
| `isotipo.png` | marcador del slider, contador de páginas, favicon, sello |
| `isotipo-negativo.png` | sobre azul corporativo y sobre el sello amarillo |
| `isotipo-azul.png` | sobre masas amarillas |
| `logotipo.png` | portada (lleva la palabra FARMACIA) |
| `logotipo-negativo.png` / `-azul.png` | mismas variantes para fondos de color |

Se generaron desde los PNG originales quitando **solo el fondo exterior**
(relleno por inundación desde los bordes): los blancos interiores del logo —el
marco y las dos barras— se conservan, así el logo se lee igual sobre azul o
amarillo. El negativo invierte esa relación (amarillo → blanco, blancos
interiores → calados).

### Fondos

`public/assets/fondos/fondo-NN.png` — **las imágenes de fondo tal cual salieron
del PPTX corporativo**, en resolución nativa (2000×1125). No se recolorean ni se
recomponen: cada lámina se construye *encima* del fondo que le toca, y las
láminas siguen el **orden** del PPTX.

Se extrajeron del XML del PPTX (cada lámina lleva su fondo como `<p:bg>` con
relleno de imagen), no de una captura de pantalla — por eso están limpios de
título y de sello. Las láminas 6 y 20 del PPTX no traen imagen de fondo (son
blanco liso), por eso faltan de la serie.

Dos fondos llevaban incrustado el sello *50 Años Innovando · Policlínica
Metropolitana*; se retiró de ambos y el hueco que dejó es exactamente donde va
ahora la marca de la farmacia:

| Fondo | Hueco liberado (lienzo 1920×1080) | Qué ocupa ese hueco ahora |
|---|---|---|
| `fondo-02` (portada) | `x 1101 · y 288 · 698×509` | logotipo de la farmacia |
| `fondo-19` (banda amarilla) | `x 1568 · y 80 · 258×192` | isotipo blanco (`selloEnBanda`) |

En `fondo-19` el hueco no se rellenó con un color plano: se reconstruyó fila a
fila con el degradado real de la banda, así no queda un parche visible.

### Cabecera adaptada al fondo

Cada fondo trae una masa gráfica distinta bajo la esquina superior derecha, que
es donde la plantilla pone el título. Se midió la luminancia de esa zona en los
17 fondos y la cabecera se adapta al que le toca:

| Fondo | Zona del título | Tratamiento |
|---|---|---|
| 3, 7, 11, 12 | 95–100 % de píxeles oscuros (masa azul) | `cabeceraClara` → título **blanco**, filete amarillo |
| 16 | 100 % oscuro, azul a sangre | `oscura` → lámina completa en negativo |
| 19 | banda amarilla ocupando toda la esquina | `cabeceraIzquierda` + `selloEnBanda` |
| resto | blanco puro | cabecera estándar en azul corporativo |

No es un criterio inventado: es lo que hace la propia plantilla en su lámina 3
—título blanco, filete amarillo, sello amarillo— sobre el mismo fondo.

### Iconos

`public/assets/iconos/icono-NN.png` — los **29 iconos** de la biblioteca
corporativa (lámina 21 del PPTX), extraídos uno a uno en resolución nativa y
recortados a su contenido. Se usan solo en las láminas de palancas y de plan.

| # | Icono | # | Icono | # | Icono |
|---|---|---|---|---|---|
| 01 | muro + escudo | 11 | tubos de ensayo | 21 | teléfono |
| 02 | 24/7 | 12 | edificio clínica | 22 | redes sociales |
| 03 | casa + teléfono | 13 | corazón + signos | 23 | reseñas / estrellas |
| 04 | check amarillo | 14 | paciente hospitalizado | 24 | ciclo + check |
| 05 | check azul | 15 | familia + enfermera | 25 | embarazo |
| 06 | manos + comunidad | 16 | web (relleno) | 26 | persona + crecimiento |
| 07 | información | 17 | globo + cursor | 27 | mano + calidad |
| 08 | rehabilitación | 18 | chat amarillo | 28 | seguimiento telefónico |
| 09 | laboratorio | 19 | chat azul (relleno) | 29 | historia clínica |
| 10 | cama hospital | 20 | agente / call center | | |

### Gráficos

`public/assets/graficos/*.png` — **recortes directos** de los tableros de Power
BI del PPTX *KPI's farmacia Julio 26*, renderizados a 2,5× (hasta 3550 px de
ancho) para que se vean nítidos a pantalla completa. Los gráficos **no se
re-dibujan**; las cifras de las tarjetas sí se re-escriben a mano en tarjetas
propias.

| Archivo | Lámina KPI | Qué muestra |
|---|---|---|
| `anual-participacion.png` | 1 | % participación de pacientes de alta, jul25–jul26 |
| `anual-facturacion.png` | 14 | facturación mensual, período actual vs pasado |
| `anual-margen.png` | 19 | ingresos / costo / margen bruto por mes |
| `tipo-cliente.png` | 14 | nuevos vs ya registrados |
| `mezcla-categorias.png` | 14 | medicinas vs misceláneos |
| `sem-participacion.png` | 2 | % participación ene–jul 2026 |
| `sem-grupos.png` | 4 | participación por grupo (CIAM · EMER · HOSP) |
| `sem-pagadores.png` | 11 | seguros con más conversiones |
| `mercantil-semanas.png` | 12 | altas Mercantil con compra, por semana |
| `mercantil-pie.png` | 12 | contado vs PAMM |
| `mercantil-margen.png` | 13 | márgenes del convenio Mercantil |
| `mercantil-facturas.png` / `mercantil-facturado.png` | 20 | facturas e importe del convenio |
| `horario-extendido.png` | 25 | ventas por bloque de 30 min, 19:00–22:00 |

Del PPTX **"Gestión Operativa Farmacia PCM · Cierre junio 2026"** salen dos
recortes más, para el bloque de gestión comercial:

| Archivo | Lámina | Qué muestra |
|---|---|---|
| `comercial-descuentos.png` | 7 | descuentos en compras logrados por mes |
| `comercial-mercantil-recargo.png` | 14 | impacto del recargo del 10 % sobre la pérdida cambiaria |

La lámina 16 de ese PPTX (resumen de eventos comerciales) no trae ningún
gráfico —sólo cifras—, así que se reescribió en tarjetas propias en vez de
recortarla.

## Estructura del código

```
src/
  index.css                 sistema de diseño (tokens, primitivas, animaciones, cromo, impresión)
  main.jsx                  arranque + carga local de Carlito/Arimo
  App.jsx                   lista de láminas: id, etiqueta, componente, pasos, fondo oscuro
  components/
    DeckStage.jsx           motor: escala 1920×1080, teclado, táctil, pasos, pantalla completa, PDF
    NavigationBar.jsx       cromo: contador, pista con marcador, etiqueta, pantalla completa
    LoadingScreen.jsx       carga bloqueante con progreso real
    Lamina.jsx              envoltorio: fondo del PPTX + cabecera adaptativa + sello
    CountUp.jsx             cifra que cuenta al montarse (sin uso: el deck se pidió sobrio)
    Grafico.jsx             recorte de tablero + <Icono n={} /> de la biblioteca corporativa
  hooks/useAssetLoader.js   precarga de fuentes, logos, 17 fondos, 29 iconos y 14 recortes
  slides/S01…S21            una lámina por archivo
```

## Las 24 láminas

| # | Lámina | Fondo |
|---|---|---|
| 1 | Portada | 02 |
| 2 | Contenido | 03 |
| 3 | Resumen del período | 04 |
| 4 | Facturación | 05 |
| 5 | Margen bruto | blanco |
| 6 | Composición de la venta | 07 |
| 7 | Captación de pacientes de alta | 08 |
| 8 | Captación enero – julio 2026 | 09 |
| 9 | Participación por grupo | 10 |
| 10 | Conversión por pagador | 11 |
| 11 | Mercantil Seguros | 12 |
| 12 | Rentabilidad del convenio | 13 |
| 13 | Horario extendido | 14 |
| 14 | Cierre de julio 2026 | 15 |
| 15 | Diagnóstico | 16 |
| 16 | Tres palancas y dos habilitadores | 17 |
| 17 | La meta | 18 |
| 18 | Plan de acción · Septiembre | 19 |
| 19 | Plan de acción · Octubre | 03 |
| 20 | Plan de acción · Noviembre | 09 |
| 21 | Descuentos en compras · *gestión comercial* | 04 |
| 22 | El recargo preventivo del 10 % · *gestión comercial* | 12 |
| 23 | Eventos comerciales · *gestión comercial* | 17 |
| 24 | Gracias | 19 |

Las tres láminas de **gestión comercial** cierran el deck después del plan:
decisiones ya tomadas durante el ejercicio, con su resultado medido. Van al
final a propósito — el plan pide confianza en la ejecución, y estas tres la
respaldan con lo que ya funcionó.


## Notas sobre los datos

- **El período es agosto 2025 – julio 2026**, que es el corte real de los
  tableros de facturación, margen y categorías. La captación de altas viene en
  la ventana julio 2025 – julio 2026 y así se rotula en su lámina.
- **Julio 2026** cerró en torno a $117 mil frente a los $119.826,04 de julio
  2025. Las cifras del mes salen del gráfico de márgenes, ya redondeadas por
  Power BI, y se rotulan con `≈`.
- **El tablero de Mercantil no concilia en número de facturas**: la tarjeta dice
  150 y la serie mensual del mismo tablero suma 498. El importe sí concilia, así
  que la lámina 12 cita importes y evita el número de facturas. Conviene
  reconciliarlo antes de presentar.
- **La meta de +15 % es anual** ($183.992 sobre la base del período). El
  trimestre septiembre–noviembre no la entrega: la pone en marcha, y su prueba
  es el ritmo mensual con que cierra noviembre.
- **PAMM** es la autogestión del asegurado: el paciente monta su orden, retira
  en la farmacia y Mercantil paga después.
- Por decisión del cliente, **no se menciona a la competencia por nombre**.
- **El diagnóstico está escrito en clave de oportunidad**: los mismos datos,
  enunciados por lo que habilitan (margen probado, demanda cautiva, canal que
  convierte) en vez de por lo que se perdió.
- **La extensión de horario tiene dos cifras según la fuente**: el tablero de
  KPIs mide $3.783,27 en su ventana de 25 días (1–23 y 29–30 de junio) y el
  cierre comercial mide $6.121,24 como evento sobre el mes completo. La lámina
  23 lo aclara para que nadie lo lea como contradicción.
