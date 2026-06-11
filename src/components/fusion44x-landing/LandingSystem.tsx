'use client';

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  Droplets,
  Flame,
  Menu,
  Play,
  ShieldCheck,
  Sparkles,
  Waves,
  X,
} from 'lucide-react';

import {
  type Fusion44xDestination,
  type Fusion44xLandingCampaign,
} from '@/content/fusion44xLanding';
import { CURRENT_MAIN_SITE_URL } from '@/lib/fusion44xLinks';
import { useFusion44xLandingTracking } from '@/hooks/useFusion44xLandingTracking';

interface LandingPageProps {
  campaign: Fusion44xLandingCampaign;
  pagePath: string;
}

interface CTAProps {
  href: string;
  label: string;
  tone?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

function CTAButton({ href, label, tone = 'primary', onClick, className = '' }: CTAProps) {
  const toneClass =
    tone === 'primary'
      ? 'border-cyan-300/45 bg-[linear-gradient(135deg,rgba(14,165,233,0.9),rgba(56,189,248,0.8)_48%,rgba(59,130,246,0.92))] text-white shadow-[0_18px_50px_rgba(14,165,233,0.22)]'
      : 'border-white/15 bg-white/8 text-slate-100 hover:border-cyan-300/35 hover:bg-white/12';

  return (
    <a
      href={href}
      onClick={onClick}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 sm:px-6 sm:py-3.5',
        'backdrop-blur-xl hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(0,0,0,0.25)]',
        toneClass,
        className,
      ].join(' ')}
    >
      {label}
      {tone === 'primary' ? <ArrowRight size={16} /> : null}
    </a>
  );
}

function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={[
        'relative scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24',
        className,
      ].join(' ')}
    >
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <div className="mb-8 max-w-3xl">
            {eyebrow ? (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function BackgroundAtmosphere() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_35%),radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.10),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(148,163,184,0.08),transparent_24%),linear-gradient(180deg,rgba(2,6,23,0.35),rgba(2,6,23,0.9))]" />
      <div className="absolute left-[-8rem] top-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-[-6rem] top-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
    </div>
  );
}

export function LandingHeader({
  campaign,
  buildOutboundHref,
  trackOutboundClick,
  trackLeadClick,
}: {
  campaign: Fusion44xLandingCampaign;
  buildOutboundHref: (destination: Fusion44xDestination) => string;
  trackOutboundClick: (label: string, destination: Fusion44xDestination, section?: string) => void;
  trackLeadClick: (label: string, section?: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#financing', label: 'Financing' },
    { href: '#technical-specs', label: 'Technical Specs' },
  ];

  const primaryHref = buildOutboundHref(campaign.primaryCtaTarget);
  const secondaryHref = buildOutboundHref(campaign.secondaryCtaTarget);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/10 bg-slate-950/70 px-4 py-3.5 shadow-[0_20px_50px_rgba(2,6,23,0.45)] backdrop-blur-2xl sm:px-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 text-white">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/30 bg-[linear-gradient(135deg,rgba(14,165,233,0.25),rgba(15,23,42,0.95))] text-sm font-bold tracking-[0.2em] text-cyan-100">
              F44X
            </span>
            <span className="hidden text-left sm:block">
              <span className="block text-sm font-semibold text-white">Fusion44x</span>
              <span className="block text-xs uppercase tracking-[0.22em] text-slate-400">
                Premium pool water technology
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <CTAButton
              href={secondaryHref}
              label={campaign.secondaryCtaLabel}
              tone="secondary"
              onClick={() => trackLeadClick(campaign.secondaryCtaLabel, 'header')}
            />
            <CTAButton
              href={primaryHref}
              label={campaign.primaryCtaLabel}
              onClick={() => trackOutboundClick(campaign.primaryCtaLabel, campaign.primaryCtaTarget, 'header')}
            />
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open ? (
          <div className="mt-4 border-t border-white/10 pt-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/8 bg-white/6 px-4 py-3 text-sm font-medium text-slate-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <CTAButton
                href={secondaryHref}
                label={campaign.secondaryCtaLabel}
                tone="secondary"
                onClick={() => {
                  trackLeadClick(campaign.secondaryCtaLabel, 'header-mobile');
                  setOpen(false);
                }}
                className="w-full"
              />
              <CTAButton
                href={primaryHref}
                label={campaign.primaryCtaLabel}
                onClick={() => {
                  trackOutboundClick(campaign.primaryCtaLabel, campaign.primaryCtaTarget, 'header-mobile');
                  setOpen(false);
                }}
                className="w-full"
              />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export function HeroVisual({ campaign }: { campaign: Fusion44xLandingCampaign }) {
  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.98))] p-4 shadow-[0_30px_120px_rgba(2,6,23,0.65)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.24),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_36%,rgba(56,189,248,0.07))]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(14,165,233,0.10),rgba(255,255,255,0)_16%,rgba(34,211,238,0.12),rgba(255,255,255,0)_44%,rgba(59,130,246,0.14),rgba(255,255,255,0)_76%,rgba(14,165,233,0.10))] opacity-40 blur-2xl" />

        <div className="relative space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
              <Sparkles size={14} />
              Fusion44x visual system
            </div>
            <div className="rounded-full border border-white/10 bg-white/8 px-3 py-2 text-xs text-slate-300">
              Placeholder media area
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[22rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(2,6,23,0.65),rgba(15,23,42,0.95))] p-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.18),transparent_28%)]" />
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative mx-auto flex h-full items-center justify-center"
              >
                <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-cyan-300/25 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),rgba(56,189,248,0.18)_35%,rgba(15,23,42,0.1)_65%,transparent_72%)]">
                  <div className="absolute inset-6 rounded-full border border-cyan-200/25" />
                  <div className="absolute inset-12 rounded-full border border-white/10" />
                  <div className="absolute inset-20 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),rgba(56,189,248,0.75)_44%,rgba(14,165,233,0.18)_70%,transparent_82%)] blur-[2px]" />

                  <div className="absolute left-4 top-10 rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-2 text-left text-xs backdrop-blur-xl">
                    <p className="font-semibold text-white">Clean water glow</p>
                    <p className="mt-1 text-slate-400">Premium visual cue for the ad story</p>
                  </div>
                  <div className="absolute bottom-8 right-2 rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-2 text-left text-xs backdrop-blur-xl">
                    <p className="font-semibold text-white">Hydrogen-style motion</p>
                    <p className="mt-1 text-slate-400">Swap in final asset later</p>
                  </div>
                  <div className="absolute inset-x-10 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" />
                  <div className="absolute inset-y-10 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-sky-200/50 to-transparent" />
                  <CircleDot className="absolute right-16 top-14 text-cyan-100/80" size={16} />
                  <Waves className="absolute left-14 bottom-16 text-sky-100/80" size={18} />
                  <Droplets className="absolute bottom-16 left-16 text-cyan-100/70" size={18} />
                </div>
              </motion.div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
                  Campaign angle
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{campaign.heroEyebrow}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {campaign.heroSubheadline}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {campaign.heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.35rem] border border-white/10 bg-white/6 p-4 backdrop-blur-xl"
                  >
                    <p className="text-2xl font-semibold tracking-tight text-white">{stat.value}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-cyan-300/15 bg-[linear-gradient(135deg,rgba(8,15,29,0.9),rgba(15,23,42,0.65))] p-4">
            <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
              <ShieldCheck size={18} className="text-cyan-200" />
              Swap this block for the final product photo, render, or motion asset when ready.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function LandingHero({
  campaign,
  buildOutboundHref,
  trackOutboundClick,
  trackLeadClick,
}: {
  campaign: Fusion44xLandingCampaign;
  buildOutboundHref: (destination: Fusion44xDestination) => string;
  trackOutboundClick: (label: string, destination: Fusion44xDestination, section?: string) => void;
  trackLeadClick: (label: string, section?: string) => void;
}) {
  const primaryHref = buildOutboundHref(campaign.primaryCtaTarget);
  const secondaryHref = buildOutboundHref(campaign.secondaryCtaTarget);

  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-36 sm:px-6 lg:px-8 lg:pt-40">
      <BackgroundAtmosphere />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100 backdrop-blur-xl">
            <Flame size={14} />
            {campaign.heroEyebrow}
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            {campaign.heroHeadline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {campaign.heroSubheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton
              href={primaryHref}
              label={campaign.primaryCtaLabel}
              onClick={() => trackOutboundClick(campaign.primaryCtaLabel, campaign.primaryCtaTarget, 'hero')}
              className="sm:min-w-[16rem]"
            />
            <CTAButton
              href={secondaryHref}
              label={campaign.secondaryCtaLabel}
              tone="secondary"
              onClick={() => trackLeadClick(campaign.secondaryCtaLabel, 'hero')}
              className="sm:min-w-[16rem]"
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {campaign.trustBar.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/7 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl"
              >
                <CheckCircle2 size={15} className="text-cyan-200" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <HeroVisual campaign={campaign} />
      </div>
    </section>
  );
}

export function TrustBar({ items }: { items: string[] }) {
  return (
    <section className="px-4 pb-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-3 rounded-[1.5rem] border border-white/10 bg-white/6 p-4 backdrop-blur-xl sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-950/40 px-4 py-3">
              <BadgeCheck size={18} className="text-cyan-200" />
              <span className="text-sm font-medium text-slate-100">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VSLSection({
  campaign,
  buildOutboundHref,
  trackOutboundClick,
  trackVslPlay,
}: {
  campaign: Fusion44xLandingCampaign;
  buildOutboundHref: (destination: Fusion44xDestination) => string;
  trackOutboundClick: (label: string, destination: Fusion44xDestination, section?: string) => void;
  trackVslPlay: (label: string) => void;
}) {
  const consultationHref = buildOutboundHref(campaign.secondaryCtaTarget);
  const primaryHref = buildOutboundHref(campaign.primaryCtaTarget);

  return (
    <SectionShell
      id="how-it-works"
      eyebrow={campaign.vslEyebrow}
      title={campaign.vslTitle}
      description={campaign.vslDescription}
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.94),rgba(2,6,23,0.98))] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_30%),linear-gradient(135deg,rgba(14,165,233,0.08),transparent_42%)]" />
          <div className="relative aspect-video overflow-hidden rounded-[1.5rem] border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(2,6,23,0.65),rgba(15,23,42,0.95))]">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <button
                type="button"
                onClick={() => trackVslPlay(`${campaign.slug}-vsl`)}
                className="group inline-flex h-20 w-20 items-center justify-center rounded-full border border-cyan-200/30 bg-[linear-gradient(135deg,rgba(14,165,233,0.95),rgba(59,130,246,0.95))] text-white shadow-[0_25px_70px_rgba(14,165,233,0.3)] transition hover:scale-105"
                aria-label="Play the Fusion44x walkthrough"
              >
                <Play size={26} className="ml-1" />
              </button>
              <p className="mt-6 text-lg font-semibold text-white">Final YouTube embed goes here</p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                Replace this placeholder with the real VSL, product demo, or a hero image/video block.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/80">
              Why the video matters
            </p>
            <p className="mt-3 text-lg font-semibold text-white">{campaign.vslTitle}</p>
            <ul className="mt-4 space-y-3">
              {campaign.vslBullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-300">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan-200" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-3">
            <CTAButton
              href={primaryHref}
              label={campaign.primaryCtaLabel}
              onClick={() => trackOutboundClick(campaign.primaryCtaLabel, campaign.primaryCtaTarget, 'vsl')}
              className="w-full justify-between"
            />
            <CTAButton
              href={consultationHref}
              label={campaign.secondaryCtaLabel}
              tone="secondary"
              onClick={() => trackOutboundClick(campaign.secondaryCtaLabel, campaign.secondaryCtaTarget, 'vsl')}
              className="w-full justify-between"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export function ProblemSolutionSection({
  campaign,
}: {
  campaign: Fusion44xLandingCampaign;
}) {
  return (
    <SectionShell
      title="The buyer path should feel calm, premium, and easy to follow."
      description="The section below lays out the friction first, then explains how the landing page resolves it."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-rose-300/15 bg-[linear-gradient(180deg,rgba(127,29,29,0.2),rgba(15,23,42,0.9))] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200/80">{campaign.problemTitle}</p>
          <p className="mt-3 text-base leading-7 text-slate-300">{campaign.problemIntro}</p>
          <ul className="mt-5 space-y-3">
            {campaign.problemItems.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-slate-200">
                <X size={16} className="mt-0.5 shrink-0 text-rose-200" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-cyan-300/15 bg-[linear-gradient(180deg,rgba(8,47,73,0.28),rgba(15,23,42,0.92))] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100/80">{campaign.solutionTitle}</p>
          <p className="mt-3 text-base leading-7 text-slate-300">{campaign.solutionIntro}</p>
          <ul className="mt-5 space-y-3">
            {campaign.solutionItems.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-slate-200">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan-200" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}

export function BenefitsGrid({ campaign }: { campaign: Fusion44xLandingCampaign }) {
  return (
    <SectionShell
      title={campaign.benefitsTitle}
      description={campaign.benefitsSubtitle}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {campaign.benefits.map((benefit, index) => {
          const icons = [Waves, Droplets, ShieldCheck, CalendarClock, Sparkles, CircleDot];
          const Icon = icons[index % icons.length];

          return (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group rounded-[1.6rem] border border-white/10 bg-white/6 p-5 backdrop-blur-xl transition hover:border-cyan-300/25 hover:bg-white/8"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-100">
                <Icon size={18} />
              </div>
              <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{benefit.description}</p>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}

export function TechnologySection({
  campaign,
}: {
  campaign: Fusion44xLandingCampaign;
}) {
  return (
    <SectionShell
      id="technical-specs"
      eyebrow="Technical specs"
      title={campaign.technologyTitle}
      description={campaign.technologySubtitle}
    >
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4">
          {campaign.technologyCards.map((card, index) => (
            <div
              key={card.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/80">
                    {card.highlight}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{card.title}</h3>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-400/10 text-cyan-100">
                  <span className="text-sm font-semibold">{index + 1}</span>
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[1.75rem] border border-cyan-300/15 bg-[linear-gradient(180deg,rgba(8,15,29,0.98),rgba(15,23,42,0.88))] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/80">
            Product placeholder
          </p>
          <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.65),rgba(2,6,23,0.92))] p-5">
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-4">
                <p className="text-sm font-semibold text-white">Performance note</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  This area can later hold the final product render, a technical diagram, or a short explainer animation.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Visual tone</p>
                  <p className="mt-2 text-sm font-medium text-white">Dark, premium, and cinematic</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Asset slot</p>
                  <p className="mt-2 text-sm font-medium text-white">Swap in final media later</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export function ComparisonSection({
  campaign,
}: {
  campaign: Fusion44xLandingCampaign;
}) {
  return (
    <SectionShell
      title={campaign.comparisonTitle}
      description={campaign.comparisonSubtitle}
    >
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 backdrop-blur-xl">
      <div className="grid grid-cols-1 gap-3 border-b border-white/10 bg-slate-950/45 px-5 py-4 text-sm font-semibold text-white md:grid-cols-[1.1fr_1fr_1fr]">
        <div>Experience</div>
        <div className="text-slate-300">Traditional approach</div>
        <div className="text-cyan-100">Fusion44x</div>
      </div>
      {campaign.comparisonRows.map((row, index) => (
        <div
          key={row.label}
          className={[
            'grid grid-cols-1 gap-4 px-5 py-4 text-sm leading-7 md:grid-cols-[1.1fr_1fr_1fr]',
            index !== campaign.comparisonRows.length - 1 ? 'border-b border-white/8' : '',
          ].join(' ')}
        >
          <div className="font-medium text-white">{row.label}</div>
          <div className="text-slate-300">{row.traditional}</div>
            <div className="text-cyan-100">{row.fusion44x}</div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export function FinancingCTA({
  campaign,
  buildOutboundHref,
  trackOutboundClick,
  trackLeadClick,
}: {
  campaign: Fusion44xLandingCampaign;
  buildOutboundHref: (destination: Fusion44xDestination) => string;
  trackOutboundClick: (label: string, destination: Fusion44xDestination, section?: string) => void;
  trackLeadClick: (label: string, section?: string) => void;
}) {
  const primaryHref = buildOutboundHref(campaign.primaryCtaTarget);
  const secondaryHref = buildOutboundHref(campaign.secondaryCtaTarget);

  return (
    <SectionShell
      id="financing"
      eyebrow={campaign.financingBadge}
      title={campaign.financingTitle}
      description={campaign.financingSubtitle}
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-cyan-300/15 bg-[linear-gradient(135deg,rgba(8,47,73,0.35),rgba(15,23,42,0.96))] p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-100">
              <CalendarClock size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100/80">From $75/mo</p>
              <p className="mt-1 text-lg font-semibold text-white">Keep the upgrade within reach</p>
            </div>
          </div>
          <ul className="mt-6 space-y-3">
            {campaign.financingBullets.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-slate-300">
                <CheckCircle2 size={17} className="mt-1 shrink-0 text-cyan-200" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
            Next step
          </p>
          <p className="mt-3 text-lg font-semibold text-white">
            Send them to the live checkout or to a water specialist if they still need reassurance.
          </p>
          <div className="mt-6 grid gap-3">
            <CTAButton
              href={primaryHref}
              label={campaign.primaryCtaLabel}
              onClick={() => trackOutboundClick(campaign.primaryCtaLabel, campaign.primaryCtaTarget, 'financing')}
              className="w-full justify-between"
            />
            <CTAButton
              href={secondaryHref}
              label={campaign.secondaryCtaLabel}
              tone="secondary"
              onClick={() => trackLeadClick(campaign.secondaryCtaLabel, 'financing')}
              className="w-full justify-between"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export function TestimonialsSection({
  campaign,
}: {
  campaign: Fusion44xLandingCampaign;
}) {
  return (
    <SectionShell
      title={campaign.testimonialsTitle}
      description={campaign.testimonialsSubtitle}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {campaign.testimonials.map((testimonial) => (
          <article
            key={testimonial.quote}
            className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur-xl"
          >
            {testimonial.badge ? (
              <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                {testimonial.badge}
              </span>
            ) : null}
            <p className="mt-4 text-sm leading-7 text-slate-200">&ldquo;{testimonial.quote}&rdquo;</p>
            <div className="mt-5">
              <p className="font-semibold text-white">{testimonial.name}</p>
              <p className="mt-1 text-sm text-slate-400">{testimonial.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export function FAQSection({ campaign }: { campaign: Fusion44xLandingCampaign }) {
  return (
    <SectionShell title={campaign.faqTitle} description={campaign.faqSubtitle}>
      <div className="grid gap-4 lg:grid-cols-2">
        {campaign.faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-[1.5rem] border border-white/10 bg-white/6 p-5 backdrop-blur-xl"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white">
              <span>{faq.question}</span>
              <ChevronDown
                size={18}
                className="shrink-0 text-slate-400 transition group-open:rotate-180"
              />
            </summary>
            <p className="mt-4 text-sm leading-7 text-slate-300">{faq.answer}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}

export function FinalCTA({
  campaign,
  buildOutboundHref,
  trackOutboundClick,
  trackLeadClick,
}: {
  campaign: Fusion44xLandingCampaign;
  buildOutboundHref: (destination: Fusion44xDestination) => string;
  trackOutboundClick: (label: string, destination: Fusion44xDestination, section?: string) => void;
  trackLeadClick: (label: string, section?: string) => void;
}) {
  const primaryHref = buildOutboundHref(campaign.finalPrimaryCtaTarget);
  const secondaryHref = buildOutboundHref(campaign.finalSecondaryCtaTarget);

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.25rem] border border-cyan-300/15 bg-[linear-gradient(135deg,rgba(8,15,29,0.98),rgba(15,23,42,0.88))] p-8 shadow-[0_35px_110px_rgba(0,0,0,0.45)] sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-100/80">
              Final conversion panel
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {campaign.finalTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {campaign.finalSubtitle}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton
              href={primaryHref}
              label={campaign.finalPrimaryCtaLabel}
              onClick={() =>
                trackOutboundClick(campaign.finalPrimaryCtaLabel, campaign.finalPrimaryCtaTarget, 'final')
              }
              className="sm:min-w-[16rem]"
            />
            <CTAButton
              href={secondaryHref}
              label={campaign.finalSecondaryCtaLabel}
              tone="secondary"
              onClick={() =>
                trackLeadClick(campaign.finalSecondaryCtaLabel, 'final')
              }
              className="sm:min-w-[16rem]"
            />
          </div>

          <p className="mt-6 text-sm text-slate-400">
            Outbound links preserve the campaign UTM parameters from the landing page URL.
          </p>
        </div>
      </div>
    </section>
  );
}

export function StickyMobileCTA({
  campaign,
  buildOutboundHref,
  trackOutboundClick,
  trackLeadClick,
}: {
  campaign: Fusion44xLandingCampaign;
  buildOutboundHref: (destination: Fusion44xDestination) => string;
  trackOutboundClick: (label: string, destination: Fusion44xDestination, section?: string) => void;
  trackLeadClick: (label: string, section?: string) => void;
}) {
  const primaryHref = buildOutboundHref(campaign.primaryCtaTarget);
  const secondaryHref = buildOutboundHref(campaign.secondaryCtaTarget);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-slate-950/90 px-3 py-3 backdrop-blur-2xl md:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3">
        <CTAButton
          href={secondaryHref}
          label={campaign.secondaryCtaLabel}
          tone="secondary"
          onClick={() => trackLeadClick(campaign.secondaryCtaLabel, 'sticky-mobile')}
          className="w-full justify-center text-center"
        />
        <CTAButton
          href={primaryHref}
          label={campaign.primaryCtaLabel}
          onClick={() => trackOutboundClick(campaign.primaryCtaLabel, campaign.primaryCtaTarget, 'sticky-mobile')}
          className="w-full justify-center text-center"
        />
      </div>
    </div>
  );
}

export default function Fusion44xLandingPage({ campaign, pagePath }: LandingPageProps) {
  const {
    buildOutboundHref,
    trackOutboundClick,
    trackLeadClick,
    trackVslPlay,
  } = useFusion44xLandingTracking({
    campaign: campaign.slug,
    pagePath,
  });

  useEffect(() => {
    document.title = `${campaign.seoTitle} | Fusion44x`;
  }, [campaign.seoTitle]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#020617_0%,#03111f_40%,#020617_100%)] text-white">
      <LandingHeader
        campaign={campaign}
        buildOutboundHref={buildOutboundHref}
        trackOutboundClick={trackOutboundClick}
        trackLeadClick={trackLeadClick}
      />
      <LandingHero
        campaign={campaign}
        buildOutboundHref={buildOutboundHref}
        trackOutboundClick={trackOutboundClick}
        trackLeadClick={trackLeadClick}
      />
      <TrustBar items={campaign.trustBar} />
      <VSLSection
        campaign={campaign}
        buildOutboundHref={buildOutboundHref}
        trackOutboundClick={trackOutboundClick}
        trackVslPlay={trackVslPlay}
      />
      <ProblemSolutionSection campaign={campaign} />
      <BenefitsGrid campaign={campaign} />
      <TechnologySection campaign={campaign} />
      <ComparisonSection campaign={campaign} />
      <FinancingCTA
        campaign={campaign}
        buildOutboundHref={buildOutboundHref}
        trackOutboundClick={trackOutboundClick}
        trackLeadClick={trackLeadClick}
      />
      <TestimonialsSection campaign={campaign} />
      <FAQSection campaign={campaign} />
      <FinalCTA
        campaign={campaign}
        buildOutboundHref={buildOutboundHref}
        trackOutboundClick={trackOutboundClick}
        trackLeadClick={trackLeadClick}
      />
      <footer className="px-4 pb-28 pt-4 sm:px-6 md:pb-8 lg:px-8">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>Fusion44x landing system inside the existing website repo.</p>
            <a
              href={CURRENT_MAIN_SITE_URL}
              className="inline-flex items-center gap-2 text-cyan-100 transition hover:text-white"
            >
              Visit the current live main site
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </footer>
      <StickyMobileCTA
        campaign={campaign}
        buildOutboundHref={buildOutboundHref}
        trackOutboundClick={trackOutboundClick}
        trackLeadClick={trackLeadClick}
      />
    </main>
  );
}
