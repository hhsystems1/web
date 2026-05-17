'use client';

import { useState } from 'react';

export function useFusion44xTracker() {
  const [loading, setLoading] = useState(false);

  const trackAndRedirect = async (product: string) => {
    setLoading(true);
    
    const leadId = typeof window !== 'undefined' 
      ? (sessionStorage.getItem('hhs_lead_id') || `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`)
      : `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('hhs_lead_id', leadId);
    }
    
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const refCode = `HHS_landing_${date}_${leadId}`;
    const targetUrl = `https://fusion44x.com/${product}?ref=${refCode}&utm_source=hhs&utm_campaign=landing`;

    try {
      // Log lead
      await fetch('/api/affiliate/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lead_id: leadId,
          referral_code: refCode,
          source_campaign: 'landing',
          captured_at: new Date().toISOString(),
          status: 'new',
          lead_data: { source: 'fusion44x_landing_page' }
        })
      });

      // Log redirect
      await fetch('/api/affiliate/redirects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lead_id: leadId,
          destination: targetUrl,
          timestamp: new Date().toISOString()
        })
      });

      // Redirect
      window.location.href = targetUrl;
    } catch (error) {
      console.error('Tracking error:', error);
      // Still redirect even if tracking fails
      window.location.href = targetUrl;
    }
  };

  return { trackAndRedirect, loading };
}