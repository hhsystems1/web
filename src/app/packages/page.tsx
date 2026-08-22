"use client";

import {
  Globe,
  Server,
  MessageSquare,
  Layout,
  Mail,
  Headphones,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

import NavIsland from "@/components/NavIsland";

const features = [
  {
    icon: Layout,
    title: "3-Page Custom Website",
    description:
      "Professional, conversion-focused website built for your business — Home, About/Services, and Contact.",
  },
  {
    icon: Globe,
    title: "Free Domain",
    description:
      "One year of domain registration included at no extra cost with your build.",
  },
  {
    icon: Server,
    title: "Hosting & Ongoing Upkeep",
    description:
      "Secure hosting, SSL certificate, backups, and site maintenance — $99/month keeps everything running smoothly.",
  },
  {
    icon: Mail,
    title: "Contact Forms",
    description:
      "Custom contact and quote request forms so visitors can reach you instantly — no guesswork required.",
  },
  {
    icon: MessageSquare,
    title: "AI Assistant on Your Site",
    description:
      "An intelligent chatbot that answers questions, captures leads, and guides visitors around the clock.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Direct support from our team for updates, questions, and anything you need after launch.",
  },
];

export default function PackagesPage() {
  return (
    <main className="relative min-h-screen bg-[#faf8f5]">
      <NavIsland />

      <section className="relative px-4 pt-32 pb-16 sm:px-6 md:pt-40">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-200/60 bg-blue-50/80 px-4 py-2 text-sm font-semibold text-blue-700 backdrop-blur-md">
            Simple, transparent pricing
          </div>

          <h1 className="text-4xl font-black leading-[0.98] tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Website Package
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Everything you need to launch a professional website that generates
            real leads — with hosting, support, and an AI assistant included.
          </p>
        </div>
      </section>

      <section className="relative px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="eclipse-border rounded-[2.1rem]">
            <div className="relative overflow-hidden rounded-[2rem] border border-blue-300/70 bg-white/70 shadow-2xl shadow-blue-200/30 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,181,255,0.1),transparent_50%)]" />

            <div className="relative p-8 sm:p-12">
              <div className="mb-10 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  All-In-One Package
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                  <div className="text-center">
                    <h2 className="text-5xl font-black text-gray-900 sm:text-6xl">
                      $750
                    </h2>
                    <p className="mt-2 text-gray-500">
                      One-time build fee
                    </p>
                  </div>
                  <div className="h-px w-24 bg-gray-200 sm:h-24 sm:w-px" />
                  <div className="text-center">
                    <h2 className="text-5xl font-black text-blue-600 sm:text-6xl">
                      $99
                    </h2>
                    <p className="mt-2 text-gray-500">
                      /month for upkeep & hosting
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-10">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="eclipse-border flex items-start gap-4 rounded-xl border border-gray-300/70 bg-white/60 p-5 shadow-xl shadow-gray-100/20 backdrop-blur-xl"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-400 shadow-md shadow-blue-200/50">
                      <feature.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="eclipse-border eclipse-blue rounded-2xl border border-blue-300/70 bg-blue-50/50 p-6 backdrop-blur-xl">
                <h3 className="mb-4 text-lg font-bold text-gray-900">
                  What&apos;s included at a glance
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    "Custom 3-page website",
                    "Free domain registration",
                    "Ongoing hosting & upkeep",
                    "SSL security certificate",
                    "Contact & quote request forms",
                    "AI chat assistant",
                    "Mobile-responsive design",
                    "SEO-ready setup",
                    "Analytics dashboard access",
                    "Direct support from our team",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-blue-500"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 via-blue-500 to-blue-400 rounded-full hover:shadow-2xl hover:shadow-blue-300/30 transition-all duration-300 hover:scale-105 border border-blue-400/30 hover:border-blue-400/60"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-gray-700 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <Mail size={18} />
                  Ask a Question
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Helping Hands Systems
              </h3>
              <p className="text-gray-500 mb-4">
                Conversion-focused websites for local service businesses with
                live demos and analytics dashboards.
              </p>
              <div className="space-y-2 text-gray-500">
                <p>📞 (606) 660-6147</p>
                <p>✉️ helpinghandsystems1@gmail.com</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <Link
                    href="/#demos"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Live Demos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/packages"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Website Package
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
            <p>&copy; 2026 Helping Hands Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
