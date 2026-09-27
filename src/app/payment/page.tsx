import Link from 'next/link';
import NavIsland from '@/components/NavIsland';
import FrontOfficeForm from '@/components/FrontOfficeForm';

export default function PaymentPage() {
  return <main className="min-h-screen bg-[#0d1428] px-5 pb-20 pt-32 text-white">
    <NavIsland />
    <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-start">
      <div><p className="font-semibold uppercase tracking-widest text-cyan-300">After the demo</p><h1 className="mt-4 text-4xl font-black sm:text-5xl">Let’s fit the system to your business.</h1><p className="mt-5 text-lg text-slate-300">Tell us where you need help with calls, leads, and scheduling. We will review the setup, confirm scope and voice usage, then send an order and secure payment request.</p><Link href="/packages" className="mt-7 inline-block text-cyan-300 underline">See the $500 first-10 offer and full scope</Link></div>
      <div className="rounded-3xl bg-white p-6 text-slate-950 sm:p-8"><h2 className="text-2xl font-bold">Request your setup</h2><p className="my-4 text-slate-600">This form does not charge your card or reserve a founding spot.</p><FrontOfficeForm /></div>
    </div>
  </main>;
}
