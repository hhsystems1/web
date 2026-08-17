"use client";

import { useState } from "react";
import NavIsland from "@/components/NavIsland";
import Link from "next/link";
import {
  Hammer,
  Bath,
  Fence,
  Home,
  HardHat,
  Building2,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Bath,
    title: "Kitchen Remodeling",
    description:
      "Custom cabinetry, countertops, and full kitchen transformations that become the heart of your home.",
  },
  {
    icon: Hammer,
    title: "Bathroom Renovation",
    description:
      "Modern tile work, custom showers, vanities, and luxury finishes for your personal retreat.",
  },
  {
    icon: Fence,
    title: "Custom Decks",
    description:
      "Beautiful outdoor living spaces with premium cedar, composite, and custom railing systems.",
  },
  {
    icon: Home,
    title: "Home Additions",
    description:
      "Room expansions, second stories, and sunrooms that seamlessly blend with your existing home.",
  },
  {
    icon: HardHat,
    title: "Foundation Repair",
    description:
      "Structural reinforcement, crack sealing, waterproofing, and crawl space encapsulation.",
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    description:
      "Office build-outs, retail renovations, and tenant improvements delivered on time and on budget.",
  },
];

const projects = [
  {
    title: "Modern Kitchen Overhaul",
    location: "Raleigh, NC",
    description:
      "Complete gut and remodel of a 1970s kitchen with quartz countertops, custom shaker cabinets, and new hardwood flooring.",
  },
  {
    title: "Master Bathroom Retreat",
    location: "Durham, NC",
    description:
      "Spa-inspired bathroom with walk-in tile shower, freestanding tub, and double vanity with stone countertops.",
  },
  {
    title: "Backyard Deck & Pergola",
    location: "Chapel Hill, NC",
    description:
      "Multi-level composite deck with built-in seating, LED lighting, and a cedar pergola for outdoor entertaining.",
  },
];

const testimonials = [
  {
    name: "Sarah & James Mitchell",
    project: "Kitchen Remodeling",
    rating: 5,
    text: "Summit Builders completely transformed our outdated kitchen into a modern masterpiece. They finished on time and under budget. We couldn't be happier with the craftsmanship and attention to detail.",
  },
  {
    name: "David Chen",
    project: "Home Addition",
    rating: 5,
    text: "Adding a second story to our home felt overwhelming, but the Summit team made it seamless. They handled permits, structural work, and finishing with incredible professionalism. It feels like a brand-new house.",
  },
  {
    name: "Maria Rodriguez",
    project: "Bathroom Renovation",
    rating: 5,
    text: "Our master bathroom went from cramped and dated to a stunning spa retreat. The tile work is absolutely flawless. Summit Builders is the real deal — honest pricing, clean worksite, and exceptional results.",
  },
  {
    name: "Tom & Linda Park",
    project: "Custom Deck",
    rating: 5,
    text: "The custom deck Summit built for us is the envy of the neighborhood. They thought of everything — integrated lighting, hidden fasteners, and a design that perfectly complements our home. Worth every penny.",
  },
];

const projectTypes = [
  "Kitchen Remodeling",
  "Bathroom Renovation",
  "Custom Deck",
  "Home Addition",
  "Foundation Repair",
  "Commercial Project",
  "Other",
];

const budgetRanges = [
  "Under $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
];

const timelines = [
  "As soon as possible",
  "Within 1 month",
  "1 – 3 months",
  "3 – 6 months",
  "6+ months",
  "Just exploring options",
];

export default function ContractorDemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    description: "",
    timeline: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-gray-900 font-[family-name:var(--font-inter)]">
      <NavIsland />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-[#faf8f5] to-blue-50/50 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Hammer size={16} />
            Licensed & Insured · Serving the Triangle Since 2009
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Summit{" "}
            <span className="text-emerald-600">Builders</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Quality craftsmanship you can trust. From kitchen remodels to
            commercial build-outs, we bring your vision to life with precision
            and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/25"
            >
              Get a Free Quote
              <ArrowRight size={20} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white/80 text-gray-700 border border-gray-200/60 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:border-gray-300 transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 sm:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Comprehensive remodeling and construction services tailored to
              your home or business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white/80 border border-gray-200/60 rounded-2xl p-8 hover:shadow-lg hover:shadow-emerald-100/50 hover:border-emerald-200/60 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                    <Icon size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 sm:py-28 px-4 bg-gradient-to-b from-[#faf8f5] to-emerald-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Before &amp; After
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              See the transformations we deliver for our clients every day.
            </p>
          </div>
          <div className="space-y-10">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white/80 border border-gray-200/60 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative bg-gray-200/80 aspect-[4/3] flex items-center justify-center">
                    <span className="text-gray-400 font-semibold text-lg uppercase tracking-wide">
                      Before
                    </span>
                  </div>
                  <div className="relative bg-emerald-100/60 aspect-[4/3] flex items-center justify-center">
                    <span className="text-emerald-500 font-semibold text-lg uppercase tracking-wide">
                      After
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium mb-2">
                    <MapPin size={14} />
                    {project.location}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-500">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section id="quote" className="py-20 sm:py-28 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Request a Free Quote
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Tell us about your project and we will get back to you within 24
              hours with a detailed estimate.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white/80 border border-gray-200/60 rounded-2xl p-8 sm:p-10 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John & Jane Smith"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-[#faf8f5] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400 transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-[#faf8f5] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400 transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(919) 555-0123"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-[#faf8f5] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400 transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-[#faf8f5] text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400 transition-all appearance-none"
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-[#faf8f5] text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400 transition-all appearance-none"
                >
                  <option value="">Select your budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="timeline"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Desired Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-[#faf8f5] text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400 transition-all appearance-none"
                >
                  <option value="">When would you like to start?</option>
                  {timelines.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Project Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                required
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us about your project — scope, materials, inspiration, any special requirements..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-[#faf8f5] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-400 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2"
            >
              {submitted ? (
                <>
                  <CheckCircle2 size={20} />
                  Quote Request Sent!
                </>
              ) : (
                <>
                  Submit Quote Request
                  <ArrowRight size={20} />
                </>
              )}
            </button>
            <p className="text-center text-sm text-gray-400">
              We will respond within 24 hours. No spam, no obligation.
            </p>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 px-4 bg-gradient-to-b from-[#faf8f5] to-emerald-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Hundreds of satisfied homeowners and businesses across the Triangle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white/80 border border-gray-200/60 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, s) => (
                    <Star
                      key={s}
                      size={18}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-emerald-600 font-medium">
                      {testimonial.project}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Service Area
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Proudly serving homeowners and businesses throughout the greater
              Triangle area.
            </p>
          </div>
          <div className="bg-white/80 border border-gray-200/60 rounded-2xl overflow-hidden">
            <div className="bg-gray-200/80 aspect-[2/1] sm:aspect-[2.5/1] flex items-center justify-center">
              <div className="text-center">
                <MapPin
                  size={48}
                  className="text-gray-300 mx-auto mb-4"
                />
                <p className="text-gray-400 font-semibold text-lg">
                  Interactive Service Map
                </p>
                <p className="text-gray-400/70 text-sm mt-1">
                  Raleigh · Durham · Chapel Hill · Cary · Apex · Holly Springs
                  · Wake Forest · Fuquay-Varina
                </p>
              </div>
            </div>
            <div className="p-8 sm:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      Headquarters
                    </p>
                    <p className="text-gray-500 text-sm">
                      Raleigh, NC 27601
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      Call Us
                    </p>
                    <p className="text-gray-500 text-sm">(919) 555-BUILD</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      Hours
                    </p>
                    <p className="text-gray-500 text-sm">
                      Mon–Fri 7am–6pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-200/60">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="font-bold text-gray-900 text-lg">
                Summit<span className="text-emerald-600">Builders</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Licensed General Contractor · NC License #82451
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a
                href="mailto:info@summitbuilders.demo"
                className="hover:text-emerald-600 transition-colors flex items-center gap-1.5"
              >
                <Mail size={14} />
                info@summitbuilders.demo
              </a>
              <a
                href="tel:9195552845"
                className="hover:text-emerald-600 transition-colors flex items-center gap-1.5"
              >
                <Phone size={14} />
                (919) 555-BUILD
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Summit Builders. This is a demo by{" "}
              <Link
                href="/"
                className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
              >
                Helping Hands Systems
              </Link>
              .
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="hover:text-emerald-600 transition-colors"
              >
                HHS Home
              </Link>
              <Link
                href="/demos"
                className="hover:text-emerald-600 transition-colors"
              >
                All Demos
              </Link>
              <Link
                href="/contact"
                className="hover:text-emerald-600 transition-colors"
              >
                Contact HHS
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Demo Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4">
        <div className="max-w-3xl mx-auto bg-gray-900/95 backdrop-blur-md rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xl shadow-black/20 border border-gray-700/50">
          <p className="text-white text-sm sm:text-base font-medium text-center sm:text-left">
            This is a live demo —{" "}
            <span className="text-emerald-400">
              Get This For Your Business
            </span>
          </p>
          <a
            href="/payment?demo=contractor"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-500 transition-colors whitespace-nowrap shadow-lg shadow-emerald-600/30"
          >
            Claim Your Demo
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
