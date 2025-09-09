import { siteConfig } from './site.config'

export const SEO = {
  titleTemplate: `%s | ${siteConfig.name}`,
  defaultTitle: siteConfig.name,
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    handle: siteConfig.creator,
    site: siteConfig.creator,
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'author',
      content: siteConfig.name,
    },
  ],
}
