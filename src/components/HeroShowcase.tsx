"use client";

import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  MousePointerClick,
  Sparkles,
} from 'lucide-react';

interface HeroShowcaseProps {
  title: string;
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
  { icon: '📞', title: 'Customer reaches out', text: 'Calls, forms, messages, and quote requests land in one clear intake path.' },
  { icon: '💬', title: 'Your site responds', text: 'The website answers questions, collects details, and guides visitors toward the next step.' },
  { icon: '📋', title: 'You get the lead', text: 'Lead details, bookings, and follow-up reminders stay organized until finished.' },
];

export default function HeroShowcase({ title, subtitle, ctaText, ctaAction }: HeroShowcaseProps) {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-grid px-4 pt-28 pb-14 sm:px-6 md:pt-36">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(250,248,245,0.98)_0%,rgba(240,253,244,0.85)_48%,rgba(236,245,255,0.88)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#faf8f5] to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="fade-in-up mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-200/60 bg-emerald-50/80 px-4 py-2 text-sm font-semibold text-emerald-700 backdrop-blur-md">
            <Sparkles size={16} />
            Websites built to generate more customers
          </div>

          <h1 className="fade-in-up max-w-4xl text-4xl font-black leading-[0.98] tracking-tight text-gray-900 sm:text-5xl md:text-7xl" style={{ animationDelay: '0.05s' }}>
            {title}
          </h1>

          <p className="fade-in-up mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl" style={{ animationDelay: '0.18s' }}>
            {subtitle}
          </p>

          <div className="fade-in-up mt-8 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: '0.3s' }}>
            <button onClick={ctaAction} className="btn btn-primary gap-2">
              {ctaText}
              <ArrowRight size={18} />
            </button>
            <Link href="/contact" className="btn gap-2">
              Get a Free Demo
            </Link>
          </div>

          <div className="fade-in-up mt-9 flex flex-wrap gap-3" style={{ animationDelay: '0.42s' }}>
            {proofPoints.map((point) => (
              <span key={point} className="inline-flex items-center gap-2 rounded-full border border-gray-200/60 bg-white/60 px-4 py-2 text-sm font-semibold text-gray-700 backdrop-blur-md">
                <CheckCircle2 size={16} className="text-emerald-500" />
                {point}
              </span>
            ))}
          </div>
        </div>

        <div className="fade-in-up" style={{ animationDelay: '0.25s' }}>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-emerald-200/40 blur-3xl" />
            <div className="absolute -right-10 bottom-12 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.2rem] border border-emerald-200/50 bg-white/70 p-5 shadow-2xl shadow-emerald-200/30 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(80,200,120,0.12),transparent_50%),linear-gradient(135deg,rgba(255,255,255,0.6),rgba(250,248,245,0.9))]" />
              <div className="relative">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                    <Sparkles size={15} />
                    Live demo preview
                  </div>
                  <div className="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-600">
                    Site → Demo → Dashboard
                  </div>
                </div>

                <div className="space-y-3">
                  {guideSteps.map((step, index) => (
                    <div key={step.title} className="fade-in-up rounded-2xl border border-gray-200/60 bg-white/60 p-4" style={{ animationDelay: `${0.5 + index * 0.12}s` }}>
                      <div className="flex gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-lg ring-1 ring-emerald-200/50">
                          {step.icon}
                        </div>
                        <div>
                          <h2 className="text-base font-bold text-gray-800">{step.title}</h2>
                          <p className="mt-1 text-sm leading-relaxed text-gray-500">{step.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-gray-200/60 bg-white/80 p-3 backdrop-blur-md shadow-sm">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                    <MousePointerClick size={16} className="text-emerald-600" />
                    Follow the guide down the page
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">From live demo to your custom website with dashboard.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
