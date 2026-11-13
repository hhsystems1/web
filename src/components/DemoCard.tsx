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
      <div className="relative h-full overflow-hidden rounded-3xl border border-[#00702d]/25 bg-white shadow-xl shadow-[#00702d]/10 transition-all duration-300 group-hover:border-[#00702d]/50 group-hover:shadow-2xl group-hover:shadow-[#00702d]/20">
        <div className="flex h-48 items-center justify-center border-b border-[#00702d]/10 bg-[#e8f5ec]">
          <span className="flex h-24 w-24 items-center justify-center rounded-full bg-[#00702d] text-[#ecf87f] shadow-lg shadow-[#00702d]/30 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
            <Icon size={44} />
          </span>
        </div>

        <div className="p-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-[#00702d]/25 bg-[#e8f5ec] px-2.5 py-0.5 text-xs font-semibold text-[#00702d]">
              {meta.label}
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-[#00702d]">Live Demo</span>
          </div>

          <h3 className="mb-2 text-xl font-bold text-[#14261a]">{title}</h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">{description}</p>

          <div className="mb-5 flex flex-wrap gap-2">
            {features.map((feature) => (
              <span key={feature} className="inline-flex items-center rounded-md bg-[#e8f5ec] px-2 py-1 text-xs font-medium text-[#0a2e1c]">
                {feature}
              </span>
            ))}
          </div>

          <Link href={href} className="inline-flex items-center gap-2 rounded-full bg-[#00702d] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#005a24] hover:shadow-lg group-hover:scale-[1.02]">
            Try Live Demo
            <ExternalLink size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
