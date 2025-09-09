'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import Link from 'next/link'
import { Container } from './Container'
import { siteConfig } from '../site.config'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src={siteConfig.hero.videoPath} type="video/mp4" />
        </video>
        <div className="absolute inset-0 video-overlay" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {siteConfig.hero.headline}
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {siteConfig.hero.paragraph}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button asChild size="lg" className="btn-primary text-lg px-8 py-6">
              <Link href={siteConfig.hero.ctaHref}>
                {siteConfig.hero.ctaText}
              </Link>
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}
