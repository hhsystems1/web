export const CURRENT_MAIN_SITE_URL =
  process.env.NEXT_PUBLIC_FUSION44X_MAIN_SITE_URL ?? 'https://fusion44x.com';

export const CURRENT_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_FUSION44X_CHECKOUT_URL ?? `${CURRENT_MAIN_SITE_URL}/checkout`;

export const CURRENT_CONSULTATION_URL =
  process.env.NEXT_PUBLIC_FUSION44X_CONSULTATION_URL ?? `${CURRENT_MAIN_SITE_URL}/consultation`;

export type Fusion44xDestination = 'checkout' | 'consultation' | 'main';

const ATTRIBUTION_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
  'gclid',
  'fbclid',
  'msclkid',
  'ttclid',
  'gbraid',
  'wbraid',
];

export function getFusion44xBaseUrl(destination: Fusion44xDestination) {
  if (destination === 'checkout') {
    return CURRENT_CHECKOUT_URL;
  }

  if (destination === 'consultation') {
    return CURRENT_CONSULTATION_URL;
  }

  return CURRENT_MAIN_SITE_URL;
}

export function captureAttributionParams(
  entries: Iterable<[string, string]>
): Record<string, string> {
  const attribution: Record<string, string> = {};

  for (const [key, value] of entries) {
    if (ATTRIBUTION_KEYS.includes(key) || key.startsWith('utm_')) {
      attribution[key] = value;
    }
  }

  return attribution;
}

export function appendAttributionParams(
  baseUrl: string,
  attribution: Record<string, string>
) {
  const nextUrl = new URL(baseUrl);

  Object.entries(attribution).forEach(([key, value]) => {
    if (value) {
      nextUrl.searchParams.set(key, value);
    }
  });

  return nextUrl.toString();
}

export function buildFusion44xOutboundUrl(
  destination: Fusion44xDestination,
  attribution: Record<string, string>
) {
  return appendAttributionParams(getFusion44xBaseUrl(destination), attribution);
}

