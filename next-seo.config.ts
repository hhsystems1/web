import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  defaultTitle: 'Helping Hands Systems - Web Development',
  titleTemplate: '%s | Helping Hands Systems',
  description: 'Modern websites with built-in bookings, chatbots, and automations. Professional web development services that make your site actually work for you.',
  canonical: 'https://helpinghandsystems.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://helpinghandsystems.com',
    siteName: 'Helping Hands Systems',
    title: 'Helping Hands Systems - Web Development',
    description: 'Modern websites with built-in bookings, chatbots, and automations. Professional web development services that make your site actually work for you.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
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
