import { InfoPageLayout } from '@/components/layout/InfoPageLayout';
import { BackToHome } from '@/components/ui/BackToHome';

const privacySections = [
  {
    title: 'Information We Collect',
    description:
      'We only collect the information necessary to process your order and communicate with you. This may include your name, messaging account, and order details.',
  },
  {
    title: 'How We Use Information',
    description:
      'Your information is used strictly for order processing, updates, and customer support. We do not use your data for unrelated purposes.',
  },
  {
    title: 'Data Protection',
    description:
      'We take reasonable steps to keep your information secure and limit access only to what is necessary for handling transactions.',
  },
  {
    title: 'No Third-Party Sharing',
    description:
      'We do not sell, trade, or share your personal information with third parties. Your data stays private and is only used within Cutiva.',
  },
  {
    title: 'Policy Updates',
    description:
      'This policy may be updated from time to time. Continued use of our services means you agree to the latest version of this policy.',
  },
];

export default function Privacy() {
  return (
    <InfoPageLayout>
      <BackToHome />

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.10)] backdrop-blur-sm md:p-10">
        <span className="inline-flex items-center rounded-full border border-pink-400/20 bg-pink-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-pink-400">
          Privacy
        </span>

        <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-4 text-base leading-8 text-card-foreground/70 md:text-lg">
          Your privacy matters to us. This page explains how your information is handled when you interact with Cutiva.
        </p>

        <div className="mt-8 space-y-6">
          {privacySections.map((section) => (
            <InfoBlock key={section.title} {...section} />
          ))}
        </div>
      </section>
    </InfoPageLayout>
  );
}

function InfoBlock({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-background/60 p-5">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <p className="mt-2 text-sm leading-7 text-card-foreground/75 md:text-base">
        {description}
      </p>
    </div>
  );
}