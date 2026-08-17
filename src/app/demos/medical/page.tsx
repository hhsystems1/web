"use client";

import { useState } from "react";
import Link from "next/link";
import NavIsland from "@/components/NavIsland";
import {
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CalendarCheck,
  Star,
  ChevronDown,
  ChevronUp,
  Smile,
  Sparkles,
  Heart,
  Baby,
  AlertCircle,
  Stethoscope,
  CreditCard,
  FileText,
  Car,
  Mail,
  Send,
  ArrowRight,
  User,
  CheckCircle2,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    description:
      "Comprehensive exams, cleanings, fillings, and preventive care to keep your smile healthy for life.",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description:
      "Professional in-office and take-home whitening options to brighten your smile by several shades.",
  },
  {
    icon: Smile,
    title: "Dental Implants",
    description:
      "Permanent, natural-looking tooth replacements backed by top-tier materials and surgical expertise.",
  },
  {
    icon: ArrowRight,
    title: "Orthodontics",
    description:
      "Clear aligners and traditional braces for patients of all ages. Straighten your smile discreetly.",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description:
      "Gentle, kid-friendly care in a welcoming environment. We make dental visits fun for little ones.",
  },
  {
    icon: AlertCircle,
    title: "Emergency Care",
    description:
      "Same-day appointments for toothaches, broken teeth, and other urgent dental emergencies.",
  },
];

const providers = [
  {
    name: "Dr. Sarah Mitchell",
    specialty: "General & Cosmetic Dentistry",
    bio: "Dr. Mitchell brings over 15 years of experience in restorative and cosmetic dentistry. She is passionate about creating healthy, beautiful smiles and stays current with the latest techniques through ongoing education.",
    education: "DDS, University of Michigan",
  },
  {
    name: "Dr. James Okafor",
    specialty: "Orthodontics & Oral Surgery",
    bio: "Board-certified orthodontist specializing in clear aligner therapy and complex surgical cases. Dr. Okafor has helped over 3,000 patients achieve their dream smiles with personalized treatment plans.",
    education: "DMD, Harvard School of Dental Medicine",
  },
  {
    name: "Dr. Emily Chen",
    specialty: "Pediatric Dentistry",
    bio: "With a warm and patient approach, Dr. Chen creates positive dental experiences for children. She completed advanced training in pediatric sedation and special needs dentistry.",
    education: "DDS, Columbia University",
  },
];

const insuranceProviders = [
  "Delta Dental",
  "Cigna",
  "Aetna",
  "MetLife",
  "Blue Cross Blue Shield",
  "United Healthcare",
  "Guardian",
  "Humana",
];

const faqs = [
  {
    question: "How do I schedule my first appointment?",
    answer:
      "You can book online through our appointment form below, call our office at (555) 234-5678, or walk in during business hours. We recommend scheduling your first visit at least two weeks in advance for the best availability.",
  },
  {
    question: "What insurance plans do you accept?",
    answer:
      "We accept most major dental insurance plans including Delta Dental, Cigna, Aetna, MetLife, BCBS, United Healthcare, Guardian, and Humana. Our front desk team will verify your benefits before your visit and explain any out-of-pocket costs.",
  },
  {
    question: "What should I bring to my first visit?",
    answer:
      "Please bring a valid photo ID, your dental insurance card, any previous dental records or X-rays if available, and a list of current medications. Arriving 15 minutes early helps us get you checked in smoothly.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. We offer flexible payment options including interest-free financing through CareCredit, in-house payment plans for qualifying treatments, and we accept all major credit cards, HSA, and FSA accounts.",
  },
  {
    question: "How often should I visit the dentist?",
    answer:
      "We recommend a dental checkup and professional cleaning every six months. However, patients with gum disease, a history of cavities, or other conditions may benefit from more frequent visits. Dr. Mitchell will recommend a schedule tailored to your needs.",
  },
];

const officeHours = [
  { day: "Monday", hours: "8:00 AM - 6:00 PM" },
  { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
  { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
  { day: "Thursday", hours: "8:00 AM - 7:00 PM" },
  { day: "Friday", hours: "8:00 AM - 5:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function MedicalDemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    isNewPatient: true,
    notes: "",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-gray-900">
      <NavIsland />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl" />
        </div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200/60 px-4 py-2 mb-8">
              <Smile className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">
                Family Dental Care Since 2008
              </span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
            Bright Smile{" "}
            <span className="text-emerald-600">Dental</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Compassionate, modern dental care for the whole family. From routine
            cleanings to complete smile makeovers, we make every visit
            comfortable and stress-free.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/25 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 hover:scale-105"
            >
              <CalendarCheck className="h-5 w-5" />
              Book Appointment
            </a>
            <a
              href="tel:5552345678"
              className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-gray-200/60 px-8 py-3.5 text-base font-semibold text-gray-700 shadow-sm hover:bg-white hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              (555) 234-5678
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Insurance Accepted
            </span>
            <span className="flex items-center gap-1.5">
              <Heart className="h-4 w-4 text-emerald-600" />
              Gentle Care
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-emerald-600" />
              5-Star Rated
            </span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Comprehensive dental solutions tailored to every age and every
              smile.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl bg-white/80 border border-gray-200/60 p-8 shadow-sm hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100 group-hover:bg-emerald-100 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Providers */}
      <section className="py-20 sm:py-28 bg-white/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
              Meet Your Team
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Our Providers
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Experienced, board-certified professionals dedicated to your
              comfort and oral health.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {providers.map((provider) => (
              <div
                key={provider.name}
                className="rounded-2xl bg-white/80 border border-gray-200/60 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="h-56 bg-gradient-to-br from-emerald-100 to-teal-50 flex items-center justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/80 border border-emerald-200/60 shadow-sm">
                    <User className="h-12 w-12 text-emerald-300" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">
                    {provider.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-emerald-600">
                    {provider.specialty}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    {provider.education}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {provider.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Patient Forms */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
              Insurance & Forms
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              We Make It Easy
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Insurance */}
            <div className="rounded-2xl bg-white/80 border border-gray-200/60 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-100">
                  <Shield className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Accepted Insurance
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {insuranceProviders.map((ins) => (
                  <div
                    key={ins}
                    className="flex items-center gap-2 rounded-lg bg-[#faf8f5] border border-gray-100 px-4 py-3"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">
                      {ins}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-gray-500">
                Don&apos;t see your plan? Contact us — we work with most insurance
                providers and will help verify your coverage.
              </p>
            </div>

            {/* New Patient Info */}
            <div className="rounded-2xl bg-white/80 border border-gray-200/60 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-100">
                  <FileText className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  New Patient Information
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "What to Bring",
                    items: [
                      "Valid photo ID",
                      "Insurance card",
                      "Previous dental records (if available)",
                      "List of current medications",
                    ],
                  },
                  {
                    title: "Before Your Visit",
                    items: [
                      "Complete new patient forms online (sent after booking)",
                      "Arrive 15 minutes early for check-in",
                      "Inform us of any allergies or medical conditions",
                    ],
                  },
                ].map((section) => (
                  <div key={section.title}>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      {section.title}
                    </h4>
                    <ul className="space-y-1.5">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking */}
      <section id="booking" className="py-20 sm:py-28 bg-white/50 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
              Schedule Your Visit
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Book an Appointment
            </h2>
            <p className="mt-4 text-gray-600">
              Fill out the form below and our team will confirm your appointment
              within one business day.
            </p>
          </div>

          <div>
            {formSubmitted ? (
              <div className="rounded-2xl bg-white/80 border border-emerald-200/60 p-12 shadow-sm text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100 mx-auto">
                  <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Request Received!
                </h3>
                <p className="mt-3 text-gray-600">
                  Thank you, {formData.name}. Our scheduling team will reach out
                  shortly to confirm your appointment. Check your email at{" "}
                  {formData.email} for a confirmation link.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      date: "",
                      time: "",
                      service: "",
                      isNewPatient: true,
                      notes: "",
                    });
                  }}
                  className="mt-6 text-sm font-medium text-emerald-600 hover:text-emerald-700 underline underline-offset-4"
                >
                  Book another appointment
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white/80 border border-gray-200/60 p-8 sm:p-10 shadow-sm space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-[#faf8f5] py-3 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                        placeholder="Jane Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-[#faf8f5] py-3 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Phone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-[#faf8f5] py-3 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Preferred Date
                    </label>
                    <div className="relative">
                      <CalendarCheck className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        id="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full rounded-xl border border-gray-200 bg-[#faf8f5] py-3 pl-10 pr-4 text-sm text-gray-900 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Preferred Time
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <select
                        id="time"
                        required
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                        className="w-full appearance-none rounded-xl border border-gray-200 bg-[#faf8f5] py-3 pl-10 pr-10 text-sm text-gray-900 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                      >
                        <option value="">Select a time</option>
                        <option value="morning">Morning (8am - 11am)</option>
                        <option value="midday">Midday (11am - 1pm)</option>
                        <option value="afternoon">Afternoon (1pm - 4pm)</option>
                        <option value="evening">Evening (4pm - 6pm)</option>
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Service Needed */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Service Needed
                    </label>
                    <div className="relative">
                      <Stethoscope className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <select
                        id="service"
                        required
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full appearance-none rounded-xl border border-gray-200 bg-[#faf8f5] py-3 pl-10 pr-10 text-sm text-gray-900 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                      >
                        <option value="">Select a service</option>
                        <option value="cleaning">General Cleaning & Exam</option>
                        <option value="whitening">Teeth Whitening</option>
                        <option value="implants">Dental Implants Consultation</option>
                        <option value="orthodontics">Orthodontics / Aligners</option>
                        <option value="pediatric">Pediatric Dentistry</option>
                        <option value="emergency">Emergency Care</option>
                        <option value="filling">Cavity Filling</option>
                        <option value="crown">Crown or Bridge</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* New / Returning Patient Toggle */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Are you a new or returning patient?
                  </label>
                  <div className="flex rounded-xl border border-gray-200 overflow-hidden bg-[#faf8f5]">
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, isNewPatient: true })
                      }
                      className={`flex-1 py-3 text-sm font-medium transition-all duration-200 ${
                        formData.isNewPatient
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                      }`}
                    >
                      New Patient
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, isNewPatient: false })
                      }
                      className={`flex-1 py-3 text-sm font-medium transition-all duration-200 ${
                        !formData.isNewPatient
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                      }`}
                    >
                      Returning Patient
                    </button>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-200 bg-[#faf8f5] py-3 px-4 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200 resize-none"
                    placeholder="Any specific concerns, dental anxiety notes, or scheduling preferences..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/25 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 hover:scale-[1.01]"
                >
                  <Send className="h-4 w-4" />
                  Request Appointment
                </button>

                <p className="text-center text-xs text-gray-400">
                  This is a demo form — no data is submitted. Built by{" "}
                  <Link
                    href="/"
                    className="text-emerald-600 hover:underline underline-offset-2"
                  >
                    Helping Hands Systems
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Patient FAQ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Patient FAQ
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/80 border border-gray-200/60 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-sm leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-20 sm:py-28 bg-white/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
              Find Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Office Information
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Address */}
            <div className="rounded-2xl bg-white/80 border border-gray-200/60 p-6 shadow-sm text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100 mx-auto">
                <MapPin className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mt-4 text-sm font-bold text-gray-900">Address</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                742 Dental Avenue
                <br />
                Suite 200
                <br />
                Portland, OR 97201
              </p>
            </div>

            {/* Phone & Email */}
            <div className="rounded-2xl bg-white/80 border border-gray-200/60 p-6 shadow-sm text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100 mx-auto">
                <Phone className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mt-4 text-sm font-bold text-gray-900">Contact</h3>
              <div className="mt-2 space-y-1.5">
                <p className="text-sm text-gray-600">(555) 234-5678</p>
                <p className="text-sm text-gray-600">info@brightsmile.com</p>
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-2xl bg-white/80 border border-gray-200/60 p-6 shadow-sm text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100 mx-auto">
                <Clock className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mt-4 text-sm font-bold text-gray-900">
                Office Hours
              </h3>
              <div className="mt-2 space-y-1">
                {officeHours.map((oh) => (
                  <div
                    key={oh.day}
                    className="flex justify-between text-xs text-gray-600 gap-4"
                  >
                    <span className="font-medium">{oh.day}</span>
                    <span>{oh.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Parking */}
            <div className="rounded-2xl bg-white/80 border border-gray-200/60 p-6 shadow-sm text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100 mx-auto">
                <Car className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mt-4 text-sm font-bold text-gray-900">
                Parking & Access
              </h3>
              <div className="mt-2 space-y-1.5">
                <p className="text-sm text-gray-600">
                  Free parking in the building garage
                </p>
                <p className="text-sm text-gray-600">
                  Handicap accessible entrance
                </p>
                <p className="text-sm text-gray-600">
                  MAX light rail — Washington Park station (5 min walk)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200/60 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold text-gray-900">
                Bright Smile Dental
              </p>
              <p className="mt-1 text-xs text-gray-500">
                © {new Date().getFullYear()} Bright Smile Dental. All rights
                reserved.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <span>Demo built by</span>
              <Link
                href="/"
                className="font-medium text-emerald-600 hover:text-emerald-700 hover:underline underline-offset-2 transition-colors"
              >
                Helping Hands Systems
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Demo Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4">
        <div>
          <div className="mx-auto max-w-2xl rounded-2xl bg-gray-900/95 backdrop-blur-lg border border-gray-700/50 shadow-2xl shadow-black/20 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-gray-200 text-center sm:text-left font-medium">
              This is a live demo —{" "}
              <span className="text-emerald-400">
                Get This For Your Business
              </span>
            </p>
            <Link
              href="/payment?demo=medical"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-5 py-2 text-xs font-semibold text-white hover:bg-emerald-400 transition-all duration-200 hover:scale-105 whitespace-nowrap shadow-lg shadow-emerald-500/25"
            >
              <CreditCard className="h-3.5 w-3.5" />
              Get This Site
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom padding to account for floating banner */}
      <div className="h-24" />
    </div>
  );
}
