"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import NavIsland from '@/components/NavIsland';
import Section from '@/components/Section';

export default function TermsPage() {
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
            <h1 className="text-5xl font-bold text-white mb-8">Helping Hands Systems — Web Development Terms of Service</h1>

            <div className="text-gray-400 mb-12 space-y-2">
              <p className="text-lg"><strong>Effective date:</strong> September 9, 2025</p>
              <p className="text-lg"><strong>Applies to:</strong> https://web.helpinghandsystems.com and related proposals, order forms, and Statements of Work (each, an “Order” or SOW).</p>
              <p className="text-lg">By using the Site or purchasing Services, you agree to these Terms of Service (“Terms”). If you are entering into these Terms for an organization, you represent you have authority to bind it.</p>
            </div>

            <div className="space-y-10 text-gray-300">
              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">1) Services; accounts; scope</h2>
                <p>HHS provides web design, development, and related Services. Scope is defined on the Site or in an Order/SOW.</p>
                <p>You are responsible for the accuracy of information you provide and for maintaining credentials you share with us (e.g., CMS/hosting).</p>
                <p>We may update, pause, or discontinue features to improve security and performance.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">2) Plans and pricing (overview)</h2>
                <p>We offer subscription packages that may include setup fees:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Starter</strong> – monthly fee (currently advertised at $97), up to 3 pages, contact form</li>
                  <li><strong>Standard</strong> – monthly fee (currently $197), up to 5 pages, calendar/appointment booking</li>
                  <li><strong>Professional</strong> – monthly fee (currently $297), up to 5 pages, calendar + chatbot + light automations</li>
                  <li><strong>Custom</strong> – tailored scope and pricing</li>
                </ul>
                <p>Exact inclusions, add‑ons, and fees are as listed on the Site or in your Order. Setup fees are non‑refundable once work begins. We may update prices for future terms; we’ll provide notice as required.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">3) Subscriptions, billing, and cancellations</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Authorization:</strong> By starting a plan, you authorize recurring monthly charges to your payment method until you cancel.</li>
                  <li><strong>Billing cycle:</strong> Monthly unless otherwise stated.</li>
                  <li><strong>Cancellation:</strong> You may cancel anytime, effective at the end of the current billing period. To avoid another charge, cancel at least 3 days before renewal.</li>
                  <li><strong>Refunds:</strong> Fees are non‑refundable unless required by law or expressly stated in your Order.</li>
                  <li><strong>Late or failed payments:</strong> We may suspend Services after reasonable notice until payment is received.</li>
                  <li><strong>Taxes:</strong> Fees exclude taxes; you are responsible for applicable taxes.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">4) Project workflow; deliverables; acceptance</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Client responsibilities:</strong> provide timely inputs (copy, images, brand assets, logins), feedback, and approvals; obtain needed rights/permissions for content; ensure content complies with law.</li>
                  <li><strong>Timeline dependencies:</strong> schedules depend on your responsiveness; delays in providing assets or approvals may extend timelines.</li>
                  <li><strong>Deliverables:</strong> design files (e.g., Figma exports), website code/CMS configuration, and documentation as specified in your Order.</li>
                  <li><strong>Acceptance:</strong> unless otherwise stated, deliverables are deemed accepted 7 days after delivery if no written rejection with specific issues is received. We will address material non‑conformities in a commercially reasonable timeframe.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">5) Revisions; change requests</h2>
                <p>Plans typically include a limited number of revision rounds as stated on the Site/Order (e.g., up to 2 rounds per page/section).</p>
                <p>Requests beyond included revisions, or outside the original scope, are billed as change orders at our then‑current rates or via an upgraded plan.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">6) Maintenance and support</h2>
                <p><strong>What’s covered:</strong> minor content edits, small bug fixes, plugin/CMS updates, and general upkeep consistent with your plan.</p>
                <p><strong>What’s not covered:</strong> large redesigns, new features, complex integrations, custom plugins/apps, copywriting beyond light edits, advanced SEO, advertising, or photography—unless listed in your Order.</p>
                <p><strong>Response times:</strong> commercially reasonable efforts during business hours; urgent SLAs require a separate agreement.</p>
                <p><strong>Backups/hosting:</strong> unless expressly included, hosting and backups are your responsibility; we can recommend providers or manage hosting as an add‑on.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">7) Third‑party services and licenses</h2>
                <p>Your site may depend on third‑party platforms (e.g., hosting, CMS, themes, plugins, scheduling, analytics, payment processors). You agree to their terms and fees.</p>
                <p>We may use open‑source components under their respective licenses. Where required, we will include license notices.</p>
                <p>We may recommend or resell third‑party services; those services remain subject to their own terms and warranties.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">8) Intellectual property</h2>
                <p><strong>Your content:</strong> You retain ownership of all content you provide. You grant HHS a non‑exclusive license to host, modify, and display your content as needed to deliver the Services.</p>
                <p><strong>Work product:</strong> Upon full payment, and unless otherwise stated in your Order, HHS assigns to you all right, title, and interest in the final website code and designs we create specifically for you, excluding (i) HHS pre‑existing materials, templates, internal tools, and know‑how, and (ii) third‑party/open‑source components, which are licensed to you.</p>
                <p><strong>Portfolio use:</strong> You grant HHS permission to display non‑confidential work product and your logo as part of our portfolio and marketing materials. You may opt out by emailing info@helpinghandsystems.com.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">9) Confidentiality</h2>
                <p>Each party will protect the other’s non‑public information with reasonable care and use it only for the project. This section survives termination.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">10) AI‑assisted work</h2>
                <p>We may use reputable AI tools to accelerate drafting, coding, or QA. We configure tools to avoid using your confidential project data for model training where controls exist. We will not intentionally disclose your confidential information to AI tools except as necessary to deliver the Services and consistent with confidentiality obligations.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">11) Compliance; accessibility; SEO</h2>
                <p>You are responsible for your site’s legal notices and compliance (e.g., privacy policy, cookie banner, terms, ecommerce policies). We can provide templates on request.</p>
                <p><strong>Accessibility:</strong> unless explicitly included, we do not guarantee compliance with specific accessibility standards (e.g., WCAG). Accessibility audits/remediation can be scoped separately.</p>
                <p><strong>SEO/ads:</strong> we do not guarantee rankings, traffic, leads, or advertising outcomes.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">12) Warranties; disclaimers</h2>
                <p>The Services are provided “as is” and “as available.” To the maximum extent permitted by law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non‑infringement. Any information from calculators, prototypes, or AI tools is for general guidance.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">13) Limitation of liability</h2>
                <p>To the maximum extent permitted by law: (a) neither party is liable for indirect, incidental, special, consequential, or punitive damages; and (b) HHS’s total liability for claims arising out of or relating to the Services will not exceed the fees you paid to HHS in the three (3) months preceding the event giving rise to the claim.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">14) Indemnification</h2>
                <p>You will indemnify and hold HHS harmless from claims arising out of your content, your instructions, or your violation of law or third‑party rights. HHS will indemnify you against third‑party claims alleging that HHS’s work product, as delivered and when used as authorized, infringes IP rights, except to the extent the claim arises from your content, changes, or combinations not provided by HHS.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">15) Termination; effect</h2>
                <p>Either party may terminate for material breach after 10 days’ written notice to cure. You may terminate for convenience at any time (subscription cancellation rules still apply). Upon termination, accrued fees are due, access may be disabled, and we will reasonably cooperate on hand‑off upon request (additional fees may apply). Sections that should survive will survive.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">16) Governing law; venue; disputes</h2>
                <p><strong>Governing law:</strong> Wyoming, USA (without regard to conflict of laws).</p>
                <p><strong>Venue:</strong> state or federal courts in Wyoming, unless otherwise required by law.</p>
                <p><strong>Optional arbitration:</strong> disputes not resolved informally will be settled by binding arbitration (AAA Commercial Rules). Jury trial waiver applies. (Only applies if mutually agreed or inserted in an Order.)</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">17) Notices; assignment; entire agreement</h2>
                <p>We may provide notices by email or posting on the Site. You may not assign these Terms without our consent; we may assign as permitted by law. These Terms, together with your Order/SOW, constitute the entire agreement.</p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">18) Contact</h2>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 mt-4">
                  <p><strong>Email:</strong> info@helpinghandsystems.com</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <Image
                  src="/mettalic letters logo.png"
                  alt="Helping Hands Systems Logo"
                  width={150}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
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
