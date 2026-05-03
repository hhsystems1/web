"use client";

import { useMemo, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

type ChatMessage = {
  role: 'assistant' | 'user';
  text: string;
};

const suggestedQuestions = [
  'What web bundle should I start with?',
  'Can you help with booking and follow-up?',
  'How does the AI assistant work?',
  'How do I get a free demo?'
];

const answerLibrary = [
  {
    keywords: ['bundle', 'package', 'start', 'website', 'web'],
    answer:
      'Most local businesses should start with the Booking Growth Web Bundle if they want calls, quote requests, or appointments. Starter is best for a clean first site. Customer System adds AI-assisted intake and follow-up handoffs.'
  },
  {
    keywords: ['booking', 'appointment', 'calendar', 'quote', 'follow-up', 'follow up', 'lead'],
    answer:
      'Yes. HHS can build a website path that helps visitors request a quote, book time, or send the details you need. The goal is to make the next step obvious and get the owner a cleaner lead to follow up with.'
  },
  {
    keywords: ['ai', 'assistant', 'agent', 'chat', 'turtle', 'hermes', 'openclaw'],
    answer:
      'The AI assistant can answer common questions, guide visitors toward the right next step, collect basic intake details, and prepare an owner-ready handoff. For live customers, HHS scopes the assistant around approved business info and safe handoff rules.'
  },
  {
    keywords: ['demo', 'free', 'call', 'contact', 'price', 'cost'],
    answer:
      'You can request a free demo direction through the contact form. HHS can map what your website, booking path, and assistant flow could look like before you commit to a full build.'
  }
];

function getAnswer(input: string) {
  const normalized = input.toLowerCase();
  const match = answerLibrary.find((entry) => entry.keywords.some((keyword) => normalized.includes(keyword)));

  return match?.answer ??
    'Great question. HHS helps local businesses turn websites into clearer customer paths with better trust, quote requests, booking flows, and AI-assisted follow-up. If you share what kind of business you run, I can point you toward the best web bundle.';
}

function TurtleCharacter({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative ${compact ? 'h-12 w-12' : 'h-16 w-16'}`} aria-hidden="true">
      <div className="absolute inset-0 rounded-full bg-primary-emerald/25 blur-xl" />
      <svg viewBox="0 0 120 120" className="relative h-full w-full drop-shadow-[0_0_18px_rgba(52,211,153,0.42)]">
        <circle cx="60" cy="64" r="36" fill="#134e4a" stroke="#34d399" strokeWidth="5" />
        <path d="M36 58c10-18 38-23 58-3-8 19-41 28-58 3Z" fill="#10b981" opacity="0.85" />
        <circle cx="60" cy="64" r="18" fill="#0f766e" stroke="#a7f3d0" strokeWidth="3" opacity="0.85" />
        <circle cx="60" cy="24" r="18" fill="#34d399" stroke="#bbf7d0" strokeWidth="4" />
        <circle cx="53" cy="21" r="3" fill="#052e2b" />
        <circle cx="67" cy="21" r="3" fill="#052e2b" />
        <path d="M53 31c5 5 10 5 15 0" stroke="#052e2b" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="24" cy="62" r="10" fill="#34d399" stroke="#bbf7d0" strokeWidth="3" />
        <circle cx="96" cy="62" r="10" fill="#34d399" stroke="#bbf7d0" strokeWidth="3" />
        <circle cx="38" cy="100" r="10" fill="#34d399" stroke="#bbf7d0" strokeWidth="3" />
        <circle cx="82" cy="100" r="10" fill="#34d399" stroke="#bbf7d0" strokeWidth="3" />
      </svg>
    </div>
  );
}

export default function TurtleChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      text: 'Hi, I’m the HHS turtle demo assistant. Ask me about web bundles, booking flows, AI assistant setup, or getting a free demo.'
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
        <div className="w-[min(calc(100vw-2rem),390px)] overflow-hidden rounded-3xl border border-primary-emerald/30 bg-black/90 shadow-2xl shadow-primary-emerald/20 backdrop-blur-2xl">
          <div className="flex items-center gap-3 border-b border-white/10 bg-white/5 p-4">
            <TurtleCharacter compact />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-lime">Demo chat</p>
              <h2 className="text-lg font-bold text-white">Ask the HHS Turtle</h2>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-white/10 p-2 text-gray-300 transition hover:border-primary-emerald/50 hover:text-white"
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
                    ? 'mr-6 border border-primary-emerald/20 bg-primary-emerald/10 text-emerald-50'
                    : 'ml-8 bg-white/10 text-white'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => sendMessage(question)}
                  className="rounded-full border border-primary-emerald/25 bg-primary-emerald/10 px-3 py-1.5 text-left text-xs font-medium text-emerald-50 transition hover:border-primary-emerald/60 hover:bg-primary-emerald/20"
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
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-primary-emerald/60"
              />
              <button
                type="submit"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-primary-emerald to-primary-blue text-white shadow-lg shadow-primary-emerald/20 transition hover:scale-105"
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
          className="hidden max-w-xs rounded-2xl border border-primary-emerald/25 bg-black/80 px-4 py-3 text-left text-sm text-emerald-50 shadow-xl shadow-black/40 backdrop-blur-xl transition hover:border-primary-emerald/60 md:block"
        >
          {latestAssistantText}
        </button>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="group flex items-center gap-3 rounded-full border border-primary-emerald/35 bg-black/85 p-2 pr-4 text-white shadow-2xl shadow-primary-emerald/20 backdrop-blur-xl transition hover:border-primary-emerald/70 hover:bg-primary-emerald/15"
        aria-label="Open HHS turtle chat demo"
      >
        <TurtleCharacter compact />
        <span className="hidden items-center gap-2 text-sm font-semibold md:inline-flex">
          <MessageCircle size={16} />
          Ask Turtle
        </span>
      </button>
    </div>
  );
}
