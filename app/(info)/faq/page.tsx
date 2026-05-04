'use client';

import { useState } from 'react';
import { InfoPageLayout } from '@/components/layout/InfoPageLayout';
import { BackToHome } from '@/components/ui/BackToHome';

const faqs = [
  {
    question: 'How do I order?',
    answer:
      'Simply browse our collection, select the product and plan you want, and message us on Facebook or Telegram. We will confirm the price and details before processing your payment.',
  },
  {
    question: 'How long is delivery?',
    answer:
      'Most orders are delivered within 24 hours of confirming payment. You will receive your account details via your preferred messaging platform.',
  },
  {
    question: 'Is this safe?',
    answer:
      'Yes, we prioritize your security and privacy. All transactions are handled securely, and your personal information is kept confidential.',
  },
  {
    question: 'What if the account stops working?',
    answer:
      'If you experience any issues with your account, please contact us immediately. Our support team will assist you with a replacement or solution based on our policies.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <InfoPageLayout>
      <BackToHome />

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.10)] backdrop-blur-sm md:p-10">
        <span className="inline-flex items-center rounded-full border border-pink-400/20 bg-pink-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-pink-400">
          Help
        </span>

        <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Frequently Asked Questions
        </h1>

        <p className="mt-4 text-base text-card-foreground/70 md:text-lg">
          Here are some common questions about ordering, delivery, and support.
        </p>

        <div className="mt-8 space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-xl border border-white/10 bg-background/60 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex w-full items-center justify-between px-5 py-4 transition hover:bg-white/5"
              >
                <h3 className="text-left text-base font-medium md:text-lg">
                  {faq.question}
                </h3>

                <svg
                  className={`h-5 w-5 text-accent transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 text-sm leading-relaxed text-card-foreground/75 md:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </InfoPageLayout>
  );
}