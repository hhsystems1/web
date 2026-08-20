"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function NavIsland() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/#demos', label: 'Demos' },
    { href: '/packages', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 p-2 sm:p-4">
        <div
          className="mx-auto max-w-fit px-4 py-3 sm:px-6 md:px-8 transition-all duration-500"
          style={{
            borderRadius: '9999px',
            backdropFilter: 'blur(24px)',
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            border: '1px solid rgba(56, 181, 255, 0.25)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 0 20px rgba(56, 181, 255, 0.08), 0 0 40px rgba(56, 181, 255, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
          }}
        >
          <div className="flex items-center justify-between w-full">
            <Link href="/" className="flex items-center hover:opacity-80 hover:scale-105 transition-all duration-300 flex-shrink-0 group" aria-label="Helping Hands Systems home">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full sm:h-14 sm:w-14">
                <Image
                  src="/hhs-logo-dark.webp"
                  alt="Helping Hands Systems logo"
                  width={112}
                  height={112}
                  className="h-full w-full rounded-full object-contain transition-all duration-300 group-hover:brightness-110"
                  priority
                />
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-700 hover:scale-105 transition-all duration-300 relative group font-medium text-base lg:text-lg whitespace-nowrap px-3 py-2 rounded-full hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-200/50"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-blue-300/40 transition-all duration-300"></div>
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700 p-2 hover:bg-blue-50 hover:text-blue-700 hover:scale-110 rounded-full transition-all duration-300 flex-shrink-0 hover:shadow-lg hover:shadow-blue-200/50"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col items-center justify-center min-h-screen space-y-6 px-4">
            {navItems.map((item, index) => (
              <div
                key={item.href}
                className="w-full max-w-xs"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center text-xl sm:text-2xl text-gray-800 hover:text-blue-700 hover:scale-105 transition-all duration-300 py-3 px-6 rounded-full hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-200/50 border border-transparent hover:border-blue-200/50"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
