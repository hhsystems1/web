import { notFound } from 'next/navigation';
import PackageClient from './PackageClient';

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

export function generateStaticParams() {
  return Object.keys(packages).map((slug) => ({
    slug,
  }));
}

export default function PackagePage({ params }: { params: { slug: string } }) {
  const packageData = packages[params.slug];
  
  if (!packageData) {
    notFound();
  }

  return <PackageClient packageData={packageData} />;
}
