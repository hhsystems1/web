"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Page-view beacon for Rivryn (hhs-core2) analytics — Connections slice 1.
// One POST per page load/navigation, no cookies, no PII: just the path and
// the referrer. The per-site token is browser-visible by design (like
// HubSpot's portal ID); it only authorizes events for this one site.
// Env (set in Netlify; unset => the beacon quietly does nothing):
// - NEXT_PUBLIC_SITE_INGEST_TOKEN — this site's ingest token from Rivryn
// - NEXT_PUBLIC_CRM_API_URL — hhs-core2 base URL (defaults to production)
const CRM_BASE =
  process.env.NEXT_PUBLIC_CRM_API_URL ?? "https://core.helpinghandssystems.com";
const SITE_TOKEN = process.env.NEXT_PUBLIC_SITE_INGEST_TOKEN;

export default function SiteBeacon() {
  const pathname = usePathname();
  const firedFor = useRef<string | null>(null);

  useEffect(() => {
    if (!SITE_TOKEN) return;
    const path = pathname ?? window.location.pathname;
    if (firedFor.current === path) return;
    firedFor.current = path;
    fetch(`${CRM_BASE}/api/ingest/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Site-Token": SITE_TOKEN,
      },
      body: JSON.stringify({
        event_type: "page_view",
        path,
        referrer: document.referrer || "",
      }),
      // Fire-and-forget: never block the page or an unload.
      keepalive: true,
    }).catch(() => {
      // The beacon must never break the page.
    });
  }, [pathname]);

  return null;
}
