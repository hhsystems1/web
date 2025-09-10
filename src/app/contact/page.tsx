"use client";

import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import Link from 'next/link';

import NavIsland from '@/components/NavIsland';
import Section from '@/components/Section';
import FormPlaceholder from '@/components/FormPlaceholder';
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
        <FormPlaceholder
          title="Start Your Project"
          description="Tell us about your vision and we'll show you how we can bring it to life with modern design and intelligent automation."
          buttonText="Send Message"
        />
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
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-emerald to-primary-blue rounded-full hover:shadow-lg hover:shadow-primary-emerald/25 transition-all duration-300 transform hover:scale-105"
            >
              View Standard Package
            </Link>
          </div>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
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
