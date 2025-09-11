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
          isScrolled ? 'p-2 sm:p-4' : 'p-0'
        }`}
      >
        <motion.div
          animate={{
            borderRadius: isScrolled ? '9999px' : '0px',
            backdropFilter: isScrolled ? 'blur(24px)' : 'blur(8px)',
            backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.8)' : 'rgba(15, 23, 42, 0.6)',
            border: isScrolled ? '1px solid rgba(52, 211, 153, 0.3)' : '1px solid rgba(52, 211, 153, 0.1)',
            boxShadow: isScrolled 
              ? '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(52, 211, 153, 0.1)' 
              : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
          className={`mx-auto transition-all duration-500 ${
            isScrolled 
              ? 'max-w-fit px-4 sm:px-6 md:px-8 py-3' 
              : 'max-w-7xl px-4 sm:px-6 md:px-8 py-4 sm:py-6'
          }`}
        >
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center hover:opacity-80 hover:scale-105 transition-all duration-300 flex-shrink-0 group">
              <Image
                src="/mettalic letters logo.png"
                alt="HHS Logo"
                width={80}
                height={50}
                className="h-8 sm:h-10 w-auto filter group-hover:brightness-110 transition-all duration-300"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/90 hover:text-white hover:scale-105 transition-all duration-300 relative group font-medium text-base lg:text-lg whitespace-nowrap px-3 py-2 rounded-full hover:bg-primary-emerald/10 hover:shadow-lg hover:shadow-primary-emerald/20"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-primary-emerald to-primary-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-primary-emerald/30 transition-all duration-300"></div>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-primary-emerald/20 hover:text-primary-emerald hover:scale-110 rounded-full transition-all duration-300 flex-shrink-0 hover:shadow-lg hover:shadow-primary-emerald/25"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
            <div className="flex flex-col items-center justify-center min-h-screen space-y-6 px-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full max-w-xs"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center text-xl sm:text-2xl text-white hover:text-primary-emerald hover:scale-105 transition-all duration-300 py-3 px-6 rounded-full hover:bg-primary-emerald/10 hover:shadow-lg hover:shadow-primary-emerald/20 border border-transparent hover:border-primary-emerald/30"
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
