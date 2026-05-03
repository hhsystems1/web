"use client";

import { motion } from 'framer-motion';
import {
  Monitor,
  Calendar,
  MessageSquare,
  Zap,
  Brain,
  CreditCard,
  Rocket,
  Gauge,
  Shield,
  DollarSign,
  Headphones,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

import NavIsland from '@/components/NavIsland';
import HeroShowcase from '@/components/HeroShowcase';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import PackageCard from '@/components/PackageCard';
import Glow from '@/components/Glow';

export default function Home() {
  const scrollToWebsiteDemo = () => {
    document.getElementById('website-demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
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
      description: "Answers common questions, qualifies interested visitors, and helps turn conversations into real follow-up opportunities."
    },
    {
      icon: Zap,
      title: "Lead Follow-Up Support",
      description: "Keeps new inquiries organized so fewer interested customers get lost after the first message."
    },
    {
      icon: Brain,
      title: "Business Assistant Skills",
      description: "Adds practical support for intake, follow-up, reporting, content, and day-to-day operations as your system grows."
    },
    {
      icon: CreditCard,
      title: "Simple Payment Paths",
      description: "Makes it easier for customers to approve work, pay online, and keep the buying process moving."
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
    "AI-assisted intake and follow-up options when needed",
    "A simple system that helps turn visitors into customers"
  ];

  const funnelSteps = [
    {
      title: "Someone visits your site",
      description: "They land on a page that quickly explains who you help, what you do, and why they should trust you."
    },
    {
      title: "The website guides them",
      description: "Clear sections, FAQs, calls to action, and optional AI chat help answer questions before they leave."
    },
    {
      title: "They call, book, or request a quote",
      description: "The next step is obvious, low-friction, and built around real local-service customer behavior."
    },
    {
      title: "Follow-up starts faster",
      description: "Lead details stay organized so you can respond while the customer is still interested."
    }
  ];

  const whyChooseUs = [
    {
      icon: Rocket,
      title: "Modern Builds",
      stat: "Latest Tech",
      description: "Built with cutting-edge technologies for maximum performance and future-proofing."
    },
    {
      icon: Gauge,
      title: "Speed & Performance",
      stat: "90+ Lighthouse",
      description: "Optimized for lightning-fast loading times and superior user experience."
    },
    {
      icon: Shield,
      title: "SEO-Ready",
      stat: "Built-in SEO",
      description: "Search engine optimized from day one to help you rank higher and get found online."
    },
    {
      icon: Zap,
      title: "Agent-Ready",
      stat: "Secure VPS",
      description: "Builds can connect to VPS-hosted assistants instead of brittle third-party automation chains."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      stat: "No Hidden Fees",
      description: "Clear, upfront pricing with no surprises. You know exactly what you're paying for."
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      stat: "24/7 Available",
      description: "Personal support from our team whenever you need help or have questions."
    }
  ];

  const packages = [
    {
      name: "Starter Web Bundle",
      price: "$97",
      features: [
        "Clean 3-page site for getting found and trusted",
        "Home, services, and contact pages",
        "Quote/contact form with clear next step",
        "Mobile-first layout and fast loading",
        "Local SEO basics and launch checklist",
        "1 month support after launch"
      ],
      href: "/packages/starter",
      popular: false
    },
    {
      name: "Booking Growth Web Bundle",
      price: "$197",
      features: [
        "Website plus booking path for appointment-ready leads",
        "5-page service business website",
        "Booking or quote-request flow",
        "Lead capture routed to the owner",
        "Stronger local SEO page structure",
        "3 months support after launch"
      ],
      href: "/packages/standard",
      popular: true
    },
    {
      name: "Customer System Web Bundle",
      price: "$297",
      features: [
        "Website, AI intake, and follow-up handoff support",
        "5-page service business website",
        "Booking flow plus lead tracking",
        "AI-assisted FAQ/intake experience",
        "Owner-ready lead summary workflow",
        "6 months support after launch"
      ],
      href: "/packages/professional",
      popular: false
    },
    {
      name: "Custom Growth Web Bundle",
      price: "Contact for price",
      features: [
        "Custom website, assistant, and operations buildout",
        "Custom site structure and page design",
        "Secure VPS AI assistant connection",
        "Custom skills, handoffs, and workflows",
        "Scoped pages, features, and integrations",
        "12 months premium support"
      ],
      href: "/packages/custom",
      popular: false
    }
  ];

  const launchHighlights = [
    {
      title: "Lead capture that answers fast",
      description: "Forms, chat prompts, and follow-up paths built around the questions your customers already ask.",
      points: ["Website inquiry forms", "Agent intake prompts", "Owner-ready lead handoffs"]
    },
    {
      title: "Booking flows that remove friction",
      description: "Calendar and appointment paths that make it easier for visitors to pick a time and move forward.",
      points: ["Calendar embeds", "Service routing", "Reminder-ready structure"]
    },
    {
      title: "Launch polish that builds trust",
      description: "Clear calls to action, responsive page layouts, and SEO foundations prepared before your site goes live.",
      points: ["Mobile-first sections", "Local SEO basics", "Performance-minded setup"]
    }
  ];

  const demoPlan = [
    {
      title: "Booking Demo",
      description: "Show a visitor choosing a service, picking a time, and sending the booking request."
    },
    {
      title: "AI Chat Demo",
      description: "Show common customer questions, lead qualification, and a clean handoff to the business.",
      href: "https://hhsdemo2.netlify.app/",
      livePreview: true
    },
    {
      title: "Agent Workflow Demo",
      description: "Show a form submission becoming a structured agent task, owner summary, and next-step reminder."
    }
  ];

  const assistantPackages = [
    {
      name: "Daily Operations Assistant",
      price: "$1,500 setup + $297/mo",
      description: "Keeps employee tasks, reminders, daily updates, and owner handoffs organized from a VPS assistant.",
      href: "/assistants/hermes"
    },
    {
      name: "Voice Ordering Assistant",
      price: "$1,800 setup + $347/mo",
      description: "Helps capture calls, order details, appointment requests, and owner alerts for busy local businesses.",
      href: "/assistants/openclaw"
    },
    {
      name: "Social Media Assistant",
      price: "$1,200 setup + $247/mo",
      description: "Drafts posts, captions, promos, and reminders from approved business context so marketing stays consistent.",
      href: "/assistants/agent-zero"
    }
  ];

  return (
    <main className="relative min-h-screen bg-black">
      <NavIsland />

      {/* Background Elements */}
      <Glow color="emerald" size="xl" className="top-20 left-10" />
      <Glow color="blue" size="lg" className="top-96 right-20" />
      <Glow color="lime" size="md" className="bottom-20 left-1/4" />

      {/* Hero Section */}
      <HeroShowcase
        title="Turn Your Website Into a 24/7 Customer-Generating System"
        subtitle="Helping Hands Systems builds conversion-focused websites for local service businesses — with lead capture, booking flows, AI-assisted follow-up, and simple systems that help turn visitors into customers."
        ctaText="See What Your Website Could Look Like"
        ctaAction={scrollToWebsiteDemo}
      />

      {/* Powered-by Ribbon */}
      <section className="relative z-10 bg-black px-6 py-5">
        <div className="powered-lazy-susan" aria-label="Powered by Helping Hands Systems">
              <div className="powered-lazy-susan-track">
                {Array.from({ length: 8 }).map((_, index) => (
                  <span className="powered-lazy-susan-item" key={`powered-${index}`}>
                    <span className="powered-lazy-susan-mark">✦</span>
                    Powered by Helping Hands Systems
                  </span>
                ))}
              </div>
            </div>
      </section>

      {/* Problem / Solution Section */}
      <Section className="bg-gradient-to-b from-black via-gray-950 to-gray-900">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-red-400/15 bg-red-500/5 p-8 shadow-xl shadow-black/20 backdrop-blur-xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-300">The problem</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Most business websites just sit there.</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              A lot of local business websites look fine, but they do not help the owner win the customer when someone is ready to take action.
            </p>
            <div className="space-y-3">
              {problemPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-lg border border-white/10 bg-black/30 p-3 text-gray-300">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-300" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-primary-emerald/25 bg-primary-emerald/10 p-8 shadow-xl shadow-black/20 backdrop-blur-xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-lime">The solution</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">What if your website actually worked for you?</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              We build websites that act like a simple front-end sales system: clear offer, trust-building layout, lead capture, booking paths, and follow-up support.
            </p>
            <div className="space-y-3">
              {solutionPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-lg border border-primary-emerald/20 bg-black/30 p-3 text-gray-200">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary-emerald" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" className="bg-gradient-to-b from-black to-gray-900">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Built Specifically for Local Service Businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Contractors, shops, service providers, appointment-based businesses, and local teams need more than a brochure. They need a website that helps create calls, bookings, and follow-up.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </Section>

      {/* Funnel Flow Section */}
      <Section className="bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-lime"
          >
            Simple customer flow
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            From website visit to booked opportunity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            The goal is not just a nicer website. The goal is a clearer path from interest to action.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {funnelSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/10 p-6 shadow-xl shadow-black/20 backdrop-blur-xl"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary-emerald to-primary-blue text-lg font-bold text-white">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-gray-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* VSL Placeholder Section */}
      <Section id="website-demo" className="bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-primary-emerald/25 bg-black/70 shadow-2xl shadow-primary-emerald/10"
          >
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-300" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 text-sm text-gray-400">Website demo walkthrough</span>
            </div>
            <div className="flex aspect-video flex-col items-center justify-center p-8 text-center">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-primary-emerald to-primary-blue text-3xl text-white shadow-lg shadow-primary-emerald/30">
                ▶
              </div>
              <h3 className="text-2xl font-bold text-white">Watch how your website could start working for you</h3>
              <p className="mt-3 max-w-xl text-gray-400">
                In a short walkthrough, we map how a local business website can capture leads, guide bookings, and support follow-up before customers go cold.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-lime">Quick walkthrough</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">A website should do more than look good.</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              We map the system in plain English: visitor lands, questions get answered, the next step is clear, and the business owner gets a better lead to follow up with.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-primary-emerald/40 bg-gradient-to-r from-primary-emerald to-primary-blue px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-emerald/30"
            >
              Get a Free Demo of Your Future Website
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* AI Assistants Section */}
      <Section className="bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-lime"
          >
            New project launch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            VPS AI Assistant Setup Bundles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-4xl mx-auto"
          >
            Secure VPS deployment, monthly upkeep, and pre-installed skills for Hermes, OpenClaw, and Agent Zero.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {assistantPackages.map((assistant, index) => (
            <motion.div
              key={assistant.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-lg border border-white/10 bg-white/10 p-6 shadow-xl shadow-black/20 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-white">{assistant.name}</h3>
              <p className="mt-2 text-primary-lime font-semibold">{assistant.price}</p>
              <p className="mt-4 text-gray-300 leading-relaxed">{assistant.description}</p>
              <Link
                href={assistant.href}
                className="mt-5 inline-flex items-center justify-center rounded-lg border border-primary-emerald/35 bg-primary-emerald/15 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-primary-emerald/70 hover:bg-primary-emerald/25"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/assistants"
            className="inline-flex items-center justify-center rounded-full border border-primary-emerald/40 bg-gradient-to-r from-primary-emerald to-primary-blue px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-emerald/30"
          >
            Compare Assistant Options
          </Link>
        </div>
      </Section>

      {/* Launch Highlights Section */}
      <Section className="bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-lime"
            >
              Built into the page
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              More than a good-looking homepage
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 leading-relaxed"
            >
              Your site can collect leads, book time, answer common questions, and make the next step obvious from the first visit.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {launchHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="rounded-lg border border-white/10 bg-white/10 p-6 shadow-xl shadow-black/20 backdrop-blur-xl"
              >
                <h3 className="text-2xl font-bold text-white">{highlight.title}</h3>
                <p className="mt-3 text-gray-400 leading-relaxed">{highlight.description}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {highlight.points.map((point) => (
                    <span key={point} className="inline-flex items-center gap-2 rounded-lg border border-primary-emerald/25 bg-primary-emerald/10 px-3 py-2 text-sm font-medium text-slate-200">
                      <CheckCircle2 size={16} className="text-primary-emerald" />
                      {point}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Demos Section */}
      <Section id="demos" className="bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-lime"
            >
              Demo roadmap
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Demos coming next
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 leading-relaxed"
            >
              Short walkthroughs will make it easier to see how each website and agent feature works before starting a project.
            </motion.p>
          </div>

          <div className="space-y-6">
            {demoPlan.map((demo, index) => (
              <motion.div
                key={demo.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="rounded-lg border border-white/10 bg-white/10 p-6 shadow-xl shadow-black/20 backdrop-blur-xl md:p-8"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-2xl">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-emerald/15 text-sm font-bold text-primary-lime ring-1 ring-primary-emerald/30">
                      0{index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{demo.title}</h3>
                    <p className="mt-3 text-gray-400 leading-relaxed">{demo.description}</p>
                  </div>
                  {demo.href && (
                    <Link
                      href={demo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center justify-center rounded-lg border border-primary-emerald/35 bg-primary-emerald/15 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-primary-emerald/70 hover:bg-primary-emerald/25"
                    >
                      Open Demo
                    </Link>
                  )}
                </div>
                {demo.livePreview && demo.href && (
                  <div className="mt-5 overflow-hidden rounded-lg border border-primary-emerald/25 bg-black/60">
                    <iframe
                      src={demo.href}
                      title={demo.title}
                      className="h-[520px] w-full pointer-events-none"
                      loading="lazy"
                      tabIndex={-1}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Packages Section */}
      <Section id="packages" className="bg-gradient-to-b from-gray-900 to-black">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Choose your Web Bundle
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Start with a clean website, add booking and lead capture, or build toward a full customer system with AI-assisted follow-up.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.name} {...pkg} index={index} />
          ))}
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-gradient-to-b from-black to-gray-900">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Why Choose Helping Hands Systems?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            We build websites and VPS-hosted agent systems that make follow-through easier to manage.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.04, transition: { duration: 0.08 } }}
              className="text-center p-6 glass rounded-2xl hover:shadow-xl hover:shadow-primary-emerald/10 transition-[box-shadow] duration-200 will-change-transform"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-emerald to-primary-blue flex items-center justify-center mx-auto mb-4">
                <item.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <div className="text-2xl font-bold text-primary-emerald mb-2">{item.stat}</div>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-b from-gray-900 to-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center p-12 glass rounded-2xl relative overflow-hidden"
        >
          <Glow color="emerald" size="lg" className="top-0 left-0" />
          <Glow color="blue" size="md" className="bottom-0 right-0" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to see what this could look like for your business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a practical demo direction for a website built to capture leads, guide bookings, and support faster follow-up.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-emerald via-primary-emerald to-primary-blue rounded-full hover:shadow-2xl hover:shadow-primary-emerald/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden border border-primary-emerald/30 hover:border-primary-emerald/60"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-emerald/10 to-primary-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center gap-2">
                See How This Would Work For Your Business
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
              <h3 className="text-xl font-bold text-white mb-4">Helping Hands Systems</h3>
              <p className="text-gray-400 mb-4">
                Modern web development with secure VPS AI agents and skills.
              </p>
              <div className="space-y-2 text-gray-400">
                <p>📞 (606) 660-6147</p>
                <p>✉️ helpinghandsystems1@gmail.com</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Web Bundles</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/packages/starter" className="hover:text-white transition-colors">Starter Bundle</Link></li>
                <li><Link href="/packages/standard" className="hover:text-white transition-colors">Booking Growth</Link></li>
                <li><Link href="/packages/professional" className="hover:text-white transition-colors">Customer System</Link></li>
                <li><Link href="/packages/custom" className="hover:text-white transition-colors">Custom Growth</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/assistants" className="hover:text-white transition-colors">AI Assistants</Link></li>
                <li><Link href="/skills" className="hover:text-white transition-colors">Agent Skills</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Helping Hands Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
