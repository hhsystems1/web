"use client";

import { Suspense, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import NavIsland from "@/components/NavIsland";
import Section from "@/components/Section";

const DEMOS = [
  {
    id: "restaurant",
    label: "Restaurant",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12" />
      </svg>
    ),
    description: "Menus, reservations, online ordering",
  },
  {
    id: "contractor",
    label: "Contractor",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    description: "Projects, quotes, scheduling",
  },
  {
    id: "medical",
    label: "Medical",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    description: "Appointments, services, trust",
  },
];

const PALETTES = [
  {
    id: "classic-green",
    label: "Classic Green",
    colors: ["#2563eb", "#38b5ff", "#60a5fa", "#dbeafe"],
  },
  {
    id: "ocean-blue",
    label: "Ocean Blue",
    colors: ["#2563eb", "#3b82f6", "#60a5fa", "#dbeafe"],
  },
  {
    id: "warm-sunset",
    label: "Warm Sunset",
    colors: ["#ea580c", "#f97316", "#fb923c", "#ffedd5"],
  },
  {
    id: "royal-purple",
    label: "Royal Purple",
    colors: ["#7c3aed", "#8b5cf6", "#a78bfa", "#ede9fe"],
  },
];

function PaymentPageInner() {
  const searchParams = useSearchParams();
  const initialDemo = searchParams.get("demo") || "restaurant";

  const [step, setStep] = useState(1);
  const [selectedDemo, setSelectedDemo] = useState(initialDemo);
  const [selectedPalette, setSelectedPalette] = useState("classic-green");
  const [companyName, setCompanyName] = useState("");
  const [oldSiteUrl, setOldSiteUrl] = useState("");
  const [domain, setDomain] = useState("");

  const steps = [
    { num: 1, label: "Choose Demo" },
    { num: 2, label: "Your Branding" },
    { num: 3, label: "Domain" },
    { num: 4, label: "Review & Pay" },
  ];

  const selectedPaletteData = useMemo(
    () => PALETTES.find((p) => p.id === selectedPalette),
    [selectedPalette]
  );

  const selectedDemoData = useMemo(
    () => DEMOS.find((d) => d.id === selectedDemo),
    [selectedDemo]
  );

  const canProceed = useMemo(() => {
    if (step === 1) return true;
    if (step === 2) return companyName.trim().length > 0;
    if (step === 3) return domain.trim().length > 0;
    return true;
  }, [step, companyName, domain]);

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <NavIsland />

      <Section>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-2">
              Customize Your Website
            </h1>
            <p className="text-gray-500 text-center mb-10">
              Configure your site in a few simple steps
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-12 max-w-lg mx-auto">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => s.num < step && setStep(s.num)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                      step === s.num
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                        : step > s.num
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {step > s.num ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    ) : (
                      s.num
                    )}
                  </button>
                  <span className="text-xs text-gray-500 mt-2 whitespace-nowrap hidden sm:block">
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-12 sm:w-20 h-0.5 mx-2 mb-5">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        step > s.num ? "bg-blue-400" : "bg-gray-200"
                      }`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">
                Choose Your Industry
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Select the template that best fits your business
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {DEMOS.map((demo) => (
                  <button
                    key={demo.id}
                    onClick={() => setSelectedDemo(demo.id)}
                    className={`relative p-6 rounded-xl border-2 text-left transition-all duration-200 ${
                      selectedDemo === demo.id
                        ? "border-blue-500 bg-blue-50/50 shadow-md shadow-blue-100"
                        : "border-gray-200/60 bg-white/80 hover:border-gray-300 hover:shadow-sm"
                    }`}
                  >
                    {selectedDemo === demo.id && (
                      <div className="absolute top-3 right-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </div>
                    )}
                    <div className={`mb-3 ${
                      selectedDemo === demo.id ? "text-blue-600" : "text-gray-400"
                    }`}>
                      {demo.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{demo.label}</h3>
                    <p className="text-sm text-gray-500">{demo.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                  Your Branding
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Make it match your brand identity
                </p>

                {/* Company Name */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Acme Inc."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200/60 bg-white/80 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                  />
                </div>

                {/* Color Palette */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Color Palette
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {PALETTES.map((palette) => (
                      <button
                        key={palette.id}
                        onClick={() => setSelectedPalette(palette.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          selectedPalette === palette.id
                            ? "border-blue-500 bg-blue-50/50 shadow-md shadow-blue-100"
                            : "border-gray-200/60 bg-white/80 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex gap-1">
                            {palette.colors.map((color, i) => (
                              <div
                                key={i}
                                className="w-6 h-6 rounded-full border border-gray-200/50"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            {palette.label}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Logo Upload */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Logo
                  </label>
                  <div className="relative">
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors bg-white/60">
                      <svg className="w-10 h-10 mx-auto text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                      </svg>
                      <p className="text-sm text-gray-500 mb-1">
                        Drag and drop your logo here
                      </p>
                      <p className="text-xs text-gray-400">
                        PNG, JPG, SVG up to 5MB
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Company Pictures Upload */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Pictures
                  </label>
                  <div className="relative">
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors bg-white/60">
                      <svg className="w-10 h-10 mx-auto text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                      </svg>
                      <p className="text-sm text-gray-500 mb-1">
                        Drag and drop photos of your business
                      </p>
                      <p className="text-xs text-gray-400">
                        Upload up to 10 images, PNG or JPG
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Old Site URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Old Website URL{" "}
                    <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="url"
                    value={oldSiteUrl}
                    onChange={(e) => setOldSiteUrl(e.target.value)}
                    placeholder="https://your-current-site.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200/60 bg-white/80 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                  />
                  <p className="text-xs text-gray-400 mt-1.5">
                    We can reference your existing site for content and structure
                  </p>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">
                Choose Your Domain
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Pick the web address where customers will find you
              </p>

              <div className="bg-white/80 border border-gray-200/60 rounded-xl p-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Domain Name
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))}
                    placeholder="yourbusiness"
                    className="flex-1 px-4 py-3 rounded-l-xl border border-r-0 border-gray-200/60 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                  />
                  <div className="px-4 py-3 bg-gray-50 border border-gray-200/60 rounded-r-xl text-gray-600 font-medium text-sm">
                    .com
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  If your desired domain is taken, we&apos;ll help you find a great alternative.
                </p>
              </div>

              <div className="mt-6 bg-blue-50/50 border border-blue-200/60 rounded-xl p-5">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>
                  <div>
                    <h4 className="text-sm font-medium text-blue-800 mb-1">
                      Domain Setup Included
                    </h4>
                    <p className="text-xs text-blue-700/80 leading-relaxed">
                      We&apos;ll register your domain, configure DNS, set up SSL
                      certificates, and connect everything to your new website.
                      This process typically takes 24-48 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">
                Review & Pay
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Confirm everything looks good before we build your site
              </p>

              <div className="bg-white/80 border border-gray-200/60 rounded-xl overflow-hidden mb-6">
                {/* Summary Items */}
                <div className="divide-y divide-gray-100">
                  <div className="flex items-center justify-between p-5">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Template</p>
                      <p className="text-sm font-medium text-gray-900">{selectedDemoData?.label}</p>
                    </div>
                    <button
                      onClick={() => setStep(1)}
                      className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Change
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-5">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Company</p>
                      <p className="text-sm font-medium text-gray-900">
                        {companyName || "—"}
                      </p>
                    </div>
                    <button
                      onClick={() => setStep(2)}
                      className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Change
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-5">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Color Palette</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex gap-0.5">
                          {selectedPaletteData?.colors.map((color, i) => (
                            <div
                              key={i}
                              className="w-4 h-4 rounded-full border border-gray-200/50"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {selectedPaletteData?.label}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setStep(2)}
                      className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Change
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-5">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Domain</p>
                      <p className="text-sm font-medium text-gray-900">
                        {domain ? `${domain}.com` : "—"}
                      </p>
                    </div>
                    <button
                      onClick={() => setStep(3)}
                      className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Change
                    </button>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="bg-white/80 border border-gray-200/60 rounded-xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-sm text-gray-500">Monthly Subscription</p>
                    <p className="text-xs text-gray-400 mt-0.5">Cancel anytime, free migration</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-gray-900">
                      $197<span className="text-lg font-normal text-gray-400">/mo</span>
                    </p>
                  </div>
                </div>

                <a
                  href="#"
                  className="block w-full text-center py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all"
                >
                  Proceed to Stripe Checkout
                </a>

                <p className="text-xs text-gray-400 text-center mt-3">
                  Secure payment powered by Stripe. Your card will be charged monthly.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          {step < 4 && (
            <div className="flex justify-between mt-10">
              <button
                onClick={() => step > 1 && setStep(step - 1)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  step > 1
                    ? "text-gray-700 bg-white/80 border border-gray-200/60 hover:bg-gray-50"
                    : "text-gray-300 cursor-not-allowed"
                }`}
                disabled={step === 1}
              >
                Back
              </button>

              <button
                onClick={() => canProceed && setStep(step + 1)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  canProceed
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-200 hover:shadow-lg"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
                disabled={!canProceed}
              >
                Continue
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="flex justify-start mt-10">
              <button
                onClick={() => setStep(3)}
                className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-700 bg-white/80 border border-gray-200/60 hover:bg-gray-50 transition-all"
              >
                Back
              </button>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center">
          <div className="text-gray-400">Loading...</div>
        </div>
      }
    >
      <PaymentPageInner />
    </Suspense>
  );
}
