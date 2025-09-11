"use client";

import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import NavIsland from '@/components/NavIsland';
import Section from '@/components/Section';
// Removed FormPlaceholder in favor of external embedded form
import Script from 'next/script';
import Glow from '@/components/Glow';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+1 833-785-1847",
      description: "Call us during business hours"
    },
    {
      icon: Mail,
      title: "Email", 
      value: "info@helpinghandsystems.com",
      description: "We respond within 24 hours"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri 9AM-6PM EST",
      description: "Available for calls and meetings"
    },
    {
      icon: MessageCircle,
      title: "Response Time",
      value: "< 24 hours",
      description: "Average email response time"
    }
  ];

  return (
    <main className="relative min-h-screen bg-black">
      <NavIsland />
      
      {/* Background Elements */}
      <Glow color="emerald" size="xl" className="top-40 left-10" />
      <Glow color="blue" size="lg" className="bottom-40 right-10" />
      <Glow color="lime" size="md" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Hero Section */}
      <Section className="pt-32 bg-gradient-to-b from-black to-gray-900">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Let&apos;s Build Something Amazing Together
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to transform your online presence? We&apos;re here to help you create a website that not only looks incredible but actually grows your business.
          </motion.p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 glass rounded-2xl hover:shadow-xl hover:shadow-primary-emerald/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-emerald to-primary-blue flex items-center justify-center mx-auto mb-4">
                <info.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
              <p className="text-primary-emerald font-semibold mb-1">{info.value}</p>
              <p className="text-gray-400 text-sm">{info.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-gradient-to-b from-gray-900 to-black">
        <div className="relative max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 text-center"
          >
            Start Your Project
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto text-center"
          >
            Tell us about your vision and we'll show you how we can bring it to life with modern design and intelligent automation.
          </motion.p>
          <div className="glass rounded-2xl p-4 md:p-6 shadow-xl shadow-primary-emerald/10">
            <div className="relative w-full" style={{ minHeight: '720px' }}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/3Cd2DxdXUg1T2K0M3Bjj"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '12px' }}
                id="inline-3Cd2DxdXUg1T2K0M3Bjj"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact Us Form"
                data-height="671"
                data-layout-iframe-id="inline-3Cd2DxdXUg1T2K0M3Bjj"
                data-form-id="3Cd2DxdXUg1T2K0M3Bjj"
                title="Contact Us Form"
              />
              <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
            </div>
          </div>
        </div>
      </Section>

      {/* Secondary CTA Section */}
      <Section className="bg-gradient-to-b from-black to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center p-12 glass rounded-2xl relative overflow-hidden"
        >
          <Glow color="blue" size="lg" className="top-0 right-0" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to see what&apos;s possible?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Check out our Standard package - it&apos;s perfect for most businesses and includes everything you need to get started.
            </p>
            <Link
              href="/packages/standard"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-emerald via-primary-emerald to-primary-blue rounded-full hover:shadow-2xl hover:shadow-primary-emerald/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden border border-primary-emerald/30 hover:border-primary-emerald/60"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-emerald/10 to-primary-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center gap-2">
                View Standard Package
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.div>
              </span>
            </Link>
          </div>
        </motion.div>
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
