import { getMenu } from "@/lib/menu";
import { getMockAnalytics } from "@/lib/analytics";

export const dynamic = "force-dynamic";

export default async function DashboardAnalyticsPage() {
  const menu = await getMenu();
  const data = getMockAnalytics();
  const maxWeeklyViews = Math.max(...data.weeklyViews.map((d) => d.views));
  const maxTopItemViews = Math.max(...data.topItems.map((i) => i.views));

  return (
    <main className="min-h-screen bg-cream pb-24">
      <header className="border-b border-line px-6 pb-6 pt-10 sm:px-10 sm:pt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
          Dashboard
        </p>
        <h1 className="mt-2 font-display text-3xl text-ink sm:text-4xl">Analíticas</h1>
        <p className="mt-1 text-sm text-ink-soft">
          Vista de ejemplo para {menu.business.name}.{" "}
          <a href="/dashboard" className="underline decoration-terracotta underline-offset-2">
            Volver al dashboard
          </a>
          .
        </p>
      </header>

      <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-8">
        <div className="mb-8 rounded-2xl border border-dashed border-line bg-card px-4 py-3 text-sm text-ink-soft">
          Estos números son de ejemplo. Todavía no hay tracking real conectado —
          esta vista muestra cómo se vería el panel una vez que se integre.
        </div>

        <section className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-line bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-olive">
              Escaneos totales
            </p>
            <p className="mt-2 font-display text-3xl text-ink">{data.totalScans}</p>
            <p className="mt-1 text-xs text-ink-soft">últimos 7 días</p>
          </div>
          <div className="rounded-2xl border border-line bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-olive">
              Visitantes únicos
            </p>
            <p className="mt-2 font-display text-3xl text-ink">{data.uniqueVisitors}</p>
            <p className="mt-1 text-xs text-ink-soft">últimos 7 días</p>
          </div>
          <div className="rounded-2xl border border-line bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-olive">
              Tiempo promedio
            </p>
            <p className="mt-2 font-display text-3xl text-ink">{data.avgTimeOnMenu}</p>
            <p className="mt-1 text-xs text-ink-soft">viendo el menú</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-olive">
            Vistas por día
            <span className="h-px flex-1 bg-line" />
          </h2>
          <div className="rounded-2xl border border-line bg-card p-5 sm:p-6">
            <div className="flex items-end justify-between gap-2 sm:gap-4" style={{ height: 160 }}>
              {data.weeklyViews.map((d) => (
                <div key={d.day} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                  <span className="text-xs font-medium text-ink-soft">{d.views}</span>
                  <div
                    className="w-full rounded-t-md bg-terracotta"
                    style={{ height: `${(d.views / maxWeeklyViews) * 100}%`, minHeight: 4 }}
                  />
                  <span className="text-xs text-ink-soft">{d.day}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-olive">
            Platillos más vistos
            <span className="h-px flex-1 bg-line" />
          </h2>
          <div className="space-y-3">
            {data.topItems.map((item) => (
              <div key={item.name} className="rounded-2xl border border-line bg-card p-4 sm:p-5">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-ink">{item.name}</p>
                  <p className="shrink-0 text-sm text-ink-soft">{item.views} vistas</p>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-line">
                  <div
                    className="h-full rounded-full bg-olive"
                    style={{ width: `${(item.views / maxTopItemViews) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
