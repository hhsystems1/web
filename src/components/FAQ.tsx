"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({ items, title = "Frequently Asked Questions" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-white text-center mb-12">{title}</h2>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <span className="font-semibold text-white pr-4">{item.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Plus size={20} className="text-primary-emerald flex-shrink-0" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
