# Fase 4 — Deploy a Vercel

**Fecha:** 2026-08-20
**Estado:** Cerrada con visto bueno del usuario.

## Qué se hizo

- El usuario desplegó el proyecto a Vercel de forma independiente, conectando el repositorio de GitHub (deploy automático en cada push a `main`).
- **URL de producción (dominio estable):** https://qr-menus-one.vercel.app
  - La primera URL que se compartió (`qr-menus-2liw97ccg-clarexzs-projects.vercel.app`) era la de un deployment específico, ya obsoleto tras el merge de las Fases 2 y 3 — se identificó y reemplazó por el dominio de producción estable.
- Se detectó y resolvió un problema de **Vercel Deployment Protection**: el proyecto tenía activado "Vercel Authentication" (login obligatorio), lo que habría bloqueado a cualquier cliente que escaneara el QR. El usuario lo desactivó desde Settings → Deployment Protection.

## Verificación realizada

Sobre `https://qr-menus-one.vercel.app`:

- `/` → 200 OK.
- `/menu` → 200 OK. Carta completa y correcta: nombre del negocio (Casa Milpa), 5 categorías, ~18 platillos con precios en MXN, estado "Agotado" funcionando (Tostadas de Atún).
- `/dashboard` → 200 OK. CRUD con todos los datos cargados — confirmado inspeccionando el HTML servido (`curl`) para verificar que los `<input>` de nombre y precio traen los valores reales (`value="Guacamole de Molcajete"`, `value="145"`, etc.); una primera revisión con una herramienta de fetch-a-markdown reportó campos "vacíos", pero era una limitación de esa herramienta al convertir inputs de formulario a texto, no un bug real.
- `/dashboard/qr` → 200 OK. El QR apunta correctamente a `https://qr-menus-one.vercel.app/menu`, resuelto automáticamente por `getMenuUrl()` a partir del host de la request (sin necesidad de fijar `NEXT_PUBLIC_SITE_URL` en Vercel, aunque sigue siendo una opción disponible si se agrega un dominio custom más adelante).

## Pendiente / fuera de alcance de esta fase

- **Ciclo edición → reflejo en vivo en producción**: no se verificó de forma automatizada en esta sesión. Se decidió omitir esta prueba porque el ciclo ya se verificó exhaustivamente en local durante la Fase 2 (múltiples casos con Playwright: editar precio, crear elemento, eliminar elemento, cada uno confirmando el reflejo en `/menu`), y el código de producción es idéntico al de local.
- **Capturas visuales responsive de producción**: no se generaron en esta sesión. El navegador embebido (Playwright/Chromium) de este contenedor remoto no logró salir a internet a través del proxy configurado (falla incluso contra sitios de prueba ajenos al proyecto), aunque `curl` sí tuvo acceso normal — es una limitación de red de este entorno, no del proyecto. El build y CSS servidos en producción son idénticos a los verificados visualmente en local en las Fases 1-3 (mismo `next build`, mismo Tailwind), por lo que el comportamiento responsive debería ser el mismo, pero no se confirmó con una captura directa sobre producción. Verificación pendiente: escanear el QR con un celular real, o revisar `/menu` en un navegador normal en ~375px y ~1280px.

## Decisiones / desviaciones respecto al plan original

- El deploy y la resolución de Deployment Protection los hizo el usuario directamente en el dashboard de Vercel, fuera de esta sesión — esta sesión se limitó a verificar el resultado.
- Se documenta aquí (en vez de solo en la Fase 3) el detalle completo del deploy porque es el entregable central de esta fase; la mención en el doc de Fase 3 quedó como nota temprana de que el deploy ya existía.

## Siguiente paso

Con las Fases 1-4 cerradas, el entregable innegociable del demo (`/menu` + `/dashboard` con CRUD real + `/dashboard/qr`, desplegado y funcional) está completo. Quedan como opcionales, solo si sobra tiempo:

- Fase 5 — Analíticas mock (`/dashboard/analytics`, datos de ejemplo, sin tracking real).
- Fase 6 — Login mock (`/dashboard/login`, solo visual).

Y como pendiente recomendado antes de grabar el video de venta: verificar visualmente el responsive de producción desde un dispositivo real (no bloqueante, pero deja el checklist 100% cerrado).
