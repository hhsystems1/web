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
  Users,
  DollarSign,
  Headphones
} from 'lucide-react';
import Link from 'next/link';

import NavIsland from '@/components/NavIsland';
import HeroVideo from '@/components/HeroVideo';
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

  return (
    <main className="relative min-h-screen bg-black">
      <NavIsland />
      
      {/* Background Elements */}
      <Glow color="emerald" size="xl" className="top-20 left-10" />
      <Glow color="blue" size="lg" className="top-96 right-20" />
      <Glow color="lime" size="md" className="bottom-20 left-1/4" />

      {/* Hero Section */}
      <HeroVideo
        videoId="grsp2Hv7QtI"
        title="Websites that feel like the future."
        subtitle="Modern design, built-in bookings, chatbots, and automations—so your site actually works for you."
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

      {/* Why Choose Us Section */}
      <Section className="bg-gradient-to-b from-gray-900 to-black">
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
              whileHover={{ y: -5 }}
              className="text-center p-6 glass rounded-2xl hover:shadow-xl hover:shadow-primary-emerald/10 transition-all duration-300"
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

      {/* Packages Section */}
      <Section id="packages" className="bg-gradient-to-b from-black to-gray-900">
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
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-emerald to-primary-blue rounded-full hover:shadow-lg hover:shadow-primary-emerald/25 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project Today
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
