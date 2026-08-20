"use server";

import { revalidatePath } from "next/cache";
import { createItem, deleteItem, updateItem } from "@/lib/menu";

function refresh() {
  revalidatePath("/dashboard");
  revalidatePath("/menu");
}

export async function updateItemAction(formData: FormData): Promise<void> {
  const categoryId = String(formData.get("categoryId"));
  const itemId = String(formData.get("itemId"));
  const name = String(formData.get("name") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const price = Number(formData.get("price"));
  const available = formData.get("available") === "on";
  const targetCategoryId = String(formData.get("targetCategoryId") ?? categoryId);

  if (!name || Number.isNaN(price)) return;

  await updateItem(categoryId, itemId, { name, description, price, available, targetCategoryId });
  refresh();
}

export async function deleteItemAction(formData: FormData): Promise<void> {
  const categoryId = String(formData.get("categoryId"));
  const itemId = String(formData.get("itemId"));
  await deleteItem(categoryId, itemId);
  refresh();
}

export async function createItemAction(formData: FormData): Promise<void> {
  const categoryId = String(formData.get("categoryId"));
  const name = String(formData.get("name") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const price = Number(formData.get("price"));
  const available = formData.get("available") === "on";

  if (!categoryId || !name || Number.isNaN(price)) return;

  await createItem(categoryId, { name, description, price, available });
  refresh();
}
