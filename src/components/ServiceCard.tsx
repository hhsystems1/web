"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.035, transition: { duration: 0.08 } }}
      className="group relative p-6 rounded-2xl glass hover:shadow-xl hover:shadow-emerald-200/40 transition-[box-shadow] duration-200 will-change-transform"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-blue-400 flex items-center justify-center mb-4 shadow-md shadow-emerald-200/50">
          <Icon size={24} className="text-white" />
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-500 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
