'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Footer } from '@/components/layout/Footer';

const faqs = [
  {
    question: 'How do I order?',
    answer: 'Simply browse our collection, select the product and plan you want, and message us on Facebook or Telegram. We will confirm the price and details before processing your payment.'
  },
  {
    question: 'How long is delivery?',
    answer: 'Most orders are delivered within 24 hours of confirming payment. You will receive your account details via your preferred messaging platform.'
  },
  {
    question: 'Is this safe?',
    answer: 'Yes, we prioritize your security and privacy. All transactions are handled securely, and your personal information is kept confidential.'
  },
  {
    question: 'What if the account stops working?',
    answer: 'If you experience any issues with your account, please contact us immediately. Our support team will assist you with a replacement or solution based on our policies.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-hidden">
      <main className="flex-1 relative py-16 md:py-24">

        {/* background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-pink-500/10 blur-3xl" />
          <div className="absolute top-40 right-16 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        <div className="container relative px-4 md:px-8 max-w-3xl mx-auto">

          {/* back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          {/* container */}
          <section className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.10)] p-6 md:p-10">

            <span className="inline-flex items-center rounded-full border border-pink-400/20 bg-pink-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-pink-400">
              Help
            </span>

            <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Frequently Asked Questions
            </h1>

            <p className="mt-4 text-base md:text-lg text-card-foreground/70">
              Here are some common questions about ordering, delivery, and support.
            </p>

            {/* accordion */}
            <div className="mt-8 space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-background/60 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full px-5 py-4 flex items-center justify-between hover:bg-white/5 transition"
                  >
                    <h3 className="text-base md:text-lg font-medium text-left">
                      {faq.question}
                    </h3>

                    <svg
                      className={`w-5 h-5 text-accent transition-transform ${
                        openIndex === idx ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>

                  {openIndex === idx && (
                    <div className="px-5 pb-5 text-sm md:text-base text-card-foreground/75 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}