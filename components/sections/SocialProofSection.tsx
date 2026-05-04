import { SocialCard } from '@/components/cards/SocialCard';
import { Section } from '@/components/layout/Section';
import { socials } from '@/lib/socials';

export function SocialProofSection() {
  return (
    <Section className="border-b-0 bg-[#fffdfd] py-6 md:py-10 lg:py-12">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-5">
        {socials.map((social) => (
          <SocialCard key={social.id} social={social} />
        ))}
      </div>
    </Section>
  );
}