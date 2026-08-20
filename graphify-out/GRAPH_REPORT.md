# Graph Report - qr-menus  (2026-08-20)

## Corpus Check
- 8 files · ~5,809 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 131 nodes · 133 edges · 15 communities (12 shown, 3 thin omitted)
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.77)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Fase 1 Menu Publico
- tsconfig compilerOptions
- Fases 0-6 del Roadmap
- Dev Tooling Deps (lint/types)
- menu.ts + /menu page
- Runtime Deps (next/react/qrcode)
- package.json metadata
- Plan de Demo y Fase 0
- tsconfig include/exclude
- Root Layout (Next.js)
- ESLint Config
- next.config.mjs
- postcss.config.mjs
- tailwind.config.ts

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 15 edges
2. `/menu page (src/app/menu/page.tsx)` - 8 edges
3. `Fase 2 — Persistencia real + Dashboard CRUD` - 6 edges
4. `scripts` - 5 edges
5. `include` - 5 edges
6. `Requisito transversal: responsive real (mobile + web)` - 5 edges
7. `data/menu.json (menu seed data)` - 5 edges
8. `QR Menu Dashboard (project)` - 5 edges
9. `lib` - 4 edges
10. `Fase 0 — Migración de scaffold y setup base` - 4 edges

## Surprising Connections (you probably didn't know these)
- `globals.css design tokens (--milpa-*)` --conceptually_related_to--> `tailwindcss`  [INFERRED]
  Documentation/Progress/Fase-1-menu-publico.md → package.json
- `Favicon logo mark (purple gradient blob)` --conceptually_related_to--> `Migración Vite → Next.js 14 (App Router) ejecutada`  [INFERRED]
  public/favicon.svg → Documentation/Progress/Fase-0-setup.md
- `QR Menu Dashboard (project)` --references--> `tailwindcss`  [EXTRACTED]
  README.md → package.json
- `/menu page (src/app/menu/page.tsx)` --conceptually_related_to--> `Next.js 14 (App Router)`  [INFERRED]
  Documentation/Progress/Fase-1-menu-publico.md → README.md
- `QR Menu Dashboard (project)` --conceptually_related_to--> `/menu page (src/app/menu/page.tsx)`  [INFERRED]
  README.md → Documentation/Progress/Fase-1-menu-publico.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **/menu public read-only page build (data + logic + component + styling)** — documentation_progress_fase_1_menu_publico_data_menu_json, documentation_progress_fase_1_menu_publico_src_lib_menu_ts, documentation_progress_fase_1_menu_publico_menu_page, documentation_progress_fase_1_menu_publico_globals_css, documentation_progress_fase_1_menu_publico_tailwind_config [EXTRACTED 0.95]
- **Custom typography system replacing scaffold Geist fonts** — documentation_progress_fase_1_menu_publico_fraunces_font, documentation_progress_fase_1_menu_publico_work_sans_font, documentation_progress_fase_1_menu_publico_geist_fonts, documentation_progress_fase_1_menu_publico_menu_page [EXTRACTED 0.90]
- **QR menus phased roadmap (Fase 1 through Fase 4)** — documentation_progress_fase_1_menu_publico, documentation_plan_implementacion_por_fases_fase2, documentation_progress_fase_1_menu_publico_fase_3_qr, documentation_progress_fase_1_menu_publico_fase_4_deploy, documentation_plan_implementacion_por_fases_plan [EXTRACTED 0.90]
- **Responsive verification applies across build phases** — documentation_plan_implementacion_por_fases_responsive_requirement, documentation_plan_implementacion_por_fases_fase1, documentation_plan_implementacion_por_fases_fase2, documentation_plan_implementacion_por_fases_fase3, documentation_plan_implementacion_por_fases_fase4 [EXTRACTED 1.00]
- **REAL vs MOCK scope defines routes and stack choices for the demo** — documentation_qr_menu_plan_implementacion_demo_real_mock, documentation_qr_menu_plan_implementacion_demo_rutas, documentation_qr_menu_plan_implementacion_demo_stack_tecnico [EXTRACTED 1.00]
- **Fase 0 closure: build report, decisions and verification together document the phase** — documentation_progress_fase_0_setup_report, documentation_progress_fase_0_setup_migracion_nextjs, documentation_progress_fase_0_setup_verificacion, documentation_progress_fase_0_setup_decisiones [EXTRACTED 1.00]

## Communities (15 total, 3 thin omitted)

### Community 0 - "Fase 1 Menu Publico"
Cohesion: 0.12
Nodes (20): Plan de Implementación por Fases, Casa Milpa (fictional restaurant seed data), data/menu.json (menu seed data), Casa Milpa custom design direction (no Ravyn/Semillero branding), Fraunces display font, Geist fonts (removed scaffold fonts), globals.css design tokens (--milpa-*), / home page (src/app/page.tsx) (+12 more)

### Community 1 - "tsconfig compilerOptions"
Cohesion: 0.11
Nodes (18): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+10 more)

### Community 2 - "Fases 0-6 del Roadmap"
Cohesion: 0.15
Nodes (17): Decisión de stack: migrar a Next.js 14, Fase 0 — Migración de scaffold y setup base, Fase 1 — Datos semilla + Menú público, Fase 2 — Persistencia real + Dashboard CRUD, Fase 3 — QR dinámico, Fase 4 — Deploy a Vercel, Fase 5 (opcional) — Analíticas mock, Fase 6 (opcional) — Login mock (+9 more)

### Community 3 - "Dev Tooling Deps (lint/types)"
Cohesion: 0.13
Nodes (15): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, postcss, @types/node, @types/react (+7 more)

### Community 4 - "menu.ts + /menu page"
Cohesion: 0.29
Nodes (8): dynamic, MenuPage(), formatPrice(), getMenu(), MENU_PATH, MenuCategory, MenuData, MenuItem

### Community 5 - "Runtime Deps (next/react/qrcode)"
Cohesion: 0.22
Nodes (9): next, dependencies, next, qrcode.react, react, react-dom, qrcode.react, react (+1 more)

### Community 6 - "package.json metadata"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 7 - "Plan de Demo y Fase 0"
Cohesion: 0.25
Nodes (8): Migración Vite → Next.js 14 (App Router) ejecutada, Verificación de Fase 0 (npm run dev, lint, hot reload), Estructura de datos JSON semilla (menu.json), Qué es REAL vs qué es MOCK, Páginas / rutas necesarias, Stack técnico (Next.js 14 + Tailwind + JSON + qrcode + Vercel), Favicon logo mark (purple gradient blob), Icon sprite (bluesky, discord, documentation, github, social, x)

### Community 8 - "tsconfig include/exclude"
Cohesion: 0.25
Nodes (7): next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

### Community 9 - "Root Layout (Next.js)"
Cohesion: 0.40
Nodes (3): fraunces, metadata, workSans

### Community 10 - "ESLint Config"
Cohesion: 0.50
Nodes (3): extends, next/core-web-vitals, next/typescript

## Knowledge Gaps
- **66 isolated node(s):** `next/core-web-vitals`, `next/typescript`, `nextConfig`, `name`, `version` (+61 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Dev Tooling Deps (lint/types)` to `Fase 1 Menu Publico`, `package.json metadata`?**
  _High betweenness centrality (0.181) - this node is a cross-community bridge._
- **Why does `tailwindcss` connect `Fase 1 Menu Publico` to `Dev Tooling Deps (lint/types)`?**
  _High betweenness centrality (0.142) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `/menu page (src/app/menu/page.tsx)` (e.g. with `Next.js 14 (App Router)` and `QR Menu Dashboard (project)`) actually correct?**
  _`/menu page (src/app/menu/page.tsx)` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `next/core-web-vitals`, `next/typescript`, `nextConfig` to the rest of the system?**
  _66 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Fase 1 Menu Publico` be split into smaller, more focused modules?**
  _Cohesion score 0.12105263157894737 - nodes in this community are weakly interconnected._
- **Should `tsconfig compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `Fases 0-6 del Roadmap` be split into smaller, more focused modules?**
  _Cohesion score 0.14705882352941177 - nodes in this community are weakly interconnected._