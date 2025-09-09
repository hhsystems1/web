'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { siteConfig } from '../site.config'
import { Container } from './Container'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                href="/" 
                className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                {siteConfig.name}
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {siteConfig.nav.map((item: { name: string; href: string }, index: number) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link 
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden md:block"
            >
              <Button asChild className="btn-primary">
                <Link href="/contact">Get Started</Link>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-border"
            >
              <div className="flex flex-col space-y-4">
                {siteConfig.nav.map((item: { name: string; href: string }) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="btn-primary w-fit">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </motion.nav>
          )}
        </Container>
      </div>
    </header>
  )
}
