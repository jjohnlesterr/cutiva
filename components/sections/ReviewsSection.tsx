import { ReviewCard } from '@/components/cards/ReviewCard';
import { Section } from '@/components/layout/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { reviews } from '@/lib/reviews';

export function ReviewsSection() {
  return (
    <Section
      id="reviews"
      className="bg-gradient-to-b from-[#fffdfd] to-[#fff8fc]"
    >
      <div className="space-y-8 md:space-y-12">
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          description="Real feedback from customers who trust Cutiva."
        />

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={review.text === 'CTA_FACEBOOK' ? 'col-span-2 md:col-span-1' : ''}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}