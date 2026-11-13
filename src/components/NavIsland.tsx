"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function NavIsland() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/#demos', label: 'Demos' },
    { href: '/packages', label: 'The Product' },
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
            backgroundColor: 'rgba(8, 31, 19, 0.82)',
            border: '1px solid rgba(80, 200, 120, 0.35)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.28), 0 0 20px rgba(0, 112, 45, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
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
                  className="text-[#e8f5ec] hover:text-[#ecf87f] hover:scale-105 transition-all duration-300 relative group font-medium text-base lg:text-lg whitespace-nowrap px-3 py-2 rounded-full hover:bg-white/10 hover:shadow-lg"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-[#ecf87f] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#e8f5ec] p-2 hover:bg-white/10 hover:text-[#ecf87f] hover:scale-110 rounded-full transition-all duration-300 flex-shrink-0"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#081f13]/95 backdrop-blur-xl md:hidden animate-in fade-in duration-200">
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
                  className="block text-center text-xl sm:text-2xl text-[#e8f5ec] hover:text-[#ecf87f] hover:scale-105 transition-all duration-300 py-3 px-6 rounded-full hover:bg-white/10 border border-transparent hover:border-[#50c878]/40"
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
