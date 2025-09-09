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
                Terms & Conditions
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-invert max-w-none space-y-8"
            >
              <div className="glass rounded-xl p-8 space-y-6">
                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using our services, you accept and agree to be bound by the terms 
                    and provision of this agreement. If you do not agree to abide by the above, 
                    please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">Services</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Helping Hand Systems provides web development, design, and digital marketing services. 
                    We reserve the right to modify, suspend, or discontinue any aspect of our services 
                    at any time without notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">Payment Terms</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Payment terms are as follows:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Payment is due according to the schedule outlined in your service agreement</li>
                    <li>• Late payments may incur additional fees</li>
                    <li>• Refunds are provided according to our refund policy</li>
                    <li>• All prices are subject to change with 30 days notice</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Upon full payment, clients retain ownership of custom work created specifically for them. 
                    However, we retain the right to use general methodologies, know-how, and concepts 
                    developed during the provision of services for other projects.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">Client Responsibilities</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Clients are responsible for:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Providing accurate and complete project requirements</li>
                    <li>• Timely review and feedback on deliverables</li>
                    <li>• Providing necessary access to systems and resources</li>
                    <li>• Compliance with all applicable laws and regulations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our liability for any claim arising from our services is limited to the amount 
                    paid for the specific services in question. We are not liable for any indirect, 
                    incidental, or consequential damages.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">Termination</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Either party may terminate services with written notice. Upon termination, 
                    payment is due for all work completed up to the termination date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions regarding these terms, please contact us at:
                  </p>
                  <div className="mt-4 space-y-2">
                    <p className="text-foreground">
                      <strong>Email:</strong> <a href="mailto:info@helpinghandsystems.com" className="text-primary hover:text-primary/80">info@helpinghandsystems.com</a>
                    </p>
                    <p className="text-foreground">
                      <strong>Phone:</strong> <a href="tel:+18337851847" className="text-primary hover:text-primary/80">+1 833-785-1847</a>
                    </p>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
