import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingParticles from "@/components/FloatingParticles";
import InteractiveBackground from "@/components/InteractiveBackground";
import TurtleChatWidget from "@/components/TurtleChatWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://web.helpinghandssystems.com"),
  title: "Helping Hands Systems - Web Development",
  description: "Conversion-focused websites for local service businesses with live demos, lead capture, booking flows, and a built-in analytics dashboard.",
  keywords: "web development, website design, booking systems, lead capture, local business websites, analytics dashboard",
  icons: {
    icon: '/hhs-logo-new-transparent.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    images: ['/hhs-logo-new-transparent.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <InteractiveBackground />
        <FloatingParticles />
        {children}
        <TurtleChatWidget />
      </body>
    </html>
  );
}
