import { loginAction } from "./actions";

export default function DashboardLoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-4 py-16">
      <div className="w-full max-w-sm rounded-2xl border border-line bg-card p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
          Casa Milpa
        </p>
        <h1 className="mt-2 font-display text-3xl text-ink">Iniciar sesión</h1>
        <p className="mt-1 text-sm text-ink-soft">Accede al panel de administración.</p>

        <form action={loginAction} className="mt-6 flex flex-col gap-3">
          <label className="text-xs font-medium text-ink-soft">
            Correo
            <input
              type="email"
              name="email"
              placeholder="dueno@casamilpa.com"
              defaultValue="dueno@casamilpa.com"
              className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink"
            />
          </label>

          <label className="text-xs font-medium text-ink-soft">
            Contraseña
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              defaultValue="••••••••"
              className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink"
            />
          </label>

          <button
            type="submit"
            className="mt-2 rounded-lg bg-terracotta px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
          >
            Entrar
          </button>
        </form>

        <p className="mt-5 text-center text-xs text-ink-soft">
          Vista solo visual — no valida credenciales todavía.
        </p>
      </div>
    </main>
  );
}
