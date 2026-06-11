import { Suspense } from 'react';
import type { Metadata } from 'next';

import Fusion44xLandingPage from '@/components/fusion44x-landing/LandingSystem';
import { fusion44xLandingCampaigns } from '@/content/fusion44xLanding';

const campaign = fusion44xLandingCampaigns['youtube-vsl'];

export const metadata: Metadata = {
  title: `${campaign.seoTitle} | Fusion44x`,
  description: campaign.seoDescription,
  openGraph: {
    title: `${campaign.seoTitle} | Fusion44x`,
    description: campaign.seoDescription,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${campaign.seoTitle} | Fusion44x`,
    description: campaign.seoDescription,
  },
};

export default function YoutubeVslLandingPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-slate-950" />}>
      <Fusion44xLandingPage campaign={campaign} pagePath="/landing/youtube-vsl" />
    </Suspense>
  );
}
