import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import NavIsland from '@/components/NavIsland';

const included = [
  { title: "Trust-building design", text: "Your business looks professional, easy to understand, and ready to contact before a visitor ever calls." },
  { title: "Lead capture that answers fast", text: "Forms, chat prompts, and quote flows built around the questions your customers already ask." },
  { title: "Booking paths without friction", text: "Visitors pick a time, request a quote, or book a call — no waiting, no phone tag." },
  { title: "Instant visitor response", text: "Common questions answered on the page, plus an AI Voice agent for phone inquiries." },
  { title: "Lead follow-up support", text: "Every lead, call, and booking tracked in one place, with the next follow-up task in front of you." },
  { title: "Simple payment paths", text: "Customers approve work and pay online, keeping the buying process moving." },
  { title: "Built-in analytics dashboard", text: "Visitors, leads, bookings, and conversions — tracked on every website, no extra tool." },
  { title: "Powered by Rivryn", text: "Rivryn runs your site behind the scenes: your leads, follow-up, and bookings in one system, so nothing gets lost." },
];

const steps = [
  { n: "1", title: "Try a live demo", text: "Pick the demo closest to your business and click through it. That is the starting point — not a blank brief." },
  { n: "2", title: "Tell us about your business", text: "Your services, your branding, your goals. We scope the project around what you actually need." },
  { n: "3", title: "We build and launch", text: "Your site goes live customized with your branding, with the dashboard tracking every visitor, lead, and booking." },
];

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-[#f1efe9] text-slate-900">
      <NavIsland />
      <section className="bg-[#f1efe9] px-5 pb-20 pt-36">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-[#1f4bff]">The product</p>
          <h1 className="mt-5 text-4xl font-black text-[#0c0d10] sm:text-6xl">One website. Everything a local business needs.</h1>
          <p className="mt-6 max-w-2xl text-lg text-[#2c2f36]">We sell one product: a conversion-focused website for your local service business. No packages to decode, no tiers to compare. Everything below is included — we scope it around your business and confirm the price before any payment.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link className="btn btn-primary" href="/contact">Discuss a website</Link>
            <Link className="btn !border-[#0c0d10]/50 !bg-white/70 !text-[#0c0d10] hover:!bg-[#1f4bff14]" href="/#demos">View live demos</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20">
        <h2 className="text-3xl font-black text-[#0c0d10]">What&apos;s inside</h2>
        <p className="mt-3 text-lg text-slate-600">Eight things, all included. If it is on this list, it comes with the website.</p>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {included.map((item) => (
            <div key={item.title} className="card p-6">
              <CheckCircle2 size={22} className="mb-3 text-[#2fbf59]" />
              <h3 className="text-lg font-bold text-[#0c0d10]">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-20">
        <div className="rounded-3xl border border-[#1f4bff]/15 bg-white p-8 shadow-xl md:p-10">
          <h2 className="text-3xl font-black text-[#0c0d10]">How it works</h2>
          <div className="mt-8 space-y-6">
            {steps.map((step) => (
              <div key={step.n} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1f4bff] text-lg font-black text-white">{step.n}</span>
                <div>
                  <h3 className="text-lg font-bold text-[#0c0d10]">{step.title}</h3>
                  <p className="mt-1 text-[#2c2f36]">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link className="btn btn-primary" href="/contact">Start with a demo →</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-24">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Image src="/turdy19.webp" alt="Turdy" width={72} height={72} className="h-16 w-16 rounded-full border-2 border-[#1f4bff]/30 bg-[#1f4bff14] object-cover object-[50%_35%]" />
          <p className="text-lg text-slate-600"><span className="font-bold text-[#0c0d10]">Turdy&apos;s note:</span> Rivryn is the system underneath — it is not sold separately here. Your website runs on it, and your leads, follow-up, and bookings live in it.</p>
        </div>
      </section>
    </main>
  );
}
