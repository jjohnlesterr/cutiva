import { SocialCard } from '@/components/ui/SocialCard';
import { socials } from '@/lib/socials';

export function SocialProofSection() {
  return (
    <section className="relative py-6 md:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-5">
          {socials.map((social) => (
            <SocialCard key={social.id} social={social} />
          ))}
        </div>
      </div>
    </section>
  );
}