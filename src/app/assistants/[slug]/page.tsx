import { notFound } from 'next/navigation';
import Link from 'next/link';

import NavIsland from '@/components/NavIsland';
import Section from '@/components/Section';
import Glow from '@/components/Glow';
import { assistants, getAssistantBySlug } from '@/content/assistantOffers';

export function generateStaticParams() {
  return assistants.map((assistant) => ({ slug: assistant.slug }));
}

export default async function AssistantDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const assistant = getAssistantBySlug(slug);

  if (!assistant) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-black">
      <NavIsland />

      <Glow color="emerald" size="xl" className="top-24 left-8" />
      <Glow color="blue" size="lg" className="bottom-24 right-8" />

      <Section className="pt-32 bg-gradient-to-b from-black to-gray-900">
        <div className="mx-auto max-w-5xl">
          <Link href="/assistants" className="text-sm text-primary-lime hover:text-white transition-colors">
            ← Back to Assistants
          </Link>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white">{assistant.name}</h1>
          <p className="mt-4 text-xl text-primary-lime">{assistant.tagline}</p>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-4xl">{assistant.summary}</p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-primary-emerald/30 bg-primary-emerald/10 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-primary-lime">One-time setup</p>
              <p className="mt-2 text-3xl font-bold text-white">{assistant.setupFee}</p>
            </div>
            <div className="rounded-xl border border-primary-blue/30 bg-primary-blue/10 p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-primary-lime">Monthly upkeep</p>
              <p className="mt-2 text-3xl font-bold text-white">{assistant.monthlyUpkeep}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-gray-900 to-black">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Best fit for</h2>
            <ul className="mt-4 space-y-2 text-gray-300">
              {assistant.bestFor.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary-emerald">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Common use cases</h2>
            <ul className="mt-4 space-y-2 text-gray-300">
              {assistant.useCases.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary-blue">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-black to-gray-900">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Setup includes</h2>
            <ul className="mt-4 space-y-2 text-gray-300">
              {assistant.setupIncludes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary-lime">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Monthly upkeep includes</h2>
            <ul className="mt-4 space-y-2 text-gray-300">
              {assistant.monthlyIncludes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary-emerald">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-gray-900 to-black">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">Your deliverables</h2>
          <ul className="mt-4 space-y-2 text-gray-300">
            {assistant.deliverables.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary-blue">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <div className="mt-8 rounded-2xl border border-primary-emerald/30 bg-primary-emerald/10 p-8 text-center">
          <h2 className="text-3xl font-bold text-white">Start with {assistant.name}</h2>
          <p className="mt-3 text-gray-200 max-w-2xl mx-auto">
            We will scope your workflows, confirm the right skill pack, and deploy your personal assistant on VPS with a one-time setup plus monthly upkeep.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-primary-emerald/50 bg-gradient-to-r from-primary-emerald to-primary-blue px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-emerald/30"
          >
            Book Setup Call
          </Link>
        </div>
      </Section>
    </main>
  );
}
