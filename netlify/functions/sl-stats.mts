import { getStore } from "@netlify/blobs";

// Aggregates lead-system events for the owner dashboard: GET /api/stats?site=stressless&days=30
export default async (req: Request) => {
  const url = new URL(req.url);
  const site = (url.searchParams.get("site") || "stressless").replace(/[^a-z0-9_-]/g, "").slice(0, 24);
  const days = Math.min(90, Math.max(1, Number(url.searchParams.get("days")) || 30));
  const store = getStore("lead-events");
  const today = Date.now();
  const dayList = Array.from({ length: days }, (_, i) => new Date(today - (days - 1 - i) * 864e5).toISOString().slice(0, 10));
  const rows: string[][] = [];
  await Promise.all(dayList.map(async (d) => {
    const { blobs } = await store.list({ prefix: `${site}/${d}/` });
    for (const b of blobs) rows.push(b.key.split("/"));
  }));
  // key = site/day/event/page/device/detail/id
  const count = (f: (r: string[]) => boolean) => rows.filter(f).length;
  const by = (f: (r: string[]) => boolean, idx: number) => {
    const m: Record<string, number> = {};
    for (const r of rows) if (f(r)) m[r[idx]] = (m[r[idx]] || 0) + 1;
    return Object.entries(m).sort((a, b) => b[1] - a[1]);
  };
  const isLead = (r: string[]) => r[2] === "form_submit" || r[2].startsWith("lead_") || r[2] === "call_tap";
  const pages = by((r) => r[2] === "page_view", 3).map(([p, v]) => ({ page: p, views: v, leads: count((r) => isLead(r) && r[3] === p) }));
  const body = {
    site, days, from: dayList[0], to: dayList.at(-1),
    totals: {
      views: count((r) => r[2] === "page_view"),
      forms: count((r) => r[2] === "form_submit"),
      calls: count((r) => r[2] === "call_tap"),
      chat: count((r) => r[2] === "lead_chat"),
      other: count((r) => ["lead_contact", "lead_referral", "lead_design"].includes(r[2])),
      cta: count((r) => r[2] === "cta_click"),
    },
    funnel: ["form_start", "form_step1", "form_step2", "form_submit"].map((s) => ({ stage: s, count: count((r) => r[2] === s) })),
    dropoff: by((r) => r[2] === "form_abandon", 5).slice(0, 8),
    pages: pages.slice(0, 12),
    devices: by((r) => r[2] === "page_view", 4),
    sources: by((r) => r[2] === "page_view", 5).slice(0, 8),
    ctas: by((r) => r[2] === "cta_click" || r[2] === "call_tap", 5).slice(0, 8),
    scroll: { half: count((r) => r[2] === "scroll_50"), most: count((r) => r[2] === "scroll_90") },
    design: ["design_start", "design_quote", "lead_design"].map((s) => ({ stage: s, count: count((r) => r[2] === s) })),
    designs: by((r) => r[2] === "lead_design", 5).slice(0, 8),
    daily: dayList.map((d) => ({ day: d, views: count((r) => r[1] === d && r[2] === "page_view"), leads: count((r) => r[1] === d && isLead(r)) })),
  };
  return new Response(JSON.stringify(body), { headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
};

export const config = { path: "/api/stats" };
