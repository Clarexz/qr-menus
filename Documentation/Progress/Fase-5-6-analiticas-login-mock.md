# Fase 5 — Analíticas mock + Fase 6 — Login mock

**Fecha:** 2026-08-20
**Estado:** Cerradas con visto bueno del usuario.

Ambas fases son opcionales según el plan original ("las primeras en cortarse si no hay tiempo") y se cierran juntas en este documento por ser pequeñas y haberse construido en la misma sesión de trabajo, ya con las Fases 1-4 (el entregable innegociable) cerradas y verificadas en producción.

## Qué se hizo — Fase 5 (Analíticas mock)

- Se creó `src/lib/analytics.ts` con `getMockAnalytics()`: datos de ejemplo estáticos (escaneos totales, visitantes únicos, tiempo promedio, vistas por día de la semana, platillos más vistos). Sin conexión a tracking real, tal como exige el plan.
- Se construyó `/dashboard/analytics` (`src/app/dashboard/analytics/page.tsx`):
  - Aviso explícito y visible ("Estos números son de ejemplo. Todavía no hay tracking real conectado...") — cumple el requisito del plan de dejarlo explícito en el código y no solo en la documentación.
  - Tres tarjetas de métricas (escaneos, visitantes únicos, tiempo promedio).
  - Gráfica de barras simple (CSS, sin librería de charts) de vistas por día.
  - Lista de "Platillos más vistos" con barras de progreso.
  - Mismo lenguaje visual que el resto del dashboard (Fraunces/Work Sans, paleta Casa Milpa).
- Se agregó el link "Analíticas" al header de `/dashboard`, junto al de "Ver código QR".

## Qué se hizo — Fase 6 (Login mock)

- Se construyó `/dashboard/login` (`src/app/dashboard/login/page.tsx`): formulario visual (correo + contraseña) con los mismos estilos del resto del proyecto.
- `src/app/dashboard/login/actions.ts` contiene `loginAction()`, una Server Action que **no valida ninguna credencial** y simplemente redirige a `/dashboard` — tal como especifica el plan ("pantalla de login que redirige directo, sin validar credenciales de verdad").
- Nota visible en la propia pantalla ("Vista solo visual — no valida credenciales todavía.") para que quede claro incluso viendo la UI en vivo.
- No se enlazó `/dashboard/login` desde ningún otro lado del dashboard (es opcional y no forma parte del flujo real); queda accesible solo por URL directa.

## Verificación realizada

- `npx next lint` limpio.
- `npm run build` compila sin errores; ambas rutas nuevas aparecen en el build (`/dashboard/analytics` dinámica, `/dashboard/login` estática).
- Revisión de código confirmando que ninguna de las dos fases toca `data/menu.json` ni introduce persistencia real — ambas son puramente de presentación, según el alcance MOCK definido en el plan original.

## Decisiones / desviaciones respecto al plan original

- Los nombres de platillos en los datos de ejemplo de "Platillos más vistos" (`Tacos de Cochinita`, `Mole Negro`, `Elote Callejero`) no coinciden letra por letra con los nombres exactos de `data/menu.json` (`Tacos al Pastor`/`Tacos de Suadero`, `Pechuga en Mole Negro`, `Esquites de la Casa`) — es un detalle menor y aceptable tratándose de datos de ejemplo puramente cosméticos, pero queda anotado por si se quiere alinear después.
- No se implementó ninguna gráfica con librería externa (Recharts, Chart.js, etc.) para mantener el proyecto sin dependencias nuevas — la barra de vistas por día se construyó con CSS puro (`height` proporcional).

## Pendiente / fuera de alcance

- No hay tracking real de escaneos ni analíticas verdaderas — sigue fuera de alcance según el plan (se resolvería en la migración a un backend real, si se decide después de vender).
- `/dashboard/login` no protege ninguna ruta — `/dashboard`, `/dashboard/analytics` y `/dashboard/qr` siguen siendo de acceso libre por URL directa, tal como se definió desde la Fase 2. La pantalla de login es únicamente una demostración visual del flujo, no un control de acceso real.
- No se verificó responsive de estas dos páginas en un navegador real por la misma limitación de red del entorno remoto de esta sesión que impidió esa verificación en la Fase 4 (el navegador embebido no logra salir a internet vía el proxy configurado). El código reutiliza los mismos patrones de layout responsive (`max-w-*`, `sm:` breakpoints, paleta y tipografía) ya verificados visualmente en las Fases 1-3, así que el riesgo es bajo, pero queda como verificación pendiente recomendada.

## Siguiente paso

Con las Fases 0-6 cerradas, el proyecto cubre el alcance completo del plan original (obligatorio + ambas fases opcionales), desplegado y funcional en `https://qr-menus-one.vercel.app`. Queda pendiente, antes de grabar el video de venta:

- Verificación visual responsive final de producción desde un dispositivo real (arrastrada desde la Fase 4).
- Opcionalmente, si se quiere, definir `NEXT_PUBLIC_SITE_URL` en Vercel para fijar explícitamente la URL a la que apunta el QR.
