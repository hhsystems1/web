import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
// import { DefaultSeo } from 'next-seo'
// import { SEO } from '../next-seo.config'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Background } from '../components/Background'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit'
})

export const metadata: Metadata = {
  title: 'Helping Hands Web - Futuristic Web Development',
  description: 'Web experiences that look like the future, function like a dream.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Background />
        <div className="relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
