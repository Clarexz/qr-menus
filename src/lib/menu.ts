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

export function formatPrice(price: number): string {
  return `$${price.toLocaleString("es-MX")}`;
}
