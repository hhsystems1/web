"use client";

import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface FormPlaceholderProps {
  title: string;
  description: string;
  buttonText: string;
}

export default function FormPlaceholder({ title, description, buttonText }: FormPlaceholderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto p-8 glass rounded-2xl"
    >
      {/* TODO Notice */}
      <div className="flex items-center space-x-2 mb-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
        <AlertCircle size={20} className="text-yellow-500 flex-shrink-0" />
        <p className="text-yellow-200 text-sm">
          <strong>TODO:</strong> Replace this placeholder with the actual form integration
        </p>
      </div>

      {/* Form Content */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>

      {/* Mock Form */}
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary-emerald focus:ring-1 focus:ring-primary-emerald transition-colors"
            placeholder="Enter your full name"
            disabled
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary-emerald focus:ring-1 focus:ring-primary-emerald transition-colors"
            placeholder="Enter your email"
            disabled
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary-emerald focus:ring-1 focus:ring-primary-emerald transition-colors"
            placeholder="Enter your phone number"
            disabled
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary-emerald focus:ring-1 focus:ring-primary-emerald transition-colors resize-none"
            placeholder="Tell us about your project..."
            disabled
          />
        </div>

        <button
          type="button"
          className="w-full px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-primary-emerald to-primary-blue rounded-full opacity-50 cursor-not-allowed"
          disabled
        >
          {buttonText}
        </button>
      </form>

      <p className="text-center text-gray-500 text-sm mt-4">
        This form will be connected to your preferred form handling service
      </p>
    </motion.div>
  );
}
