import Link from 'next/link';

import NavIsland from '@/components/NavIsland';
import Section from '@/components/Section';
import Glow from '@/components/Glow';
import { assistants, smbUseCaseResearch } from '@/content/assistantOffers';

export const metadata = {
  title: 'Business AI Assistants on VPS | Helping Hands Systems',
  description:
    'Local business AI assistants for voice orders, social media posts, employee task tracking, and daily operations support on secure VPS runtimes.',
};

export default function AssistantsPage() {
  return (
    <main className="relative min-h-screen bg-black">
      <NavIsland />

      <Glow color="emerald" size="xl" className="top-24 left-8" />
      <Glow color="blue" size="lg" className="top-[28rem] right-10" />

      <Section className="pt-32 bg-gradient-to-b from-black to-gray-900">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-lime">
            Local business assistant offer
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            VPS AI assistants that help answer, post, and keep the day moving
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            We market the result first: an assistant for orders, content, employee tasks, and daily follow-through. HHS handles the secure VPS setup, skills, and upkeep in the background.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-300">
            <span className="rounded-full border border-primary-emerald/30 bg-primary-emerald/10 px-4 py-2">
              One-time setup fee
            </span>
            <span className="rounded-full border border-primary-blue/30 bg-primary-blue/10 px-4 py-2">
              Monthly upkeep
            </span>
            <span className="rounded-full border border-primary-lime/30 bg-primary-lime/10 px-4 py-2 text-slate-900 font-semibold">
              Pre-installed skills included
            </span>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-gray-900 to-black">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {assistants.map((assistant) => (
            <article
              key={assistant.slug}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur-xl"
            >
              <h2 className="text-2xl font-bold text-white">{assistant.name}</h2>
              <p className="mt-2 text-primary-lime">{assistant.tagline}</p>
              <p className="mt-4 text-gray-300 leading-relaxed">{assistant.summary}</p>

              <div className="mt-6 space-y-3">
                <div className="rounded-xl border border-primary-emerald/30 bg-primary-emerald/10 p-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-primary-lime">One-time setup</p>
                  <p className="mt-1 text-xl font-semibold text-white">{assistant.setupFee}</p>
                </div>
                <div className="rounded-xl border border-primary-blue/30 bg-primary-blue/10 p-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-primary-lime">Monthly upkeep</p>
                  <p className="mt-1 text-xl font-semibold text-white">{assistant.monthlyUpkeep}</p>
                </div>
              </div>

              <Link
                href={`/assistants/${assistant.slug}`}
                className="mt-6 inline-flex items-center justify-center rounded-lg border border-primary-emerald/40 bg-primary-emerald/15 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-emerald/25 hover:border-primary-emerald/70"
              >
                View {assistant.name}
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-black to-gray-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Best Use Cases for Current Local Lead List</h2>
          <p className="text-gray-300 leading-relaxed max-w-4xl">{smbUseCaseResearch.sourceSummary}</p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {smbUseCaseResearch.categoryCounts.map((item) => (
              <div key={item.category} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.15em] text-primary-lime">{item.category}</p>
                <p className="mt-2 text-3xl font-bold text-white">{item.count}</p>
                <p className="text-gray-400 text-sm">Priority: {item.priority}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {smbUseCaseResearch.bestUseCasesByCategory.map((block) => (
              <div key={block.category} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-xl font-semibold text-white">{block.category}</h3>
                <ul className="mt-3 space-y-2 text-gray-300">
                  {block.useCases.map((useCase) => (
                    <li key={useCase} className="flex gap-2">
                      <span className="text-primary-emerald">•</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-gray-900 to-black">
        <div className="rounded-2xl border border-white/10 bg-white/10 p-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to launch one of these assistants?</h2>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            We will map your workflow, recommend the best fit (Hermes, OpenClaw, or Agent Zero), and deploy on VPS with your pre-installed skills.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-primary-emerald/40 bg-gradient-to-r from-primary-emerald to-primary-blue px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-emerald/30"
          >
            Book Setup Planning Call
          </Link>
        </div>
      </Section>
    </main>
  );
}
