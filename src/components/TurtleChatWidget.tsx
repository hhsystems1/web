"use client";

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

type ChatMessage = {
  role: 'assistant' | 'user';
  text: string;
};

const suggestedQuestions = [
  'What demos can I try?',
  'How does the booking flow work?',
  'How much does it cost?',
  'How do I get started?'
];

const answerLibrary = [
  {
    keywords: ['demo', 'try', 'example', 'template', 'restaurant', 'contractor', 'medical'],
    answer:
      'We have 3 live demos you can interact with right now — a restaurant site, a contractor site, and a medical office site. Each shows exactly what your business website could look like with booking, lead capture, and a dashboard.'
  },
  {
    keywords: ['booking', 'appointment', 'calendar', 'quote', 'follow-up', 'lead'],
    answer:
      'Every website includes built-in booking and quote request flows. Visitors can pick a time, submit a request, or send details — and you get organized lead info to follow up while they are still interested.'
  },
  {
    keywords: ['dashboard', 'track', 'analytics', 'data', 'visitor'],
    answer:
      'Each website comes with its own analytics dashboard. You can track page views, form submissions, bookings, lead sources, and conversion rates — all in one clean view.'
  },
  {
    keywords: ['start', 'price', 'cost', 'payment', 'how', 'begin'],
    answer:
      'Start by trying a live demo. When you find one you like, head to the payment page to choose your demo, upload your branding, and get started. The whole process is designed to be simple.'
  }
];

function getAnswer(input: string) {
  const normalized = input.toLowerCase();
  const match = answerLibrary.find((entry) => entry.keywords.some((keyword) => normalized.includes(keyword)));

  return match?.answer ??
    'HHS builds conversion-focused websites for local service businesses with live demos, lead capture, booking flows, and a built-in analytics dashboard. Try one of our demos to see what your site could look like!';
}

function TurtleCharacter({ compact = false }: { compact?: boolean }) {
  const size = compact ? 48 : 64;

  return (
    <div className={`relative ${compact ? 'h-12 w-12' : 'h-16 w-16'}`} aria-hidden="true">
      <div className="absolute inset-0 rounded-full bg-blue-200/40 blur-xl" />
      <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-blue-300/60 bg-white/80 shadow-lg shadow-blue-200/30">
        <Image
          src="/hhs-turdy-new.webp"
          alt=""
          width={size}
          height={size}
          className="turdy-bob-soft h-full w-full scale-[1.15] object-cover object-[50%_35%]"
          priority={false}
        />
      </div>
    </div>
  );
}

export default function TurtleChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      text: 'Hi, I\'m Turdy! Ask me about our live demos, booking flows, dashboard features, or how to get started.'
    }
  ]);

  const latestAssistantText = useMemo(
    () => [...messages].reverse().find((message) => message.role === 'assistant')?.text,
    [messages]
  );

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      { role: 'user', text: trimmed },
      { role: 'assistant', text: getAnswer(trimmed) }
    ]);
    setInput('');
    setIsOpen(true);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="w-[min(calc(100vw-2rem),390px)] overflow-hidden rounded-3xl border border-blue-200/40 bg-white/95 shadow-2xl shadow-blue-200/30 backdrop-blur-2xl">
          <div className="flex items-center gap-3 border-b border-gray-200/60 bg-blue-50/50 p-4">
            <TurtleCharacter compact />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Demo chat</p>
              <h2 className="text-lg font-bold text-gray-900">Ask Turdy</h2>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-gray-200 p-2 text-gray-400 transition hover:border-blue-300 hover:text-gray-700"
              aria-label="Close chat demo"
            >
              <X size={18} />
            </button>
          </div>

          <div className="max-h-[390px] space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  message.role === 'assistant'
                    ? 'mr-6 border border-blue-200/50 bg-blue-50 text-gray-800'
                    : 'ml-8 bg-gray-100 text-gray-800'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200/60 p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => sendMessage(question)}
                  className="rounded-full border border-blue-200/50 bg-blue-50 px-3 py-1.5 text-left text-xs font-medium text-blue-700 transition hover:border-blue-400 hover:bg-blue-100"
                >
                  {question}
                </button>
              ))}
            </div>

            <form
              className="flex gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage(input);
              }}
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about your website..."
                className="min-w-0 flex-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
              <button
                type="submit"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-lg shadow-blue-200/50 transition hover:scale-105"
                aria-label="Send chat message"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

      {!isOpen && latestAssistantText && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="hidden max-w-xs rounded-2xl border border-blue-200/50 bg-white/90 px-4 py-3 text-left text-sm text-gray-700 shadow-xl shadow-blue-200/30 backdrop-blur-xl transition hover:border-blue-300 md:block"
        >
          {latestAssistantText}
        </button>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="group flex items-center gap-3 rounded-full border border-blue-200/50 bg-white/90 p-2 pr-4 text-gray-700 shadow-2xl shadow-blue-200/30 backdrop-blur-xl transition hover:border-blue-300 hover:bg-blue-50"
        aria-label="Open Turdy chat demo"
      >
        <TurtleCharacter compact />
        <span className="hidden items-center gap-2 text-sm font-semibold md:inline-flex">
          <MessageCircle size={16} />
          Ask Turdy
        </span>
      </button>
    </div>
  );
}
