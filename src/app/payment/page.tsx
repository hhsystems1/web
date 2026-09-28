import Link from 'next/link';
import NavIsland from '@/components/NavIsland';

export default function PaymentPage() {
  return <main className="min-h-screen bg-[#faf8f5] text-slate-900"><NavIsland /><section className="mx-auto max-w-3xl px-5 pb-24 pt-36"><h1 className="text-4xl font-black">Talk through your website project</h1><p className="mt-5 text-lg text-slate-600">The sample sites are illustrative. There is no checkout on this page. Tell us what you want to build and we will confirm the scope and price before sending a payment request.</p><Link href="/contact" className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700">Contact Helping Hands Systems</Link></section></main>;
}
