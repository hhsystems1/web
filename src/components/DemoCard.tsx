"use client";

import Link from 'next/link';
import { ExternalLink, Hammer, Stethoscope, UtensilsCrossed } from 'lucide-react';

type Industry = 'restaurant' | 'contractor' | 'medical';

interface DemoCardProps {
  industry: Industry;
  title: string;
  description: string;
  features: string[];
  href: string;
  index: number;
}

const industryMeta: Record<Industry, { icon: typeof Hammer; label: string }> = {
  restaurant: { icon: UtensilsCrossed, label: 'Restaurant & Cafe' },
  contractor: { icon: Hammer, label: 'Contractor' },
  medical: { icon: Stethoscope, label: 'Medical & Dental' },
};

export default function DemoCard({ industry, title, description, features, href, index }: DemoCardProps) {
  const meta = industryMeta[industry];
  const Icon = meta.icon;

  return (
    <div className={`arc-card arc-card-${index} group relative rounded-3xl`}>
      <div className="relative h-full overflow-hidden rounded-3xl border border-[#1f4bff]/25 bg-white shadow-xl shadow-[#1f4bff]/10 transition-all duration-300 group-hover:border-[#1f4bff]/50 group-hover:shadow-2xl group-hover:shadow-[#1f4bff]/20">
        <div className="flex h-48 items-center justify-center border-b border-[#1f4bff]/10 bg-[#1f4bff14]">
          <span className="flex h-24 w-24 items-center justify-center rounded-full bg-[#1f4bff] text-white shadow-lg shadow-[#1f4bff]/30 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
            <Icon size={44} />
          </span>
        </div>

        <div className="p-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-[#1f4bff]/25 bg-[#1f4bff14] px-2.5 py-0.5 text-xs font-semibold text-[#1f4bff]">
              {meta.label}
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-[#1f4bff]">Live Demo</span>
          </div>

          <h3 className="mb-2 text-xl font-bold text-[#0c0d10]">{title}</h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">{description}</p>

          <div className="mb-5 flex flex-wrap gap-2">
            {features.map((feature) => (
              <span key={feature} className="inline-flex items-center rounded-md bg-[#1f4bff14] px-2 py-1 text-xs font-medium text-[#0c0d10]">
                {feature}
              </span>
            ))}
          </div>

          <Link href={href} className="inline-flex items-center gap-2 rounded-full bg-[#1f4bff] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1a3fd6] hover:shadow-lg group-hover:scale-[1.02]">
            Try Live Demo
            <ExternalLink size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
