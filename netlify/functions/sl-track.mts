import { getStore } from "@netlify/blobs";

// StressLess lead-system tracker. One tiny blob per event; everything that
// gets counted is encoded in the key, so the stats function only lists keys.
// No form contents or personal details are stored, only counts.
const EVENTS = new Set([
  "page_view", "scroll_50", "scroll_90", "cta_click", "call_tap",
  "form_start", "form_step1", "form_step2", "form_submit", "form_abandon",
  "lead_chat", "lead_contact", "lead_referral", "lead_careers", "photo_open",
  "design_start", "design_quote", "design_upgrade", "design_upload", "design_product", "lead_design",
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
  const site = seg(e.site || "stressless", 24);
  const day = new Date().toISOString().slice(0, 10);
  const key = [site, day, ev, seg(e.p), e.d === "mobile" ? "mobile" : "desktop", seg(e.x), `${Date.now()}${Math.random().toString(36).slice(2, 6)}`].join("/");
  await getStore("lead-events").set(key, "1");
  return new Response(null, { status: 204 });
};

export const config = { path: "/api/track" };
