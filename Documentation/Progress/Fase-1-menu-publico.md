# Fase 1 — Datos semilla + Menú público (solo lectura)

**Fecha:** 2026-08-20
**Estado:** Cerrada con visto bueno del usuario.

## Qué se hizo

- Se pobló `data/menu.json` con la carta de un restaurante ficticio pero creíble: **Casa Milpa**, cocina mexicana de antojitos. Estructura siguiendo la sección 3 del plan original: `business` (nombre, logoUrl, primaryColor) + `categories` con `items` (id, name, description, price, available, imageUrl).
  - 5 categorías: Para Empezar, Antojitos, Platos Fuertes, Postres, Bebidas.
  - 18 platillos con precios en MXN, uno marcado `available: false` para probar el estado "agotado".
- Se definió dirección de diseño propia (no branding de Ravyn/Semillero), siguiendo la sección 5 del plan original:
  - Tipografía: **Fraunces** (display, con carácter) para nombres de platillos y headers, **Work Sans** para cuerpo — vía `next/font/google`, evitando el combo default Inter+system-ui.
  - Paleta cálida propia para gastronomía: crema (`--milpa-cream`), tarjeta (`--milpa-card`), tinta cálida (`--milpa-ink` / `--milpa-ink-soft`), terracota como acento principal (`--milpa-terracotta`), oliva como acento secundario (`--milpa-olive`). Tokens definidos en `globals.css` y expuestos en `tailwind.config.ts`.
  - Sin guiones largos, sin emojis, sin gradientes genéricos, sin iconografía de stock.
- Se construyó `src/lib/menu.ts`: lector server-side de `data/menu.json` con tipos (`MenuData`, `MenuCategory`, `MenuItem`) y helper `formatPrice`.
- Se construyó `/menu` (`src/app/menu/page.tsx`) como server component, mobile-first:
  - Header con nombre del negocio en fuente display.
  - Nav de categorías con scroll horizontal (mobile) / centrado (desktop), con anchors a cada sección.
  - Cada categoría renderiza sus platillos en formato "menú impreso": nombre — línea punteada — precio, con descripción debajo. Items no disponibles se muestran con opacidad reducida y etiqueta "Agotado" en vez de precio.
- Se actualizó `/` (`src/app/page.tsx`) para dejar de ser el placeholder de `create-next-app`: ahora muestra el nombre del negocio y un link a `/menu`.
- Se eliminaron las fuentes Geist (`GeistVF.woff`, `GeistMonoVF.woff`) que quedaron del scaffold de Fase 0 y ya no se usan.

## Verificación realizada

- `npm install` (dependencias no estaban instaladas en este entorno) sin errores bloqueantes.
- `npx next lint` limpio, sin warnings ni errores.
- `npm run dev` levanta sin errores; `/menu` responde 200 y renderiza el HTML esperado.
- Verificación visual con capturas en dos breakpoints (Playwright + Chromium embebido):
  - Mobile (375px): header centrado, nav de categorías con scroll horizontal, tarjetas de platillos legibles, tap targets adecuados.
  - Desktop (1280px): contenido centrado en columna de lectura (`max-w-2xl`), nav de categorías centrado, sin necesidad de layout multi-columna (se mantiene el criterio de "menú legible", no dashboard).
  - Ambas capturas se compartieron con el usuario, quien dio el visto bueno explícito.

## Decisiones / desviaciones respecto al plan original

- El plan original pedía capturar la carta real de un prospecto elegido. El usuario decidió explícitamente usar datos de ejemplo realistas (no Lorem Ipsum) por ahora, para no bloquear el avance de fases, dejando pendiente reemplazarlos por la carta real de un prospecto más adelante (basta con editar `data/menu.json`, la estructura ya es la definitiva).
- No se invocó una skill dedicada de "frontend-design" (mencionada en el plan original) porque no existe como tal en este entorno; la dirección de diseño (tipografía, paleta, tono) se definió directamente siguiendo los lineamientos escritos en la sección 5 del plan.

## Pendiente / fuera de alcance de esta fase

- Sin edición de datos todavía — `/menu` es de solo lectura (Fase 2: CRUD + persistencia).
- Sin QR (Fase 3) ni deploy (Fase 4).
- La carta real del prospecto sigue pendiente de captura; cuando se elija, solo hay que reemplazar el contenido de `data/menu.json` (la estructura no cambia).

## Nota sobre el protocolo de cierre de fase

`/graphify` no venía preinstalado en esta sesión remota (es una skill de terceros, no del catálogo de plugins de claude.ai). Se instaló vía `pip install graphifyy && graphify install` con autorización explícita del usuario, y se corrió `graphify . --update` sobre el proyecto: el grafo pasó de 103 a 131 nodos y de 97 a 133 edges, incorporando `data/menu.json`, `/menu`, `src/lib/menu.ts`, la dirección de diseño y este mismo reporte de progreso. La instalación es local a este contenedor efímero y no persiste entre sesiones remotas.

## Siguiente paso

Fase 2 — Persistencia real + Dashboard CRUD: API route(s)/Server Action(s) para leer y escribir `data/menu.json`, y `/dashboard` con CRUD de platillos conectado a esa API, verificando el ciclo completo editar → reflejo en vivo en `/menu`.
