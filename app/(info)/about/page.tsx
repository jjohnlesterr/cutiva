import { InfoPageLayout } from '@/components/layout/InfoPageLayout';
import { BackToHome } from '@/components/ui/BackToHome';

export default function About() {
  return (
    <InfoPageLayout className="max-w-5xl">
      <BackToHome />

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.10)] backdrop-blur-sm md:p-10">
        <span className="inline-flex rounded-full border border-pink-400/20 bg-pink-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-pink-400">
          Who we are
        </span>

        <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
          About Cutiva
        </h1>

        <div className="mt-6 space-y-5 text-base leading-8 text-card-foreground/75 md:text-lg">
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
    </InfoPageLayout>
  );
}