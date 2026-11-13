import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  defaultTitle: 'Helping Hands Systems - One Website That Works For You',
  titleTemplate: '%s | Helping Hands Systems',
  description: 'One product: conversion-focused websites for local service businesses — live demos, lead capture, booking flows, and a built-in analytics dashboard, powered by Rivryn.',
  canonical: 'https://web.helpinghandssystems.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://web.helpinghandssystems.com',
    siteName: 'Helping Hands Systems',
    title: 'Helping Hands Systems - One Website That Works For You',
    description: 'One product: conversion-focused websites for local service businesses — live demos, lead capture, booking flows, and a built-in analytics dashboard, powered by Rivryn.',
    images: [
      {
        url: 'https://web.helpinghandssystems.com/hhs-og.png',
        width: 512,
        height: 512,
        alt: 'Helping Hands Systems - One Website That Works For You',
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
