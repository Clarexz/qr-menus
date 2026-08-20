import { promises as fs } from "fs";
import path from "path";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
  imageUrl: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

export type MenuData = {
  business: {
    name: string;
    logoUrl: string;
    primaryColor: string;
  };
  categories: MenuCategory[];
};

const MENU_PATH = path.join(process.cwd(), "data", "menu.json");

export async function getMenu(): Promise<MenuData> {
  const raw = await fs.readFile(MENU_PATH, "utf-8");
  return JSON.parse(raw) as MenuData;
}

export async function writeMenu(menu: MenuData): Promise<void> {
  await fs.writeFile(MENU_PATH, `${JSON.stringify(menu, null, 2)}\n`, "utf-8");
}

function findItem(menu: MenuData, categoryId: string, itemId: string) {
  const category = menu.categories.find((c) => c.id === categoryId);
  const item = category?.items.find((i) => i.id === itemId);
  return { category, item };
}

export async function updateItem(
  categoryId: string,
  itemId: string,
  updates: {
    name: string;
    description: string;
    price: number;
    available: boolean;
    targetCategoryId: string;
  }
): Promise<void> {
  const menu = await getMenu();
  const { category, item } = findItem(menu, categoryId, itemId);
  if (!category || !item) return;

  item.name = updates.name;
  item.description = updates.description;
  item.price = updates.price;
  item.available = updates.available;

  if (updates.targetCategoryId && updates.targetCategoryId !== categoryId) {
    const targetCategory = menu.categories.find((c) => c.id === updates.targetCategoryId);
    if (targetCategory) {
      category.items = category.items.filter((i) => i.id !== itemId);
      targetCategory.items.push(item);
    }
  }

  await writeMenu(menu);
}

export async function deleteItem(categoryId: string, itemId: string): Promise<void> {
  const menu = await getMenu();
  const category = menu.categories.find((c) => c.id === categoryId);
  if (!category) return;
  category.items = category.items.filter((i) => i.id !== itemId);
  await writeMenu(menu);
}

export async function createItem(
  categoryId: string,
  item: { name: string; description: string; price: number; available: boolean }
): Promise<void> {
  const menu = await getMenu();
  const category = menu.categories.find((c) => c.id === categoryId);
  if (!category) return;

  const id = `item-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
  category.items.push({
    id,
    name: item.name,
    description: item.description,
    price: item.price,
    available: item.available,
    imageUrl: "",
  });

  await writeMenu(menu);
}

export function formatPrice(price: number): string {
  return `$${price.toLocaleString("es-MX")}`;
}
