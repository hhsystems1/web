import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface HeroShowcaseProps {
  title: ReactNode;
  subtitle: string;
  ctaText: string;
  ctaAction: () => void;
}

const proofPoints = [
  'Local service websites',
  'Lead capture + booking',
  'Analytics dashboard included',
];

const guideSteps = [
  { icon: '1', title: 'Customer reaches out', text: 'Calls, forms, and quote requests land in one clear path.' },
  { icon: '2', title: 'Your site responds', text: 'Answers questions and guides visitors to the next step.' },
  { icon: '3', title: 'You get the lead', text: 'Lead details stay organized until you follow up.' },
];

export default function HeroShowcase({ title, subtitle, ctaText, ctaAction }: HeroShowcaseProps) {
  return (
    <section className="hero relative min-h-[92vh] overflow-hidden bg-[#f1efe9] px-4 pb-14 pt-28 sm:px-6 md:pt-36">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#1f4bff]/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-[#1f4bff]/10 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#1f4bff]/40 bg-white/70 px-4 py-2 text-sm font-semibold text-[#1f4bff] backdrop-blur-md">
            <Sparkles size={16} />
            One website. Built to generate more customers.
          </div>

          <h1 className="max-w-2xl text-5xl font-black leading-[0.98] tracking-tight text-[#0c0d10] sm:text-6xl md:text-7xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#2c2f36] md:text-xl">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button onClick={ctaAction} className="btn btn-primary gap-2">
              {ctaText}
              <ArrowRight size={18} />
            </button>
            <Link href="/contact" className="btn gap-2 !border-[#0c0d10]/50 !bg-white/70 !text-[#0c0d10] hover:!bg-[#1f4bff14]">
              Get a Free Demo
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {proofPoints.map((point) => (
              <span key={point} className="inline-flex items-center gap-2 rounded-full border border-[#0c0d10]/15 bg-white/70 px-4 py-2 text-sm font-semibold text-[#0c0d10] backdrop-blur-md">
                <CheckCircle2 size={16} className="text-[#2fbf59]" />
                {point}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-[#1f4bff]/15 blur-3xl" aria-hidden="true" />
          <div className="absolute -right-10 bottom-12 h-40 w-40 rounded-full bg-[#1f4bff]/10 blur-3xl" aria-hidden="true" />

          <div className="relative overflow-hidden rounded-[2.2rem] border border-[#1f4bff]/20 bg-[#faf9f6] shadow-2xl shadow-[#0c0d10]/10">
            <div className="relative">
              <div className="relative flex h-72 items-center justify-center overflow-hidden bg-[#e9edfc] sm:h-80">
                {/* Turdy's ship parks here — he flies in on load, then hops out on scroll */}
                <div className="swirl-anchor" id="swirl" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#faf9f6] to-transparent" />
              </div>

              <div className="space-y-3 p-5">
                {guideSteps.map((step) => (
                  <div key={step.title} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1f4bff] text-sm font-black text-white ring-1 ring-[#1f4bff]/30">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0c0d10]">{step.title}</h3>
                      <p className="text-xs leading-relaxed text-[#2c2f36]">{step.text}</p>
                    </div>
                  </div>
                ))}

                <div className="mt-3 rounded-xl border border-[#1f4bff]/30 bg-[#1f4bff14] px-4 py-3 text-center">
                  <p className="text-sm font-semibold text-[#1f4bff]">Meet Turdy — he&apos;ll help you every step of the way</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-cue" aria-hidden="true">
        <span>Scroll to see how it works ↓</span>
      </div>
    </section>
  );
}
