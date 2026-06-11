export type Fusion44xTrackingAction =
  | 'page_view'
  | 'outbound_cta_click'
  | 'lead_cta_click'
  | 'vsl_play_click'
  | 'scroll_depth';

export interface Fusion44xTrackingPayload {
  campaign: string;
  pagePath: string;
  section?: string;
  label?: string;
  destination?: string;
  scrollDepth?: number;
  attribution?: Record<string, string>;
}

export function trackFusion44xEvent(
  action: Fusion44xTrackingAction,
  payload: Fusion44xTrackingPayload
) {
  if (typeof window === 'undefined') {
    return;
  }

  window.dispatchEvent(
    new CustomEvent('fusion44x:tracking', {
      detail: {
        action,
        payload,
        timestamp: Date.now(),
      },
    })
  );
}

