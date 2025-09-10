"use client";

import { motion } from 'framer-motion';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

interface HeroVideoProps {
  videoId: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaAction: () => void;
}

export default function HeroVideo({ videoId, title, subtitle, ctaText, ctaAction }: HeroVideoProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <LiteYouTubeEmbed
            id={videoId}
            title="Helping Hands Systems Hero Video"
            poster="maxresdefault"
            noCookie={true}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-emerald/10 via-transparent to-primary-blue/10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
        >
          {subtitle}
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={ctaAction}
          className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-emerald to-primary-blue rounded-full hover:shadow-lg hover:shadow-primary-emerald/25 transition-all duration-300 transform hover:scale-105"
        >
          {ctaText}
        </motion.button>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-8 w-20 h-20 rounded-full bg-primary-emerald/20 blur-xl"
      />
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-8 w-32 h-32 rounded-full bg-primary-blue/20 blur-xl"
      />
    </section>
  );
}
