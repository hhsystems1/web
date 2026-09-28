import Link from 'next/link';
import NavIsland from '@/components/NavIsland';

export default function PackagesPage() {
  return <main className="min-h-screen bg-[#faf8f5] text-slate-900"><NavIsland /><section className="mx-auto max-w-4xl px-5 pb-24 pt-36"><p className="text-sm font-bold uppercase tracking-widest text-blue-700">Helping Hands Systems Web</p><h1 className="mt-5 text-4xl font-black sm:text-6xl">Web services for local businesses</h1><p className="mt-6 max-w-2xl text-lg text-slate-600">We build and maintain websites with clear service information and contact paths. Tell us about your business and we will scope a project around what you need.</p><div className="mt-9 flex flex-wrap gap-3"><Link className="rounded-full bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700" href="/contact">Discuss a website</Link><Link className="rounded-full border border-slate-300 px-6 py-4 font-bold hover:bg-white" href="/#demos">View illustrative demos</Link></div><p className="mt-8 text-sm text-slate-500">The separate RivRyn Front Office product is in private testing and is not accepting orders through this site.</p></section></main>;
}
