import { getStore } from "@netlify/blobs";

// Store lead tracker. One tiny blob per event; everything counted is encoded in the key,
// so the stats function only lists keys. No form contents or personal details are stored.
const EVENTS = new Set([
  "page_view", "scroll_50", "scroll_90", "cta_click", "product_click", "product_view", "buy_click",
  "hero_swipe", "filter_use", "social_click", "photo_open", "form_start", "form_abandon", "lead_contact",
]);
const seg = (v: unknown, max = 48) =>
  String(v ?? "").toLowerCase().replace(/\.html$/, "").replace(/[^a-z0-9._-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, max) || "none";

export default async (req: Request) => {
  if (req.method !== "POST") return new Response(null, { status: 405 });
  const text = await req.text();
  if (text.length > 2000) return new Response(null, { status: 413 });
  let e: Record<string, unknown>;
  try { e = JSON.parse(text); } catch { return new Response(null, { status: 400 }); }
  const ev = String(e.e || "");
  if (!EVENTS.has(ev)) return new Response(null, { status: 400 });
  const site = seg(e.site || "hissey", 24);
  const day = new Date().toISOString().slice(0, 10);
  const key = [site, day, ev, seg(e.p), e.d === "mobile" ? "mobile" : "desktop", seg(e.x, 64), `${Date.now()}${Math.random().toString(36).slice(2, 6)}`].join("/");
  await getStore("lead-events").set(key, "1");
  return new Response(null, { status: 204 });
};

export const config = { path: "/api/track" };
