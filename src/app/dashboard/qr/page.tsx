import { getMenu } from "@/lib/menu";
import { getMenuUrl } from "@/lib/site";
import QrCard from "@/components/QrCard";

export const dynamic = "force-dynamic";

export default async function DashboardQrPage() {
  const menu = await getMenu();
  const url = await getMenuUrl();

  return (
    <main className="min-h-screen bg-cream pb-24">
      <header className="border-b border-line px-6 pb-6 pt-10 sm:px-10 sm:pt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
          Dashboard
        </p>
        <h1 className="mt-2 font-display text-3xl text-ink sm:text-4xl">Código QR</h1>
        <p className="mt-1 text-sm text-ink-soft">
          Descarga el QR para imprimirlo en mesas, entrada o material del negocio.{" "}
          <a href="/dashboard" className="underline decoration-terracotta underline-offset-2">
            Volver al dashboard
          </a>
          .
        </p>
      </header>

      <div className="mx-auto max-w-2xl px-4 pt-8 sm:px-8">
        <QrCard url={url} businessName={menu.business.name} />
      </div>
    </main>
  );
}
