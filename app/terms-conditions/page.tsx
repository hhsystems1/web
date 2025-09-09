'use client'

import { motion } from 'framer-motion'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'

export default function TermsConditionsPage() {
  return (
    <div>
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-lg text-muted-foreground mb-2">
                <strong>Effective date:</strong> September 9, 2025
              </p>
              <p className="text-sm text-muted-foreground">
                Applies to: <a href="https://web.helpinghandsystems.com" className="text-primary hover:text-primary/80">https://web.helpinghandsystems.com</a> and related proposals, order forms, and Statements of Work
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-invert max-w-none space-y-8"
            >
              <div className="glass rounded-xl p-8 space-y-8">
                <div className="mb-8 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <p className="text-foreground leading-relaxed">
                    By using the Site or purchasing Services, you agree to these Terms of Service ("Terms"). If you are entering into these Terms for an organization, you represent you have authority to bind it.
                  </p>
                </div>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">1) Services; accounts; scope</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• HHS provides web design, development, and related Services. Scope is defined on the Site or in an Order/SOW.</li>
                    <li>• You are responsible for the accuracy of information you provide and for maintaining credentials you share with us (e.g., CMS/hosting).</li>
                    <li>• We may update, pause, or discontinue features to improve security and performance.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">2) Plans and pricing (overview)</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We offer subscription packages that may include setup fees:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-accent mb-2">Starter</h3>
                      <p className="text-sm text-muted-foreground">Monthly fee (currently <strong>$97</strong>), up to <strong>3 pages</strong>, contact form</p>
                    </div>
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-accent mb-2">Standard</h3>
                      <p className="text-sm text-muted-foreground">Monthly fee (currently <strong>$197</strong>), up to <strong>5 pages</strong>, calendar/appointment booking</p>
                    </div>
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-accent mb-2">Professional</h3>
                      <p className="text-sm text-muted-foreground">Monthly fee (currently <strong>$297</strong>), up to <strong>5 pages</strong>, calendar + chatbot + light automations</p>
                    </div>
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-accent mb-2">Custom</h3>
                      <p className="text-sm text-muted-foreground">Tailored scope and pricing</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Exact inclusions, add‑ons, and fees are as listed on the Site or in your Order. Setup fees are <strong>non‑refundable once work begins</strong>. We may update prices for future terms; we'll provide notice as required.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">3) Subscriptions, billing, and cancellations</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• By starting a plan, you authorize recurring monthly charges to your payment method until you cancel.</li>
                    <li><strong>Billing cycle:</strong> monthly unless otherwise stated.</li>
                    <li><strong>Cancellation:</strong> You may cancel anytime, effective at the <strong>end of the current billing period</strong>. To avoid another charge, cancel at least <strong>3 days</strong> before renewal.</li>
                    <li><strong>Refunds:</strong> Fees are <strong>non‑refundable</strong> unless required by law or expressly stated in your Order.</li>
                    <li><strong>Late or failed payments:</strong> We may suspend Services after reasonable notice until payment is received.</li>
                    <li><strong>Taxes:</strong> Fees exclude taxes; you are responsible for applicable taxes.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">4) Project workflow; deliverables; acceptance</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Client responsibilities:</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Provide timely inputs (copy, images, brand assets, logins), feedback, and approvals; obtain needed rights/permissions for content; ensure content complies with law.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Timeline dependencies:</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Schedules depend on your responsiveness; delays in providing assets or approvals may extend timelines.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Deliverables:</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Design files (e.g., Figma exports), website code/CMS configuration, and documentation as specified in your Order.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Acceptance:</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Unless otherwise stated, deliverables are deemed accepted <strong>7 days</strong> after delivery if no written rejection with specific issues is received. We will address material non‑conformities in a commercially reasonable timeframe.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">5) Revisions; change requests</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Plans typically include a limited number of revision rounds as stated on the Site/Order (e.g., up to <strong>2</strong> rounds per page/section).</li>
                    <li>• Requests beyond included revisions, or outside the original scope, are billed as <strong>change orders</strong> at our then‑current rates or via an upgraded plan.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">6) Maintenance and support</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">What's covered:</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Minor content edits, small bug fixes, plugin/CMS updates, and general upkeep consistent with your plan.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">What's not covered:</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Large redesigns, new features, complex integrations, custom plugins/apps, copywriting beyond light edits, advanced SEO, advertising, or photography—unless listed in your Order.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Response times:</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We use commercially reasonable efforts during business hours; urgent SLAs require a separate agreement.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Backups/hosting:</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Unless expressly included, hosting and backups are your responsibility; we can recommend providers or manage hosting as an add‑on.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">7) Third‑party services and licenses</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Your site may depend on third‑party platforms (e.g., hosting, CMS, themes, plugins, scheduling, analytics, payment processors). You agree to their terms and fees.</li>
                    <li>• We may use <strong>open‑source</strong> components under their respective licenses. Where required, we will include license notices.</li>
                    <li>• We may recommend or resell third‑party services; those services remain subject to their own terms and warranties.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">8) Intellectual property</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Your content:</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        You retain ownership of all content you provide. You grant HHS a non‑exclusive license to host, modify, and display your content as needed to deliver the Services.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Work product:</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Upon full payment, and unless otherwise stated in your Order, HHS assigns to you all right, title, and interest in the <strong>final website code and designs</strong> we create specifically for you, excluding (i) HHS pre‑existing materials, templates, internal tools, and know‑how, and (ii) third‑party/open‑source components, which are licensed to you.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">Portfolio use:</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        You grant HHS permission to display non‑confidential work product and your logo as part of our portfolio and marketing materials. You may opt out by emailing <a href="mailto:info@helpinghandsystems.com" className="text-primary hover:text-primary/80">info@helpinghandsystems.com</a>.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">9) Confidentiality</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Each party will protect the other's non‑public information with reasonable care and use it only for the project. This section survives termination.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">10) AI‑assisted work</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may use reputable AI tools to accelerate drafting, coding, or QA. We configure tools to avoid using your confidential project data for model training where controls exist. We will not intentionally disclose your confidential information to AI tools except as necessary to deliver the Services and consistent with confidentiality obligations.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">11) Compliance; accessibility; SEO</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• You are responsible for your site's legal notices and compliance (e.g., privacy policy, cookie banner, terms, ecommerce policies). We can provide templates on request.</li>
                    <li><strong>Accessibility:</strong> unless explicitly included, we do not guarantee compliance with specific accessibility standards (e.g., WCAG). Accessibility audits/remediation can be scoped separately.</li>
                    <li><strong>SEO/ads:</strong> we do not guarantee rankings, traffic, leads, or advertising outcomes.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">12) Warranties; disclaimers</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Services are provided <strong>"as is"</strong> and <strong>"as available."</strong> To the maximum extent permitted by law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non‑infringement. Any information from calculators, prototypes, or AI tools is for general guidance.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">13) Limitation of liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To the maximum extent permitted by law: (a) neither party is liable for indirect, incidental, special, consequential, or punitive damages; and (b) HHS's total liability for claims arising out of or relating to the Services will not exceed the fees you paid to HHS in the <strong>three (3) months</strong> preceding the event giving rise to the claim.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">14) Indemnification</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You will indemnify and hold HHS harmless from claims arising out of your content, your instructions, or your violation of law or third‑party rights. HHS will indemnify you against third‑party claims alleging that HHS's work product, as delivered and when used as authorized, infringes IP rights, except to the extent the claim arises from your content, changes, or combinations not provided by HHS.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">15) Termination; effect</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Either party may terminate for material breach after <strong>10 days'</strong> written notice to cure. You may terminate for convenience at any time (subscription cancellation rules still apply). Upon termination, accrued fees are due, access may be disabled, and we will reasonably cooperate on hand‑off upon request (additional fees may apply). Sections that should survive will survive.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">16) Governing law; venue; disputes</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Governing law:</strong> Wyoming, USA (without regard to conflict of laws).</li>
                    <li><strong>Venue:</strong> state or federal courts in Wyoming, unless otherwise required by law.</li>
                    <li><strong>Optional arbitration:</strong> disputes not resolved informally will be settled by binding arbitration (AAA Commercial Rules). Jury trial waiver applies.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">17) Notices; assignment; entire agreement</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may provide notices by email or posting on the Site. You may not assign these Terms without our consent; we may assign as permitted by law. These Terms, together with your Order/SOW, constitute the entire agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">18) Contact</h2>
                  <p className="text-foreground">
                    <a href="mailto:info@helpinghandsystems.com" className="text-primary hover:text-primary/80 font-semibold">info@helpinghandsystems.com</a>
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
