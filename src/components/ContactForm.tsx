"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Netlify Forms enabled contact form.
// Submissions will appear in Netlify dashboard under the form name "contact".
// Ensure email notifications are enabled for this form in Netlify UI (Settings > Forms > Notifications).
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
        <motion.div
          initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-green-500/30 bg-gradient-to-r from-green-600/20 to-emerald-600/10 p-4 text-green-300 text-sm"
        >
          <p className="font-semibold mb-1">Message sent successfully!</p>
          <p>Thank you for reaching out. We typically reply within 24 hours.</p>
        </motion.div>
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
        {/* Required hidden inputs for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-200">Name *</label>
            <input
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-lg bg-black/40 border border-gray-700 focus:border-primary-emerald focus:ring-2 focus:ring-primary-emerald/40 px-4 py-3 text-white placeholder-gray-500 transition"
              type="text"
              autoComplete="name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-200">Email *</label>
            <input
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg bg-black/40 border border-gray-700 focus:border-primary-emerald focus:ring-2 focus:ring-primary-emerald/40 px-4 py-3 text-white placeholder-gray-500 transition"
              type="email"
              autoComplete="email"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-gray-200">Phone</label>
            <input
              id="phone"
              name="phone"
              placeholder="Optional"
              className="w-full rounded-lg bg-black/40 border border-gray-700 focus:border-primary-emerald focus:ring-2 focus:ring-primary-emerald/40 px-4 py-3 text-white placeholder-gray-500 transition"
              type="tel"
              autoComplete="tel"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium text-gray-200">Company</label>
            <input
              id="company"
              name="company"
              placeholder="Optional"
              className="w-full rounded-lg bg-black/40 border border-gray-700 focus:border-primary-emerald focus:ring-2 focus:ring-primary-emerald/40 px-4 py-3 text-white placeholder-gray-500 transition"
              type="text"
              autoComplete="organization"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-200">Project Details *</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Tell us about your goals, timeline, and anything else important."
            className="min-h-[180px] w-full rounded-lg bg-black/40 border border-gray-700 focus:border-primary-emerald focus:ring-2 focus:ring-primary-emerald/40 px-4 py-3 text-white placeholder-gray-500 transition resize-y"
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-emerald via-primary-emerald to-primary-blue rounded-full hover:shadow-2xl hover:shadow-primary-emerald/30 transition-all duration-500 relative overflow-hidden border border-primary-emerald/30 hover:border-primary-emerald/60 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary-emerald/10 to-primary-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              {submitting ? 'Sending...' : 'Send Message'}
              {!submitting && (
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
              )}
            </span>
          </button>
          <p className="text-xs text-gray-500 max-w-sm">
            By submitting this form you agree to our privacy policy and allow us to contact you about your inquiry.
          </p>
        </div>
      </form>
    </div>
  );
}
