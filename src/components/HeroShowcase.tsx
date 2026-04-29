"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  CheckCircle2,
  Search,
  Sparkles,
  Smartphone,
  Server,
} from 'lucide-react';

interface HeroShowcaseProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaAction: () => void;
}

const metrics = [
  { value: "90+", label: "Lighthouse targets" },
  { value: "24/7", label: "Lead capture" },
  { value: "VPS", label: "Agent runtime" },
];

const showcaseItems = [
  { icon: CalendarCheck, label: "Booking flow", value: "Live calendars" },
  { icon: Bot, label: "AI assistant", value: "Lead questions handled" },
  { icon: Server, label: "VPS agent", value: "Private runtime" },
  { icon: Search, label: "SEO setup", value: "Local search ready" },
];

const stackItems = [
  { icon: Smartphone, text: "Responsive pages" },
  { icon: CheckCircle2, text: "Payments and forms" },
  { icon: Sparkles, text: "Polished launch assets" },
];

export default function HeroShowcase({ title, subtitle, ctaText, ctaAction }: HeroShowcaseProps) {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-grid px-6 pt-28 pb-16 md:pt-36">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.96)_0%,rgba(5,46,22,0.76)_45%,rgba(8,47,73,0.82)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 rounded-lg border border-primary-emerald/35 bg-white/10 px-4 py-2 text-sm font-semibold text-primary-lime backdrop-blur-md"
          >
            <Sparkles size={16} />
            Custom sites, bookings, VPS agents, and skills
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <button onClick={ctaAction} className="btn btn-primary gap-2">
              {ctaText}
              <ArrowRight size={18} />
            </button>
            <a href="/contact" className="btn gap-2">
              Talk through your build
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-white/10 bg-white/10 px-4 py-4 backdrop-blur-md">
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                <div className="mt-1 text-sm text-slate-300">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.26 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-lg border border-primary-emerald/30 bg-slate-950/80 shadow-2xl shadow-primary-emerald/15 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-primary-emerald" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary-blue" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary-lime" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Launch dashboard</span>
            </div>

            <div className="grid gap-0 lg:grid-cols-[0.92fr_1fr]">
              <div className="border-b border-white/10 bg-black/30 p-6 lg:border-b-0 lg:border-r">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-white/10 bg-white/10 p-2">
                    <Image
                      src="/mettalic letters logo.png"
                      alt="Helping Hands Systems logo"
                      width={80}
                      height={50}
                      className="h-auto w-full"
                      priority
                    />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Helping Hands Systems</div>
                    <div className="text-lg font-bold text-white">Growth buildout</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {stackItems.map((item) => (
                    <div key={item.text} className="flex items-center gap-3 rounded-lg bg-white/10 px-3 py-3 text-slate-200">
                      <item.icon size={18} className="text-primary-emerald" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-400">This month</div>
                    <div className="text-3xl font-bold text-white">Ready to scale</div>
                  </div>
                  <div className="rounded-lg bg-primary-emerald/15 px-3 py-2 text-sm font-semibold text-primary-lime">
                    Active
                  </div>
                </div>

                <div className="space-y-3">
                  {showcaseItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/10 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-blue/15 text-primary-blue">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <div className="font-semibold text-white">{item.label}</div>
                          <div className="text-sm text-slate-400">{item.value}</div>
                        </div>
                      </div>
                      <CheckCircle2 size={20} className="shrink-0 text-primary-emerald" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
