# Fase 3 — QR dinámico

**Fecha:** 2026-08-20
**Estado:** Cerrada con visto bueno del usuario.

## Qué se hizo

- Se creó `src/lib/site.ts` con `getMenuUrl()`: resuelve la URL pública de `/menu` a partir de la variable de entorno `NEXT_PUBLIC_SITE_URL` si está definida, o del host de la request actual como fallback (útil en local, donde no hay dominio fijo).
- Se creó `src/components/QrCard.tsx`, componente cliente que:
  - Genera el QR con `qrcode.react` (`QRCodeSVG` para la vista, `QRCodeCanvas` oculto para exportar PNG).
  - Ofrece descarga en PNG y SVG vía Blob URL (una `data:` URL directa está bloqueada por los navegadores Chromium modernos para descargas).
  - Muestra la URL a la que apunta el QR y una nota de que el código no cambia aunque se edite el menú.
- Se construyó `/dashboard/qr` (`src/app/dashboard/qr/page.tsx`), que lee el menú (para el nombre del negocio, usado en el nombre del archivo descargado) y la URL pública, y renderiza `QrCard`.
- Se agregó el link "Ver código QR" al header de `/dashboard` para llegar a la nueva página.
- Se agregó `.env.example` documentando `NEXT_PUBLIC_SITE_URL`.

## Deploy en Vercel

El usuario desplegó el proyecto a Vercel de forma independiente durante esta fase:

**URL de producción:** https://qr-menus-2liw97ccg-clarexzs-projects.vercel.app

Pendiente de verificar/configurar (fuera de lo hecho en esta sesión): que la variable de entorno `NEXT_PUBLIC_SITE_URL` esté definida en el proyecto de Vercel con esa misma URL, para que el QR generado en producción apunte a `https://qr-menus-2liw97ccg-clarexzs-projects.vercel.app/menu` en vez de depender del fallback por host de request (que debería resolver correctamente de todas formas, pero fijar la env var lo hace explícito y estable ante alias/dominios adicionales que se agreguen después).

## Verificación realizada

- `next lint` limpio, `next build` compila sin errores.
- QR probado en local: escaneable, apunta a `http://<host>/menu` en dev.
- Descarga de PNG y SVG verificada en el navegador embebido.
- Verificación visual en mobile (~375px) y desktop (~1280px) de `/dashboard/qr`.

## Decisiones / desviaciones respecto al plan original

- El plan original sugería ajustar la URL del QR "una vez exista la URL de Vercel de la Fase 4, o dejarla configurable por env var mientras tanto". Se implementó la segunda opción desde el inicio (`NEXT_PUBLIC_SITE_URL` con fallback automático al host), así que no hace falta código adicional cuando se confirme el dominio final — solo definir la env var en Vercel.
- El deploy a Vercel (nominalmente Fase 4) ocurrió en paralelo a esta fase, hecho directamente por el usuario fuera de esta sesión. Se documenta aquí la URL resultante porque es directamente relevante para el QR de esta fase; el resto del checklist de la Fase 4 (verificar `/menu`, `/dashboard` y `/dashboard/qr` en producción, ciclo de edición en vivo en producción, responsive en producción) sigue pendiente.

## Pendiente / fuera de alcance de esta fase

- Confirmar/definir `NEXT_PUBLIC_SITE_URL` en las variables de entorno del proyecto en Vercel.
- Verificación completa de la Fase 4 en producción (queda como siguiente paso, ya con el deploy existente como punto de partida).

## Siguiente paso

Fase 4 — Deploy a Vercel: verificar `/menu`, `/dashboard` y `/dashboard/qr` en producción sobre la URL ya desplegada, confirmar que el QR apunta correctamente, repetir el ciclo edición → reflejo en vivo en producción, y verificación final de responsive escaneando con un celular real (o simulando mobile ~375px).
