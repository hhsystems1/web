import Link from 'next/link';
import { ArrowRight, Bot, CheckCircle2, Layers, Lock, Package, ShieldCheck } from 'lucide-react';

import NavIsland from '@/components/NavIsland';
import Section from '@/components/Section';
import Glow from '@/components/Glow';
import { agentSkills, skillPacks } from '@/content/agentSkills';

export const metadata = {
  title: 'AI Agent Skills + Skill Packs | Helping Hands Systems',
  description:
    'Pre-installed and add-on skills for Hermes, OpenClaw, and Agent Zero assistants deployed on secure VPS runtimes.',
};

const principles = [
  {
    icon: ShieldCheck,
    title: 'VPS-first deployment',
    text: 'Skills are installed into customer assistant runtimes instead of relying on scattered third-party automation chains.',
  },
  {
    icon: Lock,
    title: 'Approval gates where needed',
    text: 'The agent can draft, organize, and prepare work while sensitive actions stay reviewable before execution.',
  },
  {
    icon: Layers,
    title: 'Reusable packages',
    text: 'Start with a core skill pack, then add lead handling, operator, sales, or content skills as the business grows.',
  },
];

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen bg-black">
      <NavIsland />
      <Glow color="emerald" size="xl" className="top-24 left-8" />
      <Glow color="blue" size="lg" className="top-[32rem] right-10" />

      <Section className="pt-32 bg-gradient-to-b from-black to-gray-900">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-lime">
            Agent skill marketplace
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Skills and packages for secure VPS AI agents
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Helping Hands Systems sells practical skill packs for Hermes, OpenClaw, and Agent Zero. Each skill gives the agent a repeatable job it can run with documented boundaries, clear outputs, and human approval points where needed.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-300">
            <span className="rounded-full border border-primary-emerald/30 bg-primary-emerald/10 px-4 py-2">Pre-installed core packs</span>
            <span className="rounded-full border border-primary-blue/30 bg-primary-blue/10 px-4 py-2">Add-on workflow skills</span>
            <span className="rounded-full border border-primary-lime/30 bg-primary-lime/10 px-4 py-2 text-slate-900 font-semibold">Built for VPS assistants</span>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-gray-900 to-black">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {principles.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-emerald/15 text-primary-lime ring-1 ring-primary-emerald/30">
                <item.icon size={24} />
              </div>
              <h2 className="text-xl font-bold text-white">{item.title}</h2>
              <p className="mt-3 text-gray-300 leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-black to-gray-900">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-lime">Skill packs</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Packaged skills customers can buy with an agent</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">These are positioned as installable capability bundles for secure VPS assistants, not scattered third-party workflow templates.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {skillPacks.map((pack) => (
            <article key={pack.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-blue/15 text-primary-blue ring-1 ring-primary-blue/30">
                  <Package size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{pack.name}</h3>
                  <p className="mt-1 text-primary-lime font-semibold">{pack.price}</p>
                  <p className="mt-3 text-gray-300 leading-relaxed">{pack.summary}</p>
                  <p className="mt-3 text-sm text-gray-400">Best for: {pack.bestFor}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {pack.skills.map((skill) => (
                  <span key={skill} className="inline-flex items-center gap-2 rounded-lg border border-primary-emerald/25 bg-primary-emerald/10 px-3 py-2 text-sm text-slate-200">
                    <CheckCircle2 size={15} className="text-primary-emerald" />
                    {skill}
                  </span>
                ))}
              </div>
              <a
                href={`/checkout/?item=${pack.slug}`}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary-emerald/50 bg-gradient-to-r from-primary-emerald to-primary-blue px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-emerald/25"
              >
                {pack.checkoutLabel}
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-gray-900 to-black">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-lime">Individual skills</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Installable agent capabilities</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {agentSkills.map((skill) => (
            <article key={skill.slug} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-emerald/30 bg-primary-emerald/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary-lime">
                <Bot size={14} />
                {skill.category}
              </div>
              <h3 className="text-xl font-bold text-white">{skill.name}</h3>
              <p className="mt-3 text-gray-300 leading-relaxed">{skill.summary}</p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-white">Useful for</p>
                <ul className="mt-2 space-y-1 text-sm text-gray-400">
                  {skill.bestFor.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 rounded-xl border border-primary-blue/25 bg-primary-blue/10 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-primary-lime">Skill price</p>
                <p className="mt-1 text-xl font-bold text-white">{skill.price}</p>
              </div>
              <a
                href={`/checkout/?item=${skill.slug}`}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary-emerald/45 bg-primary-emerald/15 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-primary-emerald/70 hover:bg-primary-emerald/25"
              >
                {skill.checkoutLabel}
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-black to-gray-900">
        <div className="rounded-2xl border border-primary-emerald/30 bg-primary-emerald/10 p-8 text-center">
          <h2 className="text-3xl font-bold text-white">Want a skill pack installed with your assistant?</h2>
          <p className="mt-3 text-gray-200 max-w-2xl mx-auto">
            Start with the assistant setup call. We will choose the runtime, install the right starter skills, then scope any add-on packs your business needs.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/assistants" className="inline-flex items-center justify-center rounded-full border border-primary-emerald/50 bg-gradient-to-r from-primary-emerald to-primary-blue px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-105">
              Compare Assistants
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-white/15">
              Book Skill Planning Call
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
