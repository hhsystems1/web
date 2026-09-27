"use client";

import { useState } from 'react';

export default function FrontOfficeForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('sending');
    const form = event.currentTarget;
    try {
      const result = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form) as unknown as URLSearchParams).toString(),
      });
      if (!result.ok) throw new Error('Submission failed');
      form.reset();
      setState('sent');
    } catch {
      setState('error');
    }
  }

  if (state === 'sent') return <div role="status" className="rounded-2xl border border-cyan-300 bg-cyan-50 p-6 text-slate-900"><h3 className="text-xl font-bold">Got it.</h3><p className="mt-2">We have your business details and will reach out about the founding offer and a demo. You can also email helpinghandsystems1@gmail.com.</p></div>;

  return (
    <form name="front-office-interest" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/__forms.html" onSubmit={submit} className="grid gap-4">
      <input type="hidden" name="form-name" value="front-office-interest" />
      <input type="hidden" name="source" value="web-front-office" />
      <input type="hidden" name="campaign" value="first-ten-500" />
      <p className="hidden"><label>Leave blank <input name="bot-field" /></label></p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm font-medium">Your name *<input required name="name" autoComplete="name" className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950" /></label>
        <label className="grid gap-1 text-sm font-medium">Business name *<input required name="business" autoComplete="organization" className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950" /></label>
        <label className="grid gap-1 text-sm font-medium">Email *<input required type="email" name="email" autoComplete="email" className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950" /></label>
        <label className="grid gap-1 text-sm font-medium">Phone *<input required type="tel" name="phone" autoComplete="tel" className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950" /></label>
      </div>
      <label className="grid gap-1 text-sm font-medium">Current website (optional)<input type="url" name="website" placeholder="https://" className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950" /></label>
      <label className="grid gap-1 text-sm font-medium">Where do inquiries fall through? *<textarea required name="biggest-gap" rows={3} placeholder="Missed calls, follow-up, scheduling, or something else?" className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950" /></label>
      {state === 'error' && <p role="alert" className="text-red-700">Could not submit. Email helpinghandsystems1@gmail.com and we will take it from there.</p>}
      <button disabled={state === 'sending'} className="rounded-xl bg-cyan-500 px-6 py-4 font-bold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-60">{state === 'sending' ? 'Sending…' : 'See my demo and founding offer'}</button>
      <p className="text-sm text-slate-600">We will contact you about this request. No payment is collected here. See our <a className="underline" href="/privacy">privacy policy</a>.</p>
    </form>
  );
}
