"use client";

import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import NavIsland from '@/components/NavIsland';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';

const contactInfo = [
  { icon: Phone, title: "Phone", value: "(606) 660-6147", description: "Call us during business hours" },
  { icon: Mail, title: "Email", value: "helpinghandsystems1@gmail.com", description: "We respond within 24 hours" },
  { icon: Clock, title: "Business Hours", value: "Mon-Fri 9AM-6PM EST", description: "Available for calls and meetings" },
  { icon: MessageCircle, title: "Response Time", value: "< 24 hours", description: "Average email response time" }
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#f1efe9]">
      <NavIsland />

      <Section className="bg-gradient-to-b from-[#f1efe9] to-[#faf9f6] pt-32">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-black text-gray-900 md:text-6xl">Let&apos;s Build Something Amazing Together</h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Ready to transform your online presence? We&apos;re here to help you create a website that not only looks incredible but actually grows your business.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info) => (
            <div key={info.title}>
              <div className="card p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1f4bff] text-white shadow-md shadow-[#1f4bff]/30">
                  <info.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{info.title}</h3>
                <p className="mb-1 font-semibold text-[#1f4bff]">{info.value}</p>
                <p className="text-sm text-gray-500">{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-white to-gray-50">
        <div className="relative mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 md:text-4xl">Start Your Project</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-gray-600">
            Tell us about your vision and we&apos;ll show you how we can bring it to life with modern design and conversion-focused features.
          </p>
          <div className="glass rounded-2xl p-6 shadow-xl shadow-[#1f4bff]/10 md:p-10">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="dark-section relative overflow-hidden rounded-2xl p-12 text-center">
          <div className="relative z-10">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Want to see what&apos;s possible?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
              Try one of our live demos to see exactly what your website could look like — then customize it with your branding.
            </p>
            <Link href="/#demos" className="btn btn-primary text-lg">
              View Live Demos →
            </Link>
          </div>
        </div>
      </Section>

      <footer className="dark-section border-t border-white/10 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4">
                <Image src="/hhs-metallic-logo.webp" alt="Helping Hands Systems Logo" width={150} height={80} className="h-16 w-auto" />
              </div>
              <p className="mb-4 text-white/70">One product: conversion-focused websites for local service businesses, powered by Rivryn.</p>
              <div className="space-y-2 text-white/70">
                <p>Phone: (606) 660-6147</p>
                <p>Email: helpinghandsystems1@gmail.com</p>
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Live Demos</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link href="/demos/restaurant" className="transition-colors hover:text-[#8fb0ff]">Restaurant & Cafe</Link></li>
                <li><Link href="/demos/contractor" className="transition-colors hover:text-[#8fb0ff]">Contractor & Home Services</Link></li>
                <li><Link href="/demos/medical" className="transition-colors hover:text-[#8fb0ff]">Medical & Dental Office</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link href="/contact" className="transition-colors hover:text-[#8fb0ff]">Contact</Link></li>
                <li><Link href="/privacy" className="transition-colors hover:text-[#8fb0ff]">Privacy Policy</Link></li>
                <li><Link href="/terms" className="transition-colors hover:text-[#8fb0ff]">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>&copy; 2026 Helping Hands Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
