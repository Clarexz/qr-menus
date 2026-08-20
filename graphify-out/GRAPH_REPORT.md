# Graph Report - qr-menus  (2026-08-20)

## Corpus Check
- 5 files · ~7,354 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 150 nodes · 180 edges · 15 communities (12 shown, 3 thin omitted)
- Extraction: 96% EXTRACTED · 3% INFERRED · 1% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.75)
- Token cost: 58,040 input · 0 output

## Community Hubs (Navigation)
- Dashboard CRUD (Fase 2)
- Fase 1 y 2 Progress Notes
- NPM Dependencies
- TypeScript Compiler Config
- Implementation Plan by Phase
- Lint and Dev Dependencies
- Fase 0 Setup and Original Plan
- TypeScript Project Refs
- Plan Docs and Tailwind
- Root Layout and Fonts
- ESLint Config
- Next.js Config
- PostCSS Config
- Tailwind Config

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 15 edges
2. `getMenu()` - 8 edges
3. `/menu page (src/app/menu/page.tsx)` - 7 edges
4. `updateItem()` - 6 edges
5. `Fase 2 — Persistencia real + Dashboard CRUD` - 6 edges
6. `/dashboard page (src/app/dashboard/page.tsx)` - 6 edges
7. `scripts` - 5 edges
8. `include` - 5 edges
9. `Fase 3 — QR dinámico` - 5 edges
10. `Requisito transversal: responsive real (mobile + web)` - 5 edges

## Surprising Connections (you probably didn't know these)
- `QR Menu Dashboard (project)` --references--> `tailwindcss`  [EXTRACTED]
  README.md → package.json
- `Favicon logo mark (purple gradient blob)` --conceptually_related_to--> `Migración Vite → Next.js 14 (App Router) ejecutada`  [INFERRED]
  public/favicon.svg → Documentation/Progress/Fase-0-setup.md
- `QR Menu Dashboard (project)` --conceptually_related_to--> `/menu page (src/app/menu/page.tsx)`  [INFERRED]
  README.md → Documentation/Progress/Fase-1-menu-publico.md
- `QR Menu Dashboard (project)` --references--> `Plan de Implementación — Demo Menú QR + Dashboard`  [EXTRACTED]
  README.md → Documentation/QR_MENU_Plan_Implementacion_Demo.md
- `Decisión: sin autenticación en Fase 2` --conceptually_related_to--> `Fase 3 — QR dinámico`  [AMBIGUOUS]
  Documentation/Progress/Fase-2-persistencia-dashboard.md → Documentation/Plan_Implementacion_Por_Fases.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Dashboard edit → menu.json write → live /menu reflection** — documentation_progress_fase_2_persistencia_dashboard_dashboard_page, documentation_progress_fase_2_persistencia_dashboard_dashboard_actions, documentation_progress_fase_2_persistencia_dashboard_write_functions, documentation_progress_fase_1_menu_publico_data_menu_json, documentation_progress_fase_1_menu_publico_menu_page [EXTRACTED 0.90]
- **Shared Casa Milpa visual language across /menu and /dashboard** — documentation_progress_fase_1_menu_publico_menu_page, documentation_progress_fase_2_persistencia_dashboard_dashboard_page, documentation_progress_fase_1_menu_publico_design_palette, documentation_progress_fase_1_menu_publico_fraunces_font, documentation_progress_fase_1_menu_publico_work_sans_font [INFERRED 0.85]
- **REAL vs MOCK scope defines routes and stack choices for the demo** — documentation_qr_menu_plan_implementacion_demo_real_mock, documentation_qr_menu_plan_implementacion_demo_rutas, documentation_qr_menu_plan_implementacion_demo_stack_tecnico [EXTRACTED 1.00]
- **Fase 0 closure: build report, decisions and verification together document the phase** — documentation_progress_fase_0_setup_report, documentation_progress_fase_0_setup_migracion_nextjs, documentation_progress_fase_0_setup_verificacion, documentation_progress_fase_0_setup_decisiones [EXTRACTED 1.00]
- **Responsive verification applies across build phases** — documentation_plan_implementacion_por_fases_responsive_requirement, documentation_plan_implementacion_por_fases_fase1, documentation_plan_implementacion_por_fases_fase2, documentation_plan_implementacion_por_fases_fase3, documentation_plan_implementacion_por_fases_fase4 [EXTRACTED 1.00]

## Communities (15 total, 3 thin omitted)

### Community 0 - "Dashboard CRUD (Fase 2)"
Cohesion: 0.19
Nodes (19): createItemAction(), deleteItemAction(), refresh(), updateItemAction(), DashboardPage(), dynamic, dynamic, MenuPage() (+11 more)

### Community 1 - "Fase 1 y 2 Progress Notes"
Cohesion: 0.13
Nodes (19): Casa Milpa (restaurante ficticio), data/menu.json, Casa Milpa design palette/tokens, Fase 1 — Datos semilla + Menú público, formatPrice helper, Fraunces font, graphify skill install (pip install graphifyy), /menu page (src/app/menu/page.tsx) (+11 more)

### Community 2 - "NPM Dependencies"
Cohesion: 0.11
Nodes (17): next, dependencies, next, qrcode.react, react, react-dom, name, private (+9 more)

### Community 3 - "TypeScript Compiler Config"
Cohesion: 0.11
Nodes (18): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+10 more)

### Community 4 - "Implementation Plan by Phase"
Cohesion: 0.15
Nodes (17): Decisión de stack: migrar a Next.js 14, Fase 0 — Migración de scaffold y setup base, Fase 1 — Datos semilla + Menú público, Fase 2 — Persistencia real + Dashboard CRUD, Fase 3 — QR dinámico, Fase 4 — Deploy a Vercel, Fase 5 (opcional) — Analíticas mock, Fase 6 (opcional) — Login mock (+9 more)

### Community 5 - "Lint and Dev Dependencies"
Cohesion: 0.13
Nodes (15): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, postcss, @types/node, @types/react (+7 more)

### Community 6 - "Fase 0 Setup and Original Plan"
Cohesion: 0.25
Nodes (8): Migración Vite → Next.js 14 (App Router) ejecutada, Verificación de Fase 0 (npm run dev, lint, hot reload), Estructura de datos JSON semilla (menu.json), Qué es REAL vs qué es MOCK, Páginas / rutas necesarias, Stack técnico (Next.js 14 + Tailwind + JSON + qrcode + Vercel), Favicon logo mark (purple gradient blob), Icon sprite (bluesky, discord, documentation, github, social, x)

### Community 7 - "TypeScript Project Refs"
Cohesion: 0.25
Nodes (7): next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

### Community 8 - "Plan Docs and Tailwind"
Cohesion: 0.33
Nodes (7): Plan de Implementación por Fases, Orden de construcción sugerido, Plan de Implementación — Demo Menú QR + Dashboard, tailwindcss, Next.js 14 (App Router), QR Menu Dashboard (project), tailwindcss

### Community 9 - "Root Layout and Fonts"
Cohesion: 0.40
Nodes (3): fraunces, metadata, workSans

### Community 10 - "ESLint Config"
Cohesion: 0.50
Nodes (3): extends, next/core-web-vitals, next/typescript

## Ambiguous Edges - Review These
- `Fase 3 — QR dinámico` → `Decisión: sin autenticación en Fase 2`  [AMBIGUOUS]
  Documentation/Progress/Fase-2-persistencia-dashboard.md · relation: conceptually_related_to

## Knowledge Gaps
- **68 isolated node(s):** `allowJs`, `esModuleInterop`, `incremental`, `isolatedModules`, `jsx` (+63 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Fase 3 — QR dinámico` and `Decisión: sin autenticación en Fase 2`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `devDependencies` connect `Lint and Dev Dependencies` to `Plan Docs and Tailwind`, `NPM Dependencies`?**
  _High betweenness centrality (0.155) - this node is a cross-community bridge._
- **Why does `QR Menu Dashboard (project)` connect `Plan Docs and Tailwind` to `Fase 1 y 2 Progress Notes`?**
  _High betweenness centrality (0.140) - this node is a cross-community bridge._
- **Why does `/menu page (src/app/menu/page.tsx)` connect `Fase 1 y 2 Progress Notes` to `Plan Docs and Tailwind`?**
  _High betweenness centrality (0.136) - this node is a cross-community bridge._
- **What connects `allowJs`, `esModuleInterop`, `incremental` to the rest of the system?**
  _68 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Fase 1 y 2 Progress Notes` be split into smaller, more focused modules?**
  _Cohesion score 0.13450292397660818 - nodes in this community are weakly interconnected._
- **Should `NPM Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._