import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  defaultTitle: 'Helping Hands Systems - Web Development',
  titleTemplate: '%s | Helping Hands Systems',
  description: 'Modern websites with built-in bookings, secure VPS AI agents, and installable skills. Professional web development services that make your site actually work for you.',
  canonical: 'https://web.helpinghandssystems.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://web.helpinghandssystems.com',
    siteName: 'Helping Hands Systems',
    title: 'Helping Hands Systems - Web Development',
    description: 'Modern websites with built-in bookings, secure VPS AI agents, and installable skills. Professional web development services that make your site actually work for you.',
    images: [
      {
        url: 'https://web.helpinghandssystems.com/hhs-og.png',
        width: 512,
        height: 512,
        alt: 'Helping Hands Systems - Web Development',
      },
    ],
  },
  twitter: {
    handle: '@helpinghandsys',
    site: '@helpinghandsys',
    cardType: 'summary_large_image',
  },
};

export default config;
