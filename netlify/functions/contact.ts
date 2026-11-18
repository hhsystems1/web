// Netlify Function: contact-form intake for Rivryn (hhs-core2) — Connections slice 1.
// The form posts same-origin to /api/contact (rewritten to this function in
// netlify.toml); this function forwards to hhs-core2's leads endpoint.
// The lead token lives server-side only (LEAD_INTAKE_TOKEN env var) — the
// browser never sees it. Env (set in Netlify):
// - LEAD_INTAKE_TOKEN — same value as hhs-core2's LEAD_INTAKE_TOKEN
// - CRM_API_URL — hhs-core2 base URL (defaults to production)

const CRM_BASE = process.env.CRM_API_URL ?? "https://core.helpinghandssystems.com";

type ContactEvent = {
  httpMethod?: string;
  body?: string | null;
};

type ContactBody = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  message?: unknown;
  page_url?: unknown;
  company_website?: unknown;
};

type JsonResponse = {
  statusCode: number;
  headers: Record<string, string>;
  body: string;
};

function json(statusCode: number, body: unknown): JsonResponse {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function asOptionalString(value: unknown): string | undefined {
  return isNonEmptyString(value) ? value.trim() : undefined;
}

export const handler = async (event: ContactEvent): Promise<JsonResponse> => {
  if (event.httpMethod !== "POST") {
    return json(405, { ok: false, error: "method_not_allowed" });
  }

  const token = process.env.LEAD_INTAKE_TOKEN;
  if (!token) {
    return json(503, { ok: false, error: "unavailable" });
  }

  let data: ContactBody;
  try {
    data = JSON.parse(event.body ?? "") as ContactBody;
  } catch {
    return json(400, { ok: false, error: "bad_json" });
  }

  if (
    !isNonEmptyString(data.name) ||
    !isNonEmptyString(data.email) ||
    !isNonEmptyString(data.message)
  ) {
    return json(400, { ok: false, error: "validation" });
  }

  // company_website is the honeypot: forwarded as-is; hhs-core2 silently
  // accepts (and drops) submissions where it is filled.
  const payload = {
    source: "web:hhs",
    name: data.name.trim(),
    email: data.email.trim(),
    phone: asOptionalString(data.phone),
    company: asOptionalString(data.company),
    message: data.message.trim(),
    page_url: asOptionalString(data.page_url),
    company_website:
      typeof data.company_website === "string" ? data.company_website : undefined,
  };

  let upstream: Response;
  try {
    upstream = await fetch(`${CRM_BASE}/api/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Lead-Token": token,
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
  } catch {
    return json(502, { ok: false, error: "unavailable" });
  }

  let result: { error?: unknown } | null = null;
  try {
    result = (await upstream.json()) as { error?: unknown };
  } catch {
    result = null;
  }

  if (!upstream.ok) {
    const error =
      typeof result?.error === "string" ? result.error : "upstream_error";
    // Pass through hhs-core2's own 401/503 so the caller can tell a closed
    // gate from a bad submission; anything else becomes a 502.
    const status = upstream.status === 401 || upstream.status === 503 ? upstream.status : 502;
    return json(status, { ok: false, error });
  }

  return json(200, { ok: true });
};
