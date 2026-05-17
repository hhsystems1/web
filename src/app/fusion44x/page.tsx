'use client';

import { useState } from 'react';

export default function Fusion44xPage() {
  const handleCta = async (product: string) => {
    const leadId = sessionStorage.getItem('hhs_lead_id') || `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('hhs_lead_id', leadId);
    
    const refCode = `HHS_landing_${new Date().toISOString().slice(0, 10).replace(/-/g, '')}_${leadId}`;
    const targetUrl = `https://fusion44x.com/${product}?ref=${refCode}&utm_source=hhs&utm_campaign=landing`;
    
    // Log lead
    await fetch('/api/affiliate/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lead_id: leadId,
        referral_code: refCode,
        source_campaign: 'landing',
        captured_at: new Date().toISOString(),
        status: 'new',
        lead_data: { source: 'fusion44x_landing_page' }
      })
    });
    
    // Log redirect
    await fetch('/api/affiliate/redirects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lead_id: leadId,
        destination: targetUrl,
        timestamp: new Date().toISOString()
      })
    });
    
    // Redirect
    window.location.href = targetUrl;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-b from-slate-900 to-slate-800">
        <p className="text-green-400 font-semibold mb-3">100% CHEMICAL-FREE</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">The World's First Chemical-Free Pool & Spa</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
          Patented Hydro-pH-Infusion technology. Safe for your family. Easy to maintain.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400">$2,890</div>
            <div className="text-slate-400">Spa</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400">$5,890</div>
            <div className="text-slate-400">Pool</div>
          </div>
        </div>
        <p className="text-slate-400">Free installation • 5-year warranty • Financing available</p>
      </section>

      {/* Video */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">See How It Works</h2>
        <div className="aspect-video bg-black rounded-xl overflow-hidden">
          <video controls className="w-full h-full" poster="/images/fusion44x/IMG_5353.JPG">
            <source src="/fusion44x/assets/Voiceover Explainer video .MP4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4 mx-auto grid md:grid-cols-4 gap-6">
          {[
            { icon: '🧪', title: 'No Chemicals', desc: 'No chlorine or harsh chemicals. Safe for kids and pets.' },
            { icon: '⚡', title: 'Low Maintenance', desc: 'Smart monitoring does the work. More swimming, less cleaning.' },
            { icon: '💰', title: 'Save Money', desc: 'Up to 70% less than traditional pool ownership costs.' },
            { icon: '🌿', title: 'Eco-Friendly', desc: 'No harsh chemicals going into the environment.' },
          ].map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl text-center shadow-sm">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">What Our Customers Say</h2>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <video controls className="w-full max-w-lg mx-auto rounded-lg mb-4">
            <source src="/fusion44x/assets/Fusion44x testimonial 1 .MOV" type="video/quicktime" />
          </video>
          <blockquote className="text-lg italic text-slate-700 text-center">
            "We wanted a spa for years but the chemicals bothered our youngest. The Fusion44x system let us enjoy our backyard worry-free."
          </blockquote>
          <p className="text-center font-semibold mt-4 text-slate-900">— Happy Customer</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-900 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Go Chemical-Free?</h2>
        <p className="text-slate-300 mb-6">Get $500 off when you order through HHS</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => handleCta('spa')}
            className="bg-green-400 hover:bg-green-500 text-slate-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            View Spa Pricing
          </button>
          <button
            onClick={() => handleCta('pool')}
            className="bg-green-400 hover:bg-green-500 text-slate-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            View Pool Pricing
          </button>
        </div>
      </section>
    </div>
  );
}