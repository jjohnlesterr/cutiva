import { SocialCard } from '@/components/ui/SocialCard';
import { socials } from '@/lib/socials';

export function SocialProofSection() {
  return (
    <section className="relative py-8 md:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {socials.map((social) => (
            <SocialCard key={social.id} social={social} />
          ))}
        </div>
      </div>
    </section>
  );
}