"use client";

import { motion } from 'framer-motion';
import { Check, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Image from 'next/image';

import NavIsland from '@/components/NavIsland';
import Section from '@/components/Section';
import FAQ from '@/components/FAQ';
import FormPlaceholder from '@/components/FormPlaceholder';
import Glow from '@/components/Glow';

interface PackageData {
  name: string;
  price: string;
  description: string;
  features: string[];
  videoId: string;
  popular?: boolean;
  buttonText: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export default function PackageClient({ packageData }: { packageData: PackageData }) {
  const { name, price, description, features, videoId, popular, buttonText, faqs } = packageData;

  return (
    <main className="relative min-h-screen bg-black">
      <NavIsland />
      
      {/* Background Elements */}
      <Glow color="emerald" size="xl" className="top-20 right-10" />
      <Glow color="blue" size="lg" className="bottom-20 left-10" />

      {/* Back Button */}
      <div className="fixed top-24 left-6 z-40">
        <Link
          href="/"
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero Section */}
      <Section className="pt-32 bg-gradient-to-b from-black to-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              {popular && (
                <span className="inline-flex items-center space-x-1 bg-gradient-to-r from-primary-emerald to-primary-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                  <Star size={16} />
                  <span>Most Popular</span>
                </span>
              )}
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              {name}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold text-primary-emerald mb-6"
            >
              {price}
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              {description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 mb-8"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check size={20} className="text-primary-emerald mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden glass p-2">
              <LiteYouTubeEmbed
                id={videoId}
                title={`${name} Demo Video`}
                poster="maxresdefault"
                noCookie={true}
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Starter Plan Form (moved before FAQ) */}
      {name.startsWith('Starter') && (
        <Section className="bg-gradient-to-b from-black to-gray-900">
          <div className="relative max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to get started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-300 mb-10"
            >
              Subscribe now and we’ll reach out to help you launch your Starter plan.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="https://api.leadconnectorhq.com/widget/form/gFcy5EMvzPhWpCRF8sPs"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-emerald via-primary-emerald to-primary-blue rounded-full hover:shadow-2xl hover:shadow-primary-emerald/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden border border-primary-emerald/30 hover:border-primary-emerald/60"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary-emerald/10 to-primary-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Subscribe Now
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.div>
                </span>
              </a>
            </motion.div>
          </div>
        </Section>
      )}

      {/* FAQ Section moved after form */}
      <Section className="bg-gradient-to-b from-gray-900 to-black">
        <FAQ items={faqs} />
      </Section>

      {/* CTA Form Section for other plans */}
      {!name.startsWith('Starter') && (
        <Section className="bg-gradient-to-b from-black to-gray-900">
          <FormPlaceholder
            title={`Get Started with ${name}`}
            description="Fill out the form below and we'll get in touch within 24 hours to discuss your project and answer any questions."
            buttonText={buttonText}
          />
        </Section>
      )}

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
