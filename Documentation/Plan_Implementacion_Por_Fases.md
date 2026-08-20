# Plan de Implementación por Fases — Demo Menú QR + Dashboard

Este documento organiza el [plan original](./QR_MENU_Plan_Implementacion_Demo.md) en fases independientes, cada una pensada para trabajarse en una sesión de Claude Code distinta. El objetivo es poder pausar entre fases sin perder contexto y dejar un rastro documentado del avance.

## Decisión de stack (definida el 2026-08-20)

El repo arrancó como scaffold Vite + React (SPA sin servidor). El plan original pide Next.js 14 App Router con API routes/Server Actions para que la persistencia del JSON sea real. Se decidió **migrar el scaffold a Next.js 14** en la Fase 0, en vez de mantener Vite con un servidor aparte o usar localStorage — es el camino más fiel al documento original y el que mejor soporta que el ciclo "editar → se refleja en vivo" sea real entre dispositivos distintos.

---

## Requisito transversal: responsive real (mobile + web)

Aplica a **todas** las fases que involucren UI (`/menu`, `/dashboard`, `/dashboard/qr`, y opcionales). No es un detalle cosmético — es funcional:

- `/menu` se ve casi siempre desde un celular (el cliente escanea el QR con su propio teléfono). Debe diseñarse **mobile-first**, no como una versión web "encogida". Layout, tamaños de tap target, tipografía y espaciados deben pensarse primero para pantalla chica.
- `/dashboard` debe ser responsive tanto en desktop como en mobile — no es opcional en ninguno de los dos. Desktop es donde el dashboard debe apantallar más (es la versión que se muestra en la demo de venta y la que probablemente use más el dueño del restaurante), así que ahí va el diseño más elaborado. La versión mobile puede ser más básica en jerarquía visual y layout (menos elaborada que desktop), pero tiene que ser plenamente funcional: el dueño debe poder editar un precio o marcar "agotado" desde su celular sin fricción.
- No basta con que el layout "no se rompa" a distintos anchos: hay que verificar visualmente en al menos dos breakpoints (mobile ~375px y desktop ~1280px) antes de dar por cerrada cualquier fase de UI, usando el navegador embebido para tomar capturas en ambos tamaños.
- Este requisito se verifica explícitamente antes de pedir el visto bueno de cierre en las Fases 1, 2, 3 y 4.

---

## Protocolo de cierre de fase (aplica a TODAS las fases)

Al terminar el trabajo de una fase:

1. Presentar al usuario un resumen de lo construido y pedir el visto bueno explícito para cerrar la fase.
2. Si el usuario da el visto bueno:
   - Crear (o actualizar) un archivo `Documentation/Progress/Fase-N-<nombre-corto>.md` con el resumen de lo hecho en esa fase: qué se construyó, decisiones tomadas, qué quedó pendiente o fuera de alcance, y cualquier desviación respecto al plan original.
   - Ejecutar `/graphify` sobre el proyecto: la primera vez que se corre, crea el grafo de conocimiento; en fases posteriores, lo actualiza con los cambios de esa fase.
3. Si el usuario NO da el visto bueno, no se cierra la fase: se ajusta lo señalado y se vuelve a pedir el visto bueno antes de continuar.

No se debe avanzar a la siguiente fase sin haber completado este protocolo en la fase anterior.

---

## Fase 0 — Migración de scaffold y setup base

**Objetivo:** tener un proyecto Next.js 14 (App Router) + Tailwind funcionando, listo para construir sobre él.

- Migrar el scaffold actual (Vite + React) a Next.js 14 App Router.
- Instalar y configurar Tailwind CSS.
- Definir estructura de carpetas (`app/`, `data/`, `components/`, etc.).
- Instalar dependencia `qrcode` o `qrcode.react`.
- Verificar que el proyecto corre localmente (`npm run dev`) sin errores.

**Entregable de la fase:** proyecto Next.js corriendo en local, sin páginas de producto todavía.

---

## Fase 1 — Datos semilla + Menú público (solo lectura)

**Objetivo:** tener `/menu` mostrando la carta real de un prospecto, leída desde `/data/menu.json` — sin edición todavía.

- Elegir el restaurante prospecto y capturar su carta real (nombres, precios, categorías) en el JSON semilla, siguiendo la estructura definida en el plan original (sección 3).
- Construir la página pública `/menu` leyendo del JSON.
- Aplicar dirección de diseño (sección 5 del plan original): antes de escribir componentes, invocar la skill de diseño de frontend disponible en este entorno para calibrar tipografía, paleta y tono — cálido, con carácter propio, sin señales de "AI slop" (sin guiones largos, sin emojis en UI, sin gradientes genéricos, sin iconografía default sin criterio).
- Construir `/menu` **mobile-first** (ver "Requisito transversal: responsive real" arriba) y verificar visualmente en mobile (~375px) y desktop (~1280px) antes de cerrar la fase.

**Entregable de la fase:** `/menu` renderiza la carta real, con diseño propio ya definido y responsive verificado en mobile y desktop.

---

## Fase 2 — Persistencia real + Dashboard CRUD

**Objetivo:** el corazón funcional del demo — el ciclo editar en dashboard → reflejo en vivo en `/menu`.

- Construir API route(s) o Server Action(s) para leer y escribir `data/menu.json`.
- Construir `/dashboard` con CRUD de platillos: nombre, precio, disponibilidad, categoría — conectado a esa API/Server Action.
- Verificar el ciclo completo: editar un precio o marcar "agotado" en `/dashboard` → refrescar `/menu` → el cambio se refleja sin reiniciar el servidor ni regenerar nada.
- Sin autenticación real en esta fase (queda mockeada o ausente, según se decida).
- Verificar `/dashboard` en mobile y desktop (~375px y ~1280px): el CRUD debe ser usable en ambos, sin elementos cortados ni tap targets demasiado pequeños.

**Entregable de la fase:** el ciclo edición → reflejo en vivo es real y verificado, y `/dashboard` es usable en mobile y desktop.

---

## Fase 3 — QR dinámico

**Objetivo:** página `/dashboard/qr` que genera el código QR apuntando siempre a la misma URL de `/menu`, descargable.

- Construir `/dashboard/qr` usando `qrcode`/`qrcode.react`.
- El QR debe apuntar a la URL pública desplegada de `/menu` (se ajusta una vez exista la URL de Vercel de la Fase 4, o se deja configurable por env var mientras tanto).
- Opción de descarga del QR (PNG/SVG).
- Verificar `/dashboard/qr` en mobile y desktop.

**Entregable de la fase:** QR generado y descargable, apuntando a la URL correcta, verificado en mobile y desktop.

---

## Fase 4 — Deploy a Vercel

**Objetivo:** proyecto desplegado y accesible públicamente para grabar el video de venta.

- Deploy a Vercel.
- Verificar que `/menu`, `/dashboard` y `/dashboard/qr` funcionan en producción.
- Confirmar que el QR generado en producción apunta a la URL pública correcta.
- Verificar una vez más el ciclo edición → reflejo en vivo, ahora en producción.
- Verificación final de responsive en producción: escanear el QR con un celular real (o simular mobile ~375px) para confirmar que `/menu` se ve y funciona bien tal como lo verá el cliente final.

**Entregable de la fase:** URL pública funcional, lista para el video.

---

## Fase 5 (opcional, si sobra tiempo) — Analíticas mock

**Objetivo:** `/dashboard/analytics` con datos de ejemplo, puramente cosmético.

- Construir la página con gráfica y números estáticos/de ejemplo.
- Dejar explícito en el código y en el resumen de progreso que no hay tracking real detrás.

Esta fase es la primera en cortarse si no hay tiempo — no es parte del entregable innegociable.

---

## Fase 6 (opcional) — Login mock

**Objetivo:** `/dashboard/login` solo visual, si se decide incluir.

- Pantalla de login que redirige directo al dashboard, sin validar credenciales reales.

También prescindible si el tiempo aprieta.

---

## Recordatorio final

Este proyecto es intencionalmente de un solo tenant y con persistencia ligera (JSON en archivo). Si se cierra la venta, la migración a Supabase + multi-tenant + autenticación real se planea como una sesión aparte — no se improvisa arriba de este código de demo.
