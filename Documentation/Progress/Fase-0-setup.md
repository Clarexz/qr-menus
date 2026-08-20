# Fase 0 — Migración de scaffold y setup base

**Fecha:** 2026-08-20
**Estado:** Cerrada con visto bueno del usuario.

## Qué se hizo

- Se migró el scaffold del proyecto de Vite + React a **Next.js 14 (App Router)**, con TypeScript, Tailwind CSS y ESLint configurados vía `create-next-app@14`.
- Se conservaron sin tocar: `.git/`, `README.md`, `public/favicon.svg`, `public/icons.svg`, y la carpeta `Documentation/` ya creada.
- Se eliminaron todos los archivos propios del scaffold anterior de Vite (`src/App.tsx`, `vite.config.ts`, `index.html`, `tsconfig.app.json`, `tsconfig.node.json`, `.oxlintrc.json`, etc.).
- Estructura de carpetas creada:
  - `src/app/` — App Router de Next.js.
  - `src/components/` — vacío, listo para componentes de UI en fases siguientes.
  - `data/menu.json` — placeholder (`{}`), se llenará con la carta real del prospecto en la Fase 1.
- Se instaló `qrcode.react` como dependencia (se usará en la Fase 3 para el QR dinámico).
- Se renombró `package.json` de `qr-menu-next` a `qr-menu-dashboard`.
- Se actualizó `.gitignore` para incluir las entradas propias de Next.js (`/.next/`, `next-env.d.ts`, `.vercel`, `*.tsbuildinfo`, `.env*.local`).
- Se creó `.claude/launch.json` para poder levantar el dev server desde el navegador embebido de Claude Code en las siguientes sesiones.
- Se limpió la página default de `create-next-app` (`src/app/page.tsx`) dejando un placeholder simple, sin contenido de producto todavía (correcto para el alcance de esta fase).

## Verificación realizada

- `npm run dev` levanta sin errores (Next.js 14.2.35, listo en ~2.7s).
- Se abrió la app en el navegador embebido y se confirmó render correcto + hot reload funcionando tras editar `page.tsx`.
- `npx next lint` corre limpio, sin warnings ni errores.

## Decisiones / desviaciones respecto al plan original

- El repo había arrancado como scaffold Vite (no Next.js). Se consultó al usuario y se decidió migrar completamente a Next.js 14, en vez de mantener Vite con un servidor Express aparte o usar localStorage — ver decisión documentada en [Plan_Implementacion_Por_Fases.md](../Plan_Implementacion_Por_Fases.md#decisión-de-stack-definida-el-2026-08-20).
- Se agregó como requisito transversal (a petición del usuario) que el dashboard debe ser responsive tanto en web como en móvil (versión móvil puede ser más básica en diseño, pero debe ser funcional). El menú público (`/menu`) sigue siendo mobile-first por ser lo que ve el cliente final al escanear el QR.

## Pendiente / fuera de alcance de esta fase

- No se construyó ninguna página de producto (`/menu`, `/dashboard`, `/dashboard/qr`) — eso corresponde a las fases siguientes.
- No se tocó el JSON semilla con datos reales todavía (Fase 1).

## Siguiente paso

Fase 1 — Datos semilla + Menú público (solo lectura), incluyendo verificación responsive mobile-first.
