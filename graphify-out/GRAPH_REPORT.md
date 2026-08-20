# Graph Report - qr-menus  (2026-08-20)

## Corpus Check
- 6 files · ~10,419 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 220 nodes · 280 edges · 18 communities (15 shown, 3 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 1% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.75)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- tsconfig include/exclude
- Fase 1 Menu Publico
- Fase 4 Deploy Vercel
- Dashboard + Menu CRUD (implementacion)
- Fase 5-6 Analiticas y Login Mock
- Runtime Deps (next/react/qrcode)
- Dev Tooling Deps (lint/types)
- QR Card + Site URL (implementacion)
- Fases 0-6 del Roadmap
- Plan de Implementacion (docs raiz)
- QR page (src/app/dashboard/qr)
- Plan de Demo y Fase 0
- Root Layout (Next.js)
- ESLint Config
- next.config.mjs
- postcss.config.mjs
- tailwind.config.ts

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 15 edges
2. `getMenu()` - 9 edges
3. `/menu page (src/app/menu/page.tsx)` - 7 edges
4. `Fase 3 — QR dinámico (progress doc)` - 7 edges
5. `https://qr-menus-one.vercel.app (producción)` - 7 edges
6. `updateItem()` - 6 edges
7. `/dashboard page (src/app/dashboard/page.tsx)` - 6 edges
8. `Fase 2 — Persistencia real + Dashboard CRUD` - 6 edges
9. `src/components/QrCard.tsx` - 6 edges
10. `createItem()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Favicon logo mark (purple gradient blob)` --conceptually_related_to--> `Migración Vite → Next.js 14 (App Router) ejecutada`  [INFERRED]
  public/favicon.svg → Documentation/Progress/Fase-0-setup.md
- `next build` --conceptually_related_to--> `tailwindcss`  [EXTRACTED]
  Documentation/Progress/Fase-4-deploy-vercel.md → package.json
- `QR Menu Dashboard (project)` --references--> `tailwindcss`  [EXTRACTED]
  README.md → package.json
- `QR Menu Dashboard (project)` --conceptually_related_to--> `/menu page (src/app/menu/page.tsx)`  [INFERRED]
  README.md → Documentation/Progress/Fase-1-menu-publico.md
- `Decisión: sin autenticación en Fase 2` --conceptually_related_to--> `Fase 3 — QR dinámico`  [AMBIGUOUS]
  Documentation/Progress/Fase-2-persistencia-dashboard.md → Documentation/Plan_Implementacion_Por_Fases.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Login mock sin control de acceso real sobre las rutas del dashboard** — src_app_dashboard_login_page, login_action, src_app_dashboard_analytics_page [EXTRACTED 1.00]
- **Verificación de Fase 5-6: lint, build y revisión de no-persistencia** — next_lint, npm_run_build, mock_scope_principle, data_menu_json [EXTRACTED 1.00]
- **Dashboard edit → menu.json write → live /menu reflection** — documentation_progress_fase_2_persistencia_dashboard_dashboard_page, documentation_progress_fase_2_persistencia_dashboard_dashboard_actions, documentation_progress_fase_2_persistencia_dashboard_write_functions, documentation_progress_fase_1_menu_publico_data_menu_json, documentation_progress_fase_1_menu_publico_menu_page [EXTRACTED 0.90]
- **Public menu URL resolution and configuration flow** — documentation_progress_fase_3_qr_dinamico_site_ts, documentation_progress_fase_3_qr_dinamico_getmenuurl, documentation_progress_fase_3_qr_dinamico_next_public_site_url, documentation_progress_fase_3_qr_dinamico_vercel_deploy [EXTRACTED 0.90]
- **QR generation and download/export flow** — documentation_progress_fase_3_qr_dinamico_qrcard_tsx, documentation_progress_fase_3_qr_dinamico_qrcodesvg, documentation_progress_fase_3_qr_dinamico_qrcodecanvas, documentation_progress_fase_3_qr_dinamico_blob_url_download [EXTRACTED 0.90]
- **REAL vs MOCK scope defines routes and stack choices for the demo** — documentation_qr_menu_plan_implementacion_demo_real_mock, documentation_qr_menu_plan_implementacion_demo_rutas, documentation_qr_menu_plan_implementacion_demo_stack_tecnico [EXTRACTED 1.00]
- **Fase 0 closure: build report, decisions and verification together document the phase** — documentation_progress_fase_0_setup_report, documentation_progress_fase_0_setup_migracion_nextjs, documentation_progress_fase_0_setup_verificacion, documentation_progress_fase_0_setup_decisiones [EXTRACTED 1.00]
- **Deployment protection issue detection and resolution** — documentation_progress_fase_4_deploy_vercel_vercel, documentation_progress_fase_4_deploy_vercel_deployment_protection, documentation_progress_fase_4_deploy_vercel_menu_route [EXTRACTED 1.00]
- **Production verification flow across routes** — documentation_progress_fase_4_deploy_vercel_menu_route, documentation_progress_fase_4_deploy_vercel_dashboard_route, documentation_progress_fase_4_deploy_vercel_dashboard_qr_route [EXTRACTED 1.00]
- **QR URL resolution mechanism** — documentation_progress_fase_4_deploy_vercel_dashboard_qr_route, documentation_progress_fase_4_deploy_vercel_get_menu_url, documentation_progress_fase_4_deploy_vercel_next_public_site_url [EXTRACTED 1.00]
- **Responsive verification applies across build phases** — documentation_plan_implementacion_por_fases_responsive_requirement, documentation_plan_implementacion_por_fases_fase1, documentation_plan_implementacion_por_fases_fase2, documentation_plan_implementacion_por_fases_fase3, documentation_plan_implementacion_por_fases_fase4 [EXTRACTED 1.00]
- **Shared Casa Milpa visual language across /menu and /dashboard** — documentation_progress_fase_1_menu_publico_menu_page, documentation_progress_fase_2_persistencia_dashboard_dashboard_page, documentation_progress_fase_1_menu_publico_design_palette, documentation_progress_fase_1_menu_publico_fraunces_font, documentation_progress_fase_1_menu_publico_work_sans_font [INFERRED 0.85]

## Communities (18 total, 3 thin omitted)

### Community 0 - "tsconfig include/exclude"
Cohesion: 0.08
Nodes (25): dom, dom.iterable, esnext, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx (+17 more)

### Community 1 - "Fase 1 Menu Publico"
Cohesion: 0.12
Nodes (23): Casa Milpa (restaurante ficticio), data/menu.json, Casa Milpa design palette/tokens, Fase 1 — Datos semilla + Menú público, formatPrice helper, Fraunces font, graphify skill install (pip install graphifyy), /menu page (src/app/menu/page.tsx) (+15 more)

### Community 2 - "Fase 4 Deploy Vercel"
Cohesion: 0.11
Nodes (23): Fase 4 — Deploy a Vercel, Casa Milpa (negocio de ejemplo), curl HTML inspection (dashboard input values verification), /dashboard/qr route, /dashboard route, Vercel Deployment Protection / Vercel Authentication, Fase 2 (verificación local con Playwright), Fase 3 (+15 more)

### Community 3 - "Dashboard + Menu CRUD (implementacion)"
Cohesion: 0.19
Nodes (18): createItemAction(), deleteItemAction(), refresh(), updateItemAction(), dynamic, dynamic, MenuPage(), createItem() (+10 more)

### Community 4 - "Fase 5-6 Analiticas y Login Mock"
Cohesion: 0.15
Nodes (14): data/menu.json, Aviso explícito de datos/funcionalidad mock en el código, loginAction() Server Action, Alcance MOCK (sin persistencia ni tracking real), Mantener el proyecto sin dependencias nuevas, npm run build, Plan original del proyecto, DashboardAnalyticsPage() (+6 more)

### Community 5 - "Runtime Deps (next/react/qrcode)"
Cohesion: 0.11
Nodes (17): next, dependencies, next, qrcode.react, react, react-dom, name, private (+9 more)

### Community 6 - "Dev Tooling Deps (lint/types)"
Cohesion: 0.13
Nodes (15): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, postcss, @types/node, @types/react (+7 more)

### Community 7 - "QR Card + Site URL (implementacion)"
Cohesion: 0.24
Nodes (14): Blob URL download workaround for QR export, Header link 'Ver código QR' on /dashboard, src/app/dashboard/qr/page.tsx, Fase 3 — QR dinámico (progress doc), .env.example, Fase 4 — Deploy a Vercel (siguiente paso), getMenuUrl(), NEXT_PUBLIC_SITE_URL (+6 more)

### Community 8 - "Fases 0-6 del Roadmap"
Cohesion: 0.21
Nodes (13): Decisión de stack: migrar a Next.js 14, Fase 0 — Migración de scaffold y setup base, Fase 1 — Datos semilla + Menú público, Fase 2 — Persistencia real + Dashboard CRUD, Fase 3 — QR dinámico, Fase 4 — Deploy a Vercel, Fase 5 (opcional) — Analíticas mock, Fase 6 (opcional) — Login mock (+5 more)

### Community 9 - "Plan de Implementacion (docs raiz)"
Cohesion: 0.22
Nodes (10): Plan de Implementación por Fases, next build, Proxy network limitation (embedded browser cannot reach internet), Verificación responsive en producción (pendiente), Orden de construcción sugerido, Plan de Implementación — Demo Menú QR + Dashboard, tailwindcss, Next.js 14 (App Router) (+2 more)

### Community 10 - "QR page (src/app/dashboard/qr)"
Cohesion: 0.31
Nodes (7): DashboardQrPage(), dynamic, downloadBlob(), QrCard(), handleDownloadPng(), handleDownloadSvg(), getMenuUrl()

### Community 11 - "Plan de Demo y Fase 0"
Cohesion: 0.25
Nodes (8): Migración Vite → Next.js 14 (App Router) ejecutada, Verificación de Fase 0 (npm run dev, lint, hot reload), Estructura de datos JSON semilla (menu.json), Qué es REAL vs qué es MOCK, Páginas / rutas necesarias, Stack técnico (Next.js 14 + Tailwind + JSON + qrcode + Vercel), Favicon logo mark (purple gradient blob), Icon sprite (bluesky, discord, documentation, github, social, x)

### Community 12 - "Root Layout (Next.js)"
Cohesion: 0.40
Nodes (3): fraunces, metadata, workSans

### Community 13 - "ESLint Config"
Cohesion: 0.50
Nodes (3): extends, next/core-web-vitals, next/typescript

## Ambiguous Edges - Review These
- `Decisión: sin autenticación en Fase 2` → `Fase 3 — QR dinámico`  [AMBIGUOUS]
  Documentation/Progress/Fase-2-persistencia-dashboard.md · relation: conceptually_related_to
- `loginAction() Server Action` → `data/menu.json`  [AMBIGUOUS]
  Documentation/Progress/Fase-5-6-analiticas-login-mock.md · relation: conceptually_related_to

## Knowledge Gaps
- **79 isolated node(s):** `MenuCategory`, `MenuData`, `MenuItem`, `allowJs`, `esModuleInterop` (+74 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Decisión: sin autenticación en Fase 2` and `Fase 3 — QR dinámico`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `loginAction() Server Action` and `data/menu.json`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What connects `MenuCategory`, `MenuData`, `MenuItem` to the rest of the system?**
  _79 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `tsconfig include/exclude` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Should `Fase 1 Menu Publico` be split into smaller, more focused modules?**
  _Cohesion score 0.11857707509881422 - nodes in this community are weakly interconnected._
- **Should `Fase 4 Deploy Vercel` be split into smaller, more focused modules?**
  _Cohesion score 0.11067193675889328 - nodes in this community are weakly interconnected._
- **Should `Fase 5-6 Analiticas y Login Mock` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._