import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-hidden">
      <main className="flex-1 relative py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-pink-500/10 blur-3xl" />
          <div className="absolute top-40 right-16 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        <div className="container relative px-4 md:px-8 max-w-5xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <section className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.10)] p-6 md:p-10">
            <span className="inline-flex items-center rounded-full border border-pink-400/20 bg-pink-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-pink-400">
              Who we are
            </span>

            <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              About Cutiva
            </h1>

            <div className="mt-6 space-y-5 text-base md:text-lg leading-8 text-card-foreground/75">
              <p>
                Cutiva was built for people who want easier access to digital tools they actually use.
                Whether it is for creativity, learning, productivity, or entertainment, we believe premium
                services should feel more reachable and less complicated.
              </p>

              <p>
                We created this space to keep things simple. Instead of making the process confusing,
                our goal is to offer a straightforward way for customers to browse available accounts,
                ask questions, and order with confidence.
              </p>

              <p>
                More than anything, Cutiva focuses on convenience, clear communication, and a smoother
                overall experience. We value being responsive, approachable, and consistent so customers
                can feel at ease from their first message up to completed transactions.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}