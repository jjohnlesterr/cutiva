import { MessageCircle, ShieldCheck, Star, Zap } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';

const features = [
  {
    icon: ShieldCheck,
    title: 'Affordable Prices',
    description: 'Budget-friendly premium access for everyday digital needs.',
  },
  {
    icon: Zap,
    title: 'Fast Transactions',
    description: 'Smooth and quick process from inquiry to delivery.',
  },
  {
    icon: Star,
    title: 'Trusted by Customers',
    description: 'Backed by real feedback and repeat buyers.',
  },
  {
    icon: MessageCircle,
    title: 'Responsive Support',
    description: 'Easy to reach anytime through official channels.',
  },
];

export function WhyChooseSection() {
  return (
    <Section>
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-16">
        
        {/* LEFT SIDE - HEADER */}
        <SectionHeader
          align="left"
          title="Why Choose Cutiva"
          description="Enjoy a smoother way to access premium digital tools with affordable pricing, fast transactions, and reliable support."
        />

        {/* RIGHT SIDE - CARDS */}
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card key={feature.title} className="p-3 md:p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-pink-50 text-pink-500 md:mb-4 md:h-11 md:w-11 md:rounded-2xl">
                  <Icon className="h-4 w-4 md:h-5 md:w-5" />
                </div>

                <h3 className="text-sm font-semibold leading-snug text-neutral-900 md:text-base">
                  {feature.title}
                </h3>

                <p className="mt-1.5 text-xs leading-relaxed text-neutral-600 md:mt-2 md:text-sm">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}