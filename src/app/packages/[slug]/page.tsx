"use client";

import { motion } from 'framer-motion';
import { Check, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

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

const packages: Record<string, PackageData> = {
  starter: {
    name: "Starter Package",
    price: "$97/mo + one-time setup fee",
    description: "Perfect for small businesses and entrepreneurs who need a professional online presence with essential functionality.",
    features: [
      "3-page professional website",
      "Contact form integration",
      "Mobile responsive design", 
      "Basic SEO optimization",
      "1 month free support",
      "SSL certificate included",
      "Basic analytics setup"
    ],
    videoId: "1z0S7F8ugQE",
    buttonText: "Start Starter Plan",
    faqs: [
      {
        question: "How long does setup take?",
        answer: "Typically 7-10 business days from content submission to launch."
      },
      {
        question: "What's included in the setup fee?",
        answer: "Domain setup, initial design, content integration, and testing across all devices."
      },
      {
        question: "Can I cancel anytime?",
        answer: "Yes, you can cancel your subscription at any time with 30 days notice."
      },
      {
        question: "Do I own the website?",
        answer: "You own all content and design. The subscription covers hosting, maintenance, and support."
      }
    ]
  },
  standard: {
    name: "Standard Package", 
    price: "$197/mo",
    description: "Ideal for service-based businesses that need appointment booking and lead management capabilities.",
    features: [
      "5-page professional website",
      "Calendar & appointment booking system",
      "Contact forms & lead capture",
      "Advanced SEO optimization",
      "3 months free support",
      "Payment integration",
      "Email automation",
      "Analytics & reporting"
    ],
    videoId: "WFvbbVMc_DA",
    popular: true,
    buttonText: "Start Standard Plan",
    faqs: [
      {
        question: "What booking features are included?",
        answer: "Online scheduling, automated confirmations, reminder emails, calendar sync, and no-show protection."
      },
      {
        question: "Can clients pay online?",
        answer: "Yes, we integrate with Stripe for secure online payments and deposits."
      },
      {
        question: "How many appointments can I handle?",
        answer: "Unlimited bookings with no restrictions on appointment volume."
      },
      {
        question: "Is training provided?",
        answer: "Yes, we provide comprehensive training on managing your booking system and website."
      }
    ]
  },
  professional: {
    name: "Professional Package",
    price: "$297/mo", 
    description: "Perfect for growing businesses that want AI-powered automation to enhance customer experience and streamline operations.",
    features: [
      "5-page professional website",
      "Advanced calendar & booking system",
      "AI chatbot integration",
      "Basic automation workflows",
      "6 months free support",
      "CRM integration",
      "Advanced email marketing",
      "Lead scoring & qualification",
      "Custom integrations"
    ],
    videoId: "noFRGdKXgy8",
    buttonText: "Start Professional Plan",
    faqs: [
      {
        question: "How smart is the chatbot?",
        answer: "Our AI chatbot can answer FAQs, qualify leads, book appointments, and escalate complex queries to you."
      },
      {
        question: "What automations are included?",
        answer: "Lead follow-ups, appointment reminders, customer onboarding sequences, and basic workflow automation."
      },
      {
        question: "Can I customize the automations?",
        answer: "Yes, we'll set up custom workflows based on your specific business processes and requirements."
      },
      {
        question: "Is there a learning curve?",
        answer: "We handle all the technical setup and provide detailed training so you can focus on running your business."
      }
    ]
  },
  custom: {
    name: "Custom Package",
    price: "Contact for pricing",
    description: "Fully tailored solution for enterprises and businesses with complex requirements, unlimited AI integrations, and advanced automation systems.",
    features: [
      "Unlimited pages & custom design",
      "Advanced AI integrations",
      "Complex automation systems",
      "Multi-platform integrations",
      "12 months premium support",
      "Dedicated project manager",
      "Custom API development",
      "Advanced analytics & reporting",
      "Priority support & maintenance"
    ],
    videoId: "82vbwyqwOgE", 
    buttonText: "Request Custom Build",
    faqs: [
      {
        question: "What makes this different from other packages?",
        answer: "Complete customization, advanced AI features, unlimited integrations, and dedicated support for complex business requirements."
      },
      {
        question: "How long does a custom project take?",
        answer: "Typically 4-8 weeks depending on complexity and requirements. We'll provide a detailed timeline after consultation."
      },
      {
        question: "Do you integrate with existing systems?",
        answer: "Yes, we can integrate with virtually any existing software, CRM, or business system you're currently using."
      },
      {
        question: "What's included in the consultation?",
        answer: "Free discovery session, requirements analysis, detailed proposal, and project timeline with transparent pricing."
      }
    ]
  }
};

export default function PackagePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const packageData = packages[slug];
  
  if (!packageData) {
    notFound();
  }

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

      {/* FAQ Section */}
      <Section className="bg-gradient-to-b from-gray-900 to-black">
        <FAQ items={faqs} />
      </Section>

      {/* CTA Form Section */}
      <Section className="bg-gradient-to-b from-black to-gray-900">
        <FormPlaceholder
          title={`Get Started with ${name}`}
          description="Fill out the form below and we'll get in touch within 24 hours to discuss your project and answer any questions."
          buttonText={buttonText}
        />
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
