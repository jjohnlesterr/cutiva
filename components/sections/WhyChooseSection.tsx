import { ShieldCheck, Zap, Star, MessageCircle } from 'lucide-react';

export function WhyChooseSection() {
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

  return (
    <section className="border-b border-pink-100 bg-[#fffdfd] py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-16">
          
          {/* Left content */}
          <div className="space-y-4 text-center md:text-left">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold leading-tight text-neutral-950 md:text-5xl">
                Why Choose Cutiva
              </h2>

              <p className="mx-auto max-w-md text-sm leading-relaxed text-neutral-600 md:mx-0 md:text-lg">
                Enjoy a smoother way to access premium digital tools with
                affordable pricing, fast transactions, and reliable support.
              </p>
            </div>
          </div>

          {/* Right cards */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-pink-100 bg-white p-3 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-[0_16px_32px_rgba(236,72,153,0.10)] md:rounded-[1.5rem] md:p-5"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-pink-50 text-pink-500 md:mb-4 md:h-11 md:w-11 md:rounded-2xl">
                    <Icon className="h-4 w-4 md:h-5 md:w-5" />
                  </div>

                  <h3 className="text-sm font-semibold leading-snug text-neutral-900 md:text-base">
                    {feature.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-neutral-600 md:mt-2 md:text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}