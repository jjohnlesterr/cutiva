import { FaFacebook, FaTelegramPlane } from 'react-icons/fa';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { IconCircle } from '@/components/ui/IconCircle';

const steps = [
  {
    number: '01',
    title: 'Choose your product',
    description: 'Browse our collection and pick what you need',
  },
  {
    number: '02',
    title: 'Message us',
    description: 'Reach out via Facebook or Telegram',
  },
  {
    number: '03',
    title: 'Confirm & pay',
    description: 'We’ll verify details and finalize payment',
  },
  {
    number: '04',
    title: 'Get access',
    description: 'Receive your premium account instantly',
  },
];

const channels = [
  {
    name: 'Facebook',
    description: 'Message us directly',
    url: 'https://www.facebook.com/profile.php?id=61585690502630',
    icon: FaFacebook,
    iconClassName: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Telegram',
    description: 'Chat with us instantly',
    url: 'https://t.me/cutivaprems',
    icon: FaTelegramPlane,
    iconClassName: 'from-sky-400 to-blue-500',
  },
];

export function HowToOrderSection() {
  return (
    <Section id="how-to-order">
      <div className="space-y-10 md:space-y-16">
        <SectionHeader
          title="How to Order"
          description="Getting your premium account is quick and easy — just follow these steps."
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="group relative p-3 shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_rgba(236,72,153,0.12)] md:p-6"
            >
              <IconCircle className="mb-3 h-9 w-9 from-pink-500 to-rose-400 text-xs font-bold md:mb-4 md:h-12 md:w-12 md:text-base">
                {step.number}
              </IconCircle>

              <h3 className="text-sm font-semibold text-neutral-900 md:text-base">
                {step.title}
              </h3>

              <p className="mt-1 text-xs text-neutral-600 md:mt-2 md:text-sm">
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
          {channels.map((channel) => {
            const Icon = channel.icon;

            return (
              <a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="group flex items-center justify-between px-4 py-3 shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:translate-y-0 hover:shadow-[0_10px_30px_rgba(236,72,153,0.12)] md:px-6 md:py-5">
                  <div className="flex items-center gap-3 md:gap-4">
                    <IconCircle
                      className={`h-9 w-9 text-sm transition group-hover:scale-110 md:h-11 md:w-11 md:text-lg ${channel.iconClassName}`}
                    >
                      <Icon />
                    </IconCircle>

                    <div>
                      <p className="text-sm font-semibold text-neutral-900 md:text-base">
                        {channel.name}
                      </p>
                      <p className="text-xs text-neutral-500 md:text-sm">
                        {channel.description}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-medium text-pink-600 transition group-hover:translate-x-1 md:text-sm">
                    Open →
                  </span>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}