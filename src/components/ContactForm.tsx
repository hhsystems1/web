"use client";

import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (url.searchParams.get('success') === '1') {
        setSuccess(true);
      }
    }
  }, []);

  return (
    <div className="space-y-6">
      {success && (
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-blue-700 text-sm">
          <p className="font-semibold mb-1">Message sent successfully!</p>
          <p>Thank you for reaching out. We typically reply within 24 hours.</p>
        </div>
      )}

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/contact?success=1"
        className="space-y-6"
        onSubmit={() => setSubmitting(true)}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>{"Don't fill this out if you're human:"} <input name="bot-field" /></label>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Name *</label>
            <input id="name" name="name" required placeholder="Your name"
              className="w-full rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-4 py-3 text-gray-900 placeholder-gray-400 transition"
              type="text" autoComplete="name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email *</label>
            <input id="email" name="email" required placeholder="you@example.com"
              className="w-full rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-4 py-3 text-gray-900 placeholder-gray-400 transition"
              type="email" autoComplete="email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone *</label>
            <input id="phone" name="phone" required placeholder="Your phone number"
              className="w-full rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-4 py-3 text-gray-900 placeholder-gray-400 transition"
              type="tel" autoComplete="tel" inputMode="tel" />
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium text-gray-700">Company</label>
            <input id="company" name="company" placeholder="Optional"
              className="w-full rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-4 py-3 text-gray-900 placeholder-gray-400 transition"
              type="text" autoComplete="organization" />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">Project Details *</label>
          <textarea id="message" name="message" required placeholder="Tell us about your goals, timeline, and anything else important."
            className="min-h-[180px] w-full rounded-lg bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-4 py-3 text-gray-900 placeholder-gray-400 transition resize-y" />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <button type="submit" disabled={submitting}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-500 via-blue-500 to-blue-400 rounded-full hover:shadow-2xl hover:shadow-blue-300/30 transition-all duration-300 border border-blue-400/30 hover:border-blue-400/60 disabled:opacity-60 disabled:cursor-not-allowed">
            {submitting ? 'Sending...' : 'Send Message →'}
          </button>
          <p className="text-xs text-gray-500 max-w-sm">
            By submitting this form you agree to our privacy policy and allow us to contact you about your inquiry.
          </p>
        </div>
      </form>
    </div>
  );
}
