import { getMenu } from "@/lib/menu";
import { createItemAction, deleteItemAction, updateItemAction } from "./actions";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const menu = await getMenu();

  return (
    <main className="min-h-screen bg-cream pb-24">
      <header className="border-b border-line px-6 pb-6 pt-10 sm:px-10 sm:pt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
          Dashboard
        </p>
        <h1 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
          {menu.business.name}
        </h1>
        <p className="mt-1 text-sm text-ink-soft">
          Edita el menú aquí. Los cambios se reflejan de inmediato en{" "}
          <a href="/menu" className="underline decoration-terracotta underline-offset-2">
            /menu
          </a>
          .
        </p>
      </header>

      <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-8">
        <section className="mb-12">
          <h2 className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-olive">
            Agregar elemento
            <span className="h-px flex-1 bg-line" />
          </h2>

          <form
            action={createItemAction}
            className="grid grid-cols-1 gap-3 rounded-2xl border border-dashed border-line bg-card p-4 sm:grid-cols-2 sm:p-5"
          >
            <label className="text-xs font-medium text-ink-soft sm:col-span-2">
              Nombre
              <input
                name="name"
                required
                className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink"
              />
            </label>

            <label className="text-xs font-medium text-ink-soft sm:col-span-2">
              Descripción
              <textarea
                name="description"
                rows={2}
                className="mt-1 w-full resize-none rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink"
              />
            </label>

            <label className="text-xs font-medium text-ink-soft">
              Precio (MXN)
              <input
                name="price"
                type="number"
                min={0}
                step="1"
                required
                className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink"
              />
            </label>

            <label className="text-xs font-medium text-ink-soft">
              Categoría
              <select
                name="categoryId"
                defaultValue={menu.categories[0]?.id}
                className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink"
              >
                {menu.categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-2 text-xs font-medium text-ink-soft sm:col-span-2">
              <input
                type="checkbox"
                name="available"
                defaultChecked
                className="h-4 w-4 rounded border-line accent-terracotta"
              />
              Disponible
            </label>

            <button
              type="submit"
              className="rounded-lg bg-terracotta px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark sm:col-span-2"
            >
              Agregar
            </button>
          </form>
        </section>

        {menu.categories.map((category) => (
          <details key={category.id} open className="group mb-10">
            <summary className="mb-3 flex cursor-pointer list-none items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-olive [&::-webkit-details-marker]:hidden">
              <svg
                aria-hidden
                viewBox="0 0 20 20"
                className="h-3.5 w-3.5 shrink-0 fill-none stroke-current stroke-[2.5] transition-transform group-open:rotate-90"
              >
                <path d="M7 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {category.name}
              <span className="text-ink-soft normal-case tracking-normal">
                ({category.items.length})
              </span>
              <span className="h-px flex-1 bg-line" />
            </summary>

            <div className="space-y-3">
              {category.items.map((item) => (
                <form
                  key={item.id}
                  action={updateItemAction}
                  className="rounded-2xl border border-line bg-card p-4 sm:p-5"
                >
                  <input type="hidden" name="categoryId" value={category.id} />
                  <input type="hidden" name="itemId" value={item.id} />

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-4">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <label className="text-xs font-medium text-ink-soft sm:col-span-2">
                        Nombre
                        <input
                          name="name"
                          defaultValue={item.name}
                          required
                          className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink"
                        />
                      </label>

                      <label className="text-xs font-medium text-ink-soft sm:col-span-2">
                        Descripción
                        <textarea
                          name="description"
                          defaultValue={item.description}
                          rows={2}
                          className="mt-1 w-full resize-none rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink"
                        />
                      </label>

                      <label className="text-xs font-medium text-ink-soft">
                        Precio (MXN)
                        <input
                          name="price"
                          type="number"
                          min={0}
                          step="1"
                          defaultValue={item.price}
                          required
                          className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink"
                        />
                      </label>

                      <label className="text-xs font-medium text-ink-soft">
                        Categoría
                        <select
                          name="targetCategoryId"
                          defaultValue={category.id}
                          className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink"
                        >
                          {menu.categories.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.name}
                            </option>
                          ))}
                        </select>
                      </label>

                      <label className="flex items-center gap-2 text-xs font-medium text-ink-soft sm:col-span-2">
                        <input
                          type="checkbox"
                          name="available"
                          defaultChecked={item.available}
                          className="h-4 w-4 rounded border-line accent-terracotta"
                        />
                        Disponible
                      </label>
                    </div>

                    <div className="flex gap-2 sm:flex-col">
                      <button
                        type="submit"
                        className="flex-1 rounded-lg bg-terracotta px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark sm:flex-none"
                      >
                        Guardar
                      </button>
                      <button
                        type="submit"
                        formAction={deleteItemAction}
                        className="flex-1 rounded-lg border border-line px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-terracotta hover:text-terracotta sm:flex-none"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </form>
              ))}

              {category.items.length === 0 ? (
                <p className="rounded-2xl border border-dashed border-line px-4 py-6 text-center text-sm text-ink-soft">
                  Sin elementos en esta categoría todavía.
                </p>
              ) : null}
            </div>
          </details>
        ))}
      </div>
    </main>
  );
}
