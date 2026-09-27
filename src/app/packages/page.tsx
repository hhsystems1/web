import Link from 'next/link';
import NavIsland from '@/components/NavIsland';
import FrontOfficeForm from '@/components/FrontOfficeForm';

const included = [
  ['Website', 'A mobile-friendly site with clear services, service area, trust details, and a way to call or request work.'],
  ['Voice agent', 'One inbound agent configured with your approved answers, intake questions, hours, and a human handoff.'],
  ['CRM', 'Contacts, inquiries, call activity, pipeline stages, notes, and follow-up tasks in one place.'],
  ['Owner dashboard', 'A view of leads, calls, appointments, outcomes, and voice usage for your business.'],
];

export default function PackagesPage() {
  return <main className="min-h-screen bg-[#0d1428] text-white">
    <NavIsland />
    <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute -right-32 top-12 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
        <div className="relative">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[.18em] text-cyan-300">Helping Hands Systems · RivRyn Front Office</p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">Your website, phone inquiries, and follow-up in one working system.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">Built for local service owners who are on the job when customers call. Give people a clear way to reach you, organize the conversation, and see what needs attention.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#start" className="rounded-xl bg-cyan-400 px-6 py-4 font-bold text-slate-950 hover:bg-cyan-300">Get the founding offer</a>
            <Link href="/#demos" className="rounded-xl border border-white/30 px-6 py-4 font-semibold hover:bg-white/10">Explore website demos</Link>
          </div>
        </div>
        <div className="relative rounded-3xl border border-cyan-300/25 bg-white/10 p-7 shadow-2xl backdrop-blur-xl sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-cyan-300">First 10 client setups</p>
          <div className="mt-4 flex items-end gap-3"><strong className="text-6xl font-black">$500</strong><span className="pb-2 text-slate-300">one-time setup</span></div>
          <p className="mt-2 text-slate-300">Then $750 setup for new clients.</p>
          <div className="my-7 h-px bg-white/20" />
          <p className="text-3xl font-bold">$199<span className="text-lg font-normal text-slate-300"> / month at activation</span></p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">Voice and messaging usage is separate. We estimate it with you before activation and agree on a spend limit. Taxes, domain renewal, and third-party costs are clarified in your order.</p>
          <p className="mt-5 rounded-xl bg-cyan-300/10 p-4 text-sm text-slate-200">A founding spot is confirmed through an accepted order and setup payment. Sending this form does not reserve one.</p>
        </div>
      </div>
    </section>
    <section className="bg-slate-50 px-5 py-20 text-slate-950">
      <div className="mx-auto max-w-6xl">
        <p className="font-semibold uppercase tracking-[.16em] text-blue-700">The connected bundle</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-4xl">Four parts, one customer journey.</h2>
        <div className="mt-9 grid gap-4 sm:grid-cols-2">{included.map(([title, description], index) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><span className="text-sm font-bold text-blue-700">0{index + 1}</span><h3 className="mt-3 text-2xl font-bold">{title}</h3><p className="mt-2 text-slate-600">{description}</p></article>)}</div>
        <div className="mt-8 rounded-2xl bg-[#15244b] p-7 text-slate-100"><h3 className="text-xl font-bold">What we configure with you</h3><p className="mt-2 leading-relaxed text-slate-300">One business and location, one inbound agent and number connection, one calendar, and one lead pipeline. We collect your business facts, test calls and handoffs, and review the setup before your number goes live.</p></div>
      </div>
    </section>
    <section className="px-5 py-20"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2"><div><p className="font-semibold uppercase tracking-[.16em] text-cyan-300">How it starts</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">See the flow for your business.</h2><ol className="mt-7 space-y-5 text-slate-300"><li><strong className="text-white">1. Tell us where leads get stuck.</strong> We review your current site, calls, and scheduling.</li><li><strong className="text-white">2. Walk through the demo and order.</strong> You see the site, agent behavior, CRM, and dashboard scope before paying.</li><li><strong className="text-white">3. Configure, test, and launch.</strong> We use your approved business answers and a human fallback. Billing for the monthly service begins at activation.</li></ol><p className="mt-8 text-sm leading-relaxed text-slate-400">The $199 monthly service covers hosting, platform access, maintenance, monitoring, standard support, and up to 30 minutes of routine content or configuration changes. Larger changes and extra locations are quoted separately. A website alone does not create traffic or guarantee new customers.</p></div><div id="start" className="scroll-mt-28 rounded-3xl bg-white p-6 text-slate-950 shadow-2xl sm:p-8"><h2 className="text-2xl font-black">Show me how it would work</h2><p className="my-4 text-slate-600">Tell us about your business. We will reply with a relevant demo and the next step for the first-10 offer.</p><FrontOfficeForm /></div></div></section>
    <footer className="border-t border-white/15 px-5 py-8 text-sm text-slate-400"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4"><span>© 2026 Helping Hands Systems</span><div className="flex gap-5"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/contact">Contact</Link></div></div></footer>
  </main>;
}
