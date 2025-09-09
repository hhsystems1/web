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
                  <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account, 
                    request our services, or contact us for support. This may include your name, email address, 
                    phone number, company information, and project requirements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Provide and improve our web development services</li>
                    <li>• Communicate with you about your projects and our services</li>
                    <li>• Send you marketing communications (with your consent)</li>
                    <li>• Comply with legal obligations and protect our rights</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">Information Sharing</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. 
                    We may share your information only in specific circumstances, such as with 
                    service providers who help us operate our business, or when required by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate security measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction. However, 
                    no method of transmission over the internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Access and update your personal information</li>
                    <li>• Request deletion of your personal information</li>
                    <li>• Opt-out of marketing communications</li>
                    <li>• Request a copy of your personal information</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at:
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
