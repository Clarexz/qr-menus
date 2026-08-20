# Graph Report - .  (2026-08-20)

## Corpus Check
- Corpus is ~4,248 words - fits in a single context window. You may not need a graph.

## Summary
- 103 nodes · 97 edges · 15 communities (12 shown, 3 thin omitted)
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.71)
- Token cost: 80,335 input · 0 output

## Community Hubs (Navigation)
- Dev Tooling Deps (lint/types)
- Plan de Demo y Fase 0
- tsconfig compilerOptions
- Runtime Deps (next/react/qrcode)
- package.json metadata
- Fases 1-6 del Roadmap
- tsconfig include/exclude
- Root Layout (Next.js)
- ESLint Config
- tsconfig lib targets
- Plan de Implementacion (docs raiz)
- next.config.mjs
- postcss.config.mjs
- tailwind.config.ts

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 15 edges
2. `scripts` - 5 edges
3. `include` - 5 edges
4. `Requisito transversal: responsive real (mobile + web)` - 5 edges
5. `lib` - 4 edges
6. `Fase 0 — Migración de scaffold y setup base` - 4 edges
7. `Fase 1 — Datos semilla + Menú público` - 4 edges
8. `Migración Vite → Next.js 14 (App Router) ejecutada` - 4 edges
9. `extends` - 3 edges
10. `Decisión de stack: migrar a Next.js 14` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Favicon logo mark (purple gradient blob)` --conceptually_related_to--> `Migración Vite → Next.js 14 (App Router) ejecutada`  [INFERRED]
  public/favicon.svg → Documentation/Progress/Fase-0-setup.md
- `README: React + TypeScript + Vite scaffold` --conceptually_related_to--> `Decisión de stack: migrar a Next.js 14`  [INFERRED]
  README.md → Documentation/Plan_Implementacion_Por_Fases.md
- `README: React + TypeScript + Vite scaffold` --conceptually_related_to--> `Migración Vite → Next.js 14 (App Router) ejecutada`  [INFERRED]
  README.md → Documentation/Progress/Fase-0-setup.md
- `Decisiones/desviaciones de Fase 0` --references--> `Requisito transversal: responsive real (mobile + web)`  [EXTRACTED]
  Documentation/Progress/Fase-0-setup.md → Documentation/Plan_Implementacion_Por_Fases.md
- `Orden de construcción sugerido` --conceptually_related_to--> `Plan de Implementación por Fases`  [INFERRED]
  Documentation/QR_MENU_Plan_Implementacion_Demo.md → Documentation/Plan_Implementacion_Por_Fases.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Responsive verification applies across build phases** — documentation_plan_implementacion_por_fases_responsive_requirement, documentation_plan_implementacion_por_fases_fase1, documentation_plan_implementacion_por_fases_fase2, documentation_plan_implementacion_por_fases_fase3, documentation_plan_implementacion_por_fases_fase4 [EXTRACTED 1.00]
- **REAL vs MOCK scope defines routes and stack choices for the demo** — documentation_qr_menu_plan_implementacion_demo_real_mock, documentation_qr_menu_plan_implementacion_demo_rutas, documentation_qr_menu_plan_implementacion_demo_stack_tecnico [EXTRACTED 1.00]
- **Fase 0 closure: build report, decisions and verification together document the phase** — documentation_progress_fase_0_setup_report, documentation_progress_fase_0_setup_migracion_nextjs, documentation_progress_fase_0_setup_verificacion, documentation_progress_fase_0_setup_decisiones [EXTRACTED 1.00]

## Communities (15 total, 3 thin omitted)

### Community 0 - "Dev Tooling Deps (lint/types)"
Cohesion: 0.12
Nodes (17): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, postcss, tailwindcss, @types/node (+9 more)

### Community 1 - "Plan de Demo y Fase 0"
Cohesion: 0.14
Nodes (14): Decisión de stack: migrar a Next.js 14, Fase 0 — Migración de scaffold y setup base, Protocolo de cierre de fase, Decisiones/desviaciones de Fase 0, Migración Vite → Next.js 14 (App Router) ejecutada, Fase 0 — Migración de scaffold y setup base (reporte de progreso), Verificación de Fase 0 (npm run dev, lint, hot reload), Estructura de datos JSON semilla (menu.json) (+6 more)

### Community 2 - "tsconfig compilerOptions"
Cohesion: 0.14
Nodes (14): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, module, moduleResolution (+6 more)

### Community 3 - "Runtime Deps (next/react/qrcode)"
Cohesion: 0.22
Nodes (9): next, dependencies, next, qrcode.react, react, react-dom, qrcode.react, react (+1 more)

### Community 4 - "package.json metadata"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 5 - "Fases 1-6 del Roadmap"
Cohesion: 0.36
Nodes (8): Fase 1 — Datos semilla + Menú público, Fase 2 — Persistencia real + Dashboard CRUD, Fase 3 — QR dinámico, Fase 4 — Deploy a Vercel, Fase 5 (opcional) — Analíticas mock, Fase 6 (opcional) — Login mock, Requisito transversal: responsive real (mobile + web), Dirección de diseño (evitar AI slop)

### Community 6 - "tsconfig include/exclude"
Cohesion: 0.25
Nodes (7): next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

### Community 7 - "Root Layout (Next.js)"
Cohesion: 0.40
Nodes (3): geistMono, geistSans, metadata

### Community 8 - "ESLint Config"
Cohesion: 0.50
Nodes (3): extends, next/core-web-vitals, next/typescript

### Community 9 - "tsconfig lib targets"
Cohesion: 0.50
Nodes (4): dom, dom.iterable, esnext, lib

### Community 10 - "Plan de Implementacion (docs raiz)"
Cohesion: 0.67
Nodes (3): Plan de Implementación por Fases, Orden de construcción sugerido, Plan de Implementación — Demo Menú QR + Dashboard

## Knowledge Gaps
- **56 isolated node(s):** `next/core-web-vitals`, `next/typescript`, `nextConfig`, `name`, `version` (+51 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Dev Tooling Deps (lint/types)` to `package.json metadata`?**
  _High betweenness centrality (0.078) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `tsconfig compilerOptions` to `tsconfig lib targets`, `tsconfig include/exclude`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Runtime Deps (next/react/qrcode)` to `package.json metadata`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **What connects `next/core-web-vitals`, `next/typescript`, `nextConfig` to the rest of the system?**
  _56 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Dev Tooling Deps (lint/types)` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `Plan de Demo y Fase 0` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `tsconfig compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._