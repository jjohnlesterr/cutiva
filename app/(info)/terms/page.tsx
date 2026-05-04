import { InfoPageLayout } from '@/components/layout/InfoPageLayout';
import { BackToHome } from '@/components/ui/BackToHome';

const termsSections = [
  {
    title: 'Personal Use Only',
    description:
      'Accounts purchased through Cutiva are intended for personal use only. Sharing, reselling, or using the account in ways not allowed by the service may result in loss of access.',
  },
  {
    title: 'Account Responsibility',
    description:
      'Customers are responsible for following any usage instructions provided after purchase. Misuse, unauthorized changes, or violation of account rules may affect eligibility for support or replacement.',
  },
  {
    title: 'Payments and Finality',
    description:
      'All sales are generally considered final once account details have been delivered, unless otherwise stated. Please make sure to review the product and plan carefully before paying.',
  },
  {
    title: 'Replacement Policy',
    description:
      'Replacement eligibility depends on the specific product, plan duration, and the nature of the issue reported. If a problem occurs, customers should contact us as soon as possible for review and assistance.',
  },
  {
    title: 'Policy Updates',
    description:
      'These terms may be updated from time to time to reflect changes in services, process, or policies. Continued use of our services means you agree to the latest version posted on the site.',
  },
];

export default function Terms() {
  return (
    <InfoPageLayout>
      <BackToHome />

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.10)] backdrop-blur-sm md:p-10">
        <span className="inline-flex items-center rounded-full border border-pink-400/20 bg-pink-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-pink-400">
          Terms
        </span>

        <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Terms of Service
        </h1>

        <p className="mt-4 text-base leading-8 text-card-foreground/70 md:text-lg">
          By purchasing from Cutiva, you agree to the following terms and conditions.
          These terms are in place to keep transactions clear, fair, and smooth for both parties.
        </p>

        <div className="mt-8 space-y-6">
          {termsSections.map((section) => (
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