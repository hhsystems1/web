import { getStore } from "@netlify/blobs";

// Aggregates store events for the owner dashboard: GET /api/stats?site=hissey&days=30
export default async (req: Request) => {
  const url = new URL(req.url);
  const site = (url.searchParams.get("site") || "hissey").replace(/[^a-z0-9_-]/g, "").slice(0, 24);
  const days = Math.min(90, Math.max(1, Number(url.searchParams.get("days")) || 30));
  const store = getStore("lead-events");
  const now = Date.now();
  const dayList = Array.from({ length: days }, (_, i) => new Date(now - (days - 1 - i) * 864e5).toISOString().slice(0, 10));
  const rows: string[][] = [];
  await Promise.all(dayList.map(async (d) => {
    const { blobs } = await store.list({ prefix: `${site}/${d}/` });
    for (const b of blobs) rows.push(b.key.split("/"));
  }));
  // key = site/day/event/page/device/detail/id
  const is = (ev: string) => (r: string[]) => r[2] === ev;
  const count = (f: (r: string[]) => boolean) => rows.filter(f).length;
  const tally = (f: (r: string[]) => boolean, pick: (r: string[]) => string) => {
    const m: Record<string, number> = {};
    for (const r of rows) if (f(r)) { const k = pick(r); m[k] = (m[k] || 0) + 1; }
    return Object.entries(m).sort((a, b) => b[1] - a[1]);
  };
  const buys = rows.filter(is("buy_click"));
  const buyBy = tally(is("buy_click"), (r) => r[5].split(".")[0]);
  const views = tally(is("product_view"), (r) => r[5]);
  const handles = new Set([...views.map((v) => v[0]), ...buyBy.map((b) => b[0])]);
  const bmap = Object.fromEntries(buyBy), vmap = Object.fromEntries(views);
  const products = [...handles].map((h) => [h, vmap[h] || 0, bmap[h] || 0]).sort((a, b) => (b[1] as number) - (a[1] as number)).slice(0, 15);
  const body = {
    site, days,
    totals: { views: count(is("page_view")), buys: buys.length, pviews: count(is("product_view")), msgs: count(is("lead_contact")) },
    daily: dayList.map((d) => ({ day: d, views: count((r) => r[1] === d && r[2] === "page_view"), buys: count((r) => r[1] === d && r[2] === "buy_click") })),
    products,
    positions: tally(is("buy_click"), (r) => r[5].split(".")[1] || "other"),
    sources: tally(is("page_view"), (r) => r[5]).slice(0, 8),
    devices: tally(is("page_view"), (r) => r[4]),
    engage: [["hero_swipe", count(is("hero_swipe"))], ["filter_use", count(is("filter_use"))], ["social_click", count(is("social_click"))], ["photo_open", count(is("photo_open"))]],
  };
  return new Response(JSON.stringify(body), { headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
};

export const config = { path: "/api/stats" };
