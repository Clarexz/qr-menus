# Graph Report - qr-menus  (2026-08-20)

## Corpus Check
- 5 files · ~8,347 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 174 nodes · 217 edges · 17 communities (14 shown, 3 thin omitted)
- Extraction: 96% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.76)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Fase 1 Menu Publico
- Dashboard CRUD (Fase 2)
- Runtime Deps (next/react/qrcode)
- tsconfig compilerOptions
- Dev Tooling Deps (lint/types)
- Fase 3 QR Dinamico
- Fases 0-6 del Roadmap
- QR Card + Site URL (implementacion)
- Plan de Demo y Fase 0
- tsconfig include/exclude
- Plan de Implementacion (docs raiz)
- Root Layout (Next.js)
- ESLint Config
- next.config.mjs
- postcss.config.mjs
- tailwind.config.ts

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 15 edges
2. `getMenu()` - 8 edges
3. `/menu page (src/app/menu/page.tsx)` - 7 edges
4. `Fase 3 — QR dinámico (progress doc)` - 7 edges
5. `updateItem()` - 6 edges
6. `/dashboard page (src/app/dashboard/page.tsx)` - 6 edges
7. `Fase 2 — Persistencia real + Dashboard CRUD` - 6 edges
8. `src/components/QrCard.tsx` - 6 edges
9. `createItem()` - 5 edges
10. `deleteItem()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `QR Menu Dashboard (project)` --references--> `tailwindcss`  [EXTRACTED]
  README.md → package.json
- `Favicon logo mark (purple gradient blob)` --conceptually_related_to--> `Migración Vite → Next.js 14 (App Router) ejecutada`  [INFERRED]
  public/favicon.svg → Documentation/Progress/Fase-0-setup.md
- `Decisión: sin autenticación en Fase 2` --conceptually_related_to--> `Fase 3 — QR dinámico`  [AMBIGUOUS]
  Documentation/Progress/Fase-2-persistencia-dashboard.md → Documentation/Plan_Implementacion_Por_Fases.md
- `QR Menu Dashboard (project)` --conceptually_related_to--> `/menu page (src/app/menu/page.tsx)`  [INFERRED]
  README.md → Documentation/Progress/Fase-1-menu-publico.md
- `QR Menu Dashboard (project)` --references--> `Plan de Implementación — Demo Menú QR + Dashboard`  [EXTRACTED]
  README.md → Documentation/QR_MENU_Plan_Implementacion_Demo.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **QR generation and download/export flow** — documentation_progress_fase_3_qr_dinamico_qrcard_tsx, documentation_progress_fase_3_qr_dinamico_qrcodesvg, documentation_progress_fase_3_qr_dinamico_qrcodecanvas, documentation_progress_fase_3_qr_dinamico_blob_url_download [EXTRACTED 0.90]
- **Public menu URL resolution and configuration flow** — documentation_progress_fase_3_qr_dinamico_site_ts, documentation_progress_fase_3_qr_dinamico_getmenuurl, documentation_progress_fase_3_qr_dinamico_next_public_site_url, documentation_progress_fase_3_qr_dinamico_vercel_deploy [EXTRACTED 0.90]
- **Dashboard edit → menu.json write → live /menu reflection** — documentation_progress_fase_2_persistencia_dashboard_dashboard_page, documentation_progress_fase_2_persistencia_dashboard_dashboard_actions, documentation_progress_fase_2_persistencia_dashboard_write_functions, documentation_progress_fase_1_menu_publico_data_menu_json, documentation_progress_fase_1_menu_publico_menu_page [EXTRACTED 0.90]
- **REAL vs MOCK scope defines routes and stack choices for the demo** — documentation_qr_menu_plan_implementacion_demo_real_mock, documentation_qr_menu_plan_implementacion_demo_rutas, documentation_qr_menu_plan_implementacion_demo_stack_tecnico [EXTRACTED 1.00]
- **Fase 0 closure: build report, decisions and verification together document the phase** — documentation_progress_fase_0_setup_report, documentation_progress_fase_0_setup_migracion_nextjs, documentation_progress_fase_0_setup_verificacion, documentation_progress_fase_0_setup_decisiones [EXTRACTED 1.00]
- **Responsive verification applies across build phases** — documentation_plan_implementacion_por_fases_responsive_requirement, documentation_plan_implementacion_por_fases_fase1, documentation_plan_implementacion_por_fases_fase2, documentation_plan_implementacion_por_fases_fase3, documentation_plan_implementacion_por_fases_fase4 [EXTRACTED 1.00]
- **Shared Casa Milpa visual language across /menu and /dashboard** — documentation_progress_fase_1_menu_publico_menu_page, documentation_progress_fase_2_persistencia_dashboard_dashboard_page, documentation_progress_fase_1_menu_publico_design_palette, documentation_progress_fase_1_menu_publico_fraunces_font, documentation_progress_fase_1_menu_publico_work_sans_font [INFERRED 0.85]

## Communities (17 total, 3 thin omitted)

### Community 0 - "Fase 1 Menu Publico"
Cohesion: 0.12
Nodes (23): Casa Milpa (restaurante ficticio), data/menu.json, Casa Milpa design palette/tokens, Fase 1 — Datos semilla + Menú público, formatPrice helper, Fraunces font, graphify skill install (pip install graphifyy), /menu page (src/app/menu/page.tsx) (+15 more)

### Community 1 - "Dashboard CRUD (Fase 2)"
Cohesion: 0.19
Nodes (18): createItemAction(), deleteItemAction(), refresh(), updateItemAction(), dynamic, dynamic, MenuPage(), createItem() (+10 more)

### Community 2 - "Runtime Deps (next/react/qrcode)"
Cohesion: 0.11
Nodes (17): next, dependencies, next, qrcode.react, react, react-dom, name, private (+9 more)

### Community 3 - "tsconfig compilerOptions"
Cohesion: 0.11
Nodes (18): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+10 more)

### Community 4 - "Dev Tooling Deps (lint/types)"
Cohesion: 0.13
Nodes (15): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, postcss, @types/node, @types/react (+7 more)

### Community 5 - "Fase 3 QR Dinamico"
Cohesion: 0.24
Nodes (14): Blob URL download workaround for QR export, Header link 'Ver código QR' on /dashboard, src/app/dashboard/qr/page.tsx, Fase 3 — QR dinámico (progress doc), .env.example, Fase 4 — Deploy a Vercel (siguiente paso), getMenuUrl(), NEXT_PUBLIC_SITE_URL (+6 more)

### Community 6 - "Fases 0-6 del Roadmap"
Cohesion: 0.21
Nodes (13): Decisión de stack: migrar a Next.js 14, Fase 0 — Migración de scaffold y setup base, Fase 1 — Datos semilla + Menú público, Fase 2 — Persistencia real + Dashboard CRUD, Fase 3 — QR dinámico, Fase 4 — Deploy a Vercel, Fase 5 (opcional) — Analíticas mock, Fase 6 (opcional) — Login mock (+5 more)

### Community 7 - "QR Card + Site URL (implementacion)"
Cohesion: 0.31
Nodes (7): DashboardQrPage(), dynamic, downloadBlob(), QrCard(), handleDownloadPng(), handleDownloadSvg(), getMenuUrl()

### Community 8 - "Plan de Demo y Fase 0"
Cohesion: 0.25
Nodes (8): Migración Vite → Next.js 14 (App Router) ejecutada, Verificación de Fase 0 (npm run dev, lint, hot reload), Estructura de datos JSON semilla (menu.json), Qué es REAL vs qué es MOCK, Páginas / rutas necesarias, Stack técnico (Next.js 14 + Tailwind + JSON + qrcode + Vercel), Favicon logo mark (purple gradient blob), Icon sprite (bluesky, discord, documentation, github, social, x)

### Community 9 - "tsconfig include/exclude"
Cohesion: 0.25
Nodes (7): next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

### Community 10 - "Plan de Implementacion (docs raiz)"
Cohesion: 0.33
Nodes (7): Plan de Implementación por Fases, Orden de construcción sugerido, Plan de Implementación — Demo Menú QR + Dashboard, tailwindcss, Next.js 14 (App Router), QR Menu Dashboard (project), tailwindcss

### Community 11 - "Root Layout (Next.js)"
Cohesion: 0.40
Nodes (3): fraunces, metadata, workSans

### Community 12 - "ESLint Config"
Cohesion: 0.50
Nodes (3): extends, next/core-web-vitals, next/typescript

## Ambiguous Edges - Review These
- `Fase 3 — QR dinámico` → `Decisión: sin autenticación en Fase 2`  [AMBIGUOUS]
  Documentation/Progress/Fase-2-persistencia-dashboard.md · relation: conceptually_related_to

## Knowledge Gaps
- **69 isolated node(s):** `MenuCategory`, `MenuData`, `MenuItem`, `dynamic`, `MENU_PATH` (+64 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Fase 3 — QR dinámico` and `Decisión: sin autenticación en Fase 2`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `devDependencies` connect `Dev Tooling Deps (lint/types)` to `Runtime Deps (next/react/qrcode)`, `Plan de Implementacion (docs raiz)`?**
  _High betweenness centrality (0.115) - this node is a cross-community bridge._
- **Why does `QR Menu Dashboard (project)` connect `Plan de Implementacion (docs raiz)` to `Fase 1 Menu Publico`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Why does `/menu page (src/app/menu/page.tsx)` connect `Fase 1 Menu Publico` to `Plan de Implementacion (docs raiz)`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **What connects `MenuCategory`, `MenuData`, `MenuItem` to the rest of the system?**
  _69 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Fase 1 Menu Publico` be split into smaller, more focused modules?**
  _Cohesion score 0.11857707509881422 - nodes in this community are weakly interconnected._
- **Should `Runtime Deps (next/react/qrcode)` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._