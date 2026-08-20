# Fase 2 — Persistencia real + Dashboard CRUD

**Fecha:** 2026-08-20
**Estado:** Cerrada con visto bueno del usuario.

## Qué se hizo

- Se extendió `src/lib/menu.ts` con `writeMenu` y las funciones de escritura `createItem`, `updateItem`, `deleteItem`, que leen y escriben directamente `data/menu.json` en disco.
- Se creó `src/app/dashboard/actions.ts` con tres Server Actions (`createItemAction`, `updateItemAction`, `deleteItemAction`) que llaman a esas funciones y disparan `revalidatePath('/dashboard')` + `revalidatePath('/menu')` para que el cambio se refleje sin recargar el servidor.
- Se construyó `/dashboard` (`src/app/dashboard/page.tsx`) con CRUD completo de elementos del menú:
  - Cada elemento es un formulario con nombre, descripción, precio, categoría (select, permite mover el elemento entre categorías) y disponibilidad (checkbox), con botones "Guardar" y "Eliminar" (dos Server Actions distintas en el mismo `<form>` vía `formAction`).
  - Formulario "Agregar elemento" ubicado **arriba de las categorías** (no al final), para no tener que desplazarse ni colapsar todo el menú cada vez que se agrega algo nuevo — ajuste pedido explícitamente tras la primera revisión.
  - Copy generalizado de "platillo" a "elemento" en todo el dashboard, para que sirva igual a restaurantes, cafeterías o cualquier negocio con menú, no solo cocina mexicana.
  - Cada categoría es un `<details>`/`<summary>` nativo (sin JS de cliente) con contador de elementos y chevron animado (`group-open:rotate-90`), colapsable individualmente — pensado sobre todo para mobile, donde un menú largo se vuelve muy pesado de recorrer.
- Sin autenticación en esta fase, según lo definido en el plan.
- Mismo lenguaje visual que `/menu`: tipografía Fraunces/Work Sans, paleta Casa Milpa (`cream`, `card`, `ink`, `terracotta`, `olive`, `line`).

## Verificación realizada

- `next lint` limpio, `next build` compila sin errores en cada iteración.
- Ciclo completo probado con Playwright + Chromium embebido:
  - Editar un precio en `/dashboard` → guardar → se refleja en `/menu` sin reiniciar el servidor.
  - Crear un elemento nuevo desde "Agregar elemento" → aparece en `/dashboard` y en `/menu`.
  - Eliminar un elemento → desaparece de ambos.
  - `data/menu.json` se restauró a su estado original tras cada prueba (no quedaron datos de prueba en el repo).
- Verificación visual en dos breakpoints (mobile ~375px, desktop ~1280px), incluyendo el comportamiento de las secciones colapsables (colapsar todas menos una, ver el layout resultante) y la nueva posición del formulario "Agregar elemento".

## Decisiones / desviaciones respecto al plan original

- El plan original no especificaba estructura de UI para el CRUD; se decidió usar Server Actions con formularios progresivos (funcionan sin JavaScript del cliente) en vez de un cliente con `fetch` + estado, por simplicidad y porque encaja bien con App Router.
- Se agregaron dos mejoras de UX no contempladas originalmente, a pedido del usuario tras la primera revisión de la fase:
  - Secciones de categoría colapsables (`<details>`/`<summary>`), para menús largos en mobile.
  - Reubicación del formulario "Agregar elemento" al inicio de la página en vez del final.
  - Generalización del copy ("platillo" → "elemento") para que el dashboard no esté atado a vocabulario de restaurante.

## Pendiente / fuera de alcance de esta fase

- Sin QR (Fase 3) ni deploy (Fase 4).
- Sin gestión de categorías (crear/renombrar/eliminar categorías) — el CRUD es solo de elementos; las categorías siguen siendo las definidas en el JSON semilla.
- Sin autenticación — cualquiera con la URL de `/dashboard` puede editar el menú. Aceptable para esta demo de un solo tenant; se resolvería en la migración a Supabase + multi-tenant mencionada en el plan original.

## Siguiente paso

Fase 3 — QR dinámico: construir `/dashboard/qr` con `qrcode`/`qrcode.react`, generando un QR descargable que apunte a la URL pública de `/menu`.
