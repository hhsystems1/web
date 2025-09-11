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
            <h1 className="text-5xl font-bold text-white mb-8">Terms & Conditions</h1>
            
            <div className="text-gray-400 mb-12">
              <p className="text-lg">Last updated: September 10, 2025</p>
            </div>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Agreement to Terms</h2>
                <p>
                  By accessing and using the services provided by Helping Hands Systems (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), 
                  you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). If you do not agree to these 
                  Terms, please do not use our services.
                </p>
                <p className="text-yellow-400 bg-yellow-400/10 p-4 rounded-lg border border-yellow-400/20">
                  <strong>TODO:</strong> Replace this placeholder content with your actual terms and conditions. 
                  Consult with a legal professional to ensure these terms properly protect your business.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Description of Services</h2>
                <p>
                  Helping Hands Systems provides web development services including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Website design and development</li>
                  <li>Booking and calendar integrations</li>
                  <li>AI chatbot implementation</li>
                  <li>Business automation solutions</li>
                  <li>Ongoing website maintenance and support</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Acceptable Use</h2>
                <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use our services for any illegal or unauthorized purpose</li>
                  <li>Interfere with or disrupt our services or servers</li>
                  <li>Attempt to gain unauthorized access to any part of our services</li>
                  <li>Use our services to transmit harmful, offensive, or inappropriate content</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Payment Terms</h2>
                <h3 className="text-2xl font-semibold text-white mb-3">Subscription Fees</h3>
                <p>
                  Our services are provided on a subscription basis. Payment is due monthly in advance unless 
                  otherwise specified in your service agreement.
                </p>
                
                <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Setup Fees</h3>
                <p>
                  Some packages may include one-time setup fees. These fees are due upon signing the service agreement.
                </p>
                
                <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Late Payments</h3>
                <p>
                  Late payments may result in service suspension and additional fees. We reserve the right to 
                  terminate services for non-payment.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Cancellation Policy</h2>
                <p>
                  You may cancel your subscription at any time with 30 days written notice. Cancellation does not 
                  entitle you to a refund of any fees already paid. Upon cancellation, you will retain access to 
                  your website until the end of your current billing period.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Intellectual Property</h2>
                <h3 className="text-2xl font-semibold text-white mb-3">Your Content</h3>
                <p>
                  You retain ownership of all content you provide to us. By using our services, you grant us 
                  a license to use your content as necessary to provide our services.
                </p>
                
                <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Our Services</h3>
                <p>
                  We retain ownership of our proprietary technology, software, and methodologies. The website 
                  design and functionality we create becomes your property upon full payment.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Service Level Agreement</h2>
                <p>
                  We strive to maintain 99.9% uptime for all websites we host and manage. In the event of 
                  extended downtime due to our systems, we will provide service credits as outlined in your 
                  specific service agreement.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Warranty Disclaimer</h2>
                <p>
                  Our services are provided &quot;as is&quot; without warranty of any kind. While we strive to provide 
                  excellent service, we cannot guarantee that our services will be error-free or uninterrupted.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, Helping Hands Systems shall not be liable for any 
                  indirect, incidental, special, or consequential damages arising from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless Helping Hands Systems from any claims, damages, or 
                  expenses arising from your use of our services or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of Wyoming. 
                  Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the 
                  courts in Wyoming.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify you of any material 
                  changes by email or by posting a notice on our website. Your continued use of our services 
                  after such notice constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Contact Information</h2>
                <p>If you have any questions about these Terms, please contact us:</p>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 mt-4">
                  <p className="mb-2"><strong>Email:</strong> info@helpinghandsystems.com</p>
                  <p className="mb-2"><strong>Phone:</strong> +1 833-785-1847</p>
                  <p><strong>Address:</strong> 5830 E 2nd St Ste 7000 #18127 Casper, WY 82609</p>
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
