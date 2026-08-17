import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
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
  { icon: '📞', title: 'Customer reaches out', text: 'Calls, forms, and quote requests land in one clear path.' },
  { icon: '💬', title: 'Your site responds', text: 'Answers questions and guides visitors to the next step.' },
  { icon: '📋', title: 'You get the lead', text: 'Lead details stay organized until you follow up.' },
];

export default function HeroShowcase({ title, subtitle, ctaText, ctaAction }: HeroShowcaseProps) {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-grid px-4 pt-28 pb-14 sm:px-6 md:pt-36">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(250,248,245,0.98)_0%,rgba(240,253,244,0.85)_48%,rgba(236,245,255,0.88)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#faf8f5] to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-200/60 bg-emerald-50/80 px-4 py-2 text-sm font-semibold text-emerald-700 backdrop-blur-md">
            <Sparkles size={16} />
            Websites built to generate more customers
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-tight text-gray-900 sm:text-5xl md:text-7xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button onClick={ctaAction} className="btn btn-primary gap-2">
              {ctaText}
              <ArrowRight size={18} />
            </button>
            <Link href="/contact" className="btn gap-2">
              Get a Free Demo
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {proofPoints.map((point) => (
              <span key={point} className="inline-flex items-center gap-2 rounded-full border border-gray-200/60 bg-white/60 px-4 py-2 text-sm font-semibold text-gray-700 backdrop-blur-md">
                <CheckCircle2 size={16} className="text-emerald-500" />
                {point}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute -right-10 bottom-12 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.2rem] border border-emerald-200/50 bg-white/70 shadow-2xl shadow-emerald-200/30 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(80,200,120,0.12),transparent_50%),linear-gradient(135deg,rgba(255,255,255,0.6),rgba(250,248,245,0.9))]" />

            <div className="relative">
              <div className="relative h-72 sm:h-80 overflow-hidden bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center">
                <Image
                  src="/hhs-turdy-new.png"
                  alt="Turdy — your website guide"
                  width={400}
                  height={400}
                  className="h-full w-auto object-contain drop-shadow-2xl"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/80 to-transparent" />
              </div>

              <div className="p-5 space-y-3">
                {guideSteps.map((step) => (
                  <div key={step.title} className="flex gap-3 items-start">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-base ring-1 ring-emerald-200/50">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-800">{step.title}</h3>
                      <p className="text-xs leading-relaxed text-gray-500">{step.text}</p>
                    </div>
                  </div>
                ))}

                <div className="mt-3 rounded-xl border border-emerald-200/50 bg-emerald-50/50 px-4 py-3 text-center">
                  <p className="text-sm font-semibold text-emerald-700">Meet Turdy — he&apos;ll help you every step of the way</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
