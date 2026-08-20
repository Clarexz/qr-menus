import { getMenu, formatPrice } from "@/lib/menu";

export const dynamic = "force-dynamic";

export default async function MenuPage() {
  const menu = await getMenu();

  return (
    <main className="min-h-screen bg-cream pb-16">
      <header className="border-b border-line px-6 pb-8 pt-12 text-center sm:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
          Menú
        </p>
        <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
          {menu.business.name}
        </h1>
      </header>

      <nav className="sticky top-0 z-10 flex gap-2 overflow-x-auto border-b border-line bg-cream/95 px-4 py-3 backdrop-blur sm:justify-center">
        {menu.categories.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            className="shrink-0 rounded-full border border-line px-4 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:border-terracotta hover:text-terracotta"
          >
            {category.name}
          </a>
        ))}
      </nav>

      <div className="mx-auto max-w-2xl px-5 pt-8 sm:px-8">
        {menu.categories.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-20 pb-10">
            <h2 className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-olive">
              {category.name}
              <span className="h-px flex-1 bg-line" />
            </h2>

            <ul className="space-y-6">
              {category.items.map((item) => (
                <li key={item.id} className={item.available ? "" : "opacity-50"}>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg leading-snug text-ink sm:text-xl">
                      {item.name}
                    </h3>
                    <span
                      aria-hidden
                      className="hidden flex-1 translate-y-[-2px] border-b border-dotted border-line sm:block"
                    />
                    {item.available ? (
                      <span className="shrink-0 font-display text-lg text-terracotta sm:text-xl">
                        {formatPrice(item.price)}
                      </span>
                    ) : (
                      <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-ink-soft">
                        Agotado
                      </span>
                    )}
                  </div>
                  {item.description ? (
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {item.description}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
