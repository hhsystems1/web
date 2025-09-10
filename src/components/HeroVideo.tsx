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
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-grid px-6 pt-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-800/40 to-slate-900/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-emerald/10 via-transparent to-primary-blue/10" />

      {/* Content - Headline and paragraph */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 mb-0 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Video Container - Smaller size */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 w-full max-w-3xl mx-auto mb-8"
      >
        <div className="video-container aspect-video rounded-2xl overflow-hidden">
          <LiteYouTubeEmbed
            id={videoId}
            title="Helping Hands Systems Hero Video"
            poster="maxresdefault"
            noCookie={true}
          />
        </div>
      </motion.div>

      {/* CTA Button - Now below video */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 text-center"
      >
        <button
          onClick={ctaAction}
          className="btn btn-primary"
        >
          {ctaText}
        </button>
      </motion.div>

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
