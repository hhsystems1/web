"use client";

import { motion } from 'framer-motion';

interface GlowProps {
  className?: string;
  color?: 'emerald' | 'blue' | 'lime';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
}

export default function Glow({
  className = '',
  color = 'emerald',
  size = 'md',
  animate = true
}: GlowProps) {
  const colorClasses = {
    emerald: 'bg-emerald-300/20',
    blue: 'bg-blue-300/20',
    lime: 'bg-lime-300/20',
  };

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64',
  };

  const glowColors = {
    emerald: 'rgba(80, 200, 120, 0.2)',
    blue: 'rgba(56, 181, 255, 0.2)',
    lime: 'rgba(163, 230, 53, 0.2)',
  };

  return (
    <motion.div
      animate={animate ? {
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2],
      } : {}}
      transition={animate ? {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      } : {}}
      className={`
        absolute rounded-full blur-3xl pointer-events-none
        ${colorClasses[color]}
        ${sizeClasses[size]}
        ${className}
      `}
      style={{
        boxShadow: `0 0 60px ${glowColors[color]}`,
      }}
    />
  );
}
