"use server";

import { redirect } from "next/navigation";

// Login solo visual — no valida credenciales, siempre entra.
export async function loginAction(): Promise<void> {
  redirect("/dashboard");
}
