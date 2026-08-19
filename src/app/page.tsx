"use client";

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

import NavIsland from '@/components/NavIsland';
import HeroShowcase from '@/components/HeroShowcase';
import Section from '@/components/Section';
import DemoCard from '@/components/DemoCard';

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

const whyChooseUs = [
  { icon: Rocket, title: "Modern Builds", stat: "Latest Tech", description: "Built with cutting-edge technologies for maximum performance and future-proofing." },
  { icon: Gauge, title: "Speed & Performance", stat: "90+ Lighthouse", description: "Optimized for lightning-fast loading times and superior user experience." },
  { icon: Shield, title: "SEO-Ready", stat: "Built-in SEO", description: "Search engine optimized from day one to help you rank higher and get found online." },
  { icon: DollarSign, title: "Transparent Pricing", stat: "No Hidden Fees", description: "Clear, upfront pricing with no surprises. You know exactly what you're paying for." },
  { icon: Headphones, title: "Dedicated Support", stat: "24/7 Available", description: "Personal support from our team whenever you need help or have questions." },
  { icon: Monitor, title: "Analytics Dashboard", stat: "Real-Time Data", description: "Every website includes a dashboard to track visitors, leads, and conversions." }
];

const demos = [
  { industry: "restaurant" as const, title: "Restaurant & Cafe", description: "See how a restaurant website can showcase your menu, take reservations, and build a loyal customer base.", features: ["Online menu & ordering", "Reservation booking", "Customer reviews", "Photo gallery"], href: "/demos/restaurant" },
  { industry: "contractor" as const, title: "Contractor & Home Services", description: "Discover how a contractor site can generate quote requests, showcase projects, and grow your service area.", features: ["Quote request forms", "Project gallery", "Service area map", "Before & after showcase"], href: "/demos/contractor" },
  { industry: "medical" as const, title: "Medical & Dental Office", description: "Explore how a medical practice website can streamline appointments, build patient trust, and reduce no-shows.", features: ["Appointment booking", "Provider profiles", "Insurance info", "Patient FAQ"], href: "/demos/medical" }
];

const features = [
  { title: "Lead capture that answers fast", description: "Forms, chat prompts, and follow-up paths built around the questions your customers already ask.", points: ["Website inquiry forms", "Quote request flows", "Owner-ready lead handoffs"] },
  { title: "Booking flows that remove friction", description: "Calendar and appointment paths that make it easier for visitors to pick a time and move forward.", points: ["Calendar embeds", "Service routing", "Reminder-ready structure"] },
  { title: "Analytics dashboard included", description: "Track page views, form submissions, bookings, and conversions — all in one clean dashboard.", points: ["Visitor tracking", "Conversion funnel", "Lead source analytics"] }
];

export default function Home() {
  const scrollToWebsiteDemo = () => {
    document.getElementById('demos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen bg-[#faf8f5]">
      <NavIsland />

      <HeroShowcase
        title="Turn Your Website Into a 24/7 Customer-Generating System"
        subtitle="Helping Hands Systems builds conversion-focused websites for local service businesses — with live demos you can try, lead capture, booking flows, and a built-in analytics dashboard."
        ctaText="See Live Demos"
        ctaAction={scrollToWebsiteDemo}
      />

      {/* Powered-by Ribbon */}
      <section className="relative z-10 bg-[#faf8f5] px-6 py-5">
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

      {/* Problem / Solution */}
      <Section className="bg-gradient-to-b from-[#faf8f5] via-white to-gray-50">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="rounded-2xl border border-red-200/50 bg-red-50/50 p-8 shadow-xl shadow-red-100/20 backdrop-blur-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">The problem</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Most business websites just sit there.</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">A lot of local business websites look fine, but they do not help the owner win the customer when someone is ready to take action.</p>
            <div className="space-y-3">
              {problemPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-lg border border-gray-200/60 bg-white/60 p-3 text-gray-600">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-emerald-200/50 bg-emerald-50/50 p-8 shadow-xl shadow-emerald-100/20 backdrop-blur-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">The solution</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">What if your website actually worked for you?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">We build websites that act like a simple front-end sales system: clear offer, trust-building layout, lead capture, booking paths, and follow-up support.</p>
              <div className="space-y-3">
                {solutionPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-lg border border-emerald-200/50 bg-white/60 p-3 text-gray-700">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-500" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="bg-gradient-to-b from-white to-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Built Specifically for Local Service Businesses</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">Contractors, shops, service providers, appointment-based businesses, and local teams need more than a brochure. They need a website that helps create calls, bookings, and follow-up.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title}>
              <div className="group relative p-6 rounded-2xl glass hover:shadow-xl hover:shadow-emerald-200/40 transition-shadow duration-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-blue-400 flex items-center justify-center mb-4 shadow-md shadow-emerald-200/50">
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Funnel Flow */}
      <Section className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Simple customer flow</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">From demo to your live website</h2>
          <p className="text-xl text-gray-500 leading-relaxed">The goal is not just a nicer website. The goal is a clearer path from interest to action.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {funnelSteps.map((step, index) => (
            <div key={step.title}>
              <div className="relative rounded-2xl border border-gray-200/60 bg-white/60 p-6 shadow-xl shadow-gray-100/20 backdrop-blur-xl">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-blue-400 text-lg font-bold text-white">{index + 1}</div>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Demos */}
      <Section id="demos" className="bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Try it yourself</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Pick a live demo to explore</h2>
            <p className="text-xl text-gray-500 leading-relaxed">Interact with real website demos built for your industry. Click through, test the booking flows, and see what your business could look like.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {demos.map((demo, index) => (
              <DemoCard key={demo.industry} {...demo} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section className="bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Built into every site</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">More than a good-looking homepage</h2>
            <p className="text-xl text-gray-500 leading-relaxed">Your site can collect leads, book time, answer common questions, and track every visitor through your analytics dashboard.</p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {features.map((highlight) => (
              <div key={highlight.title}>
                <div className="rounded-lg border border-gray-200/60 bg-white/60 p-6 shadow-xl shadow-gray-100/20 backdrop-blur-xl">
                  <h3 className="text-2xl font-bold text-gray-900">{highlight.title}</h3>
                  <p className="mt-3 text-gray-500 leading-relaxed">{highlight.description}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {highlight.points.map((point) => (
                      <span key={point} className="inline-flex items-center gap-2 rounded-lg border border-emerald-200/50 bg-emerald-50 px-3 py-2 text-sm font-medium text-gray-700">
                        <CheckCircle2 size={16} className="text-emerald-500" />
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Helping Hands Systems?</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">We build websites that make follow-through easier to manage — with a dashboard to prove it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item) => (
            <div key={item.title}>
              <div className="text-center p-6 glass rounded-2xl hover:shadow-xl hover:shadow-emerald-200/40 transition-shadow duration-200">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-blue-400 flex items-center justify-center mx-auto mb-4 shadow-md shadow-emerald-200/50">
                  <item.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <div className="text-2xl font-bold text-emerald-600 mb-2">{item.stat}</div>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-white to-gray-50">
        <div className="text-center p-12 glass rounded-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to see what this could look like for your business?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Try a live demo, then customize it with your branding. Your new website is just a few clicks away.</p>
            <Link href="/#demos" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 via-emerald-500 to-blue-400 rounded-full hover:shadow-2xl hover:shadow-emerald-300/30 transition-all duration-300 hover:scale-105 border border-emerald-400/30 hover:border-emerald-400/60">
              Explore Live Demos →
            </Link>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Helping Hands Systems</h3>
              <p className="text-gray-500 mb-4">Conversion-focused websites for local service businesses with live demos and analytics dashboards.</p>
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
                <li><Link href="/packages" className="hover:text-gray-900 transition-colors">Website Package</Link></li>
                <li><Link href="/contact" className="hover:text-gray-900 transition-colors">Contact</Link></li>
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
