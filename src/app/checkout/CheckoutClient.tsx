"use client";

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2, CreditCard, LockKeyhole, ShieldCheck } from 'lucide-react';

import NavIsland from '@/components/NavIsland';
import Section from '@/components/Section';
import Glow from '@/components/Glow';
import { checkoutItems, getCheckoutItem } from '@/content/agentSkills';

const stripeLinks: Record<string, string | undefined> = {
  'starter-skills-pack': process.env.NEXT_PUBLIC_STRIPE_STARTER_SKILLS_PACK_URL,
  'voice-ordering-pack': process.env.NEXT_PUBLIC_STRIPE_VOICE_ORDERING_PACK_URL,
  'operator-pack': process.env.NEXT_PUBLIC_STRIPE_OPERATOR_PACK_URL,
  'content-pack': process.env.NEXT_PUBLIC_STRIPE_CONTENT_PACK_URL,
  'voice-order-intake': process.env.NEXT_PUBLIC_STRIPE_VOICE_ORDER_INTAKE_URL,
  'social-media-post-assistant': process.env.NEXT_PUBLIC_STRIPE_SOCIAL_MEDIA_POST_ASSISTANT_URL,
  'employee-task-assistant': process.env.NEXT_PUBLIC_STRIPE_EMPLOYEE_TASK_ASSISTANT_URL,
  'lead-intake-router': process.env.NEXT_PUBLIC_STRIPE_LEAD_INTAKE_ROUTER_URL,
  'follow-up-cadence': process.env.NEXT_PUBLIC_STRIPE_FOLLOW_UP_CADENCE_URL,
  'secure-runtime-checks': process.env.NEXT_PUBLIC_STRIPE_SECURE_RUNTIME_CHECKS_URL,
};

export default function CheckoutClient() {
  const searchParams = useSearchParams();
  const selected = getCheckoutItem(searchParams.get('item') ?? undefined) ?? checkoutItems.find((item) => item.slug === 'voice-ordering-pack') ?? checkoutItems[0];
  const stripeUrl = selected ? stripeLinks[selected.slug] : undefined;

  return (
    <main className="relative min-h-screen bg-black">
      <NavIsland />
      <Glow color="emerald" size="xl" className="top-24 left-8" />
      <Glow color="blue" size="lg" className="bottom-20 right-8" />

      <Section className="pt-32 bg-gradient-to-b from-black to-gray-900">
        <div className="mx-auto max-w-6xl">
          <Link href="/skills" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-lime hover:text-white transition-colors">
            <ArrowLeft size={16} />
            Back to skills
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-lime">Secure skill checkout</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white">Buy the skill your assistant needs next</h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
                Pick a bundle, confirm the fit, then continue to Stripe. HHS uses the checkout step for the setup payment while the follow-up call confirms runtime access, business context, and install timing.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  'Stripe handles payment processing',
                  'HHS confirms install details after checkout',
                  'Sensitive actions stay approval-based',
                ].map((point) => (
                  <div key={point} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <CheckCircle2 size={20} className="text-primary-emerald" />
                    <p className="mt-3 text-sm leading-relaxed text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-[2rem] border border-primary-emerald/30 bg-slate-950/80 p-6 shadow-2xl shadow-primary-emerald/15 backdrop-blur-xl">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-emerald/15 text-primary-lime ring-1 ring-primary-emerald/30">
                  <CreditCard size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-primary-lime">Selected item</p>
                  <h2 className="text-2xl font-bold text-white">{selected?.name}</h2>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-primary-lime">{selected?.type}</p>
                <p className="mt-2 text-3xl font-black text-white">{selected?.price}</p>
                <p className="mt-4 text-sm leading-relaxed text-gray-300">{selected?.summary}</p>
              </div>

              {stripeUrl ? (
                <Link
                  href={stripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary-emerald/50 bg-gradient-to-r from-primary-emerald to-primary-blue px-6 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-emerald/30"
                >
                  Continue to Stripe
                  <ArrowRight size={18} />
                </Link>
              ) : (
                <Link
                  href={`/contact?interest=${selected?.slug ?? 'skills'}`}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary-emerald/50 bg-gradient-to-r from-primary-emerald to-primary-blue px-6 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-emerald/30"
                >
                  Request secure checkout link
                  <ArrowRight size={18} />
                </Link>
              )}

              <div className="mt-5 space-y-3 text-sm text-gray-300">
                <div className="flex gap-3">
                  <LockKeyhole size={17} className="mt-0.5 shrink-0 text-primary-lime" />
                  <span>No card data is stored on this website.</span>
                </div>
                <div className="flex gap-3">
                  <ShieldCheck size={17} className="mt-0.5 shrink-0 text-primary-lime" />
                  <span>Final install timing is confirmed before the skill is deployed.</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-gray-900 to-black">
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-lime">Other options</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Choose another skill or pack</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {checkoutItems.map((item) => (
            <Link
              key={item.slug}
              href={`/checkout?item=${item.slug}`}
              className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${selected?.slug === item.slug ? 'border-primary-emerald/60 bg-primary-emerald/15' : 'border-white/10 bg-white/5 hover:border-primary-emerald/35 hover:bg-white/10'}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-lime">{item.type}</p>
              <h3 className="mt-2 text-lg font-bold text-white">{item.name}</h3>
              <p className="mt-2 font-semibold text-primary-blue">{item.price}</p>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
