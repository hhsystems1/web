import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingParticles from "@/components/FloatingParticles";
import InteractiveBackground from "@/components/InteractiveBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Helping Hands Systems - Web Development",
  description: "Modern websites with built-in bookings, chatbots, and automations. Professional web development services that make your site actually work for you.",
  keywords: "web development, website design, booking systems, chatbots, automation, AI integration",
  icons: {
    icon: '/mettalic letters logo.png',
    apple: '/mettalic letters logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <InteractiveBackground />
        <FloatingParticles />
        {children}
      </body>
    </html>
  );
}
