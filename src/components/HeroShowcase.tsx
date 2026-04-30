"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  FileText,
  Github,
  Globe2,
  Newspaper,
  Sparkles,
} from 'lucide-react';

interface HeroShowcaseProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaAction: () => void;
}

const metrics = [
  { value: "Web", label: "Builds and rebuilds" },
  { value: "VPS", label: "Agent-ready systems" },
  { value: "Skills", label: "Installable workflows" },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    title: "HHS code and project work",
    description: "Review public repos, site branches, and implementation work as it moves through GitHub.",
    href: "https://github.com/hhsystems1",
    external: true,
  },
  {
    icon: BookOpen,
    label: "Docs",
    title: "Agent skills and service docs",
    description: "Browse the current skill packages and service structure we are turning into repeatable offers.",
    href: "/skills",
  },
  {
    icon: Newspaper,
    label: "Blog / Updates",
    title: "Demos and updates coming next",
    description: "Jump to the demo roadmap area for walkthroughs, launches, package changes, and build updates.",
    href: "#demos",
  },
  {
    icon: Globe2,
    label: "Contact",
    title: "Start a web project",
    description: "Send project details, package interest, or business questions through the HHS intake form.",
    href: "/contact",
  },
];

const updateItems = [
  "Web builds now emphasize HHS-controlled forms and secure deployment headers.",
  "Agent-ready websites can connect to Hermes, OpenClaw, Agent Zero, and skill packages.",
  "Package pages are being tightened so every CTA routes to a reviewable next step.",
];

export default function HeroShowcase({ title, subtitle, ctaText, ctaAction }: HeroShowcaseProps) {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-grid px-6 pt-28 pb-16 md:pt-36">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.96)_0%,rgba(5,46,22,0.76)_45%,rgba(8,47,73,0.82)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary-emerald/35 bg-white/10 px-4 py-2 text-sm font-semibold text-primary-lime backdrop-blur-md"
          >
            <Sparkles size={16} />
            Web division hub for HHS builds, docs, and updates
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
            <Link href="/contact" className="btn gap-2">
              Talk through your build
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 backdrop-blur-md">
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
          <div className="relative overflow-hidden rounded-[2rem] border border-primary-emerald/30 bg-slate-950/80 p-5 shadow-2xl shadow-primary-emerald/15 backdrop-blur-xl">
            <div className="mb-5 flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-lime">HHS Web Hub</div>
                <div className="mt-2 text-2xl font-bold text-white">Socials, docs, and division notes</div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-emerald/30 bg-primary-emerald/10 px-3 py-2 text-sm font-semibold text-primary-lime">
                <FileText size={16} />
                Live business info
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {socialLinks.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 + index * 0.08 }}
                >
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group block h-full rounded-2xl border border-white/10 bg-white/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-emerald/55 hover:bg-primary-emerald/10 hover:shadow-xl hover:shadow-primary-emerald/10"
                  >
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-blue/15 text-primary-blue ring-1 ring-primary-blue/25 transition-colors duration-300 group-hover:bg-primary-emerald/15 group-hover:text-primary-lime">
                        <item.icon size={22} />
                      </div>
                      {item.external ? <ExternalLink size={16} className="text-slate-500 group-hover:text-primary-lime" /> : <ArrowRight size={16} className="text-slate-500 group-hover:text-primary-lime" />}
                    </div>
                    <div className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-lime">{item.label}</div>
                    <h2 className="mt-2 text-lg font-bold text-white">{item.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/35 p-5">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                <Newspaper size={16} className="text-primary-emerald" />
                Web division updates
              </div>
              <div className="space-y-3">
                {updateItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-primary-emerald" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
