"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

import NavIsland from '@/components/NavIsland';
import Section from '@/components/Section';

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen bg-black">
      <NavIsland />

      <Section className="pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <h1 className="text-5xl font-bold text-white mb-8">Helping Hands Systems — Web Development Privacy Policy</h1>
            
            <div className="text-gray-400 mb-12 space-y-2">
              <p className="text-lg"><strong>Effective date:</strong> September 9, 2025</p>
              <p className="text-lg"><strong>Applies to:</strong> https://web.helpinghandsystems.com and related intake forms, landing pages, and communications (the "Site").</p>
              <p className="text-lg"><strong>Who we are:</strong> Helping Hands Systems LLC ("Helping Hands Systems", "HHS", "we", "our", "us"), a Wyoming company.</p>
            </div>

            <div className="space-y-8 text-gray-300">
              <section>
                <p>
                  This Privacy Policy explains how we collect, use, and share information when you visit the Site, contact us, or engage us for web design/development and related services (the "Services"). If you have a separate written agreement with us (e.g., a Statement of Work or Master Services Agreement), that agreement controls to the extent it conflicts with this Policy.
                </p>
                
                <div className="bg-primary-emerald/10 border border-primary-emerald/30 rounded-lg p-6 my-8">
                  <p className="text-primary-emerald font-medium">
                    <strong>Short version:</strong> We use your information to respond to inquiries, scope and deliver projects, provide support, bill for subscriptions, and improve our Services. We don't sell personal information. When we handle end‑user data from your website as part of maintenance or support, we do so as your processor, under your instructions.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">1) Contact</h2>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <p><strong>Email:</strong> info@helpinghandsystems.com</p>
                  <p><strong>Mailing address:</strong> 5830 E 2nd St Ste 7000 #18127 Casper, WY 82609</p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">2) Information we collect</h2>
                <p>We collect information directly from you, automatically via the Site, and from third parties you authorize.</p>
                
                <h3 className="text-2xl font-semibold text-white mb-3 mt-6">A. Information you provide</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact and business details:</strong> name, email, phone, company, role</li>
                  <li><strong>Project details:</strong> goals, brand assets, copy, images, design preferences, technical requirements, CMS/hosting credentials you choose to share</li>
                  <li><strong>Content and files:</strong> documents, images, videos, and other materials you upload for use on your website</li>
                  <li><strong>Communications:</strong> emails, chat, SMS, call recordings or transcripts where permitted by law and disclosed at collection</li>
                  <li><strong>Billing:</strong> plan selection, invoices, payment status (payment card details are processed by our payment processor, not stored by us)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-white mb-3 mt-6">B. Information collected automatically (when you visit the Site)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Usage and device data:</strong> IP address, general location, device identifiers, browser type, pages viewed, time on page, referring/exit URLs, and interactions with forms and emails</li>
                  <li><strong>Cookies and similar tech:</strong> used for authentication, analytics, personalization, and (if enabled) advertising measurement (see Cookies below)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-white mb-3 mt-6">C. Information from third parties</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lead sources and referrals (ads platforms, partners)</li>
                  <li>Service providers (analytics, communications, payment processors, CRM)</li>
                  <li>Your platforms you authorize (e.g., CMS, hosting, analytics) so we can support your project</li>
                </ul>

                <p className="mt-4 italic">We do not intentionally collect sensitive personal information via the Site. Please avoid uploading unnecessary sensitive data.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">3) How we use information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Provide and improve the Services:</strong> discovery, proposals, design, development, testing, launch, maintenance, analytics, security</li>
                  <li><strong>Communications:</strong> respond to inquiries, send project updates, appointment reminders, and administrative notices</li>
                  <li><strong>Subscriptions and billing:</strong> manage plans (Starter/Standard/Professional/Custom), invoices, and payments</li>
                  <li><strong>Marketing (optional):</strong> send newsletters or promos if you opt in; you can opt out anytime</li>
                  <li><strong>AI‑assisted workflows:</strong> use vetted AI tools to draft copy, generate components, summarize requirements, or troubleshoot code; we do not make solely automated decisions with legal or similarly significant effects</li>
                  <li><strong>Safety, compliance, and enforcement:</strong> prevent fraud/abuse, comply with law, and enforce agreements</li>
                </ul>
                <p className="mt-4 italic">Legal bases depend on your region and may include performance of a contract, legitimate interests, consent, and legal obligations.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">4) When we act as processor (client end‑user data)</h2>
                <p>
                  If, during maintenance or support, we access your website's end‑user data (e.g., contact form submissions, ecommerce orders, analytics logs), we act as your processor and process such data only under your instructions to provide the Services. Upon request, we can provide or sign a Data Processing Addendum (DPA). You are responsible for having a proper legal basis to collect and share such data with us, and for your own public‑facing privacy notices.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">5) Sharing information</h2>
                <p>We share personal information with:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Service providers/processors</strong> (hosting, analytics, email/SMS/voice, CRM, project management, payment processing, cloud storage, AI tooling) under contracts limiting their use</li>
                  <li><strong>Business partners/subcontractors</strong> strictly as needed to deliver your project (e.g., specialists for integrations, accessibility reviews, SEO audits)</li>
                  <li><strong>Legal/compliance recipients</strong> (to comply with law or protect rights), and business transfers (e.g., merger) with appropriate safeguards</li>
                </ul>
                <p className="mt-4">We do not sell personal information. Some jurisdictions treat targeted advertising/analytics as a "sale" or "share"; if those tools are enabled, you may opt out as described below.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">6) Cookies and similar technologies</h2>
                <p>We use cookies/pixels for:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Essential</strong> (security, session, preferences)</li>
                  <li><strong>Analytics</strong> (understanding usage to improve the Site)</li>
                  <li><strong>Advertising measurement</strong> (if enabled)</li>
                </ul>
                <p className="mt-4">You can control cookies through browser settings and, where required, a consent banner. Some features may not function without certain cookies.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">7) International transfers</h2>
                <p>We may process information in the United States and other countries. Where required, we use mechanisms like Standard Contractual Clauses to protect data transferred internationally.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">8) Security</h2>
                <p>We use reasonable technical and organizational measures appropriate to the risk. No method is 100% secure.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">9) Retention</h2>
                <p>We keep information as long as necessary for the purposes above (for leads typically up to 36 months after last interaction) unless a longer/shorter period is required by law or agreed in a contract.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">10) Your rights and choices</h2>
                <p>Depending on your location, you may request access, correction, deletion, portability, restriction, or objection to certain processing, and you may opt out of marketing. Contact info@helpinghandsystems.com. We may request verification information.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">11) Children</h2>
                <p>The Site is not directed to children under 13 (or the age set by local law). If you believe a child provided information, contact us for deletion.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">12) Changes</h2>
                <p>We may update this Policy; the updated version will include a new effective date. Material changes will be reasonably highlighted.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">13) Contact</h2>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <p><strong>Email:</strong> info@helpinghandsystems.com</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </Section>

      <footer className="bg-black border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Helping Hands Systems</h3>
              <p className="text-gray-400 mb-4">
                Modern web development with built-in automation and AI.
              </p>
              <div className="space-y-2 text-gray-400">
                <p>📞 +1 833-785-1847</p>
                <p>✉️ info@helpinghandsystems.com</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Packages</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/packages/starter" className="hover:text-white transition-colors">Starter</Link></li>
                <li><Link href="/packages/standard" className="hover:text-white transition-colors">Standard</Link></li>
                <li><Link href="/packages/professional" className="hover:text-white transition-colors">Professional</Link></li>
                <li><Link href="/packages/custom" className="hover:text-white transition-colors">Custom</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Helping Hands Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
