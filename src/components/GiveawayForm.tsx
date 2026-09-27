"use client";
import { useState } from 'react';

export default function GiveawayForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('sending');
    const form = event.currentTarget;
    try {
      const response = await fetch('/__forms.html', {method:'POST', headers:{'Content-Type':'application/x-www-form-urlencoded'}, body:new URLSearchParams(new FormData(form) as unknown as URLSearchParams).toString()});
      if (!response.ok) throw new Error('Failed');
      form.reset(); setState('sent');
    } catch { setState('error'); }
  }
  if (state === 'sent') return <p role="status" className="rounded-xl bg-cyan-50 p-5 font-semibold">You are on the announcement list. We will email the entry link and rules when the drawing opens.</p>;
  return <form name="giveaway-updates" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/__forms.html" onSubmit={submit} className="grid gap-4">
    <input type="hidden" name="form-name" value="giveaway-updates" /><input type="hidden" name="source" value="giveaway-announcement" /><p className="hidden"><label>Leave blank <input name="bot-field" /></label></p>
    <label className="grid gap-1 text-sm font-medium">Name *<input required name="name" autoComplete="name" className="rounded-lg border border-slate-300 px-4 py-3" /></label>
    <label className="grid gap-1 text-sm font-medium">Email *<input required type="email" name="email" autoComplete="email" className="rounded-lg border border-slate-300 px-4 py-3" /></label>
    <label className="grid gap-1 text-sm font-medium">Business name (optional)<input name="business" autoComplete="organization" className="rounded-lg border border-slate-300 px-4 py-3" /></label>
    <label className="flex items-start gap-3 text-sm text-slate-600"><input type="checkbox" name="marketing-consent" value="yes" className="mt-1" />Also email me HHS website and front office offers. Optional and separate from drawing updates.</label>
    {state === 'error' && <p role="alert" className="text-red-700">Could not submit. Email helpinghandsystems1@gmail.com.</p>}
    <button disabled={state === 'sending'} className="rounded-xl bg-cyan-500 px-6 py-4 font-bold text-slate-950 hover:bg-cyan-300 disabled:opacity-60">{state === 'sending' ? 'Sending…' : 'Notify me when entry opens'}</button>
    <p className="text-sm text-slate-600">This is an announcement list, not an entry. <a className="underline" href="/privacy">Privacy policy</a>.</p>
  </form>;
}
