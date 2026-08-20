import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-cream p-8 text-center">
      <p className="font-display text-2xl text-ink">Casa Milpa</p>
      <p className="max-w-sm text-sm text-ink-soft">
        Proyecto base listo. El dashboard de administración llega en la
        siguiente fase.
      </p>
      <Link
        href="/menu"
        className="rounded-full border border-terracotta px-5 py-2 text-sm font-medium text-terracotta transition-colors hover:bg-terracotta hover:text-cream"
      >
        Ver menú público
      </Link>
    </main>
  );
}
