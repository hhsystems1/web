'use client'

import { motion } from 'framer-motion'
import { Container } from '../../components/Container'
import { Section } from '../../components/Section'

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground mb-2">
                <strong>Effective date:</strong> September 9, 2025
              </p>
              <p className="text-sm text-muted-foreground">
                Applies to: <a href="https://web.helpinghandsystems.com" className="text-primary hover:text-primary/80">https://web.helpinghandsystems.com</a> and related intake forms, landing pages, and communications
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
                    <strong>Who we are:</strong> Helping Hands Systems LLC ("Helping Hands Systems", "HHS", "we", "our", "us"), a Wyoming company.
                  </p>
                  <p className="text-foreground leading-relaxed mt-4">
                    This Privacy Policy explains how we collect, use, and share information when you visit the Site, contact us, or engage us for web design/development and related services (the "Services"). If you have a separate written agreement with us (e.g., a Statement of Work or Master Services Agreement), that agreement controls to the extent it conflicts with this Policy.
                  </p>
                  <div className="mt-6 p-4 bg-accent/10 border-l-4 border-accent rounded-r-lg">
                    <p className="text-foreground font-medium">
                      <strong>Short version:</strong> We use your information to respond to inquiries, scope and deliver projects, provide support, bill for subscriptions, and improve our Services. We don't sell personal information. When we handle end‑user data from your website as part of maintenance or support, we do so as your <strong>processor</strong>, under your instructions.
                    </p>
                  </div>
                </div>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">1) Contact</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Email:</strong> <a href="mailto:info@helpinghandsystems.com" className="text-primary hover:text-primary/80">info@helpinghandsystems.com</a></li>
                    <li><strong>Mailing address:</strong> 5830 E 2nd St Ste 7000 #18127 Casper, WY 82609</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">2) Information we collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We collect information directly from you, automatically via the Site, and from third parties you authorize.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-accent mb-3">A. Information you provide</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li><strong>Contact and business details:</strong> name, email, phone, company, role</li>
                        <li><strong>Project details:</strong> goals, brand assets, copy, images, design preferences, technical requirements, CMS/hosting credentials you choose to share</li>
                        <li><strong>Content and files:</strong> documents, images, videos, and other materials you upload for use on your website</li>
                        <li><strong>Communications:</strong> emails, chat, SMS, call recordings or transcripts where permitted by law and disclosed at collection</li>
                        <li><strong>Billing:</strong> plan selection, invoices, payment status (payment card details are processed by our payment processor, not stored by us)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-accent mb-3">B. Information collected automatically (when you visit the Site)</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li><strong>Usage and device data:</strong> IP address, general location, device identifiers, browser type, pages viewed, time on page, referring/exit URLs, and interactions with forms and emails</li>
                        <li><strong>Cookies and similar tech:</strong> used for authentication, analytics, personalization, and (if enabled) advertising measurement (see <strong>Cookies</strong> below)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-accent mb-3">C. Information from third parties</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li><strong>Lead sources and referrals</strong> (ads platforms, partners)</li>
                        <li><strong>Service providers</strong> (analytics, communications, payment processors, CRM)</li>
                        <li><strong>Your platforms</strong> you authorize (e.g., CMS, hosting, analytics) so we can support your project</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mt-4 italic">
                    We do not intentionally collect sensitive personal information via the Site. Please avoid uploading unnecessary sensitive data.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">3) How we use information</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Provide and improve the Services:</strong> discovery, proposals, design, development, testing, launch, maintenance, analytics, security</li>
                    <li><strong>Communications:</strong> respond to inquiries, send project updates, appointment reminders, and administrative notices</li>
                    <li><strong>Subscriptions and billing:</strong> manage plans (Starter/Standard/Professional/Custom), invoices, and payments</li>
                    <li><strong>Marketing (optional):</strong> send newsletters or promos if you opt in; you can opt out anytime</li>
                    <li><strong>AI‑assisted workflows:</strong> use vetted AI tools to draft copy, generate components, summarize requirements, or troubleshoot code; we do not make solely automated decisions with legal or similarly significant effects</li>
                    <li><strong>Safety, compliance, and enforcement:</strong> prevent fraud/abuse, comply with law, and enforce agreements</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    Legal bases depend on your region and may include performance of a contract, legitimate interests, consent, and legal obligations.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">4) When we act as <strong>processor</strong> (client end‑user data)</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If, during maintenance or support, we access your website's end‑user data (e.g., contact form submissions, ecommerce orders, analytics logs), we act as your <strong>processor</strong> and process such data <strong>only</strong> under your instructions to provide the Services. Upon request, we can provide or sign a <strong>Data Processing Addendum (DPA)</strong>. You are responsible for having a proper legal basis to collect and share such data with us, and for your own public‑facing privacy notices.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">5) Sharing information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We share personal information with:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Service providers/processors</strong> (hosting, analytics, email/SMS/voice, CRM, project management, payment processing, cloud storage, AI tooling) under contracts limiting their use</li>
                    <li><strong>Business partners/subcontractors</strong> strictly as needed to deliver your project (e.g., specialists for integrations, accessibility reviews, SEO audits)</li>
                    <li><strong>Legal/compliance recipients</strong> (to comply with law or protect rights), and <strong>business transfers</strong> (e.g., merger) with appropriate safeguards</li>
                  </ul>
                  <p className="text-foreground font-semibold mt-4">
                    We do <strong>not</strong> sell personal information. Some jurisdictions treat targeted advertising/analytics as a "sale" or "share"; if those tools are enabled, you may opt out as described below.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">6) Cookies and similar technologies</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use cookies/pixels for:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Essential</strong> (security, session, preferences)</li>
                    <li><strong>Analytics</strong> (understanding usage to improve the Site)</li>
                    <li><strong>Advertising measurement</strong> (if enabled)</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    You can control cookies through browser settings and, where required, a consent banner. Some features may not function without certain cookies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">7) International transfers</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may process information in the United States and other countries. Where required, we use mechanisms like Standard Contractual Clauses to protect data transferred internationally.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">8) Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use reasonable technical and organizational measures appropriate to the risk. No method is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">9) Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We keep information as long as necessary for the purposes above (for leads typically up to <strong>36 months</strong> after last interaction) unless a longer/shorter period is required by law or agreed in a contract.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">10) Your rights and choices</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Depending on your location, you may request access, correction, deletion, portability, restriction, or objection to certain processing, and you may opt out of marketing. Contact <a href="mailto:info@helpinghandsystems.com" className="text-primary hover:text-primary/80"><strong>info@helpinghandsystems.com</strong></a>. We may request verification information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">11) Children</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Site is not directed to children under 13 (or the age set by local law). If you believe a child provided information, contact us for deletion.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">12) Changes</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Policy; the updated version will include a new effective date. Material changes will be reasonably highlighted.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">13) Contact</h2>
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
