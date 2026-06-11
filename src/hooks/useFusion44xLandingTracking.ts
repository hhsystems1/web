'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

import {
  buildFusion44xOutboundUrl,
  captureAttributionParams,
  type Fusion44xDestination,
} from '@/lib/fusion44xLinks';
import { trackFusion44xEvent } from '@/lib/fusion44xTracking';

interface UseFusion44xLandingTrackingArgs {
  campaign: string;
  pagePath: string;
}

export function useFusion44xLandingTracking({
  campaign,
  pagePath,
}: UseFusion44xLandingTrackingArgs) {
  const searchParams = useSearchParams();
  const attribution = captureAttributionParams(searchParams.entries());
  const scrollMarks = useRef<Set<number>>(new Set());

  useEffect(() => {
    trackFusion44xEvent('page_view', {
      campaign,
      pagePath,
      attribution,
    });
  }, [attribution, campaign, pagePath]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const thresholds = [25, 50, 75, 90];

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollableHeight = Math.max(doc.scrollHeight - window.innerHeight, 1);
      const depth = Math.min(
        100,
        Math.round((window.scrollY / scrollableHeight) * 100)
      );

      thresholds.forEach((threshold) => {
        if (depth >= threshold && !scrollMarks.current.has(threshold)) {
          scrollMarks.current.add(threshold);
          trackFusion44xEvent('scroll_depth', {
            campaign,
            pagePath,
            attribution,
            scrollDepth: threshold,
          });
        }
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [attribution, campaign, pagePath]);

  function buildOutboundHref(destination: Fusion44xDestination) {
    return buildFusion44xOutboundUrl(destination, attribution);
  }

  function trackOutboundClick(label: string, destination: Fusion44xDestination, section?: string) {
    trackFusion44xEvent('outbound_cta_click', {
      campaign,
      pagePath,
      label,
      destination,
      section,
      attribution,
    });
  }

  function trackLeadClick(label: string, section?: string) {
    trackFusion44xEvent('lead_cta_click', {
      campaign,
      pagePath,
      label,
      destination: 'consultation',
      section,
      attribution,
    });
  }

  function trackVslPlay(label: string) {
    trackFusion44xEvent('vsl_play_click', {
      campaign,
      pagePath,
      label,
      section: 'vsl',
      attribution,
    });
  }

  return {
    attribution,
    buildOutboundHref,
    trackOutboundClick,
    trackLeadClick,
    trackVslPlay,
  };
}
