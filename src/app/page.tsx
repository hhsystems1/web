"use client";

import { useEffect } from 'react';
import {
  Monitor,
  Calendar,
  MessageSquare,
  Zap,
  CreditCard,
  Rocket,
  Gauge,
  Shield,
  DollarSign,
  Headphones,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import NavIsland from '@/components/NavIsland';
import HeroShowcase from '@/components/HeroShowcase';
import TurdyJourney from '@/components/TurdyJourney';
import Section from '@/components/Section';
import DemoCard from '@/components/DemoCard';
import FAQ from '@/components/FAQ';

/* What's inside the one product — the old six services, reframed as included. */
const included = [
  {
    icon: Monitor,
    title: "Trust-Building Website Design",
    description: "Makes your business look professional, easy to understand, and ready to contact before a visitor ever calls."
  },
  {
    icon: Calendar,
    title: "Booking Paths That Remove Friction",
    description: "Gives visitors a clear next step so they can request a quote, book a call, or schedule service without waiting."
  },
  {
    icon: MessageSquare,
    title: "Instant Visitor Response",
    description: "Answers common questions, qualifies interested visitors, and handles phone inquiries via AI Voice agent to turn conversations into real opportunities."
  },
  {
    icon: Zap,
    title: "Lead Follow-Up Support",
    description: "A CRM to track leads, calls, bookings, and the next follow-up task."
  },
  {
    icon: CreditCard,
    title: "Simple Payment Paths",
    description: "Makes it easier for customers to approve work, pay online, and keep the buying process moving."
  },
  {
    icon: Gauge,
    title: "Built-In Analytics Dashboard",
    description: "Track visitors, leads, bookings, and conversions in a clean dashboard included with every website."
  }
];

const problemPoints = [
  "No clear reason to call or book",
  "No fast response when visitors are ready",
  "No follow-up system after a form is submitted",
  "No simple path from interest to appointment"
];

const solutionPoints = [
  "A clear local-service offer that builds trust fast",
  "Lead capture and booking flows built into the page",
  "Follow-up support options when needed",
  "A simple system that helps turn visitors into customers"
];

const funnelSteps = [
  {
    title: "Someone visits your site",
    description: "They land on a page that quickly explains who you help, what you do, and why they should trust you."
  },
  {
    title: "They explore a live demo",
    description: "Interactive website demos show exactly what your business could look like — no guesswork."
  },
  {
    title: "They choose and customize",
    description: "Pick your demo, select colors, upload your logo, and tell us about your business."
  },
  {
    title: "We build and launch",
    description: "Your custom website goes live with a dashboard to track every visitor, lead, and booking."
  }
];

const demos = [
  { industry: "restaurant" as const, title: "Restaurant & Cafe", description: "See how a restaurant website can showcase your menu, take reservations, and build a loyal customer base.", features: ["Online menu & ordering", "Reservation booking", "Customer reviews", "Photo gallery"], href: "/demos/restaurant" },
  { industry: "contractor" as const, title: "Contractor & Home Services", description: "Discover how a contractor site can generate quote requests, showcase projects, and grow your service area.", features: ["Quote request forms", "Project gallery", "Service area map", "Before & after showcase"], href: "/demos/contractor" },
  { industry: "medical" as const, title: "Medical & Dental Office", description: "Explore how a medical practice website can streamline appointments, build patient trust, and reduce no-shows.", features: ["Appointment booking", "Provider profiles", "Insurance info", "Patient FAQ"], href: "/demos/medical" }
];

const features = [
  { title: "Lead capture that answers fast", description: "Forms, chat prompts, and follow-up paths built around the questions your customers already ask.", points: ["Website inquiry forms", "Quote request flows", "Owner-ready lead handoffs"] },
  { title: "Booking flows that remove friction", description: "Calendar and appointment paths that make it easier for visitors to pick a time and move forward.", points: ["Calendar embeds", "Service routing", "Reminder-ready structure"] },
  { title: "CRM & Voice AI Integration", description: "Track page views, voice calls, and form submissions — all in one clean dashboard for total lead visibility.", points: ["AI Voice Agent", "CRM Lead Pipeline", "Conversion Analytics"] },
];

const whyChooseUs = [
  { icon: Rocket, title: "Modern Builds", stat: "Latest Tech", description: "Built with cutting-edge technologies for maximum performance and future-proofing." },
  { icon: Gauge, title: "Speed & Performance", stat: "Mobile-first", description: "Pages designed to load clearly and work on the devices your customers use." },
  { icon: Shield, title: "SEO-Ready", stat: "Built-in SEO", description: "Search engine optimized from day one to help you rank higher and get found online." },
  { icon: DollarSign, title: "Transparent Pricing", stat: "No Hidden Fees", description: "Clear, upfront pricing with no surprises. You know exactly what you're paying for." },
  { icon: Headphones, title: "Dedicated Support", stat: "Real help", description: "Our team helps configure and maintain the system you use." },
  { icon: Monitor, title: "Analytics Dashboard", stat: "Real-Time Data", description: "Every website includes a dashboard to track visitors, leads, and conversions." }
];

const faqs = [
  { question: "What exactly am I buying?", answer: "One product: a conversion-focused website for your local service business. It includes the design, lead capture and booking flows, follow-up support, and an analytics dashboard. There are no packages to decode — we scope it around your business and confirm the price before any payment." },
  { question: "Can I try it before I buy?", answer: "Yes — try any of the 3 live demos above. They are working sites you can click through, so you see exactly what your business could look like before you talk to us." },
  { question: "What is Rivryn?", answer: "Rivryn is the system that runs your website behind the scenes — it handles your leads, follow-up, and bookings in one place, so nothing a visitor does gets lost. Every Helping Hands website is powered by it." },
  { question: "How long does it take to go live?", answer: "Pick a demo, tell us about your business, and we customize it with your branding and content. We confirm scope and timeline with you before building — no surprises." },
  { question: "What happens after my site launches?", answer: "You get a dashboard to track visitors, leads, and bookings, and our team helps configure and maintain the system. If a visitor reaches out, you see it and can follow up while they are still interested." },
];

const quickStats = [
  { value: "3", label: "live demos to try" },
  { value: "< 24h", label: "response time" },
  { value: "1", label: "product, no packages" },
  { value: "24/7", label: "your site working" },
];

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToWebsiteDemo = () => {
    document.getElementById('demos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen bg-[#f1efe9]">
      <NavIsland />

      <HeroShowcase
        title={<>Turn your website into a <span className="accent-mark">24/7 customer-generating</span> system</>}
        subtitle="Helping Hands Systems builds one thing: conversion-focused websites for local service businesses — with live demos you can try, lead capture, booking flows, and a built-in analytics dashboard. Powered by Rivryn."
        ctaText="See Live Demos"
        ctaAction={scrollToWebsiteDemo}
      />

      {/* Turdy's journey: ship arrival in the hero, then he rides the route past 01–05 and docks as chat */}
      <div className="journey" id="journey">
        <TurdyJourney />

      {/* Powered-by Ribbon — Rivryn is the reference, HHS is the builder */}
      <section className="relative z-10 bg-[#f1efe9] px-6 py-5">
        <div className="powered-lazy-susan" aria-label="Powered by Rivryn">
          <div className="powered-lazy-susan-track">
            {Array.from({ length: 4 }).map((_, index) => (
              <span key={`powered-${index}`}>
                <span className="powered-lazy-susan-item">
                  <span className="powered-lazy-susan-mark">✦</span>
                  Powered by Rivryn
                </span>
                <span className="powered-lazy-susan-item">
                  <span className="powered-lazy-susan-mark">✦</span>
                  Built by Helping Hands Systems
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution — Turdy calls it out */}
      <Section className="reveal relative">
        <span className="journey-node" data-node>01</span>
        <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Image src="/turdy19.webp" alt="Turdy" width={72} height={72} className="h-16 w-16 rounded-full border-2 border-[#1f4bff]/30 bg-[#1f4bff14] object-cover object-[50%_35%]" />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1f4bff]">Turdy&apos;s honest take</p>
            <p className="mt-1 max-w-2xl text-xl font-semibold text-[#0c0d10]">Most business websites just sit there. Yours should work while you sleep.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="relative rounded-3xl border border-[#1f4bff]/15 bg-white p-8 shadow-xl shadow-[#1f4bff]/5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8a6d3b]">The problem</p>
            <h2 className="mb-5 text-3xl font-bold text-gray-900 md:text-4xl">Most business websites just sit there.</h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">A lot of local business websites look fine, but they do not help the owner win the customer when someone is ready to take action.</p>
            <div className="space-y-3">
              {problemPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-lg border border-gray-200/60 bg-[#faf9f6] p-3 text-gray-600">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#8a6d3b]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl border border-[#1f4bff]/20 bg-[#1f4bff14] p-8 shadow-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1f4bff]">The solution</p>
            <h2 className="mb-5 text-3xl font-bold text-[#0c0d10] md:text-4xl">What if your website actually worked for you?</h2>
            <p className="mb-6 text-lg leading-relaxed text-[#2c2f36]">We build websites that act like a simple front-end sales system: clear offer, trust-building layout, lead capture, booking paths, and follow-up support.</p>
            <div className="space-y-3">
              {solutionPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-lg border border-[#1f4bff]/15 bg-white p-3 text-[#0c0d10]">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#2fbf59]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* The one product */}
      <Section id="product" className="reveal relative">
        <span className="journey-node" data-node>02</span>
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1f4bff]">One product. No packages to decode.</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-black text-[#0c0d10] md:text-5xl">A website that turns visitors into customers</h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-500">Everything below is included in the one product. Pick a demo, we customize it with your branding, and it goes live with a dashboard to prove it works.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
          {quickStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-[#1f4bff]/15 bg-[#1f4bff14] p-5 text-center">
              <div className="text-3xl font-black text-[#1f4bff]">{stat.value}</div>
              <div className="mt-1 text-sm font-medium text-[#0c0d10]">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {included.map((service) => (
            <div key={service.title} className="card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1f4bff] text-white shadow-md shadow-[#1f4bff]/30">
                <service.icon size={24} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="leading-relaxed text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/packages" className="btn btn-primary">See what&apos;s inside →</Link>
        </div>
      </Section>

      {/* Funnel Flow — Turdy's checklist */}
      <Section className="reveal relative">
        <span className="journey-node" data-node>03</span>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1f4bff]">Turdy&apos;s checklist</p>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">From demo to your live website</h2>
          <p className="text-xl leading-relaxed text-gray-500">The goal is not just a nicer website. The goal is a clearer path from interest to action.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {funnelSteps.map((step, index) => (
            <div key={step.title} className="card p-6">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1f4bff] text-lg font-black text-white">{index + 1}</div>
              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Demos — the inverted arc */}
      <Section id="demos" className="reveal relative">
        <span className="journey-node" data-node>04</span>
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1f4bff]">Try it yourself</p>
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Pick a live demo to explore</h2>
            <p className="text-xl leading-relaxed text-gray-500">Interact with real website demos built for your industry. Click through, test the booking flows, and see what your business could look like. Turdy&apos;s favorite is the middle one — it rides the highest.</p>
          </div>

          <div className="arc-stage grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {demos.map((demo, index) => (
              <DemoCard key={demo.industry} {...demo} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section className="reveal">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1f4bff]">Built into every site</p>
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">More than a good-looking homepage</h2>
            <p className="text-xl leading-relaxed text-gray-500">Your site can collect leads, book time, answer common questions, and track every visitor through your analytics dashboard.</p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {features.map((highlight) => (
              <div key={highlight.title} className="card p-6">
                <h3 className="text-2xl font-bold text-gray-900">{highlight.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-500">{highlight.description}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {highlight.points.map((point) => (
                    <span key={point} className="inline-flex items-center gap-2 rounded-lg border border-[#1f4bff]/20 bg-[#1f4bff14] px-3 py-2 text-sm font-medium text-gray-700">
                      <CheckCircle2 size={16} className="text-[#2fbf59]" />
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="reveal">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Why Choose Helping Hands Systems?</h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-500">We build websites that make follow-through easier to manage — with a dashboard to prove it.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="card h-full p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1f4bff] text-white shadow-md shadow-[#1f4bff]/30">
                <item.icon size={32} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{item.title}</h3>
              <div className="mb-2 text-2xl font-bold text-[#1f4bff]">{item.stat}</div>
              <p className="text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="reveal relative">
        <span className="journey-node" data-node>05</span>
        <FAQ items={faqs} title="Questions Turdy gets asked a lot" />
      </Section>

      {/* CTA — Turdy closes */}
      <Section className="reveal">
        <div className="dark-section relative overflow-hidden rounded-3xl p-12 text-center">
          <div className="relative z-10">
            <Image src="/turdy19.webp" alt="Turdy" width={96} height={96} className="mx-auto mb-6 h-24 w-24 rounded-full border-2 border-white/30 bg-white/10 object-cover object-[50%_35%]" />
            <h2 className="mx-auto max-w-3xl text-4xl font-black text-white md:text-5xl">Ready to see what this could look like for your business?</h2>
            <p className="mx-auto mb-8 mt-6 max-w-2xl text-xl text-white/70">Try a live demo, then customize it with your branding. Your new website is just a few clicks away — and Turdy will walk you through it.</p>
            <Link href="/#demos" className="btn btn-primary text-lg">
              Explore Live Demos →
            </Link>
          </div>
        </div>
      </Section>

      </div>

      {/* Footer */}
      <footer className="dark-section border-t border-white/10 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-xl font-bold text-white">Helping Hands Systems</h3>
              <p className="mb-4 text-white/70">One product: conversion-focused websites for local service businesses, powered by Rivryn — the system that runs your leads, follow-up, and bookings.</p>
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
                <li><Link href="/packages" className="transition-colors hover:text-[#8fb0ff]">The Product</Link></li>
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
