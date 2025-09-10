"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check } from 'lucide-react';

interface PackageCardProps {
  name: string;
  price: string;
  features: string[];
  href: string;
  popular?: boolean;
  index: number;
}

export default function PackageCard({ name, price, features, href, popular = false, index }: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`relative p-8 rounded-2xl glass hover:shadow-xl transition-all duration-300 flex flex-col h-full ${
        popular ? 'ring-2 ring-primary-emerald glow' : 'hover:shadow-primary-blue/10'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg ring-2 ring-white/20 backdrop-blur-sm">
            ✨ Most Popular
          </span>
        </div>
      )}

      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <div className="text-4xl font-bold text-white mb-6">
          {price}
          {price !== 'Contact for price' && <span className="text-sm font-normal text-gray-400">/mo</span>}
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start space-x-3">
            <Check size={20} className="text-primary-emerald mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="text-center mt-auto">
        <Link
          href={href}
          className="btn btn-primary w-full justify-center"
        >
          View Package
        </Link>
      </div>
    </motion.div>
  );
}
