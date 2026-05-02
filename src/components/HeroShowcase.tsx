"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  MessageSquareText,
  MousePointerClick,
  PhoneCall,
  Sparkles,
} from 'lucide-react';

interface HeroShowcaseProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaAction: () => void;
}

const guideSteps = [
  {
    icon: PhoneCall,
    title: 'Customer reaches out',
    text: 'Calls, forms, messages, and quote requests land in one clear intake path.',
  },
  {
    icon: MessageSquareText,
    title: 'Assistant responds',
    text: 'The agent answers, collects details, drafts follow-up, and flags the owner when needed.',
  },
  {
    icon: ClipboardList,
    title: 'Work gets tracked',
    text: 'Tasks, reminders, employee handoffs, and next steps stay visible until finished.',
  },
];

const proofPoints = [
  'Local service websites',
  'Lead capture + booking',
  'AI-assisted follow-up',
];

function TurtleGuideVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-primary-lime/20 blur-3xl" />
      <div className="absolute -right-10 bottom-12 h-40 w-40 rounded-full bg-primary-blue/25 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 22, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.85, delay: 0.25 }}
        className="relative overflow-hidden rounded-[2.2rem] border border-primary-emerald/35 bg-slate-950/80 p-5 shadow-2xl shadow-primary-emerald/20 backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(80,200,120,0.22),transparent_38%),linear-gradient(135deg,rgba(15,23,42,0.4),rgba(2,6,23,0.88))]" />
        <div className="relative">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-emerald/30 bg-primary-emerald/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary-lime">
              <Sparkles size={15} />
              Your AI guide
            </div>
            <div className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-slate-300">
              Site → Agent → Action
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative min-h-[260px] rounded-[1.8rem] border border-white/10 bg-black/35 p-4">
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 top-1/2 w-[230px] -translate-x-1/2 -translate-y-1/2"
                aria-label="Friendly turtle guide illustration"
              >
                <svg viewBox="0 0 260 240" role="img" className="drop-shadow-[0_20px_40px_rgba(80,200,120,0.28)]">
                  <defs>
                    <linearGradient id="shell" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ecf87f" />
                      <stop offset="50%" stopColor="#50C878" />
                      <stop offset="100%" stopColor="#38b5ff" />
                    </linearGradient>
                    <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#b7f7c5" />
                      <stop offset="100%" stopColor="#34d399" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <path d="M51 184c36 28 122 35 164 0" fill="none" stroke="#38b5ff" strokeOpacity="0.22" strokeWidth="13" strokeLinecap="round" />
                  <ellipse cx="132" cy="126" rx="76" ry="56" fill="url(#shell)" filter="url(#glow)" />
                  <path d="M72 127c20-40 102-45 120 4-17 37-102 44-120-4Z" fill="#052e16" opacity="0.25" />
                  <path d="M132 72v108M83 104c33 16 66 16 99 0M85 151c31-19 64-19 96 0" stroke="#052e16" strokeOpacity="0.38" strokeWidth="5" strokeLinecap="round" />
                  <circle cx="207" cy="110" r="27" fill="url(#skin)" />
                  <circle cx="217" cy="103" r="4" fill="#052e16" />
                  <path d="M217 116c7 4 14 3 20-2" stroke="#052e16" strokeWidth="4" strokeLinecap="round" fill="none" />
                  <circle cx="74" cy="180" r="20" fill="url(#skin)" />
                  <circle cx="172" cy="181" r="20" fill="url(#skin)" />
                  <circle cx="62" cy="91" r="18" fill="url(#skin)" />
                  <circle cx="121" cy="67" r="18" fill="url(#skin)" />
                  <path d="M196 73l20-35 12 37 35 4-29 21 8 35-29-19-30 18 9-35-28-22 32-4Z" fill="#ecf87f" opacity="0.92" />
                  <path d="M31 54c18 8 32 21 42 39" stroke="#50C878" strokeWidth="6" strokeLinecap="round" fill="none" />
                  <path d="M28 55l24-8-10 24" stroke="#50C878" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </motion.div>

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-slate-950/75 p-3 backdrop-blur-md">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <MousePointerClick size={16} className="text-primary-lime" />
                  Follow the guide down the page
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  From attention-grabbing website to working assistant skills.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {guideSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.12 }}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4"
                >
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-emerald/15 text-primary-lime ring-1 ring-primary-emerald/30">
                      <step.icon size={20} />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-white">{step.title}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">{step.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function HeroShowcase({ title, subtitle, ctaText, ctaAction }: HeroShowcaseProps) {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-grid px-4 pt-28 pb-14 sm:px-6 md:pt-36">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.98)_0%,rgba(5,46,22,0.82)_48%,rgba(8,47,73,0.86)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary-emerald/35 bg-white/10 px-4 py-2 text-sm font-semibold text-primary-lime backdrop-blur-md"
          >
            <Sparkles size={16} />
            Websites built to generate more customers
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="max-w-4xl text-4xl font-black leading-[0.98] tracking-tight text-white sm:text-5xl md:text-7xl"
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
              Get a Free Demo
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            {proofPoints.map((point) => (
              <span key={point} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur-md">
                <CheckCircle2 size={16} className="text-primary-emerald" />
                {point}
              </span>
            ))}
          </motion.div>
        </div>

        <TurtleGuideVisual />
      </div>
    </section>
  );
}
