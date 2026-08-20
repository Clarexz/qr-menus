# Plan de Implementación — Demo Menú QR + Dashboard

**Contexto:** Demo de validación rápida (no producto de producción todavía). Objetivo: cerrar 1-2 clientes en 24-48h con un video de 30 seg mostrando el flujo completo. Backend real/multitenant se construye DESPUÉS de la primera venta, no antes.

**Pitch que este demo habilita:** "Deja de depender de la imprenta y de mandarme un WhatsApp cada vez que cambias un precio — tú lo editas, se actualiza solo, sin reimprimir el QR."

---

## 1. Qué es REAL vs qué es MOCK

Esto es lo más importante del documento — no te lo saltes ni lo mezcles.

### 🟢 REAL (debe funcionar de verdad, sin trucos)
- **Menú público**: página que ve el cliente final al escanear el QR. Lee los datos desde una fuente editable (no hardcodeada en el HTML).
- **El ciclo de edición → reflejo en vivo**: cambias un precio o marcas "agotado" en el dashboard → el menú público se actualiza sin necesidad de un nuevo QR ni redeploy. Este es EL corazón del video de venta. Si esto no es real, no hay demo.
- **QR dinámico**: apunta siempre a la misma URL del menú público (no se regenera cuando cambian los datos).

### 🟡 MOCK (se ve y se siente funcional, pero no tiene backend real detrás)
- **Autenticación / login del dashboard**: si se incluye, es solo visual (pantalla de login que redirige directo, sin validar credenciales de verdad).
- **Analíticas de escaneo**: números y gráfica estáticos/de ejemplo. No se implementa tracking real hoy.
- **Multi-tenant / multi-restaurante**: el demo es de UN solo negocio. No hay selector de negocios, no hay onboarding.
- **Persistencia entre sesiones de servidor**: no necesita sobrevivir un restart del servidor de forma robusta ni tener backups — solo necesita sobrevivir mientras dura la demo/llamada de venta.

### ❌ Fuera de alcance total (no se toca hoy)
- Pagos, suscripciones, facturación.
- Gestión de imágenes con upload (usa URLs de imágenes ya alojadas, o placeholders).
- Roles de usuario, permisos, equipos.
- Internacionalización, múltiples idiomas.

---

## 2. Stack técnico

- **Next.js 14** (App Router) — consistente con el resto del stack de Ravyn.
- **Tailwind CSS** para estilos.
- **Persistencia ligera**: un archivo JSON en el servidor (`/data/menu.json`) leído/escrito vía API routes o Server Actions. Esto es suficiente para que el ciclo edición → reflejo en vivo sea real, sin montar Supabase para un demo de un solo tenant. (Si se quiere reusar el proyecto directo como base del producto real después de vender, se puede migrar a Supabase en ese momento — no antes.)
- **QR**: librería `qrcode` (Node) o `qrcode.react` para generarlo dentro del dashboard, apuntando a la URL pública desplegada (Vercel).
- **Deploy**: Vercel, igual que el resto de los proyectos.

---

## 3. Estructura de datos (JSON semilla)

```json
{
  "business": {
    "name": "Nombre del restaurante",
    "logoUrl": "",
    "primaryColor": "#000000"
  },
  "categories": [
    {
      "id": "cat-1",
      "name": "Entradas",
      "items": [
        {
          "id": "item-1",
          "name": "Nombre del platillo",
          "description": "Descripción corta",
          "price": 120,
          "available": true,
          "imageUrl": ""
        }
      ]
    }
  ]
}
```

Usa datos reales del prospecto elegido (toma su carta pública actual), no placeholders genéricos tipo "Lorem ipsum" — el video de venta se graba con SU carta.

---

## 4. Páginas / rutas necesarias

| Ruta | Propósito | Real o Mock |
|---|---|---|
| `/menu` | Menú público, lo que ve el cliente al escanear | REAL (lee datos vivos) |
| `/dashboard` | CRUD de platillos: nombre, precio, disponible, categoría | REAL el guardado; MOCK todo lo demás (sin auth) |
| `/dashboard/qr` | Muestra el QR generado apuntando a `/menu`, descargable | REAL |
| `/dashboard/analytics` | Gráfica y números de escaneos | MOCK (datos de ejemplo) |
| `/dashboard/login` (opcional) | Pantalla de acceso | MOCK (solo visual, si se incluye) |

No construyas `/dashboard/analytics` ni `/dashboard/login` si no hay tiempo — son las primeras en cortarse si el reloj aprieta. Lo innegociable es `/menu` + `/dashboard` (CRUD) + `/dashboard/qr`.

---

## 5. Dirección de diseño

**Instrucción explícita para Claude Code: usar la skill de frontend-design antes de escribir cualquier componente.**

Esto NO es el branding de Ravyn (Semillero). Es un producto que se le presenta al dueño del restaurante como SU herramienta — debe sentirse como un producto real e independiente, no como un demo genérico de agencia.

Guías:
- **Profesional pero cálido/fresco** — apropiado para gastronomía, no para una fintech. Tipografía con carácter (una serif o display con personalidad para nombres de platillos, sans limpia para el cuerpo), no la combinación default de Inter+system-ui.
- **Evitar "AI slop" explícitamente**: sin guiones largos (—) en el copy, sin emojis en la UI, sin gradientes genéricos morado-azul, sin iconografía de stock genérica (lucide default sin criterio), sin sombras difusas tipo glassmorphism sin propósito.
- **Paleta**: elegir algo que funcione para gastronomía en general (tonos tierra, crema, un acento fuerte) — no reusar Pine/Radish/Cream de Semillero, porque ese es el branding de Ravyn, no el del cliente. Si se quiere neutralidad para poder adaptar por cliente después, usar una paleta demo con nombre propio (no "Ravyn").
- El dashboard debe verse **capaz**, no juguetón — el dueño necesita confiar en que esto reemplaza su proceso actual, no que es un juguete de fin de semana.

---

## 6. Orden de construcción sugerido

1. Setup del proyecto Next.js + Tailwind + estructura de carpetas (10-15 min).
2. Cargar JSON semilla con la carta real del prospecto elegido (10 min).
3. Construir `/menu` (página pública) leyendo del JSON — sin edición todavía (30-40 min).
4. Construir API route/Server Action para leer y escribir el JSON (20 min).
5. Construir `/dashboard` con el CRUD conectado a esa API — este es el paso crítico, es donde vive el "real" del demo (45-60 min).
6. Verificar el ciclo completo: editar en dashboard → refrescar `/menu` → cambio reflejado, sin reiniciar servidor ni tocar el QR (10 min).
7. Construir `/dashboard/qr` generando el código apuntando a la URL de producción de `/menu` (15-20 min).
8. Deploy a Vercel (10 min).
9. (Si sobra tiempo) `/dashboard/analytics` con datos de ejemplo — puramente cosmético.
10. Grabar el video: cambiar un precio en `/dashboard` → mostrar `/menu` actualizado → escanear el QR físico.

---

## 7. Prompt sugerido para iniciar la sesión de Claude Code

```
Vamos a construir un demo funcional de un sistema de menú digital con QR
dinámico para un restaurante prospecto, con el objetivo de cerrar una venta
en las próximas 24-48h. Antes de escribir código, revisa tu skill de
frontend-design — el diseño debe verse profesional y con carácter propio
(cálido, apropiado para gastronomía), evitando cualquier señal de "AI slop":
nada de guiones largos en el copy, nada de emojis en la interfaz, nada de
gradientes genéricos morado-azul, nada de iconografía default sin criterio.

Contexto completo del alcance (qué debe ser funcional de verdad y qué puede
ser solo visual) está en el archivo adjunto QR_MENU_Plan_Implementacion_Demo.md.
Síguelo como fuente de verdad para decidir qué construir con backend real
(JSON persistido vía API route) y qué puede quedar mockeado sin
consecuencia. No implementes autenticación real, multi-tenant, ni
analíticas reales — todo eso está fuera de alcance para esta demo.
```

---

## 8. Recordatorio

Este proyecto es intencionalmente de un solo tenant y con persistencia ligera. Si se cierra la venta, la migración a Supabase + multi-tenant + auth real se planea como una sesión aparte, no se improvisa arriba de este código de demo.
