'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './ui/button'
import { siteConfig } from '../site.config'
import { Container } from './Container'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  // Transform values based on scroll
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1])
  const headerScale = useTransform(scrollY, [0, 100], [0.8, 1])
  const headerY = useTransform(scrollY, [0, 100], [-20, 0])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Invisible header at top for text visibility */}
      <div className="absolute top-0 left-0 right-0 z-40 pointer-events-none">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: scrolled ? 0 : 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-auto"
            >
              <Link 
                href="/" 
                className="text-xl font-bold text-white drop-shadow-lg hover:text-primary/80 transition-colors"
              >
                {siteConfig.name}
              </Link>
            </motion.div>

            {/* Desktop Navigation - Top */}
            <motion.nav 
              className="hidden md:flex items-center space-x-8 pointer-events-auto"
              animate={{ opacity: scrolled ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {siteConfig.nav.map((item: { name: string; href: string }, index: number) => (
                <motion.div
                  key={`top-${item.name}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: scrolled ? 0 : 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link 
                    href={item.href}
                    className="text-white/90 hover:text-primary transition-colors font-medium drop-shadow-lg"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* CTA Button - Top */}
            <motion.div
              animate={{ opacity: scrolled ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="hidden md:block pointer-events-auto"
            >
              <Button asChild className="btn-primary shadow-lg backdrop-blur-sm">
                <Link href="/contact">Get Started</Link>
              </Button>
            </motion.div>

            {/* Mobile Menu Button - Top */}
            <motion.button
              className="md:hidden p-2 text-white drop-shadow-lg pointer-events-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              animate={{ opacity: scrolled ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </Container>
      </div>

      {/* Floating Island Header */}
      <motion.header
        className="fixed top-4 left-1/2 z-50 pointer-events-none"
        style={{
          opacity: headerOpacity,
          scale: headerScale,
          y: headerY,
          x: "-50%",
        }}
      >
        <motion.div
          className="floating-island pointer-events-auto"
          initial={{ width: "auto" }}
          animate={{ 
            width: scrolled ? "auto" : "auto",
          }}
          transition={{ 
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <div className="px-6 py-3">
            <div className="flex items-center justify-between gap-8">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Link 
                  href="/" 
                  className="text-lg font-bold text-primary hover:text-primary/80 transition-colors whitespace-nowrap"
                >
                  {siteConfig.name}
                </Link>
              </motion.div>

              {/* Desktop Navigation - Floating */}
              <motion.nav 
                className="hidden lg:flex items-center space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {siteConfig.nav.map((item: { name: string; href: string }, index: number) => (
                  <motion.div
                    key={`floating-${item.name}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  >
                    <Link 
                      href={item.href}
                      className="text-foreground/80 hover:text-primary transition-colors font-medium whitespace-nowrap text-sm"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* CTA Button - Floating */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="hidden md:block"
              >
                <Button asChild size="sm" className="btn-primary whitespace-nowrap">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </motion.div>

              {/* Mobile Menu Button - Floating */}
              <button
                className="md:hidden p-1.5 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[280px]"
          >
            <div className="floating-island p-6">
              <div className="flex flex-col space-y-4">
                {siteConfig.nav.map((item: { name: string; href: string }, index: number) => (
                  <motion.div
                    key={`mobile-${item.name}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="text-foreground/80 hover:text-primary transition-colors font-medium block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="pt-4 border-t border-border"
                >
                  <Button asChild className="btn-primary w-full">
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </>
  )
}
