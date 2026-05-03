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
    name: "Starter Web Bundle",
    price: "$97/mo + one-time setup fee",
    description: "A focused web bundle for local businesses that need a clean, trustworthy site with a clear contact path.",
    features: [
      "Home, services, and contact pages",
      "Quote/contact form with clear next step",
      "Mobile-first responsive design",
      "Local SEO basics and launch checklist",
      "1 month support after launch",
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
    name: "Booking Growth Web Bundle",
    price: "$197/mo",
    description: "A stronger web bundle for service businesses that want booking, quote requests, and better lead capture built into the site.",
    features: [
      "5-page service business website",
      "Booking or quote-request flow",
      "Lead capture routed to the owner",
      "Stronger local SEO page structure",
      "3 months support after launch",
      "Simple online payment path",
      "Follow-up message structure",
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
    name: "Customer System Web Bundle",
    price: "$297/mo",
    description: "A customer-system bundle for businesses that want the website, AI-assisted intake, and owner-ready follow-up handoffs working together.",
    features: [
      "5-page service business website",
      "Booking flow plus lead tracking",
      "AI-assisted FAQ/intake experience",
      "Owner-ready lead summary workflow",
      "6 months support after launch",
      "Lead tracking and handoff setup",
      "Follow-up message templates",
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
        question: "What agent workflows are included?",
        answer: "Lead follow-ups, appointment reminders, intake summaries, and owner-ready next-step tasks."
      },
      {
        question: "Can I customize the agent workflows?",
        answer: "Yes, we can scope custom agent workflows around your documented business process and approval needs."
      },
      {
        question: "Is there a learning curve?",
        answer: "We handle all the technical setup and provide detailed training so you can focus on running your business."
      }
    ]
  },
  custom: {
    name: "Custom Growth Web Bundle",
    price: "Contact for pricing",
    description: "A custom growth bundle for businesses that need a tailored website, secure VPS AI assistant support, and custom operational workflows.",
    features: [
      "Custom site structure and page design",
      "Secure VPS AI assistant deployment",
      "Custom skills, handoffs, and workflows",
      "Scoped integrations with existing tools",
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
        question: "What makes this different from other bundles?",
        answer: "Complete customization, advanced AI agent features, scoped integrations, and dedicated support for complex business requirements."
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

export default async function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const packageData = packages[slug];

  if (!packageData) {
    notFound();
  }

  return <PackageClient packageData={packageData} />;
}
