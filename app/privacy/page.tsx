import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-hidden">
      <main className="flex-1 relative py-16 md:py-24">
        
        {/* background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-pink-500/10 blur-3xl" />
          <div className="absolute top-40 right-16 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        <div className="container relative px-4 md:px-8 max-w-3xl mx-auto">
          
          {/* back */}
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
              Privacy
            </span>

            <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Privacy Policy
            </h1>

            <p className="mt-4 text-base md:text-lg text-card-foreground/70 leading-8">
              Your privacy matters to us. This page explains how your information is handled when you interact with Cutiva.
            </p>

            {/* sections */}
            <div className="mt-8 space-y-6">
              
              <div className="rounded-2xl border border-white/10 bg-background/60 p-5">
                <h2 className="text-lg font-semibold text-foreground">Information We Collect</h2>
                <p className="mt-2 text-sm md:text-base leading-7 text-card-foreground/75">
                  We only collect the information necessary to process your order and communicate with you.
                  This may include your name, messaging account, and order details.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-background/60 p-5">
                <h2 className="text-lg font-semibold text-foreground">How We Use Information</h2>
                <p className="mt-2 text-sm md:text-base leading-7 text-card-foreground/75">
                  Your information is used strictly for order processing, updates, and customer support.
                  We do not use your data for unrelated purposes.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-background/60 p-5">
                <h2 className="text-lg font-semibold text-foreground">Data Protection</h2>
                <p className="mt-2 text-sm md:text-base leading-7 text-card-foreground/75">
                  We take reasonable steps to keep your information secure and limit access only to what is necessary
                  for handling transactions.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-background/60 p-5">
                <h2 className="text-lg font-semibold text-foreground">No Third-Party Sharing</h2>
                <p className="mt-2 text-sm md:text-base leading-7 text-card-foreground/75">
                  We do not sell, trade, or share your personal information with third parties.
                  Your data stays private and is only used within Cutiva.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-background/60 p-5">
                <h2 className="text-lg font-semibold text-foreground">Policy Updates</h2>
                <p className="mt-2 text-sm md:text-base leading-7 text-card-foreground/75">
                  This policy may be updated from time to time. Continued use of our services means you agree
                  to the latest version of this policy.
                </p>
              </div>

            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}