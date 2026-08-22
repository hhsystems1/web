"use client";

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

type Industry = 'restaurant' | 'contractor' | 'medical';

interface DemoCardProps {
  industry: Industry;
  title: string;
  description: string;
  features: string[];
  href: string;
  index: number;
}

const neonStyles: Record<Industry, { border: string; shadow: string; badge: string; badgeText: string }> = {
  restaurant: {
    border: 'border-blue-400/70',
    shadow: '0 0 20px rgba(56, 181, 255, 0.3), 0 0 40px rgba(56, 181, 255, 0.1)',
    badge: 'bg-blue-500/10 border-blue-400/30',
    badgeText: 'text-blue-700',
  },
  contractor: {
    border: 'border-amber-400/70',
    shadow: '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1)',
    badge: 'bg-blue-500/10 border-blue-400/30',
    badgeText: 'text-blue-700',
  },
  medical: {
    border: 'border-purple-400/70',
    shadow: '0 0 20px rgba(168, 85, 247, 0.3), 0 0 40px rgba(168, 85, 247, 0.1)',
    badge: 'bg-purple-500/10 border-purple-400/30',
    badgeText: 'text-purple-700',
  },
};

const eclipseHues: Record<Industry, string> = {
  restaurant: 'eclipse-blue',
  contractor: 'eclipse-gold',
  medical: 'eclipse-purple',
};

const industryLabels: Record<Industry, string> = {
  restaurant: 'Restaurant & Cafe',
  contractor: 'Contractor',
  medical: 'Medical & Dental',
};

const industryPlaceholders: Record<Industry, { gradient: string; icon: string }> = {
  restaurant: { gradient: 'from-blue-500/20 to-amber-500/10', icon: '🍽️' },
  contractor: { gradient: 'from-blue-500/20 to-cyan-500/10', icon: '🔨' },
  medical: { gradient: 'from-purple-500/20 to-pink-500/10', icon: '🏥' },
};

export default function DemoCard({ industry, title, description, features, href, index }: DemoCardProps) {
  const style = neonStyles[industry];
  const placeholder = industryPlaceholders[industry];
  const eclipseHue = eclipseHues[industry];

  return (
    <div
      className={`eclipse-border ${eclipseHue} fade-in-up group relative rounded-2xl`}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div
        className={`relative h-full overflow-hidden rounded-2xl border ${style.border} bg-white/80 backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl`}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = style.shadow; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = undefined; }}
      >
        <div className={`h-48 bg-gradient-to-br ${placeholder.gradient} flex items-center justify-center border-b border-gray-200/50`}>
          <span className="text-6xl opacity-60 group-hover:scale-110 transition-transform duration-300">{placeholder.icon}</span>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${style.badge} ${style.badgeText}`}>
              {industryLabels[industry]}
            </span>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Live Demo</span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {features.map((feature) => (
              <span key={feature} className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                {feature}
              </span>
            ))}
          </div>

          <Link href={href} className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg group-hover:scale-[1.02]">
            Try Live Demo
            <ExternalLink size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
