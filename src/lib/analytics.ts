// Datos de ejemplo — no hay tracking real conectado todavía.
export type DailyViews = { day: string; views: number };
export type TopItem = { name: string; views: number };

export type MockAnalytics = {
  totalScans: number;
  uniqueVisitors: number;
  avgTimeOnMenu: string;
  weeklyViews: DailyViews[];
  topItems: TopItem[];
};

export function getMockAnalytics(): MockAnalytics {
  return {
    totalScans: 428,
    uniqueVisitors: 312,
    avgTimeOnMenu: "1m 42s",
    weeklyViews: [
      { day: "Lun", views: 38 },
      { day: "Mar", views: 45 },
      { day: "Mié", views: 41 },
      { day: "Jue", views: 52 },
      { day: "Vie", views: 78 },
      { day: "Sáb", views: 96 },
      { day: "Dom", views: 78 },
    ],
    topItems: [
      { name: "Guacamole de Molcajete", views: 96 },
      { name: "Tacos de Cochinita", views: 84 },
      { name: "Agua de Jamaica", views: 71 },
      { name: "Mole Negro", views: 58 },
      { name: "Elote Callejero", views: 49 },
    ],
  };
}
