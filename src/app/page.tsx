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
  const scrollToPackages = () => {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: Monitor,
      title: "Web Design",
      description: "Modern, responsive websites that look stunning on every device and convert visitors into customers."
    },
    {
      icon: Calendar,
      title: "Booking & Calendars", 
      description: "Integrated appointment scheduling systems that automate your booking process and reduce no-shows."
    },
    {
      icon: MessageSquare,
      title: "Chatbots",
      description: "AI-powered chat assistants that engage visitors 24/7 and qualify leads automatically."
    },
    {
      icon: Zap,
      title: "Automations",
      description: "Smart workflows that handle repetitive tasks, follow up with leads, and streamline your business."
    },
    {
      icon: Brain,
      title: "AI Integrations",
      description: "Custom AI solutions that enhance user experience and provide intelligent insights for your business."
    },
    {
      icon: CreditCard,
      title: "Payment Systems",
      description: "Secure, seamless payment processing that makes it easy for customers to pay you online."
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
      title: "Automation-First",
      stat: "Save 20+ hrs/week",
      description: "Every site includes automation features to reduce manual work and boost efficiency."
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
      name: "Starter",
      price: "$97",
      features: [
        "3-page professional website",
        "Contact form integration", 
        "Mobile responsive design",
        "Basic SEO optimization",
        "1 month free support"
      ],
      href: "/packages/starter",
      popular: false
    },
    {
      name: "Standard", 
      price: "$197",
      features: [
        "5-page professional website",
        "Calendar & appointment booking",
        "Contact forms & lead capture",
        "Advanced SEO optimization",
        "3 months free support"
      ],
      href: "/packages/standard",
      popular: true
    },
    {
      name: "Professional",
      price: "$297", 
      features: [
        "5-page professional website",
        "Calendar & booking system",
        "AI chatbot integration",
        "Basic automation workflows", 
        "6 months free support"
      ],
      href: "/packages/professional",
      popular: false
    },
    {
      name: "Custom",
      price: "Contact for price",
      features: [
        "Fully custom website design",
        "Advanced AI integrations",
        "Complex automation systems",
        "Unlimited pages & features",
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
      points: ["Website inquiry forms", "AI intake prompts", "Automated email handoffs"]
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
      title: "Automation Demo",
      description: "Show a form submission turning into follow-up tasks, email updates, and next-step reminders."
    }
  ];

  const assistantPackages = [
    {
      name: "Hermes Agent",
      price: "$1,500 setup + $297/mo",
      description: "Operations copilot for outreach follow-up, SOP execution, and reporting.",
      href: "/assistants/hermes"
    },
    {
      name: "OpenClaw Agent",
      price: "$1,800 setup + $347/mo",
      description: "Automation-first assistant for integrations, lead routing, and repeatable workflows.",
      href: "/assistants/openclaw"
    },
    {
      name: "Agent Zero",
      price: "$1,200 setup + $247/mo",
      description: "Personal assistant for fast daily support, drafting, and execution handoffs.",
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
        title="Websites built to turn attention into action."
        subtitle="Modern design, built-in bookings, AI chat, payment paths, and automations that help your site bring in leads and keep work moving."
        ctaText="Get Your Website Plan"
        ctaAction={scrollToPackages}
      />

      {/* Services Section */}
      <Section id="services" className="bg-gradient-to-b from-black to-gray-900">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Everything Your Business Needs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            From beautiful design to intelligent automation, we build websites that work as hard as you do.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
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
            VPS AI Assistant Setup Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-4xl mx-auto"
          >
            One-time setup, monthly upkeep, and pre-installed skills for Hermes, OpenClaw, and Agent Zero.
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
              Short walkthroughs will make it easier to see how each website feature works before starting a project.
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
                      className="h-[520px] w-full"
                      loading="lazy"
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
            Choose Your Perfect Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            From simple websites to complex automation systems, we have a solution that fits your needs and budget.
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
            We don&apos;t just build websites—we build digital solutions that grow your business.
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
              Ready to build something amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s create a website that not only looks incredible but actually works for your business.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-emerald via-primary-emerald to-primary-blue rounded-full hover:shadow-2xl hover:shadow-primary-emerald/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden border border-primary-emerald/30 hover:border-primary-emerald/60"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-emerald/10 to-primary-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project Today
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
                Modern web development with built-in automation and AI.
              </p>
              <div className="space-y-2 text-gray-400">
                <p>📞 6066606147</p>
                <p>✉️ helpinghandsystems1@gmail.com</p>
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
                <li><Link href="/assistants" className="hover:text-white transition-colors">AI Assistants</Link></li>
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
