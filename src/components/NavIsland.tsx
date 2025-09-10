"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function NavIsland() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/#services', label: 'Services' },
    { href: '/#packages', label: 'Packages' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          y: isScrolled ? 8 : 0,
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'p-4' : 'p-0'
        }`}
      >
        <motion.div
          animate={{
            borderRadius: isScrolled ? '9999px' : '0px',
            backdropFilter: isScrolled ? 'blur(24px)' : 'blur(0px)',
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
            border: isScrolled ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid transparent',
            boxShadow: isScrolled 
              ? '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)' 
              : 'none',
          }}
          className={`mx-auto max-w-7xl px-6 py-4 transition-all duration-500 ${
            isScrolled ? 'max-w-fit' : ''
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <Image
                src="/mettalic letters logo.png"
                alt="HHS Logo"
                width={60}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-emerald transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl text-white hover:text-primary-emerald transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
