import NavIsland from '@/components/NavIsland';
import GiveawayForm from '@/components/GiveawayForm';
import Link from 'next/link';

export default function GiveawayPage() {
  return <main className="min-h-screen bg-[#101426] px-5 pb-20 pt-32 text-white"><NavIsland /><div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-start"><div><p className="text-sm font-bold uppercase tracking-[.18em] text-cyan-300">Helping Hands Systems</p><h1 className="mt-5 text-4xl font-black sm:text-6xl">A free website drawing is coming.</h1><p className="mt-6 text-lg leading-relaxed text-slate-300">We are putting the prize scope, entry dates, and official rules together. Join this notification list and we will send the entry link when the drawing opens.</p><div className="mt-7 rounded-2xl border border-cyan-300/30 p-5 text-slate-200"><strong>No purchase necessary.</strong> This notification form is not an entry. The drawing will have a separate free entry form and official rules.</div><Link href="/packages" className="mt-8 inline-block text-cyan-300 underline">See the website + voice + CRM offer</Link></div><div className="rounded-3xl bg-white p-6 text-slate-950 sm:p-8"><h2 className="text-2xl font-black">Get the entry announcement</h2><p className="my-4 text-slate-600">We will email you once the dates and rules are published.</p><GiveawayForm /></div></div></main>;
}
