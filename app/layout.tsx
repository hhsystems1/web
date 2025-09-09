import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
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
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
