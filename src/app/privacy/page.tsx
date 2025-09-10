"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
            <h1 className="text-5xl font-bold text-white mb-8">Privacy Policy</h1>
            
            <div className="text-gray-400 mb-12">
              <p className="text-lg">Last updated: September 10, 2025</p>
            </div>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Introduction</h2>
                <p>
                  At Helping Hands Systems (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                  visit our website or use our services.
                </p>
                <p className="text-yellow-400 bg-yellow-400/10 p-4 rounded-lg border border-yellow-400/20">
                  <strong>TODO:</strong> Replace this placeholder content with your actual privacy policy. 
                  Consult with a legal professional to ensure compliance with applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Information We Collect</h2>
                <h3 className="text-2xl font-semibold text-white mb-3">Personal Information</h3>
                <p>We may collect the following personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information</li>
                  <li>Email address and phone number</li>
                  <li>Business information and requirements</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Automatically Collected Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent</li>
                  <li>Device information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Communicate with you about your projects</li>
                  <li>Send you updates and marketing communications</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without 
                  your consent, except as described in this policy or as required by law.
                </p>
                <h3 className="text-2xl font-semibold text-white mb-3 mt-6">Service Providers</h3>
                <p>
                  We may share your information with trusted third-party service providers who assist us in 
                  operating our website and conducting business, provided they agree to keep this information confidential.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. However, 
                  no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Cookies and Tracking</h2>
                <p>
                  Our website may use cookies and similar tracking technologies to enhance user experience 
                  and analyze site usage. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Your Rights</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your personal information</li>
                  <li>Object to processing of your information</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Children&apos;s Privacy</h2>
                <p>
                  Our services are not directed to children under 13. We do not knowingly collect personal 
                  information from children under 13.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by 
                  posting the new policy on this page and updating the &quot;Last updated&quot; date.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 mt-4">
                  <p className="mb-2"><strong>Email:</strong> info@helpinghandsystems.com</p>
                  <p className="mb-2"><strong>Phone:</strong> +1 833-785-1847</p>
                  <p><strong>Address:</strong> [TODO: Add business address]</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
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
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/#services" className="hover:text-white transition-colors">Web Design</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">Booking Systems</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">Chatbots</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">Automation</Link></li>
              </ul>
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
