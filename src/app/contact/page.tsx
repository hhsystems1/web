"use client";

import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import NavIsland from '@/components/NavIsland';
import Section from '@/components/Section';
import Glow from '@/components/Glow';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "(606) 660-6147",
      description: "Call us during business hours"
    },
    {
      icon: Mail,
      title: "Email",
      value: "helpinghandsystems1@gmail.com",
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
    <main className="relative min-h-screen bg-[#faf8f5]">
      <NavIsland />

      <Glow color="emerald" size="xl" className="top-40 left-10" />
      <Glow color="blue" size="lg" className="bottom-40 right-10" />

      <Section className="pt-32 bg-gradient-to-b from-[#faf8f5] to-white">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Let&apos;s Build Something Amazing Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to transform your online presence? We&apos;re here to help you create a website that not only looks incredible but actually grows your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.035, transition: { duration: 0.08 } }}
              className="text-center p-6 glass rounded-2xl hover:shadow-xl hover:shadow-emerald-200/40 transition-[box-shadow] duration-200 will-change-transform"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-blue-400 flex items-center justify-center mx-auto mb-4 shadow-md shadow-emerald-200/50">
                <info.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-emerald-600 font-semibold mb-1">{info.value}</p>
              <p className="text-gray-500 text-sm">{info.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-white to-gray-50">
        <div className="relative max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center"
          >
            Start Your Project
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto text-center"
          >
            Tell us about your vision and we&apos;ll show you how we can bring it to life with modern design and conversion-focused features.
          </motion.p>
          <div className="glass rounded-2xl p-6 md:p-10 shadow-xl shadow-emerald-100/20">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center p-12 glass rounded-2xl relative overflow-hidden"
        >
          <Glow color="blue" size="lg" className="top-0 right-0" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Want to see what&apos;s possible?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Try one of our live demos to see exactly what your website could look like — then customize it with your branding.
            </p>
            <Link
              href="/#demos"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 via-emerald-500 to-blue-400 rounded-full hover:shadow-2xl hover:shadow-emerald-300/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden border border-emerald-400/30 hover:border-emerald-400/60"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center gap-2">
                View Live Demos
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

      <footer className="bg-white border-t border-gray-200 py-12 px-6">
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
              <p className="text-gray-500 mb-4">
                Conversion-focused websites for local service businesses with live demos and analytics dashboards.
              </p>
              <div className="space-y-2 text-gray-500">
                <p>📞 (606) 660-6147</p>
                <p>✉️ helpinghandsystems1@gmail.com</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Live Demos</h4>
              <ul className="space-y-2 text-gray-500">
                <li><Link href="/demos/restaurant" className="hover:text-gray-900 transition-colors">Restaurant & Cafe</Link></li>
                <li><Link href="/demos/contractor" className="hover:text-gray-900 transition-colors">Contractor & Home Services</Link></li>
                <li><Link href="/demos/medical" className="hover:text-gray-900 transition-colors">Medical & Dental Office</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-500">
                <li><Link href="/contact" className="hover:text-gray-900 transition-colors">Contact</Link></li>
                <li><Link href="/dashboard" className="hover:text-gray-900 transition-colors">Dashboard</Link></li>
                <li><Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-gray-900 transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
            <p>&copy; 2026 Helping Hands Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
